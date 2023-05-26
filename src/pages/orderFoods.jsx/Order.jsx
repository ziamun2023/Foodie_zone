import React, { useState } from 'react';
import Cover from '../shared/Cover';
import orderfood from '../../assets/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuHook from '../../hooks/MenuHook';
import FoodCard from '../shared/FoodCard';
import OrderedTab from './OrderedTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    // const categories = ['salad', 'pizza', 'dessert', 'soup',"offered"];

    // const {category}=useParams()
    // const initialindex=categories.indexOf({category})
    // console.log(category,initialindex)
    const [menu,loading]=MenuHook()
    const [tabindex,setTabindex]=useState(0)
    console.log(tabindex)
    const dessert=menu.filter(item=>item.category==='dessert')
const soup=menu.filter(item=>item.category==='soup')
const salad=menu.filter(item=>item.category==='salad')
const pizza=menu.filter(item=>item.category==='pizza')
const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
            <Cover backgroundImage={orderfood} title={'order food'}></Cover>
      <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>offered</Tab>
     
        </TabList>
    
        <TabPanel>
        <OrderedTab items={salad}/>  </TabPanel>
        <TabPanel>
        <OrderedTab items={pizza}/>  </TabPanel> 
       
        <TabPanel>
        <OrderedTab items={dessert}/>  
        </TabPanel>
        <TabPanel>
        <OrderedTab items={soup}/>  
        </TabPanel>
        <TabPanel>
        <OrderedTab items={offered}/>  
        </TabPanel>
    
      </Tabs>
         
        </div>
    );
};

export default Order;