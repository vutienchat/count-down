import moment from "moment";
import React, { useEffect, useState } from "react";
const CountDown = () => {
  const [timer, setTimer] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    setInterval(() => {
      const then = moment("2022-01-01 00:00:00", "YYYY-MM-DD HH:mm:ss");
      const now = moment();
      const countdown = moment(then - now);
      const days = then.diff(now, "days");
      const hours = then.diff(now, "hours");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      setTimer({ days, hours, minutes, seconds });
    }, 1000);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <div className="text-white text-center mr-5">
        <h2 className="count-down-title text-3xl font-semibold">
          Countdown to new year
        </h2>
        <div className="text-8xl font-bold">2022</div>
      </div>
      <div className="text-white flex mt-20">
        <div className="mr-5 w-20 text-center">
          <div className="text-6xl bg-black/75 pb-2">{timer.days}</div>
          <div className="bg-sky-800/75 font-semibold">Day</div>
        </div>
        <div className="mr-5 w-20 text-center">
          <div className="text-6xl bg-black/75  pb-2">{timer.hours}</div>
          <div className="bg-sky-800/75 font-semibold">Hour</div>
        </div>
        <div className="mr-5 w-20 text-center">
          <div className="text-6xl bg-black/75  pb-2">{timer.minutes}</div>
          <div className="bg-sky-800/75 font-semibold">minute</div>
        </div>
        <div className="mr-5 w-20 text-center">
          <div className="text-6xl bg-black/75  pb-2">{timer.seconds}</div>
          <div className="bg-sky-800/75 font-semibold">second</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
