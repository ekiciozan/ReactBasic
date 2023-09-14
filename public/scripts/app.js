"use strict";

var user = {
  name: 'ozanekici',
  mail: 'ekiciozann@gmail.com',
  city: 'Istanbul',
  roles: ['admin', 'customer'],
  getRoles: function getRoles() {
    var _this = this;
    this.roles.forEach(function (r) {
      console.log(r);
      console.log(_this.name);
    });
  }
};
user.getRoles();
////////////////////////////////////////
var addES5 = function addES5() {
  console.log(arguments);
};
addES5(5, 6, 7);

////////////////////////////////////////
