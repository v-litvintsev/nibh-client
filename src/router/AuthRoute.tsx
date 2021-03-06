import { FC } from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import userState from '../store/userState'
import { EPaths } from './constants'

interface IAuthRouteProps {
  component: React.FC<RouteComponentProps>
  path: string
  exact?: boolean
}

const AuthRoute: FC<IAuthRouteProps> = ({ component: Component, children, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      userState.isAuthenticated ? <Redirect to={EPaths.home} /> : <Component {...props} />
    }
  />
)

export default AuthRoute
