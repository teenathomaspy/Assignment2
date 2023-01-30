
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './Places.module.css';


 const Place=(props) =>{
    const [clicked,setClicked] = useState(false);
    const onDetailHandler = ()=>{

    };
  return (
   
      <div className={classes.place} onClick={onDetailHandler}>
            <img className={classes.placeimg} src= {props.src}  alt ={props.title}></img>
            <p>{props.title}</p>
            
            <Link to={`/places/${props.id}`}>Details</Link>
            
        </div>
  
  );
}
export default Place;