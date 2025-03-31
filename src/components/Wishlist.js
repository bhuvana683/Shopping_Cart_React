// src/components/Wishlist.js
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Wishlist = () => {
  const {
    wishlist, // Wishlist state
    removeFromWishlist, // Function to remove from wishlist
  } = CartState();

  return (
    <div className="wishlist">
      <h2>My Wishlist</h2>
      <div className="products">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty!</p>
        ) : (
          wishlist.map((prod) => (
            <Card key={prod.id}>
              <Card.Img
                variant="top"
                src={prod.image}
                alt={prod.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                  <span>₹ {prod.price.split(".")[0]}</span>
                  <Rating rating={prod.ratings} />
                </Card.Subtitle>
                <Button
                  variant="danger"
                  onClick={() => removeFromWishlist(prod.id)}
                >
                  Remove from Wishlist
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
