import logo from "/images/eazypay.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-container"]}>
        <div>
          <img src={logo} alt="eazipay" />
        </div>
        <div className={styles.navlinks}>
          <ul>
            <li>Individual</li>
            <li>Business</li>
            <li>Pricing</li>
            <li>Set your payroll</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <button>Log in</button>
            </li>
            <li>
              <button className={styles.button}>Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
