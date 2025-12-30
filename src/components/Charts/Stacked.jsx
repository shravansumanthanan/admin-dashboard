import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();
  
  // Custom palette for dark mode
  const darkModeColors = ['#4ade80', '#60a5fa', '#f97316', '#8b5cf6', '#ec4899', '#facc15'];

  // Modified axes for dark mode
  const modifiedXAxis = {
    ...stackedPrimaryXAxis,
    labelStyle: { color: currentMode === 'Dark' ? '#e9ecef' : '#343a40' },
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 }
  };
  
  const modifiedYAxis = {
    ...stackedPrimaryYAxis,
    labelStyle: { color: currentMode === 'Dark' ? '#e9ecef' : '#343a40' },
    majorGridLines: { width: currentMode === 'Dark' ? 0.5 : 1, color: currentMode === 'Dark' ? '#545454' : '#ededed' },
    minorGridLines: { width: 0 }
  };

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={modifiedXAxis}
      primaryYAxis={modifiedYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ 
        background: currentMode === 'Dark' ? '#33373E' : 'white',
        textStyle: { color: currentMode === 'Dark' ? '#fff' : '#333' }
      }}
      palette={currentMode === 'Dark' ? darkModeColors : undefined}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;