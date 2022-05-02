// header page
export function Header() {
  return (
    <div>
      <header id="header">
        <div href="#ref" className="logo">
          <h3>
            <span className="logo_text-1">&#x2774;</span>S
            <span className="logo_text-2">&#x2775;</span>
          </h3>
        </div>
        <div className="toggle"></div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
