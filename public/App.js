import React from 'react';
import { createRootNavigator } from './routes/routes';
import { isSignedIn } from './auth';

export default class App extends React.Component {

  state = {
    signedIn: true,
    checkedSignIn: true,
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if(!checkedSignIn) return null;
    const Layout = createRootNavigator(signedIn);
    return <Layout />
  }
}
