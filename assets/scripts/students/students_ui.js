'use strict'

const showStudentsTemplate = require('../templates/students-listing.handlebars')

const getStudentsSuccess = (data) => {
  const showStudentsHtml = showStudentsTemplate({ students: data.students })
  // console.log(data)
  $('#students-list').html(showStudentsHtml)
  $('.student-roster-view').show()
}

const getStudentsFailure = () => {
  console.error()
}
const createStudentSuccess = () => {
  $('#student-create-message').text('Student added to your roster!')
  $('form').trigger('reset')
}
const createStudentFailure = () => {
  $('#student-create-message').text('Student could not be added to your roster.')
  $('form').trigger('reset')
}
const deleteStudentSuccess = () => {
  $('#student-message').text('Student deleted from your roster!')
}
const deleteStudentFailure = () => {
  $('#student-message').text('Student was not deleted from your roster.')
}
const updateStudentSuccess = () => {
  $('#student-message').text('Student updated!')
  $('form').trigger('reset')
}
const updateStudentFailure = () => {
  $('#student-message').text('Student was not updated.')
}
// const appendStudent = (newStudent) => {
//   $('#students-list').html(showStudentsHtml.append(newStudent))
// }

module.exports = {
  getStudentsSuccess,
  createStudentFailure,
  createStudentSuccess,
  deleteStudentSuccess,
  deleteStudentFailure,
  updateStudentFailure,
  updateStudentSuccess,
  getStudentsFailure
}
