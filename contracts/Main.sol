// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloWorld {
    string public message;

    constructor() {     
    }

    

    function setMessage(string memory _message) public {
        message = _message;
    }
}
