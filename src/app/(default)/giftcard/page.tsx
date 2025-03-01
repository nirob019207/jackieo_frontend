import GiftCard from "@/components/gift/GiftCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Gift Selection</h1>
      <p className="mb-8">Select your items and customize your gift</p>

      <div className="h-64 bg-white rounded-lg shadow p-4 mb-4">
        <p>Main content would go here</p>
      </div>

      <GiftCard />
    </div>
  )
}

