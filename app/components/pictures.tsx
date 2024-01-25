import ImgCard from "./ImgCard";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel";

export default function Pictures() {
    return (
        <section>
            <div className="flex flex-wrap justify-center items-center gap-x-11 gap-y-11 px-8 pt-20 sm:px-0">
                <div className="grid grid-cols-2 gap-6">
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                </div>

                <Carousel
                    className="relative h-[31rem] w-full max-w-[46rem] shrink-0 grow overflow-hidden rounded-2xl border-2 border-[#1c343e]"
                    opts={{
                        loop: true
                    }}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src={'/outside-3.webp'}
                                className="h-full w-full rounded-2xl object-cover duration-1000"
                                width={500}
                                height={500}
                                alt="banner image"
                                quality={70}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src={'/outside-3.webp'}
                                className="h-full w-full rounded-2xl object-cover duration-1000"
                                width={500}
                                height={500}
                                alt="banner image"
                                quality={70}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src={'/outside-3.webp'}
                                className="h-full w-full rounded-2xl object-cover duration-1000"
                                width={500}
                                height={500}
                                alt="banner image"
                                quality={70}
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}