'use client';

import { useEffect, useRef } from 'react';

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const NODE_COUNT = 55;
    let frame = 0;
    let animId: number;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function initNodes() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 2 + 1,
          alpha: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      // Background glow
      const grad = ctx.createRadialGradient(
        canvas!.width * 0.35, canvas!.height * 0.3, 0,
        canvas!.width * 0.5, canvas!.height * 0.5, canvas!.width * 0.8
      );
      grad.addColorStop(0, 'rgba(200,218,238,0.18)');
      grad.addColorStop(0.5, 'rgba(214,226,240,0.10)');
      grad.addColorStop(1, 'rgba(240,244,248,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);

      // Gold accent
      const goldGrad = ctx.createRadialGradient(
        canvas!.width * 0.75, canvas!.height * 0.2, 0,
        canvas!.width * 0.75, canvas!.height * 0.2, canvas!.width * 0.3
      );
      goldGrad.addColorStop(0, 'rgba(201,164,77,0.06)');
      goldGrad.addColorStop(1, 'rgba(201,164,77,0)');
      ctx.fillStyle = goldGrad;
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);

      // Wave lines
      const t = frame * 0.004;
      for (let w = 0; w < 5; w++) {
        ctx.beginPath();
        const amp = 28 + w * 12;
        const freq = 0.0018 + w * 0.0004;
        const phase = w * 1.1 + t * (0.6 + w * 0.12);
        const yBase = canvas!.height * (0.25 + w * 0.12);
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= canvas!.width; x += 4) {
          const y = yBase
            + Math.sin(x * freq + phase) * amp
            + Math.sin(x * freq * 1.7 + phase * 1.3) * (amp * 0.45)
            + Math.cos(x * freq * 0.5 + t) * (amp * 0.2);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${w < 2 ? '180,200,224' : '201,164,77'},${0.06 - w * 0.008})`;
        ctx.lineWidth = w === 1 ? 1.5 : 1;
        ctx.stroke();
      }

      // Nodes + connections
      const maxDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas!.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas!.height) n.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.09;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(50,92,145,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(50,92,145,${n.alpha * 0.6})`;
        ctx.fill();
      }

      frame++;
      animId = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    draw();
    window.addEventListener('resize', () => { resize(); initNodes(); });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
