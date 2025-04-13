import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ContactComputer } from "./ContactComputer";

const Computer = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* Ambient & Directional Lights */}
      <ambientLight intensity={0.5} color="#fff4e6" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground Plane */}
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      {/* Computer Model */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
  <ContactComputer />
</group>

    </Canvas>
  );
};

export default Computer;
