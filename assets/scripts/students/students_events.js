const api = require('./students_api')
const ui = require('./students_ui')
const getFormFields = require('../../../lib/get-form-fields')

const studentsEventsListeners = function () {
  $('#get-students').on('click', onGetStudents)
  $('#student-create').on('submit', onCreateStudent)
  $('#students-list').on('click', '.delete-student', onDeleteStudent)
  $('#students-list').on('click', '.update-student', onPatchStudent)
}

const onDeleteStudent = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  api.deleteStudent(id)
    .then(console.log('deleted student successfully'))
    .catch(console.error)
}

const onPatchStudent = (event) => {
  event.preventDefault()
  event.currentTarget.data('id')
  api.deleteStudent()
    .then(console.log('deleted student successfully'))
    .catch(console.error)
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
