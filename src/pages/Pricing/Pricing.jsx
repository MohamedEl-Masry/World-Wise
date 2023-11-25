import Navbar from "../../components/Navbar/Navbar";
import styles from "../Product/Product.module.css";

export default function Pricing() {
  return (
    <main className={styles.product}>
      <div className="nav position-relative ">
        <Navbar />
      </div>

      <section>
        <div className="mt-5 content-pricing">
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <div className="mt-5 img-pricing">
          <img
            src="src/assets/img-2.jpg"
            alt="overview of a large city with skyscrapers"
          />
        </div>
      </section>
    </main>
  );
}
