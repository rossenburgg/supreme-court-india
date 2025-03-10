'use client'
import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

export function AnimatedSection() {
  const [LottieComponent, setLottieComponent] = useState<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    // Load both Lottie and animation data on client side
    Promise.all([
      import('lottie-react'),
      import('@/animations/judgement.json')
    ]).then(([lottieModule, animationModule]) => {
      setLottieComponent(() => lottieModule.default)
      setAnimationData(animationModule.default)
    })
  }, [])

  if (!LottieComponent || !animationData) {
    return (
      <section className="bg-[#993333]/5 py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#993333]" />
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#993333]/5 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold text-[#993333] mb-4">
              न्यायपालिका का डिजिटल परिवर्तन
            </h2>
            <p className="text-gray-600 leading-relaxed">
              भारत का सर्वोच्च न्यायालय डिजिटल न्यायपालिका की ओर अग्रसर है। हमारी डिजिटल पहल से न्याय वितरण प्रणाली को और अधिक कुशल, पारदर्शी और सुलभ बनाया जा रहा है।
            </p>
          </div>
          <div className="w-[400px] aspect-square flex items-center justify-center">
            <LottieComponent 
              animationData={animationData} 
              loop 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
