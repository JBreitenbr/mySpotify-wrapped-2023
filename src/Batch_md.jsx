import './App.css'
import {Tooltip} from 'react-tooltip';
import {tops} from './spotiData.js';
export default function Batch_md(props) {
  let top1=tops.slice(props.num*20-20,props.num*20-10);
  let top2=tops.slice(props.num*20-10,props.num*20);
  const topItems1 = top1.map(
(item,index) => {
return (
  <li key={index} className="track-item"  ><a data-tooltip-id={`tooltip1_${index}`} key={index}><div className="list-wrapper">
    <div className="track-number"
      style={index<9&&props.num==1?{marginLeft:"18px",fontSize:"1.15em"}:{marginLeft:"10px",fontSize:"1.15em"}}
      >{index+`${props.num*20-20}`*1+1}</div>
    <img className="track-album" src={item.pic} />
    <div className="track-info">
    <div className="track-name" style={index==3&&props.num==3||index==1&&props.num==5?{fontSize:"0.9em"}:{fontSize:"1.1em"}}
      >{item.track}</div>
     <div className="track-artist">{item.artist}</div></div></div> <Tooltip id={`tooltip1_${index}`} key={index}>
  <div className="tooltip">
    <ul>
      <li>Popularity on Spotify: {item.popularity}</li>
      <li>Released in: {item.release_year}</li>
      <li>Danceability: {item.danceability}</li>
      <li>Energy: {item.energy}</li>
      <li>Loudness: {item.loudness}</li><li>Speechiness: {item.speechiness}</li>
      <li>Acousticness: {item.acousticness}</li>
      <li>Instrumentalness: {item.instrumentalness}</li>
      <li>Liveness: {item.liveness}</li>
      <li>Valence: {item.valence}</li>
      <li>Tempo: {item.tempo}</li>
      <li>Duration (ms): {item.duration_ms}</li>

    </ul></div></Tooltip></a>
  </li>
            )
        });
  const topItems2 = top2.map(
(item,index) => {
return (
  <li key={index} className="track-item"  ><a data-tooltip-id={`tooltip2_${index}`} key={index}><div className="list-wrapper">
    <div className="track-number" style={index<9&&props.num==5?{marginLeft:"15px","fontSize":"1.15em"}:{marginLeft:"7px","fontSize":"1.15em"}}>{index+`${props.num*20-10}`*1+1 }</div>
    <img className="track-album" src={item.pic} />
    <div className="track-info">
    <div className="track-name" style={index==6&&props.num==1||index==6&&props.num==5?{fontSize:"0.9em"}:{fontSize:"1.1em"}} >{item.track}</div>
     <div className="track-artist">{item.artist}</div></div></div>   <Tooltip id={`tooltip2_${index}`} key={index}>
  <div className="tooltip">
    <ul>
      <li>Popularity on Spotify: {item.popularity}</li>
      <li>Released in: {item.release_year}</li>
      <li>Danceability: {item.danceability}</li>
      <li>Energy: {item.energy}</li>
      <li>Loudness: {item.loudness}</li><li>Speechiness: {item.speechiness}</li>
      <li>Acousticness: {item.acousticness}</li>
      <li>Instrumentalness: {item.instrumentalness}</li>
      <li>Liveness: {item.liveness}</li>
      <li>Valence: {item.valence}</li>
      <li>Tempo: {item.tempo}</li>
      <li>Duration (ms): {item.duration_ms}</li>

    </ul></div></Tooltip></a>
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