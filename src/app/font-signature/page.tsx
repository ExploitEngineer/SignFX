"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const fonts = [
  "Great Vibes",
  "Dancing Script",
  "Pacifico",
  "Sacramento",
  "Caveat",
  "Handlee",
  "Qwigley",
  "Shadows Into Light",
  "Satisfy",
  "Alex Brush",
  "Parisienne",
  "Allura",
  "Yellowtail",
  "La Belle Aurore",
  "Bad Script",
  "Covered By Your Grace",
  "Just Another Hand",
  "Nothing You Could Do",
  "Marck Script",
  "Cookie",
];

const formats = ["png", "jpeg", "svg"];

export default function FontSignaturePage() {
  const [name, setName] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(48);

  const downloadAsImage = (font: string, format: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 600;
    canvas.height = 200;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px '${font}'`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, canvas.width / 2, canvas.height / 2);
    const link = document.createElement("a");
    link.download = `${name}-${font}.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
  };

  return (
    <main className="w-full min-h-screen bg-white py-40 px-4 sm:px-8 md:px-16">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-8">
        Type your signature
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 mb-12">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="md:text-xl text-sm md:px-10 px-8 md:py-6 py-5 rounded-full border-gray-300 shadow-md w-full text-left placeholder-gray-400"
        />

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <label
              htmlFor="colorPicker"
              className="text-gray-700 font-medium md:text-base text-sm"
            >
              Color:
            </label>
            <div className="rounded-4xl overflow-hidden md:h-8 md:w-8 w-6 h-6 relative">
              <input
                type="color"
                id="colorPicker"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="cursor-pointer border-none p-0 absolute -left-2 -right-2 -top-2 -bottom-2 w-full h-full"
                style={{
                  appearance: "none",
                  MozAppearance: "none",
                  WebkitAppearance: "none",
                  background: "none",
                  border: 0,
                  cursor: "pointer",
                  height: "3.5em",
                  padding: 0,
                  width: "5em",
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="fontSize"
              className="text-gray-700 font-medium md:text-base text-sm"
            >
              Size:
            </label>
            <input
              type="range"
              id="fontSize"
              min={24}
              max={72}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-gray-600 md:text-sm text-xs">
              {fontSize}px
            </span>
          </div>
        </div>
      </div>

      {name && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fonts.map((font) => (
            <Card
              key={font}
              className="flex flex-col items-start p-6 gap-4 border border-gray-200 shadow-md hover:shadow-lg transition rounded-xl min-h-[200px]"
            >
              <p className="text-sm text-gray-500 font-medium">{font}</p>
              <p
                className="text-center w-full"
                style={{
                  fontFamily: font,
                  color: textColor,
                  fontSize: `${fontSize}px`,
                }}
              >
                {name}
              </p>
              <div className="w-full flex justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-2 text-white md:text-sm text-xs font-bold bg-blue-600 hover:bg-blue-700 w-full justify-center">
                      <Download className="w-4 h-4" /> Download
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {formats.map((format) => (
                      <DropdownMenuItem
                        key={format}
                        onClick={() => downloadAsImage(font, format)}
                      >
                        {format.toUpperCase()}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
