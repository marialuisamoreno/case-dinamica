import swal from 'sweetalert';

export const successPackCancelled = () => {
    swal("Success", "Package cancelled", "success");
}

export const errorCallingAPI = () => {
    swal("API request failed", "Please, contact the Support Team.", "error").then((value) => {
        window.location.href = "/front";
    });
}