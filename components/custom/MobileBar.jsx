"use client"

import { Phone, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import QueryForm from './QueryForm'
import { handleSupportClick, handleWhatsAppClick } from '@/utils/functions'

export function MobileBar() {
  return (
    <div className="fixed shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] bottom-0 left-0 right-0 z-50 flex gap-2 h-20 items-center justify-between bg-white px-4 text-white md:hidden">
      <Button aria-label="Contact Phone" variant="ghost" size="icon" className="text-teal-500 border-2 border-teal-500 hover:text-teal-500" onClick={handleSupportClick}>
        <Phone className="h-5 w-5"  fill='teal'/>
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex-1 text-base font-medium text-white bg-teal-500 hover:bg-teal-500/80 hover:text-white"
          >
            Get All Details
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-2">
          <QueryForm/>
        </DialogContent>
      </Dialog>
      <Button variant="ghost" aria-label="Contact Whatsapp" size="icon" className="text-teal-500 border-2 border-teal-500 hover:text-teal-200" onClick={handleWhatsAppClick}>
        {/* <MessageCircle className="h-5 w-5" /> */}
        <img src="/whatsapp.svg" alt="Whatsapp" width={20} height={20} />
      </Button>
    </div>
  )
}

