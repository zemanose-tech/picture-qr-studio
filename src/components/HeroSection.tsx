import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import logoWhite from "@/assets/img-logo-white.png";
const HeroSection = () => {
  const plugin = useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: false
  }));

  // Use instalaciones images for hero carousel
  const heroImages = Array.from({
    length: 18
  }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/instalaciones_carousel/${i + 1}.jpg`,
    alt: `IMG Academy Hero ${i + 1}`
  }));
  return <>
      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Carousel plugins={[plugin.current]} className="w-full h-full" opts={{
        align: "start",
        loop: true,
        dragFree: false,
        slidesToScroll: 1
      }}>
          <CarouselContent className="h-full -ml-0">
            {heroImages.map(image => <CarouselItem key={image.id} className="pl-0 basis-full">
                <div className="relative h-screen w-full">
                  <img src={image.image} alt={image.alt} className="h-full w-full object-cover" />
                </div>
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
        
        {/* Static Text and Logo Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
            Bienvenidos a
          </h1>
          <img src={logoWhite} alt="IMG Academy Logo" className="h-12 sm:h-14 md:h-16 w-auto" />
        </div>
      </section>

      <section className="bg-primary text-white">
      {/* Logo Section */}
      

      {/* Award Badge */}
      

      {/* Main Heading */}
      <div className="px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 sm:mb-8">
        <br />
          UN CAMPUS.<br />
          POTENCIAL<br />
          ILIMITADO.
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">En IMG Academy, reunimos a estudiantes-atletas apasionados con entrenadores y profesores de clase mundial, creando un entorno único donde el talento se transforma en resultados.

Aquí, cada meta cuenta y cada logro se apoya con una atención personalizada, gracias a nuestra proporción de 4 miembros del personal por cada estudiante.</p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 text-primary px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-8 auto-rows-fr">
          {[
            { n: '100', t: '% tasa de aceptación universitaria' },
            { n: '25',  t: 'admisiones a las 25 mejores universidades según US News' },
            { n: '311', t: 'atletas comprometidos con programas NCAA División I, II, III y NAIA' },
            { n: '8',   t: 'compromisos con universidades Ivy League' },
            { n: '38',  t: 'estudiantes distinguidos como AP Scholars' },
            { n: '71',  t: 'países representados' },
          ].map((s, i) => (
            <div key={i} className="h-full flex flex-col items-center justify-center text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none mb-1">
                {s.n}
              </div>
              <p className="text-[11px] sm:text-xs leading-snug max-w-[18ch] sm:max-w-none">
                {s.t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>;
};
export default HeroSection;