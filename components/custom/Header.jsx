import React from 'react';
import { Button } from '../ui/button';
import QueryForm from './QueryForm';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 flex justify-between items-center max-w-7xl px-4">
        <Logo/>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-teal-500 hover:bg-teal-600">Book Now</Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl">
            <QueryForm />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
