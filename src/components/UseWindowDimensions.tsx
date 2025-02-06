import { useEffect, useState } from "react";

function GetWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function UseWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    GetWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(GetWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
