'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#unauth-message').text('Sign-up was successful!')
  $('.sign-up').hide()
  $('form').trigger('reset')
  $('.sign-in').show()
}

const signUpFailure = function () {
  $('#unauth-message').text('Sign-up was unsuccessful. Try again.')
  $('.sign-up').show()
  $('form').trigger('reset')
}

const signInSuccess = function () {
  // $('#auth-message').text('Sign-in was successful!')
  $('form').trigger('reset')
  $('.change-password').show()
  $('.sign-out').show()
  $('#unauthenticated').hide()
  $('#landing-page').hide()
  $('main').show()
  $('#about-button').trigger('click')
}
const signInFailure = function (errorMessage) {
  if (errorMessage) {
    $('#unauth-message').text(`Sign-in failed. Reason: ${errorMessage}`)
  } else {
    $('#unauth-message').text('Sign-in failed.')
  }
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#auth-message').text('Password change failed')
  $('form').trigger('reset')
}
const changePasswordSuccess = function () {
  $('#auth-message').text('Successfully changed your password! You can change it again or continue to the site.')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  // $('#unauth-message').text('You are now signed out!')
  $('#unauthenticated').show()
  $('.sign-up').show()
  $('#sign-up').show()
  $('.sign-in').show()
  $('#sign-in').show()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('#landing-page').show()
  $('main').hide()
  store.user = null
  $('#students-list').empty()
  $('.template-view').hide()
  $('p').empty()
}
const signOutFailure = function () {

}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
