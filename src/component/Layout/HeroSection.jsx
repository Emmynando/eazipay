import apple from "/images/applestore.svg";
import google from "/images/playstore.svg";
import hero from "/images/hero.svg";
import styles from "./HeroSection.module.css";

export default function HerosSection() {
  return (
    <div className={styles.container}>
      <div className={styles["hero-text"]}>
        <h2>
          Run your <span className={styles.payroll}>payroll</span>
          <span className={styles.easily}> easily</span> in{" "}
          <span className={styles.seconds}>seconds</span>
        </h2>
        <p>
          We’ve built an all-inclusive simple solution for individual and
          businesses to manage staff, pay salaries, bills, and relevant taxes
          all at once.
        </p>
        <button>Start Using Free, Forever</button>
        <div className={styles["store-button"]}>
          <h5>Download the Eazipay App</h5>
          <a href="#">
            <img src={apple} alt="eazipay" />
          </a>
          <a href="#">
            <img src={google} alt="eazipay" />
          </a>
        </div>
      </div>
      <div>
        <img src={hero} alt="eazipay" />
      </div>
    </div>
  );
}
