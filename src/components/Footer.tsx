import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext, Lang } from "../contexts/LanguageContext";

const icons = [
  {
    icon: <FaFacebookF size={30} color={"#ffffff80"} />,
    url: "https://es-es.facebook.com",
    className: "facebook"
  },
  {
    icon: <FaTwitter size={30} color={"#ffffff80"} />,
    url: "https://twitter.com",
    className: "twitter"
  },
  {
    icon: <FaYoutube size={30} color={"#ffffff80"} />,
    url: "https://www.youtube.com",
    className: "youtube"
  }
];

type AnchorProps = {
  url: string;
  className: string;
  icon: JSX.Element;
};

const Anchor: React.FC<AnchorProps> = ({ url, className, icon }) => {
  return (
    <a
      href={url}
      aria-label={`Visit {$className}`}
      target="blank"
      className={`footer--socialmedia--${className}`}
    >
      {icon}
    </a>
  );
};

const Footer: React.FC = () => {
  const { handleLanguage } = useContext(LanguageContext);

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleLanguage(e.target.value as Lang);
  };

  return (
    <footer className="footer">
      <div className="footer--copyright">
        <Link to="/">
          <h4>
            <span className="footer--copyright--opacity">@2019</span>
            <span className="footer--copyright--name">4BIRDS</span>
          </h4>
        </Link>
      </div>

      <div className="footer--socialmedia">
        {icons.map(({ icon, className, url }: AnchorProps) => (
          <Anchor key={url} icon={icon} className={className} url={url} />
        ))}
      </div>

      <div className="footer--lang">
        <select name="" id="" onChange={e => changeLang(e)}>
          <option value="en">en</option>
          <option value="es">es</option>
        </select>
        <svg className="footer--lang__icon">
        <path d="M19.753 10.909c-0.624-1.707-2.366-2.726-4.661-2.726-0.090 0-0.176 0.002-0.262 0.006l-0.016-2.063c0 0 3.41-0.588 3.525-0.607s0.133-0.119 0.109-0.231c-0.023-0.111-0.167-0.883-0.188-0.976-0.027-0.131-0.102-0.127-0.207-0.109s-3.25 0.461-3.25 0.461-0.012-1.953-0.013-2.078c-0.001-0.125-0.069-0.158-0.194-0.156s-0.92 0.014-1.025 0.016c-0.105 0.002-0.164 0.049-0.162 0.148s0.033 2.307 0.033 2.307-3.061 0.527-3.144 0.543c-0.084 0.014-0.17 0.053-0.151 0.143s0.19 1.094 0.208 1.172c0.018 0.080 0.072 0.129 0.188 0.107 0.115-0.019 2.924-0.504 2.924-0.504l0.035 2.018c-1.077 0.281-1.801 0.824-2.256 1.303-0.768 0.807-1.207 1.887-1.207 2.963 0 1.586 0.971 2.529 2.328 2.695 3.162 0.387 5.119-3.060 5.769-4.715 1.097 1.506 0.256 4.354-2.094 5.98-0.043 0.029-0.098 0.129-0.033 0.207s0.541 0.662 0.619 0.756c0.080 0.096 0.206 0.059 0.256 0.023 2.51-1.73 3.661-4.515 2.869-6.683zM12.367 14.097c-0.966-0.121-0.944-0.914-0.944-1.453 0-0.773 0.327-1.58 0.876-2.156 0.335-0.354 0.75-0.621 1.229-0.799l0.082 4.277c-0.385 0.131-0.799 0.185-1.243 0.131zM14.794 13.544l0.046-4.109c0.084-0.004 0.166-0.010 0.252-0.010 0.773 0 1.494 0.145 1.885 0.361s-1.023 2.713-2.183 3.758zM5.844 5.876c-0.030-0.094-0.103-0.145-0.196-0.145h-1.95c-0.093 0-0.165 0.051-0.194 0.144-0.412 1.299-3.48 10.99-3.496 11.041s-0.011 0.076 0.062 0.076h1.733c0.075 0 0.099-0.023 0.114-0.072 0.015-0.051 1.008-3.318 1.008-3.318h3.496c0 0 0.992 3.268 1.008 3.318s0.039 0.072 0.113 0.072h1.734c0.072 0 0.078-0.025 0.062-0.076-0.014-0.050-3.083-9.741-3.494-11.040zM3.226 12.194l1.447-5.25 1.447 5.25h-2.894z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
