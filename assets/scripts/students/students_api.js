'use strict'
const config = require('../config')
const store = require('../store')

const getStudents = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/students',
    method: 'GET',
    data: {
      user: store.user.id
    }
  })
}

const createStudents = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/students',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  getStudents,
  createStudents
}
