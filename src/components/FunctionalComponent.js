import React, {Fragment} from 'react';
import Garri from '../assets/images/garri.jpg'
import Beans from '../assets/images/beans.jpg'
import Rice from '../assets/images/rice.jpg'
import Semo from '../assets/images/semo.jpg'
import '../assets/styles/main.css'


const FunctionalComponent = ()=>{

  const foods = [
    { 
      name: "Garri", description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      image: Garri  
    },
     {
      name: "Beans", description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      image: Beans
    },
    {
      name: "Rice", description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      image: Rice
    },
    {
      name: "Semo", description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      image: Semo
    }
  ]
  return(
    <Fragment>
      <div className="main-container">
        {
          foods.map(food =>
            <div className="food-container">
              <img src={food.image} />
              <p>{food.description}</p>
              <h2>{food.name}</h2>
            </div>
          )
        }
      </div>
  
    </Fragment>
  )
}

export default FunctionalComponent;