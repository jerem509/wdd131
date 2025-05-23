//declaring variables to store data from selectors queried.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', () => {
    
    if (input.value.trim() !== "") {
        
        //  NEW BUTTON 
        //creating a delete button
        const deleteButton = document.createElement('button');
        //setting the content of the delete button
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        //creating a line element
        const li = document.createElement('li');
        //appending list item 'li' to list
        list.appendChild(li);
        //appending list item with the delete button
        li.appendChild(deleteButton);

        //create a variable to store the text to be a sibling to deleteButton
        const p = document.createElement('p');
        //content of p
        p.textContent = input.value;
        //append 2 children (p and deleteButton) to li
        li.appendChild(p);
        li.appendChild(deleteButton);

        //reset input value
        input.value = "";
        //bring back the focus on the input field
        input.focus();

        deleteButton.addEventListener('click', () => {
        list.removeChild(li); 
        input.focus();
        })
    }
    else {
        input.focus();
    }

})




