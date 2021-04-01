import React from 'react';
import ReactDom from 'react-dom';

const elem = React.createElement('h1',null,'Hello World!');

ReactDom.render(elem,document.getElementById('root'));