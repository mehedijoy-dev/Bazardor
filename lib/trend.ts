import type { Product } from "./types";

type Dir = Product["change"]["dir"];

const UP = { text: "text-red-600", badge: "bg-red-100 text-red-700" };
const DOWN = { text: "text-green-600", badge: "bg-green-100 text-green-700" };
const FLAT = { text: "text-gray-500", badge: "bg-gray-100 text-gray-600" };

export const trendStyle = (dir: Dir) =>
  dir === "up" ? UP : dir === "down" ? DOWN : FLAT;

export const trendArrow = (dir: Dir) =>
  dir === "up" ? "▲" : dir === "down" ? "▼" : "—";
