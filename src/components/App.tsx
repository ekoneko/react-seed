import React from "react"

export interface AppProps {}
export interface AppState {}
export class App extends React.PureComponent<AppProps, AppState> {
  render() {
    return <div>Hello Cat</div>
  }
}
