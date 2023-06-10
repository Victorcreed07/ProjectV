import React,{useState,useEffect} from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import Plot from 'react-plotly.js';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {Link,useNavigate} from "react-router-dom";
import { Stacked, Pie, Button, LineChart, SparkLine } from '../../components';
import { earningData, stackedplot,medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/context';

import money from '../../data/money.png';

const Dashboard = () => {

	const {currentColor} = useStateContext()
  const data1 = [
    {
      values: [500],
      labels: ['All Officers'],
      type: 'pie'
    }
  ];
  const data2 = [
    {
      values: [360,140],
      labels: ['Duty Ashore','Liberty'],
      type: 'pie'
    }
  ];
  const layout12 = {
    width: 400,
    height: 400,
    title: 'All Officers',
    paper_bgcolor: 'rgba(0,0,0,0)', // Transparent background
    plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot area
  };
   const layout13 = {
    width: 400,
    height: 400,
    title: 'Status',
    paper_bgcolor: 'rgba(0,0,0,0)', // Transparent background
    plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot area
  };


  

// 	const isTokenExpired = () => {
//   const token = JSON.parse(localStorage.getItem('myData')).token
//   const expirationTime = JSON.parse(localStorage.getItem('expirationTime'))
//   if (!token || !expirationTime) {
//     return true;
//   }
//   const currentTime = new Date().getTime() / 1000;
//   console.log(currentTime,expirationTime)
//   return currentTime > expirationTime;
// };




// 	useEffect(() => {
//     // Check if the token has expired every minute
//     const interval = setInterval(() => {
//       if (isTokenExpired()) {
//         // Remove the token and its expiration time from local storage
//         localStorage.removeItem('myData');
//         localStorage.removeItem("expirationTime");

//         // Redirect the user to the login page
//        	window.location.reload();
//       }
//     }, 60000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentTime]);





 

  

 




	return (
		 <div className="mt-24">
     <div className="flex flex-wrap lg:flex-nowrap justify-center">
       <div>
      <Plot
        data={data1}
        layout={layout12}
        config={{ displayModeBar: false }} // Optional: Hide mode bar
      />
    </div>
     <div>
      <Plot
        data={data2}
        layout={layout13}
        config={{ displayModeBar: false }} // Optional: Hide mode bar
      />
    </div>
    </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
      
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${money})` }}>
          <div className="flex justify-between items-center"  >
            <div>
              <p className="font-bold text-gray-400">Annual Cost</p>
              <p className="text-2xl">₹938,432,221</p>
            </div>
              
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Monthy Attendance</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Duty Ashore</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Liberty</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            {/*<div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="250" width="250" data={SparklineAreaData} color={currentColor} xaxis='value' yaxis='year' />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>*/}
            <div>
            	<Stacked data={stackedplot} width='700' height='500' />
            </div>
            </div>
      </div>
      </div>
      </div>

		)
}

export default Dashboard