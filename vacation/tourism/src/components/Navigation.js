import { Fragment } from 'react';
import { NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';
const Navigation = () =>{
return (
<Fragment>
    <div className={classes.navigation}>
   <ul className={classes.list}>
    <li>
        <NavLink to='/places' className={({isActive})=>isActive? classes.active:undefined }>
            Places
        </NavLink>
    </li>
    <li>
    <NavLink to='/' className={({isActive})=>isActive? classes.active:undefined}>
            Carousel
        </NavLink>
    </li>
   </ul>
   </div>
</Fragment>
);
};
export default Navigation;