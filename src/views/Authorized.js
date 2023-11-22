import { Navigate, useLocation } from "react-router-dom";

export const Authorized = ({ children }) => {
	const location = useLocation();

	if (localStorage.getItem("activeAdmin")) {
		return children;
	} else {
		return (
			<Navigate to={`/login/${location.id}`} replace state={{ location }} />
		);
	}
};