import Image from "next/image";

export default function Banner() {
    return (
        // max-w-[1592px]
        <section className="pb-32 xl:px-20 xl:pb-0">
            <div className="slider">
                <div className="flex w-full lg:h-[35rem]">
                    <Image
                        src={'/banner.webp'}
                        width={1700}
                        height={600}
                        alt="banner image"
                        quality={70}
                    />
                </div>
            </div>
            <div className="absolute">
                
            </div>
        </section>
    )
}