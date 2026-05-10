import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
  <SEO
    title="Contact Remya Management W.L.L | Hospitality Management Bahrain"
    description="Contact Remya Management W.L.L in Bahrain for hospitality management, hotel operations support, guest experience solutions, and business inquiries."
    canonical="https://remyamanagement.com/contact"
  />
    <main className="contactPage">
      <section className="contactHero">
        <div className="contactWrap">
          <div className="contactFormBox">
            <span className="sectionTag">Get In Touch</span>
            <h1>Contact Us</h1>
            <p>
              Have a question or want to discuss a hospitality management
              opportunity? Send us a message and our team will get back to you.
            </p>

            <form
              className="contactFormPro"
              action="https://formsubmit.co/remyamadan@yahoo.in"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Website Enquiry - Remya Management" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Phone Number" />
              <textarea name="message" placeholder="Your Message" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contactInfoBox">
            <span className="sectionTag">Contact Info</span>
            <h2>Let’s talk about your next hospitality project.</h2>

            <div className="contactInfoList">
              <div>
                <MapPin />
                <p>Office 520 Road 3513 Block 335 Um Al Hassan, Manama, Bahrain</p>
              </div>

              <div>
                <Phone />
                <a href="tel:17001918">1700 1918</a>
              </div>

              <div>
                <Mail />
                <a href="mailto:remyamadan@yahoo.in">remyamadan@yahoo.in</a>
              </div>

              <div>
                <Clock />
                <p>Sun - Thu | 10:00 AM - 05:00 PM</p>
              </div>

              <div>
                <span className="fbIcon">f</span>
<a
  href="https://www.facebook.com/p/Remya-Management-SPC-100063519401631/"
  target="_blank"
  rel="noreferrer"
>
  Remya Management Facebook
</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}