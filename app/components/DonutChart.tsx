"use client";

import React from "react";
import styles from "./donutChart.module.css";

type Slice = { label: string; value: number; color?: string };

export default function DonutChart({
  data,
  size = 140,
  thickness = 18,
}: {
  data: Slice[];
  size?: number;
  thickness?: number;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const radius = (size - thickness) / 2;
  const circ = 2 * Math.PI * radius;
  let acc = 0;

  return (
    <div className={styles.container} style={{ width: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${size / 2}, ${size / 2})`}>
          {data.map((slice, i) => {
            const portion = slice.value / Math.max(1, total);
            const dash = `${(portion * circ).toFixed(2)} ${circ.toFixed(2)}`;
            const offset = (acc / Math.max(1, total)) * circ;
            acc += slice.value;
            return (
              <circle
                key={i}
                r={radius}
                cx={0}
                cy={0}
                fill="none"
                stroke={slice.color || "#6b7280"}
                strokeWidth={thickness}
                strokeDasharray={dash}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
          })}

          <circle r={radius - thickness / 2} cx={0} cy={0} fill="#fff" />
        </g>
      </svg>

      <div className={styles.center} style={{ width: size }}>
        <div className={styles.centerValue}>{total}</div>
        <div className={styles.centerLabel}>Tasks</div>
      </div>

      <div className={styles.legend}>
        {data.map((d, i) => (
          <div key={i} className={styles.legendItem}>
            <span
              className={styles.legendSwatch}
              style={{ background: d.color }}
            />
            <span className={styles.legendLabel}>{d.label}</span>
            <span className={styles.legendValue}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
