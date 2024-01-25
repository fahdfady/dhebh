import Image from "next/image";
import Link from "next/link";
import Languages from "./languages";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center h-20 px-4 py-2 lg:px-20 xl:px-40 2xl:px-72 text-black">
            <Link href="/" aria-label="back to home" >
                <Image
                    src={"/logo.webp"}
                    className="max-sm:w-[150px]"
                    width={200}
                    height={200}
                    alt="logo"
                />
            </Link>
            <nav className="capitalize">
                <ul className="flex items-center gap-7">
                    <li className="relative">
                        <Languages />
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/" className="font-light duration-150 hover:font-bold focus:font-bold">Home</Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/services" className="duration-150 hover:font-bold focus:font-bold">Services</Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/doctors" className="duration-150 hover:font-bold focus:font-bold">Doctors</Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/about" className="duration-150 hover:font-bold focus:font-bold">About us</Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/contact" className="duration-150 hover:font-bold focus:font-bold">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}