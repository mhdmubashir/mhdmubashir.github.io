import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

export default function Card() {
    return (
    <Fragment>
        <h1> HEELEL </h1>
    </Fragment>
    );
}