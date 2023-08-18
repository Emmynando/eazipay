import eazyPay from "/images/eazypay.svg";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>
          <img src={eazyPay} alt="eazipay" />
        </p>
        <ul>
          <li>Copyright &copy; 2023 Chukwuemeka</li>
          <li>All rights reserved</li>
        </ul>
      </div>

      <div>
        <p>Product</p>
        <ul>
          <li>Indidual</li>
          <li>Businesses</li>
          <li>Request Demo</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div>
        <p>Legal</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      <div>
        <p>Resources</p>
        <ul>
          <li>FAQs</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Customer Stories</li>
        </ul>
      </div>

      <div>
        <p>Contact us</p>
        <ul>
          <li>demo@gmail.com</li>
          <li>+234 9041782237</li>
          <li>
            <input type="text" placeholder="Your Email address" />
          </li>
        </ul>
      </div>
    </div>
  );
}
