// Import necessary React library
import React from 'react';
// Import Syncfusion chart components for area chart visualization
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
         DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';

// Import ChartsHeader component for consistent header styling
import { ChartsHeader } from '../../components';
// Import area chart data and axis configurations
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
// Import context to access theme mode
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  // Get current theme mode (light/dark) from context
  const { currentMode } = useStateContext();

  return (
    // Main container with responsive spacing and conditional dark/light theme styling
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* Header component with category and title */}
      <ChartsHeader category="Area" title="Inflation Rate in percentage" />
      
      {/* Chart container with full width */}
      <div className="w-full">
        <ChartComponent
          id="charts"
          // Apply X-axis configuration from dummy data (DateTime type)
          primaryXAxis={areaPrimaryXAxis}
          // Apply Y-axis configuration from dummy data (percentage values)
          primaryYAxis={areaPrimaryYAxis}
          // Remove border around chart area for cleaner design
          chartArea={{ border: { width: 0 } }}
          // Set chart background based on current theme
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          // Configure legend with white background
          legendSettings={{ background: 'white' }}
        >
          {/* Inject required chart services */}
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          
          {/* Series collection directive for defining data series */}
          <SeriesCollectionDirective>
            {/* Map through area chart series data to create multiple area series */}
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;