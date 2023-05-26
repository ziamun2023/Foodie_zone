import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import menuimage from "../../assets/img5.jpg"
import Category from '../home/category/Category';
import MenuItem from '../shared/MenuItem';
import FamousItem from '../home/famousItem/FamousItem';
import MenuHook from '../../hooks/MenuHook';
import pizzaimg from '../../assets/pizza-bg.jpg'
import saladImg from '../../assets/salad-bg.jpg'
import dessertImg from '../../assets/dessert-bg.jpeg'


import HeadTitle from '../shared/HeadTitle';
import MenuByName from './MenuByName';
const Menupage = () => {
const [menu,loading]=MenuHook()
console.log(menu)
const dessert=menu.filter(item=>item.category==='dessert')
const soup=menu.filter(item=>item.category==='soup')
const salad=menu.filter(item=>item.category==='salad')
const pizza=menu.filter(item=>item.category==='pizza')
const offered=menu.filter(item=>item.category==='offered')

// console.log(desert)

    return (
        <div>
              <Helmet>
        <title>Foodie Zone | Menu</title>
       
      </Helmet>

      <Cover backgroundImage={menuimage} Menutitle={'Our Menu'}  MenuDescription={'Indulge your senses with our exquisite culinary creations at Foodie Zone. Our menu is a symphony of flavors, carefully crafted to tantalize your taste buds. From savory appetizers to mouthwatering entrees and decadent desserts, each dish is a masterpiece. Join us for an unforgettable dining experience that celebrates the art of gastronomy.'}/>

<HeadTitle subheading={'dont miss todays offer'} heading={'Desserts'}></HeadTitle>

           
{
    loading?<div className='grid  justify-items-center my-10'>
         <progress className="progress w-56"></progress>
    </div> :<>
    <MenuByName dessert={dessert} title={' dessert'} menuimage={dessertImg} ></MenuByName>
    <MenuByName dessert={soup} title={' soup'} menuimage={menuimage} ></MenuByName>
    <MenuByName dessert={salad} title={' salad'} menuimage={saladImg} ></MenuByName>
    <MenuByName dessert={pizza} title={' pizza'} menuimage={pizzaimg} ></MenuByName>
    <MenuByName dessert={offered} title={' offered'} menuimage={menuimage} ></MenuByName></>
}
{/* <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div> */}
      
        </div>
    );
};

export default Menupage;