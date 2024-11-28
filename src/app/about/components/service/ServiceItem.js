// src/components/ServiceItem.js

export default function ServiceItem({ icon, title, description }) {
    return (
      <li className="service-item">
        <div className="service-icon-box">
          <img src={icon} alt={`${title} Icon`} width="40" className="imageSVG" />
        </div>
        <div className="service-content-box">
          <h4 className="h4 service-item-title">{title}</h4>
          <p className="service-item-text">{description}</p>
        </div>
      </li>
    );
  }
  