import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1> custom app vite</h1>
//     </div>
//   )
// }

// const anotherElement = (
//   <a href = "www.google.com" target = '_blank'>visit google</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
