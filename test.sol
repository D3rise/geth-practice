// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

contract StringStorage {
    string testString;

    function setString(string memory newString) public {
        testString = newString;
    }

    function getString() public view returns (string memory) {
        return testString;
    }
}
