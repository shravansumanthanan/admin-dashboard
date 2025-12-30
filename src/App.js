/* 
 * Importing React and useEffect hook for lifecycle management
 */
import React, { useEffect } from 'react';
/* 
 * Importing routing components from react-router-dom
 */
/* 
 * Importing routing components from react-router-dom
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* 
 * Importing custom layout components
 */
import { Navbar, Footer, Sidebar, ThemeSettings, SettingsButton } from './components';
/* 
 * Importing all page components
 */
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
/* 
 * Importing main CSS file
 */
import './App.css';

/* 
 * Importing context hook for global state
 */
import { useStateContext } from './contexts/ContextProvider';

/* 
 * App component - the main application component with routing and layout
 */
const App = () => {
  /* Extracting state values and setters from context */
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, themeSettings, setThemeSettings } = useStateContext();

  /* 
   * useEffect hook to run code on component mount
   * Retrieves saved theme settings from localStorage and applies them
   */
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    /* Container div with conditional dark mode class */
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {/* BrowserRouter component for routing */}
      <BrowserRouter>
        {/* Flex container with dark mode background */}
        <div className="flex relative dark:bg-main-dark-bg">
          <SettingsButton />

          {/* Conditional rendering based on sidebar state */}
          {activeMenu ? (
            /* Sidebar container when active */
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              {/* Sidebar component */}
              <Sidebar />
            </div>
          ) : (
            /* Collapsed sidebar container */
            <div className="w-0 dark:bg-secondary-dark-bg">
              {/* Sidebar component (collapsed) */}
              <Sidebar />
            </div>
          )}

          {/* Main content area with conditional classes based on sidebar state */}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-1 '
            }
          >
            {/* Navbar container with responsive positioning */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              {/* Navbar component */}
              <Navbar />
            </div>

            {/* Container for theme settings and routes */}
            <div>
              {/* Conditional rendering of theme settings panel */}
              {themeSettings && (<ThemeSettings />)}

              {/* Routes container for page routing */}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>

            {/* Footer component */}
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

/* Exports the App component for use in index.js */
export default App;