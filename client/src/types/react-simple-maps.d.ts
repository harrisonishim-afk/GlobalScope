declare module 'react-simple-maps' {
  import React from 'react';
  
  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number;
      rotation?: [number, number, number];
      parallels?: [number, number];
      center?: [number, number];
    };
    projection?: string;
    width?: number;
    height?: number;
    className?: string;
    [key: string]: any;
  }
  
  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: any[] }) => React.ReactNode;
    [key: string]: any;
  }
  
  export interface GeographyProps {
    geography: any;
    [key: string]: any;
  }
  
  export interface MarkerProps {
    coordinates: [number, number];
    [key: string]: any;
  }
  
  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    [key: string]: any;
  }
  
  export const ComposableMap: React.FunctionComponent<ComposableMapProps>;
  export const Geographies: React.FunctionComponent<GeographiesProps>;
  export const Geography: React.FunctionComponent<GeographyProps>;
  export const Marker: React.FunctionComponent<MarkerProps>;
  export const ZoomableGroup: React.FunctionComponent<ZoomableGroupProps>;
}