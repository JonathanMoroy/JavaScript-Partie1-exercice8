function porn(){
  var old = document.getElementById('age').value;
  if (isNaN(old)) {
    var result = 'Attention, vous ne rentrez pas de nombre !';
  } else if ( old <= 0) {
    var result = 'Vous rentrez un âge nul ou negatif ! Stop troll :@';
  } else if (old < 18) {
    var result = 'Vous êtes mineur ! Bye =D';
  } else {
    var result = 'Vous êtes majeur ! Enjoy ^_^';
  }
  return(result);
}

document.getElementById('valider').addEventListener('click', function(){alert(porn())});
