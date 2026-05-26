import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 2500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#22d3ee" size={0.025} sizeAttenuation depthWrite={false} opacity={0.85} />
    </Points>
  );
}

function NeuralOrb({ position, color, speed = 1, distort = 0.4 }: { position: [number, number, number]; color: string; speed?: number; distort?: number }) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[1.2, 6]} />
        <MeshDistortMaterial color={color} distort={distort} speed={2} roughness={0.15} metalness={0.85} emissive={color} emissiveIntensity={0.35} />
      </mesh>
    </Float>
  );
}

function WireframeTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * 0.2;
    ref.current.rotation.y = s.clock.elapsedTime * 0.15;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <torusKnotGeometry args={[2.8, 0.35, 200, 24]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

export function AIBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
          <pointLight position={[-10, -8, -5]} intensity={1} color="#a78bfa" />
          <pointLight position={[0, 8, -10]} intensity={0.8} color="#f59e0b" />
          <ParticleField />
          <WireframeTorus />
          <NeuralOrb position={[-4.5, 1.8, -1]} color="#22d3ee" speed={1.2} distort={0.5} />
          <NeuralOrb position={[5, -1.5, -2]} color="#8b5cf6" speed={0.8} distort={0.45} />
          <NeuralOrb position={[3, 3, -4]} color="#f59e0b" speed={1.4} distort={0.35} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, transparent 0%, oklch(0.13 0.02 260 / 0.6) 50%, oklch(0.13 0.02 260) 100%)" }} />
    </div>
  );
}
