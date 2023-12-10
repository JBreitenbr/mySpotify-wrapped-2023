import './App.css'
import {tops} from './spotiData.js';
export default function Batch(props) {
  let sub=tops.slice(props.num*10-10,props.num*10);

  const topItems = sub.map(
(item,index) => {
return (
  <li key={index} className="track-item"  ><div className="list-wrapper">
    <div className="track-number" style={index<9&&(props.num==1||props.num==10)?{marginLeft:"12px"}:{marginLeft:"4px"}}>{index+`${props.num*10-10}`*1+1}</div>
    <img className="track-album" src={item.pic} />
    <div className="track-info">
    <div className="track-name" style={index==6&&props.num==2||index==3&&props.num==5||index==1&&props.num==9?{fontSize:"12px"}:{fontSize:"14px"}}>{item.track}</div>
     <div className="track-artist">{item.artist}</div></div></div> 
  </li>
            )
        });

  return (

    <div className="outer-wrapper">   
    <ol>
      {topItems}
    </ol>
    </div>
  )
}