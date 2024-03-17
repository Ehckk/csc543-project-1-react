import { 
	RouterProvider, 
	createBrowserRouter 
} from 'react-router-dom'
import Forms from "./forms"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Forms.LoginForm/>
	}
])

function App() {
	return (
		<RouterProvider router={router}/>
	)
}

export default App
