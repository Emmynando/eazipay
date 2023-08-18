import one from "/images/1.svg";
import onboard from "/images/onbrdng.svg";
import styles from "./ProductInfo.module.css";
export default function ProductInfo() {
  return (
    <div className={styles.container}>
      <h5>How Eazipay Works</h5>
      <p>Get started in 3 simple steps.</p>
      <div className={styles.items}>
        <div className={styles.svgs}>
          <div className={styles.strokes}>
            <div className={styles["strike-two"]}></div>
            <div className={styles["strike-one"]}></div>
          </div>
          <img src={onboard} alt="eazipay" />
        </div>
        <div>
          <img src={one} alt="eazipay" />
        </div>
      </div>
    </div>
  );
}
