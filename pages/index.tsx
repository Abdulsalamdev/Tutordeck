import Image from "next/image";
import { Inter } from "next/font/google";
import {
  About,
  Anmation,
  Blue,
  Blue1,
  Create,
  Hero,
  Last,
  Marquee,
  Navbar,
  Our,
  Ourservice,
} from "@/components/home/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#FCFBFC]">
      <Navbar />
      <Create />
      <Blue />
      <Marquee />
      <About />
      <Blue1 />
      <Anmation />
      <Ourservice />
      <Our />
      <Last />
      <Hero />
    </div>
  );
}
