import { useState } from "react";
import Image from "next/image";
import { Hambuger } from "./img";

const list: string[] = ["Service", "About Us", "Contact"];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-[90%] m-auto flex justify-between pt-[40px] items-center pb-[clamp(30px,4.5vw,70px)]">
      <div className="flex items-start text-black text-[20px] font-S0ra font-normal">
        Tutordeck{" "}
        <Image src={"/images/icon-2.png"} alt={""} width={10} height={10} />
      </div>
      <div className="hidden md:flex gap-[40px] ">
        {list.map((ele) => (
          <div
            key={ele}
            className="text-black font-Sora text-[20px] font-normal"
          >
            {ele}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-[clamp(12px,1.2vw,18px)] px-[clamp(10px,2.5vw,35px)] rounded-[7px] bg-black text-white ">
        Sign Up
      </div>
      <div
        className="flex md:hidden relativ"
        onClick={() => setVisible(!visible)}
      >
        <Hambuger />
        {visible ? (
          <div className="absolute flex flex-col gap-[10px]  right-0 p-[10px] top-[75px]">
            {list.map((item) => (
              <div
                key={item}
                className="text-black font-Sora text-[10px] font-normal"
              >
                {item}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function Create() {
  return (
    <div className="w-[80%] m-auto pb-[70px]">
      <div className="text-[#000000] font-Sora text-[clamp(65px,8.5vw,115px)] font-semibold leading-[90%] tracking-[-1.114px]  pb-[40px]">
        More Than Just{" "}
        <Image
          src={"/images/icon.png"}
          alt={""}
          width={100}
          height={100}
          className="inline"
        />
        A <span className="text-[#006C99]">Creative</span> Agency
      </div>
      <div className="flex justify-between gap-[20px] flex-wrap items-center">
        <div className="flex gap-[10px]">
          <div className="flex">
            <Image
              src={"/images/circle-1.png"}
              alt={""}
              width={50}
              height={50}
            />
            <Image
              src={"/images/circle-2.png"}
              alt={""}
              width={50}
              height={50}
              className="ml-[-20px]"
            />
          </div>
          <p className="w-[165px] text-black font-Sora text-[19px] font-semibold">
            15,300+ Satisfied Clients
          </p>
        </div>
        <div className="max-w-[620px] text-[#696969] font-Sora text-[22px] ">
          We do not take academic in lorem and ipsum for the background or
          specialist knowledge into consideration - What we are looking for is
          change.
        </div>
      </div>
    </div>
  );
}

export function Blue() {
  return (
    <div className="blue w-[90%] m-auto rounded-t-[42px]">
      <div className="w-[80%] m-auto flex justify-between items-start flex-wrap gap-[20px]">
        <div className="rounded-[49px] bg-white p-[clamp(17px,3vw,40px)] mt-[-60px]">
          <div className="flex gap-[20px] pb-[10px]">
            <span className="text-black text-[19px] font-Sora font-semibold">
              Cre-A-Tive
            </span>
            <span className="text-[#222222] font-normal font-Sora text-[19px]">
              /Kreadiv/
            </span>
          </div>
          <div className="text-[#7C7C7C] text-[16px] font-Sora font-normal w-[220px]">
            Relating to or involving The Imagination Or Original Ideas.
            Especially In The Production Of An Artistic Work.
          </div>
        </div>
        <img
          src="/images/both.png"
          alt=""
          className="w-[120px] h-auto mt-[-30px]"
        />
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="bg-[#202224] overflow-hidden p-[20px] mb-[clamp(40px,6.25vw,100px)]">
      <div className="flex gap-[40px] animate items-center overflow-hidden">
        <span className="text-white font-Sora font-semibold">
          GRAPHIC DESIGN
        </span>
        <img src="/images/icon-1.png" alt="" />
        <span className="text-white font-Sora font-semibold">UI/UX DESIGN</span>
        <img src="/images/icon-1.png" alt="" />
        <span className="text-white font-Sora font-semibold ">
          Brand Design
        </span>
        <img src="/images/icon-1.png" alt="" />
        <span className="text-white font-Sora font-semibold">Development</span>
        <img src="/images/icon-1.png" alt="" />
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="w-[80%] m-auto block justify-between gap-[50px] items-center md:flex pb-[70px]">
      <div>
        <p className="text-[#000000] pb-[14px] font-Sora text-[22px] font-bold ">
          ABOUT US
        </p>
        <p className="text-[#000000] font-Sora text-[clamp(30px,5vw,50px)] font-bold max-w-[600px]">
          Creating <span className="text-[#006C99]">User- Friendly</span> Design
        </p>
        <p className="text-[#696969] text-[clamp(17px,1.3vw,22px)]  max-w-[450px] font-Sora py-[30px]">
          Our clients are companies, brands, and startups that keep the world
          going around. They treat diseases, more parcel, insure.
        </p>
        <p className="flex gap-[10px] items-center">
          <span className="text-[#000000] text-[22px] font-bold font-Sora">
            Learn More
          </span>
          <img src="/images/frame.png" alt="" />
        </p>
      </div>
      <div>
        <div className="boder-b-[#C8C8C8] border-b-[2px]">
          <div className="flex gap-[10px] pb-[20px]">
            <img src="/images/muhammed.png" alt="" />
            <div>
              <div className="text-[#292929] font-Sora text-[clamp(18px,1.5vw,23px)] font-semibold">
                Muhammad Sultan
              </div>
              <div className="text-[#696969] text-[clamp(15px,1.1vw,19px)] font-Sora ">
                CEO Tutordeck
              </div>
            </div>
          </div>
          <div className="font-Sora text-[clamp(18px,1.4vw,22px)] text-[#000000] font-bold max-w-[600px] pb-[10px]">
            “Good Design is actually a lot harder to notice than poor, because
            good design fit our needs so well that the design is invisible”
          </div>
        </div>
        <div>
          <div className="pt-[20px]">
            <div className="flex gap-[10px] pb-[20px]">
              <img src="/images/sodik.png" alt="" />
              <div>
                <div className="text-[#292929] font-Sora text-[clamp(18px,1.5vw,23px)] font-semibold">
                  Andika Bagass
                </div>
                <div className="text-[#696969] text-[clamp(15px,1.1vw,19px)] font-Sora ">
                  CEO Tutordeck
                </div>
              </div>
            </div>
            <div className="font-Sora text-[clamp(18px,1.4vw,22px)] text-[#000000] font-bold max-w-[600px]">
              “Good Design is actually a lot harder to notice than poor, because
              good design fit our needs so well that the design is invisible”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Blue1() {
  return (
    <div className="w-[90%] m-auto">
      <div className="blue1 w-[90%] m-auto rounded-[42px]"></div>
      <div className="w-[80%] m-auto flex gap-[50px] flex-wrap justify-between pb-[70px]">
        <div>
          <div className="">
            <div className="flex gap-[30px] items-start">
              <b className="text-[#131313] font-Sora text-[clamp(40px,4vw,70px)] font-medium">
                37,200
              </b>
              <img src="/images/icon.png" className="w-[40px] h-auto" alt="" />
            </div>
            <p className="text-[#131313] font-Sora text-[19px] font-semibold ">
              Total Project We Have Completed
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex gap-[30px] items-start">
              <b className="text-[#131313] font-Sora text-[clamp(40px,4vw,70px)] font-medium">
                1800
              </b>
              <img src="/images/icon.png" className="w-[40px] h-auto" alt="" />
            </div>
            <p className="text-[#131313] font-Sora text-[19px] font-semibold ">
              Experienced Core Team
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex gap-[30px] items-start">
              <b className="text-[#131313] font-Sora text-[clamp(40px,4vw,70px)] font-medium">
                15,300
              </b>
              <img src="/images/icon.png" className="w-[40px] h-auto" alt="" />
            </div>
            <p className="text-[#131313] font-Sora text-[19px] font-semibold ">
              Our Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Anmation() {
  return (
    <div className="bg-[#202224] overflow-hidden p-[20px] mb-[clamp(40px,6.25vw,100px)]">
      <div className="flex gap-[40px] animate items-center overflow-hidden">
        <span className="text-white font-Sora font-semibold">GET STARTED</span>
        <img src="/images/icon-1.png" alt="" />
        <span className="text-white font-Sora font-semibold">GET STARTED</span>
        <img src="/images/icon-1.png" alt="" />
        <span className="text-white font-Sora font-semibold ">GET STARTED</span>
        <img src="/images/icon-1.png" alt="" />
        <span className="text-white font-Sora font-semibold">GET STARTED</span>
        <img src="/images/icon-1.png" alt="" />
      </div>
    </div>
  );
}

const brands = [
  {
    name: "Brand Design",
    discription:
      "Our clients are companies, brands, andstartups that keep the world going ",
    urlx: "/images/icon-2.png",
    urli: "images/brand.png",
  },
  {
    name: "UI/UX Design",
    discription:
      "Our clients are companies, brands, andstartups that keep the world going ",
    urlx: "/images/black-arr.png",
    urli: "images/uiux.png",
  },
  {
    name: "Logo Design",
    discription:
      "Our clients are companies, brands, andstartups that keep the world going ",
    urlx: "/images/icon-2.png",
    urli: "images/design.png",
  },
  {
    name: "Development",
    discription:
      "Our clients are companies, brands, andstartups that keep the world going ",
    urlx: "/images/icon-2.png",
    urli: "images/development.png",
  },
];

export function Ourservice() {
  return (
    <div className="w-[80%] m-auto">
      <p className="text-[#222222] font-Sora text-[22px] font-semibold">
        OUR SERVICE
      </p>
      <div className="flex justify-between gap-[40px] items-center pb-[40px] flex-wrap">
        <div className="text-[#000000] font-Sora text-[clamp(32px,4.2vw,67px)] font-bold max-w-[470px] tracking-[-1.6px] leading-[71.337px]">
          Making Your <span className="text-[#006C99]">Ideas</span> Happen
        </div>
        <div className="text-[#696969] font-Sora text-[clamp(19px,1.4vw,23px)] max-w-[520px]">
          Our clients are companies, brands, and startups that keep the world
          going around. They treat diseases, move parcels.
        </div>
      </div>
      <div className="pb-[100px]">
        {brands.map((brand) => (
          <div className="flex gap-[30px] items-center justify-between flex-wrap border-b-[#B0AAAA] border-b-[1px] py-[30px]">
            <div className="flex gap-[40px] items-center flex-wrap">
              <img src={brand.urli} alt="" />
              <div className="text-[#282828] font-Sora text-[clamp(22px,2vw,36px)]">
                {brand.name}
              </div>
            </div>
            <div className="flex gap-[40px]  items-center flex-wrap">
              <div className="max-w-[390px] text-[#696969] text-[19px] font-Sora">
                {brand.discription}
              </div>
              <img src={brand.urlx} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Our() {
  return (
    <div className="w-[80%] m-auto pb-[70px]">
      <p className="text-[#222222] font-Sora text-[22px] font-semibold">
        OUR SERVICE
      </p>
      <div className="flex flex-wrap justify-between gap-[40px] items-center">
        <div className="text-[#000000] font-Sora text-[clamp(32px,4.2vw,67px)] font-bold max-w-[470px] tracking-[-1.6px] leading-[71.337px]">
          Discover Our <span className="text-[#006C99]">Selected</span> Work
        </div>
        <div className="">
          <div className="text-[#696969] font-Sora text-[clamp(19px,1.4vw,23px)] max-w-[520px] pb-[10px]">
            Our clients are companies, brands, and startups that keep the world
            going around.
          </div>
          <div className="text-[#000000] text-[22px] font-bold font-Sora">
            Discover More
          </div>
        </div>
      </div>
    </div>
  );
}

export function Last() {
  return (
    <div className="flex justify-between gap-[30px] flex-wrap w-[80%] m-auto pb-[50px]">
      <img src="/images/square.png" alt="" className="w-[300px] h-auto" />
      <img src="/images/square-1.png" alt="" className="w-[300px] h-auto" />
      <img src="/images/square-2.png" alt="" className="w-[300px] h-auto" />
    </div>
  );
}

export function Hero() {
  return (
    <div className="bg-[#202224]">
      <div className="w-[80%] m-auto pb-[40px]">
        <div className="flex flex-col justify-center items-center pt-[60px] pb-[100px]">
          <div className="text-[#FFFFFF] text-[22px] font-Sora font-semibold text-center">
            CONTACT US
          </div>
          <div className="text-[#FFFFFF] text-center font-Sora font-medium text-[clamp(30px,4.5vw,60px)] leading-[80px] tracking-[-1.7px] max-w-[800px]">
            Do You Have A Question Or An Idea? Let Us Know
          </div>
        </div>
        <div className="flex justify-between gap-[20px] rounded-[35px] bg-[#006C99] py-[10px] px-[20px] items-center flex-wrap">
          <img src="/images/icon-1.png" alt="" />
          <div className="text-[#EEEEEE] text-[clamp(14px,1.8vw,28px)] font-Sora ">
            Tutordeck_creative@gmail.com
          </div>
          <img src="/images/icon-1.png" alt="" />
        </div>
      </div>
    </div>
  );
}
