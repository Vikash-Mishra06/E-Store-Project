import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import store from "./redux/store.jsx"
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" autoClose={3000} />
  </Provider>
)
