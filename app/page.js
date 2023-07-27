import Image from "next/image";
import Header from "@/componenets/Header";
import Head from "next/head";
import Script from "next/script";
import Slider from "@/componenets/home/Slider";
import AboutSection from "@/componenets/home/AboutSection";
import ServiceSection from "@/componenets/home/ServiceSection";
import CounterSection from "@/componenets/home/CounterSection";
import ContactSection from "@/componenets/home/ContactSection";
import WorkProcessSection from "@/componenets/home/WorkProcessSection";
export default function Home() {
  return (
    <main>
      <Slider />
      <AboutSection />
      <ServiceSection />
      <CounterSection />
      <ContactSection />
      <WorkProcessSection />
    </main>
  );
}
