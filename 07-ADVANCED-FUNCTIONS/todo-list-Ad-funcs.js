const todoList = [
    //  {
    //     name : 'Make dinner', 
    //     dueDate :'2023-10-21' 
    //  },
    
    // { 
    //     name :'make food',
    //     dueDate : '2023-10-21' 
    // } 
];

renderTodoList();

function renderTodoList() {

    let todoListHTML = ''; // accumulator varible

    todoList.forEach( (todoObject , index) => { // .forEach method

         const {name , dueDate} = todoObject;
         const html =
             `<div>  ${name} </div>
             <div> ${dueDate} </div>
 
             <button class="delete-button js-delete-button">
             Delete
             </button>`
         
         todoListHTML += html

    });

    
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

     document.querySelectorAll( '.js-delete-button')
     .forEach( ( deleteButton , index ) => {
        deleteButton.addEventListener('click' , () => {
            todoList.splice(index , 1) ;
             renderTodoList();
        });
     });

}

document.querySelector('.js-add-button')
.addEventListener( 'click' , () => {
    addTodo();
})

function addTodo() {

const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value

const dateInputElement = document.querySelector('.js-due-date');
const dueDate = dateInputElement.value
 

 todoList.push( 
    {
    //     name : name ,
    //    dueDate : dueDate

       name,
       dueDate
    }   
);

 inputElement.value = "" ;

 renderTodoList();
}
