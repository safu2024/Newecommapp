"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/components/context/CartContext";

const MyNavbar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const { state, dispatch } = useCart();
  const { items } = state;

  const handleSearch = (e: any) => {
    e.preventDefault();

    if (query.trim()) {
      router.push(`/searchProducts?query=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <Navbar className="navbar bg-primary">
      <div className="container" style={{ fontSize: "20px" }}>
        <Link className="navbar-brand" href={"/"}>
          <Image
            src={"/Newicon.JPG"}
            height={50}
            width={100}
            alt="shopicon"
          />
        </Link>

        <form className="d-flex" role="search">
          <div className="input-group w-auto">
            <input
              type="text"
              style={{ width: "400px" }}
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name="search"
              className="form-control"
            />

            <button
              type="submit"
              className="btn btn-warning"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
        </form>

        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/products"}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/about-us"}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/contact-us"}>
              Contact Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href={"/cart"}>
              <FaShoppingCart />
              Cart
              {items.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 148,
                    width: "20px",
                    height: "20px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  {items.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
