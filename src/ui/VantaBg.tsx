import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import FOG from 'vanta/dist/vanta.fog.min';
import NET from 'vanta/dist/vanta.net.min';

export type VantaEffectType = 'waves' | 'fog' | 'net';

interface VantaBgProps {
  effect: VantaEffectType;
  color?: number;
  backgroundColor?: number;
}

const VantaBg: React.FC<VantaBgProps> = ({ effect, color = 0x0077be, backgroundColor = 0xf0f4f8 }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }
    if (!vantaRef.current) return;
    let effectInstance = null;
    if (effect === 'waves') {
      effectInstance = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 400.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color,
        shininess: 50.0,
        waveHeight: 20.0,
        waveSpeed: 0.7,
        zoom: 0.95,
        backgroundColor,
      });
    } else if (effect === 'fog') {
      effectInstance = FOG({
        el: vantaRef.current,
        THREE,
        highlightColor: color,
        midtoneColor: 0xffffff,
        lowlightColor: 0x222222,
        baseColor: backgroundColor,
        blurFactor: 0.7,
        speed: 1.5,
      });
    } else if (effect === 'net') {
      effectInstance = NET({
        el: vantaRef.current,
        THREE,
        color,
        backgroundColor,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 18.0,
      });
    }
    vantaEffect.current = effectInstance;
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [effect, color, backgroundColor]);

  return (
    <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full" aria-hidden="true" />
  );
};

export default VantaBg;
