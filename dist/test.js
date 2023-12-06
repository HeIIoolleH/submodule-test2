import Swal from "sweetalert2";
import Web3 from "web3";
export const toWei = (n) => Web3.utils.toWei(n.toString(), "ether");
export const errorAlert = (message) => {
    Swal.fire({
        icon: "error",
        title: "Error",
        html: message,
        confirmButtonText: "Close",
        confirmButtonColor: "#5888ff",
        heightAuto: false,
    });
};
