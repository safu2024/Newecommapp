"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

export interface CartItem {
  documentId: string;
  title: string;
  price: number;
  quantity: number;
  image: any;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "ADD_QUANTITY"; payload: { id: string } }
  | { type: "SUBTRACT_QUANTITY"; payload: { id: string } };

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.items.find(
        (item) => item.documentId === action.payload.documentId
      );
      if (itemExists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.documentId === action.payload.documentId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.documentId !== action.payload.id
        ),
      };
    case "ADD_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.documentId === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "SUBTRACT_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.documentId === action.payload.id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
