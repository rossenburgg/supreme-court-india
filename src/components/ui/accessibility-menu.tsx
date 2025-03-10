'use client'

import { useEffect, useState } from 'react'
import { Check, TextSelection, ChevronRight, Eye, Contrast, Link, MousePointer, ImageOff } from 'lucide-react'

const CATEGORIES = {
  contrast: [
    { 
      id: 'high-contrast',
      label: 'High Contrast',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="M480-288.46 531.54-340H620v-88.46L671.54-480 620-531.54V-620h-88.46L480-671.54 428.46-620H340v88.46L288.46-480 340-428.46V-340h88.46L480-288.46Zm0-81.54v-220q45.77 0 77.88 32.12Q590-525.77 590-480q0 45.77-32.12 77.88Q525.77-370 480-370Z" />
        </svg>
      )
    },
    { 
      id: 'normal-contrast',
      label: 'Normal Contrast',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 16.7885L13.2885 15.5H15.5V13.2885L16.7885 12L15.5 10.7115V8.5H13.2885L12 7.2115L10.7115 8.5H8.5V10.7115L7.2115 12L8.5 13.2885V15.5H10.7115L12 16.7885ZM4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80258 21.5 6.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775Z" />
          <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="currentColor" />
        </svg>
      ),
      selected: true
    },
    { 
      id: 'highlight-links',
      label: 'Highlight Links',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="M432.31-298.46H281.54q-75.34 0-128.44-53.1Q100-404.65 100-479.98q0-75.33 53.1-128.44 53.1-53.12 128.44-53.12h150.77v60H281.54q-50.39 0-85.96 35.58Q160-530.38 160-480q0 50.38 35.58 85.96 35.57 35.58 85.96 35.58h150.77v60ZM330-450v-60h300v60H330Zm197.69 151.54v-60h150.77q50.39 0 85.96-35.58Q800-429.62 800-480q0-50.38-35.58-85.96-35.57-35.58-85.96-35.58H527.69v-60h150.77q75.34 0 128.44 53.1Q860-555.35 860-480.02q0 75.33-53.1 128.44-53.1 53.12-128.44 53.12H527.69Z" />
        </svg>
      )
    },
    { 
      id: 'invert',
      label: 'Invert',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="M480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM510-161.85q121.31-11.53 205.65-101.42Q800-353.15 800-480t-83.96-216.35q-83.96-89.5-206.04-101.8v636.3Z" />
        </svg>
      )
    },
    { 
      id: 'saturation',
      label: 'Saturation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="M480-140q-124.92 0-212.46-86.35Q180-312.69 180-435.62q0-62.53 23.66-114.69 23.65-52.15 64.19-93.84L480-852.31l212.15 208.16q40.54 41.69 64.19 94.42Q780-497 780-435.62q0 122.93-87.54 209.27Q604.92-140 480-140Zm0-60v-568L310-600q-35 33-52.5 74.69T240-435.62q0 97 70 166.31T480-200Z" />
        </svg>
      )
    }
  ],
  textSize: [
    { 
      id: 'increase-font',
      label: 'Font Size Increase',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="m52.31-210 210.77-540h69.23l210.77 540h-72.16l-54.46-144.15H177.38L122.92-210H52.31Zm146.77-204h195.69l-95.2-252h-4.65l-95.84 252Zm528.61 84v-120h-120v-60h120v-120h60v120h120v60h-120v120h-60Z" />
        </svg>
      )
    },
    { 
      id: 'decrease-font',
      label: 'Font Size Decrease',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="m52.31-210 210.77-540h69.23l210.77 540h-72.16l-54.46-144.15H177.38L122.92-210H52.31Zm146.77-204h195.69l-95.08-252h-4.77l-95.84 252Zm408.61-36v-60h300v60h-300Z" />
        </svg>
      )
    },
    { 
      id: 'normal-font',
      label: 'Normal Font',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 18.75L11.2692 5.25H13L18.2693 18.75H16.4653L15.1038 15.1463H9.12675L7.76525 18.75H6ZM9.66925 13.65H14.5615L12.1845 7.35H12.0653L9.66925 13.65Z" fill="currentColor" />
        </svg>
      )
    }
  ],
  others: [
    { 
      id: 'hide-images',
      label: 'Hide Images',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="m820-254-60-60v-433.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H314l-60-60h493.69Q778-820 799-799q21 21 21 51.31V-254ZM805.85-69.85 735.69-140H212.31Q182-140 161-161q-21-21-21-51.31v-523.38l-70.15-70.16L112-848l736 736-42.15 42.15ZM270-290l99.23-131.54 80 102.31L496.08-379 200-675.08v462.77q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h462.77l-90-90H270Z" />
        </svg>
      )
    },
    { 
      id: 'big-cursor',
      label: 'Big Cursor',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="M80-490v-60h120v60H80Zm129.08 224.31-42.16-43.39 84-84 43.39 42.16-85.23 85.23Zm41.84-381.23-84-84 42.16-43.39 85.23 85.23-43.39 42.16ZM699.23-190 515.38-373.85l-43.84 133.08-103.85-344.61 346.15 103.84L582-434.92l181.07 181.07L699.23-190Z" />
        </svg>
      )
    }
  ]
}

export function AccessibilityMenu() {
  return (
    <div className="w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-[110]">
      {/* Color Contrast */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-900">Color Contrast</h3>
        <div className="grid grid-cols-3 gap-3">
          {CATEGORIES.contrast.map((item) => (
            <button
              key={item.id}
              className="relative flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-[#993333] transition-colors"
            >
              {item.selected && (
                <Check className="absolute top-2 right-2 w-4 h-4 text-green-500" />
              )}
              {item.icon}
              <span className="mt-2 text-xs text-gray-600">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Text Size */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-900">Text Size</h3>
        <div className="grid grid-cols-3 gap-3">
          {CATEGORIES.textSize.map((item) => (
            <button
              key={item.id}
              className="flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-[#993333] transition-colors"
            >
              {item.icon}
              <span className="mt-2 text-xs text-gray-600">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Others */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Others</h3>
        <div className="grid grid-cols-3 gap-3">
          {CATEGORIES.others.map((item) => (
            <button
              key={item.id}
              className="flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-[#993333] transition-colors"
            >
              {item.icon}
              <span className="mt-2 text-xs text-gray-600">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
