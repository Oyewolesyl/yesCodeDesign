import logo from "../assets/brand/yescode-design-main.svg";

type Props = {
  page: string;
  navigate: (page: string) => void;
};

export function Navbar({ page, navigate }: Props) {
  const links = ["work", "services", "process", "about", "contact"];

  return (
    <header className="nav">
      <button className="brand" onClick={() => navigate("home")} aria-label="yesCode Design home">
        <img src={logo} alt="yesCode Design" />
      </button>
      <nav>
        {links.map((link) => (
          <button key={link} className={page === link ? "active" : ""} onClick={() => navigate(link)}>
            {link}
          </button>
        ))}
        <a href="https://github.com/Oyewolesyl/yesCode" target="_blank" rel="noreferrer">
          yesCode
        </a>
      </nav>
    </header>
  );
}
