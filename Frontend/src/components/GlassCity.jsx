import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Building({ position, height, width }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.02
    }
  })
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[width, height, width]} />
      <MeshTransmissionMaterial
        backside
        thickness={0.5}
        roughness={0.1}
        transmission={0.95}
        ior={1.5}
        chromaticAberration={0.06}
        color="#0A0F1C"
        attenuationColor="#C9A961"
        attenuationDistance={2}
      />
    </mesh>
  )
}

function City() {
  const buildings = useMemo(() => {
    const arr = []
    for (let i = 0; i < 25; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() * 4) - 2,
          (Math.random() - 0.5) * 30
        ],
        height: 3 + Math.random() * 8,
        width: 0.8 + Math.random() * 1.2
      })
    }
    return arr
  }, [])

  return (
    <group>
      {buildings.map((b, i) => (
        <Building key={i} {...b} />
      ))}
    </group>
  )
}

export default function GlassCity() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 5, 18], fov: 50 }} dpr={[1, 2]}>
        <color attach="background" args={['#08090C']} />
        <fog attach="fog" args={['#08090C', 15, 40]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#C9A961" />
        <directionalLight position={[-10, 5, -5]} intensity={0.3} color="#ffffff" />
        <City />
        <Environment preset="night" />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian pointer-events-none" />
    </div>
  )
}
