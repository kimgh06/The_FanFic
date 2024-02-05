"use client"
import { CameraControls, OrbitControls } from '@react-three/drei';
import './page.scss'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef, useState } from 'react';

export default function TrunchRun() {
  return <Canvas shadows camera={{ position: [3, 0.5, 1] }}>
    <ambientLight intensity={0.7} />
    <directionalLight color={'darkgray'} position={[0, 6, 0]} />
    <OrbitControls />
    <Trench />
    <Trench2 />
    <Trench3 />
    <Trench4 />
    <Xwing scale={0.1} />
    <axesHelper args={[5]} />
  </Canvas>
}

function Xwing(props) {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, './x-wing/scene.gltf');
  const [y, setY] = useState(0.001);
  const [z, setZ] = useState(0.002);
  useEffect(e => {
    ref.current.rotation.y = -Math.PI / 2
    ref.current.position.x = -1
  }, []);
  useFrame(e => {
    console.log(ref.current.position.z)
    if (ref.current.position.y >= 0.03) {
      setY(e => -0.001);
    } else if (ref.current.position.y < -0.03) {
      setY(e => 0.001);
    }
    ref.current.position.y += y;
    if (ref.current.position.z >= 0.1) {
      setZ(e => -0.002);
    } else if (ref.current.position.z < -0.2) {
      setZ(e => 0.002);
    }
    ref.current.position.z += z;
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model.scene} />
  </mesh>
}

function TIEfighter() {

}

function Trench(props) {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, './Trench1.glb')
  const [positioning, setPositioning] = useState(false);
  useEffect(e => {
    ref.current.position.z = 10;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= -50) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= -20) {
        ref.current.position.y -= 1;
        return;
      }
      ref.current.position.y += 1;
      return;
    }
    if (ref.current.position.x >= 10) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += 0.3
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model.scene} />
  </mesh>
}

function Trench2(props) {
  const ref = useRef(null);
  const model1 = useLoader(GLTFLoader, './Trench2.glb')
  const [positioning, setPositioning] = useState(false);
  useEffect(e => {
    ref.current.position.x = -15;
    ref.current.position.z = 10;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= -50) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= -20) {
        ref.current.position.y -= 1;
        return;
      }
      ref.current.position.y += 1;
      return;
    }
    if (ref.current.position.x >= 10) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += 0.3
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model1.scene} />
  </mesh>
}

function Trench3(props) {
  const ref = useRef(null);
  const model1 = useLoader(GLTFLoader, './Trench3.glb')
  const [positioning, setPositioning] = useState(false);
  useEffect(e => {
    ref.current.position.x = -30;
    ref.current.position.z = 10;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= -50) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= -20) {
        ref.current.position.y -= 10;
        return;
      }
      ref.current.position.y += 10;
      return;
    }
    if (ref.current.position.x >= 10) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += 0.3
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model1.scene} />
  </mesh>
}

function Trench4(props) {
  const ref = useRef(null);
  const model1 = useLoader(GLTFLoader, './Trench4.glb')
  const [positioning, setPositioning] = useState(false);
  useEffect(e => {
    ref.current.position.x = -45;
    ref.current.position.z = 10;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= -50) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= -20) {
        ref.current.position.y -= 1;
        return;
      }
      ref.current.position.y += 1;
      return;
    }
    if (ref.current.position.x >= 10) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += 0.3
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model1.scene} />
  </mesh>
}