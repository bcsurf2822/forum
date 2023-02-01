//There is a way to make this better but JQuery will make it better

document.getElementById('submit').addEventListener('click', function () {
  console.log('click');

  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  var postBox = document.querySelector('.posts');

  var newPostBox = document.createElement('div');

  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
newPostTextP.appendChild(newPostTextNode);

  var newPostNameP = document.createElement('p');
  var newPostNameNode = document.createTextNode('Brought to you by ' + name);
  newPostNameP.appendChild(newPostNameNode);


  var newPostHR = document.createElement('hr');


  newPostBox.append(newPostTextP);
  newPostBox.append(newPostNameP);
  newPostBox.append(newPostHR);

  postBox.append(newPostBox);
  // debugger




});


var name;

var text;