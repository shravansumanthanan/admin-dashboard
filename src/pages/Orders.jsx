/* 
 * Importing the React library for building UI components
 */
import React from 'react';
/* 
 * Importing SyncFusion grid components and features
 * These provide the data grid functionality with sorting, filtering, etc.
 */
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

/* 
 * Importing sample data and configuration from the dummy data file
 * - ordersData: Array of order records
 * - contextMenuItems: Configuration for right-click menu
 * - ordersGrid: Column configuration for the grid
 */
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
/* 
 * Importing the Header component for the page title
 */
import { Header } from '../components';

/* 
 * Orders component - renders a data grid showing order information
 * with features like sorting, filtering, exporting, etc.
 */
const Orders = () => {
  /* Configuration object for enabling editing capabilities in the grid */
  const editing = { allowDeleting: true, allowEditing: true };
  
  return (
    /* Container div with responsive margin, padding, and styling */
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Header component showing page category and title */}
      <Header category="Page" title="Orders" />
      
      {/* 
       * SyncFusion Grid component for displaying orders data
       * - Includes pagination, sorting, and export functionality
       * - Uses context menu for additional actions
       * - Allows editing and deleting records
       */}
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        {/* Container for column definitions */}
        <ColumnsDirective>
          {/* Maps through the ordersGrid array to create column configurations */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        
        {/* Injects required services/features into the grid */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

/* Exports the Orders component for use in other files */
export default Orders;