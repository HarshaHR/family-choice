//App.js
import { Authenticator } from '@aws-amplify/ui-react';

import { Shop } from './components/shop';
import { RequireAuth } from './components/RequireAuth';
import  Landing  from './components/landing/landing';
import {Layout} from "./components/layout";
import {Login} from "./components/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateProduct } from './components/Product/CreateProduct';
import { store } from './redux/store'
import { Provider } from 'react-redux'


function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route
            path="/shop"
            element={
              <RequireAuth>
                <Shop />
              </RequireAuth>
            }
          />
          <Route
            path="/shop/create"
            element={
              <RequireAuth>
                <CreateProduct />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
       <Provider store={store}>
      <MyRoutes />
      </Provider>
    </Authenticator.Provider>
  );
}

export default App;