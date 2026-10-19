(()=>{
  if(window.lucide) lucide.createIcons();
  const cats=[
    {i:'brain-circuit',t:'AI & Machine Learning',s:'Building AI products with modern LLM tooling.',skills:['Python','OpenAI APIs','LLM Applications','Prompt Engineering','RAG','LangChain','Vector Databases','Embeddings','AI Agents']},
    {i:'globe',t:'Web',s:'Modern, fast, accessible front-ends.',skills:['HTML','CSS','JavaScript','TypeScript','React','Next.js','Node.js']},
    {i:'server',t:'Backend',s:'Reliable APIs and data layers.',skills:['Python','FastAPI','Node.js','REST APIs','PostgreSQL','SQL']},
    {i:'cloud',t:'Cloud & DevOps',s:'Shipping with confidence.',skills:['AWS','Docker','Git','CI/CD']},
    {i:'palette',t:'Design',s:'Interfaces and brand that feel right.',skills:['UI/UX','Figma','Branding','Logo Design','Poster Design','Social Media Design']},
  ];
  const g=document.getElementById('skills-grid');
  g.innerHTML=cats.map(c=>`
    <div class="skill-cat">
      <h3><i data-lucide="${c.i}"></i>${c.t}</h3>
      <div class="sub">${c.s}</div>
      <div class="skill-cloud">${c.skills.map(s=>`<div class="skill-pill"><span>${s}</span></div>`).join('')}</div>
    </div>`).join('');
  if(window.lucide) lucide.createIcons();
})();