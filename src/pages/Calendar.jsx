/* 
 * Importing React and useState hook for component state management
 */
import React, { useState } from 'react';
/* 
 * Importing SyncFusion schedule components and features for the calendar functionality
 */
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
/* 
 * Importing SyncFusion date picker component for selecting dates
 */
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

/* 
 * Importing schedule data from dummy data file
 */
import { scheduleData } from '../data/dummy';
/* 
 * Importing Header component for page title
 */
import { Header } from '../components';

/* 
 * PropertyPane component - creates a container for the date picker control
 * Using destructuring assignment would trigger an eslint warning, so it's disabled
 */
// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

/* 
 * Scheduler component - renders a calendar with events and scheduling functionality
 */
const Scheduler = () => {
  /* State hook to store reference to schedule component */
  const [scheduleObj, setScheduleObj] = useState();

  /* 
   * Function to handle date change in the date picker
   * Updates the selected date in the schedule and rebinds the data
   */
  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  /* 
   * Function to handle drag start event
   * Enables navigation during drag operations
   */
  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  return (
    /* Container div with responsive margin, padding, and styling */
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Header component showing category and title */}
      <Header category="App" title="Calendar" />
      
      {/* 
       * SyncFusion Schedule component for displaying and managing events
       * - Sets fixed height for the calendar
       * - Configures initial date selection
       * - Sets up event data source and drag behavior
       */}
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        {/* Container for view definitions */}
        <ViewsDirective>
          {/* Maps through view options to create ViewDirective components */}
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        
        {/* Injecting required services/features into the scheduler */}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      
      {/* Property pane component for additional controls */}
      <PropertyPane>
        {/* Table for structuring the date picker */}
        <table
          style={{ width: '100%', background: 'white' }}
        >
          <tbody>
            {/* Table row with fixed height */}
            <tr style={{ height: '50px' }}>
              {/* Table cell taking full width */}
              <td style={{ width: '100%' }}>
                {/* 
                 * SyncFusion DatePicker component for date selection
                 * Connected to the schedule component via the change event handler
                 */}
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

/* Exports the Scheduler component for use in other files */
export default Scheduler;