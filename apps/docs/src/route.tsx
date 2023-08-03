import { Navigate, createHashRouter } from 'react-router-dom';
import AppLayout, { AppComponentRender } from './layout';

const router = createHashRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: ':component',
                element: <AppComponentRender />,
            },
            {
                index: true,
                element: <Navigate to="introduction" />,
            },
        ],
    },
]);

export default router;
