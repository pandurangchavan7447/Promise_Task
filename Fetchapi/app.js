const cl = console.log;

// first API URL
const BASE_URL = "https://jsonplaceholder.typicode.com";
const POST_URL = `${BASE_URL}/posts`;

// Create XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Open GET request
xhr.open("GET", POST_URL, true);

// Send request
xhr.send();

// Handle response
xhr.onload = function () {

    // Check successful response
    if (xhr.status === 200) {

        // Convert JSON string into JavaScript array
        let data = JSON.parse(xhr.response);

        cl("API Data:", data);

        // Empty string to store HTML
        let result = "";

        // Loop through posts
        data.forEach(post => {

            result += 
                <div class="col-md-4 mb-4">

                    <div class="card h-100 shadow-sm">

                        <div class="card-header">
                            <h5 class="m-0">
                                ${post.title}
                            </h5>
                        </div>

                        <div class="card-body">

                            <p class="mb-0">
                                ${post.body}
                            </p>

                        </div>

                        <div class="card-footer d-flex justify-content-between">

                            <button
                                class="btn btn-sm btn-primary"
                                onclick="editPost(${post.id})">
                                Edit
                            </button>

                            <button
                                class="btn btn-sm btn-danger"
                                onclick="removePost(${post.id})">
                                Remove
                            </button>

                        </div>

                    </div>

                </div>
            
        });

       // Get HTML container
        const postContainer =
            document.getElementById("postsContainer");

        // Display API data
        postContainer.innerHTML = result;

    } else {

        cl("API call failed");
        cl("Status:", xhr.status);
    }
};


// Edit function
function editPost(id) {

    cl("Edit Post ID:", id);

}


// Remove function
function removePost(id) {

    cl("Remove Post ID:", id);

} 