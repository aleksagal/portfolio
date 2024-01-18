import React from "react";
import './Project.css';

export default function EmptyProject() {
    const content = `if (empty) {\nreturn <InProgress/>\n}\n`

    return (
        <article className="empty-project">
            <pre>
                {content}
            </pre>
        </article>
    );
};