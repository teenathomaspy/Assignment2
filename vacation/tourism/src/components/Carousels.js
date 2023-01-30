import ContextPlaces from './ContextPlaces';
import { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './Carousels.module.css';

const Carousels = () =>{
  const ctx= useContext(ContextPlaces);
  const DUMMY_ITEMS = ctx;
return(
    <div className={classes.carouselsOuter}>
  
    <Carousel fade={true}>
      {DUMMY_ITEMS.map(item=>{
        return(
        <Carousel.Item interval={1000} key={item.id}>
        <img
          className={`${classes.carimg} d-block w-100`}
          src={item.src}
          alt={item.title}
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
         
        </Carousel.Caption>
      </Carousel.Item> );
      })}
     
    </Carousel>
    </div>
);
};
export default Carousels;