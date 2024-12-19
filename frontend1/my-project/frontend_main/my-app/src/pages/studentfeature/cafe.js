import React, { useState, useEffect } from "react";
import "./cafe.css";
import { FaHome, FaCoffee, FaBlog, FaShoppingCart, FaPhoneAlt, FaSearch } from "react-icons/fa";

function Caf() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCafes, setFilteredCafes] = useState([]);

  // Simulated list of cafes
  const cafes = [
    { id: 1, name: "Bombay to Barcelona Library Café", city: "Mumbai", rating: 4.6, reviewsCount: 153, category: "Dessert, Indian", priceRange: "₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://media-cdn.tripadvisor.com/media/photo-p/28/f3/bd/f5/caption.jpg", zomatoLink: "https://www.zomato.com/mumbai/bombay-to-barcelona-library-café" },
    { id: 2, name: "Mocha Café", city: "Mumbai", rating: 4.8, reviewsCount: 230, category: "Coffee, Dessert", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://uploads-ssl.webflow.com/6375e05f041b21220f2bf636/644226f9d5a48cab5309e5b5_slide11.png", zomatoLink: "https://www.zomato.com/mumbai/mocha-cafe" },
    { id: 3, name: "The Coffee Bean & Tea Leaf", city: "Mumbai", rating: 4.4, reviewsCount: 320, category: "Coffee, Tea", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/24/9b/f7/coffee-bean-tea-leaf.jpg?w=900&h=500&s=1", zomatoLink: "https://www.zomato.com/mumbai/the-coffee-bean-tea-leaf" },
    { id: 4, name: "The Nutcracker", city: "Mumbai", rating: 4.6, reviewsCount: 410, category: "Breakfast, Coffee", priceRange: "₹₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://assets.architecturaldigest.in/photos/629a69fb4686c100bcc1c7f6/1:1/w_1080,h_1080,c_limit/Nutcracker%20Mumbai.jpg", zomatoLink: "https://www.zomato.com/mumbai/the-nutcracker" },
    { id: 5, name: "Café New York", city: "Mumbai", rating: 4.3, reviewsCount: 180, category: "Pasta, Pizza", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://media-cdn.tripadvisor.com/media/photo-p/0b/ff/a8/41/cafe-new-york-at-hughes.jpg", zomatoLink: "https://www.zomato.com/mumbai/café-new-york" },
    { id: 6, name: "Leaping Windows Café", city: "Mumbai", rating: 4.7, reviewsCount: 150, category: "Coffee, Sandwiches", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://b.zmtcdn.com/data/pictures/8/41308/c6ee2190be7fa0711e842bb5a07c625c.jpg?fit=around|750:500&crop=750:500;*,*", zomatoLink: "https://www.zomato.com/mumbai/leaping-windows-café" },
    { id: 7, name: "Prithvi Café", city: "Mumbai", rating: 4.7, reviewsCount: 500, category: "Coffee, Sandwiches", priceRange: "₹₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://forkandknifewithayush.wordpress.com/wp-content/uploads/2019/12/prithvi-cafe.jpg", zomatoLink: "https://www.zomato.com/mumbai/prithvi-café" },
    { id: 8, name: "The Bagel Shop", city: "Mumbai", rating: 4.5, reviewsCount: 120, category: "Bagels, Coffee", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WtfgT4CxEO8TeQ4L8l9MeAlEBPfc9HcRwg&s", zomatoLink: "https://www.zomato.com/mumbai/the-bagel-shop" },
    { id: 9, name: "Aditi Fast Food", city: "Mumbai", rating: 4.0, reviewsCount: 200, category: "Fast Food, Coffee", priceRange: "₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://content.jdmagicbox.com/v2/comp/mumbai/r5/022pxx22.xx22.220723095602.z1r5/catalogue/aditi-fast-food-pvt-ltd--mumbai-fast-food-rrljj4hdcf.jpg?fit=around%7C350:350&crop=350:350;*,*", zomatoLink: "https://www.zomato.com/mumbai/aditi-fast-food" },
    { id: 10, name: "Bandra Cafe", city: "Mumbai", rating: 4.4, reviewsCount: 300, category: "Breakfast, Coffee", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0b/f2/12/interior.jpg", zomatoLink: "https://www.zomato.com/mumbai/bandra-cafe" },
    { id: 11, name: "The Rolling Pin", city: "Mumbai", rating: 4.5, reviewsCount: 150, category: "Bakery, Coffee", priceRange: "₹₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://c8.alamy.com/comp/2CFNYM8/a-rolling-pin-bakery-and-cafe-from-the-mencenatpolis-outlet-mall-near-hapjeong-station-in-seoul-south-korea-2CFNYM8.jpg", zomatoLink: "https://www.zomato.com/mumbai/the-rolling-pin" },
    { id: 12, name: "Café Goodluck", city: "Mumbai", rating: 4.4, reviewsCount: 550, category: "Indian, Coffee", priceRange: "₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://b.zmtcdn.com/data/pictures/2/19454142/feb5cd505962dad5634de395c019e794_featured_v2.jpg", zomatoLink: "https://www.zomato.com/mumbai/café-goodluck" },
    { id: 13, name: "Café Madras", city: "Mumbai", rating: 4.4, reviewsCount: 300, category: "South Indian, Coffee", priceRange: "₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://cdn.tasteatlas.com/Images/Restaurants/77025f1c31bd4ec89a28d8b26b33ac10.jpg?m=facebook", zomatoLink: "https://www.zomato.com/mumbai/café-madras" },
    { id: 14, name: "Tea Villa Café", city: "Mumbai", rating: 4.6, reviewsCount: 400, category: "Tea, Coffee", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/18/38/84/0b/tea-villa-cafe.jpg", zomatoLink: "https://www.zomato.com/mumbai/tea-villa-café" },
    { id: 15, name: "Cafe du Coeur", city: "Mumbai", rating: 4.5, reviewsCount: 210, category: "Coffee, Desserts", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://149356479.v2.pressablecdn.com/wp-content/uploads/2019/11/Mumbai-Cafes.jpg", zomatoLink: "https://www.zomato.com/mumbai/cafe-du-coeur" },
    { id: 16, name: "Café Universal", city: "Mumbai", rating: 4.3, reviewsCount: 350, category: "Indian, Coffee", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/45/dd/25/interiors.jpg?w=900&h=-1&s=1", zomatoLink: "https://www.zomato.com/mumbai/café-universal" },
    { id: 17, name: "The Tea Lounge", city: "Mumbai", rating: 4.2, reviewsCount: 260, category: "Tea, Coffee", priceRange: "₹₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://assets.architecturaldigest.in/photos/6008218828abf326254ed330/16:9/w_1280,c_limit/Kettlery-tea-bar-and-cafe-Mumbai-1366x768.jpg", zomatoLink: "https://www.zomato.com/mumbai/the-tea-lounge" },
    { id: 18, name: "Café 792", city: "Mumbai", rating: 4.4, reviewsCount: 150, category: "Italian, Coffee", priceRange: "₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://b.zmtcdn.com/data/reviews_photos/94a/cf3ae7bbb769d4b2416e938402a6b94a_1460814891.jpg", zomatoLink: "https://www.zomato.com/mumbai/café-792" },
    { id: 19, name: "The Jamjar Diner", city: "Mumbai", rating: 4.5, reviewsCount: 500, category: "American, Coffee", priceRange: "₹₹₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d6/31/3e/getlstd-property-photo.jpg?w=800&h=500&s=1", zomatoLink: "https://www.zomato.com/mumbai/the-jamjar-diner" },
    { id: 20, name: "Sarvi Restaurant", city: "Mumbai", rating: 4.3, reviewsCount: 180, category: "Biryani, Coffee", priceRange: "₹", status: "Open now", sittingArea: "Yes", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/f3/bd/f5/caption.jpg?w=400&h=300&s=1", zomatoLink: "https://www.zomato.com/mumbai/sarvi-restaurant" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollTopVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery) {
      const results = cafes.filter(cafe =>
        cafe.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCafes(results);
    }
  };

  return (
    <div className="cafe-app">
      <div className="cafe-sidebar">
        <div className="cafe-logo">Cafe App</div>
        <div className="cafe-nav">
          <ul>
            <li><FaHome /> Home</li>
            <li><FaCoffee /> Menu</li>
            <li><FaBlog /> Blog</li>
            <li><FaShoppingCart /> Cart</li>
            <li><FaPhoneAlt /> Contact</li>
          </ul>
        </div>
        <div className="cafe-social">
          <span><i className="fa fa-facebook"></i></span>
          <span><i className="fa fa-twitter"></i></span>
          <span><i className="fa fa-instagram"></i></span>
        </div>
      </div>
      <div className="cafe-content">
        <div className="cafe-header">
          <h1>Welcome to Our Cafe</h1>
          <p>Your go-to place for amazing coffee</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for cafes in a city..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
          <button>Explore Menu</button>
        </div>
        <div className="cafe-main">
          <h2>Our Cafes</h2>
          <div className="cafe-table">
            {filteredCafes.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Reviews</th>
                    <th>Category</th>
                    <th>Price Range</th>
                    <th>Status</th>
                    <th>Sitting Area</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCafes.map(cafe => (
                    <tr key={cafe.id}>
                      <td><img src={cafe.imageUrl} alt="Cafe" /></td>
                      <td>{cafe.name}</td>
                      <td>{cafe.rating}</td>
                      <td>{cafe.reviewsCount}</td>
                      <td>{cafe.category}</td>
                      <td>{cafe.priceRange}</td>
                      <td>{cafe.status}</td>
                      <td>{cafe.sittingArea}</td>
                      <td>
                        <a href={cafe.zomatoLink} target="_blank" rel="noopener noreferrer">
                          View on Zomato
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No cafes found in this city.</p>
            )}
          </div>
        </div>
        <div className="cafe-footer">
          <p>&copy; 2024 Cafe App</p>
          <p>
            <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
          </p>
        </div>
      </div>
      <button
        className={`scroll-to-top ${scrollTopVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
}

export default Caf;
