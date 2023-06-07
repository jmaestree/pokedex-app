import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import List from './list/list';
import Detail from './detail/detail';
import Form from './form/form';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="detail/:pokemonId" element={<Detail />} />
          <Route path="edit/:pokemonId" element={<Form />} />
          <Route path="new" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
