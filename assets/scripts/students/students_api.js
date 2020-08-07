'use strict'
const config = require('../config')
const store = require('../store')
const showStudentsTemplate = require('../templates/students-listing.handlebars')

const studentId = showStudentsTemplate.student

// INDEX WORKS
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

// CREATE WORKS however, i want it to exist in handlebars like index, update, and delete
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

// DELETE WORKS
const deleteStudent = function (studentId) {
  // console.log(id)  returns undefined
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/students/' + studentId,
    method: 'DELETE'
  })
}

// NOT WORKING
const patchStudent = function (studentId, formData) {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/students/' + studentId,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  getStudents,
  createStudents,
  deleteStudent,
  patchStudent
}
