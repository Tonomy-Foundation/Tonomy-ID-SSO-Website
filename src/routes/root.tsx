import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CallBackPage from '../pages/CallBack';
import DownloadApp from '../pages/DownloadApp';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Home />,
    },
    {
        path: '/download',
        element: <DownloadApp />,
    },
    {
        path: '/callback',
        element: <CallBackPage />,
    },
]);

export default router;
