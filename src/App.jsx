import './App.css'
import {tops} from './spotiData.js';
import {useState,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import Navbar from './Navbar';
import Batch from './Batch';
import Batch_md from './Batch_md';
export default function App() {
  let paths=["/","/batch1","/batch2","/batch3","/batch4","/batch5","/batch6","/batch7","/batch8","/batch9","/batch10"];
  let paths2=["/","/batch_md_1","/batch_md_2","/batch_md_3","/batch_md_4","/batch_md_5"]
  let arr=[1,2,3,4,5,6,7,8,9,10];
  let arr2=[1,2,3,4,5];
const Items=arr.map((item,index) => { return (
      <Route key={index} path= {paths[item]} element={<Batch num={item} />}/>
    )});
const Items2=arr.map((item,index) => { return (
      <Route key={index} path= {paths2[item]} element={<Batch_md num={item} />}/>
    )});
  return(<>
    <Router>
    <Navbar/>
  <Routes>
    {window.innerWidth<768?
  (<><Route path="/" element={<Batch num={1}/>}/><Route path="/mySpotify-wrapped-2023" element={<Batch num={1}/>}/>
  <Route path="/srcdoc" element={<Batch num={1}/>}/>{Items}</>):
  (<><Route path="/" element={<Batch_md num={1}/>}/><Route path="/mySpotify-wrapped-2023" element={<Batch_md num={1}/>}/>
  <Route path="/srcdoc" element={<Batch_md num={1}/>}/>{Items2}</>)}
  </Routes>
  </Router>
  </>)
}
