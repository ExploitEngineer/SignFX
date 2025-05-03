"use client";

import { useRef, useState, useEffect } from "react";
import SignaturePad from "signature_pad";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { SketchPicker } from "react-color";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SignaturePadPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(2);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d")?.scale(ratio, ratio);

      signaturePadRef.current = new SignaturePad(canvas, {
        minWidth: lineWidth,
        maxWidth: lineWidth + 1,
        penColor: color,
        backgroundColor: "rgb(255,255,255)",
      });
    }
  }, []);

  useEffect(() => {
    if (signaturePadRef.current) {
      signaturePadRef.current.maxWidth = lineWidth + 1;
      signaturePadRef.current.minWidth = lineWidth;
      signaturePadRef.current.penColor = color;
    }
  }, [lineWidth, color]);

  const clearCanvas = () => {
    signaturePadRef.current?.clear();
  };

  const downloadImage = (format: "png" | "jpeg" | "svg") => {
    if (!signaturePadRef.current) return;
    let dataUrl: string = "";

    if (format === "svg") {
      const svg = signaturePadRef.current.toSVG();
      const blob = new Blob([svg], { type: "image/svg+xml" });
      dataUrl = URL.createObjectURL(blob);
    } else {
      const type = format === "jpeg" ? "image/jpeg" : "image/png";
      dataUrl = signaturePadRef.current.toDataURL(type);
    }

    const link = document.createElement("a");
    link.download = `signature.${format}`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16">
      <Card className="xl:w-[50%] lg:w-[70%] md:w-[90%] w-full md:p-8 shadow-xl rounded-2xl mt-10 bg-white">
        <h1 className="md:text-4xl text-2xl font-bold text-center text-black">
          Signature Pad
        </h1>
        <CardContent className="space-y-6">
          <div className="rounded-xl overflow-hidden border border-gray-300">
            <canvas
              ref={canvasRef}
              className="w-full h-[300px] bg-white cursor-crosshair"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pb-2 pb-6">
            <div>
              <label className="block mb-1 md:font-medium text-sm text-gray-700">
                Line Width
              </label>
              <Slider
                defaultValue={[lineWidth]}
                max={10}
                step={0.5}
                onValueChange={(val) => setLineWidth(val[0])}
              />
            </div>
            <div className="space-y-2 flex flex-col items-end justify-center">
              <label className="block md:font-medium text-sm text-gray-700">
                Pen Color
              </label>
              <Button
                variant="outline"
                className="md:text-sm text-xs"
                onClick={() => setShowColorPicker(!showColorPicker)}
              >
                {showColorPicker ? "Hide" : "Show"} Color Picker
              </Button>
              {showColorPicker && (
                <div className="mt-2">
                  <SketchPicker
                    color={color}
                    onChangeComplete={(c) => setColor(c.hex)}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-center justify-between pt-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="md:text-sm md:font-medium text-xs font-bold">Download As</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem onClick={() => downloadImage("png")}>
                  PNG
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => downloadImage("jpeg")}>
                  JPEG
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => downloadImage("svg")}>
                  SVG
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="destructive" className="md:text-sm md:font-medium text-xs font-bold" onClick={clearCanvas}>
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
