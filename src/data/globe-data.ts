
// This file contains the data for the globe visualization
// You can add your own data here following the same structure

export interface GlobePoint {
  lat: number;
  lng: number;
  size: number;
  color: string;
  label?: string;
}

// Inner points (smaller, closer to globe surface)
export const pointsInner: GlobePoint[] = [
  // Add your inner points data here
  // Example format:
  // { lat: 40.7128, lng: -74.0060, size: 0.5, color: "#3b82f6", label: "New York" },
  // { lat: 51.5074, lng: -0.1278, size: 0.7, color: "#ef4444", label: "London" },
  // { lat: 35.6762, lng: 139.6503, size: 0.6, color: "#10b981", label: "Tokyo" },
];

// Outer points (larger, more prominent)
export const pointsOuter: GlobePoint[] = [
  // Add your outer points data here
  // Example format:
  // { lat: 37.7749, lng: -122.4194, size: 1.2, color: "#8b5cf6", label: "San Francisco" },
  // { lat: 48.8566, lng: 2.3522, size: 1.0, color: "#f59e0b", label: "Paris" },
  // { lat: -33.8688, lng: 151.2093, size: 0.8, color: "#06b6d4", label: "Sydney" },
];

// You can also add arcs/connections between points if needed
export interface GlobeArc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  animationSpeed?: number;
}

export const arcs: GlobeArc[] = [
  // Add your arc connections here
  // Example format:
  // { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: "#3b82f6" },
];
