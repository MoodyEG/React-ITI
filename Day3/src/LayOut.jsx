// import React from 'react'

import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function LayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
