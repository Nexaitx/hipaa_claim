import { Link } from "react-router-dom";
import "../styles/About.css";

const PageBanner = ({ title, subtitle, currentPage }) => {
  return (
    <div className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;