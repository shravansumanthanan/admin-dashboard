// Import React library
import React from 'react';

// Import pie chart data from dummy data file
import { pieChartData } from '../../data/dummy';
// Import shared chart components - ChartsHeader for title and Pie renamed as PieChart for visualization
import { ChartsHeader, Pie as PieChart } from '../../components';

// Pie component that uses the reusable PieChart component
const Pie = () => (
  // Main container with responsive spacing and conditional dark/light theme styling
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* Header component displaying the chart category and title */}
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    {/* Container with full width for the PieChart component */}
    <div className="w-full">
      {/* 
        Reusable PieChart component that contains the actual chart implementation 
        - id: Unique identifier for the chart
        - data: Pie chart data from dummy data file (expense categories)
        - legendVisiblity: Control to show/hide the chart legend
        - height: Set to full to use maximum available height
      */}
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;