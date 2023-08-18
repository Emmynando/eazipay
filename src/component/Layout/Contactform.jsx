import greenDot from "/images/greenDot.svg";
import classes from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={classes.container}>
      <img src={greenDot} alt="eazipay" />
      <div className={classes.box}>
        <div className={classes.items}>
          <h5>Get an Exclusive Demo of Eazipay</h5>
          <p>
            Our greatest priority is to put you and your business first. Let’s
            show you how we can help.
          </p>
        </div>
        <div className={classes.info}>
          <h6>First things first</h6>
          <p>
            We want to serve you better. Tell us a bit about yourself or company
          </p>
          <button>Individual</button>
          <button>Company</button>
          <form>
            <input type="text" placeholder="First name" value={""} />
            <input type="text" placeholder="Last name" value={""} />
            <input type="email" placeholder="Email" value={""} />
            <input type="text" placeholder="Job Title" value={""} />
            <input type="text" placeholder="Company Size" value={""} />
            <button className={classes.button}>Request Demo</button>
          </form>
        </div>
      </div>
    </div>
  );
}
