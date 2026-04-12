"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { useState } from "react";

const enquiryTypes = [
  "Power Systems Studies",
  "Substation Design",
  "Protection & SCADA",
  "Commissioning & Testing",
  "Owner's Engineer",
  "Renewables & Grid Integration",
  "Testing Lab",
  "General Enquiry"
];

const contactDetails = [
  {
    label: "Email",
    value: "Mohamed.Shafey@enetic-eg.com",
    href: "mailto:Mohamed.Shafey@enetic-eg.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: "Phone",
    value: "+2-01120085337",
    href: "tel:+201120085337",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    label: "Address",
    value: "16 Building, Street No. 288\nNew Maadi, Cairo, Egypt",
    href: "https://maps.google.com/?q=New+Maadi+Cairo+Egypt",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function ContactPage() {
  const [selected, setSelected] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <Image
            src="/home/capabilities/owners-engineer-better.jpg"
            alt="Contact Enetic"
            fill
            priority
            className="contact-hero__img"
          />
          <div className="contact-hero__overlay" />
        </div>

        <div className="contact-hero__content">
          <Reveal>
            <p className="contact-hero__eyebrow">Contact us</p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="contact-hero__heading">Talk to our engineering team</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="contact-hero__sub">
              Share your scope, timeline, and technical challenge. We support utilities, developers, and industrial
              operators with studies, substations, protection systems, commissioning, and grid integration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-body-shell">
          <Reveal className="contact-form-col">
            <div className="contact-intro-card">
              <p className="contact-intro-card__eyebrow">Project enquiry</p>
              <h2 className="contact-intro-card__heading">Tell us what you need</h2>
              <p className="contact-intro-card__body">
                Whether you need a grid study, substation engineering, commissioning support, or technical advisory, we
                can help define the right scope and next steps.
              </p>
            </div>

            <div className="contact-enquiry-type">
              <p className="contact-enquiry-type__label">Select the area closest to your enquiry</p>
              <div className="contact-enquiry-type__pills">
                {enquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelected(type)}
                    className={`contact-pill${selected === type ? " contact-pill--active" : ""}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {!sent ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__row">
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="cf-name">Full name</label>
                    <input id="cf-name" type="text" required placeholder="Your full name" className="contact-field__input" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="cf-org">Organisation</label>
                    <input id="cf-org" type="text" placeholder="Company / organisation" className="contact-field__input" />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="cf-email">Email address</label>
                    <input id="cf-email" type="email" required placeholder="you@company.com" className="contact-field__input" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="cf-phone">Phone</label>
                    <input id="cf-phone" type="tel" placeholder="+20..." className="contact-field__input" />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="cf-country">Country / Region</label>
                    <input id="cf-country" type="text" placeholder="Egypt, Saudi Arabia, UAE..." className="contact-field__input" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="cf-service">Service area</label>
                    <input
                      id="cf-service"
                      type="text"
                      readOnly
                      value={selected}
                      placeholder="Choose from the options above"
                      className="contact-field__input contact-field__input--readonly"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="cf-message">Project brief</label>
                  <textarea
                    id="cf-message"
                    rows={6}
                    required
                    placeholder="Briefly describe the project, location, timeline, and the technical support you need."
                    className="contact-field__input contact-field__textarea"
                  />
                </div>

                <div className="contact-form__footer">
                  <p className="contact-form__privacy">
                    Your enquiry goes directly to our engineering team. We typically respond within one business day.
                  </p>
                  <button type="submit" className="contact-submit">
                    Send enquiry
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            ) : (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="contact-success__heading">Enquiry sent</h2>
                <p className="contact-success__body">
                  Thank you. Our engineering team will review your message and get back to you shortly.
                </p>
                <button onClick={() => { setSent(false); setSelected(""); }} className="contact-success__reset">
                  Send another enquiry
                </button>
              </div>
            )}
          </Reveal>

          <div className="contact-info-col">
            <Reveal className="contact-info-card">
              <p className="contact-info-card__eyebrow">Direct contact</p>
              <div className="contact-info-items">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-info-item"
                  >
                    <span className="contact-info-item__icon">{item.icon}</span>
                    <div>
                      <p className="contact-info-item__label">{item.label}</p>
                      <p className="contact-info-item__value">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="contact-info-card">
              <p className="contact-info-card__eyebrow">Contact person</p>
              <div className="contact-person contact-person--light">
                <div className="contact-person__avatar">M</div>
                <div>
                  <p className="contact-person__name">Mohamed Shafey</p>
                  <p className="contact-person__role">Founder & Principal Engineer</p>
                </div>
              </div>
              <p className="contact-person__note contact-person__note--light">
                Mohamed leads client engagement and technical scoping, and will route your enquiry to the right team.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="contact-info-card">
              <p className="contact-info-card__eyebrow">Response time</p>
              <div className="contact-response-items">
                {[
                  { type: "Technical enquiries", time: "Within 24 hours" },
                  { type: "Project scoping", time: "Within 48 hours" },
                  { type: "Urgent site support", time: "Same day" }
                ].map((r) => (
                  <div key={r.type} className="contact-response-item">
                    <span>{r.type}</span>
                    <span className="contact-response-item__time">{r.time}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="contact-location-shell">
          <Reveal className="contact-location__text">
            <p className="contact-location__eyebrow">Our office</p>
            <h2 className="contact-location__heading">New Maadi, Cairo</h2>
            <p className="contact-location__addr">
              16 Building, Street No. 288
              <br />
              New Maadi, Cairo, Egypt
            </p>
            <a
              href="https://maps.google.com/?q=New+Maadi+Cairo+Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-location__map-link"
            >
              Open in Google Maps
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={0.1} className="contact-location__map">
            <Image
              src="/home/capabilities/contact-better.jpeg"
              alt="Enetic office context"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="contact-location__map-img"
            />
            <div className="contact-location__map-pin">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Enetic HQ</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
