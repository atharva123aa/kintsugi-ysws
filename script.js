// faq pots cracking effect ts so cool
document.querySelectorAll('.faq-item' ).forEach(function(item) {
    item.addEventListener( 'click',function (){
     var cn=this.querySelector( '.cracks-new' );
     if(cn) cn.style.opacity=this.classList.contains( 'open') ?'1' :'0';
    } );
})

        
     