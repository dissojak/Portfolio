"use client"; // Ensure this is a client-side component
import { Fragment } from "react";
import Services from "./components/service/Services";
import Testimonials from "./components/testimonial/Testimonials";
import Clients from "./components/clients/Clients";

export default function About() {
  return <Aboutpage />;
}

const Aboutpage = () => {
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

      <Services />
      <Testimonials />
      <Clients />
      
    </Fragment>
  );
};
