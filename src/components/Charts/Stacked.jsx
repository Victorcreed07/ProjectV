import React from 'react'
import Plot from 'react-plotly.js';

const Stacked = ({data,height,width}) => {


  const data1 = [
    {
      x: [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
],
      y: [50, 90, 120, 140, 160, 170, 180, 180, 170, 160, 140, 90],
      name: 'Duty Ashore',
      type: 'bar',
    },
    {
      x: [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
],
      y: [450, 410, 380, 360, 340, 330, 320, 320, 330, 340, 360, 410],
      name: 'Liberty',
      type: 'bar',
    },
  ];

  const layout = {
    width:width,
    barmode: 'group',
    title: 'Monthly Notice',
    bargap: 0.2, // Increase the bargap for wider bars
    bargroupgap: 0.1, // Increase the bargroupgap for wider groups
    xaxis: {
      title: 'Months',
    },
    yaxis: {
      title: 'Count',
    },
  };


// const layout = {
// width: width,
//   height: height,
//   barmode: 'stack',
//   xaxis: {
    
//     showgrid: false,
//     showticklabels: false,
//   },
//   yaxis: {
    
//     showgrid: false,
//     showticklabels: false,
//   },
//    margin: {
//     l: 50, // left margin
//     r: 50, // right margin
//     t: 50, // top margin
//     b: 50, // bottom margin
//   },
// };


	return (
		<Plot
      data={data1}
      layout={layout}
     
    />
		)
}

export default Stacked