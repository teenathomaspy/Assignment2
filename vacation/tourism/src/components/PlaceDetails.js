import {useParams} from 'react-router-dom';
import ContextPlaces from './ContextPlaces';
import { Fragment, useContext } from 'react';
import classes from './PageDetails.module.css';

const PlaceDetails = () =>{
    const param = useParams();
    const ctx = useContext(ContextPlaces);
    let spotDetails =[];
  
 
        spotDetails =  ctx.find(item=> item.id.toString() === param.id );
   
    console.log(spotDetails);
return(
    <Fragment>

<div className={classes.pageDetails}>
    <div className={classes.header}>
        <h3>{spotDetails.title} </h3>
    </div>
    <div className={classes.details}>
        <img src ={spotDetails.src} alt={spotDetails.title} />
        <p>{spotDetails.details}</p>
    </div>
</div>
</Fragment>
);
};
export default PlaceDetails;