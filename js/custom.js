var i = 0,j = 0,tree = 285621, clients = 142860;
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
