import { Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-white">
      <div
        className="relative -top-20 m-auto h-[157px] max-w-contentwidth rounded-xl bg-white p-2"
        style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      >
        <div
          className="relative flex h-full w-full items-center justify-between rounded-xl p-6 shadow-lg"
          style={{ background: "linear-gradient(90deg, #2090FF, #0045FF)" }}
        >
          <p className="max-w-md text-base text-white">
            Are you seeking to raise equity or debt capital? Our team is ready
            to walk you through the process.
          </p>
          <div className="relative flex items-center">
            <Input
              placeholder="Enter Your Email"
              style={{
                width: "400px", // Increased width
                height: "50px", // Slightly larger input for balance
                borderRadius: "30px",
                border: "none",
                padding: "0 140px 0 20px",
                backgroundColor: "white", // White background for contrast
                color: "#999", // Light text color for placeholder
              }}
            />
            <Button
              type="primary"
              style={{
                position: "absolute",
                right: "10px",
                top: "10px", // Adjusted for larger input height
                height: "30px",
                backgroundColor: "#0045FF",
                borderRadius: "20px",
                padding: "0 20px",
                border: "none",
                fontSize: "14px",
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-contentwidth">
        {/*  */}
        <div className="relative flex flex-row justify-between">
          <div className="flex flex-col">
            <Link href="/" passHref>
              <Image
                src="/assets/images/Ethiopian Securities Exchange Logo.svg"
                alt="Ethiopian Securities Exchange Logo"
                width={312}
                height={67}
                priority
                style={{ width: "auto", height: "auto" }}
                className="relative -left-5 pb-5"
              />
            </Link>
            <p className="w-72">
              ESX allows investors to diversify their portfolios as they are
              able to invest in various asset classes according to their
              preferred risk tolerance
            </p>
          </div>
          <div>
            {/* company */}
            <h3 className="pb-3 text-xl font-bold">Company</h3>
            <ul className="leading-8">
              <li>About </li>
              <li>Resources</li>
              <li>Media</li>
              <li>Help centre</li>
            </ul>
          </div>
          {/* Founders */}
          <div>
            <h3 className="pb-3 text-xl font-bold">Founders</h3>
            <ul className="leading-8">
              <li>Why Raise</li>
              <li>Campaign Listing</li>
              <li>Raise Capital</li>
              <li>Explore All Features</li>
            </ul>
          </div>
          {/* Investor */}
          <div>
            <h3 className="pb-3 text-xl font-bold">Investor</h3>
            <ul className="leading-8">
              <li>Why Invest</li>
              <li>Start Investing</li>
              <li>Investor returns</li>
              <li>New Campaigns</li>
              <li>Top-Funded Campaigns</li>
            </ul>
          </div>
          {/*  Learn */}
          <div>
            <h3 className="pb-3 text-xl font-bold">Learn</h3>
            <ul className="leading-8">
              <li>How It Works</li>
              <li>Podcast</li>
              <li>Blog</li>
              <li>Guidlines</li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div>
          <h4 className="mt-5 font-bold"> Follow us on :</h4>
          <div className="mt-3 flex gap-7">
            <div className="rounded-full bg-gradient-to-r from-[#0045FF] to-[#2090FF] p-2">
              <FaXTwitter className="text-md text-white" />
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#0045FF] to-[#2090FF] p-2">
              <FaFacebook className="text-md text-white" />
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#0045FF] to-[#2090FF] p-2">
              <FaLinkedin className="text-md text-white" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-12">
          <div className="flex gap-10">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Regulations</p>
            <p>Legal</p>
            <p>Trust & Safety</p>
          </div>

          <div className="pb-7">© All rights reserved 2024</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
