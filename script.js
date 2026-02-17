function loadAllProducts(id) {
  url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCart(data.data));
}

const displayCart = (carts) => {
  const cart = document.getElementById("products");
  cart.innerHTML = "";

  carts.forEach((cart) => {
    const cartDiv = document.createElement("div");
    cartDiv.innerHTML = `
        <div class="relative bg-white rounded-xl shadow-sm p-8 pt-12">
                <div class="absolute -top-6 left-8 bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center shadow">
                <i class="fa-solid fa-truck-fast"></i>
                </div>

                <h3 class="text-lg font-semibold mb-3">Fast Delivery</h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                Get your orders delivered to your doorstep quickly and efficiently.
                </p>
            </div>
        `;
  });

  cart.append(cartDiv);
};
