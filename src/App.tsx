import { 
	RouterProvider, 
	createBrowserRouter
} from 'react-router-dom'
import Forms from "./forms"
import Layouts from './layouts'
import Router from './routes'

const router = createBrowserRouter([
	{
		path: "/",
		action: Router.home.action,
		element: <Layouts.Home/>,
		children: [

		]
	},
	{
		path: "/logout",
		loader: Router.logout.loader
	},
	{
		path: "/auth",
		element: <Layouts.Credentials/>,
		loader: Router.login.loader,
		children: [
			{
				path: "login",				
				element: <Forms.LoginForm/>,
				action: Router.login.action
			},
			{
				path: "register",
				element: <Forms.RegisterForm/>,
				action: Router.register.action
			}
		]
	}	
])

function App() {
	return (
		<RouterProvider router={router}/>
	)
}

export default App
