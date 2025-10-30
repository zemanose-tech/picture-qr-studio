import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/hooks/use-language";
import { getCampDetailsTranslation } from "@/lib/translations";

const CampDetailsSection = () => {
  const { language } = useLanguage();
  const campDetailsCopy = getCampDetailsTranslation(language);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white px-6 py-16">
      <div className="space-y-8">
        {campDetailsCopy.camps.map((camp, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-primary mb-2">
                {camp.title}
              </CardTitle>
              {/*<p className="text-blue-600 font-semibold">{camp.subtitle}</p>*/}
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Icons */}


              {/* Features */}


              {/* Description */}


              {/* Camp Information */}
              <div className={`${camp.bgColor} rounded-lg p-6 text-center`}>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    camp.bgColor === "bg-blue-600" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {camp.description}
                </p>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  {campDetailsCopy.buttonLabel}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType={campDetailsCopy.inquiryType}
      />
    </section>
  );
};
export default CampDetailsSection;