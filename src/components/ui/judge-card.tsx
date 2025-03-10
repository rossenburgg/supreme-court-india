'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface JudgeCardProps {
  name: string
  nameHindi: string
  designation?: string
  imageUrl: string
  birthInfo?: {
    date: string
    place: string
  }
}

export function JudgeCard(props: JudgeCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="relative bg-black rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-48 h-48 mx-auto mt-8 rounded-full overflow-hidden border-4 border-[#9b8154]">
          <Image
            src={props.imageUrl}
            alt={props.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-white font-bold mb-1">
            <span className="block text-sm mb-1">Hon'ble</span>
            <span className="block text-lg">{props.name}</span>
          </h3>
          <p className="text-[#9b8154] mb-4 font-medium text-base">
            {props.nameHindi}
          </p>
          {props.designation && (
            <p className="text-white/80 text-sm uppercase tracking-wider mb-4">
              {props.designation}
            </p>
          )}
        </div>
      </motion.div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            Profile of {props.name}
          </DialogTitle>
          
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="grid md:grid-cols-[300px,1fr]">
            <div className="bg-black p-8">
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-[#9b8154] mb-6">
                <Image
                  src={props.imageUrl}
                  alt={props.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold">
                  <span className="block text-sm mb-1">Hon'ble</span>
                  <span className="block text-lg">{props.name}</span>
                </h3>
                <p className="text-[#9b8154] mt-2 font-medium">
                  {props.nameHindi}
                </p>
                {props.designation && (
                  <p className="text-white/80 text-sm uppercase tracking-wider mt-4">
                    {props.designation}
                  </p>
                )}
              </div>
            </div>

            <div className="p-8 bg-white">
              <div className="space-y-6">
                {props.birthInfo && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Birth Details</h4>
                    <p className="text-gray-900">
                      <span className="block">Date: {props.birthInfo.date}</span>
                      {props.birthInfo.place && (
                        <span className="block">Place: {props.birthInfo.place}</span>
                      )}
                    </p>
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Contact</h4>
                  <p className="text-gray-900">
                    Supreme Court of India<br />
                    Tilak Marg, New Delhi-110001<br />
                    Office: +91-11-23116400
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
