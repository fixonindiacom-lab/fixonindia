import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./Routes";
import WorkerLiveUpdater from './components/Maps/WorkerLiveUpdater';
import LiveLocationMapWithWorker from './components/Maps/LiveLocationMapWithWorker';

function App() { 
  return (
    <>
       <WorkerLiveUpdater />
       <RouterProvider router={router}/>
       
    </>
  )
}

export default App
