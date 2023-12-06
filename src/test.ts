import Web3 from "web3";

export const toWei = (n: number) => Web3.utils.toWei(n.toString(), "ether");
