const cl = console.log;

function snackBar(msg, icon) {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 2000
    });
}

function ProductDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let success = Math.random() < 0.5;

            if (success) {
                let msg = "Product Details fetched successfully...";
                resolve(msg);
            } else {
                let error = "Something went wrong...";
                reject(error);
            }

        }, 900);
    });
}

async function init() {
    try {
        let res = await ProductDetails();
        cl(res);
        snackBar(res, "success");

    } catch (error) {
        cl(error);
        snackBar(error, "error");
    }
}
init();

