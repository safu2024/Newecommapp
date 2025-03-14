"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useCart } from "@/app/components/context/CartContext";

export default function OrderSummary() {
  const [orderItems, setorderItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { state, dispatch } = useCart();
  const { items } = state;
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://committed-cuddle-c8ed3640e9.strapiapp.com/api/carts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setorderItems(data.data);
    };

    fetchProducts();
  }, []);

  const handlePlaceOrder = async () => {
    const idsToDelete = orderItems.map((item: any) => item.documentId);
    const deletePromises = idsToDelete.map((documentId) => {
      return fetch(`https://committed-cuddle-c8ed3640e9.strapiapp.com/api/carts/${documentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });

    try {
      const responses = await Promise.all(deletePromises);
      setCartItems([]);
    } catch (error) {
      console.error("Error deleting cart items:", error);
    }
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <br /> <h2 style={{ textAlign: "center" }}>CheckOut</h2>
      <form className={styles.checkoutmain}>
        <div className={styles.orderbox1}>
          <h5>Delivery Details:</h5>
          <p>Edwin Newton</p>
          <p> 67 east 26th street</p>
          <p>Paterson, NJ 07514</p>
          <p>United States</p>
          <p>424123456782</p>
          <h5>Select Payment Method:</h5>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="gridRadios1"
                value="card"
                checked={true}
                readOnly
              />
              <label className="form-check-label">Credit or Debit Card</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label">Cash on Delivery</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label">
                Net Banking
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label">Other UPIs</label>
            </div>
          </div>
        </div>
        <div className={styles.orderbox2}>
          <h4>Order Summary</h4>
          <br />
          <div>
            <div
              className="row"
              style={{
                fontWeight: "bolder",
                borderBottom: "3px solid whitesmoke",
              }}
            >
              <div className="col-6">Item</div>
              <div className="col-3">Quantity</div>
              <div className="col-3">Price</div>
            </div>

            {items.map((item) => (
              <li key={item.documentId}>
                <div
                  className="row"
                  style={{ borderBottom: "3px solid whitesmoke" }}
                >
                  <div className="col-6" style={{ textAlign: "left" }}>
                    {item.title}
                  </div>
                  <div className="col-3">{item.quantity}</div>
                  <div
                    className="col-3"
                    style={{ textAlign: "right", paddingRight: "35px" }}
                  >
                    ${(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
              </li>
            ))}
          </div>

          <div className={styles.orderbox3}>
            <h3>Total Amount: ${totalAmount.toFixed(2)} </h3>
            <br />

            <button className="btn btn-warning" onClick={handlePlaceOrder}>
              Place order
            </button>
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}
