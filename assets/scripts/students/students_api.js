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
const deleteStudent = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/students/' + store.students._id,
    method: 'DELETE'
  })
}

const patchStudent = function (name, grade, checkedIn) {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/students/' + store.students._id,
    method: 'PATCH',
    data: {
      student: {
        name: name,
        grade: grade,
        checkedIn: checkedIn
      }
    }
  })
}

module.exports = {
  getStudents,
  createStudents,
  deleteStudent,
  patchStudent
}
