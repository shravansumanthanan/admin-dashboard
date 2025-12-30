/* 
 * Importing the React library for building UI components
 */
import React from 'react';
/* 
 * Importing SyncFusion grid components and features
 * These provide data grid functionality with sorting, filtering, etc.
 */
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

/* 
 * Importing customer data and column configurations from dummy data file
 */
import { customersData, customersGrid } from '../data/dummy';
/* 
 * Importing Header component for page title
 */
import { Header } from '../components';

/* 
 * Customers component - renders a data grid showing customer information
 * with features like sorting, filtering, selection, etc.
 */
const Customers = () => {
  /* Configuration to maintain selection state between page navigations */
  const selectionsettings = { persistSelection: true };
  /* Setting up toolbar with only Delete functionality */
  const toolbarOptions = ['Delete'];
  /* Configuration object for grid editing capabilities */
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    /* Container div with responsive margin, padding, and styling */
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Header component showing page category and title */}
      <Header category="Page" title="Customers" />
      
      {/* 
       * SyncFusion Grid component for displaying customers data
       * - Disables hover effect on grid rows
       * - Includes pagination with 5 pages per view
       * - Allows selection, editing, deleting, and sorting
       */}
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        {/* Container for column definitions */}
        <ColumnsDirective>
          {/* Maps through customersGrid array to create column configurations */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        
        {/* Injects required services/features into the grid */}
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

/* Exports the Customers component for use in other files */
export default Customers;