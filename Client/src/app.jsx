import ReactDOM from "react-dom/client";
import "./style.css";
import {RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import routes from "./routes/routes";

const appRouter = createBrowserRouter([...routes]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

// const testEle = <h1 className="bg-red-500">Test</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(testEle);