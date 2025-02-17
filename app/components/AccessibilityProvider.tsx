'use client'

import { useEffect } from 'react'

export default function AccessibilityProvider({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-green-700 focus:shadow-lg focus:rounded-lg'
    skipLink.textContent = 'Skip to main content'
    document.body.insertBefore(skipLink, document.body.firstChild)

    // Handle keyboard navigation
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')
        window.removeEventListener('keydown', handleFirstTab)
      }
    }
    window.addEventListener('keydown', handleFirstTab)

    // Add ARIA landmarks
    const main = document.querySelector('main')
    if (main) {
      main.setAttribute('id', 'main-content')
      main.setAttribute('role', 'main')
      main.setAttribute('tabindex', '-1')
    }

    // Add focus outline styles
    const style = document.createElement('style')
    style.textContent = `
      .user-is-tabbing *:focus {
        outline: 2px solid #2E7D32 !important;
        outline-offset: 2px !important;
      }
      
      .user-is-tabbing .focus-visible {
        outline: 2px solid #2E7D32 !important;
        outline-offset: 2px !important;
      }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.removeChild(skipLink)
      document.head.removeChild(style)
      window.removeEventListener('keydown', handleFirstTab)
    }
  }, [])

  return children
} 