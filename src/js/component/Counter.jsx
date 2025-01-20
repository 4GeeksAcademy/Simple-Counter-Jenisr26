import React, { useEffect, useState } from "react";

export const Counter = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const hours = Math.floor(minutes / 60);
    const displayMinutes = minutes % 60;

    return (
        <div style={{textAlign: "center", marginTop: "50px", background: "rgba(76, 232, 41, 0.93)"}}>
            <h1>
            {hours.toString().padStart(2, '0')}:
            {displayMinutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')};
            </h1>
        </div>
    )
}