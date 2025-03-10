'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

// Add Publications items for sidebar only
const PUBLICATIONS_ITEMS = {
  'chronicle': { label: 'Supreme Court Chronicle', href: '/publications/chronicle' },
  'ambedkar': { label: 'Dr. B.R. Ambedkar', href: '/publications/ambedkar' },
  'courts-india': { label: 'Courts of India', href: '/publications/courts-india' },
  'court-news': { label: 'Court News', href: '/publications/court-news' },
  'annual-reports': { label: 'Annual Reports', href: '/publications/annual-reports' },
  'reports': { label: 'Reports', href: '/publications/reports' },
  'sc-rules': { label: 'Supreme Court Rules', href: '/publications/rules' },
  'practice': { label: 'Practice and Procedure', href: '/publications/practice' },
  'ncms': { label: 'National Court Management Systems', href: '/publications/ncms' }
} as const

const MENU_ITEMS = {
  'Home': { href: '/hi' }, // Updated to include default locale
  'About Us': {
    items: {
      'history': { label: 'History', href: '/hi/about/history' }, // Updated path
      'constitution': { label: 'Constitution', href: '/hi/about/constitution' },
      'jurisdiction': { label: 'Jurisdiction', href: '/hi/about/jurisdiction' },
      'calendar': { label: 'Calendar', href: '/hi/about/calendar' },
      'committees': { label: 'Committees', href: '/hi/about/committees' },
      'organization': { label: 'Organization Chart', href: '/hi/about/organization' },
      'registry': { label: 'Registry Officers', href: '/hi/about/registry' },
      'contact': { label: 'Contact Us', href: '/hi/about/contact' }
    }
  },
  'Judges': {
    items: {
      'current': { label: 'Chief Justice & Judges', href: '/hi/judges/current' },
      'former': { label: 'Former Chief Justices & Judges', href: '/hi/judges/former' },
      'roster': { label: 'Judges Roster', href: '/hi/judges/roster' },
      'library': { label: 'Judges Library', href: '/hi/judges/library' },
      'assets': { label: 'Assets of Judges', href: '/hi/judges/assets' },
    }
  },
  'Collegium Resolutions': { href: '/hi/collegium' },
  'Services': {
    items: {
      'cause-list': { label: 'Cause List', href: '/hi/services/cause-list' },
      'case-status': { label: 'Case Status', href: '/hi/services/case-status' },
      'daily-orders': { label: 'Daily Orders', href: '/hi/services/daily-orders' },
      'judgments': { label: 'Judgments', href: '/hi/services/judgments' },
      'office-reports': { label: 'Office Reports', href: '/hi/services/office-reports' },
      'caveat': { label: 'Caveat', href: '/hi/services/caveat' },
      'display-board': { label: 'Display Board', href: '/hi/services/display-board' },
    }
  },
  'e-Services': {
    items: {
      'e-filing': { label: 'e-Filing', href: '/hi/e-services/e-filing' },
      'virtual-justice-clock': { label: 'Virtual Justice Clock', href: '/hi/e-services/virtual-justice-clock' },
      'grievance-status': { label: 'Grievance Status', href: '/hi/e-services/grievance-status' },
      'e-scr': { label: 'e-SCR', href: '/hi/e-services/e-scr' },
      'digi-scr': { label: 'Digi SCR', href: '/hi/e-services/digi-scr' },
      'appearance-slips': { label: 'Online Appearance Slips', href: '/hi/e-services/appearance-slips' },
      'physical-hearing': { label: 'Physical Hearing (Hybrid Option)', href: '/hi/e-services/physical-hearing' },
      'suswagatam': { label: 'SuSwagatam (e-Pass)', href: '/hi/e-services/suswagatam' },
      'guided-tour': { label: 'Guided Tour', href: '/hi/e-services/guided-tour' },
      'njdg': { label: 'National Judicial Data Grid', href: '/hi/e-services/njdg' },
      'neutral-citation': { label: 'Neutral Citation', href: '/hi/e-services/neutral-citation' },
      'certified-copy': { label: 'Certified Copy', href: '/hi/e-services/certified-copy' },
      'rti-portal': { label: 'Online RTI Portal', href: '/hi/e-services/rti-portal' },
      'proximity-card': { label: 'Proximity Card Registration', href: '/hi/e-services/proximity-card' },
      'ppms': { label: 'Premise Payment Management System (PPMS)', href: '/hi/e-services/ppms' }
    }
  },
  'Advocates': {
    items: {
      'advocates-on-record': { label: 'Advocates-on-Record', href: '/hi/advocates/aor' },
      'aor-examination': { label: 'AOR Examination', href: '/hi/advocates/aor-examination' },
      'guidelines': { label: 'Guidelines & Orders', href: '/hi/advocates/guidelines' },
      'senior-designation': { label: 'Senior Advocates Designation', href: '/hi/advocates/senior-designation' },
      'senior-application': { label: 'Senior Advocate Designation – Application', href: '/hi/advocates/senior-application' },
      'forms': { label: 'Forms', href: '/hi/advocates/forms' },
      'law-officers': { label: 'Law Officers', href: '/hi/advocates/law-officers' },
      'chamber-allotment': { label: 'Lawyers\' Chamber Allotment', href: '/hi/advocates/chamber-allotment' },
      'legal-aid': { label: 'Legal Aid', href: '/hi/advocates/legal-aid' },
      'scaora': { label: 'SCAORA', href: '/hi/advocates/scaora' },
      'scba': { label: 'SCBA', href: '/hi/advocates/scba' }
    }
  },
  'Court Filings': {
    items: {
      'fees-calculator': { label: 'Court Fees Calculator', href: '/hi/filing/fees-calculator' },
      'limitation': { label: 'Limitation Calculator', href: '/hi/filing/limitation' },
      'interlocutory': { label: 'Interlocutory Applications', href: '/hi/filing/interlocutory' },
      'case-category': { label: 'Case Category', href: '/hi/filing/case-category' },
      'default-list': { label: 'Default-List', href: '/hi/filing/default-list' }
    }
  },
  'Notices': {
    items: {
      'notices-circulars': { label: 'Notices and Circulars', href: '/hi/notices/notices-circulars' },
      'fdrs-deposits': { label: 'FDRs & Deposits', href: '/hi/notices/fdrs-deposits' },
      'tenders': { label: 'Tenders', href: '/hi/notices/tenders' },
      'judicial-clerkship': { label: 'Judicial Clerkship', href: '/hi/notices/judicial-clerkship' },
      'recruitments': { label: 'Recruitments', href: '/hi/notices/recruitments' }
    }
  },
  'News & Events': {
    items: {
      'press-release': { label: 'Press Release', href: '/hi/news/press-release' },
      'live-streaming': { label: 'Live Streaming', href: '/hi/news/live-streaming' },
      'basic-structure': { label: 'Basic Structure Judgment', href: '/hi/news/basic-structure' },
      'webcast': { label: 'Webcast', href: '/hi/news/webcast' },
      'multimedia': { label: 'Multimedia', href: '/hi/news/multimedia' },
      'photo-gallery': { label: 'Photo Gallery', href: '/hi/news/gallery' },
      'full-court': { label: 'Full Court Reference', href: '/hi/news/full-court' },
      'ceremonial': { label: 'Ceremonial Bench', href: '/hi/news/ceremonial' }
    }
  }
} as const

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`${
          isScrolled ? 'fixed top-0 left-0 right-0 bg-[#f8f9fa] border-b' : 'relative'
        } z-[9999]`}
      >
        <div className="container mx-auto">
          <ul className="flex items-center gap-6 px-4 py-3 text-sm">
            {Object.entries(MENU_ITEMS).map(([label, { href, items }]) => (
              <li 
                key={label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={href || '#'} className="hover:text-[#9b8154] transition-colors">
                  {label} {items && <span className="text-xs">▾</span>}
                </Link>
                
                {items && activeDropdown === label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="relative">
                      <div 
                        className="absolute -top-2 left-4 w-4 h-4 bg-[#9b8154] transform rotate-45"
                        style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 0)' }}
                      />
                      <div className="relative w-64 bg-[#9b8154] shadow-lg rounded-lg overflow-hidden py-2">
                        {Object.entries(items).map(([key, item]) => (
                          <Link
                            key={key}
                            href={item.href}
                            className="block px-4 py-2 text-white hover:bg-[#fcfaf6] hover:text-gray-900 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* Hamburger Menu */}
            <li className="ml-auto">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black z-[9999]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-80 bg-[#9b8154] z-[10000] overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/20">
                <h2 className="text-white font-medium">Menu</h2>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Publications Dropdown */}
              <div 
                className="py-4"
                onMouseEnter={() => setActiveDropdown('publications')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="w-full px-6 py-3 text-white flex items-center justify-between hover:bg-white/10">
                  <span>Publications</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'publications' ? 'rotate-180' : ''
                  }`} />
                </div>

                <AnimatePresence>
                  {activeDropdown === 'publications' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-white/5"
                    >
                      {Object.entries(PUBLICATIONS_ITEMS).map(([key, item]) => (
                        <Link
                          key={key}
                          href={item.href}
                          className="block px-8 py-3 text-white/90 hover:bg-white/10 transition-colors text-sm"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="nav-spacer"
            initial={{ height: 0 }}
            animate={{ height: '48px' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
