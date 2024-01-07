import { Routes ,Route, createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home, {loader as loa} from './pages/home/home';
import Project from './pages/project/project';
import AboutUs from './pages/aboutus/aboutUs';
import ContactUs from './pages/contactus/contactUs';
import LogIn from './components/login/logIn';
import Register from './components/register/register';
import SinglePage from './pages/singlepage/singlePage';
import NotFound from './pages/not_found/notFound';
import Guard from './components/guard/guard';
import { useState } from 'react';
// import Faves from './pages/faves/faves';
import Favorites from './pages/favorites/favorites';
import SearchMovies from './pages/searchMovies/searchMovies';
import { LangProvider } from './contexts/language';
import AppLayout from './AppLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> ,loader:loa},
      {path:"/project", element: <Project/>},
      { path: "/about", element: <AboutUs /> },
      { path: "/favorites", element: <Favorites /> },
      // { path: "/contact", element: <ContactUs /> },

      {
        path: '/contact',
        element: <ContactUs />,
        children: [
            {   
                index: true,
                element: <LogIn />
            },
            {
                path: '/contact/login',
                element: <LogIn/>
            },
            {
                path: '/contact/register',
                element: <Register/>
            },
        ]
    },

      { path: "/details/:id", element: <SinglePage /> },
      { path: "/Search", element: <SearchMovies /> },
      {path:"*", element: <NotFound/>}
    ]
  },
])


function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [lang, setLang] =useState('en')
  return (

    <div className="container mt-5" dir={`${lang=='en'?'ltr':'rtl'}`}>
      <LangProvider value={{lang, setLang}}>



      <RouterProvider router={router} />


        
      {/* <Header />
<Routes>
<Route path="/" element={<Home/>} title='Home'></Route>
<Route path="/project" element={<Project/>}  title='Home'/>
<Route path="/about" element={<AboutUs/>}></Route>

<Route path="/favorites" element={
  <Guard isLogin={isLogin}>
  <Favorites/>
  </Guard>}/>
<Route path="/contact" element={<ContactUs/>}>
  <Route index element={<LogIn/>}/>
  <Route Route path="login" element={<LogIn/>}/>
  <Route Route path="register" element={<Register/>}/>
</Route>
<Route path="/details/:id" element={<SinglePage/>}></Route>
<Route path="/Search" element={<SearchMovies/>}></Route>
<Route path="*" element={<NotFound/>}></Route>

</Routes>
      <Footer /> */}
      </LangProvider>
    </div>
  )
}

export default App