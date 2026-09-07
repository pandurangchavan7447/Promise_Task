const cl = console.log;

function snackBar(msg, icon) {

    Swal.fire({

        title: msg,

        icon: icon,

        timer: 3000,

        showConfirmButton: false

    });

}

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        let success = Math.random() >= 0.5;

        if (success) {

            let msg = "Login Successfully...";

            resolve(msg);

        } else {

            let err = "Login failed, wrong password";

            reject(err);

        }

    }, 900);

});

promise

    .then((res) => {

        cl(res);

        snackBar(res, "success");

    })

    .catch((rej) => {

        cl(rej);

        snackBar(rej, "error");

    });