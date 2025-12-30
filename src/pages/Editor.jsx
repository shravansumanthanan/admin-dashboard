/* 
 * Importing React library for creating UI components
 */
import React from 'react';
/* 
 * Importing SyncFusion rich text editor components and features
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

/* 
 * Importing Header component for page title
 */
import { Header } from '../components';
/* 
 * Importing sample editor data from dummy data file
 */
import { EditorData } from '../data/dummy';

/* 
 * Editor component - renders a rich text editor with formatting tools
 * Using an arrow function with implicit return
 */
const Editor = () => (
  /* Container div with responsive margin, padding, and styling */
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    {/* Header component showing category and title */}
    <Header category="App" title="Editor" />
    
    {/* 
     * SyncFusion Rich Text Editor component 
     * Provides a WYSIWYG editing experience
     */}
    <RichTextEditorComponent>
      {/* Inserting the sample editor data */}
      <EditorData />
      
      {/* Injecting required services/features into the editor */}
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);

/* Exports the Editor component for use in other files */
export default Editor;