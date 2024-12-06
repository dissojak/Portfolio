"use client"; // Mark this as a client component

import { IonIcon } from "@ionic/react";
import {
  mailOutline,
  phonePortraitOutline,
  calendarOutline,
  locationOutline,
  logoFacebook,
  logoTwitter,
  logoInstagram,
} from "ionicons/icons";
import "../app/css/globals.css"; // Make sure your CSS is correct

const Sidebar = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/assets/images/Avatar.png"
            alt="Adem Ben Amor"
            width="80"
            className="avatar-box"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Adem Ben Amor">
            Adem Ben Amor
          </h1>
          <p className="title">Web Developer</p>
        </div>

        <button className="info_more-btn">
          <span>Show Contacts</span>
          <IonIcon icon={mailOutline} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:DissoJak@gmail.com" className="contact-link">
                DissoJak@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+21623039320" className="contact-link">
                (+216) 23-039-320
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={calendarOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">April 04, 2001</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoFacebook} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoTwitter} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
