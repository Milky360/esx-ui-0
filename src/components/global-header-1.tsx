import Image from "next/image";
import Link from "next/link";

import { Button } from "antd";
import { IoChevronDownOutline } from "react-icons/io5";

const leftLinks = [
  { name: "Discover", href: "/" },
  { name: "Search", href: "/" },
];

const rightLinks = [
  {
    name: "Raise Capital",
    href: "/",
    icon: (
      <IoChevronDownOutline
        style={{ color: "#ABABAB", height: "15px", marginBottom: "-3px" }}
      />
    ),
  },
  {
    name: "Invest in Companies",
    href: "/",
    icon: (
      <IoChevronDownOutline
        style={{ color: "#ABABAB", height: "15px", marginBottom: "-3px" }}
      />
    ),
  },
];

export default function GlobalHeader() {
  return (
    <div
      className="max-h-navheight bg-white"
      style={{ borderBottom: "1px solid #D8D8D9" }}
    >
      <nav className="m-auto flex max-w-bodywidth items-center justify-between p-2">
        {/* Left Side */}
        <div className="left-nav flex items-center">
          <Link href="/" passHref>
            <Image
              src="/assets/images/Ethiopian Securities Exchange Logo.svg"
              alt="Ethiopian Securities Exchange Logo"
              width={248}
              height={76}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <div className="search-discover">
            {leftLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="pr-[46px] text-navlink1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="right-nav flex w-[568px] items-center justify-between">
          {rightLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="flex items-center text-navlink2"
            >
              <span className="flex items-center justify-between">
                {link.name}
                {link.icon}
              </span>
            </Link>
          ))}
          <Link href="/" passHref>
            <Button>Sign Up</Button>
          </Link>
          <Link href="/" passHref>
            <Button type="primary">Login</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
