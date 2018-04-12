var colId;
var secondClick;
var email;
var phone;
var address;

document.addEventListener('click', function(e) {
  colId = (e.target.id);
  //if id has already been selected revert back to original state
  if(colId == secondClick){
    colId = (e.target.id);
    email = document.getElementById('email'+ colId);
    phone = document.getElementById('phone'+ colId);
    address = document.getElementById('add'+ colId);
    for(i=0; i<8; ++i) {
      setTextColor(('email'+i),('phone'+i),('add'+i),'darkgrey')
      document.getElementById(i).style.color = 'white';
    }

    email.style.display = 'block';
    phone.style.display = 'none';
    address.style.display = 'none';
    secondClick = 50;

    //select contact to see email, phone, and address
  }else if(colId == 'choice'){}else{
    colId = (e.target.id);
    secondClick = colId;
    for(i=0; i<8; ++i) {
      if(i == colId){
        email = document.getElementById('email'+ colId);
        phone = document.getElementById('phone'+ colId);
        address = document.getElementById('add'+ colId);
        setTextColor(('email'+i),('phone'+i),('add'+i),'white')
      }else{
        setTextColor(('email'+i),('phone'+i),(i),'black')
      }
    }
    email.style.display = 'block';
    phone.style.display = 'block';
    address.style.display = 'block';
  }
  console.log(colId)
}, false);

function showHide(element1, element2) {
  var col1 = document.getElementsByClassName(element1);
  for(i=0; i<col1.length; ++i) {
    col1[i].style.display = 'block';
  }
  var col2 = document.getElementsByClassName(element2);
  for(i=0; i<col2.length; ++i) {
    col2[i].style.display = 'none';
  }
}

function changeView() {
  var viewValue = document.getElementById('choice').value;
  if(viewValue === 'email'){
    showHide('email','phone')
  }else {
    showHide('phone','email')
  }
}

function setTextColor(id1,id2,id3,color) {
  document.getElementById(id1).style.color = color;
  document.getElementById(id2).style.color = color;
  document.getElementById(id3).style.color = color;
}
