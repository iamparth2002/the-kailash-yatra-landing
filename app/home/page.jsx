'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import {
  Loader2,
  MapPin,
  Calendar,
  Users,
  Utensils,
  Bus,
  Mail,
  Phone,
  Clock,
  Compass,
  PiggyBank,
} from 'lucide-react';
import Image from 'next/image';
import { packages } from '@/utils/data';
import TourPackageCard from '@/components/custom/TravelCard';
import SubmitQueryForm from '@/components/custom/SubmitForm';
import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';
import DialogueButton from '@/components/custom/DialogueButton';

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="hidden md:block bg-teal-500 text-white text-center py-2 text-sm font-medium">
        <div className="flex max-w-7xl justify-between mx-auto px-4">
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
              <Mail className="h-4 w-4" />
              neenaparth@gmail.com |
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="h-4 w-4" />
              +91 7011989645
            </div>
          </div>
          <div>GST No :- 1234567890</div>
        </div>
      </div>
      <Header />

      <section className="bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/15031440/pexels-photo-15031440/free-photo-of-a-crowd-standing-in-front-of-the-kedarnath-temple-in-kedarnath-india-during-a-ceremony.jpeg')" }}>
        <div className="backdrop-brightness-50 mx-auto">
          <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
            <div className="max-md:text-center md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-7xl font-bold mb-4">KEDARNATH</h2>
              <p className="text-2xl mb-8">Tour Packages <span className="bg-teal-600 text-white p-2 rounded-full">3N/4D</span></p>
              <p className="inline-flex gap-2 items-center text-2xl mb-8 bg-white text-black p-4 rounded-full">
                Starting from <span className="text-teal-600"> ₹12,499/-</span> <span className="text-base"> PP</span>
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg">
              <SubmitQueryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4">Book Beautiful Kedarnath Tour Packages</h2>
        <p className="text-center mb-8">Explore the divine beauty of Kedarnath with our exclusive tour package...</p>
        <div className="space-y-8">
          {packages.map((item, i) => (
            <TourPackageCard item={item} key={i} />
          ))}
        </div>
      </section>

      <section className="w-full">
        <div className="relative h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white p-4 overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/14208440/pexels-photo-14208440.png')" }}>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 drop-shadow-lg">Still Confused? to Choose Kedarnath Packages</h1>
          <DialogueButton text="CLICK HERE & LET US KNOW YOUR REQUIREMENT" css="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-4 md:py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-wrap max-md:py-12" />
        </div>

        <div className="hidden md:block max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Customize & Book Amazing Winter</h2>
            <p className="text-3xl md:text-4xl font-bold text-teal-500">Kedarnath Tour Packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {[
              { icon: Clock, title: 'SAVE TIME', description: 'No need to surf Multiple Sites for Kedarnath packages, quotes, travel plans' },
              { icon: Compass, title: 'MULTIPLE OPTIONS', description: 'Get Multiple Itineraries & Personalised Suggestions from our Travel agents' },
              { icon: PiggyBank, title: 'SAVE MONEY', description: 'Compare, Negotiate & Choose the best Kedarnath package from multiple options' },
              { icon: Users, title: 'TRUSTED NETWORK', description: 'Of 500+ Hotels Reliable & Authentic Travel Guides in Mp' },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-teal-500 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <DialogueButton text="CLICK TO CUSTOMIZED KEDARNATH PACKAGES" css="bg-teal-500 hover:bg-teal-600 text-white text-xl px-10 py-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
