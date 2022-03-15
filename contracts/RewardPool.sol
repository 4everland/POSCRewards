// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

contract RewardPool is Ownable {

	using SafeMath for uint256;
	using SafeERC20 for IERC20;

	struct Pool {
		address holder;
		uint256 open;
		uint256 close;
		uint256 lastUpdated;
		uint256 realised;
		uint256 claimed;
	}

	struct Holder {
		uint256 pid;
		string node;
	}

	IERC20 public token;

	Pool[] public pools;

	uint256 public rewardPerBlock;

	uint256 public opens;

	mapping(address => Holder) public holders;

	event Open(uint256 indexed pid);

	event Close(uint256 indexed pid);

	event SetNode(uint256 indexed pid, address indexed holder, string node);

	event SetRewardPerBlock(uint256 rewardPerBlock);

	event Claim(uint256 indexed pid, address indexed holder, uint256 amount);

	event Withdrawal(address indexed to, uint256 amount);

	constructor(address admin, IERC20 token_, uint256 rewardPerBlock_) {
		_transferOwnership(admin);
		_setRewardPerBlock(rewardPerBlock_);
		token = token_;
	}

	function open(address holder_,  string memory node_) external onlyOwner { 
		require(holder_ != address(0), 'RewardPool: invalid holder.');
		require(bytes(node_).length > 0, 'RewardPool: invalid node.');
		require(!holderExists(holder_), 'RewardPool: holder exists.');

		uint256 pid = poolLength();
		holders[holder_] = Holder({
			pid: pid,
			node: node_
		});

		pools.push(Pool({
			holder: holder_,
			open: block.number,
			close: 0,
			lastUpdated: block.number,
			realised: 0,
			claimed: 0
		}));

		opens++;
	
		updatePools();

		emit Open(pid);	
		emit SetNode(pid, holder_, node_);
	}

	function close(uint256 pid) external onlyOwner onlyExists(pid) {
		require(!isClosed(pid), 'RewardPool: pool closed.');
		pools[pid].close = block.number;
		_claim(pid, holder(pid));
		opens--;
		updatePools();
		emit Close(pid);
	}

	function setRewardPerBlock(uint256 rewardPerBlock_) external onlyOwner {
		updatePools();
		_setRewardPerBlock(rewardPerBlock_);
	}

	function setNode(address to, string memory node_) external onlyOwner {
		require(holderExists(to), 'RewardPool: nonexistent holder.');
		require(bytes(node_).length > 0, 'RewardPool: invalid node.');
		holders[to].node = node_;

		emit SetNode(holders[to].pid, to, node_);
	}

	function unrealised(uint256 pid) public view returns(uint256) {
		uint256 end = isClosed(pid)? pools[pid].close: block.number;
		uint256 diff = end.sub(pools[pid].lastUpdated);
		return rewardPerBlock.mul(diff).div(opens);
	}

	function reward(uint256 pid) public view returns(uint256) {
		return pools[pid].realised.add(unrealised(pid));
	}

	function nodeList() public view returns(string[] memory nodes_) {
		nodes_ = new string[](poolLength());
		for (uint256 i = 0; i < poolLength(); i++) {
			address to = holder(i);
			nodes_[i] = holders[to].node;
		}
	}

	function withdraw(address to, uint256 amount) external onlyOwner {
		token.safeTransfer(to, amount);
		emit Withdrawal(to, amount);
	}

	function claim(address to) external {
		require(holderExists(msg.sender), 'RewardPool: nonexistent holder.');
		uint256 pid = holders[msg.sender].pid;
		require(!isClosed(pid), 'RewardPool: pool closed.');
		_claim(pid, to);
	}

	function _claim(uint256 pid, address to) internal returns(uint256 reward_) {
		reward_ = reward(pid);
		require(reward_ > 0, 'RewardPool: no reward to claim.');
		pools[pid].claimed = pools[pid].claimed.add(reward_);
		pools[pid].lastUpdated = block.number;
		pools[pid].realised = 0;
		token.safeTransfer(to, reward_);

		emit Claim(pid, holder(pid), reward_);
	}

	function updatePools() public {
		for(uint256 pid = 0; pid < poolLength(); pid++) {
			if (isClosed(pid)) {
				continue;
			}
			pools[pid].realised = pools[pid].realised.add(unrealised(pid));
			pools[pid].lastUpdated = block.number;
		}
	}

	function _setRewardPerBlock(uint256 rewardPerBlock_) internal {
		require(rewardPerBlock_ != 0 , 'RewardPool: invalid params.');
		rewardPerBlock = rewardPerBlock_;

		emit SetRewardPerBlock(rewardPerBlock_);
	}

	function accumulatedReward(uint256 pid) public view onlyExists(pid) returns(uint256) {
		return pools[pid].claimed.add(reward(pid));
	}

	function node(address holder_) public view returns(string memory) {
		return holders[holder_].node;
	}

	function holder(uint256 pid) public view onlyExists(pid) returns(address) {
		return pools[pid].holder;
	}

	function claimed(uint256 pid) public view returns(uint256) {
		return pools[pid].claimed;
	}

	function opened(uint256 pid) public view onlyExists(pid) returns(uint256) {
		return pools[pid].open;
	}

	function closed(uint256 pid) public view onlyExists(pid) returns(uint256) {
		return pools[pid].close;
	}

	function holderExists(address holder_) public view returns(bool) {
		return bytes(holders[holder_].node).length > 0;
	}

	function poolLength() public view returns(uint256) {
		return pools.length;
	}

	function isClosed(uint256 pid) public view onlyExists(pid) returns(bool) {
		return pools[pid].close != 0;
	}

	function _exists(uint256 pid) internal view returns(bool) {
		return pid < poolLength();
	}

	modifier onlyExists(uint256 pid) {
		require(_exists(pid), 'RewardPool: nonexistent pool.');
		_;
	}

}