import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Offers from './components/Offers';
import About from './components/About';
import Footer from './components/Footer';

/**
 * Header
 *   - Logo Title
 *   - Nav link
 * Body
 *   - Restaurats
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - Rating
 *   - Search bar
 *   - Corousel
 * Footer
 *   - links
 *   - copyright
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/offers',
        element: <Offers />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

//render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
