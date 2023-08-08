import Logo from "../Logo";
import "./styles.css";

export default function Navbar(): JSX.Element {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="content-wrapper">
          <div className="navbar__content">
            <Logo />
            <ul className="linklist">
              <li className="linklist__item">
                <a href="/" className="linklist__link">
                  Start
                </a>
              </li>
              <li className="linklist__item">
                <a href="#cta" className="linklist__link">
                  Link
                </a>
              </li>
              <li className="linklist__item">
                <a href="#" className="linklist__link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="linklist__icon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H7C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17V4H5C4.73478 4 4.48043 3.89464 4.29289 3.70711C4.10536 3.51957 4 3.26522 4 3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H7C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V5.001L8.073 5H17.927C19.072 5 20 5.895 20 7C20 7.146 19.983 7.291 19.95 7.434L18.799 12.434C18.589 13.349 17.747 14 16.775 14H8.073L8 13.999V16ZM7.5 22C7.10218 22 6.72064 21.842 6.43934 21.5607C6.15804 21.2794 6 20.8978 6 20.5C6 20.1022 6.15804 19.7206 6.43934 19.4393C6.72064 19.158 7.10218 19 7.5 19C7.89782 19 8.27936 19.158 8.56066 19.4393C8.84196 19.7206 9 20.1022 9 20.5C9 20.8978 8.84196 21.2794 8.56066 21.5607C8.27936 21.842 7.89782 22 7.5 22ZM16.5 22C16.1022 22 15.7206 21.842 15.4393 21.5607C15.158 21.2794 15 20.8978 15 20.5C15 20.1022 15.158 19.7206 15.4393 19.4393C15.7206 19.158 16.1022 19 16.5 19C16.8978 19 17.2794 19.158 17.5607 19.4393C17.842 19.7206 18 20.1022 18 20.5C18 20.8978 17.842 21.2794 17.5607 21.5607C17.2794 21.842 16.8978 22 16.5 22ZM8 7V12H16.831L18 7H8Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
