import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";


export default function Navbar(){


  return (
    
    <div className="navbar" >
      <div className="links">
        <Link to="/"></Link>
        <Link to="/srcdoc"></Link>
        <Link style={{width:"4px"}} to="/musical-palm-tree"></Link>
        {window.innerWidth<768?       (<><Link to="/batch1">&nbsp;&nbsp;1-10</Link>
        <Link to="/batch2">11-20</Link>
        <Link to="/batch5">21-30</Link>
        <Link to="/batch4">31-40</Link>
        <Link to="/batch5">41-50</Link>
        <Link to="/batch6">51-60</Link>
        <Link to="/batch7">61-70</Link>
        <Link to="/batch8">71-80</Link>
        <Link to="/batch9">81-90</Link>
        <Link to="/batch10">91-100 </Link></>):
      (<><Link to="/batch_md_1">1-20</Link><Link to="/batch_md_2">21-40</Link>
  <Link to="/batch_md_3">41-60</Link><Link to="/batch_md_4">61-80</Link>
<Link to="/batch_md_5">81-100</Link>
      </>)}
      </div>
</div>
  );
}