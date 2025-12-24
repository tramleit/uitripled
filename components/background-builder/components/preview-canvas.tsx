"use client";

import { useSpring } from "framer-motion";
import { LayerRenderer } from "./layer-renderer";
import { getPatternCSS, getPatternSize } from "./pattern-utils";
import type { GradientLayer, PatternType } from "./types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ZoomIn } from "lucide-react";
import { Magnifier } from "./magnifier";

export interface PreviewCanvasProps {
  layers: GradientLayer[];
  bgStart: string;
  bgEnd: string;
  bgAngle: number;
  saturation: number;
  vignette: number;
  noiseOpacity: number;
  activePattern: PatternType;
  patternOpacity: number;
  patternColor: string;
  isAnimating: boolean;
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
  onMouseMove: (e: React.MouseEvent) => void;
}

function PreviewContent({
  layers,
  bgStart,
  bgEnd,
  bgAngle,
  saturation,
  vignette,
  noiseOpacity,
  activePattern,
  patternOpacity,
  patternColor,
  isAnimating,
  smoothX,
  smoothY,
  showOverlays = true,
}: PreviewCanvasProps & { showOverlays?: boolean }) {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{ filter: `saturate(${saturation / 100})` }}
    >
      {/* Base Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(${bgAngle}deg, ${bgStart} 0%, ${bgEnd} 100%)`,
        }}
      />

      {/* Interactive Layers */}
      {layers
        .filter((l) => l.visible)
        .map((layer) => (
          <LayerRenderer
            key={layer.id}
            layer={layer}
            smoothX={smoothX}
            smoothY={smoothY}
            isAnimating={isAnimating}
          />
        ))}

      {/* Vignette */}
      {vignette > 0 && (
        <div
          className="absolute inset-0 z-15 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,${vignette}) 100%)`,
          }}
        />
      )}

      {/* Pattern Overlay */}
      {activePattern !== "none" && patternOpacity > 0 && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            opacity: patternOpacity,
            backgroundImage: getPatternCSS(activePattern, patternColor),
            backgroundSize: getPatternSize(activePattern),
            backgroundPosition:
              activePattern === "cross" ? "0 0, 10px 10px" : undefined,
          }}
        />
      )}

      {/* Noise Overlay */}
      {noiseOpacity > 0 && (
        <div
          className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
          style={{ opacity: noiseOpacity }}
        >
          <svg className="isolate w-full h-full">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#noise)"
              className="w-full h-full bg-transparent"
            />
          </svg>
        </div>
      )}

      {/* Mouse Coordinates */}
      {showOverlays && (
        <div className="absolute bottom-6 right-6 bg-white/50 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 pointer-events-none border border-white/40 shadow-sm opacity-50 group-hover:opacity-100 transition-opacity z-30">
          Move mouse for parallax effect
        </div>
      )}
    </div>
  );
}

export function PreviewCanvas(props: PreviewCanvasProps) {
  const [magnifierEnabled, setMagnifierEnabled] = useState(false);

  return (
    <div
      className="flex-1 relative overflow-hidden cursor-crosshair group"
      onMouseMove={props.onMouseMove}
    >
      <PreviewContent {...props} />

      {/* Magnifier Toggle */}
      <div className="absolute top-4 right-4 z-40">
        <Button
          variant={magnifierEnabled ? "default" : "secondary"}
          size="icon"
          onClick={() => setMagnifierEnabled(!magnifierEnabled)}
          title="Toggle Magnifier"
          className="shadow-lg"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
      </div>

      <Magnifier
        enabled={magnifierEnabled}
        onClose={() => setMagnifierEnabled(false)}
      >
        <div className="w-full h-full relative bg-neutral-900">
          <PreviewContent {...props} showOverlays={false} />
        </div>
      </Magnifier>
    </div>
  );
}
