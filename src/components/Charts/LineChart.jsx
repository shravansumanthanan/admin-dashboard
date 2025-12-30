import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  
  // Custom palette for dark mode
  const darkModeColors = ['#4ade80', '#60a5fa', '#f97316', '#8b5cf6', '#ec4899', '#facc15'];

  // Modified axes for dark mode
  const modifiedXAxis = {
    ...LinePrimaryXAxis,
    labelStyle: { color: currentMode === 'Dark' ? '#e9ecef' : '#343a40' },
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 }
  };
  
  const modifiedYAxis = {
    ...LinePrimaryYAxis,
    labelStyle: { color: currentMode === 'Dark' ? '#e9ecef' : '#343a40' },
    majorGridLines: { width: currentMode === 'Dark' ? 0.5 : 1, color: currentMode === 'Dark' ? '#545454' : '#ededed' },
    minorGridLines: { width: 0 }
  };

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={modifiedXAxis}
      primaryYAxis={modifiedYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ 
        background: currentMode === 'Dark' ? '#33373E' : 'white',
        textStyle: { color: currentMode === 'Dark' ? '#fff' : '#333' }
      }}
      palette={currentMode === 'Dark' ? darkModeColors : undefined}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;