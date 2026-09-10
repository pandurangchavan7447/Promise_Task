
const cl = console.log;

function snackBar(msg, icon) {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 3000
    });
}

function login() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() < 0.5;

            if (success) {

                let data = {
                    token: "JWT TOKEN",
                    userRole: "ADMIN",
                    msg: "Login Successfully...!"
                };

                resolve(data);

            } else {

                let err = {
                    msg: "Invalid email or password!!!!"
                };

                reject(err);
            }

        }, 900);
    });
}


function redirectToDashboard() {
    cl("Dashboard is Loaded...");
}


async function onloginSubmit(event) {

    // Stop form from refreshing the page
    event.preventDefault();

    try {

        let res = await login();

        cl(res);

        // Save token in localStorage
        localStorage.setItem("token", res.token);
        localStorage.setItem("userRole", res.userRole);

        redirectToDashboard();

        snackBar(res.msg, "success");

    } catch (error) {

        cl(error);

        snackBar(error.msg, "error");
    }
}


// Get form from HTML
const loginForm = document.getElementById("loginform");

// Add submit event
loginForm.addEventListener("submit", onloginSubmit);

