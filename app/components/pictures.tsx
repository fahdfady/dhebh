import ImgCard from "./ImgCard";
import { Carousel } from "./ui/carousel";

export default function Pictures() {
    return (
        <section>
            <div className="flex justify-center items-center gap-x-11 gap-y-11 px-8 pt-20 sm:px-0">
                <div className="grid grid-cols-2 gap-6">
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                </div>

                <Carousel
                    opts={{
                        loop: true
                    }}
                >
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
            </div>
        </section>
    )
}