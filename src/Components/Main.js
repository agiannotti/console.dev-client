import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  handleOnchange = () => {};
  render() {
    return (
      <>
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
        <div>
          <input className='__text'></input>
        </div>
      </>
    );
  }
}
