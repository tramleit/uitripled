"use client";

import { Button } from "@/components/ui/button";
import { ZoomIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Magnifier } from "../magnifier";
import { SHADER_INFO } from "./constants";
import { ShaderRenderer, ShaderRendererProps } from "./shader-renderer";

export type ShaderPreviewProps = ShaderRendererProps;

export function ShaderPreview(props: ShaderPreviewProps) {
  const [magnifierEnabled, setMagnifierEnabled] = useState(false);

  return (
    <div className="flex-1 relative overflow-hidden bg-checkered group">
      <div className="absolute inset-0 flex items-center justify-center">
        <ShaderRenderer {...props} />
      </div>

      {/* Magnifier Toggle */}
      <div className="absolute top-4 right-4 z-20">
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

      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded text-xs text-muted-foreground font-mono z-20">
        <span className="uppercase">{SHADER_INFO[props.activeShader].name}</span>{" "}
        by{" "}
        <Link
          href="https://paper.design/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          paper.design
        </Link>
      </div>

      <Magnifier
        enabled={magnifierEnabled}
        onClose={() => setMagnifierEnabled(false)}
      >
        <div className="w-full h-full bg-checkered">
          <ShaderRenderer {...props} />
        </div>
      </Magnifier>
    </div>
  );
}
