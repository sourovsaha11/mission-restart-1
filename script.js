function loadAllProducts(id) {
  url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCart(data));
}

const displayCart = (carts) => {
  const cart = document.getElementById("products");
  // Clear the cart container before appending new items
  cart.innerHTML = "";

  // Add responsive grid layout for the cards
  cart.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

  carts.forEach((cartItem) => {
    const divCart = document.createElement("div");
    divCart.innerHTML = `
       <div class="card bg-base-100 w-auto shadow-sm">
                        <figure>
                            <img
                            src="${cartItem.image}"
                            alt="${cartItem.title}" />
                        </figure>

                <div class="card-body">
                    <div class="flex justify-between">
                        <h6>${cartItem.category}</h6>
                        <h6>Ratings: ${cartItem.rating?.rate || "N/A"}</h6>
                    </div>
                    <h2 class="card-title">
                    ${cartItem.title}
                    </h2>
                    <p>Price: $${cartItem.price}</p>
                    <div class="card-actions justify-between">
                    <div class="btn border-t-neutral-50">Details</div>
                    <div class="btn border-t-neutral-50">Add</div>
                    </div>
                </div>
            </div>`;
    cart.appendChild(divCart);
  });
};
