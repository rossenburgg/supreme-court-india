'use client'
import { ChevronRight, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Navigation Area */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center justify-between">
            <nav className="flex items-center gap-2 text-[13px] text-gray-500">
              <Link href="/" className="hover:text-[#9b8154] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="#" className="hover:text-[#9b8154] transition-colors">
                About Us
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#9b8154]">History</span>
            </nav>
            
            <button 
              className="p-2 text-gray-500 hover:text-[#9b8154] transition-colors"
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[28px] font-bold text-[#9b8154] mb-12">
            History
          </h1>

          <div className="space-y-[12px] text-[17px] leading-[27px] text-gray-800">
            <p>
              The Supreme Court of India is the apex judicial body under the Constitution of India. 
              Article 124 of the Constitution states that "There shall be a Supreme Court of India." 
              The Supreme Court came into existence on 26 January 1950 with the coming into force of the Constitution.
            </p>

            <p>
              The inaugural proceedings began at 9:45 am on 28 January 1950. It was attended by the first Chief Justice 
              of India, Harilal J. Kania and Judges of the Federal Court – Justices Saiyid Fazl Ali, M. Patanjali Sastri, 
              Mehr Chand Mahajan, Bijan Kumar Mukherjea and S.R. Das, along with the Chief Justices of various High Courts.
            </p>

            <p>
              After its inauguration on 28 January 1950, the Supreme Court commenced its sittings in a part of the old 
              Parliament House. The Court moved into a new building in 1958. The first President of India Dr. Rajendra Prasad 
              inaugurated the present building of the Supreme Court of India on 4 August 1958.
            </p>

            <p>
              The building is shaped to project the image of scales of justice. It has a 27.6 metre high dome and a spacious 
              colonnaded verandah. The Central Wing of the building is the centre beam of the scales. The Chief Justice's Court 
              is the largest of the courts located in the centre of the Central Wing.
            </p>

            <p>
              There is a life size figure of Mahatma Gandhi, the apostle of truth and non-violence in the courtyard 
              opposite the Chief Justice's Court. The statue was unveiled by the 26th Chief Justice of India, 
              Justice A.M. Ahmadi on 1 August 1996.
            </p>

            <p>
              There is also a 7-foot tall statue of Dr. B.R. Ambedkar which was unveiled by Hon'ble President of India, 
              Smt. Droupadi Murmu in the presence of the 50th Chief Justice of India, Dr. Justice D.Y. Chandrachud on 
              26 November 2023. The statue honours the architect of the Constitution and captures him in a lawyer's gown, 
              holding a copy of the Constitution in his hand.
            </p>

            <p>
              Three extensions were made to the original building- for the first time in 1979, then in 1994, and again in 2015.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-medium">1979:</span> Two New Wings – the East Wing and the West Wing were added to the complex.
              </li>
              <li>
                <span className="font-medium">1994:</span> The second extension connected the East and West Wings.
              </li>
              <li>
                <span className="font-medium">2015:</span> The New Extension Block near the Supreme Court Museum was inaugurated.
              </li>
              <li>
                <span className="font-medium">2019:</span> The Additional Building Complex was inaugurated, adding 1,80,700 sq. mts. 
                of space with five functional blocks and one service block.
              </li>
            </ul>

            <p>
              The original Constitution of 1950 envisaged a Supreme Court with a Chief Justice and 7 puisne Judges. 
              Parliament increased the number of Judges from 8 in 1950 to 34 in 2019 (current strength).
            </p>

            <p>
              Today, the Judges sit in Benches of two and three and come together in larger Benches of 5 and more 
              (Constitution Bench) to decide any conflicting decisions between benches of the Supreme Court or any 
              substantial questions concerning the interpretation of the Constitution.
            </p>

            <p className="text-base text-gray-600 border-t border-gray-100 pt-8">
              The proceedings of the Supreme Court are conducted in English. The practice and procedure of working 
              of the Registry on the judicial side is regulated by the Supreme Court Rules, 2013 and Handbook on 
              Practice and Procedure and Office Procedure.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Images Section */}
      <section className="container mx-auto px-4 py-16 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/history/old-parliament.jpg",
                alt: "Old Parliament Building",
                caption: "The Chamber of Princes in the old Parliament building where the Federal Court of India sat from 1937 to 1950, and where the Supreme Court was inaugurated on 28 January 1950."
              },
              {
                src: "/history/first-sitting.jpg",
                alt: "First Sitting of the Supreme Court",
                caption: "The inaugural session of the Supreme Court of India, with Chief Justice Harilal J. Kania presiding, alongside other distinguished judges of the Federal Court on January 28, 1950."
              },
              {
                src: "/history/new-building.jpg",
                alt: "New Supreme Court Building",
                caption: "The present building of the Supreme Court of India on Tilak Marg, inaugurated by Dr. Rajendra Prasad on August 4, 1958, featuring its distinctive 27.6 metre high dome and colonnaded verandah."
              }
            ].map((image, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
