import React, { useEffect, useRef, useState } from 'react'

const CountDown = () => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('May 30, 2024').getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop our timer 
                clearInterval(interval.current);
            } else {
                // update timer 
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    };

    // componentDidMount 
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

  return (
    <div>
        <h3>{days}</h3>
        <h3>{hours}</h3>
        <h3>{minutes}</h3>
        <h3>{seconds}</h3>
    </div>
  )
}

export default CountDown