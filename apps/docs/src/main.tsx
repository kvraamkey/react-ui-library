import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';
import AppLayout from './layout';

const rootElement = document.querySelector('#docs') as Element;

createRoot(rootElement).render(
    <React.StrictMode>
        <AppLayout />
    </React.StrictMode>
);
