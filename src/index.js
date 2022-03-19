import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loading from './components/Loading'
import reportWebVitals from './reportWebVitals';
import ForRouting from './components/ForRouting'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ErrorBoundary from './Errors/ErrorBoundary'
import Main from './Errors/Main'
import {fetchData} from './components/Fetcher'
import {Suspense} from 'react'
const resource=fetchData();
const ProductDetails=()=>{
  const user=resource.user.read();
  return(
    <div>
       <ul>
      <li>Title:{user.title}</li>
    </ul>
    </div>
   
  )
}
ReactDOM.render(
  <React.StrictMode>
    {/* <Loading/>
    <App />
    <ForRouting/> */}

  <BrowserRouter>
    
        <Main/>
     <Suspense fallback={<h1>Loading User...</h1>}>
      <ProductDetails/>
     </Suspense>
      <Routes>
    
          <Route path="/" element={<Loading/>}/>
          <Route path="/app" element={<App />}/>
          <Route path="/routing" element={<ForRouting/>}/>
         
      </Routes>
   
  </BrowserRouter>
     
   

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
