import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { UserContextProvider } from './userContext';
import { Layout } from './layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
        <Routes>
         <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
         </Route>
        </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
