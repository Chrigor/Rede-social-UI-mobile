import React, {Component} from 'react';
import Routes from './routes';

export default class index extends Component {
  render() {
    const user = this.props.navigation.getParam('user', 't');
    console.log(user);

    return <Routes screenProps={{user}}/>;
  }
}
