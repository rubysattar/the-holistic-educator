'use strict'
const showUserProfileTemplate = require('../templates/user-profile.handlebars')
const showStudentsTemplate = require('../templates/students-listing.handlebars')
const showAboutPageTemplate = require('../templates/about-page.handlebars')

const getStudentsSuccess = (data) => {
  const showStudentsHtml = showStudentsTemplate({ students: data.students })
  // console.log(data)
  $('.template-view').html(showStudentsHtml)
  $('.template-view').show()
}

const getStudentsFailure = () => {
  console.error()
}
const createStudentSuccess = () => {
  $('#student-message').text('Student added to your roster!')
  $('form').trigger('reset')
}
const createStudentFailure = () => {
  $('#student-message').text('Student could not be added to your roster.')
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
const renderUserProfile = (data) => {
  const showUserHtml = showUserProfileTemplate({ user: data.user })
  // console.log(data)
  $('.template-view').html(showUserHtml)
  $('.template-view').show()
}
const renderAboutView = () => {
  const showAboutHtml = showAboutPageTemplate
  $('.template-view').html(showAboutHtml)
  $('.template-view').show()
}

module.exports = {
  getStudentsSuccess,
  createStudentFailure,
  createStudentSuccess,
  deleteStudentSuccess,
  deleteStudentFailure,
  updateStudentFailure,
  updateStudentSuccess,
  getStudentsFailure,
  renderUserProfile,
  renderAboutView
}
