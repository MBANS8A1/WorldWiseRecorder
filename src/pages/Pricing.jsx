// Uses the same styles as Product
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just £12/month.
          </h2>
          <p>
            For the simple monthly price above you can use the WorldWise
            application across iPhone, Mac, Windows and Android devices. In
            addition, get access 200GB of cloud storage for photo and video
            content. Furthermore, if you are an avid content creator or
            traveller, you can get access to our exclusive coupon system where
            you get a 5% discount on flights to countries in the European Union
            within the month of your subscription. Take advantage of this
            special offer whilst you still can.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
