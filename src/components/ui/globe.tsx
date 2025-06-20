
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GlobeGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1000; i++) {
      const phi = Math.acos(-1 + (2 * i) / 1000);
      const theta = Math.sqrt(1000 * Math.PI) * phi;
      
      temp.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {points.map((point, i) => (
        <mesh key={i} position={[point.x * 2, point.y * 2, point.z * 2]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#30C9CB" />
        </mesh>
      ))}
    </group>
  );
}

export function Globe() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <GlobeGeometry />
      </Canvas>
    </div>
  );
}
