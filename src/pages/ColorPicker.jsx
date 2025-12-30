/* 
 * Importing React library for creating UI components
 */
import React from 'react';
/* 
 * Importing SyncFusion color picker component
 */
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

/* 
 * Importing Header component for page title
 */
import { Header } from '../components';

/* 
 * Function that gets triggered when color changes
 * Updates the background color of the preview element with the selected color
 */
const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

/* 
 * Custom color picker component with configurable id and mode
 * Creates a reusable color picker with specific settings
 */
const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent
  id={id}
  mode={mode}
  modeSwitcher={false}
  inline
  showButtons={false}
  change={change}
/>;

/* 
 * Main ColorPicker component - renders two types of color pickers
 * Using an arrow function with implicit return
 */
const ColorPicker = () => (
  /* Container div with responsive margin, padding, and styling */
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    {/* Header component showing category and title */}
    <Header category="App" title="Color Picker" />
    
    {/* Text center container for color picker elements */}
    <div className="text-center">
      {/* Preview element that displays the selected color */}
      <div id="preview" />
      
      {/* Flex container for the color pickers */}
      <div className="flex justify-center items-center gap-20 flex-wrap">
        {/* Container for the palette color picker */}
        <div>
          {/* Title for the palette */}
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          {/* Rendering the custom palette color picker */}
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        
        {/* Container for the picker color picker */}
        <div>
          {/* Title for the picker */}
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          {/* Rendering the custom picker color picker */}
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
  </div>
);

/* Exports the ColorPicker component for use in other files */
export default ColorPicker;