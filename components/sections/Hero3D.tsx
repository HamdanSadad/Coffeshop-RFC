"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function CoffeeBean() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        {/* Placeholder for a Coffee Bean / Cup */}
        <capsuleGeometry args={[1, 1.5, 4, 16]} />
        <meshStandardMaterial 
          color="#8C5C3A" 
          roughness={0.4} 
          metalness={0.1} 
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full absolute inset-0 md:relative md:w-1/2 pointer-events-none md:pointer-events-auto opacity-30 md:opacity-100 mix-blend-screen md:mix-blend-normal">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#F4F0EA" />
        <spotLight position={[-10, -10, -5]} intensity={0.5} color="#D4AF37" />
        
        <CoffeeBean />
        
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4} 
        />
      </Canvas>
    </div>
  );
}
