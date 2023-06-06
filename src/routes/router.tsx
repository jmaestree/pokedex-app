import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import List from './list/list';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
