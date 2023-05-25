import React from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({backgroundImage,Menutitle,MenuDescription}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={backgroundImage}
        bgImageAlt="the dog"
        strength={-200}
    >
      
      
        <div className="hero h-96">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">{Menutitle}</h1>
      <p className="mb-5 text-white">{MenuDescription}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </Parallax>
        
       
    );
};

export default Cover;