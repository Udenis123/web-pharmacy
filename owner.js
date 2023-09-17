function toggleForm() {
    const form = document.getElementById("update");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
  function toggleForm1() {
    const form = document.getElementById("add");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
  function toggleForm2() {
    const form = document.getElementById("table-body");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
  function toggleForm3() {
    const form = document.getElementById("insurance");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

  // ... Existing functions ...

  
  function handleFormSubmit() {
      const medName = document.getElementById("medName").value;
      const medType = document.getElementById("medType").value;
      const medDescription = document.getElementById("medDescription").value;
      const quantity = document.getElementById("quantity").value;
      const price = document.getElementById("price").value;
      const imageInput = document.getElementById("image-input");
      const imageFile = imageInput.files[0];
  
      const tableBody = document.getElementById("table-body");
  
      
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
      const cell5 = newRow.insertCell(4);
      const cell6 = newRow.insertCell(5);
      const cell7 = newRow.insertCell(6);
      const cell8 = newRow.insertCell(7);
  
      cell1.innerHTML = medName;
      cell2.innerHTML = medType;
      cell3.innerHTML = medDescription;
      cell4.innerHTML = quantity;
      cell5.innerHTML = price;
  
      // Set Status of Stock based on quantity
      if (parseInt(quantity) > 10) {
          cell6.innerHTML = "High";
      } else {
          cell6.innerHTML = "Low";
      }
  
      cell7.innerHTML = `<img src="${URL.createObjectURL(imageFile)}" alt="Medicine Image" width="100">`;
  
      // Add Store and Delete buttons
      const storeButton = document.createElement("button");
      storeButton.innerText = "Store";
      storeButton.addEventListener("click", function() {
          // Add your store logic here
          alert("Store button clicked");
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function() {
          // Add your delete logic here
          alert("Delete button clicked");
      });
  
      cell8.appendChild(storeButton);
      cell8.appendChild(deleteButton);
  
      // Clear form fields after adding data
      document.getElementById("medName").value = "";
      document.getElementById("medType").value = "";
      document.getElementById("medDescription").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("price").value = "";
      imageInput.value = "";
  }
 
  
  




