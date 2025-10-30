import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface AutoScrollCarouselProps {
  images: Array<{
    id: number;
    image: string;
    alt?: string;
  }>;
  /**
   * Height classes applied from sm: and up.
   * Mobile uses aspect ratio to prevent crop/zoom.
   */
  height?: string;
  delay?: number;
}

const AutoScrollCarousel = ({
  images,
  // mobile uses aspect; from sm: we keep your original heights
  height = "sm:h-64 md:h-72 lg:h-80",
  delay = 2500,
}: AutoScrollCarouselProps) => {
  const plugin = useRef(
    Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="flex gap-1">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              // Full width slides on mobile; original behavior from sm: up
              className="basis-full sm:basis-auto flex-shrink-0"
            >
              {/* Mobile gets a safe aspect ratio to avoid zoom; from sm: we use your heights */}
              <div className={`w-full overflow-hidden aspect-[4/3] sm:aspect-auto ${height}`}>
                <img
                  src={image.image}
                  alt={image.alt || `Image ${image.id}`}
                  className="carousel-image"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AutoScrollCarousel;