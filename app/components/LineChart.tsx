"use client";

import React, { useMemo, useRef, useState } from "react";
import styles from "./lineChart.module.css";

type Point = { x: string | number | Date; y: number; label?: string };

interface LineChartProps {
  data: Point[];
  width?: number; // optional fixed width, otherwise responsive
  height?: number;
  color?: string;
  showArea?: boolean;
}

export default function LineChart({
  data,
  width = 300,
  height = 80,
  color = "#4f46e5",
  showArea = true,
}: LineChartProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const padding = { top: 8, right: 8, bottom: 18, left: 8 };

  const points = useMemo(() => {
    if (!data || data.length === 0)
      return [] as { x: number; y: number; raw: Point }[];
    const ys = data.map((d) => d.y);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const w = Math.max(40, width) - padding.left - padding.right;
    const h = Math.max(30, height) - padding.top - padding.bottom;

    return data.map((d, i) => {
      const x = padding.left + (i / Math.max(1, data.length - 1)) * w;
      const y =
        padding.top + (1 - (d.y - minY) / Math.max(1e-6, maxY - minY)) * h;
      return { x, y, raw: d };
    });
  }, [data, width, height]);

  const pathD = useMemo(() => {
    if (!points.length) return "";
    return points
      .map(
        (p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`
      )
      .join(" ");
  }, [points]);

  const areaD = useMemo(() => {
    if (!points.length) return "";
    const last = points[points.length - 1];
    const first = points[0];
    return `${pathD} L ${last.x.toFixed(2)} ${
      height - padding.bottom
    } L ${first.x.toFixed(2)} ${height - padding.bottom} Z`;
  }, [points, pathD, height]);

  const nearestIndexForX = (clientX: number) => {
    if (!ref.current) return null;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let nearest = 0;
    let bestD = Infinity;
    points.forEach((p, i) => {
      const d = Math.abs(p.x - x);
      if (d < bestD) {
        bestD = d;
        nearest = i;
      }
    });
    return nearest;
  };

  return (
    <div className={styles.container} ref={ref} style={{ width }}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lc-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="lc-stroke" x1="0" x2="1">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* subtle grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line
            key={i}
            x1={padding.left}
            x2={width - padding.right}
            y1={padding.top + t * (height - padding.top - padding.bottom)}
            y2={padding.top + t * (height - padding.top - padding.bottom)}
            stroke="#e6e9ef"
            strokeWidth={1}
          />
        ))}

        {showArea && points.length > 0 && (
          <path d={areaD} fill="url(#lc-gradient)" stroke="none" />
        )}

        {points.length > 0 && (
          <path
            d={pathD}
            fill="none"
            stroke="url(#lc-stroke)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* points */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={i === hoverIndex ? 3.5 : 2.2}
            fill={color}
            opacity={i === hoverIndex ? 1 : 0.95}
          />
        ))}

        {/* invisible overlay for pointer handling */}
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="transparent"
          onMouseMove={(e) => {
            const idx = nearestIndexForX(e.clientX);
            if (idx != null) setHoverIndex(idx);
          }}
          onMouseLeave={() => setHoverIndex(null)}
        />
      </svg>

      {hoverIndex != null && points[hoverIndex] && (
        <div className={styles.tooltip} style={{ left: points[hoverIndex].x }}>
          <div className={styles.tooltipInner}>
            <div className={styles.tooltipValue}>
              {points[hoverIndex].raw.y}
            </div>
            <div className={styles.tooltipLabel}>
              {String(points[hoverIndex].raw.x)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
