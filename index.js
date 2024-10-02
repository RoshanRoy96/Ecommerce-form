const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const priceInput = document.getElementById("price");
const productList = document.getElementById("productsList");

form.addEventListener("submit", addNewProduct);

function addNewProduct(event) {
  event.preventDefault();

  const title = titleInput.value;
  const image = imageInput.value;
  const price = priceInput.value;

  const product = document.createElement("article");
  product.classList.add("product");

  const img = document.createElement("img");
  img.src = image;

  product.appendChild(img);

  const productDetailsDiv = document.createElement("div");
  productDetailsDiv.classList.add("productDetails");
  product.appendChild(productDetailsDiv);

  const h3 = document.createElement("h3");
  h3.innerHTML = title;
  productDetailsDiv.appendChild(h3);

  const starRatingDiv = document.createElement("div");
  productDetailsDiv.appendChild(starRatingDiv);

  const starRatingFilled1 = document.createElement("span");
  starRatingFilled1.innerHTML = "&#9733;";
  starRatingDiv.appendChild(starRatingFilled1);

  const starRatingFilled2 = document.createElement("span");
  starRatingFilled2.innerHTML = "&#9733;";
  starRatingDiv.appendChild(starRatingFilled2);

  const starRatingFilled3 = document.createElement("span");
  starRatingFilled3.innerHTML = "&#9733;";
  starRatingDiv.appendChild(starRatingFilled3);

  const starRatingFilled4 = document.createElement("span");
  starRatingFilled4.innerHTML = "&#9733;";
  starRatingDiv.appendChild(starRatingFilled4);

  const starRatingNotFilled = document.createElement("span");
  starRatingNotFilled.innerHTML = "&#9734;";
  starRatingDiv.appendChild(starRatingNotFilled);

  const priceAndButtonDiv = document.createElement("div");
  productDetailsDiv.appendChild(priceAndButtonDiv);

  const priceDetail = document.createElement("span");
  priceDetail.innerHTML = price;
  priceAndButtonDiv.appendChild(priceDetail);

  const Btn = document.createElement("button");
  Btn.innerHTML = "Add to cart";
  priceAndButtonDiv.appendChild(Btn);

  productList.appendChild(product);
}
