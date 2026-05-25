import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function InvestTree() {
  const group = useRef()
  useFrame((state) => {
    if (group.current) group.current.rotation.y = state.clock.elapsedTime * 0.15
  })

  const towers = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => {
      const angle = (i / 8) * Math.PI * 2
      const radius = 2.6 + Math.sin(i) * 0.3
      return {
        position: [Math.cos(angle) * radius, Math.sin(i * 1.3) * 0.8 + 1.2, Math.sin(angle) * radius],
        height: 1.2 + Math.random() * 1.4,
        width: 0.25 + Math.random() * 0.15
      }
    })
  }, [])

  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.28, 2.4, 8]} />
        <meshStandardMaterial color="#13223E" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, -1.2, 0]}>
        <ringGeometry args={[0.4, 1.6, 64]} />
        <meshBasicMaterial color="#C9A961" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      {towers.map((t, i) => (
        <Float key={i} speed={1.2 + i * 0.15} rotationIntensity={0.2} floatIntensity={0.6}>
          <group position={t.position}>
            <mesh castShadow>
              <boxGeometry args={[t.width, t.height, t.width]} />
              <meshStandardMaterial color="#0E1B33" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, t.width / 2 + 0.001]}>
              <planeGeometry args={[t.width * 0.85, t.height * 0.85]} />
              <meshBasicMaterial color="#C9A961" transparent opacity={0.55} />
            </mesh>
            <pointLight position={[0, t.height / 2, 0]} color="#C9A961" intensity={0.6} distance={2} />
          </group>
        </Float>
      ))}
      {towers.map((t, i) => (
        <mesh key={`beam-${i}`} position={[t.position[0] / 2, t.position[1] / 2 + 0.3, t.position[2] / 2]}>
          <cylinderGeometry args={[0.015, 0.015, Math.sqrt(t.position[0] ** 2 + t.position[2] ** 2) * 1.1, 6]} />
          <meshBasicMaterial color="#C9A961" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

function Particles() {
  const points = useRef()
  const count = 200
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 15
      arr[i * 3 + 1] = Math.random() * 8 - 2
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return arr
  }, [])
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02
      const pos = points.current.geometry.attributes.position
      for (let i = 0; i < count; i++) {
        pos.array[i * 3 + 1] += 0.003
        if (pos.array[i * 3 + 1] > 6) pos.array[i * 3 + 1] = -2
      }
      pos.needsUpdate = true
    }
  })
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#C9A961" transparent opacity={0.7} />
    </points>
  )
}

export default function Hero3D() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 2.2, 8]} fov={40} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} color="#C9A961" castShadow />
          <pointLight position={[-5, 3, -5]} intensity={0.5} color="#1E3A8A" />
          <InvestTree />
          <Particles />
          <Environment preset="night" />
          <EffectComposer>
            <Bloom intensity={0.9} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
            <Vignette eskil={false} offset={0.1} darkness={0.85} />
          </EffectComposer>
        </Canvas>
      </div>
      <div className="absolute top-28 left-6 md:left-12 z-10">
        <p className="eyebrow">IT/001 — GURUGRAM · EST 2024</p>
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight">
            Where Skylines<br/>
            <span className="italic gold-gradient">Take Root.</span>
          </h1>
          <p className="mt-8 max-w-xl text-fog text-lg leading-relaxed">
            Gurugram's quiet standard in luxury real estate. Counsel before commission. Negligible brokerage. A relationship that outlasts the transaction.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">Book Consultation →</a>
            <a href="#properties" className="btn-gold !border-fog/30 !text-fog hover:!bg-fog hover:!text-obsidian">Explore Properties</a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 right-6 md:right-12 z-10 text-fog">
        <p className="eyebrow rotate-90 origin-right">SCROLL</p>
      </div>
    </section>
  )
}
