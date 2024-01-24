import React, {useEffect, useRef} from "react";
import './Project.css';
import Typed from "typed.js";

export default function EmptyProject() {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const typedText = {
            strings: [
                `if (empty) {\n   return &lt;InProgress/&gt;\n}\n`,
            ],
            typeSpeed: 100,
            backSpeed: 100,
        };

        typed.current = new Typed(el.current, typedText);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <article className="empty-project">
            <pre>
                <span ref={el}/>
            </pre>
        </article>
    );
};