import apple from "/images/applestore.svg";
import google from "/images/playstore.svg";
import sub from "/images/subscription.svg";
import redDots from "/images/red_dots.svg";
import classes from "./Subscription.module.css";

export default function Subscription() {
  return (
    <div className={classes.container}>
      <img src={redDots} alt="eazipay" className={classes.image} />
      <div className={classes["sub-text"]}>
        <h4>
          Free forever for your
          <span className={classes.seconds}> salary payment</span>
        </h4>
        <div className={classes["store-button"]}>
          <h5>Subscribe to the Eazilife today</h5>
          <a href="#">
            <img src={apple} alt="eazipay" />
          </a>
          <a href="#">
            <img src={google} alt="eazipay" />
          </a>
        </div>
      </div>
      <div>
        <img src={sub} alt="eazipay" />
      </div>
    </div>
  );
}
