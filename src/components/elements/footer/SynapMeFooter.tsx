import React, { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <footer className="synap-footer">
      <div className="footer-body">
        <div className="mission-context">
          <Image
            alt="synap-footer-icon"
            src="/icons/synap-white-icon.png"
            width="50"
            height="50"
            priority
            className="icon"
          />
          <p className="text">
            Mission- to develop a platform that democratizes the ethics of artificial intelligence
            and neurotechnology by providing a comfortable and user-friendly space for people to
            share their beliefs, collaborate, and learn from one another.
          </p>
        </div>
        <div className="synap-pages">
          <div className="menu">
            <label className="title">Menu</label>
            <Link href="/home">Home</Link>
            <Link href="/people">People</Link>
            <Link href="/news">News</Link>
            <Link href="/team">Team</Link>
            <Link href="/donate">Donate</Link>
          </div>
          <div className="others">
            <label className="title">Others</label>
            <Link href="/">Post guide</Link>
            <Link href="/">Code of Conduct</Link>
            <Link href="/">Help & Guide</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/feedback">User Feedback</Link>
          </div>
          <div className="support">
            <label className="title">Support</label>
            <Link href="/support">Contact Us</Link>
            <Link href="/contactus">FAQS</Link>
            <Link href="/">Help & Guide</Link>
            <Link href="/termsandcondition">Terms & Conditions</Link>
          </div>
        </div>
        <div className="synap-subscription">
          <p className="stay-updated">Stay updated with our platform.</p>
          <div className="subscription-body">
            <input type="text" placeholder="Enter your email address" />
            <button className="subscribe">Subscribe</button>
          </div>
          <div className="subscription-footer">
            <p>Get in touch</p>
            <div className="social-icons">
              <Image
                alt="linkedin"
                src="/icons/linkedin.png"
                width="38"
                height="38"
                priority
                className="social-icon"
              />
              <Image
                alt="facebook"
                src="/icons/facebook.png"
                width="38"
                height="38"
                priority
                className="social-icon"
              />
              <Image
                alt="instagram"
                src="/icons/instagram.png"
                width="38"
                height="38"
                priority
                className="social-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right-reserved-synap">@ Copyright SynapMe all right reserved.</div>
    </footer>
  );
};

export default memo(Header);
