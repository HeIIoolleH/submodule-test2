import Swal from "sweetalert2";
import Web3 from "web3";

export const toWei = (n: number) => Web3.utils.toWei(n.toString(), "ether");

export const errorAlert = (message: string) => {
    Swal.fire({
        icon: "error",
        title: "Error",
        html: message,
        confirmButtonText: "Close",
        confirmButtonColor: "#5888ff",
        heightAuto: false,
    });
};
