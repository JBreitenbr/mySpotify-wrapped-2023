import './App.css'
import {tops} from './spotiData.js';
export default function Batch_md(props) {
  let top1=tops.slice(props.num*20-20,props.num*20-10);
  let top2=tops.slice(props.num*20-10,props.num*20);
  const topItems1 = top1.map(
(item,index) => {
return (
  <li key={index} className="track-item"  ><div className="list-wrapper">
    <div className="track-number"
      style={index<9&&props.num==1?{marginLeft:"18px",fontSize:"1.15em"}:{marginLeft:"10px",fontSize:"1.15em"}}
      >{index+`${props.num*20-20}`*1+1}</div>
    <img className="track-album" src={item.pic} />
    <div className="track-info">
    <div className="track-name" style={index==3&&props.num==3||index==1&&props.num==5?{fontSize:"0.9em"}:{fontSize:"1.1em"}}
      >{item.track}</div>
     <div className="track-artist">{item.artist}</div></div></div> 
  </li>
            )
        });
  const topItems2 = top2.map(
(item,index) => {
return (
  <li key={index} className="track-item"  ><div className="list-wrapper">
    <div className="track-number" style={index<9&&props.num==5?{marginLeft:"15px","fontSize":"1.15em"}:{marginLeft:"7px","fontSize":"1.15em"}}>{index+`${props.num*20-10}`*1+1 }</div>
    <img className="track-album" src={item.pic} />
    <div className="track-info">
    <div className="track-name" style={index==6&&props.num==1||index==6&&props.num==5?{fontSize:"0.9em"}:{fontSize:"1.1em"}} >{item.track}</div>
     <div className="track-artist">{item.artist}</div></div></div> 
  </li>
            )
        });

  return (

    <div className="outer-wrapper">  
    <div style={{display:"flex"}}>
    <ol>
      {topItems1}
    </ol>
    <ol>
      {topItems2}
    </ol>
    </div></div>
  )
}