import { useContext } from 'react';
import ContextPlaces from './ContextPlaces';
import Place from './Place';
import classes from './Places.module.css';
const Places = ()=>{
    const ctx = useContext(ContextPlaces);
    const DUMMY_ITEMS = ctx;
return(

    <div className={classes.places}>
        {DUMMY_ITEMS.map(item =>   
        <Place key={item.id} 
        id={item.id} 
        title = {item.title} 
        src={item.src} />)}
    </div>
);
};
export default Places;