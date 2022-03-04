import React from 'react';
import './style.css';

import { Navbar, CartList } from '../components';

export default function App() {
  return (
    <div>
      <Navbar />
      <CartList />
    </div>
  );
}
