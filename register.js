
function openRegister() {
  document.getElementById('register-card').style.display = 'block';
  document.getElementById('register-card').scrollIntoView({ behavior: 'smooth' });
}

function closeRegister() {
  document.getElementById('register-card').style.display = 'none';
}

document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Create data object
  const formData = {
    name: name,
    age: age,
    phone: phone,
    email: email,
  };

  // Get previous data if exists
  let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  // Add new form data
  registrations.push(formData);

  // Save back to localStorage
  localStorage.setItem("registrations", JSON.stringify(registrations));

  alert("Registration Successful!");

  const myjson = JSON.parse(localStorage.getItem("registrations")) || [];

  // Print it to the console to verify
  console.log("Retrieved Data:", myjson);

  // Reset form and close
  this.reset();
  closeRegister();

});

// function showRegistrants() {
//   const data = JSON.parse(localStorage.getItem("registrations")) || [];
//   const section = document.getElementById("registrants-section");
//   const tbody = document.querySelector("#registrants-table tbody");
//   section.style.display = "block";
//   tbody.innerHTML = ""; // Clear table

//   data.forEach((user, index) => {
//     const row = document.createElement("tr");

//     row.innerHTML = `
//         <td><input value="${user.name}" onchange="updateField(${index}, 'name', this.value)" /></td>
//         <td><input value="${user.age}" onchange="updateField(${index}, 'age', this.value)" /></td>
//         <td><input value="${user.phone}" onchange="updateField(${index}, 'phone', this.value)" /></td>
//         <td><input value="${user.email}" onchange="updateField(${index}, 'email', this.value)" /></td>
//         <td>
//           <button onclick="deleteRegistrant(${index})">Delete</button>
//         </td>
//       `;

//     tbody.appendChild(row);
//   });
// }

// function updateField(index, field, value) {
//   let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
//   registrations[index][field] = value;
//   localStorage.setItem("registrations", JSON.stringify(registrations));
// }

// function deleteRegistrant(index) {
//   let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
//   if (confirm("Are you sure you want to delete this registrant?")) {
//     registrations.splice(index, 1);
//     localStorage.setItem("registrations", JSON.stringify(registrations));
//     showRegistrants(); // Refresh list
//   }
// }

