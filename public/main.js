console.log('Outchea')
document.getElementById('showAll').onclick= showList;
document.getElementsByTagName('form').submit = noRefresh



function showList(){
  var songs = document.querySelector('.songs');
  var block = 'block';
if((songs.style.display) === ('block')){
  songs.style.display = 'none'
}
else{
    songs.style.display = 'block'
}

}

// function noRefresh (e){
//   e.preventDefault()
// }
