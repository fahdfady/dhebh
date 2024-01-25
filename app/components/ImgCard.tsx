import Image from "next/image";
import Link from "next/link";

export default function ImgCard() {
    return (
        <Link href={'/'} className="relative max-h-32 rounded-2xl md:w-[17rem] group">
            <Image
                src={'/outside-3.webp'}
                className="h-full w-full rounded-2xl"
                width={200}
                height={200}
                alt="placeholder image"
            />
            <div className="w-full h-full rounded-2xl absolute inset-0 flex justify-center items-center duration-150 bg-[#1c343e65] group-hover:bg-[#1c343ebf] group-focus:bg-[#1c343ebf]">
                <h3 className="font-bold text-blue-500 duration-200" >Outside</h3>
            </div>
        </Link>
    )
}