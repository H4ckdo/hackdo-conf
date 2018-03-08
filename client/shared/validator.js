/**
 * @function fullname
 * @param  {type} data {description}
 * @return {type} {description}
 */
const fullname = (data = "") => {
  let result = /[A-Za-záéëËíóúÁÉÍÓÚñÑñÑ0-9_ ]{1,100}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}

/**
 * @function word
 * @param  {type} data {description}
 * @return {type} {description}
 */
const word = (data = "") => {
  let result = /[A-Za-záéëËíóúÁÉÍÓÚñÑñÑ0-9_]{1,100}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}

/**
 * @function validPassword
 * @param  {type} data {description}
 * @return {type} {description}
 */
const validPassword = (data = "") => {
  ((data.length >= 6 || data.length <= 20) && !/(\W)/g.test(data));
}

/**
 * @function allSpace
 * @param  {type} data {description}
 * @return {type} {description}
 */
const allSpace = (data = "") => {
  let spaces = 0;
  for (let i = 0; i < data.length; i++) {
    let result = /\s/g.test(data[i]);
    if (result) spaces++;
  }
  let result = (spaces === (data.length));
  return result;
}

/**
 * @function validText
 * @param  {type} data {description}
 * @return {type} {description}
 */
const validText = (data = "") => {
  let result = /[A-Za-záéëËíóúÁÉÍÓÚñÑ0-9_ .]{3,500}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}

/**
 * @function validAddress
 * @param  {type} data {description}
 * @return {type} {description}
 */
const validAddress = (data = "") => {
  let result = /[A-Za-záéíëËóúÁÉÍÓÚñÑ#/.,0-9-_ ]{1,500}/i.exec(data);
  if (result) return (result[0].length === data.length);
  return false;
}

/**
 * @function validNumber
 * @param  {type} value {description}
 * @return {type} {description}
 */
const validNumber = (value = "") => {
  let result = /[0-9]{1,100}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}

/**
 * @function validPhone
 * @param  {type} value {description}
 * @return {type} {description}
 */
const validPhone = (value = "") => {
  let result = /[0-9()+]{1,100}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}

/**
 * @function validCellPhone
 * @param  {type} value {description}
 * @return {type} {description}
 */
const validCellPhone = (value = "") => {
  let result = /([3]{1})([0-2]{1})([0-9]{1})[0-9]{7}/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}

/**
 * @function validEmail
 * @param  {type} value {description}
 * @return {type} {description}
 */
const validEmail = (value = "") => {
  let result = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){3}\.[a-z]{2,3}$/g.exec(value);
  if (result) return (result[0].length === value.length);
  return false;
}

exports.validWord = {
  validator: word,
  msg: 'Invalid string format'
}

exports.validCellPhone = {
  validator: validCellPhone,
  msg: 'wrong cellphones format'
}
exports.validPassword = {
  validator: validPassword,
  msg: 'wrong password format'
}

exports.validAddress = {
  validator: validAddress,
  msg: 'wrong address format'
}

exports.validNumber = {
  validator: validNumber,
  msg: 'wrong number format'
}

exports.validEmail = {
  validator: validEmail,
  msg: 'wrong email format'
}

exports.validPhone = {
  validator: validPhone,
  msg: 'wrong phone format'
}

exports.validText = {
  validator: validText,
  msg: 'wrong text format'
}
exports.allSpace = {
  validator: allSpace,
  msg: 'wrong spaces format'
}

exports.validFullname = {
  validator: fullname,
  msg: 'wrong fullname format'
}
