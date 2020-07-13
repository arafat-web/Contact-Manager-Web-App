/*
 Name: Contact Manager
 Type: Web App
 Version: 1.2
 Author: Arafat Hossain
 Date: 19/06/2020
 Last Modification: 06/07/2020
 Note: Complete web app to manage contacts
       no local storage available.
*/

// NAV CODES START //
//Open Nav Bar
function openNav() {
  document.getElementById("SideNav").style.width = "250px";
}
//Close Nav Bar
function closeNav() {
  document.getElementById("SideNav").style.width = "0";
}
//NAV CODES FINISH //

// TAB LOAD //

function openInfo(infoName){
    var tab = document.getElementsByClassName('tab');
    for( var i = 0; i < tab.length; i++){
        tab[i].style.display = "none";
      var editContact = document.getElementById('editContact').style.display='none';
  
    }
   document.getElementById(infoName).style.display = "block";

}

// ADD BUTTON //

function AddContact(){
    //get input
    var name = document.querySelector('#name').value;
    var number = document.querySelector('#number').value;
    var email = document.querySelector('#email').value;

    if(name == '' || number == '' || email == ''){
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerHTML = 'Fill Empty Box';
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    }else{
    //create li
    var li = document.createElement('li');

    
    //add input value to li
    //li.append(value);
    li.innerHTML =name+ "<br>" + number + "<br>" + email;
        
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerHTML = 'Added Successfully';
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
        
    var unText = document.getElementById('unText').style.display = 'none';
    
    //get position for li
    var item = document.querySelector('ul');
    
    //insert li to position
    item.insertBefore(li, null);

    //span creation
    var span = document.createElement('span');
    var spanText = document.createTextNode('');
    span.className='fa fa-trash';
    span.style.fontSize = '25px'
    span.append(spanText);
    
    li.insertBefore(span, null);
    document.getElementById("name").value = '';
    document.getElementById("number").value = '';
    document.getElementById("email").value = '';
        
    span.onclick = function() {
      var div = this.parentElement;
      item.removeChild(div);
    
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerHTML = 'Contact Removed';
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
        
    }
    //span creation
    var span1 = document.createElement('span');
    var spanText1 = document.createTextNode('');
    span1.className='fa fa-edit';
    span1.style.fontSize = '25px'
    span1.append(spanText1);
    
    li.insertBefore(span1, null);
    
    span1.onclick = function() {
    var block = document.querySelector('#editContact').style.display = "block";
    var contactlist = document.getElementById('contactlist');
    contactlist.style.display = 'none';
    var searchbar = document.getElementById('searchbar');
    searchbar.style.display = 'none';
    var div = this.parentElement;
        
        
        
    var btn1 = document.querySelector("#button1");
        
   btn1.onclick = function(){
    var editname = document.querySelector("#editname").value;
       
    var editnumber = document.querySelector("#editnumber").value;
       
    var editemail = document.querySelector("#editemail").value;  
    if(editname == '' || editnumber == '' || editemail == '') {
        
        
    var toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
        
        
    }
    else{
   div.innerHTML = editname+ "<br>" + editnumber + "<br>" + editemail;
        
        
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerHTML = 'Updated Successfully';
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
        
    document.getElementById("editname").value = '';
    document.getElementById("editnumber").value = '';
    document.getElementById("editemail").value = '';
        
    div.insertBefore(span, null);
    div.insertBefore(span1, null);
    }
    }
    }
    }

}

// ADD BUTTON ON SEARCH //
function AddC(){
    var addContact = document.getElementById('addContact');
    addContact.style.display = 'block';
    var contactlist = document.getElementById('contactlist');
    contactlist.style.display = 'none';
    var searchbar = document.getElementById('searchbar');
    searchbar.style.display = 'none';
}

//HIDE SEARCH ON ADD CONTACT //

var btn2 = document.querySelector('#btn2');

 btn2.addEventListener('click', (e) =>{
 var searchbar = document.getElementById('searchbar').style.display = 'none';
   

})
var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (e) =>{
                     
    var searchbar = document.getElementById('searchbar')
    searchbar.style.display = 'block'

})

var itemlist = document.getElementById('item');

var search  = document.querySelector('#search');
search.addEventListener('keyup', searchItem);

function searchItem(e){
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');

    Array.from(items).forEach(function (item){
        var itemName = item.firstChild.textContent;
 if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}

function exitPage(){

    var mainBody = document.getElementById('mainBody').style.display = 'none';
    var beforeMainbox = document.getElementById('main').style.display = 'none';  
    alert("Bye!\nStay Safe");
}
var mainBtn = document.getElementById('mainBtn');
mainBtn.addEventListener('click', (e) =>{
    var mainBody = document.getElementById('mainBody').style.display = 'block';
    var beforeMainbox = document.getElementById('main').style.display = 'none';              
});


