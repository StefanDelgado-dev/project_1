// Lightweight gallery/lightbox for pages/properties.html
document.addEventListener('DOMContentLoaded', function(){
  const thumbs = document.querySelectorAll('.thumb');
  const featured = document.getElementById('featuredImg');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');

  if(thumbs){
    thumbs.forEach(t => {
      t.addEventListener('click', function(){
        const full = t.dataset.full || t.src;
        // set featured and open lightbox
        featured.src = full;
        lbImg.src = full;
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden','false');
      });
    });
  }

  // clicking featured opens lightbox too
  featured && featured.addEventListener('click', ()=>{
    lbImg.src = featured.src;
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden','false');
  });

  lbClose && lbClose.addEventListener('click', ()=>{closeLB()});
  lightbox && lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLB(); });

  function closeLB(){
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }
});
