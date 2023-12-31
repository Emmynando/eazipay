import { useState } from "react";
import styles from "./Slider.module.css";

export default function Slider() {
  const [isHovered, setIsHovered] = useState(false);
  const [secondHov, setSecondHov] = useState(false);

  const firstBox = {
    zIndex: isHovered ? 1 : "auto",
  };

  const secondBox = {
    transform: secondHov ? "translate(-282px)" : "none",
    transition: "transform 0.3s ease-out",
  };

  const thirdBox = {
    transform: secondHov ? "translate(20px)" : "none",
    transition: "transform 0.3s ease-out",
  };

  function mouseEnter() {
    setIsHovered(true);
  }

  function secondMouseEnter() {
    setSecondHov(true);
  }

  return (
    <div className={styles.container}>
      <h5>For Individuals and Businesses</h5>
      <p>Join 200+ businesses using Eazipay's easy solution.</p>
      <div className={styles.carousel}>
        <div
          className={styles.slide}
          onMouseEnter={mouseEnter}
          onMouseLeave={() => setIsHovered(false)}
          style={firstBox}
        >
          <h6>Tamper-proof Payroll for LIfe</h6>
          <p>Your staff payroll history is kept in one place forever.</p>
          <p>No more excel sheet or manual records.</p>
          <p>Download your payroll history anytime you need it.</p>
        </div>
        <div
          className={styles.slide}
          onMouseEnter={secondMouseEnter}
          onMouseLeave={() => setSecondHov(false)}
          style={secondBox}
        >
          <h6>All Payroll, Anytime Anywhere</h6>
          <p>
            Wherever you are Eazipay has got you covered on ALL your Payroll
            tasks.
          </p>
          <p>
            Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay
            handle all your compliamces in one place and easily, in seconds!
          </p>
        </div>
        <div className={styles.slide} style={thirdBox}>
          <h6>Payroll in Seconds</h6>
          <p>Never again wil you spend more than 2 minutes on payroll.</p>
          <p>Just click on your staff annd bulk-pay them at once.</p>
          <p>Payment is done permanently.</p>
        </div>
      </div>
      <p className={styles.p}>
        We are happy to answer your queries. Please, reach us at{" "}
        <span>hello@myeazipay.com</span> and expect our response shortly after.
      </p>
    </div>
  );
}
