const form = document.querySelector('form');
const pharmaciesList = document.querySelector('#pharmacies');
const orderBtn = document.querySelector('#order-btn');
const medicationList = document.querySelector('#list-of-medication');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const province = document.querySelector('#location').value;
  const district = document.querySelector('#district').value;
  const sector = document.querySelector('#sector').value;
  
  const pharmacies = getPharmaciesByLocation(province, district, sector);

  pharmaciesList.innerHTML = '';

  pharmacies.forEach((pharmacy) => {
    const li = document.createElement('li');
    li.textContent = `${pharmacy.name} - ${pharmacy.address}`;
    li.addEventListener('click', () => {
      selectPharmacy(pharmacy);
    });
    li.addEventListener('mouseover', () => {
      li.style.backgroundColor = '#f0f0f0';
    });
    li.addEventListener('mouseout', () => {
      li.style.backgroundColor = '';
    });
    pharmaciesList.appendChild(li);
  });
});

function selectPharmacy(pharmacy) {
  // Update the order button text to include the selected pharmacy
  orderBtn.textContent = `Order Medication from ${pharmacy.name}`;
  
  // Enable the order button
  orderBtn.disabled = false;
  
  
  // Store the selected pharmacy in localStorage
  localStorage.setItem('selectedPharmacy', JSON.stringify(pharmacy));
}

orderBtn.addEventListener('click', () => {
  // Get the selected pharmacy from localStorage
  const selectedPharmacy = JSON.parse(localStorage.getItem('selectedPharmacy'));
  
  medicationList.style.display = 'block';
});

function getPharmaciesByLocation(province, district, sector) {
  const pharmacies = [];

  if (province === '1' && district === '1' && sector === '1') {
    pharmacies.push(
      { name: 'Pharmacy 1E', address: 'KNK 500 Ave.' },
      { name: 'Pharmacy 1Q', address: ' KNK 405 Rd.' }
    );
  } else if (province === '1' && district === '1') {
    pharmacies.push(
      { name: 'Pharmacy 1G', address: 'KN Main St.' },
      { name: 'Pharmacy 1E', address: 'KN 500 Ave.' },
      { name: 'Pharmacy 1Q', address: ' KN 405 Rd.' },
      { name: 'Pharmacy 1F', address: 'KN 407 St.' }
    );
  } else if (province === '1') {
    pharmacies.push(
       { name: 'Pharmacy 1A', address: 'KK 300 St.' },
      { name: 'Pharmacy 1B', address: 'KK 200 St.' },
      { name: 'Pharmacy 1C', address: 'KG 105 St.' },
      { name: 'Pharmacy 1D', address: 'KG 400 Ave.' },
      { name: 'Pharmacy 1E', address: 'KN 500 Ave.' },
      { name: 'Pharmacy 1F', address: 'KN 407 St.' }
    );
  }

  return pharmacies;
}
// code for odering system
var cartItems = [];

function addToCart(productName) {
cartItems.push(productName);
updateCart();
}

function updateCart() {
var cartList = document.getElementById("cart-items");
cartList.innerHTML = "";
cartItems.forEach(function(item) {
  var li = document.createElement("li");
  li.innerText = item;
  cartList.appendChild(li);
});
}

function checkout() {
if (cartItems.length === 0) {
  alert("Your cart is empty. Please add items before proceeding.");
} else {
  alert("Thank you for your order!");
  cartItems = [];
  updateCart();
}
}
const imageUploadInput = document.getElementById("image-upload");
const profileImage = document.getElementById("profile-image");
const uploadLabel = document.getElementById("upload-label");

// Add an event listener to the file input
imageUploadInput.addEventListener("change", function () {
    const file = this.files[0];

    // Check if a file was selected
    if (file) {
        // Read the selected image file and display it
        const reader = new FileReader();

        reader.onload = function (e) {
            // Set the source of the profile image to the uploaded image
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

// Display the upload label on hover
profileImage.addEventListener("mouseenter", function () {
    uploadLabel.style.display = "block";
});

// Hide the upload label when not hovered
profileImage.addEventListener("mouseleave", function () {
    uploadLabel.style.display = "none";
});

