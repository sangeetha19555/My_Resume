// header page
export function Header() {
  return (
    <div>
      <header id="header">
        <a href="#ref" className="logo">
          S
        </a>
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
