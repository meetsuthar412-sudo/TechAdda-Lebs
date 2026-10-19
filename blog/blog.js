(()=>{
  const posts=[
    {c:'ai',cat:'AI',t:'How AI Is Changing Modern Business Applications',d:'From support bots to internal tools — AI is reshaping how businesses operate.',d2:'Sep 2026',image:'../assets/visuals/blog/blog-ai-business.svg'},
    {c:'saas',cat:'SaaS',t:'Building Better SaaS Products',d:'What separates a SaaS that grows from one that stalls — architecture, UX, and pricing.',d2:'Aug 2026',image:'../assets/visuals/blog/blog-saas.svg'},
    {c:'software',cat:'Software',t:'From Idea to Production: Our Development Process',d:'A practical look at how we take projects from first sketch to live product.',d2:'Aug 2026',image:'../assets/visuals/blog/blog-development-process.svg'},
    {c:'uiux',cat:'UI/UX',t:'Why Good UI/UX Matters',d:'Interfaces that feel obvious convert better, support less, and scale further.',d2:'Jul 2026',image:'../assets/visuals/blog/blog-uiux.svg'},
    {c:'web',cat:'Web',t:'Modern Web Development in 2026',d:'The frameworks, patterns, and performance habits that matter right now.',d2:'Jul 2026',image:'../assets/visuals/blog/blog-web-2026.svg'},
    {c:'design',cat:'Design',t:'Designing Brand Systems That Scale',d:'Why a brand is more than a logo — and how to build one that grows with you.',d2:'Jun 2026',image:'../assets/visuals/blog/blog-brand-systems.svg'},
  ];
  const g=document.getElementById('blog-grid');
  g.innerHTML=posts.map(p=>`
    <article class="blog-card" data-c="${p.c}">
      <div class="blog-thumb"><img src="${p.image}" alt="${p.t}" loading="lazy"></div>
      <div class="blog-body">
        <div class="blog-cat">${p.cat}</div>
        <h3>${p.t}</h3>
        <p>${p.d}</p>
        <div class="blog-meta"><span>${p.d2}</span><span>Read →</span></div>
      </div>
    </article>`).join('');
  document.querySelectorAll('.blog-filters .filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.blog-filters .filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.f;
      g.querySelectorAll('.blog-card').forEach(c=>c.classList.toggle('hide',f!=='all'&&c.dataset.c!==f));
    });
  });
})();