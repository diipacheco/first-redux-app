import React from "react";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store";
import Video from "./components/Video";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Video />
				<Sidebar />
			</Provider>
		</div>
	);
}

export default App;
