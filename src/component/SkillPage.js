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
            <div className="logo-box">
              <div className="language-logos">
                <img src="images/skill_html.png" alt="Html5" />
              </div>
              <div className="language-logos">
                <img src="images/skill_css3.png" alt="css3" />
              </div>
              <div className="language-logos">
                <img src="images/skill_bootstrap.png" alt="bootstrap" />
              </div>
              <div className="language-logos">
                <img src="images/skill_javascript.png" alt="Javascript" />
              </div>

              <div className="language-logos">
                <img src="images/skill_react.png" alt="React" />
              </div>
              <div className="language-logos">
                <img src="images/skill_mongodb.png" alt="MongoDB" />
              </div>

              <div className="language-logos">
                <img src="images/skill_sass.png" alt="Sass" />
              </div>
              <div className="language-logos">
                <img src="images/skill_material-ui.png" alt="material-ui" />
              </div>
              <div className="language-logos">
                <img src="images/skill_node-js.webp" alt="nodejs" />
              </div>
              <div className="language-logos">
                <img src="images/skill_github.png" alt="github" />
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
                  <div className="progress" style={{ width: "87%" }}></div>
                </div>
                <span className="Value">87%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 4 --> */}
              <div className="skills">
                <span className="Name">Javascript</span>
                <div className="percent">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
                <span className="Value">80%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 5  --> */}
              <div className="skills">
                <span className="Name">React</span>
                <div className="percent">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
                <span className="Value">75%</span>
              </div>
              {/* <!-- skill bar ENDS  --> */}
            </div>

            <div className="bar_container bar_container2">
              {/* <!-- skill bar starts 1  --> */}
              <div className="skills">
                <span className="Name">MongoDB</span>
                <div className="percent">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
                <span className="Value">80%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 2  --> */}
              <div className="skills">
                <span className="Name">Sass</span>
                <div className="percent">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
                <span className="Value">70%</span>
              </div>
              {/* <!-- skill bar ENDS  -->
          <!-- skill bar starts 3 --> */}
              <div className="skills">
                <span className="Name">material</span>
                <div className="percent">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
                <span className="Value">70%</span>
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
