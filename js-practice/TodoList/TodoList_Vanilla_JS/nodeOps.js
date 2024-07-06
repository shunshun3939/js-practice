'use strict';

const nodeOps = {
  elById(id) {
    return document.getElementById(id);
  },
  elByClass(className) {
    return document.getElementsByClassName(className);
  },
  elByName(name) {
    return document.getElementsByName(name);
  },
  qs(selector) {
    return document.querySelector(selector);
  },
  qsAll(selector) {
    return document.querySelectorAll(selector);
  },
  createEl(type) {
    return document.createElement(type);
  },
  setAttr(target, key, value) {
    target.setAttribute(key, value);
  },
  append(parent, child) {
    parent.appendChild(child);
  },
  inHtml(target, value) {
    target.innerHTML = value;
  },
  insertHTML(target, position, value) {
    target.insertAdjacentHTML(position, value);
  },
  addEvent(target, event, callback) {
    target.addEventListener(event, callback);
  }
};
