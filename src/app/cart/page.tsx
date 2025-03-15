"use client";
import { useCart } from "@/app/components/context/CartContext";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { items } = state;
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  interface CartItem {
    title: string;
    quantity: number;
    price: number;
    documentId: string;
  }

  const ProceedToBuy = async () => {
    const cartItems = items.map((cartItem) => ({
      data: {
        title: cartItem.title,
        quantity: cartItem.quantity,
        price: cartItem.price * cartItem.quantity,
        productId: cartItem.documentId,
      },
    }));
    console.log("Items are: ", cartItems);
    try {
      for (const dataItem of cartItems) {
        const response = await fetch("https://committed-cuddle-c8ed3640e9.strapiapp.com/api/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataItem),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Cart saved:", data);
        router.push("/checkout");
      }
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ marginBottom: "500px" }}>
      <div className={styles.cartheading}>
        <h3> Shopping Cart</h3>
        <h5> Price</h5>
      </div>
      <div className={styles.totalcart}>
        <h4>PRICE DETAILS</h4>
        <br />
        <h5>Number of Items: {items.length}</h5>
        <h5>Total Amount: ${totalAmount.toFixed(2)}</h5> <br />
        <button className="btn btn-warning w-75" onClick={ProceedToBuy}>
          Proceed to Buy
        </button>
      </div>

      {items.length === 0 ? (
        <h3 style={{ marginTop: "20px", textAlign: "center" }}>
          Your cart is empty.
        </h3>
      ) : (
        
        
        items.map((item) => (
          
          <ul className={styles.cartbox}>
          
              <li key={item.documentId}>
                <h5 style={{ textAlign: "right" }}>
                  {" "}
                  ${(item.price * item.quantity).toFixed(2)}
                </h5>
                <img
                  src={item.image.url}
                  alt={item.title}
                />
                <h4 style={{ textAlign: "left" }}>{item.title}</h4>
                <h6 style={{ textAlign: "left" }}>
                  {" "}
                  Price: ${item.price.toFixed(2)}
                </h6>

                <div className={styles.qtybutton}>
                  <button
                    className="rounded-circle px-2"
                    onClick={() =>
                      dispatch({
                        type: "SUBTRACT_QUANTITY",
                        payload: { id: item.documentId },
                      })
                    }
                  >
                    <b> - </b>
                  </button>
                  <button> {item.quantity}</button>
                  <button
                    className="rounded-circle px-2"
                    onClick={() =>
                      dispatch({
                        type: "ADD_QUANTITY",
                        payload: { id: item.documentId },
                      })
                    }
                    disabled={item.quantity === 10}
                  >
                    <b> + </b>
                  </button>

                  <button
                    className={styles.trash}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: { id: item.documentId },
                      })
                    }
                  >
                    <GoTrash />
                  </button>
                </div>
              </li>
         
          </ul>
        ))
        
      )}
    </div>
  );
};

export default Cart;
