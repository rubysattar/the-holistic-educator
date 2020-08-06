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

module.exports = {
  getStudentsSuccess,
  createStudentFailure,
  createStudentSuccess
}
