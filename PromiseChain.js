const cl = console.log;

function snackBar(msg, icon) {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 3000,
        showConfirmButton: false
    });
}


// HR API call
function Hrcall() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() < 0.5;

            if (success) {

                let msg = 'Candidate shortlisted for first round...';

                resolve(msg);

            } else {

                let error = 'Looking for a new candidate...';

                reject(error);
            }

        }, 9000);
    });
}


// First Interview API call
function FirstInterview() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() >= 0.1;

            if (success) {

                let msg = 'Candidate shortlisted for Second round';

                resolve(msg);

            } else {

                let error = 'Candidate not shortlisted';

                reject(error);
            }

        }, 9000);
    });
}


// Second Interview API call
function SecondInterview() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() < 0.5;

            if (success) {

                let msg = 'Candidate shortlisted for third round';

                resolve(msg);

            } else {

                let error = 'Candidate practical knowledge is poor';

                reject(error);
            }

        }, 9000);
    });
}


// Third Interview API call
function ThirdInterview() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() < 0.5;

            if (success) {

                let msg = 'Candidate shortlisted for final round...';

                resolve(msg);

            } else {

                let error = 'Candidate has poor communication skills!';

                reject(error);
            }

        }, 9000);
    });
}


// Promise chain
Hrcall()

    .then((res) => {

        cl(res);
        snackBar(res, 'success');

        return FirstInterview();
    })

    .then((res) => {

        cl(res);
        snackBar(res, 'success');

        return SecondInterview();
    })

    .then((res) => {

        cl(res);
        snackBar(res, 'success');

        return ThirdInterview();
    })

    .then((res) => {

        cl(res);
        snackBar(res, 'success');

    })

    .catch((err) => {

        cl(err);
        snackBar(err, 'error');

    });