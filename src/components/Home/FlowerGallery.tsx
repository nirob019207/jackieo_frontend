import Image from "next/image"
import galleryImgOne from "@/assets/galleryImgOne.svg";
import galleryImgtwo from "@/assets/galleryImgTwo.svg";
import galleryImgThree from "@/assets/galleryImgThree.svg";

export default function FlowerGallery() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">Our Flower Gallery</h1>
                <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
                    Explore our stunning collection of fresh and vibrant flowers, handpicked for every occasion. Let nature's
                    beauty inspire your next floral arrangements.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
                {/* Top row - 3 images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* First image with overlay */}
                    <div className="relative overflow-hidden rounded-sm">
                        <Image
                            src={galleryImgOne}
                            alt="Colorful flower arrangement on table"
                            width={400}
                            height={300}
                            className="w-full h-[200px] md:h-[250px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <span className="text-white text-xl font-medium">Explore</span>
                        </div>
                    </div>

                    {/* Second image */}
                    <div className="overflow-hidden rounded-sm">
                        <Image
                            src={galleryImgtwo}
                            alt="Person holding pink rose bouquet"
                            width={400}
                            height={300}
                            className="w-full h-[200px] md:h-[250px] object-cover"
                        />
                    </div>

                    {/* Third image */}
                    <div className="overflow-hidden rounded-sm">
                        <Image
                            src={galleryImgThree}
                            alt="Vibrant coral and orange flower arrangement"
                            width={400}
                            height={300}
                            className="w-full h-[200px] md:h-[250px] object-cover"
                        />
                    </div>
                </div>

                {/* Bottom row - 2 images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-0 md:mt-0">
                    <div className="overflow-hidden rounded-sm mx-auto md:mx-0 w-full max-w-md md:max-w-none">
                        <Image
                            src={galleryImgOne}
                            alt="Person holding pink rose bouquet"
                            width={400}
                            height={300}
                            className="w-full h-[200px] md:h-[250px] object-cover"
                        />
                    </div>

                    <div className="overflow-hidden rounded-sm mx-auto md:mx-0 w-full max-w-md md:max-w-none">
                        <Image
                            src={galleryImgtwo}
                            alt="Purple and pink flower bouquet with ribbon"
                            width={400}
                            height={300}
                            className="w-full h-[200px] md:h-[250px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

