function validateForm() {
  var x = document.forms['fname'].value;
  if (x == '') {
    alert('Name must be filled out');
    return false;
  }
}
