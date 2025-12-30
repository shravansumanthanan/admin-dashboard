/* 
 * Importing the React library for building UI components
 */
import React from 'react';
/* 
 * Importing SyncFusion Kanban components for the kanban board UI
 */
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

/* 
 * Importing kanban data and column configurations from dummy data file
 */
import { kanbanData, kanbanGrid } from '../data/dummy';
/* 
 * Importing Header component for page title
 */
import { Header } from '../components';

/* 
 * Kanban component - renders a kanban board for task management
 * Using an arrow function with implicit return
 */
const Kanban = () => (
  /* Container div with responsive margin, padding, and styling */
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    {/* Header component showing category and title */}
    <Header category="App" title="Kanban" />
    
    {/* 
     * SyncFusion Kanban component for displaying tasks in columns
     * - Uses Status field to categorize items into columns
     * - Configures card appearance with content and header fields
     */}
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      {/* Container for column definitions */}
      <ColumnsDirective>
        {/* Maps through kanbanGrid array to create column configurations */}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

/* Exports the Kanban component for use in other files */
export default Kanban;