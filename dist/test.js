import Web3 from "web3";
export const toWei = (n) => Web3.utils.toWei(n.toString(), "ether");
