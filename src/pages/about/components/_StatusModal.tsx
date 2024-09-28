import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { MESH } from './_Index';

interface IProps {
  statueMesh: MESH | null;
}

const StatueModel: FC<IProps> = ({ statueMesh }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const pointLight = new THREE.PointLight(0xffffff, 7);
    pointLight.position.set(1, 1, 1);
    scene.add(pointLight);

    if (statueMesh) {
      scene.add(statueMesh);
      camera.lookAt(statueMesh.position);
    }

    const onScroll = () => {
      if (statueMesh) {
        const scrollPercentage =
          window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        statueMesh.rotation.x = scrollPercentage * 2 * Math.PI;
        statueMesh.rotation.y = scrollPercentage * 2 * Math.PI;
      }
    };
    window.addEventListener('scroll', onScroll);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    const onMouseMove = (event: MouseEvent) => {
      handleMove(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event?.touches?.[0];
      if (touch) {
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const handleMove = (x: number, y: number) => {
      const originX = window.innerWidth / 2;
      const originY = window.innerHeight / 2;

      const mouseX = ((originX - x) / window.innerWidth) * 2;
      const mouseY = -((y - originY) / window.innerHeight) * 2;

      pointLight.position.set(2, mouseY * 2, mouseX * 2);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [statueMesh]);

  return (
    <div className='fixed left-0 top-0 z-[0] h-screen w-full opacity-40' ref={containerRef}></div>
  );
};

export default StatueModel;
