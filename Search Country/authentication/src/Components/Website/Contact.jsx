import { useNavigate } from "react-router-dom";
import styles from "../../Styles/Contact.module.css"

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Contact Us</h1>
        <p>
          We value your feedback and are here to assist you. <br></br> If you have any questions or inquiries, please feel free to reach out to us.
        </p>
        <button className={styles.ctaButton} onClick={() => navigate("/about")}>
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>How We Can Help</h2>
        <p>
          Our team is committed to providing you with the support and resources you need. Here are some of the key areas where we can assist:
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3>Customer Support</h3>
            <p>
              Our dedicated customer support team is available to address your inquiries and resolve any issues you may encounter.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Technical Assistance</h3>
            <p>
              We provide technical support to ensure that you can make the most of our services and resources.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Feedback and Suggestions</h3>
            <p>
              Your feedback is invaluable to us. Share your thoughts and suggestions to help us improve our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
