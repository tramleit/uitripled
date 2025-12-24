"use client";

import { useState } from "react";
import { ShaderType } from "./components/shader/constants";
import { ShaderControls } from "./components/shader/shader-controls";
import { ShaderPreview } from "./components/shader/shader-preview";

export function ShaderBuilder() {
  const [activeShader, setActiveShader] = useState<ShaderType>("mesh");

  // Common State
  const [colors, setColors] = useState<string[]>([
    "#000000",
    "#dc2626",
    "#ffffff",
    "#7f1d1d",
    "#ef4444",
  ]);
  const [activePreset, setActivePreset] = useState<string>("ruby");
  const [speed, setSpeed] = useState(0.3);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  // Liquid Specific
  const [liquidBg, setLiquidBg] = useState("#000000");
  const [liquidBlob, setLiquidBlob] = useState("circle");
  const [liquidDistortion, setLiquidDistortion] = useState(0.0);
  const [liquidSoftness, setLiquidSoftness] = useState(0.5);

  // Waves Specific
  const [wavesBg, setWavesBg] = useState("#000000");
  const [wavesColorFront, setWavesColorFront] = useState("#dc2626");
  const [wavesShape, setWavesShape] = useState(1);
  const [wavesFreq, setWavesFreq] = useState(1.0);
  const [wavesAmp, setWavesAmp] = useState(0.5);

  // Grain Specific
  const [grainBg, setGrainBg] = useState("#000000");
  const [grainShape, setGrainShape] = useState("wave");
  const [grainNoise, setGrainNoise] = useState(0.1);
  const [grainIntensity, setGrainIntensity] = useState(0.5);

  // Neuro Specific
  const [neuroBrightness, setNeuroBrightness] = useState(1.0);

  // Metaballs Specific
  const [metaballsBg, setMetaballsBg] = useState("#000000");

  // Voronoi Specific
  const [voronoiBg, setVoronoiBg] = useState("#000000");

  // GodRays Specific
  const [godraysBg, setGodraysBg] = useState("#000000");

  // Swirl Specific
  const [swirlBg, setSwirlBg] = useState("#000000");

  // Spiral Specific
  const [spiralBg, setSpiralBg] = useState("#000000");

  return (
    <div className="flex h-screen w-full flex-col md:flex-row bg-background text-foreground">
      <ShaderControls
        activeShader={activeShader}
        setActiveShader={setActiveShader}
        colors={colors}
        setColors={setColors}
        activePreset={activePreset}
        setActivePreset={setActivePreset}
        speed={speed}
        setSpeed={setSpeed}
        scale={scale}
        setScale={setScale}
        opacity={opacity}
        setOpacity={setOpacity}
        // Liquid
        liquidBg={liquidBg}
        setLiquidBg={setLiquidBg}
        liquidBlob={liquidBlob}
        setLiquidBlob={setLiquidBlob}
        liquidDistortion={liquidDistortion}
        setLiquidDistortion={setLiquidDistortion}
        liquidSoftness={liquidSoftness}
        setLiquidSoftness={setLiquidSoftness}
        // Waves
        wavesBg={wavesBg}
        setWavesBg={setWavesBg}
        wavesColorFront={wavesColorFront}
        setWavesColorFront={setWavesColorFront}
        wavesShape={wavesShape}
        setWavesShape={setWavesShape}
        wavesFreq={wavesFreq}
        setWavesFreq={setWavesFreq}
        wavesAmp={wavesAmp}
        setWavesAmp={setWavesAmp}
        // Grain
        grainBg={grainBg}
        setGrainBg={setGrainBg}
        grainShape={grainShape}
        setGrainShape={setGrainShape}
        grainNoise={grainNoise}
        setGrainNoise={setGrainNoise}
        grainIntensity={grainIntensity}
        setGrainIntensity={setGrainIntensity}
        // Neuro
        neuroBrightness={neuroBrightness}
        setNeuroBrightness={setNeuroBrightness}
        // Backgrounds
        metaballsBg={metaballsBg}
        setMetaballsBg={setMetaballsBg}
        voronoiBg={voronoiBg}
        setVoronoiBg={setVoronoiBg}
        godraysBg={godraysBg}
        setGodraysBg={setGodraysBg}
        swirlBg={swirlBg}
        setSwirlBg={setSwirlBg}
        spiralBg={spiralBg}
        setSpiralBg={setSpiralBg}
      />
      <ShaderPreview
        activeShader={activeShader}
        opacity={opacity}
        colors={colors}
        speed={speed}
        scale={scale}
        liquidBg={liquidBg}
        liquidBlob={liquidBlob}
        liquidDistortion={liquidDistortion}
        liquidSoftness={liquidSoftness}
        wavesColorFront={wavesColorFront}
        wavesBg={wavesBg}
        wavesShape={wavesShape}
        wavesFreq={wavesFreq}
        wavesAmp={wavesAmp}
        grainBg={grainBg}
        grainShape={grainShape}
        grainNoise={grainNoise}
        grainIntensity={grainIntensity}
        neuroBrightness={neuroBrightness}
        metaballsBg={metaballsBg}
        voronoiBg={voronoiBg}
        godraysBg={godraysBg}
        swirlBg={swirlBg}
        spiralBg={spiralBg}
      />
    </div>
  );
}
