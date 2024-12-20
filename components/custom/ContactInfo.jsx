import { contactData } from '@/utils/data'
import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, Linkedin,Youtube } from 'lucide-react'
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12" id='contact'>
      <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a1435] mb-2">
                    Contact Us
                </h2>
                <div className="w-24 h-1 bg-teal-200 mx-auto"></div>
            </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-teal-800 mb-1">Our Location</h3>
              <p className="text-gray-600">{contactData.address}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-teal-800 mb-1">Phone Number</h3>
              <p className="text-gray-600">{contactData.phone}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-teal-800 mb-1">Email Address</h3>
              <p className="text-gray-600">{contactData.email}</p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-semibold text-teal-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
            {contactData.socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="bg-teal-500 hover:bg-teal-300 p-2 rounded-full transition-colors"
                  >
                    <social.icon className="h-5 w-5 text-gray-100" />
                    <span className="sr-onl">{social.icon.name}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[300px] lg:h-full">
          <iframe
            src={contactData.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

