import Image from "next/image";

// src/components/TestimonialItem.js
export default function TestimonialItem({ testimonial, onClick }) {
  return (
    <li className="testimonials-item">
      <div className="content-card" onClick={() => onClick(testimonial)}>
        <figure className="testimonials-avatar-box">
          <Image
            src={testimonial.avatar} 
            alt={testimonial.name}
            width={800}
            height={500} 
          />
        </figure>
        <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
        <div className="testimonials-text">
          <p>{testimonial.text.substring(0, 150)}...</p>
        </div>
      </div>
    </li>
  );
}
