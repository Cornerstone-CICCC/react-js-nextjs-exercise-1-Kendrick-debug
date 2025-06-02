import { Metadata } from "next"


export const metadata: Metadata = {
    title: "My About PAge",
    description: "A place where You Learn More About This Page"
}

const page = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Page</h1>
        <p className="text-lg text-gray-600">This is The About Page where You learn More About This Website</p>
    </div>
  )
}

export default page