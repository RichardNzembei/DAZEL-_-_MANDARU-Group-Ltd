import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Analytics } from '@vercel/analytics/react'; // import Analytics

render(
    <>
        <App />
        <Analytics />
    </>,
    document.getElementById('root')
);
