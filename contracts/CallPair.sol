pragma solidity =0.8.6;
import './HashPair.sol';

contract CallPair {
    function getInitHash() public pure returns(bytes32){
        bytes memory bytecode = type(HashPair).creationCode;
        return keccak256(abi.encodePacked(bytecode));
    }
}