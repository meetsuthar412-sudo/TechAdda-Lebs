document.addEventListener('DOMContentLoaded',()=>{
  const items=[
    {c:'ai',cat:'AI',t:'AI Social Assistant',d:'Content & engagement AI.',img:'../assets/image/ai-social-assistant.png.png',s:'tall'},
    {c:'web',cat:'Web',t:'E-commerce Management',d:'Unified store dashboard.',img:'../assets/image/e-commerce-management.png.png',s:'wide'},
    {c:'uiux',cat:'UI/UX',t:'Business Analytics',d:'Real-time KPI dashboard.',img:'../assets/image/business-analytics.png.png',s:'square'},
    {c:'design',cat:'Graphic',t:'Digital Marketing Platform',d:'Campaign management.',img:'../assets/image/digital-marketing.png.png',s:'tall'},
    {c:'crm',cat:'CRM',t:'CRM Platform',d:'Sales & contacts.',img:'../assets/image/crm-platform.png.png',s:'wide'},
    {c:'apps',cat:'App',t:'Appointment Booking',d:'Booking system.',img:'../assets/image/appointment-booking.png.png',s:'tall'},
    {c:'software',cat:'Software',t:'Inventory System',d:'Stock tracking.',img:'../assets/image/inventory-management.png.png',s:'wide'},
    {c:'ai',cat:'AI',t:'AI Chart App',d:'Natural-language charts.',img:'../assets/image/ai-chart-app.png.png',s:'square'},
    {c:'ai',cat:'AI',t:'AI SaaS Platform',d:'Multi-tenant AI.',img:'../assets/image/ai-saas-platform.png.png',s:'tall'},
    {c:'saas',cat:'SaaS',t:'SaaS Boilerplate',d:'Production starter.',img:'../assets/image/saas-boilerplate.png.png',s:'wide'},
    {c:'ai',cat:'AI',t:'AI Customer Support',d:'Ticket automation.',img:'../assets/image/ai-customer-support.png.png',s:'square'},
    {c:'ai',cat:'AI',t:'AI Social Assistant',d:'Social management.',img:'../assets/image/ai-social-assistant.png.png',s:'tall'},
  ];
  const m=document.getElementById('masonry');
  m.innerHTML=items.map(i=>`
    <div class="m-item" data-c="${i.c}">
      <div class="m-thumb ${i.s}">
        <img src="${i.img}" alt="${i.t}" loading="lazy">
      </div>
      <div class="m-body"><div class="m-cat">${i.cat}</div><h3>${i.t}</h3><p>${i.d}</p></div>
    </div>`).join('');
  document.querySelectorAll('#pf-filters .filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('#pf-filters .filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.f;
      m.querySelectorAll('.m-item').forEach(it=>it.classList.toggle('hide',f!=='all'&&it.dataset.c!==f));
    });
  });
});