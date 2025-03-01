import Image, { StaticImageData } from "next/image"
import Rating from "../icon/Rating"

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

        <button
          onClick={onViewMore}
          className="w-full rounded-lg bg-pink-50 py-2.5 text-sm font-medium text-pink-600 transition-colors hover:bg-pink-100"
        >
          View More
        </button>
      </div>
    </div>
  )
}

