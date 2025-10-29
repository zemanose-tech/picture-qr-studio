import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { getBookingInfoTranslation } from "@/lib/translations";

const BookingInfoSection = () => {
  const { language } = useLanguage();
  const bookingInfoCopy = getBookingInfoTranslation(language);

  return (
    <section className="bg-primary text-white px-6 py-16">
      <Card className="bg-primary border-none text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-8">
            {bookingInfoCopy.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {bookingInfoCopy.items.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default BookingInfoSection;