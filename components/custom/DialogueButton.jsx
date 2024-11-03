'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import QueryForm from './QueryForm';
import { Button } from '../ui/button';


const DialogueButton = ({ text, css }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`bg-teal-500 hover:bg-teal-600 ${css}`}>
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <QueryForm />
      </DialogContent>
    </Dialog>
  );
};

export default DialogueButton;
