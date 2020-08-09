'use strict'

const showStudentsTemplate = require('../templates/students-listing.handlebars')

const getStudentsSuccess = (data) => {
  const showStudentsHtml = showStudentsTemplate({ students: data.students })
  // console.log(data)
  $('#students-list').html(showStudentsHtml)
  $('.student-roster-view').show()
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
  $('#student-delete-message').text('Student deleted from your roster!')
}
const deleteStudentFailure = () => {
  $('#student-delete-message').text('Student was not deleted from your roster.')
}
const updateStudentSuccess = () => {
  $('#student-update-message').text('Student updated!')
  $('form').trigger('reset')
}
const updateStudentFailure = () => {
  $('#student-update-message').text('Student was not updated.')
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
  updateStudentSuccess
}
