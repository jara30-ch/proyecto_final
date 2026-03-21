import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
      
      <img src={item.image} alt={item.name} width="80" />

      <div style={{ flex: 1 }}>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => removeFromCart(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addToCart(item)}>+</button>
      </div>

    </div>
  );
};

export default CartItem;