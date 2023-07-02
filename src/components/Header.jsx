import React from 'react';
import {Breadcrumbs} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import './Test.css'

const Header = ({title}) => (
  <div className="mb-5">
   <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;