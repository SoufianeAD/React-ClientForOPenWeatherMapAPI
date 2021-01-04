import React from 'react';
import _ from "lodash";
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart = (props) => {
    const data = _.sum(props.data)/props.data.length;
    return (
       <div>
           <Sparklines height={100} width={140} data={props.data} >
               <SparklinesLine color={props.color} />
               <SparklinesReferenceLine type="avg" />
           </Sparklines>
           <div className="text-center">{data} {props.units}</div>
       </div>
    );
}

export default Chart;