'use client';

import Explore from "@/components/Home/Explore";
import FlowerGallery from "@/components/Home/FlowerGallery";
import Hero from "@/components/Home/Hero"
import OurFlowers from "@/components/Home/OurFlowers";
import WeddingFlower from "@/components/Home/WeddingFlower";


export default function page() {
  return (
    <div className='bg-[#F5F5F5] font-inter'>
      <Hero />
      <OurFlowers />
      <Explore />
      <WeddingFlower />
      <FlowerGallery />
    </div>
  );
}
