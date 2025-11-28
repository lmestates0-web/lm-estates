// LM Estates - enhanced JS for the new site
const properties = [
  {
    id:1, type:'penthouse', location:'ZÜRICHBERG', title:'Exklusives Penthouse mit Panoramablick',
    description:'Luxuriöses Penthouse mit grosser Dachterrasse und Seesicht.', rooms:'5.5', area:250, bathrooms:3, price:'CHF 4.500.000', badge:'EXKLUSIV'
  },
  {
    id:2, type:'villa', location:'KÜSNACHT', title:'Herrschaftliche Villa am Zürichsee',
    description:'Einzigartige Seeliegenschaft mit privatem Seezugang.', rooms:'8.5', area:450, bathrooms:5, price:'CHF 12.900.000', badge:'NEU'
  },
  {
    id:3, type:'wohnung', location:'SEEFELD', title:'Elegante Altbauwohnung',
    description:'Stilvolle Altbauwohnung nahe See.', rooms:'4.5', area:180, bathrooms:2, price:'CHF 2.850.000', badge:''
  },
  {
    id:4, type:'haus', location:'ZOLLIKON', title:'Modernes Einfamilienhaus',
    description:'Familiäres Einfamilienhaus in ruhiger Lage.', rooms:'6.5', area:280, bathrooms:3, price:'CHF 5.200.000', badge:''
  },
  {
    id:5, type:'penthouse', location:'ENGE', title:'Sky Penthouse mit Dachterrasse',
    description:'Atemberaubendes Penthouse mit Rundumsicht.', rooms:'5.5', area:220, bathrooms:3, price:'CHF 6.700.000', badge:'TOP'
  },
  {
    id:6, type:'wohnung', location:'HOTTINGEN', title:'Stilvolle Stadtwohnung',
    description:'Charmante Wohnung mit guter Anbindung.', rooms:'3.5', area:140, bathrooms:2, price:'CHF 1.980.000', badge:''
  },
];

let currentFilter = 'alle';

function el(tag, cls, html){
  const d = document.createElement(tag);
  if (cls) d.className = cls;
  if (html!==undefined) d.innerHTML = html;
  return d;
}

function formatCard(p){
  const card = el('article','card');
  const thumb = el('div','thumb','BILD');
  const loc = el('div','property-location', p.location);
  const title = el('div','property-title', p.title);
  const desc = el('div','property-desc', p.description);
  const price = el('div','property-price', p.price);
  const btn = el('a','btn-outline','Details');
  btn.href = `property.html?id=${p.id}`;
  card.appendChild(thumb);
  card.appendChild(loc);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(price);
  card.appendChild(btn);
  return card;
}

function loadFeatured(){
  const g = document.getElementById('featuredGrid');
  if (!g) return;
  g.innerHTML = '';
  const featured = properties.slice(0,4);
  featured.forEach(p => g.appendChild(formatCard(p)));
}

function loadProperties(){
  const list = document.getElementById('propertiesList') || document.getElementById('propertyGrid');
  if (!list) return;
  list.innerHTML = '';
  const arr = currentFilter === 'alle' ? properties : properties.filter(x=>x.type===currentFilter);
  arr.forEach(p => list.appendChild(formatCard(p)));
  updateFilterTabs();
}

function updateFilterTabs(){
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  const tabs = Array.from(document.querySelectorAll('.filter-tab'));
  const map = {'alle':0,'wohnung':1,'haus':2,'penthouse':3,'villa':4};
  const idx = map[currentFilter] || 0;
  if (tabs[idx]) tabs[idx].classList.add('active');
}

function filterProperties(type){
  currentFilter = type;
  loadProperties();
}

function showPropertyFromQuery(){
  const elDetail = document.getElementById('propertyDetail');
  if (!elDetail) return;
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const p = properties.find(x=>x.id===id) || properties[0];
  elDetail.innerHTML = '';
  const gallery = el('div','gallery','BILD GALERIE');
  const meta = el('div','property-meta');
  meta.innerHTML = `<h2>${p.title}</h2><div class="property-location">${p.location}</div>
    <p>${p.description}</p>
    <ul>
      <li><strong>Zimmer:</strong> ${p.rooms}</li>
      <li><strong>Fläche:</strong> ${p.area} m²</li>
      <li><strong>Bäder:</strong> ${p.bathrooms}</li>
      <li><strong>Preis:</strong> ${p.price}</li>
    </ul>
    <a class="btn-primary" href="contact.html">Anfragen</a>
  `;
  elDetail.appendChild(gallery);
  elDetail.appendChild(meta);
}

function initNavToggle(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', ()=> nav.classList.toggle('open'));
}

function initYears(){
  const y = new Date().getFullYear();
  document.querySelectorAll('#year,#year2,#year3,#year4,#year5').forEach(el=>{
    if (el) el.textContent = y;
  });
}

function submitContact(e){
  e.preventDefault();
  const form = e.target;
  alert('Danke — Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.');
  form.reset();
}

document.addEventListener('DOMContentLoaded',()=>{
  initNavToggle();
  initYears();
  loadFeatured();
  loadProperties();
  showPropertyFromQuery();
});
