// Agregar formulario para editar registros
const editForm = document.getElementById('edit-form')
let currentEditRow
editForm.addEventListener('submit', (event) => {
 event.preventDefault()
 // Obtener valores del formulario
 const updatedRow = []
 editForm.querySelectorAll('input').forEach((input) => {
 updatedRow.push(input.value)
 })
 // Actualizar fila en la tabla
 let i = 0
 currentEditRow.querySelectorAll('td:not(:last-child)').forEach((td) => {
 td.textContent = updatedRow[i]
 i++
 })
 // Ocultar formulario de edición
 editForm.style.display = 'none'
})

// Agregar controlador de eventos para botones de edición
table.querySelectorAll('button.edit').forEach((editBtn) => {
 editBtn.addEventListener('click', (event) => {
 // Obtener fila actual
 const tr = event.target.closest('tr')
 currentEditRow = tr
 // Mostrar formulario de edición con valores actuales
 const currentValues = []
 tr.querySelectorAll('td:not(:last-child)').forEach((td) => {
 currentValues.push(td.textContent)
 })
 let i = 0
 editForm.querySelectorAll('input').forEach((input) => {
 input.value = currentValues[i]
 i++
 })
 editForm.style.display = 'block'
 })
})
