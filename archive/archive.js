(()=>{
  const cats=[
    {t:'Web Archive',c:'80+',image:'../assets/visuals/archive/archive-web.svg'},
    {t:'App Archive',c:'25+',image:'../assets/visuals/archive/archive-app.svg'},
    {t:'Software Archive',c:'10+',image:'../assets/visuals/archive/archive-software.svg'},
    {t:'AI Archive',c:'15+',image:'../assets/visuals/archive/archive-ai.svg'},
    {t:'Design Archive',c:'200+',image:'../assets/visuals/archive/archive-design.svg'},
    {t:'Experiments',c:'30+',image:'../assets/visuals/archive/archive-experiments.svg'},
    {t:'UI Concepts',c:'40+',image:'../assets/visuals/archive/archive-ui-concepts.svg'},
    {t:'Prototypes',c:'20+',image:'../assets/visuals/archive/archive-prototypes.svg'},
  ];
  const g=document.getElementById('archive-grid');
  g.innerHTML=cats.map(c=>`
    <div class="a-cat">
      <h3>${c.t}</h3>
      <div>
        <div class="count">${c.c}</div>
        <div class="archive-image"><img src="${c.image}" alt="${c.t}" loading="lazy"></div>
      </div>
    </div>`).join('');
})();
