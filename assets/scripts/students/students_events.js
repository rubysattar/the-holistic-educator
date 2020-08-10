const api = require('./students_api')
const ui = require('./students_ui')
const getFormFields = require('../../../lib/get-form-fields')

const studentsEventsListeners = function () {
  $('#get-students').on('click', onGetStudents)
  $('#student-create').on('submit', onCreateStudent)
  // $('#students-list').on('click', '#get-students-in-template', onGetStudents)
  $('#students-list').on('click', '.delete-student', onDeleteStudent)
  $('#students-list').on('click', '.update-student-button', onPatchStudent)

  // hide the following unless triggered
  $('.student-roster-view').hide()
}

// NEED TO COME BACK AND ENTER UI that considers hiding the deleted student
const onDeleteStudent = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  api.deleteStudent(id)

    // you don't wanna be in a situation where you are doing things individually, 
    // let's restructure Get Students so it can be called again to refresh the index

    // .then(() => {
    //   // this probably should be in Ui
    //   const theDivToDelete = $(`div[data-id=${id}]`)

    //   // Remove ONLY that div from the DOM
    //   theDivToDelete.remove()
    // })
    .then(ui.deleteStudentSuccess)
    .then(onGetStudents)
    .catch(ui.deleteStudentFailure)
}

const onPatchStudent = (event) => {
  event.preventDefault()
  const studentId = $(event.currentTarget).data('id')
  const form = $(event.currentTarget).closest('.student-update')[0]
  // [0] tells jquery we want the first element that comes back with this selector
  // console.log({ form })

  const formData = getFormFields(form)

  // console.log({ formData })

  api.patchStudent(studentId, formData)
    .then(onGetStudents)
    .then(ui.updateStudentSuccess)
    .catch(ui.updateStudentFailure)
}

const onGetStudents = (event) => {
  // if there was a click event, run like expected for a click event
  if (event && event.preventDefault) {
    event.preventDefault()
  }
  // because we want Patch and Delete to empty the list and re-get an updated version,
  // Get should always do the following
  $('#students-list').empty()

  api.getStudents()
    .then(ui.getStudentsSuccess)
    .catch(ui.getStudentsFailure)
}

// NEED TO COME BACK AND ENTER UI that considers showing the created student
const onCreateStudent = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createStudents(formData)
    // .then((newlyCreatedStudent) => {
    //   ui.appendStudent(newlyCreatedStudent)
    // })
    .then(onGetStudents)
    .then(ui.createStudentSuccess)
    .catch(ui.createStudentFailure)
}

module.exports = {
  studentsEventsListeners
}
