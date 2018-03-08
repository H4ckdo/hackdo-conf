module.exports.validWord = (data = "") => {
  let result = /[A-Za-záéëËíóúÁÉÍÓÚñÑñÑ0-9_]{1,100}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end validWord

module.exports.isNumberKey = (evt) => {
  let charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}//end isNumberKey

module.exports.validPassword = (data = "") => ((data.length >= 6 || data.length <= 20) && !/(\W)/g.test(data));//end validPassword

module.exports.dummyValidator = (data = "") => {
  let result = /[A-Za-zñÑáéëËíóúÁÉÍÓÚ0-9_ -.@/¿?=:]{1,500}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end dummyValidator

module.exports.allSpace = (data = "") => {
  let allSpaces = 0;
  for (let i = 0; i < data.length; i++) {
    let result = /\s/g.test(data[i]);
    if (result) allSpaces++;
  }
  let result = (allSpaces === (data.length));
  return result;
}//end allSpace

module.exports.validText = (data = "") => {
  let result = /[A-Za-záéëËíóúÁÉÍÓÚñÑ0-9_ .]{3,500}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end validText

module.exports.validPath = (data = "") => {
  let result = /[A-Za-záéëËíóúÁÉÍÓÚñÑ0-9_ -]{1,5000}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end validPath

module.exports.validSeguridadSocial = (data = "") => {
  let result = /[A-Za-zñÑ0-9_ -.]{1,500}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end validText


module.exports.validAddress = (data = "") => {
  let result = /[A-Za-záéíëËóúÁÉÍÓÚñÑ#/.,0-9-_ ]{1,500}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end validAddress

module.exports.capitalize = (string = "") => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}//end capitalize

module.exports.validCarCapacity = (value = "") => {
  let result = /\d{1,100}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validCarCapacity

module.exports.validNumber = (value = "") => {
  let result = /[0-9]{1,100}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validNumber

module.exports.validName = (value = "") => {
  let result = /(\b(\w{1,20}[ .])(\w{1,20}[ .])(\w{1,20}[ .])(\w{1,20}[a-z])\b)|(\b(\w{1,20}[ .])(\w{1,20}[ .])(\w{1,20}[a-z])\b)|(\b(\w{1,20}[ .])(\w{1,20}[a-z])\b)/i.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validNumber

module.exports.validIdNumber = (value = "") => {
  let result = /[0-9-.]{1,100}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validIdNumber

module.exports.validInteger = (value = "") => {
  let result = /[0-9]/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end integer

module.exports.validContractNumber = (value = "") => {
  let result = /[0-9]{4}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validContractNumber


const validPhone = (value = "") => {
  let result = /[0-9()+]{1,100}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validPhone


const validCellPhone = (value = "") => {
  let result = /([3]{1})([0-2]{1})([0-9]{1})[0-9]{7}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validCellPhone

module.exports.validPhone = validPhone;

module.exports.validCellPhone = validCellPhone;


module.exports.validPhoneOrCellPhone = (value = "") => {
  return (validCellPhone(value) || validPhone(value))
}//end validPhoneOrCellPhone

const validCC = (value) => {
  let result = /([0-9]{10})|([0-9]{8})|([0-9]{6})/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validCC

module.exports.validCC = validCC;

module.exports.copyCollection = (collection = []) => {
  return collection.map((item) => Object.assign({}, item));
}//end copyCollection

const validNITFormat = (value = "") => {
  value = value.replace(/([.-])/g, "");
  const secuencia = [41, 37, 29, 23, 19, 17, 13, 7, 3];
  let count = 0;
  secuencia.forEach((current, index) => {
    count += Number(value[index]) * current;
  })
  count = count % 11;
  if (count >= 2) count = (11 - count);
  return count === Number(value[9]);
}//end validFormat

const validNIT = (value = "") => {
  // if(value.length !== 10) return false;
  let isValid = false;
  let points = /(\d{3}[.])(\d{3}[.])(\d{3}[-])(\d{1})/g.exec(value);
  let dash = /(\d{1,9}[-])(\d{1})/g.exec(value);
  let numbers = /(\d){10}/g.exec(value);

  if (points) {
    isValid = (points[0].length === value.length);
    debugger;
    if (isValid) return validNITFormat(value);
    return false;
  }

  if (dash) {
    isValid = (dash[0].length === value.length);
    if (isValid) return validNITFormat(value);
    return false;
  }

  if (numbers) {
    isValid = (numbers[0].length === value.length);
    if (isValid) return validNITFormat(value);
    return false;
  }
}//end validNIT

module.exports.validNIT = validNIT;
module.exports.validCC_NIT = (value = "") => {
  return (validNIT(value) || validCC(value))
}//end validCC_NIT


module.exports.validCE = (value = "") => {
  let result = /([0-9]{6})/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validCE

module.exports.validCode = (value = "") => {
  let result = /(#[0-9]{2,10})/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validCode


module.exports.validEmail = (value = "") => {
  let result = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){3}\.[a-z]{2,3}$/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}//end validEmail


module.exports.validCity = (data = "") => {
  let result = /[A-Za-zñÑ()0-9-_ ]{3,500}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end validCity



module.exports.validDate = (data = "") => {
  let result = /(19|20)\d\d[-.](0[1-9]|1[012])[-.](0[1-9]|[12][0-9]|3[01])\b/g.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}

module.exports.pick = (keys = [], obj = {}) => {
  let copy = Object.assign({}, obj);
  let result = {};
  keys.forEach((key) => result[key] = copy[key]);
  return result;
}//end pick


module.exports.validCarShield = (data = "") => {
  let result = /([A-Z]{2}[0-9]{4})|([A-Z]{3}[0-9]{3})|([A-Z]{1}[0-9]{5})|([A-Z]{1}[0-9]{4})|([A-Z]{3}[0-9]{2}[A-Z]{1}|([0-9]{3}[A-Z]{3}))/g.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}//end validCarShield
