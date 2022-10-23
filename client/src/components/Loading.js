// This Component was reaplced by Logo.js !!!
// This Component was reaplced by Logo.js !!!
// This Component was reaplced by Logo.js !!!
// This Component was reaplced by Logo.js !!!
import { useState, useEffect } from 'react';

function Loading() {

    let globalNum = 1;
    const [timeLeft, setTimeLeft] = useState(globalNum);

    useEffect(() => {
        const intervalId = setInterval(() => {

            if (globalNum === 1) {
                globalNum = Math.floor(Math.random() * (4 - 2 + 1) + 2);
                setTimeLeft(globalNum);
            } else {
                globalNum = 1;
                setTimeLeft(globalNum);
            }

        }, 1500);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "rgb(10 10 10)"
        }}>
            <div id="wrapper" data-configuration={timeLeft}>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
        </div>
    );
}

export default Loading;