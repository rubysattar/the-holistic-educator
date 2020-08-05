'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#auth-message').text('Sign-up was successful!')
  $('#sign-up').hide()
  $('form').trigger('reset')
  $('#sign-in').show()
}

const signUpFailure = function () {
  $('#auth-message').text('Sign-up was unsuccessful. Try again.')
  $('#sign-up').show()
  $('form').trigger('reset')
}

const signInSuccess = function () {
  $('#auth-message').text('Sign-in was successful!')
  $('form').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#unauthenticated').hide()
  $('#landing-page').hide()
  $('main').show()
}
const signInFailure = function (errorMessage) {
  if (errorMessage) {
    $('#auth-message').text(`Sign-in failed. Reason: ${errorMessage}`)
  } else {
    $('#auth-message').text('Sign-in failed.')
  }
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#auth-message').text('Password change failed')
  $('form').trigger('reset')
}
const changePasswordSuccess = function () {
  $('#auth-message').text('Successfully changed your password! You can change it again or scroll down and start playing!')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('#auth-message').text('You are now signed out!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#landing-page').show()
  store.user = null
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
