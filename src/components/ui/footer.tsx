import { Store, Smartphone } from 'lucide-react'  // Changed from PlayStore, AppStore

const FOOTER_LINKS = [
  {
    title: "विशेष लिंक",
    links: [
      { label: "अभिगम्यता", href: "#" },
      { label: "सुविधाएं", href: "#" },
      { label: "संग्रहालय", href: "#" },
      { label: "निर्देशित दौरा", href: "#" },
      { label: "अक्सर पूछे जाने वाले प्रश्न", href: "#" }
    ]
  },
  {
    title: "सेवाएं",
    links: [
      { label: "वेबकास्ट", href: "#" },
      { label: "भारत कोड", href: "#" },
      { label: "वेतनमान", href: "#" },
      { label: "टेलीफ़ोन डाइरेक्टरी", href: "#" },
      { label: "तर्क अनुलिपि", href: "#" }
    ]
  },
  {
    title: "कर्मचारी कॉर्नर",
    links: [
      { label: "लेखा", href: "#" },
      { label: "कोरोना महामारी में उठाये गए कदम", href: "#" },
      { label: "अधिकारी सेवक नियम", href: "#" },
      { label: "अधिकारी/कर्मचारी", href: "#" },
      { label: "महत्वपूर्ण लिंक", href: "#" }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and App Downloads */}
          <div className="col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/supreme-court-logo.svg" 
                alt="Supreme Court Logo" 
                className="w-16 h-16 invert opacity-80"
              />
              <div>
                <h3 className="text-sm font-medium">भारत का सर्वोच्च न्यायालय</h3>
                <p className="text-xs text-white/60">Supreme Court of India</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm">यहां से एैप डाउनलोड करें</p>
              <div className="flex gap-3">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.nic.sciapp&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  <span className="text-sm">Google Play</span>
                </a>
                <a 
                  href="https://apps.apple.com/in/app/supreme-court-of-india/id1523266644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
                >
                  <Store className="w-5 h-5" />
                  <span className="text-sm">App Store</span>
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="col-span-3">
              <h3 className="text-sm font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex justify-between items-center text-sm text-white/60">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">वेबसाइट नीतियां</a>
              <a href="#" className="hover:text-white transition-colors">संपर्क करें</a>
              <a href="#" className="hover:text-white transition-colors">सहायता</a>
              <a href="#" className="hover:text-white transition-colors">अस्वीकरण</a>
            </div>
            <p>© {new Date().getFullYear()} भारत का सर्वोच्च न्यायालय। सर्वाधिकार सुरक्षित।</p>
          </div>
        </div>

        {/* Additional Footer Information */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p className="mb-6">
            इस वेबसाइट में प्रकाशित जानकारी सर्वोच्च न्यायालय द्वारा विनियमित हैI ।
          </p>
          
          <div className="text-xs space-y-2 mb-6">
            <p>
              Developed and hosted by National Informatics Centre,
            </p>
            <p>
              Ministry of Electronics & Information Technology, Government of India
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs mb-6">
            <span>पिछला अद्यतन:</span>
            <span className="text-white">Feb 18, 2025</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs">
            <span>एक सेवा के रूप में सुरक्षित, मापनीय और सुगम वेबसाइट</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">राष्ट्रीय कानूनी सेवा प्राधिकरण</a>
              <a href="#" className="hover:text-white transition-colors">सुप्रीम कोर्ट कानूनी सेवा समिति</a>
              <a href="#" className="hover:text-white transition-colors">भारत कोड</a>
            </div>
          </div>

          {/* Partner Logos Section */}
          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="grid grid-cols-4 gap-8 items-center justify-items-center">
              <a 
                href="https://s3waas.gov.in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src="/logos/s3waas-logo.png" 
                  alt="Secure, Scalable and Sugamya Website as a Service"
                  className="h-12 w-auto object-contain"
                />
              </a>
              <a 
                href="https://nalsa.gov.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src="/logos/nalsa-logo.png" 
                  alt="National Legal Services Authority"
                  className="h-12 w-auto object-contain"
                />
              </a>
              <a 
                href="https://sclsc.gov.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src="/logos/sclsc-logo.jpg" 
                  alt="Supreme Court Legal Services Committee"
                  className="h-12 w-auto object-contain"
                />
              </a>
              <a 
                href="https://indiacode.nic.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src="/logos/india-code.png" 
                  alt="India Code Portal"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
