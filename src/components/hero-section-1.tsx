import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="m-auto flex w-full max-w-contentwidth justify-between">
      <div className="lefthero max-w-[540px] pt-44">
        <div className="text-herotitle">
          <h1 className="leading-">Invest in Ethiopian Best Startups</h1>
        </div>
        <p className="text-herodescription">
          We have over a million members helping to drive growth & innovation
          for businesses across the continent
        </p>
      </div>
      <div className="righthero flex flex-col pr-[62px] pt-[104px]">
        <div>
          <div className="relative">
            <Image
              src="/assets/images/hero1.svg"
              alt="Ethiopian Securities Exchange Logo"
              width={473}
              height={281}
              priority
              className="relative z-10 h-auto w-auto"
            />
            <Image
              src="/assets/images/vector1.svg"
              alt="Ethiopian Securities Exchange Logo"
              width={114}
              height={147}
              priority
              className="absolute -left-4 -top-3 h-auto w-auto"
            />
            <Image
              src="/assets/images/bubble.svg"
              alt="Ethiopian Securities Exchange Logo"
              width={114}
              height={147}
              priority
              className="absolute -top-9 right-8 z-30 h-auto w-auto"
            />
            <Image
              src="/assets/images/vector2.svg"
              alt="Ethiopian Securities Exchange Logo"
              width={172}
              height={222}
              priority
              className="absolute -bottom-20 -right-16 h-auto w-auto"
            />
          </div>

          <Image
            src="/assets/images/hero2.svg"
            alt="Ethiopian Securities Exchange Logo"
            width={465}
            height={277}
            priority
            className="relative -left-36 -top-7 z-20 h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
}
