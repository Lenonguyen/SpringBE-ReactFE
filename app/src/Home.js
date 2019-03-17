import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/groups">Manage Groups</Link></Button>
          <Button color="link"><Link to="/users">Manage Users</Link></Button>
          <Button color="link" onClick={()=> window.location ="https://git.vamk.fi/e1601132/SpringBE-ReactFE" }>Git Link</Button>
        </Container>
      </div>
    );
  }
}

export default Home;