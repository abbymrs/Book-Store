import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { BackTop } from 'antd';

import store from './stores/store';
import AppRouter from './AppRouter';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<AppRouter />
				<BackTop />
			</Router>
		</Provider>
	);
}

export default App;
