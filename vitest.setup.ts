import { afterAll, vi } from "vitest";

// Fix canvas node errors

// @ts-expect-error: Global jest
global.jest = vi;

const apis = [
  "Path2D",
  "CanvasGradient",
  "CanvasPattern",
  "CanvasRenderingContext2D",
  "DOMMatrix",
  "ImageData",
  "TextMetrics",
  "ImageBitmap",
  "createImageBitmap",
] as const;

async function importMockWindow() {
  const getCanvasWindow = await import("jest-canvas-mock/lib/window").then(
    (res) => res.default || res
  );

  const canvasWindow = getCanvasWindow({ document: window.document });

  apis.forEach((api) => {
    global[api] = canvasWindow[api];
    global.window[api] = canvasWindow[api];
  });
}

importMockWindow();

afterAll(() => {
  // @ts-expect-error: Global jest
  delete global.jest;
  // @ts global.window.jest;
});

export {};
