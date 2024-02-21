import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '50%' }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>
        <div
        >
          <img src="assets/react.svg" height="70px"></img>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/account" element={<NxWelcome title="account" />} />
        <Route path="/product" element={<NxWelcome title="product" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
