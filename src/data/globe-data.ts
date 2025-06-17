
export interface GlobePoint {
  lat: number;
  lng: number;
  size: number;
  color: string;
  label?: string;
}

// Sample inner points data - you can replace this with your own data
export const pointsInner: GlobePoint[] = [
  {
    lat: 40.7128,
    lng: -74.0060,
    size: 0.8,
    color: "#3b82f6",
    label: "New York"
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.6,
    color: "#10b981",
    label: "London"
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.7,
    color: "#f59e0b",
    label: "Tokyo"
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.5,
    color: "#ef4444",
    label: "Sydney"
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    size: 0.9,
    color: "#8b5cf6",
    label: "San Francisco"
  }
];

// Sample outer points data - you can replace this with your own data
export const pointsOuter: GlobePoint[] = [
  {
    lat: 48.8566,
    lng: 2.3522,
    size: 0.4,
    color: "#06b6d4",
    label: "Paris"
  },
  {
    lat: 55.7558,
    lng: 37.6176,
    size: 0.5,
    color: "#84cc16",
    label: "Moscow"
  },
  {
    lat: -23.5505,
    lng: -46.6333,
    size: 0.6,
    color: "#f97316",
    label: "São Paulo"
  },
  {
    lat: 28.6139,
    lng: 77.2090,
    size: 0.7,
    color: "#ec4899",
    label: "New Delhi"
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.3,
    color: "#14b8a6",
    label: "Singapore"
  }
];
