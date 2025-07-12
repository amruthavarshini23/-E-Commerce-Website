
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = {
  "Smart TV": { img: "images/tv.png.png", price: 30999 },
  "Headphones": { img: "images/headphone.png.png", price: 1999 },
  "Running Shoes": { img: "images/running shoes.png.png", price: 2499 },
  "Printed Shirt": { img: "images/printed shirt.png.png", price: 299 },
  "Floral Dress": { img: "images/floral dress png.png", price: 1299 },
  "Backpack": { img: "images/backpack.png.png", price: 1199 },
  "Wireless Headphones": { img: "images/wireless headphones.png.png", price: 2499 },
  "Casual Sweater": { img: "images/casual sweater.png.png", price: 1499 },
  "Watch": { img: "images/watch.png.png", price: 1999 },
  "Sunglasses": { img: "images/sunglasses.png", price: 799 },
  "Sneakers": { img: "images/sneakers.png.png", price: 2199 },
  "Handbag": { img: "images/handbag.png.png", price: 999 }
};

function addToCart(product) {
  const existing = cart.find(p => p.name === product);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      name: product,
      qty: 1,
      img: products[product].img,
      price: products[product].price
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
  updateCartCount(); // 🛒 Update badge when cart changes
}

function addToWishlist(product) {
  alert(product + " added to wishlist!");
}

// 🛒 Show cart count badge on page
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountSpan = document.getElementById('cart-count');
  if (cartCountSpan) {
    cartCountSpan.innerText = totalItems;
  }
}

// 🟢 Run immediately on page load
updateCartCount();
