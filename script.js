let Name = document.querySelector('#name');
let email = document.querySelector('#email');
let text = document.querySelector('#text');
let message = document.querySelector('#message');
let submit = document.querySelector('#sub');


submit.addEventListener('click',function(){
    let user_name = Name;
    let user_email = email;
    let user_text = text;
    let user_message = message;

    Name = '';
    email = '';
    text = '';
    message = '';
    alert('Succesfully Submitted');

    console.log('Name: ',user_name);
    console.log('E-mail: ',user_email);
    console.log('Text: ',user_text);
    console.log('Name: ',user_name);
    console.log('Message: ',user_message);
})

