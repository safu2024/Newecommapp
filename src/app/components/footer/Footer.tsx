import React from "react";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="main">
      <div className="fcontainer1">
        <div className="col">
          <ul>
            <h4>ABOUT</h4>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Shoppingkart Stories</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <h4>HELP</h4>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Cancellation&Returns</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Report-Infringement</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <h4>CONSUMER POLICY</h4>
            <li>
              <a href="#">Cancellation & Returns</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Grievance Redressal</a>
            </li>
            <li>
              <a href="#">EPR Compliance</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <h4>SOCIAL</h4>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fcontainer2">
        <div className="col">
          <div>
            <ul>
              <h4>Mail Us:</h4>
              <li>MyShoppingCart Internet Private Limited,</li>
              <li>Buildings Alyssa,Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road, Devarabeesanahalli village,</li>
              <li>Bengaluru,560103</li>
              <li>Karnataka,India</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <ul>
            <h4>Rgistered Office Address:</h4>
            <li>MyShoppingCart Internet Private Limited,</li>
            <li>Buildings Alyssa,Begonia &</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road, Devarabeesanahalli village,</li>
            <li>Bengaluru,560103</li>
            <li>Karnataka,India</li>
            <li>CIN:U51109KA2012PTC066107</li>
            <li style={{ width: "250px" }}>
              Telephone:
              <a href="#" style={{ color: "blue" }}>
                044-45614700
              </a>
              /
              <a href="#" style={{ color: "blue" }}>
                044-67415800
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="last">
        <ul>
          <li>
            <a href="#seller">Become a Seller</a>
          </li>
          <li>
            <a href="#cart">Advertise</a>
          </li>
          <li>
            <a href="#login">Gift Cards</a>
          </li>
          <li>
            <a href="#login">Help Center</a>
          </li>
          <li>@2009-2024 Connect Shoppingkart</li>
          <li>
            <Image
              src={"/images/card.jpg"}
              width={385}
              height={28}
              alt="card"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
