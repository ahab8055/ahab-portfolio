import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const resumeHref = `${import.meta.env.BASE_URL}Ahab_Latif_Resume.pdf`;

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-availability">
          <p className="contact-availability-title">
            Available for remote contract / full-time work — Full-Stack AI
            Engineer
          </p>
          <p className="contact-availability-rate">
            Open to low–medium USD-rate remote roles
          </p>
          <div className="contact-cta-row">
            <a
              className="contact-cta"
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              Download Résumé <MdArrowOutward />
            </a>
            <a
              className="contact-cta contact-cta-github"
              href="https://github.com/ahab8055"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:muhammadahab8055@gmail.com" data-cursor="disable">
                muhammadahab8055@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+92 313 *** 8667</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ahab8055"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social contact-social-github"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ahab/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/ahab_muhammad"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ahab.latif/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ahab Latif</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
