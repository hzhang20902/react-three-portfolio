import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SwagModel from "./components/SwagJobAnim";
import styled from "styled-components";
import { Earth } from "./components/earth";
import { TopSection } from "./components/header";
import ModelCap from "./components/CapoeiraAnim";
import ModelG from "./components/LaughGinger";

const CanvasContainer = styled.div`
width: 100%;
height: 100%;
background-color: black;
`;


export default function App() {
  return (
  <CanvasContainer>
    <TopSection />
    <Canvas   
    // camera={{ position: [5, 0, -12], fov: 50, isPerspectiveCamera: true}}
    //   style={{
    //     backgroundColor: 'black',
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   }}
    >
      {/* <ambientLight intensity={0.80} /> */}

      {/* <directionalLight intensity={0.6} /> */}
      <gridHelper args={[10,10]} position={[0,-5,0]}/>
      <Suspense fallback={null}>
      
        <ModelG position={[-0.8, -5.4, 4.7]} />
        <ModelCap position={[3, -5, 3]} />
        <SwagModel position={[0, -5, 0]} />
        <Earth />
      </Suspense>
      <OrbitControls />
    </Canvas>
  </CanvasContainer>
  );
}
