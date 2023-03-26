import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = true; // Remplacez cela par votre code de vérification d'authentification

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to='/login' />
        )
      }
    />
  );
}

export default PrivateRoute;
