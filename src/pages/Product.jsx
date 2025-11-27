import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWise is an travel documentation system you can use to share on
            social media, with employers or business clients. Use our
            interactive map to mark you previous places of travel and add notes
            for future reference.
          </p>
          <p>
            With this product it becomes your personal travel diary. No need to
            forget what you did on your travels and how you navigated your first
            trip to a new country; keep everything recorded with our
            confidential travel recording system.
          </p>
        </div>
      </section>
    </main>
  );
}
