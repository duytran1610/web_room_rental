import { useNavigate } from "react-router-dom";

const withRouter = WrappedComponent => props => {
    return (
        <WrappedComponent
            {...props}
            navigate={useNavigate()}
        />
    );
}

export default withRouter;