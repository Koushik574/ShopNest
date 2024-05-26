import { useContext } from "react";
import UserContext from "../../context/UserContext";

const About = () => {
    const data = useContext(UserContext);
    console.log("About", data);

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>About Us</h1>
            <p style={{ textAlign: "center" }}>"Welcome to ShopNest!"</p>

            <section style={{ textAlign: "center", marginBottom: "20px" }}>
                <h2>Our Story</h2>
                <p>
                    ShopNest was founded in 2024 with a mission to provide the best online shopping experience. 
                    Our passion for excellence has driven us from the beginning and continues to drive us into the future.
                </p>
            </section>

            <section style={{ textAlign: "center", marginBottom: "20px" }}>
                <h2>Meet the Founder</h2>
                <div style={{ textAlign: "center" }}>
                    <img 
                        src="https://ik.imagekit.io/nknso76xld/E-Com%20WebApp%20Icon%20Image/formalpic.jpg?updatedAt=1716479500906" 
                        alt="Sai Koushik" 
                        style={{ width: "150px", borderRadius: "50%" }} 
                    />
                    <h3>Sai Koushik</h3>
                    <p>Founder & CEO</p>
                </div>
            </section>

            <section style={{ marginBottom: "20px" }}>
                <h2 style={{ textAlign: "center" }}>Our Core Values</h2>
                <ul style={{ listStyleType: "none", padding: "0", textAlign: "center" }}>
                    <li>Quality: We ensure top-notch quality in all our products.</li>
                    <li>Customer Satisfaction: Our customers' happiness is our priority.</li>
                    <li>Innovation: We strive to bring the latest and greatest to our customers.</li>
                    <li>Integrity: We conduct our business with honesty and integrity.</li>
                </ul>
            </section>

            <section style={{ textAlign: "center", marginBottom: "20px" }}>
                <h2>Testimonials</h2>
                <div style={{ marginTop: "20px" }}>
                    <div style={{ marginBottom: "20px" }}>
                        <p>"This is the best e-commerce site ever!"</p>
                        <p>Arun</p>
                    </div>
                    <div>
                        <p>"Excellent customer service and great products."</p>
                        <p>Natasha</p>
                    </div>
                </div>
            </section>

            <section style={{ textAlign: "center", marginBottom: "20px" }}>
                <h2>Contact Us</h2>
                <p>Email: contact@shopnest.com</p>
                <p>Phone: (+91) 123 45 678 90</p>
                <p>Address: 13 Bandra, Mumbai</p>
            </section>

            <section style={{ textAlign: "center" }}>
                <h2>Follow Us</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                    <a href="https://www.facebook.com/shopnest" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com/shopnest" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/shopnest" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </section>
        </div>
    );
}

export default About;
