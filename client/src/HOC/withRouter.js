import { useNavigate, useLocation } from "react-router-dom";

const withRouter = WrappedComponent => props => {
    return (
        <WrappedComponent
            {...props}
            navigate={useNavigate()}
            location={useLocation()}
        />
    );
}

export default withRouter;