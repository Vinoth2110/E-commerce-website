import { useState } from "react";

  const products = [

  {
    id: 1,
    name: "Men Black Hoodie",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },

  {
    id: 2,
    name: "Women Oversized T-Shirt",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
  },

  {
    id: 3,
    name: "Casual Shirt",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  },

  {
    id: 4,
    name: "Blue Denim Jacket",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
  },

  {
    id: 5,
    name: "White Sneakers",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },

  {
    id: 6,
    name: "Women Fashion Dress",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
  },

  {
    id: 7,
    name: "Classic Jeans",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
  },

  {
    id: 8,
    name: "Men Leather Jacket",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=500",
  },
  {
  id: 9,
  name: "Men White T-Shirt",
  price: 30,
  image:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
},

{
  id: 10,
  name: "Men Casual Hoodie",
  price: 65,
  image:
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500",
},

{
  id: 11,
  name: "Men Formal Shirt",
  price: 50,
  image:
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
},

{
  id: 12,
  name: "Men Cargo Pants",
  price: 55,
  image:
    "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
},

{
  id: 13,
  name: "Men Sports Jacket",
  price: 90,
  image:
    "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=500",
},

{
  id: 14,
  name: "Women Pink Hoodie",
  price: 60,
  image:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
},

{
  id: 15,
  name: "Women Summer Dress",
  price: 75,
  image:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
},

{
  id: 16,
  name: "Women Black Top",
  price: 35,
  image:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500",
},

{
  id: 17,
  name: "Women Jeans Jacket",
  price: 85,
  image:
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
},

{
  id: 18,
  name: "Women Fashion Kurti",
  price: 45,
  image:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
},

{
  id: 19,
  name: "Women White Sneakers",
  price: 70,
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
},

{
  id: 20,
  name: "Women Stylish Handbag",
  price: 95,
  image:
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
},
{
  id: 21,
  name: "Men Oversized T-Shirt",
  price: 40,
  image:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
},

{
  id: 22,
  name: "Men Streetwear Hoodie",
  price: 75,
  image:
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500",
},

{
  id: 23,
  name: "Men Black Jeans",
  price: 60,
  image:
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
},

{
  id: 24,
  name: "Men White Sneakers",
  price: 85,
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
},

{
  id: 25,
  name: "Men Denim Shirt",
  price: 55,
  image:
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
},

{
  id: 26,
  name: "Women Crop Top",
  price: 35,
  image:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500",
},

{
  id: 27,
  name: "Women Floral Dress",
  price: 90,
  image:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
},

{
  id: 28,
  name: "Women Denim Jacket",
  price: 100,
  image:
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
},

{
  id: 29,
  name: "Women Fashion Saree",
  price: 120,
  image:
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
},

{
  id: 30,
  name: "Women Casual Kurti",
  price: 50,
  image:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
},
{
  id: 31,
  name: "Men Printed Shirt",
  price: 48,
  image:
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
},

{
  id: 32,
  name: "Men Winter Hoodie",
  price: 78,
  image:
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
},

{
  id: 33,
  name: "Men Stylish Blazer",
  price: 140,
  image:
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500",
},

{
  id: 34,
  name: "Men Running Shoes",
  price: 88,
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
},

{
  id: 35,
  name: "Men Cotton Pants",
  price: 58,
  image:
    "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
},

{
  id: 36,
  name: "Women Party Wear Dress",
  price: 110,
  image:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
},

{
  id: 37,
  name: "Women Stylish Top",
  price: 42,
  image:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500",
},

{
  id: 38,
  name: "Women Denim Jeans",
  price: 68,
  image:
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
},

{
  id: 39,
  name: "Women Leather Handbag",
  price: 95,
  image:
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
},

{
  id: 40,
  name: "Women White Sneakers",
  price: 82,
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
}

];

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [search, setSearch] = useState("");
  

  const addToCart = (product) => {

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {

    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCart(updatedCart);

  } else {

    setCart([
      ...cart,
      { ...product, qty: 1 }
    ]);

  }
};

  const increaseQty = (id) => {

  const updatedCart = cart.map((item) =>
    item.id === id
      ? { ...item, qty: item.qty + 1 }
      : item
  );

  setCart(updatedCart);
};

