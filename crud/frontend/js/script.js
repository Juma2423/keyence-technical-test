const input = document.getElementById("file/input");
const table = document.getElementById("excel/table");

input.addEventListener('change', (event) => {
 const file = event.target.files[0]

 readXlsxFile(file).then((rows) => {
 console.log(rows);
 table.innerHTML = "";

 rows.forEach((row) => {
 let tr = document.createElement('tr')

 row.forEach((cell) => {
 const td = document.createElement('td')
 td.textContent = cell 
 tr.appendChild(td)
 })

 // Agregar botones de CRUD
 const crudTd = document.createElement('td')
 const editBtn = document.createElement('button')
 editBtn.textContent = 'Edit'
 editBtn.addEventListener('click', () => {
 // Manejar evento de clic para editar
 })
 const deleteBtn = document.createElement('button')
 deleteBtn.textContent = 'Delete'
 deleteBtn.addEventListener('click', () => {
 // Manejar evento de clic para eliminar
 })
 crudTd.appendChild(editBtn)
 crudTd.appendChild(deleteBtn)
 tr.appendChild(crudTd)

 table.appendChild(tr);
 });
 });
});

// Agregar formulario para crear y actualizar registros
const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
 event.preventDefault()
 // Obtener valores del formulario
 // Enviar solicitud al servidor para crear o actualizar registro
})


