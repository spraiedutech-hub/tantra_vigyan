
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, FileText } from 'lucide-react';
import Link from 'next/link';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_CONSULTATION_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_CONSULTATION_MESSAGE)}`;

const services = [
    {
        icon: Phone,
        title: "ದೂರವಾಣಿ ಸಮಾಲೋಚನೆ",
        englishTitle: "Phone Consultation",
        price: "₹555 / 30 ನಿಮಿಷಗಳು",
        description: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ನೇರ ಉತ್ತರಗಳು ಮತ್ತು ತ್ವರಿತ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ.",
        features: [
            "30 ನಿಮಿಷಗಳ ನೇರ ಸಂಭಾಷಣೆ",
            "ಪ್ರಮುಖ 1-2 ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ",
            "ತ್ವರಿತ ಪರಿಹಾರಗಳು ಮತ್ತು ಸಲಹೆಗಳು"
        ]
    },
    {
        icon: FileText,
        title: "ಸಂಪೂರ್ಣ ಜಾತಕ ವಿಶ್ಲೇಷಣೆ",
        englishTitle: "Detailed Horoscope Analysis",
        price: "₹1,111",
        description: "ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಳವಾದ, ಲಿಖಿತ ವಿಶ್ಲೇಷಣೆ.",
        features: [
            "ಸಂಪೂರ್ಣ ಜೀವನದ ಅವಲೋಕನ",
            "ದೋಷಗಳು ಮತ್ತು ಯೋಗಗಳ ವಿಶ್ಲೇಷಣೆ",
            "ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಪರಿಹಾರಗಳು"
        ]
    }
];

export default function ConsultationPricing() {
  return (
    <section className="space-y-6 mt-12">
      <h2 className="text-3xl font-bold font-headline text-primary text-center">ಸಮಾಲೋಚನೆ ಶುಲ್ಕಗಳು</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl text-accent pt-2">{service.title}</CardTitle>
              <CardDescription>{service.englishTitle}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 text-center">
              <p className="text-4xl font-bold">{service.price}</p>
              <p className="text-muted-foreground">{service.description}</p>
              <ul className="text-left list-disc list-inside space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={WHATSAPP_URL} target="_blank">
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp ಮೂಲಕ ವಿನಂತಿಸಿ
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
