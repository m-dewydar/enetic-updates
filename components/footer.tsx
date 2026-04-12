import Link from "next/link";
import Image from "next/image";
import { siteNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">

        {/* ── Brand column ── */}
        <div>
          <div className="site-footer__logo-wrap">
            <Image
              src="/logo-entic.png"
              alt="Enetic"
              fill
              sizes="140px"
              className="site-footer__logo-img"
            />
          </div>
          <p className="site-footer__tagline">
            Engineering reliable power infrastructure.
          </p>
          <p className="site-footer__desc">
            A specialist power systems consultancy delivering advanced engineering,
            design, and advisory services across HV&nbsp;&amp;&nbsp;MV networks.
          </p>
        </div>

        {/* ── Navigate column ── */}
        <div>
          <p className="site-footer__col-title">Navigate</p>
          <ul className="site-footer__nav">
            {siteNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact column ── */}
        <div>
          <p className="site-footer__col-title">Contact</p>
          <div className="site-footer__contact">

            {/* Address */}
            <div className="site-footer__contact-item">
              <span className="site-footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </span>
              <p className="site-footer__contact-text">
                16 Building, Street No. 288<br />New Maadi, Cairo, Egypt
              </p>
            </div>

            {/* Phone */}
            <div className="site-footer__contact-item">
              <span className="site-footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6.6 10.8a15.08 15.08 0 006.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24A11.36 11.36 0 0019 15.5c.55 0 1 .45 1 1V19c0 .55-.45 1-1 1C10.16 20 4 13.84 4 6c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1 0 .78.12 1.53.34 2.24-.11.35-.02.71-.24.98l-2 2.58z"/>
                </svg>
              </span>
              <p className="site-footer__contact-text">
                <a href="tel:+20-01120085337">+2-01120085337</a>
              </p>
            </div>

            {/* Email */}
            <div className="site-footer__contact-item">
              <span className="site-footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </span>
              <p className="site-footer__contact-text">
                <a href="mailto:Mohamed.Shafey@enetic-eg.com">
                  Mohamed.Shafey@enetic-eg.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="site-footer__bottom">
        <p className="site-footer__copy">© 2026 Enetic. All rights reserved.</p>
        <div className="site-footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

