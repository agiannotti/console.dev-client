import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className='__code'>
        <pre>{`

            const serializeResource = (resource) => ({
              id: resource.id,
              title: xss(resource.title),
              content: xss(resource.content),
              zipcode: resource.zipcode,
              date_published: resource.date_published,
            });
            
          `}</pre>
      </div>
    );
  }
}
