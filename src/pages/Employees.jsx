/* 
 * Importing the React library for building UI components
 */
import React from 'react';
/* 
 * Importing SyncFusion grid components and features
 * These components create the data grid with search and pagination
 */
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

/* 
 * Importing employee data and column configurations from dummy data file
 */
import { employeesData, employeesGrid } from '../data/dummy';
/* 
 * Importing Header component for page title
 */
import { Header } from '../components';

/* 
 * Employees component - renders a data grid showing employee information
 * with features like search and pagination
 */
const Employees = () => {
  /* Setting up toolbar with only Search functionality */
  const toolbarOptions = ['Search'];

  /* Configuration object for grid editing capabilities */
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    /* Container div with responsive margin, padding, and styling */
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Header component showing page category and title */}
      <Header category="Page" title="Employees" />
      
      {/* 
       * SyncFusion Grid component for displaying employees data
       * - Includes search functionality via toolbar
       * - Provides pagination with 5 pages per view
       * - Allows sorting, editing, and deleting records
       */}
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        {/* Container for column definitions */}
        <ColumnsDirective>
          {/* Maps through employeesGrid array to create column configurations */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        
        {/* Injects required services/features into the grid */}
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};

/* Exports the Employees component for use in other files */
export default Employees;