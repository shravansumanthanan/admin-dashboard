// Import React library
import React from 'react';
// Import Syncfusion chart components for financial chart visualization
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
         HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';

// Import financial chart data and axis configurations
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
// Import context to access theme mode
import { useStateContext } from '../../contexts/ContextProvider';
// Import ChartsHeader component for consistent header styling
import { ChartsHeader } from '../../components';

// Define start date for filtering the financial data
const date1 = new Date('2017, 1, 1');

// Function to filter financial data starting from date1
// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x >= date1) {
    // Return data points after the specified date
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
// Apply filter to get only relevant financial data points
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  // Get current theme mode (light/dark) from context
  const { currentMode } = useStateContext();

  return (
    // Main container with responsive spacing and conditional dark/light theme styling
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* Header component with category and title */}
      <ChartsHeader category="Financial" title="AAPLE Historical" />
      {/* Chart container with full width */}
      <div className="w-full">
        <ChartComponent
          id="charts"
          // Apply X-axis configuration from dummy data (DateTime type for financial timeline)
          primaryXAxis={FinancialPrimaryXAxis}
          // Apply Y-axis configuration from dummy data (price values)
          primaryYAxis={FinancialPrimaryYAxis}
          // Remove border around chart area for cleaner design
          chartArea={{ border: { width: 0 } }}
          // Configure tooltips for financial data inspection
          tooltip={{ enable: true, shared: true }}
          // Enable crosshair for precise data point selection
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          // Set chart background based on current theme
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          {/* Inject required chart services for financial visualization */}
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          
          {/* Series collection directive for defining financial series */}
          <SeriesCollectionDirective>
            {/* Single series for Apple stock data using High-Low (Hilo) chart type */}
            <SeriesDirective
              dataSource={returnValue}     // Filtered financial data
              xName="x"                    // Date field for X-axis
              yName="low"                  // Low price field for Y-axis
              name="Apple Inc"             // Series name shown in legend/tooltip
              type="Hilo"                  // High-Low chart type for stock data
              low="low"                    // Field containing low price values
              high="high"                  // Field containing high price values
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;