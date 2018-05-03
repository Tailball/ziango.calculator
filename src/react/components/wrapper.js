import React from 'react';

const Wrapper = (props) => {
  return (
    <div>
      <header>
        <h1>Ziango Calculator</h1>
      </header>

      {props.children}

      <footer>
        <p>Created by Jochen Panjaer</p>
      </footer>

    </div>
  );
};

export default Wrapper;