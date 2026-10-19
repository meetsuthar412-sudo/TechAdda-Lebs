(()=>{
  if(window.lucide) lucide.createIcons();
  const projects=[
    {
      k:'ai-social',
      t:'AI Social Assistant',
      c:'AI',
      cat:'ai',
      d:'AI-powered assistant for social media management, content ideas, and engagement.',
      tech:['OpenAI','Node.js','React'],
      status:'Live',
      img:'../assets/image/ai-social-assistant.png.png',
      problem:'Managing social content, replies, and ideas across platforms is time-consuming and inconsistent.',
      solution:'An AI assistant that generates content ideas, drafts posts, and helps manage engagement workflows.',
      features:['Content idea generator','Draft composer','Engagement suggestions','Multi-platform workflow','Template library']
    },
    {
      k:'ai-saas',
      t:'AI SaaS Platform',
      c:'AI · SaaS',
      cat:'saas',
      d:'Multi-tenant AI platform with LLM workflows, usage tracking, and billing.',
      tech:['Python','FastAPI','React','PostgreSQL'],
      status:'Live',
      img:'../assets/image/ai-saas-platform.png.png',
      problem:'Teams need a single place to run, track, and scale AI workflows with proper usage controls.',
      solution:'A multi-tenant SaaS with LLM workflows, per-tenant usage tracking, and integrated billing.',
      features:['Multi-tenant architecture','LLM workflow builder','Usage tracking','Billing integration','Team management']
    },
    {
      k:'saas-boiler',
      t:'SaaS Boilerplate',
      c:'SaaS',
      cat:'saas',
      d:'Production-ready SaaS starter with auth, payments, teams, and admin.',
      tech:['Next.js','Node.js','Stripe'],
      status:'Live',
      img:'../assets/image/saas-boilerplate.png.png',
      problem:'Launching a SaaS usually means rebuilding auth, billing, and admin from scratch.',
      solution:'A ready-to-ship boilerplate covering auth, payments, teams, and an admin panel.',
      features:['Authentication','Stripe billing','Team workspaces','Admin panel','API layer']
    },
    {
      k:'crm',
      t:'CRM Platform',
      c:'CRM',
      cat:'crm',
      d:'Custom CRM built around sales pipelines, contacts, and automation.',
      tech:['React','Node.js','PostgreSQL'],
      status:'Live',
      img:'../assets/image/crm-platform.png.png',
      problem:'Generic CRMs rarely fit specific sales or support workflows.',
      solution:'A CRM shaped around real pipelines, contacts, and task automation.',
      features:['Custom pipelines','Contact management','Task automation','Reporting','Integrations']
    },
    {
      k:'ai-support',
      t:'AI Customer Support',
      c:'AI',
      cat:'ai',
      d:'AI support system handling tickets, FAQs, and live-chat handoff.',
      tech:['OpenAI','Vector DB','Node.js'],
      status:'Live',
      img:'../assets/image/ai-customer-support.png.png',
      problem:'Support teams spend too much time on repetitive questions.',
      solution:'An AI system that answers FAQs, triages tickets, and hands off to humans when needed.',
      features:['FAQ automation','Ticket triage','Live-chat handoff','Knowledge base','Analytics']
    },
    {
      k:'ai-chart',
      t:'AI Chart App',
      c:'AI · Data',
      cat:'ai',
      d:'Natural-language to chart — ask questions, get visual answers.',
      tech:['Python','React','D3'],
      status:'Live',
      img:'../assets/image/ai-chart-app.png.png',
      problem:'Turning data into charts usually requires tools and time.',
      solution:'Ask questions in plain language, get clean, interactive charts instantly.',
      features:['Natural-language input','Interactive charts','Data upload','Export','Templates']
    },
    {
      k:'ecom',
      t:'E-commerce Management Platform',
      c:'Web · Business',
      cat:'web',
      d:'Unified dashboard for products, orders, and analytics across stores.',
      tech:['Next.js','Node.js'],
      status:'Concept Project',
      img:'../assets/image/e-commerce-management.png.png',
      problem:'Sellers managing multiple stores struggle with fragmented tools.',
      solution:'A unified platform for products, orders, inventory, and analytics.',
      features:['Multi-store sync','Order management','Inventory','Analytics','Reporting']
    },
    {
      k:'analytics',
      t:'Business Analytics Dashboard',
      c:'SaaS · Data',
      cat:'saas',
      d:'Real-time dashboards for KPIs, revenue, and operations.',
      tech:['React','Python','PostgreSQL'],
      status:'Concept Project',
      img:'../assets/image/business-analytics.png.png',
      problem:'Businesses need clear, real-time visibility into their numbers.',
      solution:'A dashboard that surfaces KPIs, revenue, and operational metrics in real time.',
      features:['Real-time KPIs','Revenue tracking','Custom reports','Role-based access','Export']
    },
    {
      k:'booking',
      t:'Appointment & Booking Platform',
      c:'Web · App',
      cat:'web',
      d:'Booking system with calendar sync, reminders, and payments.',
      tech:['Next.js','Node.js','Stripe'],
      status:'Concept Project',
      img:'../assets/image/appointment-booking.png.png',
      problem:'Booking tools are either too simple or too complex for small businesses.',
      solution:'A clean booking platform with calendar sync, reminders, and payments.',
      features:['Calendar sync','Reminders','Payments','Staff management','Public booking page']
    },
    {
      k:'inventory',
      t:'Inventory Management System',
      c:'Software',
      cat:'app',
      d:'Track stock, suppliers, and movements across locations.',
      tech:['React','Node.js','PostgreSQL'],
      status:'Concept Project',
      img:'../assets/image/inventory-management.png.png',
      problem:'Manual inventory tracking leads to errors and lost stock.',
      solution:'A system to track stock, suppliers, and movements across locations.',
      features:['Stock tracking','Supplier management','Multi-location','Barcode support','Reports']
    },
    {
      k:'marketing',
      t:'Digital Marketing Management Platform',
      c:'SaaS · Marketing',
      cat:'saas',
      d:'Campaigns, content calendar, and performance in one place.',
      tech:['Next.js','Python'],
      status:'Concept Project',
      img:'../assets/image/digital-marketing.png.png',
      problem:'Marketing teams juggle too many disconnected tools.',
      solution:'One platform for campaigns, content calendar, and performance tracking.',
      features:['Campaign manager','Content calendar','Performance tracking','Team collaboration','Integrations']
    },
  ];

  const grid=document.getElementById('projects-grid');
  const render=()=>{
    grid.innerHTML=projects.map(p=>`
      <div class="project-card" data-cat="${p.cat}" data-k="${p.k}">
        <div class="project-thumb">
          <span class="badge">${p.status}</span>
          <img src="${p.img}" alt="${p.t}" loading="lazy">
        </div>
        <div class="project-body">
          <div class="project-cat">${p.c}</div>
          <h3>${p.t}</h3>
          <p>${p.d}</p>
          <div class="project-meta">
            <div class="tech">${p.tech.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div>
            <span>View →</span>
          </div>
        </div>
      </div>`).join('');
    if(window.lucide) lucide.createIcons();
    grid.querySelectorAll('.project-card').forEach(card=>{
      card.addEventListener('click',()=>openModal(projects.find(p=>p.k===card.dataset.k)));
    });
  };
  render();

  // Filters
  document.querySelectorAll('.filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.f;
      grid.querySelectorAll('.project-card').forEach(c=>{
        c.classList.toggle('hide',f!=='all'&&c.dataset.cat!==f);
      });
    });
  });

  // Modal
  const modal=document.getElementById('modal');
  const mc=document.getElementById('modal-content');
  const openModal=(p)=>{
    mc.innerHTML=`
      <div class="modal-hero">
        <img src="${p.img}" alt="${p.t}">
      </div>
      <span class="modal-cat">${p.c} · ${p.status}</span>
      <h2>${p.t}</h2>
      <p>${p.d}</p>
      <div class="modal-section"><h4>Problem</h4><p>${p.problem}</p></div>
      <div class="modal-section"><h4>Solution</h4><p>${p.solution}</p></div>
      <div class="modal-section"><h4>Features</h4><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div class="modal-section"><h4>Technology</h4><ul>${p.tech.map(t=>`<li>${t}</li>`).join('')}</ul></div>
      <div style="margin-top:40px"><a href="../contact/contact.html" class="btn btn-primary">Build something similar <span class="arrow">→</span></a></div>`;
    modal.classList.add('open');document.body.style.overflow='hidden';
    if(window.lucide) lucide.createIcons();
  };
  const closeModal=()=>{modal.classList.remove('open');document.body.style.overflow=''};
  document.getElementById('modal-close').addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal) closeModal()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal()});
})();