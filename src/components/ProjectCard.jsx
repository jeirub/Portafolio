import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const ProjectCard = ({ title, description, imgUrl, url}) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>        
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
