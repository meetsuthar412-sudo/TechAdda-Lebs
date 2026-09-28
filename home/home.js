/* ============ HOME: HERO + GSAP + PROJECTS ============ */
document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide) lucide.createIcons();

  const heroPhotos=[...document.querySelectorAll('.hero-photo')];
  if(heroPhotos.length>1&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    let activePhoto=0;
    window.setInterval(()=>{
      if(document.hidden) return;
      heroPhotos[activePhoto].classList.remove('is-active');
      activePhoto=(activePhoto+1)%heroPhotos.length;
      heroPhotos[activePhoto].classList.add('is-active');
    },8000);
  }

  // ---------- FEATURED PROJECTS ----------
const projects=[
  {t:'AI Social Assistant',c:'AI',d:'AI-powered assistant for social media management, content ideas, and engagement.',img:'../assets/image/ai-social-assistant.png.png'},
  {t:'AI SaaS Platform',c:'AI · SaaS',d:'Multi-tenant AI platform with LLM workflows, usage tracking, and billing.',img:'../assets/image/ai-saas-platform.png.png'},
  {t:'SaaS Boilerplate',c:'SaaS',d:'Production-ready SaaS starter with auth, payments, teams, and admin.',img:'../assets/image/saas-boilerplate.png.png'},
  {t:'CRM Platform',c:'CRM',d:'Custom CRM built around sales pipelines, contacts, and automation.',img:'../assets/image/crm-platform.png.png'},
  {t:'AI Customer Support',c:'AI',d:'AI support system handling tickets, FAQs, and live-chat handoff.',img:'../assets/image/ai-customer-support.png.png'},
  {t:'AI Chart App',c:'AI · Data',d:'Natural-language to chart — ask questions, get visual answers.',img:'../assets/image/ai-chart-app.png.png'},
];
const grid=document.getElementById('featured-projects');
if(grid){
  grid.innerHTML=projects.map(p=>`
    <a href="../projects/projects.html" class="project-card">
      <div class="project-thumb">
        <img src="${p.img}" alt="${p.t}" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-cat">${p.c}</div>
        <h3>${p.t}</h3>
        <p>${p.d}</p>
      </div>
    </a>`).join('');
}

  // ---------- GSAP REVEALS ----------
  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach(el=>{
      gsap.fromTo(el,{opacity:0,y:40},{opacity:1,y:0,duration:1,ease:'power3.out',
        scrollTrigger:{trigger:el,start:'top 88%'}});
    });
    gsap.from('.hero-content h1',{opacity:0,y:60,duration:1.2,delay:.3,ease:'power3.out'});
    gsap.from('.hero-sub, .hero-desc, .hero-cta',{opacity:0,y:30,duration:1,stagger:.12,delay:.6,ease:'power3.out'});
  }
});