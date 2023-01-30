import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Root from './components/Root';
import Carousels from './components/Carousels';
import Places from './components/Places';
import PlaceDetails from './components/PlaceDetails';
import ErrorPage from './components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextPlaces from './components/ContextPlaces';
const spots = [
  {id:1,title:'The Taj Mahal, Agra',
  src:'https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg',
  details:'The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal it also houses the tomb of Shah Jahan himself.'
  },
  {id:2,title:'The Holy City of Varanasi',
  src:'https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg',
  details:'Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the citys winding streets are some 2,000 temples, including Kashi Vishwanath, the Golden Temple, dedicated to the Hindu god Shiva'},
  {id:3,title:'Mumbai: The Gateway of India',
  src:'https://www.planetware.com/photos-large/IND/india-top-attractions-gateway-india.jpg',
  details:'The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain'}
];

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Root/>, errorElement:<ErrorPage/>,children:[
      { index:true,
        element:<Carousels/>
        },
      {
        path:'places',
        element:<Places/>
      },
      {
        path:'places/:id',
        element:<PlaceDetails/>
      }
      
    ]}

  ]);
  return (
    <ContextPlaces.Provider value={spots} >
    <RouterProvider router={router}>

    </RouterProvider>
    </ContextPlaces.Provider>
  );
}

export default App;
