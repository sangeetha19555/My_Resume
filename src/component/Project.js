import React from "react";
import "./Project.css";
// material icons

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

export default function Project() {
  return (
    <div>
      <div id="project" style={{ marginTop: "40px" }}>
        <div className="project-container">
          <div
            className="project-container-title"
            style={{ marginBottom: "80px" }}
          >
            <div className="title">
              <h2 className="titleText">
                <span>P</span>roject
              </h2>
            </div>

            <p>
              I love building projects and practice my Program skills, <br />
              here's some of the project that I've worked on.
            </p>
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
                      href="https://github.com/Sangeetha1905/Anime-App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>

                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://affectionate-amine-api-task.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      src="images/project_JavaScript.png"
                      alt="js"
                      width="15px"
                    />
                    <span className="text">Javascript</span>
                  </div>

                  <div className="code_icons bg-orange">
                    <img
                      src="images/project_html.png"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">Html</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_css.png" alt="css" width="15px" />
                    <span className="text">Css</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  This is an Anime webpage using Html, Css and DOM Js. Which
                  helps to search Anime Info(name, Type of series, Rating . .
                  ect)
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
                    <a
                      href="https://github.com/Sangeetha1905/Calculator-Task"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://musing-mayer-fcf3ed.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      src="images/project_JavaScript.png"
                      alt="js"
                      width="15px"
                    />
                    <span className="text">Javascript</span>
                  </div>

                  <div className="code_icons bg-orange">
                    <img
                      src="images/project_html.png"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">Html</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_css.png" alt="css" width="15px" />
                    <span className="text">Css</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  A simple Calculator webpage using Html, CSS and JavaScript
                  which can perform all the basic math operations.
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
                    <a
                      href="https://github.com/Sangeetha1905/Covid-19-API"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>

                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://mystifying-afbfa7.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      src="images/project_JavaScript.png"
                      alt="js"
                      width="15px"
                    />
                    <span className="text">Javascript</span>
                  </div>

                  <div className="code_icons bg-orange">
                    <img
                      src="images/project_html.png"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">Html</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_css.png" alt="css" width="15px" />
                    <span className="text">Css</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  This webpage gives live COVID updates. Using API we get daily
                  updates.
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
                    <a
                      href="https://github.com/Sangeetha1905/Thirukkural-API"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://adoring-neumann-df3583.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      src="images/project_JavaScript.png"
                      alt="js"
                      width="15px"
                    />
                    <span className="text">Javascript</span>
                  </div>

                  <div className="code_icons bg-orange">
                    <img
                      src="images/project_html.png"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">Html</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_css.png" alt="css" width="15px" />
                    <span className="text">Css</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  This is a Thirukkural webpage. We can search Thirukkural from
                  1 to 1330 and also it gives an explaination.
                </p>
              </div>
              {/*=========== Container Box 4 Ends Here ========= */}
              {/* =========================================================================================== */}
            </div>

            {/* ============================================================================ */}
            {/* Container Box 5 starts Here */}
            <div className="project-box__container">
              <div>
                <img
                  className="project_image"
                  src="/images/CRUD.png"
                  alt="Covid_image"
                />
              </div>

              <div className="project-box__content">
                <div className="project-box__content--box">
                  <div className="project-box__content--box--title">
                    <h2>UserList</h2>
                  </div>
                  <div className="project-box__content--box--icon">
                    <a
                      href="https://github.com/Sangeetha1905/react_user_crud"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://react-user-crud-app.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                  <div className="code_icons bg-green">
                    <img
                      src="images/nodejs_icon.webp"
                      alt="nodejs"
                      width="15px"
                    />
                    <span className="text ">nodejs</span>
                  </div>
                  <div className="code_icons bg-blue">
                    <img src="images/project_react.png" alt="js" width="15px" />
                    <span className="text">React</span>
                  </div>

                  <div className="code_icons bg-green">
                    <img
                      src="images/project_mongodb.png"
                      alt="css"
                      width="15px"
                    />
                    <span className="text">MongoDB</span>
                  </div>
                  {/*  */}
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  A UserList webpage using html, css and React. We can Add user,
                  Edit user, Delete user (CURD Operations) getting all the datas
                  from DB.
                </p>
              </div>
              {/*=========== Container Box 5 Ends Here ========= */}
              {/* =========================================================================================== */}
            </div>
            {/* ============================================================================ */}

            {/* ============================================================================ */}
            {/* Container Box 6 starts Here */}
            <div className="project-box__container">
              <div>
                <img
                  className="project_image"
                  src="/images/kitchen-recipe.png"
                  alt="Covid_image"
                />
              </div>

              <div className="project-box__content">
                <div className="project-box__content--box">
                  <div className="project-box__content--box--title">
                    <h2>kitchen recipe Management</h2>
                  </div>
                  <div className="project-box__content--box--icon">
                    <a
                      href="https://github.com/Sangeetha1905/Kitchen-Recipe-Management"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://kitchen-recpie-management.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                  <div className="code_icons bg-green">
                    <img
                      src="images/nodejs_icon.webp"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">nodejs</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_react.png" alt="js" width="15px" />
                    <span className="text">React</span>
                  </div>

                  <div className="code_icons bg-green">
                    <img
                      src="images/project_mongodb.png"
                      alt="css"
                      width="15px"
                    />
                    <span className="text">MongoDB</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  kitchen recipe website using html, Css, Nodejs and MongoDB.
                  Login to Add favorite food here you can search recipes and
                  enjoy you food.
                </p>
              </div>
              {/*=========== Container Box 6 Ends Here ========= */}
              {/* =========================================================================================== */}
            </div>
            {/* ============================================================================ */}

            {/* ============================================================================ */}
            {/* Container Box 7 starts Here */}
            <div className="project-box__container">
              <div>
                <img
                  className="project_image"
                  src="/images/resume builder.png"
                  alt="Covid_image"
                />
              </div>

              <div className="project-box__content">
                <div className="project-box__content--box">
                  <div className="project-box__content--box--title">
                    <h2>Resume Builder</h2>
                  </div>
                  <div className="project-box__content--box--icon">
                    <a
                      href="https://github.com/Sangeetha1905/resume-builder-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://resume-builder-220509-4dw.netlify.app/#/mainpage"
                          target="_blank"
                          rel="noopener noreferrer"
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
                  <div className="code_icons bg-green">
                    <img
                      src="images/nodejs_icon.webp"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">nodejs</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_react.png" alt="js" width="15px" />
                    <span className="text">React</span>
                  </div>

                  <div className="code_icons bg-green">
                    <img
                      src="images/project_mongodb.png"
                      alt="css"
                      width="15px"
                    />
                    <span className="text">MongoDB</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  This is a resume builder website using react, Nodejs and
                  MongoDB. Login to create your resume then select the template
                  and download your resume.
                </p>
              </div>
              {/*=========== Container Box 7 Ends Here ========= */}
              {/* =========================================================================================== */}
            </div>
            {/* ============================================================================ */}

            {/* ============================================================================ */}
            {/* Container Box 8 starts Here */}
            <div className="project-box__container">
              <div>
                <img
                  className="project_image"
                  src="/images/shopping_cart1.png"
                  alt="Covid_image"
                />
              </div>

              <div className="project-box__content">
                <div className="project-box__content--box">
                  <div className="project-box__content--box--title">
                    <h2>Shopping Cart</h2>
                  </div>
                  <div className="project-box__content--box--icon">
                    <a
                      href="https://github.com/Sangeetha1905/shopping-cart"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    </a>
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://shopping-cart-220527.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                  <div className="code_icons bg-violet">
                    <img
                      src="images/Bootstrap_logo.png"
                      alt="bootstrap"
                      width="19px"
                    />
                    <span className="text ">bootstrap</span>
                  </div>

                  <div className="code_icons bg-orange">
                    <img
                      src="images/project_html.png"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">Html</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_css.png" alt="css" width="15px" />
                    <span className="text">Css</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  This a shopping cart website using html css , bootstrap and
                  JavaScript.
                </p>
              </div>
              {/*=========== Container Box 8 Ends Here ========= */}
              {/* =========================================================================================== */}
            </div>
            {/* ============================================================================ */}

            {/* Container Box 8 starts Here */}
            <div className="project-box__container">
              <div>
                <img
                  className="project_image"
                  src="/images/mr_and_mrs.png"
                  alt="Covid_image"
                />
              </div>

              <div className="project-box__content">
                <div className="project-box__content--box">
                  <div className="project-box__content--box--title">
                    <h2>Event Planner</h2>
                  </div>
                  <div className="project-box__content--box--icon">
                    {/* <a href="/" rel="noopener noreferrer"> */}
                    <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    {/* </a> */}
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://mr-and-mrs-event-planner220706.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                  <div className="code_icons bg-blue">
                    <img src="images/project_react.png" alt="js" width="15px" />
                    <span className="text">React</span>
                  </div>
                  <div className="code_icons bg-yellow">
                    <img
                      src="images/project_JavaScript.png"
                      alt="js"
                      width="15px"
                    />
                    <span className="text">Javascript</span>
                  </div>
                  <div className="code_icons bg-blue">
                    <img src="images/project_css.png" alt="css" width="15px" />
                    <span className="text">Css</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  This a Event Planner website using react, html, css and
                  JavaScript.
                </p>
              </div>
              {/*=========== Container Box 8 Ends Here ========= */}
              {/* =========================================================================================== */}
            </div>
            {/* ============================================================================ */}

            {/* Container Box 8 starts Here */}
            <div className="project-box__container">
              <div>
                <img
                  className="project_image"
                  src="/images/wedding.png"
                  alt="Covid_image"
                />
              </div>

              <div className="project-box__content">
                <div className="project-box__content--box">
                  <div className="project-box__content--box--title">
                    <h2>Wedding Site</h2>
                  </div>
                  <div className="project-box__content--box--icon">
                    {/* <a href="/" rel="noopener noreferrer"> */}
                    <GitHubIcon className="icon-git" sx={{ fontSize: 30 }} />
                    {/* </a> */}
                    <Tooltip title="Open the Link">
                      <IconButton>
                        <a
                          href="https://kumaresan-weds-jaya.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      src="images/project_JavaScript.png"
                      alt="js"
                      width="15px"
                    />
                    <span className="text">Javascript</span>
                  </div>
                  <div className="code_icons bg-orange">
                    <img
                      src="images/project_html.png"
                      alt="html"
                      width="15px"
                    />
                    <span className="text ">Html</span>
                  </div>

                  <div className="code_icons bg-blue">
                    <img src="images/project_css.png" alt="css" width="15px" />
                    <span className="text">Css</span>
                  </div>
                </div>
                {/* ==================== code icon Ends here=======================*/}

                <p className="text_explaination">
                  This a wedding website using html, css and JavaScript.
                </p>
              </div>
              {/*=========== Container Box 8 Ends Here ========= */}
              {/* =========================================================================================== */}
            </div>
            {/* ============================================================================ */}
            {/* over */}
          </div>
        </div>
      </div>
    </div>
  );
}
