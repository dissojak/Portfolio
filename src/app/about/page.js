// src/components/About.js

"use client"; // Ensure this is a client-side component

import { Fragment, useState } from "react";

export default function About() {
  return <Aboutpage />;
}

const Aboutpage = () => {
  // Modal state to manage open/close
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const testimonialsData = [
    {
      name: "Hazem Ben Saria",
      avatar: "/assets/images/avatar-1.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Jessica Miller",
      avatar: "/assets/images/avatar-2.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Emily Evans",
      avatar: "/assets/images/avatar-3.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Henry William",
      avatar: "/assets/images/avatar-4.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
  ];

  // Modal open/close functions
  const openModal = (testimonial) => setActiveTestimonial(testimonial);
  const closeModal = () => setActiveTestimonial(null);

  return (
    <Fragment>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Nabeul, Tunisia, working
          in web development and Social media. I enjoy turning complex problems
          into simple, beautiful, and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly, but at the same time attractive. Moreover, I add a
          personal touch to your product and make sure that it is eye-catching
          and easy to use. My aim is to bring across your message and identity
          in the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      {/* Services Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="Design Icon"
                width="40"
                className="imageSVG"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Web Development Icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="Mobile App Icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile Apps</h4>
              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-photo.svg"
                alt="Photography Icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
                High-quality photography services for various categories.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div
                className="content-card"
                onClick={() => openModal(testimonial)}
              >
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width="60"
                  />
                </figure>
                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>
                <div className="testimonials-text">
                  <p>{testimonial.text.substring(0, 150)}...</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {activeTestimonial && (
        <div className="modal-container" data-modal-container>
          <div className="overlay" onClick={closeModal}></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  width="80"
                />
              </figure>
              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{activeTestimonial.name}</h4>
              <time datetime="2021-06-14">14 June, 2021</time>
              <div className="modal-text">
                <p>{activeTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Clients Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {[
            "logo-1-color",
            "logo-2-color",
            "logo-3-color",
            "logo-4-color",
            "logo-5-color",
            "logo-6-color",
          ].map((logo, index) => (
            <li key={index} className="clients-item">
              <a href="#">
                <img src={`/assets/images/${logo}.png`} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};
