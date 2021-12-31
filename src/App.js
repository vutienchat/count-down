import "./App.css";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";
import CountDown from "./CountDown";
function App() {
  const { setEnabled, setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 40,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 2,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      sound: {
        enabled: true,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3",
        ],
        volume: {
          min: 1,
          max: 100,
        },
      },
      mouse: {
        click: true,
        move: false,
        max: 1,
      },
    },
  });

  const toggleSound = () => {
    setOptions({
      sound: {
        enabled: true,
      },
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url('https://wallpaper.dog/large/20454374.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Fireworks
        style={{
          height: "100%",
        }}
        enabled={enabled}
        options={options}
      ></Fireworks>
      <CountDown />
    </div>
  );
}

export default App;
