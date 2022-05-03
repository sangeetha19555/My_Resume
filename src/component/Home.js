// Home page
export function Home() {
  return (
    <div id="home">
      {/* <!-- Section Starts  here--> */}
      <section className="profile_conatiner">
        <div className="profile_imgBx">
          <div className="social-icons">
            <img src="images/html.webp" alt="html" />
            <img src="images/css.webp" alt="css" />
            <img src="/images/JS.png" alt="js" width="60px" />
            <img src="/images/react.png" alt="react" />
            <img src="/images/bootstrap.png" alt="bootstrap" />
            <img src="/images/MongoDBicon.png" alt="MongoDB" />
          </div>
          <img
            className="email-icon profile"
            src="/images/Profile.jpeg"
            alt="profile"
          />
        </div>
        <div className="profile-content">
          <h2>
            <span>
              <img
                className="profile-content_hello_image"
                src="https://c.tenor.com/yWSRmymbuBkAAAAC/waving-hi.gif"
                alt="Hai-emoji"
              />
            </span>
            Hello,
            <br />
            <span> I am Sangeetha.</span>
          </h2>

          <p> I'm a Full Stack Web Developer. . .</p>
          <a
            href="#contact_us"
            className="btn-contact"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1MQT8TpQURvKcAW-mcwFdfgV1ln_9Rt2Z/view?usp=sharing"
            target="_blank"
            className="btn"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>

        <div className="header-footer-icons">
          <ul className="sci">
            <li>
              <a
                href="https://github.com/jadore-coder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="mailto:sangeeswty4@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="tel:+91 8190872950">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p className="copyrightText">@2022 sangeetha</p>
        </div>
      </section>
    </div>
  );
}
