import reactLogo from '../public/assets/react.svg';
import Navbar from './Navbar';

import Card from "./Card";
import Data from "../public/assets/Data";



function App() {
  const dataElements = Data.map(Data => {
    return(
      <Card 
      name = {Data.title}
      place = {Data.location}
      url = {Data.googleMapsUrl}
      start = {Data.startDate}
      end = {Data.endDate}
      desc = {Data.description}
      img = {Data.imageUrl}
      />
    )})
  return (
    <div>
      <Navbar />
      {dataElements}
    </div>
  )
}


export default App
