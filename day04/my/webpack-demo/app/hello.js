/*
var config  = require('./config.json');//引入当前目录下的config.json模块

module.exports = function () {
  var hello= document.createElement('div');
  //引用config.json中helloText
  hello.textContent = config.helloText;
  return hello;
};
*/

import React, {Component} from 'react'
import config from './config.json';
class Hello extends Component{
  render() {
  return (
    <div>
      <h1>{config.helloText}</h1>
    </div>
    );
  }
}
export default Hello