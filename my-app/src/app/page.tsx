import { Metadata } from "next"


export const metadata: Metadata ={
  title: "My awesome Home Page",
  description: "Welcome To My Amazing Website HOme Page"
}



const page = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">WELCOME</h1>
      <h3 className="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit blanditiis a animi,
         quis magnam porro dolore dicta omnis? Saepe facilis 
         molestiae quia excepturi beatae numquam doloribus, unde deleniti in.</h3>
    </div>
  )
}

export default page