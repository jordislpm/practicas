import React from 'react';

import Business from './Business';
import Img from './Img';

export default function Secction1(props) {
    return(
    <div className="row px-0 mx-0">
      <div className="col my-5 mx-0">
      <Img img={props.img.url}/>
      </div>
      <div className="col my-5 mx-0">
      <Business {...props.businessData}/>
      </div>
    </div>
    )
  }