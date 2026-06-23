import { useRef, useEffect } from "react";

/**
 * CanvasTrail
 * Renders a colorful, hue-cycling, spring-physics mouse-trail animation
 * on a full-size canvas overlay. Drop it inside any `relative` container.
 *
 * Props:
 *  - trails    {number}  Number of trail lines (default 60)
 *  - opacity   {number}  Stroke opacity 0-1 (default 0.06)
 *  - lineWidth {number}  Stroke width in px (default 10)
 *  - friction  {number}  Trail friction (default 0.5)
 */
export default function CanvasTrail({
  trails = 60,
  opacity = 0.06,
  lineWidth = 10,
  friction = 0.5,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animFrameId;
    let running = true;
    let hue = 285;
    let lines = [];
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const E = {
      friction,
      trails,
      size: 50,
      dampening: 0.025,
      tension: 0.99,
    };

    // ── Node ──────────────────────────────────────────────────────────────
    function Node() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    // ── Line ──────────────────────────────────────────────────────────────
    function Line(spring) {
      this.spring = spring + 0.1 * Math.random() - 0.05;
      this.friction = E.friction + 0.01 * Math.random() - 0.005;
      this.nodes = [];
      for (let i = 0; i < E.size; i++) {
        const n = new Node();
        n.x = pos.x;
        n.y = pos.y;
        this.nodes.push(n);
      }
    }

    Line.prototype.update = function () {
      let e = this.spring;
      let t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i];
        if (i > 0) {
          const n = this.nodes[i - 1];
          t.vx += (n.x - t.x) * e;
          t.vy += (n.y - t.y) * e;
          t.vx += n.vx * E.dampening;
          t.vy += n.vy * E.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= E.tension;
      }
    };

    Line.prototype.draw = function () {
      let x = this.nodes[0].x;
      let y = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let i = 1; i < this.nodes.length - 2; i++) {
        const a = this.nodes[i];
        const b = this.nodes[i + 1];
        ctx.quadraticCurveTo(a.x, a.y, 0.5 * (a.x + b.x), 0.5 * (a.y + b.y));
      }
      const last = this.nodes[this.nodes.length - 2];
      const end = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(last.x, last.y, end.x, end.y);
      ctx.stroke();
      ctx.closePath();
    };

    // ── Helpers ───────────────────────────────────────────────────────────
    function buildLines() {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new Line(0.45 + (i / E.trails) * 0.025));
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMove = (e) => {
      if (e.touches) {
        pos.x = e.touches[0].clientX;
        pos.y = e.touches[0].clientY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    };

    // ── Render loop ───────────────────────────────────────────────────────
    function render() {
      if (!running) return;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      hue = (hue + 0.8) % 360;
      ctx.strokeStyle = `hsla(${Math.round(hue)},100%,60%,${opacity})`;
      ctx.lineWidth = lineWidth;
      for (const line of lines) {
        line.update();
        line.draw();
      }
      animFrameId = requestAnimationFrame(render);
    }

    // ── Init ──────────────────────────────────────────────────────────────
    resize();
    buildLines();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [trails, opacity, lineWidth, friction]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
