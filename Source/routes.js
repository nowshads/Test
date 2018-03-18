import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter
} from "react-router-dom";

import Login from "./Components/Login.js";
import FeedPage from "./Components/FeedPage.js";
import Settings from "./Components/Settings.js";
import Management from "./Components/Management.js";
import AboutPage from "./Components/AboutPage.js";
import LoginNew from "./Components/LoginNew.js";
import Dashboard from "./Components/Dashboard.js";
import PatientReg from "./Components/PatientReg.js";
import Billing from "./components/Billing.js";
import CredOpr from "./components/CredOpr.js";
import DisplayData from "./components/DisplayData.js";


const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <CredOpr />
	},
	{
		path: "/PatientReg",
		isExactPath: true,
		component: <PatientReg />
	},
	{
		path: "/Dashboard",
		isExactPath: true,
		component: <Dashboard />
	},
	{
		path: "/Billing",
		isExactPath: true,
		component: <Billing />
	},
	{
		path: "/DisplayData",
		isExactPath: true,
		component: <DisplayData />
	},
	{
		path: "/AboutPage",
		isExactPath: true,
		component: <AboutPage />
	}
];

const routes = (
	<HashRouter>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</HashRouter>
);

export default routes;