import React from "react";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
// material icons

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Project() {
  return (
    <div id="project">
      <div className="project-container">
        {/* project__titile */}
        <div className="project-container-title">
          <h1>Project</h1>
        </div>
        {/* ======= project__titile Ends Here========= */}

        {/* content Starts Here*/}
        <div className="project-box">
          {/* Container Box 1 starts Here */}
          <div className="project-box__container">
            <div>
              <img
                className="project_image"
                src="/images/anime.png"
                alt="Anime_image"
              />
            </div>

            <div className="project-box__content">
              <div className="project-box__content--box">
                <div className="project-box__content--box--title">
                  <h2>Anime</h2>
                </div>
                <div className="project-box__content--box--icon">
                  <a
                    href="https://github.com/Sangeetha19057/Anime_API_Task"
                    target="_blank"
                  >
                    <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                  </a>
                  <Tooltip title="Open the Link">
                    <IconButton>
                      <a
                        href="https://affectionate-amine-api-task.netlify.app"
                        target="_blank"
                      >
                        <OpenInNewIcon
                          className="icon_color"
                          sx={{ fontSize: 33 }}
                        />
                      </a>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              {/* code icon */}
              <div className="project-box__content--code_icons">
                <div className="code_icons bg-yellow">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Javascript</span>
                </div>

                <div className="code_icons bg-orange">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text ">Html</span>
                </div>

                <div className="code_icons bg-blue">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Css</span>
                </div>
              </div>
              {/* ==================== code icon Ends here=======================*/}

              <p className="text_explaination">
                A simple Calculator webpage using Html, CSS and JavaScript which
                can perform all the basic math operations.
              </p>
            </div>
          </div>
          {/*=========== Container Box 1 Ends Here ========= */}
          {/* =========================================================================================== */}

          {/* Container Box 2 starts Here */}
          <div className="project-box__container">
            <div>
              <img
                className="project_image"
                src="/images/calc.png"
                alt="Covid_image"
              />
            </div>

            <div className="project-box__content">
              <div className="project-box__content--box">
                <div className="project-box__content--box--title">
                  <h2>Calculator</h2>
                </div>
                <div className="project-box__content--box--icon">
                  <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                  <Tooltip title="Open the Link">
                    <IconButton>
                      <a
                        href="https://affectionate-amine-api-task.netlify.app"
                        target="_blank"
                      >
                        <OpenInNewIcon
                          className="icon_color"
                          sx={{ fontSize: 33 }}
                        />
                      </a>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              {/* code icon */}
              <div className="project-box__content--code_icons">
                <div className="code_icons bg-yellow">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Javascript</span>
                </div>

                <div className="code_icons bg-orange">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text ">Html</span>
                </div>

                <div className="code_icons bg-blue">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Css</span>
                </div>
              </div>
              {/* ==================== code icon Ends here=======================*/}

              <p className="text_explaination">
                A simple Calculator webpage using Html, CSS and JavaScript which
                can perform all the basic math operations.
              </p>
            </div>
          </div>
          {/*=========== Container Box 2 Ends Here ========= */}
          {/* =========================================================================================== */}

          {/* Container Box 3 starts Here */}
          <div className="project-box__container">
            <div>
              <img
                className="project_image"
                src="/images/covid_1.png"
                alt="Covid_image"
              />
            </div>

            <div className="project-box__content">
              <div className="project-box__content--box">
                <div className="project-box__content--box--title">
                  <h2>COVID Live Update</h2>
                </div>
                <div className="project-box__content--box--icon">
                  <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />

                  <Tooltip title="Open the Link">
                    <IconButton>
                      <a
                        href="https://affectionate-amine-api-task.netlify.app"
                        target="_blank"
                      >
                        <OpenInNewIcon
                          className="icon_color"
                          sx={{ fontSize: 33 }}
                        />
                      </a>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>

              {/* code icon */}
              <div className="project-box__content--code_icons">
                <div className="code_icons bg-yellow">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Javascript</span>
                </div>

                <div className="code_icons bg-orange">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text ">Html</span>
                </div>

                <div className="code_icons bg-blue">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Css</span>
                </div>
              </div>
              {/* ==================== code icon Ends here=======================*/}

              <p className="text_explaination">
                A simple Calculator webpage using Html, CSS and JavaScript which
                can perform all the basic math operations.
              </p>
            </div>
          </div>
          {/*=========== Container Box 3 Ends Here ========= */}
          {/* =========================================================================================== */}

          {/* Container Box 4 starts Here */}
          <div className="project-box__container">
            <div>
              <img
                className="project_image"
                src="/images/thirukkural.png"
                alt="Covid_image"
              />
            </div>

            <div className="project-box__content">
              <div className="project-box__content--box">
                <div className="project-box__content--box--title">
                  <h2>Thirukkural</h2>
                </div>
                <div className="project-box__content--box--icon">
                  <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                  <Tooltip title="Open the Link">
                    <IconButton>
                      <a
                        href="https://affectionate-amine-api-task.netlify.app"
                        target="_blank"
                      >
                        <OpenInNewIcon
                          className="icon_color"
                          sx={{ fontSize: 33 }}
                        />
                      </a>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              {/* code icon */}
              <div className="project-box__content--code_icons">
                <div className="code_icons bg-yellow">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Javascript</span>
                </div>

                <div className="code_icons bg-orange">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text ">Html</span>
                </div>

                <div className="code_icons bg-blue">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                    alt="js"
                    width="15px"
                  />
                  <span className="text">Css</span>
                </div>
              </div>
              {/* ==================== code icon Ends here=======================*/}

              <p className="text_explaination">
                A simple Calculator webpage using Html, CSS and JavaScript which
                can perform all the basic math operations.
              </p>
            </div>
            {/*=========== Container Box 4 Ends Here ========= */}
            {/* =========================================================================================== */}
          </div>
        </div>
      </div>
    </div>
  );
}
