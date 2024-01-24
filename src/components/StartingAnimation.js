import React from 'react';
import {useEffect, useState} from "react";
import './StartingAnimation.css';

export default function StartingAnimation({setAnimationEnded}) {
    const words = ["Creative", "Dynamic", "Innovative", "Dedicated", "Efficient", "Passionate"];
    const [fadeout, setFadeout] = useState(false);

    useEffect(() => {
        const totalAnimationTime = 6 * 0.3 * 1000;
        const fadeOutTime = 500;
        const timer = setTimeout(() => {
            setFadeout(true);
            setTimeout(() => {
                setAnimationEnded(true);
            }, fadeOutTime);

        }, totalAnimationTime);

        return () => clearTimeout(timer);
    }, [setAnimationEnded]);

    return (
        <div className={`starting-animation ${fadeout ? 'fade-out' : ''}`}>
            {words.map((word, index) => (
                <h1 key={word} className="animated-word" style={{animationDelay: `${index * 0.3}s`}}>
                    {word}
                </h1>
            ))}
        </div>
    );
};
