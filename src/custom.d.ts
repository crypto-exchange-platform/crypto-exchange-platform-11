

declare module 'lodash/throttle';
declare module 'particles.js';
declare module 'react-sparklines' {
  import * as React from 'react';
  export interface SparklinesProps {
    data: number[];
    svgWidth?: number | string;
    svgHeight?: number | string;
    children?: React.ReactNode;
  }
  export const Sparklines: React.FC<SparklinesProps>;

  export interface SparklinesLineProps {
    style?: React.CSSProperties;
  }
  export const SparklinesLine: React.FC<SparklinesLineProps>;
}
