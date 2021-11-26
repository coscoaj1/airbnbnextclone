import React from "react";
import Image from "next/image";
import globeIcon from "../public/images/icons8-globe-24.png";
import facebookIcon from "../public/images/icons8-facebook-f-30.png";
import twitterIcon from "../public/images/icons8-twitter-30.png";
import instagramLogo from "../public/images/icons8-instagram-24.png";
import {
  aboutList,
  communityList,
  hostList,
  supportList,
} from "../public/data/footer";

function Footer() {
  return (
    <div className="sticky top-0 hidden w-full px-16 sm:block bg-footerPink">
      <div className="flex flex-col py-8 mx-auto text-sm border-b border-gray-300 md:flex-row max-w-7xl">
        <div className="footer-div">
          <p className="py-4 text-xs uppercase">About</p>
          <ul className="footer-ul">
            {aboutList.map((item) => (
              <li key={item} className="footer-li">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-div">
          <p className="py-4 text-xs uppercase">Community</p>
          <ul className="footer-ul">
            {communityList.map((item) => (
              <li key={item} className="footer-li ">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-div">
          <p className="py-4 text-xs uppercase">Host</p>
          <ul className="footer-ul">
            {hostList.map((item) => (
              <li key={item} className="footer-li">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-2 md:border-none">
          <p className="py-4 text-xs uppercase">Support</p>
          <ul className="footer-ul">
            {supportList.map((item) => (
              <li key={item} className="footer-li">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-2">
        <div className="flex flex-col items-center justify-between py-2 mx-12 text-sm font-light md:flex-row">
          <div>
            <div>
              &copy; 2021 Airbnb, Inc. <span>&#183;</span>{" "}
              <button className="px-1 font-light">Privacy</button>
              <span>&#183;</span>{" "}
              <button className="px-1 font-light">Terms</button>
              <span>&#183;</span>{" "}
              <button className="px-1 font-light">Sitemap</button>
            </div>
          </div>
          <div className="flex flex-row gap-3 font-light underline">
            <button>
              <Image
                aria-label="globe icon "
                alt=""
                width={22}
                height={20}
                src={globeIcon}
              />
            </button>
            <button>
              <span className="font-medium">English(US)</span>
            </button>
            <button>
              <span className="px-1 font-medium">$</span>
              <span className="mr-8 font-medium">USD</span>
            </button>
            <button aria-label="facebook icon">
              <Image alt="" width={28} height={28} src={facebookIcon} />
            </button>
            <button>
              <span>
                <Image
                  aria-label="twitter icon"
                  alt=""
                  width={20}
                  height={20}
                  src={twitterIcon}
                />
              </span>
            </button>
            <button aria-label="instagram logo">
              <Image alt="" src={instagramLogo} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
