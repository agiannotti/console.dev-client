import React, { Component } from 'react';
import NavBar from './Nav/NavBar';

export default class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <pre className='__code'>{`

            const serializeResource = (resource) => ({
              id: resource.id,
              title: xss(resource.title),
              content: xss(resource.content),
              zipcode: resource.zipcode,
              date_published: resource.date_published,
            });
            
          `}</pre>
        </div>
      </>
    );
  }
}
