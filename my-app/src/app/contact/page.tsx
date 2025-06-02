import { Metadata } from "next"

export const metadata: Metadata = {
    title: "My Contact PAge",
    description: "A place To Contact Us"
}



const page = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact-Us </h1>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis mollitia tempore quos veritatis illum ut, excepturi necessitatibus magni sapiente, provident molestias aut fugiat nemo deleniti pariatur. Delectus, vero expedita?</p>
    </div>
  )
}

export default page