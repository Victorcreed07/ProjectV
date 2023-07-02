import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import './App.css';
import { Navbar, Footer, Sidebar, Theme } from './components';
import { Login,Dashboard,Authorize,Verify} from './pages';
import { useStateContext } from './contexts/context';


function App() {

   const { setCurrentColor, user1,setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
// const [user2, loading, error] = useAuthState(auth);
//    const { user } = useGlobalContext()
   let currentTime = 0

useEffect(() => {

console.log('Hi')

},[user1])


  return (
 <div className={currentMode === 'Dark' ? 'dark' : ''} >
      <BrowserRouter>
      {
        (JSON.parse(localStorage.getItem('myMicData')) == null || undefined)?(
          <Login />
          ):(
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
               <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

           
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<Theme />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Authorize />)} />
                <Route path="/dashboard" element={(<Authorize />)} />
                <Route path="/verify" element={(<Verify />)} />
                <Route path="/Analytics" element={(<Dashboard />)} />

              
                

              

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
        )}
      </BrowserRouter>
    </div>
   
  );
}

export default App;
