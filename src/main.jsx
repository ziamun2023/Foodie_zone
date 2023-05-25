import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')).render(
<HelmetProvider>
<ParallaxProvider>
<React.StrictMode>
<div  data-theme="cupcake" className='  max-w-screen-xl mx-auto'>

<RouterProvider router={router} />
</div>
  </React.StrictMode>,
</ParallaxProvider>
</HelmetProvider>
)
