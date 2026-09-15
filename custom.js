        const button = document.getElementById("submitBTN");
        const firstNameInput = document.getElementById("fname");
        const lastNameInput = document.getElementById("lname");
        const displayNameDiv = document.getElementById("displayName");
        const modal = document.getElementById("bookModal");
        const closeBtn = document.getElementById("closeModalBtn");

        button.addEventListener('click', function() {
            const fname = firstNameInput.value.trim();
            const lname = lastNameInput.value.trim();

            if (fname === "" || lname === "") {
                alert("Please enter both a first name and a last name.");
                return; 
            }

            displayNameDiv.textContent = fname + " " + lname;
            modal.style.display = "flex";
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "flex") {
                modal.style.display = "none";
            }
        });