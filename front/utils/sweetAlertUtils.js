// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

export const warningMsg = function(text) {
    Swal.fire({
        title: 'Error!',
        text: text,
        icon: 'error',
        confirmButtonText: 'Ok',
      })
}

export const successMsg = function(text) {
    Swal.fire({
        title: 'Success!',
        text: text,
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}

