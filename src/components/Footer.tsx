type Props = {
  navigate: (page: string) => void;
};

export function Footer({ navigate }: Props) {
  return (
    <footer className="footer">
      <div>
        <strong>yesCode Design</strong>
        <p>Product Leadership. Product Strategy. Design that is ready to be built.</p>
      </div>
      <div className="footer-links">
        {["work", "services", "about", "contact"].map((item) => (
          <button key={item} onClick={() => navigate(item)}>
            {item}
          </button>
        ))}
        <a href="https://github.com/Oyewolesyl/yesCode" target="_blank" rel="noreferrer">
          yesCode
        </a>
      </div>
    </footer>
  );
}
