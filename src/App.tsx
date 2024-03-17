import { 
	RouterProvider, 
	createBrowserRouter, 
	redirect
} from 'react-router-dom'
import Forms from "./forms"
import Layouts from './layouts'
import Router from './routes'

const router = createBrowserRouter([
	{
		path: "/",
		loader: () => redirect("/auth/login")
	},
	{
		path: "/auth",
		element: <Layouts.Credentials/>,
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
	},
	{
		path: "/home"
	}
])

function App() {
	return (
		<RouterProvider router={router}/>
	)
}

export default App
