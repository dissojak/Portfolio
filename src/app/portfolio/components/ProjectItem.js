import { IonIcon } from '@ionic/react';
import { eyeOutline } from 'ionicons/icons';
import React from 'react';

const ProjectItem = ({ title, category, imgSrc }) => {
  return (
    <li className="project-item active" data-filter-item data-category={category}>
      <a href="#">
        <figure className="project-img">
          <div className="project-item-icon-box">
          <IonIcon icon={eyeOutline} />
          </div>
          <img src={imgSrc} alt={title} loading="lazy" />
        </figure>

        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </a>
    </li>
  );
};

export default ProjectItem;
