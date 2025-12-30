// Import necessary React library
import React from 'react';
// Import Syncfusion chart components for bar chart visualization
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
         Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

// Import bar chart data and axis configurations
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
// Import ChartsHeader component for consistent header styling
import { ChartsHeader } from '../../components';
// Import context to access theme mode
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  // Get current theme mode (light/dark) from context
  const { currentMode } = useStateContext();

  return (
    // Main container with responsive spacing and conditional dark/light theme styling
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* Header component with category and title */}
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      {/* Chart container with full width */}
      <div className="w-full">
        <ChartComponent
          id="charts"
          // Apply X-axis configuration from dummy data (category type)
          primaryXAxis={barPrimaryXAxis}
          // Apply Y-axis configuration from dummy data (numeric values)
          primaryYAxis={barPrimaryYAxis}
          // Remove border around chart area for cleaner design
          chartArea={{ border: { width: 0 } }}
          // Enable tooltips for better user interaction
          tooltip={{ enable: true }}
          // Set chart background based on current theme
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          // Configure legend with white background
          legendSettings={{ background: 'white' }}
        >
          {/* Inject required chart services */}
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          {/* Series collection directive for defining data series */}
          <SeriesCollectionDirective>
            {/* Map through bar chart series data to create multiple bar series (Gold, Silver, Bronze) */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;