'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Phone, User } from 'lucide-react';

export default function QueryForm() {
  return (
    <Card className="w-full max-w-5xl mx-auto border-0 shadow-none">
      <CardContent className="p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* How It Works Section */}
          <div className="hidden md:block space-y-6">
            <h2 className="text-2xl font-semibold text-teal-600">
              How It Works
            </h2>
            <div className="space-y-4">
              {[
                'Tell us details of your holiday plan.',
                'Get multiple quotes from experts.',
                'Compare & customize as per your need.',
                'Select & book best deal.',
              ].map((step, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600 text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: User, title: '10k+', subtitle: 'Happy Clients' },
                {
                  icon: CheckCircle,
                  title: 'Reena Holidays',
                  subtitle: 'Verified',
                },
                {
                  icon: CheckCircle,
                  title: 'Stringent',
                  subtitle: 'Quality Control',
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.subtitle}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-teal-100 text-teal-600 p-3 rounded-md">
              <Phone className="w-5 h-5" />
              <span className="text-xl font-semibold">+91 9999 233 932</span>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              QUICK ENQUIRY
            </h2>
            <div className="space-y-4">
              <Input placeholder="Name*" />
              <Input type="email" placeholder="Email Id" />
              <Input placeholder="Mobile No.*" />
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" placeholder="Travel Date" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="No. of Adults" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Requirement" className="min-h-[100px]" />
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                size="lg"
              >
                Send Enquiry
              </Button>
              <p className="text-xs text-center text-gray-600">
                By clicking submit query i accept the{' '}
                <a href="#" className="text-teal-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
