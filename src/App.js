import React from 'react';
import { Provider } from 'react-redux';
import { BackTop } from 'antd';

import store from './stores/store';
import AppRouter from './AppRouter';

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
			<BackTop />
		</Provider>
	);
}

export default App;
