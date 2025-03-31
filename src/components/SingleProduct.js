// src/components/SingleProduct.js
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
    wishlist, // Added Wishlist State
    addToWishlist, // Added Function
    removeFromWishlist, // Added Function
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={prod.image}
          alt={prod.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>

          {/* Cart Button */}
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}

          {/* Wishlist Button */}
          {wishlist.some((p) => p.id === prod.id) ? (
            <Button variant="warning" onClick={() => removeFromWishlist(prod.id)}>
              Remove from Wishlist
            </Button>
          ) : (
            <Button variant="info" onClick={() => addToWishlist(prod)}>
              Add to Wishlist
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
