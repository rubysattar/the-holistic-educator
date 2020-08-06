const api = require('./students_api')
const ui = require('./students_ui')
const getFormFields = require('../../../lib/get-form-fields')

const studentsEventsListeners = function () {
  $('#get-students').on('click', onGetStudents)
  $('#student-create').on('submit', onCreateStudent)
}

const onGetStudents = (event) => {
  event.preventDefault()
  api.getStudents()
    .then(ui.getStudentsSuccess)
    .catch(ui.getStudentsFailure)
}

const onCreateStudent = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createStudents(formData)
    .then(ui.createStudentSuccess)
    .catch(ui.createStudentFailure)
}

module.exports = {
  studentsEventsListeners
}
