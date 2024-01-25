//Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".
"use server"

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay"


export default async function Banner() {
    return (
        // max-w-[1592px]
        <section className="pb-32 xl:px-20 xl:pb-0">
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Image
                            src={'/banner.webp'}
                            width={1700}
                            height={600}
                            alt="banner image"
                            quality={70}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src={'/banner.webp'}
                            width={1700}
                            height={600}
                            alt="banner image"
                            quality={70}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src={'/banner.webp'}
                            width={1700}
                            height={600}
                            alt="banner image"
                            quality={70}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="absolute">

            </div>
        </section>
    )
}