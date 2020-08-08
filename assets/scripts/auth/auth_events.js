'use strict'
const api = require('./auth_api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./auth_ui')
const store = require('../store')

const authEventsListeners = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('.change-password').hide()
  $('#sign-out').on('submit', onSignOut)
  $('.sign-out').hide()
  $('main').hide()
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then($('#sign-up').hide())
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then((userInfo) => {
      // console.log({response})
      store.user = userInfo.user
    })
    .then(ui.signInSuccess)
    .catch(error => {
      const errorMessage = error.responseJSON.message
      ui.signInFailure(errorMessage)
    })
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  authEventsListeners
}
