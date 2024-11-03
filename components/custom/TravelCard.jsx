import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import QueryForm from './QueryForm';

export default function TourPackageCard({ item }) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        <CardContent className="p-6 md:w-2/3">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-teal-600">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">
              <span className="text-red-500">☾ {item.nights} Nights</span> /{' '}
              <span className="text-orange-500">⚹ {item.days} Days</span>
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <h4 className="font-semibold mb-2">Package Inclusions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {item.inclusions.map((inclusion, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{inclusion.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs mt-1">Transfer</span>
              </div>
              <div className="flex flex-col items-center opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span className="text-xs mt-1">Flights</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-xs mt-1">Hotels</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 22V12h6v10"
                  />
                </svg>
                <span className="text-xs mt-1">Sightseeing</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs mt-1">Meals</span>
              </div>
            </div>
          </div>
        </CardContent>
        <div className="lg:w-1/4 p-6  flex flex-col justify-center">
          <div className="relative mb-4">
            <div className="absolute -top-5 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              DISCOUNT {20}%
            </div>
            <div>
              <span className="text-2xl font-bold text-teal-600">
                ₹{item.discountedPrice.toLocaleString()}
              </span>
              <span className="text-sm text-red-500 line-through ml-2">
                ₹{item.originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-gray-500">Price Per Adult</p>
          </div>
          <div className="space-y-2">
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              {item.phoneNumber}
            </Button>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                    Send Enquiry
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                  <QueryForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
