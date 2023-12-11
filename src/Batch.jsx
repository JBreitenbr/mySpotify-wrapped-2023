import './App.css'
import {Tooltip} from 'react-tooltip';
import {tops} from './spotiData.js';
export default function Batch(props) {
  let sub=tops.slice(props.num*10-10,props.num*10);

  const topItems = sub.map(
(item,index) => {
return (
 <><li key={index} className="track-item"  ><a data-tooltip-id={`tooltip_${index}`} key={index}><div className="list-wrapper">
    <div className="track-number" style={index<9&&(props.num==1||props.num==10)?{marginLeft:"12px"}:{marginLeft:"4px"}}>{index+`${props.num*10-10}`*1+1}</div>
    <img className="track-album" src={item.pic} />
    <div className="track-info">
    <div className="track-name" style={index==6&&props.num==2||index==3&&props.num==5||index==1&&props.num==9?{fontSize:"12px"}:{fontSize:"14px"}}>{item.track}</div>
     <div className="track-artist">{item.artist}</div></div></div> 
  <Tooltip id={`tooltip_${index}`} key={index}>
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

    </ul></div></Tooltip></a></li>

</>
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