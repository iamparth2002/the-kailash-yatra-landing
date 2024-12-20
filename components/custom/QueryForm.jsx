'use client';

import { useState } from 'react';
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
import { contactData } from '@/utils/data';
import { formatPhoneNumber } from '@/utils/functions';
import { CheckCircle, Phone, User } from 'lucide-react';

export default function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    travelDate: '',
    adults: '',
    requirement: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, adults: value }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validate required fields
    if (!formData.name || !formData.mobile) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      // Simulate API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your query has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          travelDate: '',
          adults: '',
          requirement: '',
        });
      } else {
        throw new Error('Something went wrong. Please try again later.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Card className="w-full max-w-5xl mx-auto border-0 shadow-none">
      <CardContent className="p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* How It Works Section */}
          <div className="hidden md:block space-y-6">
            <h2 className="text-2xl font-semibold text-teal-600">How It Works</h2>
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
                  title: 'The Kailash Yatra',
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
              <span className="text-xl font-semibold">
                {formatPhoneNumber(contactData?.phone)}
              </span>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">QUICK ENQUIRY</h2>
            {error && <p className="text-sm text-red-600">{error}</p>}
            {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
              />
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Id"
              />
              <Input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No.*"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  type="date"
                  placeholder="Travel Date"
                />
                <Select onValueChange={handleSelectChange}>
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
              <Textarea
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Requirement"
                className="min-h-[100px]"
              />
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                size="lg"
              >
                Send Enquiry
              </Button>
              <p className="text-xs text-center text-gray-600">
                By clicking submit query I accept the{' '}
                <a href="#" className="text-teal-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
