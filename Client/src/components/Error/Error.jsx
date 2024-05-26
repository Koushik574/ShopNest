import { useRouteError } from "react-router-dom";

const Error = () => {

    let {status, statusText} = useRouteError();

    return(
        <>
        <h1>Error</h1>
        <p>{status}</p>
        <p>{statusText}</p>
        </>
    );

}

export default Error;