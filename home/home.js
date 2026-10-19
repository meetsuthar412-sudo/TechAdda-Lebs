/* ============ HOME: HERO + PROJECTS ============ */
(()=>{
  if(window.lucide) lucide.createIcons();

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

})();