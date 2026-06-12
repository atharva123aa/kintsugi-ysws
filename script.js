// faq pots cracking effect ts so cool
document.querySelectorAll('.faq-item' ).forEach(function(item) {
    item.addEventListener( 'click',function (){
     var cn=this.querySelector( '.cracks-new' );
     if(cn) cn.style.opacity=this.classList.contains( 'open') ?'1' :'0';
    } );
})
 //i founded it through chatgpt so it could be imperfect sry;}
 document.querySelector('.rsvp-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    this.classList.add('clicked') ;
    setTimeout(() =>{
        this.classList.remove('clicked');
        window.open('https://hackclub.com/','_blank'); 
    },400);
});
        

        
     
