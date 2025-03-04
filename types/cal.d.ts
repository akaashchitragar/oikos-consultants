interface Window {
  Cal?: any;
}

declare module '@calcom/embed-react' {
  export interface CalProps {
    calLink: string;
    style?: React.CSSProperties;
    config?: {
      name?: string;
      theme?: 'light' | 'dark';
      hideEventTypeDetails?: boolean;
      layout?: 'month_view' | 'week_view' | 'day_view';
      styles?: {
        branding?: {
          brandColor?: string;
        };
        enabledDateButton?: {
          backgroundColor?: string;
        };
        selectedDateButton?: {
          backgroundColor?: string;
        };
      };
    };
  }

  export interface CalApiReturn {
    on?: (event: string, callback: () => void) => void;
    off?: (event: string, callback: () => void) => void;
    preload?: (options: any) => void;
    ui?: (options: any) => void;
    modal?: (options: any) => void;
  }

  export function getCalApi(): Promise<CalApiReturn>;
  const Cal: React.FC<CalProps>;
  export default Cal;
} 