//take id as variable
let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')
let btnCounter = $("#btnCounter")
//to add the task in list group
function AddItem() {
  let listItem = $('<li>', { //make a new list
    'class': 'list-group-item', 
    text: inpNewTask.val()
  })
  listItem.click(() => {
    listItem.toggleClass('done') //make its done on clicking
  })
  ulTasks.append(listItem) //add in the new grp
  inpNewTask.val('')//make inptext empty
  toggleInputButtons()
}
// handling the disabled buttons
function toggleInputButtons() {
  btnReset.prop('disabled', inpNewTask.val() == '')
  btnAdd.prop('disabled', inpNewTask.val() == '')
  btnSort.prop('disabled', ulTasks.children().length < 1)
  btnCleanup.prop('disabled', ulTasks.children().length < 1)
  btnCounter.prop('disabled', ulTasks.children().length < 1)
}
//add on press enter
inpNewTask.keypress((e) => {
  if (e.which == 13) AddItem()
})
//handle buttons
inpNewTask.on('input', toggleInputButtons)
//calling function
btnAdd.click(AddItem)

btnSort.click(()=>{
    $('#ulTasks .done').appendTo(ulTasks)
})
btnCounter.click(()=>{
    let done = $('#ulTasks .done').children().length
 
    alert((ulTasks.children().length- done)+" to go")
})
btnCleanup.click(() => {
    $('#ulTasks .done').remove()
    toggleInputButtons()
})
btnReset.click(()=>{
    inpNewTask.val('')
    toggleInputButtons()
})
