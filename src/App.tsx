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
		loader: Router.home.loader,
		element: <></>
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
				element: <Forms.RegisterForm/>
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
