'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const { authEventsListeners } = require('./auth/auth_events')
const { studentsEventsListeners } = require('./students/students_events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEventsListeners()
  studentsEventsListeners()
})
