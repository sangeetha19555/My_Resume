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
            Hello, I am
            <br />
            <span>Sangeetha</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam
            nihil temporibus fugit! Quisquam fugit laboriosam vero quod. Velit
            voluptatem reiciendis possimus perspiciatis et sed nulla ut odio,
            consequatur iure.
          </p>
          <a
            href="https://drive.google.com/file/d/1UicnY7sOJ6Kp-Yxf9exHbfE_uOpSX4AV/view?usp=sharing"
            target="_blank"
            class="btn"
            rel="noopener noreferrer"
          >
            Download My CV
          </a>
        </div>

        {/* <div class="header-footer-icons">
          <ul class="sci">
            <li>
              <a href="#">
                <img src="facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="twitter.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="instagram.png" alt="facebook" />
              </a>
            </li>
          </ul>
          <p class="copyrightText">@2021 sangeetha</p>
        </div> */}
      </section>
    </div>
  );
}
