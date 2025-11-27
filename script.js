(function(){
  const toggle = document.querySelector('.nav-toggle');
  if(toggle){toggle.addEventListener('click',()=>{
    const nav = document.querySelector('.main-nav');
    if(nav.style.display==='block'){nav.style.display='';}else{nav.style.display='block'}
  })}

  const PROPS = {
    1:{id:1,title:'Moderne 3.5-Zi Wohnung, Zürich',price:"CHF 1'450'000",meta:'3.5 Zi • 95 m² • Zürich-Enge',desc:'Schöne 3.5-Zimmer-Wohnung mit offener Küche, Balkon und hochwertiger Ausstattung.',img:'assets/prop1.jpg'},
    2:{id:2,title:'Familienhaus mit Garten',price:"CHF 2'850'000",meta:'6 Zi • 220 m² • Stadtrand Zürich',desc:'Grosszügiges Familienhaus mit schönem Garten, ideal für Familien.',img:'assets/prop2.jpg'},
    3:{id:3,title:'Mehrfamilienhaus — Investment',price:"CHF 5'200'000",meta:'8 Einheiten • Zürich-West',desc:'Renditestarkes Mehrfamilienhaus in aufstrebender Lage.',img:'assets/prop3.jpg'}
  };

  function getParam(name){
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  if(window.location.pathname.endsWith('property.html')){
    const id = getParam('id') || '1';
    const data = PROPS[id];
    const container = document.getElementById('prop-detail');
    if(data && container){
      container.innerHTML = `
        <h1>${data.title}</h1>
        <p class="meta">${data.meta} • <span class="price">${data.price}</span></p>
        <img src="${data.img}" alt="${data.title}">
        <div class="prop-info">
          <h3>Beschreibung</h3>
          <p>${data.desc}</p>
          <h3>Kontakt</h3>
          <p>Tel: +41 79 000 00 00 • <a href="mailto:info@lmestates.ch">info@lmestates.ch</a></p>
        </div>
      `;
    }
  }
})();