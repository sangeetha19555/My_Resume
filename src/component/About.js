import "./About.css";
export function About() {
  return (
    <div>
      <div id="about" style={{ marginTop: "0px" }}>
        <div>
          <div className="title" style={{ paddingTop: "50px" }}>
            <h2 className="titleText">
              <span>A</span>bout
            </h2>
          </div>
          {/* ====================================================== */}

          <div className="About_container">
            <div className="About_container-box1">
              <img src="images/girl.png" alt="about" />
            </div>

            <div className="About_container-box2">
              <p className="About_container-box2-para-text">
                {/* In my free time, I like to watch animes/web series, listen to music
            (and very early stage of learning piano), read and explore new stuff
            in tech and try out new technologies to build fun side projects, and
            spend time with friends and family. //// 
             */}
                A Full Stack Developer from Puducherry. Dedicated to creating
                and optimizing interactive, user-friendly and feature-rich web
                applications. Exposure to Front-end & Back-end web development,
                UI/UX and Progressive Web Application (PWA) development. Believe
                that continuous learning and belief are the key factors for
                achieving personal and professional success. Have the desire to
                learn and develop something new, as well as adhere to the rule
                "Good code is beautiful code" and try to follow all standards of
                the modern development process.
              </p>
            </div>
          </div>
          {/* ====================================================== */}
          {/* 2nd box */}
          <div className="About_container">
            <div className="timeline-box1">
              {/* timeline-area Starts */}
              <div className="timeline-area">
                <div className="timeline-area-box">
                  <h2>PERSONAL DETAILS</h2>
                  <h3>Name: Sangeetha.</h3>
                  <h3>D.O.B: 19-05-1997.</h3>
                  <h3>Language: Tamil / English.</h3>
                  <p>Extra-curricular: Learning New Technology.</p>
                </div>

                <div className="timeline-area-box">
                  <h2>EDUCATION</h2>
                  <h3>B.SC COMPUTER SCIENCE</h3>
                  <p className="timeline-small-text">
                    Bharathidasan Govt College for Women, Puducherry
                  </p>
                  <h4>2014 – 2017 (77.5%)</h4>
                </div>

                <div className="timeline-area-box">
                  <h2>WORK EXPERIENCE</h2>
                  <h3>E-PUB (1YR) </h3>
                  <p className="timeline-small-text">
                    Trinity Publishing Services Pvt Ltd
                  </p>
                  <h4>2017 - 2018</h4>
                </div>

                {/* timeline-area Ends*/}
              </div>
            </div>

            {/* =============================================================== */}
            <div className="timeline-box2">
              <img
                src="images/timeline.png"
                alt="about"
                className="timeline-book-img1"
              />
            </div>
          </div>
        </div>
        {/* ====================================================== */}
      </div>
    </div>
  );
}
