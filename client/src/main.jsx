import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
// import { store } from "./redux/store";
// import { Provider } from "react-redux";
import App from './App.jsx'
import axios from "axios";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL_SERVER;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		{/* <Provider store={store}> */}
			<BrowserRouter>
				<App />
			</BrowserRouter>
		{/* </Provider> */}
	</React.StrictMode>
)
