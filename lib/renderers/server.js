import React from "react";
import ReactDomServer from "react-dom/server";

import App from "../components/App";
import axios from "axios";
import StateApi from "../dataApi";

const serverRender = async () => {
	const rawData = await axios.get("http://localhost:8080/data");
	const store = new StateApi(rawData.data);

	return {
		initialMarkup: ReactDomServer.renderToString(<App store={store} />),
		initialData: rawData.data
	};
};

export default serverRender;
