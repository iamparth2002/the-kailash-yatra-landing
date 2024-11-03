import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info Card */}
          <Card className="bg-teal-50 text-teal-900 shadow-md">
            <CardContent className="p-6 space-y-6">
              <Logo />
              <p className="text-teal-700 text-sm">
                Trusted in over 100 countries with 5 million customers. Have any queries? Contact us, we’re here to help.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="bg-teal-500 hover:bg-teal-300 p-2 rounded-full transition-colors"
                  >
                    <social.icon className="h-5 w-5 text-gray-100" />
                    <span className="sr-only">{social.icon.name}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Get In Touch */}
          <div className="space-y-4 text-white">
            <h3 className="text-xl font-semibold text-teal-200">Get In Touch</h3>
            <div className="space-y-2 text-white text-sm">
              <p>support@pagedone.com</p>
              <p>+91 945 658 3256</p>
              <p>61-A, Elm street, Gujarat, India.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-teal-900">
            <h3 className="text-xl font-semibold text-teal-200">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { text: "Home", href: "#" },
                { text: "Careers", href: "#" },
                { text: "FAQs", href: "#" },
                { text: "About", href: "#" },
                { text: "Price Plan", href: "#" },
                { text: "Contact", href: "#" },
                { text: "Features", href: "#" },
                { text: "Products", href: "#" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:underline text-white hover:text-teal-500"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-teal-100 mt-8 max-w-7xl mx-auto">
        <div className="container gap-2 md:flex justify-between mx-auto px-4 py-4">
          <p className="text-center text-white text-sm">
            © 2023 The Kailash yatra. All Rights Reserved.
          </p>
          <p className="text-center text-white text-sm max-md:mt-2">
            Created By @Parth Gandhi
           </p>
        </div>
      </div>
    </footer>
  );
}
