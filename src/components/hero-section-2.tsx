import Image from "next/image";

import GetStarted from "./get-started";

export default function HeroSection() {
  return (
    <div className="mt-28 max-h-[570px] w-auto bg-bodybackground2 pb-36">
      <div className="m-auto flex max-w-contentwidth items-center justify-between">
        <div className="flex h-[307px] w-[548px] flex-col space-y-7 pt-20">
          <div className="">
            <h3 className="text-herotitle2">
              Startup Fundraising Platform IN Ethiopia
            </h3>
          </div>
          <p className="text-herodescription2">
            Start and manage a professional fundraise to attract quality
            accredited investors.
          </p>
          <GetStarted />
        </div>

        <div className="pt-10">
          <Image
            src="/assets/images/map.svg"
            alt="Ethiopian Securities Exchange Logo"
            width={517}
            height={385}
            priority
            className=""
          />
        </div>
      </div>
    </div>
  );
}
