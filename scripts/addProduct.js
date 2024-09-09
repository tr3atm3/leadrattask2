const imageSelectInput = document.querySelector("#upload-image");
const nameInput = document.querySelector("#nameInput");
const genderInput = document.querySelector("#genderInput");
const priceInput = document.querySelector("#priceInput");
const currencyInput = document.querySelector("#currencyInput");
const colorInput = document.querySelector("#colorInput");
const quantityInput = document.querySelector("#quantityInput");
const uploadImageText = document.querySelector(".upload-image-text");

const imageSelectbtn = document.querySelector(".upload-image-button");
const resetBtn = document.querySelector(".reset-btn");
const saveBtn = document.querySelector(".save-btn");

const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get("index");

imageSelectbtn.addEventListener("click", function (e) {
  e.preventDefault();
  imageSelectInput.click();
});

imageSelectInput.addEventListener("change", function () {
  if (imageSelectInput.files.length > 0) {
    uploadImageText.textContent = imageSelectInput.value;
  }
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();

  nameInput.value = "";
  genderInput.value = "";
  priceInput.value = "";
  currencyInput.value = "";
  colorInput.value = "";
  quantityInput.value = "";
  imageSelectInput.value = "";
  uploadImageText.textContent = "Choose Image";
});

saveBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Check if all required fields are filled
  if (
    nameInput.value &&
    genderInput.value &&
    priceInput.value &&
    currencyInput.value &&
    colorInput.value &&
    quantityInput.value &&
    (imageSelectInput.value || uploadImageText.textContent !== "Choose Image")
  ) {
    let allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];

    const productExists = allProducts.some(
      (product) =>
        product.name === nameInput.value &&
        product.color === colorInput.value &&
        product.gender === genderInput.value
    );

    if (productExists) {
      alert(
        "Product with the same name, color, and gender already exists!, You can update it in the Products Listing Page"
      );
    } else {
      const product = {
        name: nameInput.value,
        gender: genderInput.value,
        price: priceInput.value,
        currency: currencyInput.value,
        quantity: quantityInput.value,
        image: imageSelectInput.value || uploadImageText.textContent,
        color: colorInput.value,
      };

      allProducts.push(product);

      resetBtn.click();
      localStorage.setItem("allProducts", JSON.stringify(allProducts));
      alert("Product Added");
    }
  } else {
    alert("Please fill all the fields");
  }
});

if (index) {
  let allProducts = JSON.parse(localStorage.getItem("allProducts"));

  let updatedAllProducts = allProducts.filter(
    (product) => Number(product.sNum) !== Number(index)
  );

  let productToEdit = allProducts.filter(
    (product) => Number(product.sNum) === Number(index)
  )[0];

  nameInput.value = productToEdit.name;
  genderInput.value = productToEdit.gender;
  priceInput.value = productToEdit.price;
  currencyInput.value = productToEdit.currency;
  colorInput.value = productToEdit.color;
  quantityInput.value = productToEdit.quantity;

  uploadImageText.textContent = productToEdit.image;

  localStorage.setItem("allProducts", JSON.stringify(updatedAllProducts));
}
