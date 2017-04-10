import './index.css';
//import numeral from 'numeral';
import{getUsers, deleteUser} from './api/userApi';

getUsers().then(result =>{
  let usersBody ="";

  result.forEach(user =>{
    usersBody +=`<tr>
    <td> <a href="#" data-id="${user.id}" class="deleteUser">Delete</a> </td>
    <td>${user.id}</td>
    <td> ${user.firstName}</td>
    <td> ${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  global.document.getElementById('users').innerHTML = usersBody;

  const deletelinks =  global.document.getElementsByClassName('deleteUser');
// Must use array.from to create a real array from a dom collection
// getElementsByClassName returns only an "array like " object
Array.from(deletelinks ,link =>{
  link.onclick = function(event) {
    const element = event.target;
    event.preventDefault();
    deleteUser(element.attributes["data-id"].value);

    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };
});

});

//const value = numeral(1000).format('$0,0.0');
//debugger; //eslint-disable-line no-debugger
//console.log(` Th numeral converted  ${value} from 1000 .`); //eslint-disable-line no-console
