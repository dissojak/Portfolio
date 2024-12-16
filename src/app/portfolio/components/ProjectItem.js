import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";
import Image from "next/image";
import React from "react";

const ProjectItem = ({ title, category, imgSrc }) => {
  return (
    <li
      className="project-item active"
      data-filter-item
      data-category={category}
    >
      <a href="#">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <IonIcon icon={eyeOutline} />
          </div>
          <Image
            src={imgSrc}
            alt={title}
            loading="lazy"
            width={800}
            height={500}
          />
        </figure>

        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </a>
    </li>
  );
};

export default ProjectItem;
