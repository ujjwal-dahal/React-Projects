import { useNavigate } from "react-router-dom";
import styles from '../../Styles/Services.module.css';

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className={styles.servicesContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Our Services</h1>
        <p>
          We are committed to delivering exceptional services tailored to meet your unique needs.<br></br> Explore our range of offerings to elevate your experience.
        </p>
        <button className={styles.ctaButton} onClick={() => navigate("/about")}>
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>What We Offer</h2>
        <p>
          Our comprehensive suite of services is designed to empower you and drive your success. Discover how we can help you achieve your goals:
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3>Consulting Services</h3>
            <p>
              Our expert consultants provide valuable insights and strategies to help you navigate complex challenges and achieve your objectives.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Product Development</h3>
            <p>
              We specialize in creating innovative products tailored to your specifications, ensuring high quality and efficiency.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Customer Support</h3>
            <p>
              Our dedicated support team is here to assist you, ensuring your experience is seamless and satisfactory.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
