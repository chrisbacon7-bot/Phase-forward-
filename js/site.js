(function(){
  var t=document.querySelector('.nav-toggle'),l=document.querySelector('.nav-links');
  if(t&&l){t.addEventListener('click',function(){var o=l.classList.toggle('open');t.classList.toggle('open',o);t.setAttribute('aria-expanded',o)});
    l.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){l.classList.remove('open');t.classList.remove('open');t.setAttribute('aria-expanded','false')})});}
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  var f=document.getElementById('contact-form');
  if(f){
    var p=new URLSearchParams(location.search).get('interest');
    if(p){var s=f.querySelector('[name=interest]');if(s)s.value=p;}
    f.addEventListener('submit',function(e){
      e.preventDefault();
      if(!f.checkValidity()){f.reportValidity();return;}
      var d=new FormData(f),g=function(k){return (d.get(k)||'').toString().trim()};
      var subj='Phase Forward inquiry: '+(g('interest')||'General')+' | '+g('name')+(g('org')?' ('+g('org')+')':'');
      var body='Name: '+g('name')+'\nEmail: '+g('email')+'\nChurch / organization: '+g('org')+'\nRole: '+g('role')+'\nInterested in: '+g('interest')+(g('event')?'\nEvent date & location: '+g('event'):'')+'\n\nMy season:\n'+g('message')+'\n';
      window.location.href='mailto:chris.bacon7@gmail.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
      var st=document.getElementById('form-status');if(st)st.textContent='Opening your email app. If nothing happens, email chris.bacon7@gmail.com directly.';
    });
  }
})();
