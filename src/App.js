import React from 'react';
import Landing from './components/landing/landing';
import Header from './components/header';
import Footer from './components/footer';
import "@aws-amplify/ui-react/styles.css";
import {withAuthenticator} from "@aws-amplify/ui-react";
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
