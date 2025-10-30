import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/hooks/use-language";
import { getFacilitiesPageTranslation } from "@/lib/translations";

const Facilities = () => {
  const { language } = useLanguage();
  const facilitiesCopy = getFacilitiesPageTranslation(language);
  const campusImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/instalaciones_carousel/${i + 1}.jpg`,
    alt: `${facilitiesCopy.carouselAltPrefix} ${i + 1}`,
  }));

  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <br />
      <br />
      
      {/* Header Video Section */}
      <section className="relative overflow-hidden">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1znorFaKdcc?autoplay=1&mute=0&loop=1&controls=0&playlist=1znorFaKdcc&modestbranding=1&rel=0&showinfo=0"
            title={facilitiesCopy.videoTitle}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </section>

      <main>
        {/* Engaging Installations Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-primary mb-8">
                {facilitiesCopy.hero.heading}
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">
                  {facilitiesCopy.campusSection.subtitle}
                </h3>
                {facilitiesCopy.campusSection.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-lg leading-relaxed text-muted-foreground${
                      index === facilitiesCopy.campusSection.paragraphs.length - 1 ? "" : " mb-6"
                    }`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>


            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {facilitiesCopy.campusSection.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold text-primary mb-4">{card.title}</h4>
                  <p className="text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">
                {facilitiesCopy.campusSection.highlight.title}
              </h3>
              <p
                className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90"
                dangerouslySetInnerHTML={{
                  __html: facilitiesCopy.campusSection.highlight.description,
                }}
              />
            </div>
          </div>
        </section>

        {/* Instagram-style Auto-scrolling Carousel */}
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
              {campusImages.map((image) => (
                <CarouselItem key={image.id} className="basis-auto flex-shrink-0">
                  <div className="h-72 w-auto">
                    <img
                      src={image.image}
                      alt={image.alt}
                      className="h-full w-auto object-contain filter brightness-95 saturate-100 contrast-105 transition-transform duration-500 ease-in-out"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Facilities;