const decreaseQty = (id) => {

  const updatedCart = cart
    .map((item) =>
      item.id === id
        ? { ...item, qty: item.qty - 1 }
        : item
    )
    .filter((item) => item.qty > 0);

  setCart(updatedCart);
};

  const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.qty,
  0
);

  return (
    <div>
      <nav className="navbar">
  <div className="logo">
    <h2>QuickKart</h2>
  </div>
  <div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</div>

  <ul className={menuOpen ? "nav-links active" : "nav-links"}>

  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#products">Products</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>

</ul>

  
<div className="auth-buttons">

  <button onClick={() => setShowLogin(true)}>
    Login
  </button>

  <button onClick={() => setShowSignup(true)}>
    Sign Up
  </button>

  <div
  className="cart-box"
  onClick={() => setShowCart(!showCart)}>
  Cart ({cart.length})
</div>
</div>


</nav>

        <section className="hero" id="home">

  <div className="hero-overlay">

    <h2>Discover Your Fashion Style</h2>

    <p>
      Trending Mens & Womens Collections
    </p>

    <button onClick={() => {document.getElementById("products").scrollIntoView({behavior:"smooth"})}}>
      Shop Now
    </button>

  </div>

</section>

      <section className="products" id="products">
        <div className="search-box">

  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

</div>
<div className="category-buttons">

  <button onClick={() => setCategory("all")}>
    All
  </button>

  <button onClick={() => setCategory("mens")}>
    Mens
  </button>

  <button onClick={() => setCategory("womens")}>
    Womens
  </button>

</div>
        <h2>Featured Products</h2>
    <div className="product-grid">

  {products
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )

    .filter((item) => {

      if (category === "mens") {
        return item.name
          .toLowerCase()
          .startsWith("men")
      }

      if (category === "womens") {
        return item.name
          .toLowerCase()
          .startsWith("women")
      }

      return true;
    })

    .map((item) => (

      <div className="card" key={item.id}>

  <img src={item.image} alt={item.name} />

        <h3>{item.name}</h3>

        <p>${item.price}</p>

        <button onClick={() => addToCart(item)}>
          Add to Cart
        </button>

      </div>

    ))}

</div>

      </section>

      {showCart && (
  <div className="cart-popup">

    <div className="cart-content">
      <span
  className="close-cart"
  onClick={() => setShowCart(false)}
>
  close
</span>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />

            <div>
              <h4>{item.name}</h4>
              <p>
  ${item.price} x {item.qty}
</p>
            </div>

            <div className="qty-box">

  <button onClick={() => decreaseQty(item.id)}>
    -
  </button>

  <span>{item.qty}</span>

  <button onClick={() => increaseQty(item.id)}>
    +
  </button>

</div>
          </div>
        ))
      )}

      <h3>Total: ${totalPrice}</h3>
    </div>

  </div>
)}

      <section className="contact-section" id="contact">

  <h2>Contact Us</h2>

  <p>Email: quickkart@gmail.com</p><br></br>

  <p>Phone: +91 9876543210</p>

</section>
{showLogin && (

  <div className="auth-popup">

    <div className="auth-box">

      <h2>Login</h2>

      <input type="email" placeholder="Email" />

      <input type="password" placeholder="Password" />

      <button>Login</button>

      <span onClick={() => setShowLogin(false)}>
        Close
      </span>

    </div>

  </div>

)}

{showSignup && (

  <div className="auth-popup">

    <div className="auth-box">

      <h2>Sign Up</h2>

      <input type="text" placeholder="Name" />

      <input type="email" placeholder="Email" />

      <input type="password" placeholder="Password" />

      <button>Create Account</button>

      <span onClick={() => setShowSignup(false)}>
        Close
      </span>

    </div>

  </div>

)}

      <footer>
        <p>© Thank you for visite my website</p>
      </footer>
    </div>
  );
}