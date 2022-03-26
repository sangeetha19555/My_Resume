// *************** Skill ***************
export function SkillPage() {
  return (
    <div>
      <article id="skill">
        <section className="skill-containter">
          <h1 className="title-text">
            <p className="texthover">Skills</p>
          </h1>
          {/* <!-- <h2>Skills</h2> -->
          <!-- logos --> */}
          <div className="language-logos-container">
            <div class="logo-box">
              <div class="language-logos">
                <img
                  src="https://img.icons8.com/color/144/000000/html-5--v1.png"
                  alt="Html5"
                />
              </div>
              <div class="language-logos">
                <img
                  src="https://img.icons8.com/color/144/000000/css3.png"
                  alt="css3"
                />
              </div>
              <div class="language-logos">
                <img
                  src="https://i.ibb.co/zx0Tt9M/bootstrap.png"
                  alt="bootstrap"
                />
              </div>
              <div class="language-logos">
                <img
                  src="https://img.icons8.com/color/144/000000/javascript.png"
                  alt="Javascript"
                />
              </div>

              <div class="language-logos">
                <img
                  src="https://img.icons8.com/color/144/000000/react-native.png"
                  alt="React"
                />
              </div>
              <div class="language-logos">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/1200px-Antu_mongodb.svg.png"
                  alt="MongoDB"
                />
              </div>

              <div class="language-logos">
                <img src="https://i.ibb.co/zs6B3yR/sass.png" alt="Sass" />
              </div>
              <div class="language-logos">
                <img
                  src="https://img.icons8.com/color/144/000000/material-ui.png"
                  alt="material-ui"
                />
              </div>
              <div class="language-logos">
                <img
                  src="https://lh3.googleusercontent.com/proxy/_u32IOlfbqC102k-2Ji2xcP5aVgd_SP31oPC_Suo0A-rE7K2j8_sgyMwYVw8n1twsN29PbPp2gA84fbw-Diyvi6lq-2HcIQiuxI"
                  alt="nodejs"
                />
              </div>
              <div class="language-logos">
                <img
                  src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
                  alt="nodejs"
                />
              </div>
            </div>
          </div>

          <div className="skill-containter-box">
            <div className="bar_container">
              {/* <!-- skill bar starts 1 --> */}
              <div className="skills">
                <span className="Name">Html5</span>
                <div className="percent">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
                <span className="Value">95%</span>
              </div>
              {/* <!-- skill bar ENDS  --> */}

              {/* <!-- skill bar starts 2  --> */}
              <div className="skills">
                <span className="Name">Css3</span>
                <div className="percent">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
                <span className="Value">80%</span>
              </div>
              {/* <!-- skill bar ENDS  -->

          <!-- skill bar starts 3  --> */}
              <div className="skills">
                <span className="Name">Bootstrap</span>
                <div className="percent">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
                <span className="Value">70%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 4 --> */}
              <div className="skills">
                <span className="Name">Javascript</span>
                <div className="percent">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
                <span className="Value">70%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 5  --> */}
              <div className="skills">
                <span className="Name">React</span>
                <div className="percent">
                  <div className="progress" style={{ width: "60%" }}></div>
                </div>
                <span className="Value">60%</span>
              </div>
              {/* <!-- skill bar ENDS  --> */}
            </div>

            <div className="bar_container bar_container2">
              {/* <!-- skill bar starts 1  --> */}
              <div className="skills">
                <span className="Name">MongoDB</span>
                <div className="percent">
                  <div className="progress" style={{ width: "50%" }}></div>
                </div>
                <span className="Value">50%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 2  --> */}
              <div className="skills">
                <span className="Name">Sass</span>
                <div className="percent">
                  <div className="progress" style={{ width: "40%" }}></div>
                </div>
                <span className="Value">40%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 3 --> */}
              <div className="skills">
                <span className="Name">material</span>
                <div className="percent">
                  <div className="progress" style={{ width: "50%" }}></div>
                </div>
                <span className="Value">50%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 4  --> */}
              <div className="skills">
                <span className="Name">nodejs</span>
                <div className="percent">
                  <div className="progress" style={{ width: "55%" }}></div>
                </div>
                <span className="Value">55%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 5 --> */}
              <div className="skills">
                <span className="Name">github</span>
                <div className="percent">
                  <div className="progress" style={{ width: "60%" }}></div>
                </div>
                <span className="Value">60%</span>
              </div>
              {/* <!-- skill bar ENDS  --> */}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
