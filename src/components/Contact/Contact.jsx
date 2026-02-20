import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact me</h2>
      <div className="contact-me">
        <p className="contact-intro">
          Want to get in touch? Feel free to reach out via email or connect with me on LinkedIn or GitHub.
        </p>
        <address className="contact-info">
          <p className="contact-text">
            <a className="contact-link" href="mailto:hanna.mickels@gmail.com">
              <i className="bx bxs-envelope" aria-hidden="true"></i>
              <span>hanna.mickels@gmail.com</span>
            </a>
          </p>
          <ul className="contact-list">
            <li>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/hanna-mickels-3a54b3173"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="contact-link"
                href="https://github.com/Hanna282"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github" aria-hidden="true"></i>
                GitHub
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  )
}

export default Contact