
"use client";

import { useCallback, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@/data/globe-data";
import * as THREE from "three";

const RING_PROPAGATION_SPEED = 0.03;
const GLOBE_RADIUS = 1;

interface Point {
  lat: number;
  lng: number;
  size: number;
  color: string;
  label?: string;
}

interface Ring {
  position: [number, number, number];
  maxRadius: number;
  propagationSpeed: number;
  repeats: number;
  color: string;
}

function convertFlatCoordsToSphereCoords(flatCoords: Point[]): Point[] {
  return flatCoords.map(({ lat, lng, ...rest }) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return {
      lat: phi,
      lng: theta,
      ...rest,
    };
  });
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : null;
}

function GlobePoints({ points }: { points: Point[] }) {
  const ref = useRef<THREE.Group>(null);

  const sphereCoords = convertFlatCoordsToSphereCoords(points);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={ref}>
      {sphereCoords.map((point, i) => {
        const { lat, lng, size, color } = point;
        const x = GLOBE_RADIUS * Math.sin(lat) * Math.cos(lng);
        const y = GLOBE_RADIUS * Math.cos(lat);
        const z = GLOBE_RADIUS * Math.sin(lat) * Math.sin(lng);

        const rgb = hexToRgb(color);

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[size * 0.01, 10, 10]} />
            <meshBasicMaterial
              color={
                rgb ? new THREE.Color(rgb.r, rgb.g, rgb.b) : new THREE.Color(color)
              }
            />
          </mesh>
        );
      })}
    </group>
  );
}

function GlobeRings({ rings }: { rings: Ring[] }) {
  return (
    <>
      {rings.map((ring, i) => (
        <RingMesh key={i} {...ring} />
      ))}
    </>
  );
}

function RingMesh({
  position,
  maxRadius,
  propagationSpeed,
  repeats,
  color,
}: Ring) {
  const meshRef = useRef<THREE.Mesh>(null);
  const startTimeRef = useRef(Date.now());

  useFrame(() => {
    if (meshRef.current) {
      const elapsed = Date.now() - startTimeRef.current;
      const t = (elapsed * propagationSpeed) % (maxRadius * repeats);
      const currentRadius = (t / repeats) % maxRadius;

      meshRef.current.scale.set(currentRadius, currentRadius, 1);
      meshRef.current.material.opacity = 1 - currentRadius / maxRadius;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0, 1, 32]} />
      <meshBasicMaterial color={color} transparent opacity={1} side={THREE.DoubleSide} />
    </mesh>
  );
}

interface GlobeProps {
  className?: string;
  config?: {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    globeImageUrl?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: { lat: number; lng: number };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
  };
}

export function Globe({ className, config = {} }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const defaultConfig = {
    pointSize: 1,
    globeColor: "#1d072e",
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.1,
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    globeImageUrl: "",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 1,
    ...config,
  };

  const sampleRings: Ring[] = [
    {
      position: [0, 0, 0],
      maxRadius: 0.3,
      propagationSpeed: RING_PROPAGATION_SPEED,
      repeats: 3,
      color: "#ffffff",
    },
  ];

  return (
    <div className={className}>
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} color={defaultConfig.ambientLight} />
        <directionalLight
          position={[-10, 10, 5]}
          intensity={1}
          color={defaultConfig.directionalLeftLight}
        />
        <directionalLight
          position={[10, -10, -5]}
          intensity={0.5}
          color={defaultConfig.directionalTopLight}
        />
        <pointLight
          position={[10, 10, 10]}
          intensity={0.5}
          color={defaultConfig.pointLight}
        />

        <Sphere args={[GLOBE_RADIUS, 50, 50]}>
          <meshPhongMaterial
            color={defaultConfig.globeColor}
            emissive={defaultConfig.emissive}
            emissiveIntensity={defaultConfig.emissiveIntensity}
            shininess={defaultConfig.shininess}
          />
        </Sphere>

        <GlobePoints points={pointsInner} />
        <GlobePoints points={pointsOuter} />
        <GlobeRings rings={sampleRings} />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={defaultConfig.autoRotate}
          autoRotateSpeed={defaultConfig.autoRotateSpeed}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}
