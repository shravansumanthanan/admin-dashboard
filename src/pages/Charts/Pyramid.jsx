// Import React library
import React from 'react';
// Import Syncfusion accumulation chart components for pyramid visualization
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, 
         AccumulationSeriesDirective, Inject, AccumulationLegend, 
         AccumulationDataLabel, AccumulationTooltip, PyramidSeries, 
         AccumulationSelection } from '@syncfusion/ej2-react-charts';

// Import pyramid data from dummy data
import { PyramidData } from '../../data/dummy';
// Import context to access theme mode
import { useStateContext } from '../../contexts/ContextProvider';
// Import ChartsHeader component for consistent header styling
import { ChartsHeader } from '../../components';

const Pyramid = () => {
  // Get current theme mode (light/dark) from context
  const { currentMode } = useStateContext();
  
  // Custom color palettes for different theme modes
  // Dark mode uses brighter colors for better visibility on dark background
  const darkModeColors = ['#4ade80', '#60a5fa', '#f97316', '#8b5cf6', '#ec4899', '#facc15'];
  // Light mode uses more muted colors that work well on light background
  const lightModeColors = ['#00bdae', '#357cd2', '#e94649', '#f6b53f', '#6faab0', '#ff9966'];

  return (
    // Main container with responsive spacing and conditional dark/light theme styling
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* Header component with category and title */}
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      {/* Chart container with full width */}
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          // Configure legend with theme-aware styling
          legendSettings={{ 
            background: currentMode === 'Dark' ? '#33373E' : 'white',
            textStyle: { color: currentMode === 'Dark' ? '#fff' : '#333' }
          }}
          // Enable tooltips for better user interaction
          tooltip={{ enable: true }}
          // Set chart background based on current theme
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          // Use appropriate color palette based on theme
          palettes={currentMode === 'Dark' ? darkModeColors : lightModeColors}
          // Enable smart labels to prevent label overlap
          enableSmartLabels={true}
          // Set chart dimensions
          width="100%"
          height="500px"
        >
          {/* Inject required accumulation chart services */}
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          
          {/* Series collection directive for defining pyramid series */}
          <AccumulationSeriesCollectionDirective>
            {/* Single pyramid series with food comparison data */}
            <AccumulationSeriesDirective
              name="Food"                       // Series name
              dataSource={PyramidData}          // Data source for the pyramid
              xName="x"                         // Field for category names
              yName="y"                         // Field for values
              type="Pyramid"                    // Chart type - pyramid
              width="45%"                       // Width of the pyramid
              height="80%"                      // Height of the pyramid
              neckWidth="15%"                   // Width of pyramid neck (narrower part)
              gapRatio={0.03}                   // Gap between pyramid segments
              explode                           // Enable segment explosion on click
              // Configure empty point settings
              emptyPointSettings={{ mode: 'Drop', fill: currentMode === 'Dark' ? '#60a5fa' : 'red' }}
              // Configure data labels that appear on pyramid segments
              dataLabel={{
                visible: true,                  // Show data labels
                position: 'Inside',             // Position labels inside segments
                name: 'text',                   // Field for label text
                font: {
                  fontWeight: '600',            // Bold text for readability
                  color: currentMode === 'Dark' ? '#fff' : '#000' // Theme-aware text color
                }
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;