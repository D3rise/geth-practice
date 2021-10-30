// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

contract StringHolder {
    string ourString = "Hello World!";

    function getString() public view returns (string memory) {
        return ourString;
    }

    function setString(string memory newString) public {
        ourString = newString;
    }
}
