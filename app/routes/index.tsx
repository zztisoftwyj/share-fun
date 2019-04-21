import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import routesAll, { IRoute } from './routes'

function getRoutes(routes: IRoute[]) {
  return routes.map(route => {
    // const { key, path, component, exact, children } = route
    // TODO: 递归渲染子路由
    // if (children) return this.getRoutes(children)

    if (route.component) {
      return <Route {...route} />
    }
    return null
  })
}

export default (
  <Router>
    <Switch>{getRoutes(routesAll)}</Switch>
  </Router>
)
