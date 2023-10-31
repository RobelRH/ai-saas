import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "../../components/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  )
}
