import React from 'react';

import Business from './Business';
import Img from './Img';

export default function Secction1(props) {
    return(
    <div className="row mx-5 mt-3">
      <div className="col m-4">
      <Img img={props.img.url}/>
      </div>
      <div className="col m-4">
      <Business {...props.businessData}/>
      </div>
    </div>
    )
  }