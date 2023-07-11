import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';
import withParams from './components/projects/withParams';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  const ProjectDetailsWithParams = withParams(ProjectDetails);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route path='/project/:id' element={<ProjectDetailsWithParams/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/create' element={<CreateProject/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
