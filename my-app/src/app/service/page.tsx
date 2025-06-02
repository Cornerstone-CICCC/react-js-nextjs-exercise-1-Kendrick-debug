import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Service PAge",
    description: "A place where You Lear More About Our Services"
}



const page = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Services Page</h1>
        <p className="text-lg text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iste architecto quo nulla, dolorem nisi voluptates ad at cupiditate velit adipisci error, reprehenderit commodi. Officiis blanditiis ratione quo ab et.</p>
    </div>
  )
}

export default page