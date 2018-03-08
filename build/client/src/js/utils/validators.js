"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.validWord = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[A-Za-záéëËíóúÁÉÍÓÚñÑñÑ0-9_]{1,100}/i.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end validWord

module.exports.isNumberKey = function (evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}; //end isNumberKey

module.exports.validPassword = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return (data.length >= 6 || data.length <= 20) && !/(\W)/g.test(data);
}; //end validPassword

module.exports.dummyValidator = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[A-Za-zñÑáéëËíóúÁÉÍÓÚ0-9_ -.@/¿?=:]{1,500}/i.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end dummyValidator

module.exports.allSpace = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var allSpaces = 0;
  for (var i = 0; i < data.length; i++) {
    var _result = /\s/g.test(data[i]);
    if (_result) allSpaces++;
  }
  var result = allSpaces === data.length;
  return result;
}; //end allSpace

module.exports.validText = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[A-Za-záéëËíóúÁÉÍÓÚñÑ0-9_ .]{3,500}/i.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end validText

module.exports.validPath = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[A-Za-záéëËíóúÁÉÍÓÚñÑ0-9_ -]{1,5000}/i.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end validPath

module.exports.validSeguridadSocial = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[A-Za-zñÑ0-9_ -.]{1,500}/i.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end validText


module.exports.validAddress = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[A-Za-záéíëËóúÁÉÍÓÚñÑ#/.,0-9-_ ]{1,500}/i.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end validAddress

module.exports.capitalize = function () {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  return string.charAt(0).toUpperCase() + string.slice(1);
}; //end capitalize

module.exports.validCarCapacity = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /\d{1,100}/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validCarCapacity

module.exports.validNumber = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[0-9]{1,100}/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validNumber

module.exports.validName = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /(\b(\w{1,20}[ .])(\w{1,20}[ .])(\w{1,20}[ .])(\w{1,20}[a-z])\b)|(\b(\w{1,20}[ .])(\w{1,20}[ .])(\w{1,20}[a-z])\b)|(\b(\w{1,20}[ .])(\w{1,20}[a-z])\b)/i.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validNumber

module.exports.validIdNumber = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[0-9-.]{1,100}/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validIdNumber

module.exports.validInteger = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[0-9]/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end integer

module.exports.validContractNumber = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[0-9]{4}/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validContractNumber


var validPhone = function validPhone() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[0-9()+]{1,100}/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validPhone


var validCellPhone = function validCellPhone() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /([3]{1})([0-2]{1})([0-9]{1})[0-9]{7}/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validCellPhone

module.exports.validPhone = validPhone;

module.exports.validCellPhone = validCellPhone;

module.exports.validPhoneOrCellPhone = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  return validCellPhone(value) || validPhone(value);
}; //end validPhoneOrCellPhone

var validCC = function validCC(value) {
  var result = /([0-9]{10})|([0-9]{8})|([0-9]{6})/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validCC

module.exports.validCC = validCC;

module.exports.copyCollection = function () {
  var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return collection.map(function (item) {
    return (0, _assign2.default)({}, item);
  });
}; //end copyCollection

var validNITFormat = function validNITFormat() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  value = value.replace(/([.-])/g, "");
  var secuencia = [41, 37, 29, 23, 19, 17, 13, 7, 3];
  var count = 0;
  secuencia.forEach(function (current, index) {
    count += Number(value[index]) * current;
  });
  count = count % 11;
  if (count >= 2) count = 11 - count;
  return count === Number(value[9]);
}; //end validFormat

var validNIT = function validNIT() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  // if(value.length !== 10) return false;
  var isValid = false;
  var points = /(\d{3}[.])(\d{3}[.])(\d{3}[-])(\d{1})/g.exec(value);
  var dash = /(\d{1,9}[-])(\d{1})/g.exec(value);
  var numbers = /(\d){10}/g.exec(value);

  if (points) {
    isValid = points[0].length === value.length;
    debugger;
    if (isValid) return validNITFormat(value);
    return false;
  }

  if (dash) {
    isValid = dash[0].length === value.length;
    if (isValid) return validNITFormat(value);
    return false;
  }

  if (numbers) {
    isValid = numbers[0].length === value.length;
    if (isValid) return validNITFormat(value);
    return false;
  }
}; //end validNIT

module.exports.validNIT = validNIT;
module.exports.validCC_NIT = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  return validNIT(value) || validCC(value);
}; //end validCC_NIT


module.exports.validCE = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /([0-9]{6})/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validCE

module.exports.validCode = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /(#[0-9]{2,10})/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validCode


module.exports.validEmail = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){3}\.[a-z]{2,3}$/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
}; //end validEmail


module.exports.validCity = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /[A-Za-zñÑ()0-9-_ ]{3,500}/i.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end validCity


module.exports.validDate = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /(19|20)\d\d[-.](0[1-9]|1[012])[-.](0[1-9]|[12][0-9]|3[01])\b/g.exec(data);
  if (result) return result[0].length === data.length;
  return false;
};

module.exports.pick = function () {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var copy = (0, _assign2.default)({}, obj);
  var result = {};
  keys.forEach(function (key) {
    return result[key] = copy[key];
  });
  return result;
}; //end pick


module.exports.validCarShield = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var result = /([A-Z]{2}[0-9]{4})|([A-Z]{3}[0-9]{3})|([A-Z]{1}[0-9]{5})|([A-Z]{1}[0-9]{4})|([A-Z]{3}[0-9]{2}[A-Z]{1}|([0-9]{3}[A-Z]{3}))/g.exec(data);
  if (result) return result[0].length === data.length;
  return false;
}; //end validCarShield