'use client'
import { Mail, Phone, MapPin, Book, ExternalLink, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-[#f5f2eb] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#993333] text-center mb-16">संपर्क करें</h2>
          
          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Map */}
            <div className="col-span-5 rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2253968342366!2d77.23139731508565!3d28.622827982422868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce319bd212245%3A0x5b0ba79b1ef84fe4!2sSupreme%20Court%20of%20India!5e0!3m2!1sen!2sin!4v1645517558344!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>

            {/* Right side - Contact Info */}
            <div className="col-span-7 space-y-8">
              {/* Email Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#993333]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#993333]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">हमें ईमेल करें</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600 font-mono">supremecourt[at]nic[dot]in</p>
                      <button 
                        onClick={() => handleCopy('supremecourt@nic.in')}
                        className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-400" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#993333]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#993333]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">फ़ोन</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "011-23116400",
                        "011-23116401",
                        "011-23116402",
                        "011-23116403"
                      ].map((number) => (
                        <div 
                          key={number}
                          className="flex items-center gap-2 group/item"
                        >
                          <p className="text-gray-600 font-mono">{number}</p>
                          <button 
                            onClick={() => handleCopy(number)}
                            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors opacity-0 group-hover/item:opacity-100"
                          >
                            <Copy className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#993333]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#993333]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">पता</h3>
                    <p className="text-gray-600">
                      रजिस्ट्रार, सुप्रीम कोर्ट औफ इंडिया, तिलक मार्ग, नई दिल्ली-110001
                    </p>
                  </div>
                </div>
              </div>

              {/* Directory Card */}
              <a 
                href="#"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow block group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#993333]/10 flex items-center justify-center flex-shrink-0">
                    <Book className="w-6 h-6 text-[#993333]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-gray-900">टेलीफ़ोन डाइरेक्टरी</h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#993333] transition-colors" />
                    </div>
                    <p className="text-gray-600 mt-2">
                      अधिकारियों की टेलीफोन सूची, शाखाएँ आदि
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
