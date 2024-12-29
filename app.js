var selectedRow = null;

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  document.querySelector(".alert-container").appendChild(div);

  // إزالة التنبيه بعد 3 ثوانٍ
  setTimeout(
    () => document.querySelector(".alert-container").removeChild(div),
    3000
  );
}

function clearFields() {
  document.querySelector("#fName").value = "";
  document.querySelector("#lName").value = "";
  document.querySelector("#jDate").value = "";
  document.querySelector("#salary").value = "";
}

//create
document.querySelector("#employee-form").addEventListener("submit", (e) => {
  e.preventDefault();

  var firstname = document.querySelector("#fName").value;
  var lastname = document.querySelector("#lName").value;
  var joindate = document.querySelector("#jDate").value;
  var salary = document.querySelector("#Salary").value;

  if (selectedRow == null) {
    const list = document.querySelector("#crudList");
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${joindate}</td>
            <td>${salary}</td>
            <td>
                <button class="btn btn-warning btn-sm edit">Edit</button>
                <button class="btn btn-danger btn-sm delete">Delete</button>
            </td>
        `;
    list.appendChild(row);
    showAlert("Employee Added", "success");
  } else {
    // تعديل البيانات في الصف المحدد
    selectedRow.children[0].textContent = firstname;
    selectedRow.children[1].textContent = lastname;
    selectedRow.children[2].textContent = joindate;
    selectedRow.children[3].textContent = salary;
    showAlert("Employee Updated", "info");
    selectedRow = null;
  }

  clearFields();
});
