import Navbar from './Navbar';

function NavbaHome() {
  return (
    <div className="home-page">
              <Navbar />
      <div className="welcome-message">
        <h1>Welcome to the Gardening Store</h1>
        <p>Explore our wide range of garden products and accessories.</p>
      </div>
     
    </div>
  );
}

export default NavbaHome;