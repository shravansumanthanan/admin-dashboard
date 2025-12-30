/* 
 * Importing React library for creating UI components
 */
import React from 'react';
/* 
 * Importing icons from react-icons
 */
import { GoDot } from 'react-icons/go';
/* 
 * Importing custom chart and UI components
 */
import { Stacked, Button, SparkLine } from '../components';
/* 
 * Importing sample data from dummy data file
 */
import { earningData, SparklineAreaData } from '../data/dummy';
/* 
 * Importing context hook for global state
 */
import { useStateContext } from '../contexts/ContextProvider';

/* 
 * Ecommerce component - the dashboard homepage with charts and statistics
 */
const Ecommerce = () => {
  /* Extracting currentColor from context state */
  const { currentColor } = useStateContext();

  return (
    /* Main container with top margin */
    <div className='mt-12'>
      {/* Flex container for earnings section with responsive layout */}
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        {/* Earnings card with background pattern and responsive styling */}
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          {/* Inner container for earnings content */}
          <div>
            {/* Earnings label text */}
            <p className="font-bold text-gray-400">Earnings</p>
            {/* Earnings amount text */}
            <p className="text-2xl">$63,448.78</p>
          </div>
        </div>
        {/* Container for download button */}
        <div className="mt-6">
          {/* Button component with theme color */}
          <Button
            color="white"
            bgColor={currentColor}
            text="Download"
            borderRadius="10px"
            size="md"
          />
        </div>
      </div>

      {/* Flex container for stats cards */}
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {/* Mapping through earning data array to create stat cards */}
        {earningData.map((item) => (
          /* Individual stat card with styling */
          <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
            {/* Icon button with dynamic styling */}
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              {/* Displaying the icon for this stat */}
              {item.icon}
            </button>
            {/* Paragraph for stat amounts */}
            <p className="mt-3">
              {/* Amount text */}
              <span className="text-lg font-semibold">{item.amount}</span>
              {/* Percentage text with dynamic color */}
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            {/* Title text for this stat */}
            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Flex container for revenue section */}
      <div className="flex gap-10 flex-wrap justify-center">
        {/* Revenue updates card */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          {/* Header with title and legend */}
          <div className="flex justify-between">
            {/* Section title */}
            <p className="font-semibold text-xl">Revenue Updates</p>
            {/* Legend items container */}
            <div className="flex items-center gap-4">
              {/* Expense legend item */}
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  {/* Dot icon for expense */}
                  <GoDot />
                </span>
                {/* Expense label */}
                <span>Expense</span>
              </p>
              {/* Budget legend item */}
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  {/* Dot icon for budget */}
                  <GoDot />
                </span>
                {/* Budget label */}
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Container for charts and stats */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            {/* Left section with stats and sparkline */}
            <div className="border-r-1 border-color m-4 pr-10">
              {/* Budget amount container */}
              <div>
                {/* Budget text with percentage */}
                <p>
                  {/* Budget amount */}
                  <span className="text-3xl font-semibold">$93,438</span>
                  {/* Budget percentage indicator */}
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                {/* Budget label */}
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              {/* Expense amount container */}
              <div className="mt-8">
                {/* Expense amount */}
                <p className="text-3xl font-semibold">$48,487</p>
                {/* Expense label */}
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              {/* SparkLine chart container */}
              <div className="mt-5">
                {/* SparkLine chart component with data */}
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>

              {/* Download report button container */}
              <div className="mt-10">
                {/* Button component for downloading report */}
                <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" />
              </div>
            </div>

            {/* Right section with stacked chart */}
            <div>
              {/* Stacked chart component */}
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Exports the Ecommerce component for use in other files */
export default Ecommerce;