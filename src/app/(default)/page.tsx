'use client';

import CustomersReview from "@/components/Home/CustomersReview";
import Explore from "@/components/Home/Explore";
import FlowerGallery from "@/components/Home/FlowerGallery";
import Hero from "@/components/Home/Hero"
import OurFlowers from "@/components/Home/OurFlowers";
import Subscription from "@/components/Home/Subscription";
import WeddingFlower from "@/components/Home/WeddingFlower";


export default function page() {
  return (
    <div className=' font-inter'>
      <Hero />
      <OurFlowers />
      <Explore />
      <WeddingFlower />
      <FlowerGallery />
      <CustomersReview />
      <Subscription />
    </div>
  );
}
