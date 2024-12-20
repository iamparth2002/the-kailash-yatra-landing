'use client';
import { Mail, Phone } from 'lucide-react';
import { contactData, features, headingList, packages } from '@/utils/data';
import TourPackageCard from '@/components/custom/TravelCard';
import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';
import DialogueButton from '@/components/custom/DialogueButton';
import FAQ from '@/components/custom/Faq';
import ChardhamTable from '@/components/custom/ChardhamTable';
import ContactInfo from '@/components/custom/ContactInfo';
import { MobileBar } from '@/components/custom/MobileBar';
import { formatPhoneNumber } from '@/utils/functions';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';
import QueryForm from '@/components/custom/QueryForm';


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="hidden md:block bg-teal-500 text-white text-center py-2 text-sm font-medium">
        <div className="flex max-w-7xl justify-between mx-auto px-4">
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
              <Mail className="h-4 w-4" />
              {contactData?.email} |
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="h-4 w-4" />
              {formatPhoneNumber(contactData?.phone)}
            </div>
          </div>
          <div>GST No :- 1234567890</div>
        </div>
      </div>
      <Header />

      <section
        className="bg-gray-900 text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/15031440/pexels-photo-15031440/free-photo-of-a-crowd-standing-in-front-of-the-kedarnath-temple-in-kedarnath-india-during-a-ceremony.jpeg')",
        }}
      >
        {/* Overlay to darken and blur the image */}
        <div
          className="absolute inset-0 bg-black bg-opacity-20"
          style={{ filter: 'blur(4px)' }}
        ></div>

        <div className="relative backdrop-brightness-50 mx-auto">
          <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center justify-center h-[600px]">
            <div className="text-center mb-8 md:mb-0">
              <h2 className="text-4xl md:text-7xl font-bold">
                {headingList?.heading1?.heading}
              </h2>

              <p className="gap-2  items-center max-md:text-xl text-2xl mb-8  text-white p-4 rounded-full">
                {headingList?.heading1?.subHeading}
              </p>
              <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-teal-500 hover:bg-teal-600 text-3xl p-6 rounded-full">Book Now</Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl">
                <QueryForm />
              </DialogContent>
            </Dialog>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12" id="packages">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {headingList?.heading2?.heading}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {headingList?.heading2?.subHeading}
        </p>
        <div className="space-y-8">
          {packages.map((item, i) => (
            <TourPackageCard item={item} key={i} />
          ))}
        </div>
      </section>

      <section className="w-full">
        <div
          className="relative h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white p-4 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/14208440/pexels-photo-14208440.png')",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 drop-shadow-lg">
            {headingList?.heading3?.heading}
          </h1>
          <DialogueButton
            text="CLICK HERE & LET US KNOW YOUR REQUIREMENT"
            css="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-4 md:py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-wrap max-md:py-12"
          />
        </div>

        <div className="hidden md:block max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {headingList?.heading4?.heading}
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-teal-500">
              {headingList?.heading4?.subHeading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-teal-500 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <DialogueButton
              text="CLICK TO CUSTOMIZED KEDARNATH PACKAGES"
              css="bg-teal-500 hover:bg-teal-600 text-white text-xl px-10 py-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>
      <ChardhamTable />
      <FAQ />

      <ContactInfo />

      <Footer />
      <MobileBar />
    </div>
  );
}
