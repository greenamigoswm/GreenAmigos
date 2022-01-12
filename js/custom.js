var i = 5265,j = 5285,tree = 76845, clients = 76860;
function start() {
  	
  	if(i>tree) 
  		i = tree;
    if(j>clients)
      j = clients;

setTimeout(function() {
  document.getElementById('field1').innerHTML=i;
document.getElementById('field2').innerHTML=j;
  if(i<tree)
  	i++;
  if(j<clients)
    j++;
  
if(  i!=tree	|| j!=clients )
	start();
}, 800);
}
