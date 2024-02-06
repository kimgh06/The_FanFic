"use client"
import { CameraControls, OrbitControls } from '@react-three/drei';
import './page.scss'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef, useState } from 'react';

const trench_speed = 0.15, trench_start = -60, trench_up_start = -20, trench_z_position = 11.6, trench_end = 20, trench_between = 25;

export default function TrunchRun() {
  const [bullet, setBullet] = useState(false)
  useEffect(a => {
    const inter = setInterval(() => {
      setBullet(e => !e)
    }, 500);
    return e => clearInterval(inter)
  }, []);
  return <Canvas shadows camera={{ position: [2, 0.5, 0.5] }}>
    <ambientLight intensity={0.1} />
    <directionalLight color={'white'} position={[8, 1, 0]} />
    <OrbitControls />
    <Trench />
    <Trench2 />
    <Trench3 />
    <Trench4 />
    <Xwing scale={0.1} />
    <TIE1 scale={0.01} />
    <TIE2 scale={0.01} />
    <AdvancedX1 scale={0.0001} />
    {/* <axesHelper args={[5]} /> */}
    {bullet && <Bullet1 />}
  </Canvas>
}

function Bullet1(props) {
  const ref = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(e => {
    ref.current.rotation.z = Math.PI / 2
    ref.current.position.x = 0.5
    leftRef.current.position.z -= 0.1
    rightRef.current.position.z += 0.1
  }, [])
  useFrame(e => {
    ref.current.position.x -= 0.3;
  })
  return <mesh ref={ref} {...props}>
    <mesh ref={leftRef}>
      <cylinderGeometry args={[0.01, 0.01, 2]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
    <mesh ref={rightRef}>
      <cylinderGeometry args={[0.01, 0.01, 2]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
    <pointLight position={[ref?.current?.position?.x || 0, ref?.current?.position?.y || 0, ref?.current?.position?.z + 1 || 1]} />
  </mesh>
}

function Xwing(props) {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, './x-wing/scene.gltf');
  const [y, setY] = useState(0.001);
  const [z, setZ] = useState(0.002);
  useEffect(e => {
    ref.current.rotation.y = -Math.PI / 2
    ref.current.position.x = -1
    ref.current.position.y = -0.1
  }, []);
  useFrame(e => {
    if (ref.current.position.y >= 0.03 - 0.1) {
      setY(e => -0.001);
    } else if (ref.current.position.y < -0.03 - 0.1) {
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

function TIE1(props) {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, './tie/scene.gltf');
  const [y, setY] = useState(-0.001);
  const [z, setZ] = useState(-0.002);
  useEffect(e => {
    ref.current.rotation.y = -Math.PI / 2
    ref.current.position.x = 1.3
    ref.current.position.z = 0.5
    ref.current.position.y = -0.1
  }, []);
  useFrame(e => {
    if (ref.current.position.y >= 0.03 - 0.1) {
      setY(e => -0.001);
    } else if (ref.current.position.y < -0.03 - 0.1) {
      setY(e => 0.001);
    }
    ref.current.position.y += y;
    if (ref.current.position.z >= 0.1 + 0.5) {
      setZ(e => -0.002);
    } else if (ref.current.position.z < -0.2 + 0.5) {
      setZ(e => 0.002);
    }
    ref.current.position.z += z;
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model.scene} />
  </mesh>
}

function TIE2(props) {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, './tie2/scene.gltf');
  const [y, setY] = useState(-0.001);
  const [z, setZ] = useState(-0.002);
  useEffect(e => {
    ref.current.rotation.y = -Math.PI / 2
    ref.current.position.x = 1.3
    ref.current.position.y = -0.1
    ref.current.position.z = -0.5
  }, []);
  useFrame(e => {
    if (ref.current.position.y >= 0.03 - 0.1) {
      setY(e => -0.001);
    } else if (ref.current.position.y < -0.03 - 0.1) {
      setY(e => 0.001);
    }
    ref.current.position.y += y;
    if (ref.current.position.z >= 0.1 - 0.5) {
      setZ(e => -0.002);
    } else if (ref.current.position.z < -0.2 - 0.5) {
      setZ(e => 0.002);
    }
    ref.current.position.z += z;
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model.scene} />
  </mesh>
}

function AdvancedX1(props) {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, './vaders_tie/scene.gltf');
  const [y, setY] = useState(-0.001);
  const [z, setZ] = useState(-0.002);
  useEffect(e => {
    ref.current.rotation.y = -Math.PI / 2
    ref.current.position.x = 1
  }, []);
  useFrame(e => {
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

function Trench(props) {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, './Trench1.glb')
  const [positioning, setPositioning] = useState(false);
  useEffect(e => {
    ref.current.position.z = trench_z_position;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= trench_start) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= trench_up_start) {
        ref.current.position.y -= 1;
        return;
      }
      ref.current.position.y += 1;
      return;
    }
    if (ref.current.position.x >= trench_end) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += trench_speed
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model.scene} />
    <meshStandardMaterial metalness={1} />
  </mesh>
}

function Trench2(props) {
  const ref = useRef(null);
  const model1 = useLoader(GLTFLoader, './Trench2.glb')
  const [positioning, setPositioning] = useState(false);
  useEffect(e => {
    ref.current.position.x = -trench_between;
    ref.current.position.z = trench_z_position;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= trench_start) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= trench_up_start) {
        ref.current.position.y -= 1;
        return;
      }
      ref.current.position.y += 1;
      return;
    }
    if (ref.current.position.x >= trench_end) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += trench_speed
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
    ref.current.position.x = -trench_between * 2;
    ref.current.position.z = trench_z_position;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= trench_start) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= trench_up_start) {
        ref.current.position.y -= 1;
        return;
      }
      ref.current.position.y += 1;
      return;
    }
    if (ref.current.position.x >= trench_end) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += trench_speed
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
    ref.current.position.x = -trench_between * 3;
    ref.current.position.z = trench_z_position;
  }, [])
  useFrame(e => {
    if (positioning) {
      if (ref.current.position.x <= trench_start) {
        ref.current.position.y = 0
        setPositioning(false);
        return;
      }
      ref.current.position.x -= 3;
      if (ref.current.position.x >= trench_up_start) {
        ref.current.position.y -= 1;
        return;
      }
      ref.current.position.y += 1;
      return;
    }
    if (ref.current.position.x >= trench_end) {
      setPositioning(true);
      return;
    }
    ref.current.position.x += trench_speed
  })
  return <mesh ref={ref} {...props}>
    <primitive object={model1.scene} />
  </mesh>
}