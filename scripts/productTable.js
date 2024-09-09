const tBody = document.querySelector("tbody");

const urlParams = new URLSearchParams(window.location.search);

const page = urlParams.get("page");

function loadPageContent() {
  const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
  tBody.innerHTML = "";
  allProducts.forEach((product, i) => {
    const row = document.createElement("tr");
    let sno = i + 1;
    delete product.sNum;
    Object.values(product).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    const indexCell = document.createElement("td");
    indexCell.textContent = sno;
    row.prepend(indexCell);
    product.sNum = sno;
    let editBtn = createEditBtn(sno);
    let deleteBtn = createDeleteBtn(sno);
    const tableBtnContainer = document.createElement("div");
    tableBtnContainer.classList.add("table-btn-container");
    tableBtnContainer.appendChild(editBtn);
    tableBtnContainer.appendChild(deleteBtn);
    const actionRow = document.createElement("td");
    actionRow.appendChild(tableBtnContainer);
    row.appendChild(actionRow);
    tBody.appendChild(row);
  });

  localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

function createEditBtn(sno) {
  const editbtn = document.createElement("btn");
  editbtn.classList.add("edit-btn");

  editbtn.addEventListener("click", function () {
    window.location.href = `?page=addProduct&index=${sno}`;
  });
  const editImg = document.createElement("img");
  editImg.src = "../images/editBtn.png";
  editImg.alt = "Edit Button";
  editImg.classList.add("action-btns");
  editbtn.innerHTML = "";
  editbtn.appendChild(editImg);
  return editbtn;
}

function createDeleteBtn(sno) {
  const deleteBtn = document.createElement("btn");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    let allProducts = JSON.parse(localStorage.getItem("allProducts"));
    let updatedAllProducts = allProducts.filter(
      (product) => product.sNum !== sno
    );

    localStorage.setItem("allProducts", JSON.stringify(updatedAllProducts));
    loadPageContent();
  });
  const deleteImg = document.createElement("img");
  deleteImg.src = "../images/deleteBtn.png";
  deleteImg.alt = "Edit Button";
  deleteImg.classList.add("action-btns");
  deleteBtn.innerHTML = "";
  deleteBtn.appendChild(deleteImg);
  return deleteBtn;
}

if (page === "productTable") {
  loadPageContent();
}
