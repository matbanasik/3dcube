$('#front-link').click(function(e) {
       $('#cube').attr('class','show-front');
       e.preventDefault();
})
    
$('#back-link').click(function(e) {
       $('#cube').attr('class','show-back');
       e.preventDefault();
})
    
$('#right-link').click(function(e) {
       $('#cube').attr('class', 'show-right');
       e.preventDefault();
}) 
    

$('#left-link').click(function(e) {
       $('#cube').attr('class', 'show-left');
       e.preventDefault();
}) 

$('#top-link').click(function(e) {
       $('#cube').attr('class','show-top');
       e.preventDefault();
}) 

$('#bottom-link').click(function(e) {
       $('#cube').attr('class','show-bottom');
       e.preventDefault();
}) 


