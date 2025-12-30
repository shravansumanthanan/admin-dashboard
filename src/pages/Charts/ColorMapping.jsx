// Import necessary React library
import React from 'react';
// Import Syncfusion chart components for color mapping visualization
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
         Legend, Category, Tooltip, ColumnSeries, RangeColorSettingsDirective, 
         RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

// Import data and configurations for the color mapping chart
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
// Import ChartsHeader component for consistent header styling
import { ChartsHeader } from '../../components';
// Import context to access theme mode
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  // Get current theme mode (light/dark) from context
  const { currentMode } = useStateContext();

  return (
    // Main container with responsive spacing and conditional dark/light theme styling
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* Header component with category and title */}
      <ChartsHeader category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
      
      {/* Chart container with full width */}
      <div className="w-full">
        <ChartComponent
          id="charts"
          // Apply X-axis configuration from dummy data
          primaryXAxis={ColorMappingPrimaryXAxis}
          // Apply Y-axis configuration from dummy data
          primaryYAxis={ColorMappingPrimaryYAxis}
          // Remove border around chart area for cleaner design
          chartArea={{ border: { width: 0 } }}
          // Configure legend to display color ranges with theme-aware background
          legendSettings={{ mode: 'Range', background: currentMode === 'Dark' ? '#33373E' : 'white' }}
          // Enable tooltips for better user interaction
          tooltip={{ enable: true }}
          // Set chart background based on current theme
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          {/* Inject required chart services */}
          <Inject services={[ColumnSeries, Legend, Tooltip, Category]} />
          
          {/* Series collection directive for defining data series */}
          <SeriesCollectionDirective>
            {/* Single series for USA temperature data */}
            <SeriesDirective
              dataSource={colorMappingData[0]} // Monthly temperature data
              name="USA"                       // Series name
              xName="x"                        // X-axis data field (months)
              yName="y"                        // Y-axis data field (temperature)
              type="Column"                    // Column chart type
              cornerRadius={{                  // Rounded corners for column
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          
          {/* Range color settings directive for temperature color mapping */}
          <RangeColorSettingsDirective>
            {/* Map through temperature ranges to create color bands */}
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective
                key={index}
                label={item.label}    // Temperature range label
                start={item.start}    // Start value of the range
                end={item.end}        // End value of the range
                colors={item.colors}  // Color for this temperature range
              />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;