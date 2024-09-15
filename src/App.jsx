import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


const App = () => {
  const addJob = async (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
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
