const addacbt = document.querySelector('.usermgn-header-add-button');
const usermgnbox = document.querySelector('.addnewac-box');   
const  addacbtx = document.getElementById('addnewac-x');
const  addacbtadd = document.getElementById('addnewac-btn');

    
addacbt.addEventListener('click', function() { 
            usermgnbox.style.display = 'flex';
        });

addacbtx.addEventListener('click', function(){
    usermgnbox.style.display='none';
})
addacbtadd.addEventListener('click', function(){
    usermgnbox.style.display='none';
})

const editbtn = document.querySelector('.edit-btn');
const editbox = document.querySelector('.editac-box');
const editsave = document.getElementById('Saveeditac-btn');
const editx = document.getElementById('editac-x');



editbtn.addEventListener('click', function() { 
    editbox.style.display = 'flex';
});

editx.addEventListener('click', function(){
editbox.style.display='none';
})
editsave.addEventListener('click', function(){
editbox.style.display='none';
})

const trashbox = document.querySelector('.trash-box');
const deletebtn = document.querySelector('.delete-btn');
const trashcancel = document.getElementById('trash-cancel');
const trashok = document.getElementById('trash-ok');

deletebtn.addEventListener('click', function() { 
    trashbox.style.display = 'flex';
});

trashcancel.addEventListener('click', function(){
    trashbox.style.display='none';
})
trashok.addEventListener('click', function(){
    trashbox.style.display='none';
})

