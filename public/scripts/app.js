"use strict";

//JSX
var root = document.getElementById('root');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hellooo"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum. "), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum. "), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum. ")));
/////////////////////////////////////////////////////////////////////////////               
var product = {
  name: "Samsung S12",
  price: 13000,
  description: "Açıklama",
  color: ['red', 'blue']
};
//  function formatPrice(p){
//    return p.price + ' TL';
//  }
function getDescription(p) {
  if (p.description) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-desc"
    }, p.description);
  }
}
var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-detail"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.name ? product.name : 'no name', " "), /*#__PURE__*/React.createElement("p", {
  id: "product-fiyat"
}, "price:", product.price == 0 ? 'free' : product.price), getDescription(product), /*#__PURE__*/React.createElement("p", null, product.color.length > 0 ? 'there are color options' : 'no options'));
/////////////////////////////////////////////////////////////////////////////
var number = 0;
function addOne() {
  console.log("Add one");
  number++;
  renderApp();
}
var minusOne = function minusOne() {
  console.log("Minus one");
  number--;
  renderApp();
};

//ReactDOM
function renderApp() {
  var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " Number: ", number), /*#__PURE__*/React.createElement("button", {
    id: "btnPluseOne",
    className: "btnRed",
    onClick: addOne
  }, " +1 "), /*#__PURE__*/React.createElement("button", {
    id: "btnMinusOne",
    className: "btnBlue",
    onClick: minusOne
  }, " -1 "));
  ReactDOM.render(template3, root);
}
renderApp();
