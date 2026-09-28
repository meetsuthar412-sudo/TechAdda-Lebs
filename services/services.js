document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide) lucide.createIcons();
  const services=[
    {n:'01',i:'code-2',t:'Software Development',d:'Custom software systems built around your business requirements — not the other way around.',tags:['Custom systems','Internal tools','Integrations','APIs']},
    {n:'02',i:'globe',t:'Website Development',d:'Premium websites that convert — from marketing sites to full web platforms.',tags:['Business','Portfolio','Landing','E-commerce','Corporate']},
    {n:'03',i:'smartphone',t:'Application Development',d:'Mobile apps, web applications, SaaS platforms, and internal business tools.',tags:['Mobile','Web apps','SaaS','Internal tools']},
    {n:'04',i:'brain-circuit',t:'AI Development',d:'AI assistants, SaaS, RAG, agents, automation, customer support, and LLM-powered applications.',tags:['Assistants','SaaS','RAG','Agents','LLM','Automation']},
    {n:'05',i:'users',t:'CRM Development',d:'Custom CRM platforms tailored to how your team sells, supports, and grows.',tags:['Sales','Support','Automation','Pipelines']},
    {n:'06',i:'pen-tool',t:'UI/UX Design',d:'Modern product interfaces and user experiences designed for clarity and conversion.',tags:['Product UI','UX','Design systems','Prototypes']},
    {n:'07',i:'palette',t:'Graphic Design',d:'Logos, posters, banners, Instagram posts & stories, social media, marketing creatives, and brand identity.',tags:['Logo','Poster','Banner','Social','Branding']},
  ];
  const list=document.getElementById('services-list');
  if(list){
    list.innerHTML=services.map(s=>`
      <div class="service-row">
        <div class="service-num">${s.n}</div>
        <div class="service-icon"><i data-lucide="${s.i}"></i></div>
        <div class="service-body">
          <h3>${s.t}</h3>
          <p>${s.d}</p>
          <div class="service-tags">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        </div>
        <a href="../contact/contact.html" class="service-cta">Discuss →</a>
      </div>`).join('');
    if(window.lucide) lucide.createIcons();
  }
});