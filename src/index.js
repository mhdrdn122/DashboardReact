import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Team from './Pages/Team/Team.jsx'
import Contacts from './Pages/Contacts/Contacts.jsx'
import Invoices from './Pages/Invoices/Invoices.jsx'
import Calendar from './Pages/Calendar/Calendar.jsx'
import Faq from './Pages/Faq/Faq.jsx'
import BarChart from './Pages/BarChart/BarChart.jsx'
import PieChart from './Pages/PieChart/PieChart.jsx'
import LineChart from './Pages/LineChart/LineChart.jsx'
import Geography from './Pages/Geography/Geography.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />  
      <Route path='contacts' element={<Contacts />} />   
      <Route path='invoices' element={<Invoices />} /> 
      <Route path='Calendar' element={<Calendar />} />   
      <Route path='faq' element={<Faq />} />  
      <Route path='bar' element={<BarChart />} />   
      <Route path='pie' element={<PieChart />} />   
      <Route path='line' element={<LineChart />} />  
      <Route path='geography' element={<Geography />} />     
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

