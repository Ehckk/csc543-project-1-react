import { 
	RouterProvider, 
	createBrowserRouter, 
	redirect
} from 'react-router-dom'
import Forms from "./forms"
import Layouts from './layouts'

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
				element: <Forms.LoginForm/>
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
