import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />
  // <>
  //   <Navbar />
  //   <Hero />
  //   <HomeCards />
  //   <JobListings />
  //   <ViewAllJobs />
  // </>
}

export default App
