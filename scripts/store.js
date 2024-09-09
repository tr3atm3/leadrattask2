const allProducts = JSON.parse(localStorage.getItem("allProducts"));
const productsContainer = document.querySelector(".store-products-display");

allProducts.forEach((product) => {
  productsContainer.appendChild(createItem(product));
});

function createItem(product) {
  let itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  console.log(product);

  let itemImage = createItemImageBox(product.image);

  let itemContent = createItemContentBox(product);

  itemContainer.appendChild(itemImage);
  itemContainer.appendChild(itemContent);
  return itemContainer;
}

function createItemImageBox(imageUrl) {
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("item-image-container");
  let image = document.createElement("img");

  image.src = `../images/${imageUrl.slice(12)}`;

  image.classList.add("item-image");
  imageContainer.appendChild(image);
  return imageContainer;
}

function createItemContentBox(product) {
  let itemContent = document.createElement("div");
  itemContent.classList.add("item-content");

  let itemName = document.createElement("h2");
  itemName.classList.add("item-content-header");
  itemName.textContent = `${product.color} ${product.name}`;

  itemContent.appendChild(itemName);

  let itemPrice = document.createElement("span");
  itemPrice.classList.add("item-content-price");
  itemPrice.textContent = `${product.price}`;
  itemContent.appendChild(itemPrice);

  let additionalDetails = document.createElement("ul");
  additionalDetails.classList.add("item-content-additional-details");

  let forDetails = createAdditionalDetailsInfo({
    detailType: "for",
    detailValue: `${product.gender}`,
  });
  let clothType = createAdditionalDetailsInfo({
    detailType: "cloth type",
    detailValue: "Cotton",
  });

  additionalDetails.appendChild(forDetails);
  additionalDetails.appendChild(clothType);

  itemContent.appendChild(additionalDetails);

  let addToCartBtn = createAddToCartBtn();

  let functionalBtns = createFunctionItemBtn();

  itemContent.appendChild(addToCartBtn);

  return itemContent;
}

function createAdditionalDetailsInfo(details) {
  let additionalDetailsInfo = document.createElement("li");
  additionalDetailsInfo.classList.add("item-additional-detail-info");

  let detailType = document.createElement("span");
  detailType.classList.add("item-additional-detail-type");
  detailType.textContent = details.detailType;

  let detailValue = document.createElement("span");
  detailValue.classList.add("item-addtional-detail-value");
  detailValue.textContent = details.detailValue;

  additionalDetailsInfo.appendChild(detailType);
  additionalDetailsInfo.appendChild(detailValue);
  return additionalDetailsInfo;
}

function createAddToCartBtn() {
  let btn = document.createElement("button");
  btn.classList.add("add-to-cart-btn");
  btn.textContent = "ADD TO CART";

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem(cart));
  });
  return btn;
}

function createFunctionItemBtn() {
  let wrapper = document.createElement("div");
  wrapper.classList.add("function-item-btns");

  let decreaseBtn = document.createElement("button");
  decreaseBtn.classList.add("decrease-item-btn");
  decreaseBtn.textContent = "-";

  let increaseBtn = document.createElement("button");
  increaseBtn.classList.add("increase-item-btn");
  increaseBtn.textContent = "+";

  let numberOfItem = document.createElement("span");
  numberOfItem.classList.add("number-of-item-cart");
  numberOfItem.textContent = "5";

  wrapper.appendChild(decreaseBtn);
  wrapper.appendChild(numberOfItem);
  wrapper.appendChild(increaseBtn);

  return wrapper;
}
