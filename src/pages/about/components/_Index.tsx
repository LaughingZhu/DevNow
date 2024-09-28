/*
 * @Date: 2024-09-28 08:52:05
 * @LastEditors: LaughingZhu 474268433@qq.com
 * @LastEditTime: 2024-09-28 09:53:13
 * @Description:
 */

import LoadingSVG from '@/components/icons/Loading';
import React, { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const About = React.lazy(() => import('./_About'));
const StatusModal = React.lazy(() => import('./_StatusModal'));
const Home = React.lazy(() => import('./_Home'));
const Project = React.lazy(() => import('./_Project'));
const Stack = React.lazy(() => import('./_Stack'));
const Footer = React.lazy(() => import('./_Footer'));

export type MESH = THREE.Group<THREE.Object3DEventMap>;

export default function Index() {
  const [statueMesh, setStatueMesh] = useState<MESH | null>(null);
  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/gltf/');

    loader.setDRACOLoader(dracoLoader);
    loader.load('/statue.glb', (gltf) => {
      const model = gltf.scene;
      setStatueMesh(model);
    });
  }, []);
  return (
    <>
      {statueMesh ? (
        <Suspense>
          <div className="z-1 fixed left-0 top-0 h-screen w-full bg-[url('/background.png')] bg-[length:200px_200px] bg-repeat opacity-15"></div>
          <StatusModal statueMesh={statueMesh} />
          <Home />
          <About />
          <Project />
          <Stack />
          <Footer />
        </Suspense>
      ) : (
        <div className='flex h-screen w-full items-center justify-center'>
          <LoadingSVG />
        </div>
      )}
    </>
  );
}
