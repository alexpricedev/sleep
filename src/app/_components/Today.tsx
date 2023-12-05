"use client";
import { GradientText } from "./GradientText";

export const Today = () => (
  <p className="text-xl font-bold mb-4">
    <GradientText colorWay="green" text={new Date().toDateString()} />
  </p>
);
