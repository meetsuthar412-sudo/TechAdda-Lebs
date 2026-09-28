/* ============ GLOBAL: NAV, CURSOR, REVEAL, LOADER ============ */
document.addEventListener('DOMContentLoaded',()=>{
  // Loader
  setTimeout(()=>document.querySelector('.loader')?.classList.add('done'),800);

  // Nav scroll state
  const nav=document.querySelector('.nav');
  const onScroll=()=>nav&&nav.classList.toggle('scrolled',window.scrollY>40);
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // Active link
  const path=location.pathname.split('/').filter(Boolean).pop()||'home.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a=>{
    if(a.getAttribute('href')?.includes(path.replace('.html',''))) a.classList.add('active');
  });

  // Mobile menu
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('.mobile-menu');
  toggle?.addEventListener('click',()=>{
    toggle.classList.toggle('open');
    menu?.classList.toggle('open');
    document.body.style.overflow=menu?.classList.contains('open')?'hidden':'';
  });
  menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    toggle?.classList.remove('open');menu?.classList.remove('open');document.body.style.overflow='';
  }));

  // Custom cursor
  const cursor=document.querySelector('.cursor');
  const ring=document.querySelector('.cursor-ring');
  if(cursor&&ring&&matchMedia('(pointer:fine)').matches){
    let mx=0,my=0,rx=0,ry=0;
    window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
    const loop=()=>{rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)};loop();
    document.querySelectorAll('a,button,.card,.btn').forEach(el=>{
      el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));
      el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));
    });
  }

  // Reveal on scroll
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el=>io.observe(el));

  // Magnetic buttons
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2;
      const y=e.clientY-r.top-r.height/2;
      btn.style.transform=`translate(${x*.15}px,${y*.25}px)`;
    });
    btn.addEventListener('mouseleave',()=>btn.style.transform='');
  });

  // Animated counters
  const counters=document.querySelectorAll('[data-count]');
  const cio=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el=e.target;const target=+el.dataset.count;const suffix=el.dataset.suffix||'';
      let cur=0;const step=Math.max(1,Math.ceil(target/60));
      const t=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(t)}el.textContent=cur+suffix},20);
      cio.unobserve(el);
    });
  },{threshold:.4});
  counters.forEach(c=>cio.observe(c));
});