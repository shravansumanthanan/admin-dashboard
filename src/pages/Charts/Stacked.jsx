// Import React library
import React from 'react';

// Import shared chart components - ChartsHeader for title and Stacked renamed as StackedChart for visualization
import { ChartsHeader, Stacked as StackedChart } from '../../components';

// Stacked component that wraps the reusable StackedChart component
const Stacked = () => (
  // Main container with responsive spacing and conditional dark/light theme styling
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* Header component displaying the chart category and title */}
    <ChartsHeader category="Stacked" title="Revenue Breakdown" />
    {/* Container with full width for the StackedChart component */}
    <div className="w-full">
      {/* Reusable StackedChart component that contains the actual chart implementation
          This component handles the visualization of stacked data series (budget vs expense) */}
      <StackedChart />
    </div>
  </div>
);

export default Stacked;