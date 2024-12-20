'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '../ui/button'
import QueryForm from './QueryForm'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto py-4 px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#packages"
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Packages
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              FAQs
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-teal-500 hover:bg-teal-600">Book Now</Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl">
                <QueryForm />
              </DialogContent>
            </Dialog>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden absolute z-20 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'top-full opacity-100 visible' : 'top-[110%] opacity-0 invisible'
            }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              href="#packages"
              className="text-gray-700 hover:text-teal-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-teal-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link><Link
              href="#faq"
              className="text-gray-700 hover:text-teal-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-teal-500 hover:bg-teal-600">Book Now</Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl">
                <QueryForm />
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header




// import React from 'react';
// import { Button } from '../ui/button';
// import QueryForm from './QueryForm';
// import Logo from './Logo';

// const Header = () => {
//   return (
//     <header className="bg-white shadow-sm">
//       <div className="container mx-auto py-4 flex justify-between items-center max-w-7xl px-4">
//         <Logo/>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button className="bg-teal-500 hover:bg-teal-600">Book Now</Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-5xl">
//             <QueryForm />
//           </DialogContent>
//         </Dialog>
//       </div>
//     </header>
//   );
// };

// export default Header;
