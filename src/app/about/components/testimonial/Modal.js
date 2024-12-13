// src/components/Modal.js
export default function Modal({ activeTestimonial, closeModal, isClosing, handleTransitionEnd }) {
    return (
      <div
        className={`modal-container ${isClosing ? "" : "active"}`}
        data-modal-container
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="overlay active" onClick={closeModal}></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" onClick={closeModal}>
            <img src="/assets/images/close24.png" alt="close" />
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
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div className="modal-text">
              <p>{activeTestimonial.text}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  