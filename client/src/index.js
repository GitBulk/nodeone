import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
// import Counter from 'components/Counter'
// import FullName from 'components/FullName'
// import WindowSize from 'components/WindowSize'
// import UserStorage from 'components/UserStorage'
// import TodoApp from 'components/TodoApp'
// import Main from 'components/use_state_samples/Main'
// import Main from 'components/use_transition_samples/Main'
// import Main from 'components/use_effect_samples/Main'
import ToggleTheme from 'components/ToggleTheme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.StrictMode>
    <ToggleTheme />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
