import Image, { StaticImageData } from "next/image"
import Rating from "../icon/Rating"
import Link from "next/link"

interface ProductCardProps {
  title: string
  price: number
  rating: number
  imageUrl: StaticImageData
  onViewMore?: () => void
}

export default function ProductCard({ title, price, rating = 5, imageUrl, onViewMore }: ProductCardProps) {
  return (
    <div className="group relative w-full max-w-sm rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover object-center" />
      </div>

      <div className="mt-4 space-y-2">
       <div className="flex justify-between">
       <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Rating key={i}/>
          ))}
        </div>

        <div className="text-2xl font-semibold">${price}</div>
       </div>

        <h3 className="font-medium text-gray-900">{title}</h3>
        <Link href="/flowerDetails" >
             
        <button
          onClick={onViewMore}
          className="mt-auto py-2 px-4 w-full bg-secondary border-[#E8636F] text-rose-500 rounded text-sm font-medium  transition-colors"
        >
          View More
        </button>
   
        </Link>
      </div>
    </div>
  )
}

