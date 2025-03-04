'use client'

import { useEffect } from 'react'

interface CalFunction {
  (...args: any[]): void;
  ns: Record<string, any>;
  q: any[];
  loaded: boolean;
}

interface CalApi {
  (...args: any[]): void;
  q: any[];
}

// Add TypeScript interface for the global window object
declare global {
  var Cal: CalFunction;
}

export default function CalendarScript() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Define the Cal function if it doesn't exist
      if (!window.Cal) {
        const calFunction = function(...args: any[]) {
          const cal = window.Cal;
          if (!cal?.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            document.head.appendChild(document.createElement("script")).src = "https://cal.com/embed.js";
            cal.loaded = true;
          }
          if (args[0] === "init") {
            const api: CalApi = function(...apiArgs: any[]) {
              cal?.q.push(apiArgs);
            };
            api.q = [];
            const namespace = args[1];
            typeof namespace === "string"
              ? ((cal.ns[namespace] = api) && cal.q.push(args))
              : cal.q.push(args);
            return;
          }
          cal.q.push(args);
        } as CalFunction;

        calFunction.ns = {};
        calFunction.q = [];
        calFunction.loaded = false;
        
        window.Cal = calFunction;
      }

      // Initialize Cal
      window.Cal("init", { origin: "https://cal.com" });
      
      // Set custom theme
      window.Cal("ui", { styles: { branding: { brandColor: "#2E7D32" } } });
    }
  }, []);

  return null;
} 