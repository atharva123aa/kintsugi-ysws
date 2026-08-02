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
        window.open('https://rsvp.hackclub.community/kintsugi','_blank'); 
    },400);
});
        
const MOCK_EMAIL ="test@hackclub.com";
const EMAIL_RE= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//no email expertise used gpt for these chars not the function
document.getElementById('loginBtn').addEventListener('click', function(){
    const val=document.getElementById('loginEmail').value.trim().toLowerCase() ;
    this.classList.remove('ok','wrong');
    if(!val){
        this.classList.add('wrong')
        this.innerHTML ="type smthg";
    } else if(!EMAIL_RE.test(val)){
        this.classList.add('wrong');
        this.innerHTML="NOT an email";
    } else if
  (val!== MOCK_EMAIL){
    this.classList.add('wrong');
    this.innerHTML="not on list yet as of now";
  } else{this.classList.add('ok');
    this.innerHTML="YOU ARE IN";
  setTimeout(()=>{
    window.location.href ="dashboar.html";
  },
600);
    return;
  }
  setTimeout(()=>{
this.classList.remove('wrong');
this.innerHTML ='start ! <span class="arrow"> →</span>';
  }, 1200);});
        
     
