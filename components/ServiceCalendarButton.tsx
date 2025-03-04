'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Script from 'next/script'

interface ServiceCalendarButtonProps {
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
  buttonText?: string
  calLink: string
}

export default function ServiceCalendarButton({ 
  className, 
  variant = 'default',
  buttonText = 'Schedule A Meeting',
  calLink
}: ServiceCalendarButtonProps) {
  
  const handleClick = () => {
    // @ts-ignore - Cal is added by the script
    if (typeof window !== 'undefined' && window.Cal) {
      // @ts-ignore - Cal is added by the script
      window.Cal('ui', { styles: { branding: { brandColor: '#2E7D32' } } });
      // @ts-ignore - Cal is added by the script
      window.Cal('modal', { 
        calLink,
        config: {
          hideEventTypeDetails: false,
          layout: 'month_view',
          styles: {
            branding: {
              brandColor: '#2E7D32',
            },
            enabledDateButton: {
              backgroundColor: '#2E7D32',
            },
            selectedDateButton: {
              backgroundColor: '#1B5E20',
            }
          }
        }
      });
    }
  };

  return (
    <>
      <Script id="cal-script" strategy="lazyOnload">
        {`
          (function (C, A, L) {
            let p = function (a, ar) {
              a.q.push(ar);
            };
            let d = C.document;
            C.Cal =
              C.Cal ||
              function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () {
                    p(api, arguments);
                  };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  typeof namespace === "string"
                    ? (cal.ns[namespace] = api) && p(api, ar)
                    : p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
          })(window, "https://cal.com/embed.js", "init");
          Cal("init", {origin:"https://cal.com"});
        `}
      </Script>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <Button 
          onClick={handleClick}
          className={`flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#2E7D32] ${className}`}
          variant={variant}
        >
          <Calendar className="h-4 w-4" />
          {buttonText}
        </Button>
      </motion.div>
    </>
  )
} 