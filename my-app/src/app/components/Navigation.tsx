import Link from "next/link"


const Navigation = () => {
  return (
    <header>
        <ul>
            <menu className=" right-6 z-50 fixed top-4 flex space-x-10  ">
                <li className="underline">
                 <Link href="/" className="underline underline-offset-4 hover:text-blue-600 transition-colors duration-200">Home</Link>
                </li>
                <li className="underline">
                    <Link href="/about" className="underline underline-offset-4 hover:text-blue-600 transition-colors duration-200">About-us</Link>
                </li>
                <li className="underline">
                    <Link href="/service" className="underline underline-offset-4 hover:text-blue-600 transition-colors duration-200">Service</Link>
                </li>
                <li className="underline">
                    <Link href="/contact" className="underline underline-offset-4 hover:text-blue-600 transition-colors duration-200">contact-us</Link>
                </li>
            </menu>
        </ul>
    </header>
  )
}

export default Navigation