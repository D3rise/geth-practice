// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

contract Payable {
    address payable public owner;
    event Received(uint256 count);

    constructor() payable {
        owner = payable(msg.sender);
    }

    function deposit() public payable {
        emit Received(msg.value);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() public {
        uint256 amount = address(this).balance;

        require(owner.send(amount), "Failed to send Ether");
    }

    function transfer(address payable _to, uint256 _amount) public {
        uint256 amount = address(this).balance;
        require(_amount <= amount, "Not enough Ether");

        require(_to.send(_amount), "Failed to send Ether");
    }
}
