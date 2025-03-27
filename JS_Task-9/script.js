document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const userTableBody = document.getElementById("userTableBody");

    // Handle form submission
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let address = document.getElementById("address").value.trim();

            if (name && email && contact && address) {
                let users = JSON.parse(localStorage.getItem("users")) || [];
                users.push({ name, email, contact, address });
                localStorage.setItem("users", JSON.stringify(users));

                alert("User registered successfully!");
                form.reset();
            }
        });
    }

    // Display stored users in the table
    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTableBody.innerHTML += row;
        });
    }
});
