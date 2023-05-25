import React, { useState } from 'react';
import Cover from '../shared/Cover';
import orderfood from '../../assets/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuHook from '../../hooks/MenuHook';
import FoodCard from '../shared/FoodCard';
const Order = () => {
    const [menu]=MenuHook()
    const [tabindex,setTabindex]=useState(0)
    const dessert=menu.filter(item=>item.category==='dessert')
const soup=menu.filter(item=>item.category==='soup')
const salad=menu.filter(item=>item.category==='salad')
const pizza=menu.filter(item=>item.category==='pizza')
const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
            <Cover backgroundImage={orderfood} title={'order food'}></Cover>
            <Tabs>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Dessert</Tab>
      <Tab>Soup</Tab>
 
    </TabList>

    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-7 my-5'>
    {
        salad.map(item=><FoodCard key={item._id} item={item} ></FoodCard>)
     }</div>    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-7 my-5'>
    {
        pizza.map(item=><FoodCard key={item._id} item={item} ></FoodCard>)
     }</div>  
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-7 my-5'>
    {
        dessert.map(item=><FoodCard key={item._id} item={item} ></FoodCard>)
     }</div>  
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-7 my-5'>
    {
        soup.map(item=><FoodCard key={item._id} item={item} ></FoodCard>)
     }</div>  
    </TabPanel>

  </Tabs>
        </div>
    );
};

export default Order;