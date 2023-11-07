// /* eslint-disable react/prop-types */
// import { Route, Navigate } from "react-router-dom";

// export const ProtectedRoute = ({ role, ...rest }) => {
//   const currentRole = JSON.parse(localStorage.getItem("role"));

//   if (currentRole === role) {
//     return <Route {...rest} />;
//   } else {
//     return (
//       <Navigate
//         to={currentRole ? "/unauthorized" : "/sign-in"} // Handle unauthorized access
//         state={{ from: rest.location }}
//       />
//     );
//   }
// };
