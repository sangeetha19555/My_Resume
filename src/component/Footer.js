import "./Footer.css";
//Footer Page
export function Footer() {
  return (
    <div>
      {/* <img src="/images/green.png" alt="green_image" width="100%" /> */}
      <div className="footer-container">
        <div className="">
          <img
            // src="https://freepikpsd.com/file/2019/10/contact-us-icon-png-7-Transparent-Images.png"
            src="https://yethi.in/wp-content/uploads/2019/10/vector-contact-banner.png"
            alt="contact us"
            className="footer-container_image"
          />
        </div>
        <div className="footer-container_text ">
          <h2>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i> Contact
          </h2>
          <p className="footer-container_para">
            I’m a data analyst turned full-stack software engineer with a
            penchant for creative activities.
          </p>

          <ul class="sci_icon">
            {/* list 1 */}
            <li>
              <div className="footer_icon_container">
                <a
                  href="https://github.com/Sangeetha19057"
                  className="footer_icon_box"
                >
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <p className="footer_icon_box--text">
                  <a
                    href="https://github.com/Sangeetha19057"
                    target="_blank"
                    rel="noopener"
                  >
                    Sangeetha19057
                  </a>
                </p>
              </div>
            </li>

            {/* list 2 */}
            <li>
              <div className="footer_icon_container">
                <a
                  href="mailto:sangeeswty4@gmail.com"
                  className="footer_icon_box"
                >
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <p className="footer_icon_box--text">
                  <a href="mailto:sangeeswty4@gmail.com">
                    sangeeswty4@gmail.com
                  </a>
                </p>
              </div>
            </li>

            {/* list 3 */}
            <li>
              <div className="footer_icon_container">
                <a href="tel:+91 8190872950" className="footer_icon_box">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </a>
                <p className="footer_icon_box--text">
                  <a href="tel:+91 8190872950">+91 8190872950</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-container_copyrightText">
        <p>
          Copyright © 2022 <span class="copyright_name">Sangeetha.</span>
        </p>
      </div>
    </div>
  );
}