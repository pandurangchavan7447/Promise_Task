const cl = console.log;
function snackBar(msg, icon) {

    Swal.fire({
        title: msg,
        icon: icon,
        timer: 3000
    });

}


// ===============================
// 1. Get User By ID
// ===============================

function getUserById(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.5;

            if (success) {

                let user = {
                    userId: id,
                    userName: "Pandurang",
                    email: "pandurang@gmail.com",
                    role: "ADMIN"
                };

                resolve(user);

            } else {

                let error = "User not found....";

                reject(error);
            }

        }, 900);

    });
}


// ===============================
// 2. Get User Orders
// ===============================

function getUserOrdersDetails(user) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.5;

            if (success) {

                let orders = {
                    userId: user.userId,
                    orderIds: [101, 102, 103]
                };

                resolve(orders);

            } else {

                let error = "User orders not found....";

                reject(error);
            }

        }, 900);

    });
}


// ===============================
// 3. Get Order Details
// ===============================

function getOrdersDetails(productId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.5;

            if (success) {

                let product = {

                    productId: productId,
                    productName: "iPhone 17",
                    price: 80000,
                    quantity: 1,
                    status: "Delivered"

                };

                resolve(product);

            } else {

                let error = "Product details not found....";

                reject(error);
            }

        }, 900);

    });
}


// ===============================
// 4. Rendering On UI
// ===============================

function renderingOnUI(object) {

    cl("Rendering object:", object);

    let html = `
    
        <div class="card mt-4">

            <div class="card-body">

                <h3>${object.productName}</h3>

                <p>
                    Product ID: ${object.productId}
                </p>

                <p>
                    Price: ₹${object.price}
                </p>

                <p>
                    Quantity: ${object.quantity}
                </p>

                <p>
                    Status: ${object.status}
                </p>

            </div>

        </div>

    `;

    document.body.innerHTML += html;
}


// ===============================
// Main Function
// ===============================

async function init() {

    try {

        // Step 1
        let user = await getUserById(123);

        cl("User:", user);

        snackBar("User fetched successfully", "success");


        // Step 2
        let orders = await getUserOrdersDetails(user);

        cl("Orders:", orders);


        // Step 3
        let productId = orders.orderIds[0];

        let product = await getOrdersDetails(productId);

        cl("Product:", product);


        // Step 4
        renderingOnUI(product);

        snackBar("Product details loaded successfully", "success");

    }

    catch (error) {

        cl("Error:", error);

        snackBar(error, "error");

    }

}


init();

