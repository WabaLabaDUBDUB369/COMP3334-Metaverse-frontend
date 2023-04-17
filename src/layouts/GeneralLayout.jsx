import React from 'react';
import { Navbar } from '../components';

const GeneralLayout = ({ children }) => {
  return (
    <div>
      <Navbar /> {children}{' '}
    </div>
  );
};

export default GeneralLayout;
