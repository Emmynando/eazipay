import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <div className={styles.container}>
      <h5>For Individuals and Businesses</h5>
      <p>Join 200+ businesses using Eazipay's easy solution.</p>
      <div className={styles.carousel}>
        <div className={styles.slide}>
          <h6>Tamper-proof Payroll for LIfe</h6>
          <p>Your staff payroll history is kept in one place forever.</p>
          <p>No more excel sheet or manual records.</p>
          <p>Download your payroll history anytime you need it.</p>
        </div>
        <div className={styles.slide}>
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
        <div className={styles.slide}>
          <h6>Payroll in Seconds</h6>
          <p>Never again wil you spend more than 2 minutes on payroll.</p>
          <p>Just click on your staff annd bulk-pay them at once.</p>
          <p>Payment is done permanently.</p>
        </div>
      </div>
    </div>
  );
}
