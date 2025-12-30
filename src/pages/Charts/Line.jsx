// Import React library
import React from 'react';

// Import shared chart components - ChartsHeader for title and LineChart for visualization
import { ChartsHeader, LineChart } from '../../components';

// Line component that wraps the reusable LineChart component
const Line = () => (
  // Main container with responsive spacing and conditional dark/light theme styling
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* Header component displaying the chart category and title */}
    <ChartsHeader category="Line" title="Inflation Rate" />
    {/* Container with full width for the LineChart component */}
    <div className="w-full">
      {/* Reusable LineChart component that contains the actual chart implementation */}
      <LineChart />
    </div>
  </div>
);

export default Line;