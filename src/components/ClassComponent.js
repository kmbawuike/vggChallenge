import React, {Component, Fragment} from 'react';
import FunctionalComponent from './FunctionalComponent'

class ClassComponent extends Component{
  render(){
    return(
      <Fragment>
        <FunctionalComponent />
      </Fragment>
    )
  }
}

export default ClassComponent;