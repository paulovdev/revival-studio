 import { useEffect, useState } from "react";

export function useGyroscope(enabled = true) {
  const [gyro, setGyro] = useState({ beta: 0, gamma: 0 });

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const handleOrientation = (e) => {
      if (e.beta == null || e.gamma == null) return;

      setGyro({
        beta: e.beta,
        gamma: e.gamma,
      });
    };

    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((res) => {
          if (res === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [enabled]);

  return gyro;
}
