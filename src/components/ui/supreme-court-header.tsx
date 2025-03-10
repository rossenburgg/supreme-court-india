import Image from 'next/image'

export function SupremeCourtHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 py-6">
          <Image 
            src="/supreme-court-logo.svg" 
            alt="Supreme Court Logo" 
            width={100} 
            height={100}
            className="p-2"
          />
          <div>
            <h2 className="text-hindi text-xl font-medium tracking-wide mb-1">
              भारत का सर्वोच्च न्यायालय
            </h2>
            <h2 className="text-english-serif text-3xl font-bold mb-1 tracking-wider">
              Supreme Court of India
            </h2>
            <p className="text-hindi text-lg font-medium tracking-widest">
              ॥ यतो धर्मस्ततो जय: ॥
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
