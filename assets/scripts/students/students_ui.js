'use strict'

const showStudentsTemplate = require('../templates/students-listing.handlebars')

const getStudentsSuccess = (data) => {
  // console.log(data)
  const showStudentsHtml = showStudentsTemplate({ students: data.students })
  $('#students-list').html(showStudentsHtml)
}
const createStudentSuccess = () => {
  $('#student-create-message').text('Student added to your roster!')
}
const createStudentFailure = () => {
  $('#student-create-message').text('Student could not be added to your roster.')
}
const deleteStudentSuccess = () => {
  $('#student-delete-message').text('Student deleted from your roster!')
}
const deleteStudentFailure = () => {
  $('#student-delete-message').text('Student was not deleted from your roster.')
}

module.exports = {
  getStudentsSuccess,
  createStudentFailure,
  createStudentSuccess,
  deleteStudentSuccess,
  deleteStudentFailure
}
