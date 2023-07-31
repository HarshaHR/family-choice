//App.js
import { Authenticator } from '@aws-amplify/ui-react';

import { Protected } from './components/Protected';
import { RequireAuth } from './components/RequireAuth';
import { ProtectedSecond } from './components/ProtectSecond';
import  Landing  from './components/landing/landing';
import {Layout} from "./components/layout";
import {Login} from "./components/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond />
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
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;