'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  // Constants for timing control
  const MIN_DISPLAY_TIME = 3000; // Minimum time to show preloader (3 seconds)
  const PROGRESS_SPEED = 5; // Slower progress increment (was 10)
  const FADE_DELAY = 500; // Delay before starting fade-out

  useEffect(() => {
    const startTime = Date.now();
    
    // Slower progress simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        // Slower increment
        const increment = Math.random() * PROGRESS_SPEED;
        const newProgress = prev + increment;
        
        // Cap at 95% until page is actually loaded
        if (!pageLoaded && newProgress >= 95) {
          return 95;
        }
        
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);
    
    // Detect when page is actually loaded
    const handleLoad = () => {
      setPageLoaded(true);
      
      // Jump to 100% when page is loaded
      setProgress(100);
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);
      
      // Wait for minimum display time before fading out
      setTimeout(() => {
        setFading(true);
        
        // Then after animation completes, remove from DOM
        const timer = setTimeout(() => {
          setLoading(false);
        }, 800);
        
        return () => clearTimeout(timer);
      }, remainingTime + FADE_DELAY);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        clearInterval(interval);
        window.removeEventListener('load', handleLoad);
      };
    }
    
    return () => clearInterval(interval);
  }, [pageLoaded]);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-[100] ${fading ? 'fade-out' : ''}`}>
      <div className="flex flex-col items-center max-w-sm">
        {/* Logo container with subtle shadow */}
        <div className="mb-10 relative">
          <div className="absolute -inset-0.5 bg-green-100 dark:bg-green-900/20 rounded-full blur-md opacity-30 animate-pulse-slow"></div>
          <div className="relative">
            <Image 
              src="/main-logo.png" 
              alt="Oikos Consultants" 
              width={170} 
              height={170} 
              priority
              className="animate-float"
            />
          </div>
        </div>
        
        {/* Progress indicator with percentage */}
        <div className="w-72 flex flex-col items-center mb-6">
          <div className="flex justify-between w-full mb-1.5">
            <span className="text-xs text-green-800 dark:text-green-200 font-medium opacity-70">Loading resources</span>
            <span className="text-xs text-green-800 dark:text-green-200 font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-700 to-green-500 rounded-full transition-all duration-300 ease-out shine-effect"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Status message with animation */}
        <div className="h-6 mb-1 flex items-center justify-center"> {/* Fixed height container to prevent layout shift */}
          <p className={`text-green-700 dark:text-green-500 font-medium text-center transition-opacity duration-500 flex items-center ${progress === 100 ? 'opacity-100' : 'opacity-80'}`}>
            {progress < 25 ? 'Initializing' : 
             progress < 50 ? 'Loading assets' : 
             progress < 75 ? 'Preparing content' :
             progress < 100 ? 'Finalizing' : 
             'Ready!'}
             
            {/* Loading dots animation (only show when not ready) */}
            {progress < 100 && (
              <span className="inline-flex ml-0.5">
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
              </span>
            )}
          </p>
        </div>
        
        {/* Tagline with subtle reveal animation */}
        <p className="mt-1 text-gray-600 dark:text-gray-400 text-xs text-center max-w-[250px] transition-all duration-1000 ease-in-out"
           style={{ 
             opacity: Math.min(1, progress / 70),
             transform: `translateY(${Math.max(0, (70 - progress) / 4)}px)`
           }}>
          Sustainable Solutions for a Better Tomorrow
        </p>
      </div>
    </div>
  );
} 