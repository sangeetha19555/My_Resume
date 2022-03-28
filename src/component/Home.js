// Home page
export function Home() {
  return (
    <div id="home">
      {/* <!-- Section Starts  here--> */}
      <section class="profile_conatiner">
        <div class="profile_imgBx">
          <div class="social-icons">
            <img src="images/html.webp" alt="html" />
            <img src="images/css.webp" alt="css" />
            <img src="/images/JS.png" alt="js" width="60px" />
            <img src="/images/react.png" alt="react" />
            <img src="/images/bootstrap.png" alt="bootstrap" />
            <img src="/images/MongoDBicon.png" alt="MongoDB" />
          </div>
          <img
            class="email-icon profile"
            src="/images/Profile.jpeg"
            alt="profile"
          />
        </div>
        <div class="profile-content">
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
          <a href="#contact_us" class="btn-contact" rel="noopener noreferrer">
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1UicnY7sOJ6Kp-Yxf9exHbfE_uOpSX4AV/view?usp=sharing"
            target="_blank"
            class="btn"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>

        <div class="header-footer-icons">
          <ul class="sci">
            <li>
              <a
                href="https://github.com/Sangeetha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="mailto:sangeeswty4@gmail.com">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="tel:+91 8190872950">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p class="copyrightText">@2022 sangeetha</p>
        </div>
      </section>
    </div>
  );
}
