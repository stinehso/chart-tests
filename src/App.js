import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CanvasJSReact from './lib/canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title:{
        text: "Simple Column Chart with Index Labels"
    },
    data: [{
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
            { x: 10, y: 71 },
            { x: 20, y: 55 },
            { x: 30, y: 50 },
            { x: 40, y: 65 },
            { x: 50, y: 71 },
            { x: 60, y: 68 },
            { x: 70, y: 38 },
            { x: 80, y: 92, indexLabel: "Highest" },
            { x: 90, y: 54 },
            { x: 100, y: 60 },
            { x: 110, y: 21 },
            { x: 120, y: 49 },
            { x: 130, y: 36 }
        ]
    }]
}

const options2 = {
    exportEnabled: true,
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
       }]
   }

   const options3 = {
				animationEnabled: true,
				title:{
					text: "Number of New Customers"
				},
				axisY : {
					title: "Number of Customers",
					includeZero: false
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "spline",
					name: "2016",
					showInLegend: true,
					dataPoints: [
						{ y: 155, label: "Jan" },
						{ y: 150, label: "Feb" },
						{ y: 152, label: "Mar" },
						{ y: 148, label: "Apr" },
						{ y: 142, label: "May" },
						{ y: 150, label: "Jun" },
						{ y: 146, label: "Jul" },
						{ y: 149, label: "Aug" },
						{ y: 153, label: "Sept" },
						{ y: 158, label: "Oct" },
						{ y: 154, label: "Nov" },
						{ y: 150, label: "Dec" }
					]
				},
				{
					type: "spline",
					name: "2017",
					showInLegend: true,
					dataPoints: [
						{ y: 172, label: "Jan" },
						{ y: 173, label: "Feb" },
						{ y: 175, label: "Mar" },
						{ y: 172, label: "Apr" },
						{ y: 162, label: "May" },
						{ y: 165, label: "Jun" },
						{ y: 172, label: "Jul" },
						{ y: 168, label: "Aug" },
						{ y: 175, label: "Sept" },
						{ y: 170, label: "Oct" },
						{ y: 165, label: "Nov" },
						{ y: 169, label: "Dec" }
					]
				}]
		}

const generateDataPoints = (noOfDps) => {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: xVal,y: yVal});
			xVal++;
		}
		return dps;
	}

    const options4 = {
    			theme: "light2", // "light1", "dark1", "dark2"
    			animationEnabled: true,
    			zoomEnabled: true,
    			title: {
    				text: "Try Zooming and Panning"
    			},
    			axisY: {
    				includeZero: false
    			},
    			data: [{
    				type: "area",
    				dataPoints: generateDataPoints(500)
    			}]
    		}

function App() {
  return (
    <div className="App">
        <div className='chartBox'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        <div className='chartBox'>
			<CanvasJSChart options = {options2}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        <div className='chartBox'>
			<CanvasJSChart options = {options3}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        <div className='chartBox'>
			<CanvasJSChart options = {options4}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    </div>
  );
}

export default App;
