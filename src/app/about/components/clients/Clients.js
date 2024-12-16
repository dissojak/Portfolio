import Image from "next/image";

// src/components/Clients.js
export default function Clients() {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {[...Array(6).keys()].map((index) => (
          <li key={index} className="clients-item">
            <a href="#">
              <Image
                src={`/assets/images/logo-${index + 1}-color.png`}
                alt="client logo"
                width={500}
                height={300}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
