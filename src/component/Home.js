// Home page
export function Home() {
  return (
    <div>
      {/* <!-- Section Starts  here--> */}
      <section class="profile_conatiner">
        <div class="profile_imgBx">
          <div class="social-icons">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              alt="html"
            />
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt="css"
            />
            <img
              src="https://selflearning.io/uploads/subcategory/JS.png"
              alt="css"
              width="60px"
            />
            <img
              src="https://kripton.dexignzone.com/welcome/images/icons/43.png"
              alt="css"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="css"
            />
            <img
              src="https://code4developers.com/wp-content/uploads/2019/10/MongoDBicon.png"
              alt="css"
            />
          </div>
          <img
            class="email-icon profile"
            src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
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
                href="https://github.com/Sangeetha19057"
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
