import React from 'react';
import Layout from './shared/Layout';
import Login from './Pages/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <Layout>
          <div>
            <Login history={this.props.history}></Login>
          </div>
        </Layout>
    );
  }
}

export default App;
