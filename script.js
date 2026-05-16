// ── CAR DATA ──
// segment: Budget | Mid | Luxury | Ultra  (matches seg-tab data-segment values)
const cars = [
  {name: "Alto K10",         brand: "Maruti",price: 425000,     img: "images/alto k10.jpg",    segment: "Budget",category: "Hatchback"},
  {name: "S-Presso",         brand: "Maruti",price: 495000,     img: "images/s-presso.jpg",    segment: "Budget",category: "Hatchback"},
  {name: "Celerio",          brand: "Maruti",price: 550000,     img: "images/celerio.jpg",     segment: "Budget",category: "Hatchback"},
  {name: "Ignis",            brand: "Maruti",price: 590000,     img: "images/ignis.jpg",       segment: "Budget",category: "Hatchback"},
  {name: "WagonR",           brand: "Maruti",price: 575000,     img: "images/wagonR.jpg",      segment: "Budget",category: "Hatchback"},
  {name: "Swift",            brand: "Maruti",price: 650000,     img: "images/swift.jpg",       segment: "Budget",category: "Hatchback"},
  {name: "Baleno",           brand: "Maruti",price: 680000,     img: "images/baleno.jpg",      segment: "Budget",category: "Hatchback"},
  {name: "Dzire",            brand: "Maruti",price: 690000,     img: "images/dzire.jpg",       segment: "Budget",category: "Sedan"},
  {name: "Fronx",            brand: "Maruti",price: 760000,     img: "images/fronx.jpg",       segment: "Mid-Range",category: "SUV"},
  {name: "Brezza",           brand: "Maruti",price: 850000,     img: "images/breeza.jpg",      segment: "Mid-Range",category: "SUV"},
  {name: "Ertiga",           brand: "Maruti",price: 920000,     img: "images/ertiga.jpg",      segment: "Mid-Range",category: "MPV"},
  {name: "Grand Vitara",     brand: "Maruti",price: 1150000,    img: "images/grand vitara.jpg",segment: "Mid-Range",category: "SUV"},
  {name: "XL6",              brand: "Maruti",price: 1180000,    img: "images/xl6.jpg",       segment: "Mid-Range",category: "MPV"},
  {name: "Jimny",            brand: "Maruti",price: 1250000,    img: "images/jimny.jpg",     segment: "Mid-Range",category: "SUV"},
  {name: "eVX",              brand: "Maruti",price: 2000000,    img: "images/eVX.jpg",       segment: "Mid-Range",category: "EV" },
  { name: "Grand i10 Nios",  brand: "Hyundai", price: 555000,   img: "images/grand-i10-nios.jpg",   segment: "Budget", category: "Hatchback" },
  { name: "Aura",            brand: "Hyundai", price: 599990,   img: "images/aura.jpg",             segment: "Budget", category: "Sedan" },
  { name: "Exter",           brand: "Hyundai", price: 573500,   img: "images/exter.jpg",            segment: "Budget", category: "SUV" },
  { name: "i20",             brand: "Hyundai", price: 599000,   img: "images/i20.jpg",              segment: "Budget", category: "Hatchback" },
  { name: "Venue",           brand: "Hyundai", price: 799900,   img: "images/venue.jpg",            segment: "Budget", category: "SUV" },
  { name: "i20 N Line",      brand: "Hyundai", price: 921500,   img: "images/i20 n line.jpg",       segment: "Mid",    category: "Hatchback" },
  { name: "Venue N Line",    brand: "Hyundai", price: 1065400,  img: "images/venue n line.jpg",     segment: "Mid",    category: "SUV" },
  { name: "Creta",           brand: "Hyundai", price: 1079000,  img: "images/creta.jpg",            segment: "Mid",    category: "SUV" },
  { name: "Verna",           brand: "Hyundai", price: 1079500,  img: "images/verna.jpg",            segment: "Mid",    category: "Sedan" },
  { name: "Alcazar",         brand: "Hyundai", price: 1449900,  img: "images/alcazar.jpg",          segment: "Mid",    category: "SUV" },
  { name: "Creta",    brand: "Hyundai", price: 1783000,  img: "images/creta 2026.jpg",      segment: "Mid",    category: "SUV" },
  { name: "Creta Electric",  brand: "Hyundai", price: 1802200,  img: "images/creta electric.jpg",   segment: "Mid",    category: "EV" },
  { name: "Ioniq 5",         brand: "Hyundai", price: 4630000,  img: "images/ioniq 5.jpg",          segment: "Luxury", category: "EV" },
  { name: "XUV 3XO",         brand: "Mahindra", price: 790000,  img: "images/xuv 3xo.jpg",          segment: "Budget", category: "SUV" },
  { name: "Bolero",          brand: "Mahindra", price: 980000,  img: "images/bolero.jpg",         segment: "Budget", category: "SUV" },
  { name: "Bolero Neo",      brand: "Mahindra", price: 1050000, img: "images/bolero neo.jpg",     segment: "Budget", category: "SUV" },
  { name: "Thar",            brand: "Mahindra", price: 1150000, img: "images/thar.jpg",           segment: "Mid",    category: "Off-Road" },
  { name: "Scorpio Classic", brand: "Mahindra", price: 1360000, img: "images/scorpio classic.jpg",segment: "Mid",    category: "SUV" },
  { name: "Marazzo",         brand: "Mahindra", price: 1410000, img: "images/marazzo.jpg",        segment: "Mid",    category: "SUV" },
  { name: "Scorpio N",       brand: "Mahindra", price: 1420000, img: "images/scorpio n.jpg",      segment: "Mid",    category: "SUV" },
  { name: "XUV700",          brand: "Mahindra", price: 1450000, img: "images/xuv 700.jpg",        segment: "Mid",    category: "SUV" },
  { name: "Thar Roxx",       brand: "Mahindra", price: 1400000, img: "images/thar roxx.jpg",      segment: "Mid",    category: "Off-Road" },
  { name: "BE.05",           brand: "Mahindra", price: 240000,  img: "images/be.05.jpg",           segment: "Luxury", category: "EV" },
  { name: "XEV 9e",          brand: "Mahindra", price: 2600000, img: "images/xev 9e.jpg",          segment: "Luxury", category: "EV" },
  { name: "Tiago",     brand: "Tata", price: 565000,  img: "images/tiago.jpg",     segment: "Budget", category: "Hatchback" },
  { name: "Tigor",     brand: "Tata", price: 630000,  img: "images/tigor.jpg",     segment: "Budget", category: "Sedan" },
  { name: "Punch",     brand: "Tata", price: 620000,  img: "images/punch.jpg",     segment: "Budget", category: "SUV" },
  { name: "Altroz",    brand: "Tata", price: 695000,  img: "images/altroz.jpg",    segment: "Budget", category: "Hatchback" },
  { name: "Nexon",     brand: "Tata", price: 850000,  img: "images/nexon.jpg",     segment: "Budget", category: "SUV" },
  { name: "Punch EV",  brand: "Tata", price: 1120000, img: "images/punch ev.jpg",  segment: "Mid",    category: "EV" },
  { name: "Nexon EV",  brand: "Tata", price: 1450000, img: "images/nexon ev.jpg",  segment: "Mid",    category: "EV" },
  { name: "Curvv EV",  brand: "Tata", price: 1700000, img: "images/curvv ev.jpg",   segment: "Mid",    category: "EV" },
  { name: "Harrier",   brand: "Tata", price: 1550000, img: "images/harrier.jpg",   segment: "Mid",    category: "SUV" },
  { name: "Safari",    brand: "Tata", price: 1680000, img: "images/safari.jpg",    segment: "Mid",    category: "SUV" },
  { name: "Sierra",    brand: "Tata", price: 2500000, img: "images/sierra.jpg",    segment: "Luxury", category: "SUV" },
  { name: "Sonet",         brand: "Kia", price: 820000,  img: "images/sonet.jpg",         segment: "Budget", category: "SUV" },
  { name: "Syros",         brand: "Kia", price: 950000,  img: "images/syros.jpg",         segment: "Budget", category: "SUV" },
  { name: "Carens",        brand: "Kia", price: 1080000, img: "images/carens.jpg",        segment: "Mid",    category: "MPV" },
  { name: "Seltos",        brand: "Kia", price: 1120000, img: "images/seltos.jpg",        segment: "Mid",    category: "SUV" },
  { name: "Clavis",        brand: "Kia", price: 1150000, img: "images/clavis.jpg",        segment: "Mid",    category: "SUV" },
  { name: "Sonet X-Line",  brand: "Kia", price: 1500000, img: "images/sonet x-line.jpg",  segment: "Mid",    category: "SUV" },
  { name: "Carens X-Line",  brand: "Kia", price: 1650000, img: "images/carens x-line.jpg",  segment: "Mid",    category: "MPV" },
  { name: "EV6",           brand: "Kia", price: 6300000, img: "images/ev 6.jpg",           segment: "Ultra",  category: "EV" },
  { name: "City",     brand: "Honda",     price: 1400000,img: "images/honda city.jpg",     segment: "Mid",     category: "Sedan" },
  { name: "Glanza",               brand: "Toyota", price: 690000,   img: "images/glanza.jpg",               segment: "Budget",  category: "Hatchback" },
  { name: "Urban Cruiser Taisor", brand: "Toyota", price: 780000,   img: "images/urban cruiser taisor.jpg", segment: "Budget",  category: "SUV" },
  { name: "Rumion",               brand: "Toyota", price: 1050000,  img: "images/rumion.jpg",               segment: "Mid",     category: "MPV" },
  { name: "Hyryder",              brand: "Toyota", price: 1120000,  img: "images/hyryder.jpg",              segment: "Mid",     category: "SUV" },
  { name: "Innova Crysta",        brand: "Toyota", price: 1999000,  img: "images/innova crysta.jpg",        segment: "Mid",     category: "MPV" },
  { name: "Innova Hycross",       brand: "Toyota", price: 1950000,  img: "images/innova hycross.jpg",       segment: "Mid",     category: "MPV" },
  { name: "Fortuner",             brand: "Toyota", price: 3650000,  img: "images/fortuner.jpg",             segment: "Luxury",  category: "SUV" },
  { name: "Fortuner-Legender",    brand: "Toyota", price: 4300000,  img: "images/fortuner-legender.jpg",    segment: "Luxury",  category: "SUV" },
  { name: "Hilux",                brand: "Toyota", price: 3100000,  img: "images/hilux.jpg",                segment: "Luxury",  category: "Pickup" },
  { name: "Camry Hybrid",         brand: "Toyota", price: 4800000,  img: "images/camry hybrid.jpg",         segment:"Luxury",  category: "Sedan" },
  { name: "bZ4X",                 brand: "Toyota", price: 7000000,  img: "images/bz4x.jpg",                 segment: "Luxury",  category: "EV" },
  { name: "Land Cruiser Prado",   brand: "Toyota", price: 12000000, img: "images/land cruiser prado.jpg",   segment: "Ultra",  category: "SUV" },
  { name: "Land Cruiser 300",     brand: "Toyota", price: 21000000, img: "images/land cruiser 300.jpg",     segment: "Ultra",   category: "SUV" },
  // ── LAND ROVER / RANGE ROVER ─────────────────────────────────────────
  { name: "Defender 90",             brand: "Land Rover", price:10500000, img: "images/defender 90.jpg",        segment: "Luxury", category: "SUV" },
  { name: "Defender 110",            brand: "Land Rover", price:13000000, img: "images/defender 110.jpg",       segment: "Ultra",  category: "SUV" },
  { name: "Discovery Sport",         brand: "Land Rover", price:6700000,  img: "images/discovery sport.jpg",  segment: "Luxury", category: "SUV" },
  { name: "Discovery",               brand: "Land Rover", price:9700000,  img: "images/discovery.jpg",        segment: "Luxury", category: "SUV" },
  { name: "Range Rover Evoque",      brand: "Land Rover", price:7200000,  img: "images/range rover evoque.jpg",        segment: "Luxury", category: "SUV" },
  { name: "Range Rover Velar",       brand: "Land Rover", price:9400000,  img: "images/range rover velar.jpg",         segment: "Luxury",  category: "SUV"},
  { name: "Range Rover Sport",       brand: "Land Rover", price:14500000, img: "images/range rover sport.jpg",         segment: "Ultra",  category: "SUV" },
  { name: "Range Rover",             brand: "Land Rover", price:24000000, img: "images/range rover.jpg",               segment: "Ultra",  category: "SUV" },
  { name: "Range Rover SV",          brand: "Land Rover", price:40000000, img: "images/range rover sv.jpg",            segment: "Ultra",  category: "SUV" },
  { name: "Range Rover Autobiography",brand: "Land Rover", price:30000000, img: "images/range rover autobiography.jpg",segment: "Ultra",  category: "SUV" },
  { name: "A-Class Limousine", brand: "Mercedes", price: 4800000,  img: "images/a-class limousine.jpg", segment: "Luxury", category: "Sedan" },
  { name: "GLA",               brand: "Mercedes", price: 5200000,  img: "images/gla.jpg",               segment: "Luxury", category: "SUV" },
  { name: "EQA",               brand: "Mercedes", price: 6800000,  img: "images/eqa.jpg",               segment: "Luxury", category: "EV" },
  { name: "GLC",               brand: "Mercedes", price: 7800000,  img: "images/glc.jpg",               segment: "Luxury",  category: "SUV"},
  { name: "E-Class",           brand: "Mercedes", price: 8200000,  img: "images/e class.jpg",           segment: "Luxury",  category: "Sedan" },
  { name: "GLE",               brand: "Mercedes", price: 11000000, img: "images/gle.jpg",               segment: "Ultra",  category: "SUV" },
  { name: "CLE Cabriolet",     brand: "Mercedes", price: 12000000, img: "images/cle cabriolet.jpg",     segment: "Ultra",  category: "Convertible" },
  { name: "EQE SUV",           brand: "Mercedes", price: 14000000, img: "images/eqe suv.jpg",           segment: "Ultra",  category: "EV" },
  { name: "GLS",               brand: "Mercedes", price: 14000000, img: "images/gls.jpg",               segment: "Ultra",  category: "SUV" },
  { name: "EQS",               brand: "Mercedes", price: 16500000, img: "images/eqs.jpg",               segment: "Ultra",  category: "EV" },
  { name: "S-Class",           brand: "Mercedes", price: 19000000, img: "images/s-class.jpg",           segment: "Ultra",  category: "Sedan" },
  { name: "AMG C63",           brand: "Mercedes", price: 19500000, img: "images/amg c63.jpg",           segment: "Ultra",  category: "AMG" },
  { name: "G-Class",           brand: "Mercedes", price: 28000000, img: "images/g-class.jpg",           segment: "Ultra",  category: "SUV" },
  { name: "AMG GT Coupe",      brand: "Mercedes", price: 30000000, img: "images/amg gt coupe.jpg",      segment: "Ultra",  category: "AMG" },
  { name: "Maybach S680",      brand: "Mercedes", price: 35000000, img: "images/maybach s680.jpg",      segment: "Ultra",  category: "Sedan" },
  { name: "2 Series",              brand: "BMW", price: 4600000,  img: "images/2 series.jpg",             segment: "Luxury", category: "Sedan" },
  { name: "3 Series",              brand: "BMW", price: 7200000,  img: "images/3 series.jpg",              segment: "Luxury", category: "Sedan" },
  { name: "5 Series",              brand: "BMW", price: 7800000,  img: "images/5 series.jpg",              segment: "Luxury", category: "Sedan" },
  { name: "X1",                    brand: "BMW", price: 5000000,  img: "images/x1.jpg",                    segment: "Luxury", category: "SUV" },
  { name: "X3",                    brand: "BMW", price: 7500000,  img: "images/x3.jpg",                    segment: "Luxury", category: "SUV" },
  { name: "X5",                    brand: "BMW", price: 9700000,  img: "images/x5.jpg",                    segment: "Luxury", category: "SUV" },
  { name: "Z4",                    brand: "BMW", price: 9200000,  img: "images/z4.jpg",                    segment: "Luxury", category: "Sports" },
  { name: "Z4 Roadstar",           brand: "BMW", price: 9200000,  img: "images/z4 roadstar.jpg",           segment: "Luxury", category: "Convertible" },
  { name: "8 Series",              brand: "BMW", price: 13000000, img: "images/8 series.jpg",              segment: "Ultra",  category: "Coupe" },
  { name: "8 Series Convertible",  brand: "BMW", price: 18000000, img: "images/8 series convertible.jpg",  segment: "Ultra",  category: "Convertible" },
  { name: "X7",                    brand: "BMW", price: 13000000, img: "images/x7.jpg",                    segment: "Ultra",  category: "SUV" },
  { name: "M4 Competition Conv.",  brand: "BMW", price: 15500000, img: "images/m4 competition convertible.jpg", segment: "Ultra", category: "Convertible" },
  { name: "7 Series",              brand: "BMW", price: 18500000, img: "images/7 series.jpg",              segment: "Ultra",  category: "Sedan" },
  { name: "i7",                    brand: "BMW", price: 21000000, img: "images/i7.jpg",                    segment: "Ultra",  category: "EV" },
  { name: "M5",                    brand: "BMW", price: 20000000, img: "images/m5.jpg",                    segment: "Ultra",  category: "Sedan" },
  { name: "M8 Convertible",        brand: "BMW", price: 24000000, img: "images/m8 convertible.jpg",        segment: "Ultra",  category: "Convertible" },
  { name: "XM",                    brand: "BMW", price: 26000000, img: "images/xm.jpg",                    segment: "Ultra",  category: "SUV" },
];

let expenseChartInst = null;
let budgetChartInst  = null;
let userEMI = 0;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  // Validate Land Rover cars
  const landRoverCars = cars.filter(c => c.brand === 'Land Rover');
  console.log(`[Init Debug] Total cars in array: ${cars.length}`);
  console.log(`[Init Debug] Land Rover cars found: ${landRoverCars.length}`);
  landRoverCars.forEach(car => {
    console.log(`  • ${car.name} | Segment: ${car.segment} | Image: ${car.img}`);
  });

  normalizeLandRoverImagePaths();
  renderCars('all');
  dedupeFilterButtons();
  setupFilterBtns();
  setupNavScroll();
  setupHamburger();
  setupScrollReveal();

  // bind Keshav DOM refs after page is ready
  aiPanel      = document.getElementById('aiPanel');
  aiBackdrop   = document.getElementById('aiBackdrop');
  aiOrb        = document.getElementById('aiOrb');
  aiWaveBars   = document.getElementById('aiWaveBars');
  aiStatus     = document.getElementById('aiStatus');
  aiTranscript = document.getElementById('aiTranscript');
  aiResponse   = document.getElementById('aiResponse');
  aiMicBtn     = document.getElementById('aiMicBtn');
  aiMicIcon    = document.getElementById('aiMicIcon');
  console.log('[Keshav] DOM ready. aiMicBtn:', aiMicBtn);

  // preload voices
  if (synth) synth.getVoices();
  if (synth && synth.onvoiceschanged !== undefined)
    synth.onvoiceschanged = () => synth.getVoices();
});

// ── NAVBAR SCROLL ──
function setupNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    highlightNavLink();
  });
}

function highlightNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (!link) return;
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    link.classList.toggle('active', scrollY >= top && scrollY < bottom);
  });
}

// ── HAMBURGER ──
function setupHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// ── SMOOTH SCROLL ──
function smoothScroll(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
}

// ── SCROLL REVEAL ──
function setupScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── EMI CALCULATION ──
function calcEMI(principal, annualRate, years) {
  if (principal <= 0) return 0;
  if (annualRate === 0) return principal / (years * 12);
  const r = annualRate / 12 / 100;
  const n = years * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function fmt(num) {
  return '₹' + Math.round(num).toLocaleString('en-IN');
}

// ── MAIN CALCULATE ──
function calculateAffordability() {
  const salary      = parseFloat(document.getElementById('salary').value)      || 0;
  const expenses    = parseFloat(document.getElementById('expenses').value)    || 0;
  const savings     = parseFloat(document.getElementById('savings').value)     || 0;
  const carPrice    = parseFloat(document.getElementById('carPrice').value)    || 0;
  const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
  const loanPeriod  = parseFloat(document.getElementById('loanPeriod').value)  || 3;
  const interestRate= parseFloat(document.getElementById('interestRate').value)|| 8.5;

  if (!salary || !carPrice) 
    {alert('Please enter at least your Monthly Salary and Car Price.');
      return;
    }

  const loanAmount   = Math.max(0, carPrice - downPayment);
  const emi          = calcEMI(loanAmount, interestRate, loanPeriod);
  const totalPayable = emi * loanPeriod * 12;
  const totalInterest= totalPayable - loanAmount;
  const surplus      = salary - expenses - emi;
  const emiRatio     = (emi / salary) * 100;
  const budgetHealth = surplus > 0 ? (surplus / salary) * 100 : 0;
  const savCoverage  = savings > 0 ? Math.min((savings / carPrice) * 100, 100) : 0;

  userEMI = emi;

  updateVerdict(emiRatio, budgetHealth, surplus);
  updateEMIBreakdown(emi, totalPayable, totalInterest, surplus);
  updateMeters(emiRatio, budgetHealth, savCoverage);
  updateCharts(salary, expenses, emi, savings);
  updateSuggestions(emiRatio, budgetHealth, surplus, savings, downPayment, carPrice);
  renderCars(activeBrand, activeSegment);

  smoothScroll('#results');
}

// ── VERDICT ──
function updateVerdict(emiRatio, budgetHealth, surplus) {
  const icon  = document.getElementById('verdictIcon');
  const title = document.getElementById('verdictTitle');
  const sub   = document.getElementById('verdictSub');
  const badge = document.getElementById('verdictBadge');

  icon.className  = 'verdict-icon';
  badge.className = 'verdict-badge';

  if (emiRatio <= 40 && budgetHealth >= 20 && surplus > 0) {
    icon.innerHTML  = '<i class="fas fa-check-circle"></i>';
    icon.classList.add('yes');
    title.textContent = 'Yes! You Can Afford This Car';
    sub.textContent   = `Your EMI is ${emiRatio.toFixed(1)}% of salary — well within the safe zone. You'll have a healthy monthly surplus.`;
    badge.textContent = '✓ Affordable';
    badge.classList.add('yes');
  } else if (emiRatio <= 55 && surplus > 0) {
    icon.innerHTML  = '<i class="fas fa-exclamation-circle"></i>';
    icon.classList.add('maybe');
    title.textContent = 'Possible, But Stretch Your Budget';
    sub.textContent   = `EMI is ${emiRatio.toFixed(1)}% of salary. It's manageable but leaves limited room for emergencies.`;
    badge.textContent = '⚠ Borderline';
    badge.classList.add('maybe');
  } else {
    icon.innerHTML  = '<i class="fas fa-times-circle"></i>';
    icon.classList.add('no');
    title.textContent = 'Not Recommended Right Now';
    sub.textContent   = `EMI is ${emiRatio.toFixed(1)}% of salary. This may strain your finances. Consider a lower price or higher down payment.`;
    badge.textContent = '✗ Not Affordable';
    badge.classList.add('no');
  }
}

// ── EMI BREAKDOWN ──
function updateEMIBreakdown(emi, total, interest, surplus) {
  document.getElementById('monthlyEMI').textContent   = fmt(emi);
  document.getElementById('totalAmount').textContent  = fmt(total);
  document.getElementById('totalInterest').textContent= fmt(interest);
  document.getElementById('monthlySurplus').textContent = fmt(Math.max(0, surplus));
  document.getElementById('emiBreakdown').style.display = 'grid';
}

// ── METERS ──
function updateMeters(emiRatio, budgetHealth, savCoverage) {
  setMeter('emiRatioBar',       'emiRatioText',       Math.min(emiRatio, 100),    emiRatio);
  setMeter('budgetHealthBar',   'budgetHealthText',   Math.min(budgetHealth, 100), 100 - budgetHealth);
  setMeter('savingsCoverageBar','savingsCoverageText', savCoverage,                100 - savCoverage);
}

function setMeter(barId, textId, pct, riskPct) {
  const bar  = document.getElementById(barId);
  const text = document.getElementById(textId);
  bar.style.width = `${pct.toFixed(1)}%`;
  text.textContent = `${pct.toFixed(1)}%`;
  if (riskPct <= 30)      bar.style.background = 'linear-gradient(90deg,#22c55e,#16a34a)';
  else if (riskPct <= 60) bar.style.background = 'linear-gradient(90deg,#f59e0b,#d97706)';
  else                    bar.style.background = 'linear-gradient(90deg,#ef4444,#dc2626)';
}

// ── CHARTS ──
function updateCharts(salary, expenses, emi, savings) {
  const surplus = Math.max(0, salary - expenses - emi);

  // Destroy old instances
  if (expenseChartInst) expenseChartInst.destroy();
  if (budgetChartInst)  budgetChartInst.destroy();

  const chartDefaults = {
    plugins: { legend: { labels: { color: '#c8c8d8', font: { size: 12 } } } }
  };

  expenseChartInst = new Chart(document.getElementById('expenseChart'), {
    type: 'doughnut',
    data: {
      labels: ['Expenses', 'EMI', 'Surplus', 'Savings'],
      datasets: [{
        data: [expenses, emi, surplus, savings],
        backgroundColor: ['#9b1a3e','#00d4ff','#22c55e','#8b5cf6'],
        borderWidth: 0,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '65%',
      plugins: { ...chartDefaults.plugins }
    }
  });

  budgetChartInst = new Chart(document.getElementById('budgetChart'), {
    type: 'bar',
    data: {
      labels: ['Housing', 'Food', 'Transport', 'Utilities', 'EMI', 'Surplus'],
      datasets: [{
        label: '₹ Monthly',
        data: [
          expenses * 0.35, expenses * 0.25, expenses * 0.15,
          expenses * 0.10, emi, surplus
        ],
        backgroundColor: [
          'rgba(155,26,62,0.7)','rgba(0,212,255,0.7)','rgba(139,92,246,0.7)',
          'rgba(245,158,11,0.7)','rgba(239,68,68,0.7)','rgba(34,197,94,0.7)'
        ],
        borderRadius: 6,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, ticks: { color: '#7a7a9a' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#7a7a9a' }, grid: { display: false } }
      },
      plugins: { ...chartDefaults.plugins }
    }
  });
}

// ── AI SUGGESTIONS ──
function updateSuggestions(emiRatio, budgetHealth, surplus, savings, downPayment, carPrice) {
  const list = document.getElementById('suggestionsList');
  const tips = [];

  if (emiRatio > 55)
    tips.push({ type: 'danger',  icon: 'fa-triangle-exclamation', text: 'EMI exceeds 55% of salary — consider a higher down payment or a more affordable car.' });
  else if (emiRatio > 40)
    tips.push({ type: 'warning', icon: 'fa-circle-exclamation',   text: `EMI is ${emiRatio.toFixed(1)}% of salary. Try to keep it under 40% for financial comfort.` });
  else
    tips.push({ type: 'success', icon: 'fa-circle-check',         text: `Great! Your EMI ratio is ${emiRatio.toFixed(1)}% — well within the recommended 40% limit.` });

  if (surplus < 5000)
    tips.push({ type: 'danger',  icon: 'fa-triangle-exclamation', text: 'Monthly surplus is very low. Build an emergency fund before committing to a car loan.' });
  else if (surplus < 15000)
    tips.push({ type: 'warning', icon: 'fa-lightbulb',            text: 'Consider reducing discretionary expenses to improve your monthly surplus.' });
  else
    tips.push({ type: 'success', icon: 'fa-circle-check',         text: `Healthy surplus of ${fmt(surplus)}/month. You're in a good position to handle EMIs.` });

  if (downPayment < carPrice * 0.2)
    tips.push({ type: 'warning', icon: 'fa-lightbulb', text: 'Aim for at least 20% down payment to reduce loan burden and interest outgo.' });

  if (savings > carPrice * 0.5)
    tips.push({ type: 'success', icon: 'fa-star', text: 'Strong savings! You could consider a larger down payment to minimise interest costs.' });

  tips.push({ type: 'default', icon: 'fa-info-circle', text: 'Compare interest rates across banks — even 0.5% difference can save thousands over the loan tenure.' });

  list.innerHTML = tips.map(t =>
    `<li class="suggestion-item ${t.type}"><i class="fas ${t.icon}"></i><span>${t.text}</span></li>`
  ).join('');
}

// ── CAR CARDS ──
let activeSegment = 'all';
let activeBrand   = 'all';

function renderCars(brand, segment) {
  if (brand   !== undefined) activeBrand   = brand;
  if (segment !== undefined) activeSegment = segment;

  console.log(`[Filter Debug] Brand: '${activeBrand}' | Segment: '${activeSegment}'`);

  const grid = document.getElementById('carGrid');

  const filtered = cars.filter(car => {
    const brandMatch   = activeBrand   === 'all' || car.brand   === activeBrand;
    const segmentMatch = activeSegment === 'all' || car.segment === activeSegment;
    return brandMatch && segmentMatch;
  });

  if (activeBrand === 'Land Rover') {
    const landRoverCars = cars.filter(c => c.brand === 'Land Rover');
    console.log(`[Filter Debug] Land Rover brand filter: Found ${landRoverCars.length} total Land Rover cars, ${filtered.length} after segment filter`);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-cars-msg"><i class="fas fa-car-side"></i> No cars found for this filter combination.</p>`;
    return;
  }

  grid.innerHTML = filtered.map((car, i) => {
    const carEMI       = calcEMI(car.price * 0.8, 8.5, 3);
    const isAffordable = userEMI > 0 && carEMI <= userEMI * 1.1;
    const isAbove      = userEMI > 0 && !isAffordable;
    const isLuxury     = car.segment === 'Luxury' || car.segment === 'Ultra';

    let badgeClass, badgeLabel;
    if (isAffordable) {
      badgeClass = 'badge-affordable'; badgeLabel = '✓ Affordable';
    } else if (isAbove && isLuxury) {
      badgeClass = 'badge-luxury';     badgeLabel = car.segment === 'Ultra' ? 'Ultra Luxury' : 'Luxury';
    } else if (isAbove) {
      badgeClass = 'badge-above';      badgeLabel = 'Above Budget';
    } else {
      const segLabels = { Budget: 'Budget', Mid: 'Mid-Range', Luxury: 'Luxury', Ultra: 'Ultra Luxury' };
      badgeClass = `badge-seg-${car.segment.toLowerCase()}`;
      badgeLabel = segLabels[car.segment] || car.category;
    }

    const cardClass = isAffordable ? 'affordable-car' : (isLuxury ? 'luxury-car' : '');
    const globalIdx = cars.indexOf(car);

    return `
      <div class="car-card ${cardClass}" style="animation-delay:${i * 0.07}s;cursor:pointer" onclick="openModal(${globalIdx})">
        <div class="car-img-wrap">
          <img src="${car.img}" alt="${car.brand} ${car.name}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1552519507-da3effab3dd1?w=400&q=80&crop=entropy&cs=tinysrgb&fit=max'">
          <span class="car-badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.name}</h4>
          <p class="car-meta">${car.brand} &bull; ${car.category}</p>
          <div class="car-footer">
            <span class="car-price">${fmt(car.price)}</span>
            <span class="car-emi">~${fmt(carEMI)}/mo</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── FILTER BUTTONS ──
function setupFilterBtns() {
  // Brand filter — resets segment to "all" on click
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const brandClicked = btn.dataset.brand;
      console.log(`[Click Debug] Brand filter clicked: '${brandClicked}'`);
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // reset segment tab to All
      document.querySelectorAll('.seg-tab').forEach(t => t.classList.remove('active'));
      document.querySelector('.seg-tab[data-segment="all"]').classList.add('active');
      renderCars(brandClicked, 'all');
    });
  });

  // Segment tabs — resets brand to "all" on click
  document.querySelectorAll('.seg-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.seg-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // reset brand filter to All Brands
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.filter-btn[data-brand="all"]').classList.add('active');
      renderCars('all', tab.dataset.segment);
    });
  });
}

// Remove duplicate brand filter buttons (keeps first occurrence)
function dedupeFilterButtons() {
  const bar = document.getElementById('brandFilterBar');
  if (!bar) return;
  const seen = new Set();
  // Convert to array because we'll be removing nodes
  Array.from(bar.querySelectorAll('.filter-btn')).forEach(btn => {
    const brand = btn.dataset.brand;
    if (!brand) return;
    if (brand === 'all') return; // always keep 'all'
    if (seen.has(brand)) {
      btn.remove();
    } else {
      seen.add(brand);
    }
  });
}

// Assign unique, standardized image paths for each Land Rover model.
// Uses a fallback image if local image doesn't exist.
function normalizeLandRoverImagePaths() {
  const mapping = {
    'Defender 90': "defender 90.jpg",
    'Defender 110': "defender 110.jpg",
    'Discovery Sport': "discovery sport.jpg",
    'Discovery': "discovery.jpg",
    'Range Rover Evoque': "range rover evoque.jpg",
    'Range Rover Velar': "range rover velar.jpg",
    'Range Rover Sport': "rover sport.jpg",
    'Range Rover': "range rover.jpg",
    'Range Rover SV': "range rover sv.jpg",
    'Range Rover Autobiography': "rover autobiography.jpg"
  };

  let count = 0;
  cars.forEach(car => {
    if (car.brand !== 'Land Rover') return;
    const fname = mapping[car.name] || (`landrover-${car.name.toLowerCase().replace(/\s+/g,'-')}.jpg`);
    car.img = `images/${fname}`;
    count++;
  });
  console.log(`[Debug] Normalized ${count} Land Rover cars with unique image paths`);
}

// ══════════════════════════════════════════
// HEY KESHAV VOICE ASSISTANT
// ══════════════════════════════════════════

let aiPanel, aiBackdrop, aiOrb, aiWaveBars, aiStatus, aiTranscript, aiResponse, aiMicBtn, aiMicIcon;
let isListening = false;
let recognition = null;
const synth     = window.speechSynthesis;

// ── COMMAND MAP ──
// Each entry: { match: [keywords], brand, segment, response }
const voiceCommands = [
  { match: ['bmw'],
    brand: 'BMW', segment: 'all',
    response: 'Showing BMW luxury vehicles. Enjoy the ultimate driving machine.' },
  { match: ['mercedes', 'benz', 'merc'],
    brand: 'Mercedes', segment: 'all',
    response: 'Displaying Mercedes-Benz premium cars. The best or nothing.' },
  { match: ['hyundai'],
    brand: 'Hyundai', segment: 'all',
    response: 'Here are all Hyundai cars available.' },
  { match: ['tata'],
    brand: 'Tata', segment: 'all',
    response: 'Showing Tata Motors lineup for you.' },
  { match: ['mahindra'],
    brand: 'Mahindra', segment: 'all',
    response: 'Displaying Mahindra SUVs and EVs.' },
  { match: ['kia'],
    brand: 'Kia', segment: 'all',
    response: 'Here are all Kia cars for you.' },
  { match: ['maruti', 'suzuki'],
    brand: 'Maruti', segment: 'all',
    response: 'Showing Maruti Suzuki cars.' },
  { match: ['toyota'],
    brand: 'Toyota', segment: 'all',
    response: 'Displaying Toyota vehicles.' },
  { match: ['ultra luxury', 'ultra', 'dream car', 'dream'],
    brand: 'all', segment: 'Ultra',
    response: 'Opening ultra luxury dream cars. These are the finest machines on earth.' },
  { match: ['luxury'],
    brand: 'all', segment: 'Luxury',
    response: 'Here are the luxury cars you preferred.' },
  { match: ['budget', 'affordable', 'cheap', 'under 20'],
    brand: 'all', segment: 'Budget',
    response: 'Displaying affordable cars under 20 lakhs.' },
  { match: ['mid range', 'mid-range', 'mid'],
    brand: 'all', segment: 'Mid',
    response: 'Showing mid-range cars between 20 and 50 lakhs.' },
  { match: ['electric', 'ev', 'e v'],
    brand: 'all', segment: 'all',
    response: 'Here are the electric vehicles you requested.',
    categoryFilter: 'EV' },
  { match: ['suv'],
    brand: 'all', segment: 'all',
    response: 'Displaying all SUVs across every segment.',
    categoryFilter: 'SUV' },
  { match: ['under 1 crore', 'under one crore', 'one crore', '1 crore', 'under crore'],
    brand: 'all', segment: 'Luxury',
    response: 'Showing cars under 1 crore. These are premium luxury vehicles.' },
  { match: ['all', 'reset', 'show all', 'everything'],
    brand: 'all', segment: 'all',
    response: 'Showing all cars. Browse freely.' },
];

// ── TOGGLE PANEL ──
function toggleAssistant() {
  const open = aiPanel.classList.toggle('open');
  aiBackdrop.classList.toggle('open', open);
  if (!open) stopListening();
}

// ── SET UI STATE ──
function setAIState(state) {
  // state: 'idle' | 'listening' | 'speaking'
  aiOrb.className      = `ai-orb ${state !== 'idle' ? state : ''}`;
  aiWaveBars.className = `ai-wave-bars ${state !== 'idle' ? 'active' : ''} ${state === 'speaking' ? 'speaking' : ''}`;
  aiMicBtn.className   = `ai-mic-btn ${state !== 'idle' ? state : ''}`;
  aiStatus.className   = `ai-status ${state !== 'idle' ? state : ''}`;

  if (state === 'idle') {
    aiMicIcon.className = 'fas fa-microphone';
    aiStatus.textContent = 'Tap the mic to speak';
  } else if (state === 'listening') {
    aiMicIcon.className = 'fas fa-stop';
    aiStatus.textContent = 'Listening…';
  } else if (state === 'speaking') {
    aiMicIcon.className = 'fas fa-volume-up';
    aiStatus.textContent = 'Speaking…';
  }
}

// ── SPEAK ──
function speak(text, onEnd) {
  synth.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang  = 'en-IN';
  utt.rate  = 0.95;
  utt.pitch = 1.05;

  // female voice — priority order for natural sound
  const voices = synth.getVoices();
  const femaleVoice =
    voices.find(v => v.name === 'Google UK English Female')                          ||
    voices.find(v => v.name.includes('Zira'))                                        ||
    voices.find(v => v.name.includes('Samantha'))                                    ||
    voices.find(v => v.name.toLowerCase().includes('female') && v.lang.startsWith('en')) ||
    voices.find(v => v.lang === 'en-IN')                                             ||
    voices.find(v => v.lang.startsWith('en-'))                                       ||
    voices[0];
  if (femaleVoice) utt.voice = femaleVoice;
  console.log('[Keshav] Voice selected:', femaleVoice ? femaleVoice.name : 'browser default');

  utt.onstart = () => setAIState('speaking');
  utt.onend   = () => { setAIState('idle'); if (onEnd) onEnd(); };
  utt.onerror = () => setAIState('idle');
  synth.speak(utt);
}

// ── PROCESS COMMAND ──
function runVoiceCommand(transcript) {
  const command = transcript.toLowerCase().trim();
  console.log('[Keshav] Recognized speech:', transcript);
  console.log('[Keshav] Parsed command:', command);

  aiTranscript.textContent = `"${transcript}"`;
  aiResponse.classList.remove('visible');

  // strip wake word then re-check
  const text = command.replace(/^hey\s*keshav[,.]?\s*/i, '').trim() || command;
  console.log('[Keshav] After wake-word strip:', text);

  // find matching command using includes() — flexible, not exact
  let matched = null;
  for (const cmd of voiceCommands) {
    if (cmd.match.some(kw => text.includes(kw))) { matched = cmd; break; }
  }
  console.log('[Keshav] Matched command:', matched ? matched.response : 'none');

  if (!matched) {
    const reply = "Sorry, Keshav didn't understand that. Try saying BMW, luxury, EV, or budget cars.";
    aiResponse.textContent = reply;
    aiResponse.classList.add('visible');
    speak(reply);
    return;
  }
  console.log('[Keshav] Applying filter — brand:', matched.brand, '| segment:', matched.segment, '| category:', matched.categoryFilter || 'n/a');

  // apply filters
  if (matched.categoryFilter) {
    // filter by category across all brands/segments
    renderCarsFiltered(matched.categoryFilter);
    // reset UI filter buttons to All
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-brand="all"]').classList.add('active');
    document.querySelectorAll('.seg-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.seg-tab[data-segment="all"]').classList.add('active');
  } else {
    // apply brand + segment
    renderCars(matched.brand, matched.segment);

    // sync UI buttons
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.brand === matched.brand);
    });
    document.querySelectorAll('.seg-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.segment === matched.segment);
    });
  }

  // scroll to cars section
  smoothScroll('#recommendations');

  // show response text + speak
  aiResponse.textContent = matched.response;
  aiResponse.classList.add('visible');
  speak(matched.response);
}

// category-only filter (bypasses brand+segment AND logic)
function renderCarsFiltered(category) {
  activeBrand   = 'all';
  activeSegment = 'all';
  const grid     = document.getElementById('carGrid');
  const filtered = cars.filter(c => c.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-cars-msg"><i class="fas fa-car-side"></i> No ${category} cars found.</p>`;
    return;
  }

  grid.innerHTML = filtered.map((car, i) => {
    const carEMI   = calcEMI(car.price * 0.8, 8.5, 3);
    const isLuxury = car.segment === 'Luxury' || car.segment === 'Ultra';
    const segLabels = { Budget: 'Budget', Mid: 'Mid-Range', Luxury: 'Luxury', Ultra: 'Ultra Luxury' };
    const badgeClass = `badge-seg-${car.segment.toLowerCase()}`;
    const badgeLabel = segLabels[car.segment] || car.category;
    const globalIdx  = cars.indexOf(car);
    return `
      <div class="car-card ${isLuxury ? 'luxury-car' : ''}" style="animation-delay:${i * 0.07}s;cursor:pointer" onclick="openModal(${globalIdx})">
        <div class="car-img-wrap">
          <img src="${car.img}" alt="${car.brand} ${car.name}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80'">
          <span class="car-badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.name}</h4>
          <p class="car-meta">${car.brand} &bull; ${car.category}</p>
          <div class="car-footer">
            <span class="car-price">${fmt(car.price)}</span>
            <span class="car-emi">~${fmt(carEMI)}/mo</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── SPEECH RECOGNITION ──
function startListening() {
  if (isListening) { stopListening(); return; }

  // check browser support
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    aiResponse.textContent = '⚠ Voice input not supported in this browser. Use Chrome or Edge.';
    aiResponse.classList.add('visible');
    speak('Voice input is not supported in this browser. Please use Chrome or Edge.');
    return;
  }

  synth.cancel();
  recognition = new SpeechRecognition();
  recognition.lang          = 'en-US';
  recognition.interimResults= false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isListening = true;
    setAIState('listening');
    aiTranscript.textContent = '';
    aiResponse.classList.remove('visible');
  };

  recognition.onresult = (e) => {
    const raw = e.results[0][0].transcript;
    console.log('[Keshav] Raw speech result:', raw);
    // pass raw — wake word stripped inside runVoiceCommand
    runVoiceCommand(raw);
  };

  recognition.onerror = (e) => {
    isListening = false;
    setAIState('idle');
    const msg = e.error === 'not-allowed'
      ? 'Microphone access denied. Please allow mic permissions.'
      : 'Could not hear you. Please try again.';
    aiResponse.textContent = msg;
    aiResponse.classList.add('visible');
  };

  recognition.onend = () => {
    isListening = false;
    if (aiStatus.textContent === 'Listening…') setAIState('idle');
  };

  recognition.start();
}

function stopListening() {
  if (recognition) recognition.stop();
  isListening = false;
  setAIState('idle');
}



// ══════════════════════════════════════════
// CAR DETAILS MODAL SYSTEM
// ══════════════════════════════════════════

// ── EXTENDED SPECS LOOKUP ──
// Keyed by  brand + " " + name  (must match cars array exactly)
// Any car not in this map gets a sensible auto-generated fallback
const carSpecs = {

  // ── AUDI ──────────────────────────────────────────────────────────────
  "Audi A3": {
    variant:"35 TFSI Premium Plus", fuel:"Petrol", transmission:"7-speed S tronic DCT",
    engine:"1395cc 4-cyl TFSI Turbo", power:"148 bhp", torque:"250 Nm",
    topSpeed:"210 km/h", zeroTo100:"8.4 s", mileage:"16.8 kmpl",
    seats:5, boot:"425 L", ground:"130 mm", tank:"50 L",
    screen:'10.1" MMI Touch', airbags:6, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "3-Zone Climate Control","Ambient Lighting (30 colours)","Panoramic Sunroof",
              "Audi Pre Sense City ADAS","Quattro AWD (optional)","Bang & Olufsen Sound System",
              "Audi Connect (Connected Car)","Keyless Entry & Start","Ventilated Front Seats"],
    pros:["Premium interior quality","Sporty yet comfortable ride","Excellent build quality","Feature-rich infotainment"],
    cons:["Expensive service costs","Limited rear legroom","No diesel option in India"],
    colors:["Glacier White","Mythos Black","Navarra Blue","Tango Red","Florett Silver"],
    warranty:"3 years / unlimited km"
  },

  "Audi A4": {
    variant:"40 TFSI Technology", fuel:"Petrol", transmission:"7-speed S tronic DCT",
    engine:"1984cc 4-cyl TFSI Turbo", power:"188 bhp", torque:"320 Nm",
    topSpeed:"235 km/h", zeroTo100:"7.3 s", mileage:"15.4 kmpl",
    seats:5, boot:"460 L", ground:"135 mm", tank:"54 L",
    screen:'10.1" MMI Touch', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense Plus ADAS","Quattro AWD","Bang & Olufsen 3D Sound",
              "Audi Connect Pro","Adaptive Cruise Control","Ventilated & Massaging Seats"],
    pros:["Refined ride quality","Powerful engine","Luxurious cabin","Strong resale value"],
    cons:["Pricey top variant","Firm suspension on bad roads","Expensive maintenance"],
    colors:["Glacier White","Mythos Black","Daytona Grey","Navarra Blue","Manhattan Grey"],
    warranty:"3 years / unlimited km"
  },

  "Audi A6": {
    variant:"45 TFSI Technology", fuel:"Petrol", transmission:"7-speed S tronic DCT",
    engine:"1984cc 4-cyl TFSI Turbo", power:"242 bhp", torque:"370 Nm",
    topSpeed:"250 km/h", zeroTo100:"6.3 s", mileage:"13.8 kmpl",
    seats:5, boot:"530 L", ground:"140 mm", tank:"63 L",
    screen:'10.1" MMI Touch + 8.6" Climate Display', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","HD Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense 360° ADAS","Quattro AWD","Bang & Olufsen 3D Advanced Sound",
              "Audi Connect Pro","Adaptive Air Suspension","Massaging Seats"],
    pros:["Executive-class comfort","Powerful & refined engine","Cutting-edge technology","Spacious cabin"],
    cons:["Very expensive","High running costs","Waiting period"],
    colors:["Glacier White","Mythos Black","Daytona Grey","Navarra Blue","Florett Silver"],
    warranty:"3 years / unlimited km"
  },

  "Audi A8L": {
    variant:"55 TFSI quattro", fuel:"Petrol", transmission:"8-speed Tiptronic",
    engine:"2995cc V6 TFSI Turbo", power:"335 bhp", torque:"500 Nm",
    topSpeed:"250 km/h", zeroTo100:"5.7 s", mileage:"11.2 kmpl",
    seats:5, boot:"505 L", ground:"145 mm", tank:"82 L",
    screen:'10.1" + 8.6" + 8.6" Triple MMI', airbags:10, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","HD Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense 360° ADAS","Quattro AWD","Bang & Olufsen 3D Advanced Sound (23 speakers)",
              "Audi Connect Pro","Adaptive Air Suspension","Rear Seat Entertainment",
              "Massaging & Ventilated Seats","Night Vision Assist","Audi Phone Box"],
    pros:["Flagship luxury experience","Whisper-quiet cabin","Cutting-edge tech","Rear seat comfort"],
    cons:["Extremely expensive","High maintenance","Fuel thirsty"],
    colors:["Glacier White","Mythos Black","Daytona Grey","Navarra Blue","Orca Black"],
    warranty:"3 years / unlimited km"
  },

  "Audi Q3": {
    variant:"40 TFSI quattro Premium Plus", fuel:"Petrol", transmission:"7-speed S tronic DCT",
    engine:"1984cc 4-cyl TFSI Turbo", power:"188 bhp", torque:"320 Nm",
    topSpeed:"220 km/h", zeroTo100:"7.1 s", mileage:"14.5 kmpl",
    seats:5, boot:"530 L", ground:"175 mm", tank:"60 L",
    screen:'10.25" MMI Touch', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit","Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","3-Zone Climate Control","Ambient Lighting",
              "Audi Pre Sense Front ADAS","Quattro AWD","Sonos Sound System",
              "Audi Connect","Adaptive Cruise Control","Keyless Entry"],
    pros:["Premium compact SUV","Quattro AWD confidence","Spacious for its size","Refined ride"],
    cons:["Expensive vs rivals","Rear seat tight for 3","High service costs"],
    colors:["Glacier White","Mythos Black","Navarra Blue","Tango Red","Florett Silver"],
    warranty:"3 years / unlimited km"
  },

  "Audi Q5": {
    variant:"45 TFSI quattro Technology", fuel:"Petrol", transmission:"7-speed S tronic DCT",
    engine:"1984cc 4-cyl TFSI Turbo", power:"242 bhp", torque:"370 Nm",
    topSpeed:"237 km/h", zeroTo100:"6.3 s", mileage:"13.2 kmpl",
    seats:5, boot:"550 L", ground:"185 mm", tank:"75 L",
    screen:'10.1" MMI Touch', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense Plus ADAS","Quattro AWD","Bang & Olufsen 3D Sound",
              "Audi Connect Pro","Adaptive Air Suspension","Ventilated & Massaging Seats"],
    pros:["Best-in-class ride quality","Powerful engine","Premium interior","Quattro AWD"],
    cons:["Pricey","Expensive service","Smaller boot vs rivals"],
    colors:["Glacier White","Mythos Black","Daytona Grey","Navarra Blue","Chronos Grey"],
    warranty:"3 years / unlimited km"
  },

  "Audi Q7": {
    variant:"55 TFSI quattro Technology", fuel:"Petrol", transmission:"8-speed Tiptronic",
    engine:"2995cc V6 TFSI Turbo", power:"335 bhp", torque:"500 Nm",
    topSpeed:"250 km/h", zeroTo100:"5.9 s", mileage:"11.5 kmpl",
    seats:7, boot:"770 L", ground:"195 mm", tank:"85 L",
    screen:'10.1" + 8.6" Dual MMI', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","HD Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense 360° ADAS","Quattro AWD","Bang & Olufsen 3D Advanced Sound",
              "Audi Connect Pro","Adaptive Air Suspension","3rd Row Seating",
              "Massaging Seats","Night Vision Assist"],
    pros:["7-seat luxury SUV","Powerful V6 engine","Exceptional comfort","Quattro AWD"],
    cons:["Very expensive","Fuel thirsty","Large size in city"],
    colors:["Glacier White","Mythos Black","Daytona Grey","Navarra Blue","Orca Black"],
    warranty:"3 years / unlimited km"
  },

  "Audi Q8": {
    variant:"55 TFSI quattro", fuel:"Petrol", transmission:"8-speed Tiptronic",
    engine:"2995cc V6 TFSI Turbo", power:"335 bhp", torque:"500 Nm",
    topSpeed:"250 km/h", zeroTo100:"5.9 s", mileage:"10.8 kmpl",
    seats:5, boot:"605 L", ground:"195 mm", tank:"85 L",
    screen:'10.1" + 8.6" + 8.6" Triple MMI', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","HD Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense 360° ADAS","Quattro AWD","Bang & Olufsen 3D Advanced Sound (23 speakers)",
              "Audi Connect Pro","Adaptive Air Suspension","Massaging & Ventilated Seats",
              "Night Vision Assist","Head-Up Display"],
    pros:["Flagship SUV coupe styling","V6 power","Ultra-premium interior","Quattro AWD"],
    cons:["Extremely expensive","Smaller boot than Q7","High running costs"],
    colors:["Glacier White","Mythos Black","Daytona Grey","Navarra Blue","Orca Black"],
    warranty:"3 years / unlimited km"
  },

  "Audi e-tron GT": {
    variant:"quattro", fuel:"Electric", transmission:"2-speed automatic",
    engine:"93.4 kWh Battery (dual motor)", power:"469 bhp", torque:"630 Nm",
    topSpeed:"245 km/h", zeroTo100:"4.1 s", mileage:"488 km range",
    seats:4, boot:"405 L + 85 L frunk", ground:"135 mm", tank:"N/A",
    screen:'10.1" MMI Touch', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "800V Ultra-Fast Charging (5–80% in 23 min)","4-Zone Climate Control","Ambient Lighting",
              "Audi Pre Sense 360° ADAS","Quattro AWD","Bang & Olufsen 3D Sound",
              "Audi Connect Pro","Adaptive Air Suspension","Massaging Seats",
              "Head-Up Display","Vehicle-to-Grid (V2G)"],
    pros:["Stunning GT design","Blistering performance","800V fast charging","Zero emissions"],
    cons:["Very expensive","Limited range vs rivals","Tight rear headroom"],
    colors:["Kemora Grey","Tactical Green","Daytona Grey","Mythos Black","Glacier White"],
    warranty:"3 years / unlimited km + 8 years battery"
  },

  "Audi RS5": {
    variant:"Sportback", fuel:"Petrol", transmission:"8-speed Tiptronic",
    engine:"2894cc V6 TFSI Biturbo", power:"444 bhp", torque:"600 Nm",
    topSpeed:"280 km/h", zeroTo100:"3.9 s", mileage:"10.2 kmpl",
    seats:5, boot:"480 L", ground:"130 mm", tank:"63 L",
    screen:'10.1" MMI Touch', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","RS-specific Matrix LED Headlights","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense 360° ADAS","Quattro AWD","Bang & Olufsen 3D Sound",
              "Audi Connect Pro","RS Sport Suspension","Carbon Ceramic Brakes (optional)",
              "RS Sport Exhaust","Bucket Seats"],
    pros:["Supercar performance","Practical 5-door body","Quattro AWD grip","Stunning exhaust note"],
    cons:["Extremely expensive","Firm ride","High fuel consumption"],
    colors:["Nardo Grey","Mythos Black","Tango Red","Daytona Grey","Glacier White"],
    warranty:"3 years / unlimited km"
  },

  "Audi RS7": {
    variant:"Sportback Performance", fuel:"Petrol", transmission:"8-speed Tiptronic",
    engine:"3996cc V8 TFSI Biturbo", power:"630 bhp", torque:"850 Nm",
    topSpeed:"305 km/h", zeroTo100:"3.4 s", mileage:"9.1 kmpl",
    seats:5, boot:"535 L", ground:"135 mm", tank:"73 L",
    screen:'10.1" + 8.6" Dual MMI', airbags:8, safety:"5-Star Euro NCAP",
    features:["Audi Virtual Cockpit Plus","RS-specific HD Matrix LED","Wireless Apple CarPlay & Android Auto",
              "Panoramic Sunroof","4-Zone Climate Control","Ambient Lighting (30 colours)",
              "Audi Pre Sense 360° ADAS","Quattro AWD","Bang & Olufsen 3D Advanced Sound",
              "Audi Connect Pro","Adaptive Air Suspension","Carbon Ceramic Brakes",
              "RS Sport Exhaust","Massaging & Ventilated Seats","Night Vision Assist"],
    pros:["Supercar in a suit","V8 biturbo thunder","Luxurious interior","Quattro AWD"],
    cons:["Astronomical price","Fuel thirsty","Overkill for daily use"],
    colors:["Nardo Grey","Mythos Black","Daytona Grey","Glacier White","Orca Black"],
    warranty:"3 years / unlimited km"
  },

  "Audi R8": {
    variant:"V10 Performance", fuel:"Petrol", transmission:"7-speed S tronic DCT",
    engine:"5204cc V10 Naturally Aspirated", power:"602 bhp", torque:"560 Nm",
    topSpeed:"330 km/h", zeroTo100:"3.1 s", mileage:"7.8 kmpl",
    seats:2, boot:"226 L", ground:"115 mm", tank:"83 L",
    screen:'12.3" Audi Virtual Cockpit', airbags:6, safety:"N/A (supercar)",
    features:["Full Digital Audi Virtual Cockpit","Laser LED Headlights","Wireless Apple CarPlay",
              "Carbon Fibre Interior Trim","4-Zone Climate Control","Ambient Lighting",
              "Audi Pre Sense Front","Quattro AWD","Bang & Olufsen Sound System",
              "Audi Connect","Magnetic Ride Suspension","Carbon Ceramic Brakes",
              "Sport Exhaust","Bucket Seats","Launch Control"],
    pros:["Naturally aspirated V10 scream","Mid-engine supercar","Quattro AWD traction","Audi daily usability"],
    cons:["Extremely expensive","2-seat only","High running costs","Discontinuing soon"],
    colors:["Ara Blue","Mythos Black","Daytona Grey","Tango Red","Glacier White"],
    warranty:"3 years / unlimited km"
  },

  // ── LAND ROVER / RANGE ROVER — Luxury Specs ─────────────────────────────
  "Land Rover Defender 90": {
    variant:"110 PS P300", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"1997cc 4-cyl Turbo", power:"296 bhp", torque:"400 Nm",
    topSpeed:"210 km/h", zeroTo100:"7.4 s", mileage:"11 kmpl",
    seats:5, boot:"906 L", ground:"230 mm", tank:"90 L",
    screen:'11.4" Pivi Pro Touchscreen', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["Electronic Air Suspension","Terrain Response 2 (Rock/Water/Grass/Snow)","Permanent 4x4 Drivetrain","ClearSight Ground View","Matrix LED Headlights","Adaptive Cruise Control","360° Surround Camera","Panoramic Sunroof","Meridian Sound System (825W)","Ambient Interior Lighting","Ventilated & Massage Front Seats","Wireless Apple CarPlay & Android Auto","Connected Car (InControl)","Advanced ADAS Suite (Lane Keep, AEB, Traffic Sign Recognition)","Off-Road Launch Control","Hill Descent Control","Keyless Entry & Start"],
    pros:["Iconic off-road capability","Compact footprint for city & trails","Premium interior and tech"],
    cons:["High running costs","Expensive maintenance","Tight third-row (if fitted)"],
    colors:["Santorini Black","Fuji White","Eiger Grey","Yulong White","Lantau Bronze"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Defender 110": {
    variant:"P400 X-Dynamic", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"2996cc 6-cyl Mild-Hybrid", power:"395 bhp", torque:"550 Nm",
    topSpeed:"240 km/h", zeroTo100:"5.8 s", mileage:"9.8 kmpl",
    seats:5, boot:"1075 L", ground:"235 mm", tank:"90 L",
    screen:'11.4" Pivi Pro', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["Electronic Air Suspension (Adaptive)","Terrain Response 2 with multiple off-road modes","Permanent 4x4 Drivetrain","All-Terrain Progress Control","Matrix LED Headlights","Adaptive Cruise Control with Steering Assist","360° Camera","Panoramic Fixed Glass Roof","Meridian Signature Sound System","Ambient Interior Lighting","Ventilated & Massaging Front Seats","Wireless Apple CarPlay & Android Auto","Connected Car Pro Services","Full ADAS Suite with Blind-Spot Assist","Tow Assist","Air Suspension Load Leveling"],
    pros:["Exceptional capability","Strong towing & off-road tech","Comfortable long-distance cruiser"],
    cons:["Very expensive","Large size in city","Service costs"],
    colors:["Santorini Black","Lunar Grey","Tasman Blue","Yulong White","Carpathian Grey"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Discovery Sport": {
    variant:"R-Dynamic HSE", fuel:"Petrol", transmission:"9-speed Automatic",
    engine:"1999cc 4-cyl Turbo", power:"246 bhp", torque:"365 Nm",
    topSpeed:"210 km/h", zeroTo100:"7.2 s", mileage:"13 kmpl",
    seats:5, boot:"981 L", ground:"205 mm", tank:"68 L",
    screen:'10" Touch Pro', airbags:7, safety:"5-Star (Euro NCAP)",
    features:["Air Suspension (optional)","Terrain Response","Intelligent 4x4","Matrix LED Headlights","360° Camera","Panoramic Sunroof","Meridian Sound System","Ambient Lighting","Ventilated Seats","Wireless Apple CarPlay & Android Auto","Connected Navigation Pro","ADAS Suite (AEB, Lane Keep, Traffic Sign Recognition)","Cruise Control with Steering Assist"],
    pros:["Versatile family SUV","Good on/off-road balance","Strong feature list for the price"],
    cons:["Not as refined as Range Rover","Heavy options list"],
    colors:["Firenze Red","Yulong White","Eiger Grey","Narvik Black"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Discovery": {
    variant:"HSE Luxury", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"2997cc V6 Turbo", power:"355 bhp", torque:"500 Nm",
    topSpeed:"230 km/h", zeroTo100:"6.8 s", mileage:"10.5 kmpl",
    seats:7, boot:"1234 L", ground:"230 mm", tank:"86 L",
    screen:'11.4" Pivi Pro', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["Electronic Air Suspension","Terrain Response 2","Permanent 4x4","360° Camera","Meridian Sound System","Panoramic Sunroof","Matrix LED Headlights","Adaptive Cruise Control","360 ClearSight Ground View","Massaging & Ventilated Seats","Wireless Apple CarPlay & Android Auto","Connected Car Pro","Extensive ADAS (AEB, Lane Keep, Rear Collision Warning)","Tow Assist"],
    pros:["Spacious 7-seat luxury","Strong off-road capability","Comfortable on long journeys"],
    cons:["Large footprint","Fuel consumption in heavy traffic"],
    colors:["Aruba Silver","Santorini Black","Firenze Red","Eiger Grey"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Range Rover Evoque": {
    variant:"R-Dynamic S", fuel:"Petrol", transmission:"9-speed Automatic",
    engine:"1999cc 4-cyl Turbo", power:"246 bhp", torque:"365 Nm",
    topSpeed:"225 km/h", zeroTo100:"6.8 s", mileage:"12 kmpl",
    seats:5, boot:"591 L", ground:"213 mm", tank:"62 L",
    screen:'10"+12.3" Interactive Driver Display', airbags:7, safety:"5-Star (Euro NCAP)",
    features:["Active Air Suspension (optional)","Terrain Response","Intelligent 4x4","Matrix LED Headlights","360° Camera","Meridian Sound System","Panoramic Roof","Ambient Lighting","Ventilated Front Seats","Wireless Apple CarPlay & Android Auto","Connected Navigation","Advanced ADAS Suite","Cruise Control","Head-Up Display"],
    pros:["Stylish compact luxury","Premium interior","Good city manners"],
    cons:["Tight rear seats for tall adults","Pricey optional extras"],
    colors:["Yulong White","Santorini Black","Firenze Red","Tasman Blue"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Range Rover Velar": {
    variant:"P400 R-Dynamic", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"2996cc 6-cyl Mild-Hybrid", power:"395 bhp", torque:"550 Nm",
    topSpeed:"250 km/h", zeroTo100:"5.9 s", mileage:"10.2 kmpl",
    seats:5, boot:"632 L", ground:"213 mm", tank:"82 L",
    screen:'10"+12.3" Touchscreens', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["Adaptive Air Suspension","Terrain Response","Permanent 4x4","Matrix LED Headlights","360° Camera","Meridian Sound System","Panoramic Sunroof","Ambient Lighting","Ventilated & Massaging Seats","Wireless Apple CarPlay & Android Auto","Connected Car Pro","ADAS (AEB, Lane Keep, Driver Condition Monitor)","Configurable Terrain Modes"],
    pros:["Sleek design","Calm ride","Technology-rich cabin"],
    cons:["Options add up quickly","Less towing than Discovery"],
    colors:["Orkney Grey","Santorini Black","Eiger Grey","Fuji White"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Range Rover Sport": {
    variant:"P530 SVR", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"4999cc V8 Supercharged", power:"523 bhp", torque:"625 Nm",
    topSpeed:"280 km/h", zeroTo100:"4.3 s", mileage:"7.5 kmpl",
    seats:5, boot:"780 L", ground:"215 mm", tank:"90 L",
    screen:'13.1" Pivi Pro', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["Adaptive Air Suspension (Electronic)","Terrain Response Pro","Permanent 4x4","Matrix LED Headlights","Night Vision","360° Camera","Meridian Surround Sound","Panoramic Sunroof","Massaging & Ventilated Seats","Wireless Apple CarPlay & Android Auto","Advanced ADAS Suite","Active Cruise Control with Steering Assist","Configurable Dynamics"],
    pros:["Performance flagship","Superb handling for an SUV","High-end luxury features"],
    cons:["Extremely expensive","Fuel hungry"],
    colors:["Narvik Black","Santorini Black","Loire Blue","Eiger Grey"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Range Rover": {
    variant:"Autobiography", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"3996cc V8 TwinTurbo", power:"523 bhp", torque:"625 Nm",
    topSpeed:"250 km/h", zeroTo100:"5.1 s", mileage:"8.5 kmpl",
    seats:5, boot:"909 L", ground:"220 mm", tank:"90 L",
    screen:'13.1"+12.3" Dual Touchscreens', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["Advanced Electronic Air Suspension","Terrain Response Pro","Permanent 4x4","Matrix LED Pixel Headlights","Meridian Signature Sound System","Panoramic Sliding Roof","Ambient Interior Lighting (customisable)","Ventilated & Massaging Seats (Front & Rear)","360° Camera","Autonomous Emergency Braking","Adaptive Cruise with Queue Assist","Wireless Apple CarPlay & Android Auto","Connected Pro Services","Rear Seat Entertainment (optional)"],
    pros:["Flagship luxury","Exceptional refinement","Long-distance comfort"],
    cons:["Top-tier price","High maintenance and insurance costs"],
    colors:["Carpathian Grey","Arctic White","Santorini Black","Lunar Blue"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Range Rover SV": {
    variant:"SV Autobiography", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"5000cc V8 Supercharged", power:"557 bhp", torque:"700 Nm",
    topSpeed:"285 km/h", zeroTo100:"4.1 s", mileage:"6.8 kmpl",
    seats:5, boot:"850 L", ground:"220 mm", tank:"90 L",
    screen:'13.1" Pivi Pro', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["SV-tuned Air Suspension","Advanced Terrain Response","Permanent 4x4","SV Performance Brakes","Matrix LED Headlights","Meridian Surround Sound","Massaging & Ventilated Seats","360° Camera","Night Vision","Wireless Apple CarPlay & Android Auto","Connected Pro Services","Full ADAS Suite","Custom SV Interior Finishes"],
    pros:["Ultimate performance and luxury","Bespoke materials and finishes"],
    cons:["Extremely rare and expensive","High servicing costs"],
    colors:["SV Bespoke Black","Eiger Grey","Tungsten Silver","Fuji White"],
    warranty:"3 years / unlimited km"
  },

  "Land Rover Range Rover Autobiography": {
    variant:"Autobiography Long Wheelbase", fuel:"Petrol", transmission:"8-speed Automatic",
    engine:"3996cc V8 TwinTurbo", power:"523 bhp", torque:"625 Nm",
    topSpeed:"250 km/h", zeroTo100:"5.2 s", mileage:"8.0 kmpl",
    seats:5, boot:"920 L", ground:"220 mm", tank:"90 L",
    screen:'13.1"+12.3" Touchscreens', airbags:8, safety:"5-Star (Euro NCAP)",
    features:["Long Wheelbase Rear Executive Seats","Adaptive Air Suspension","Terrain Response Pro","Permanent 4x4","Matrix LED Pixel Headlights","Meridian Signature Sound System","Rear Seat Entertainment","Massaging & Ventilated Seats","Ambient Lighting","360° Camera","Wireless Apple CarPlay & Android Auto","Advanced ADAS Suite","Connected Pro Services"],
    pros:["Ultra-luxury rear-seat experience","Refined powertrain","Outstanding presence"],
    cons:["Very high price","Top-end running costs"],
    colors:["Santorini Black","Carpathian Grey","Arctic White"],
    warranty:"3 years / unlimited km"
  }
};

// ── AUDI CARS — added to main cars array ──
const audiCars = [
  { name:"A3",        brand:"Audi", price:4200000,  img:"images/a3.jpg",   segment:"Luxury", category:"Sedan"  },
  { name:"A4",        brand:"Audi", price:5200000,  img:"images/a4.jpg",   segment:"Luxury", category:"Sedan"  },
  { name:"A6",        brand:"Audi", price:7000000,  img:"images/a6.jpg",   segment:"Luxury", category:"Sedan"  },
  { name:"A8L",       brand:"Audi", price:13500000, img:"images/a8l.jpg",  segment:"Ultra",  category:"Sedan"  },
  { name:"Q3",        brand:"Audi", price:4500000,  img:"images/q3.jpg",   segment:"Luxury", category:"SUV"    },
  { name:"Q5",        brand:"Audi", price:7000000,  img:"images/q5.jpg",   segment:"Luxury", category:"SUV"    },
  { name:"Q7",        brand:"Audi", price:9300000,  img:"images/q7.jpg",   segment:"Luxury", category:"SUV"    },
  { name:"Q8",        brand:"Audi", price:11500000, img:"images/q8.jpg",   segment:"Ultra",  category:"SUV"    },
  { name:"e-tron GT", brand:"Audi", price:18000000, img:"images/e-tron gt.jpg",   segment:"Ultra",  category:"EV"     },
  { name:"RS5",       brand:"Audi", price:11000000, img:"images/rs5.jpg",  segment:"Ultra",  category:"Sedan"  },
  { name:"RS7",       brand:"Audi", price:18500000, img:"images/rs7.jpg",  segment:"Ultra",  category:"Sedan"  },
  { name:"R8",        brand:"Audi", price:27500000, img:"images/r8.jpg",   segment:"Ultra",  category:"Sports" },
];
audiCars.forEach(c => cars.push(c));

// ── MODAL HELPERS ──
function fmtModalPrice(p) {
  if (p >= 10000000) return '₹' + (p / 10000000).toFixed(2) + ' Cr';
  if (p >= 100000)   return '₹' + (p / 100000).toFixed(2) + ' L';
  return '₹' + p.toLocaleString('en-IN');
}

function calcModalEMI(price) {
  const r = 8.5 / 12 / 100, n = 36;
  const emi = (price * 0.8 * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
  return '₹' + Math.round(emi).toLocaleString('en-IN') + '/mo';
}

function getSpecs(car) {
  const key = car.brand + ' ' + car.name;
  return carSpecs[key] || {
    variant: car.category, fuel: car.category === 'EV' ? 'Electric' : 'Petrol',
    transmission: 'Automatic', engine: '—', power: '—', torque: '—',
    topSpeed: '—', zeroTo100: '—',
    mileage: car.category === 'EV' ? '400+ km range' : '15 kmpl',
    seats: 5, boot: '—', ground: '—', tank: '—',
    screen: '10" Touchscreen', airbags: 6, safety: '5-Star',
    features: ['Touchscreen Infotainment','Apple CarPlay & Android Auto','Rear Parking Camera','Automatic Climate Control'],
    pros: ['Good value for money','Comfortable ride','Feature-rich'],
    cons: ['Average mileage','Limited service centres'],
    colors: ['White','Black','Silver','Red'],
    warranty: '3 years / unlimited km'
  };
}

function specRow(icon, label, value) {
  return `<div class="modal-spec">
    <div class="modal-spec-label"><i class="fas ${icon}"></i> ${label}</div>
    <div class="modal-spec-value">${value}</div>
  </div>`;
}

// ── OPEN MODAL ──
function openModal(carIndex) {
  const car = cars[carIndex];
  if (!car) return;
  const s = getSpecs(car);

  document.getElementById('modalInner').innerHTML = `
    <div class="modal-hero">
      <img src="${car.img}" alt="${car.brand} ${car.name}"
           onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80'">
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-title">
        <h2>${car.brand} ${car.name}</h2>
        <p>${s.variant} &bull; ${car.category}</p>
      </div>
    </div>

    <div class="modal-badges">
      <span class="modal-badge mb-brand">${car.brand}</span>
      <span class="modal-badge mb-cat">${car.category}</span>
      <span class="modal-badge mb-fuel">${s.fuel}</span>
      ${car.segment==='Luxury'||car.segment==='Ultra' ? '<span class="modal-badge mb-luxury">★ Luxury</span>' : ''}
      ${car.category==='EV' ? '<span class="modal-badge mb-ev">⚡ Electric</span>' : ''}
    </div>

    <div class="modal-price-row">
      <div>
        <div style="font-size:0.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em">Ex-Showroom Price</div>
        <div class="modal-price">${fmtModalPrice(car.price)}</div>
      </div>
      <div class="modal-emi">EMI from <span>${calcModalEMI(car.price)}</span><br>
        <span style="font-size:0.78rem;color:var(--muted)">80% loan · 8.5% · 3 yrs</span>
      </div>
    </div>

    <div class="modal-section-title"><i class="fas fa-gauge-high"></i> Performance & Specs</div>
    <div class="modal-specs">
      ${specRow('fa-cog',        'Engine',       s.engine)}
      ${specRow('fa-bolt',       'Power',        s.power)}
      ${specRow('fa-tornado',    'Torque',       s.torque)}
      ${specRow('fa-gauge',      'Top Speed',    s.topSpeed)}
      ${specRow('fa-stopwatch',  '0–100 km/h',   s.zeroTo100)}
      ${specRow('fa-gas-pump',   car.category==='EV'?'Range':'Mileage', s.mileage)}
      ${specRow('fa-sliders',    'Transmission', s.transmission)}
      ${specRow('fa-users',      'Seating',      s.seats + ' Seats')}
      ${specRow('fa-box',        'Boot Space',   s.boot)}
      ${specRow('fa-road',       'Ground Clear.',s.ground)}
      ${specRow('fa-shield',     'Safety Rating',s.safety)}
      ${specRow('fa-circle-dot', 'Airbags',      s.airbags)}
    </div>

    <div class="modal-section-title"><i class="fas fa-star"></i> Key Features</div>
    <div class="modal-features">
      ${s.features.map(f=>`<div class="modal-feature"><i class="fas fa-check-circle"></i>${f}</div>`).join('')}
    </div>

    <div class="modal-section-title"><i class="fas fa-palette"></i> Available Colors</div>
    <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.5rem">
      ${s.colors.map(c=>`<span style="padding:.3rem .9rem;background:rgba(255,255,255,.05);border:1px solid var(--border);border-radius:50px;font-size:.8rem;color:var(--silver)">${c}</span>`).join('')}
    </div>
    <div style="font-size:.8rem;color:var(--muted);margin-bottom:.5rem"><i class="fas fa-shield-halved"></i> Warranty: ${s.warranty}</div>

    <div class="modal-section-title"><i class="fas fa-list-check"></i> Pros & Cons</div>
    <div class="modal-pros-cons">
      <div class="pros-box">
        <h4><i class="fas fa-thumbs-up"></i> Pros</h4>
        <ul>${s.pros.map(p=>`<li>${p}</li>`).join('')}</ul>
      </div>
      <div class="cons-box">
        <h4><i class="fas fa-thumbs-down"></i> Cons</h4>
        <ul>${s.cons.map(c=>`<li>${c}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="modal-actions">
      <button class="modal-btn-primary" onclick="window.location.href='index.html#calculator'">
        <i class="fas fa-calculator"></i> Check Affordability
      </button>
      <button class="modal-btn-ghost" onclick="addToWishlistModal('${car.brand} ${car.name}')">
        <i class="fas fa-heart"></i> Wishlist
      </button>
      <button class="modal-btn-ghost" onclick="closeModal()">
        <i class="fas fa-times"></i> Close
      </button>
    </div>`;

  document.getElementById('modalBackdrop').classList.add('open');
  document.getElementById('carModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.getElementById('carModal').classList.remove('open');
  document.body.style.overflow = '';
}

// close on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function addToWishlistModal(name) {
  const list = JSON.parse(localStorage.getItem('wishlist') || '[]');
  if (!list.includes(name)) {
    list.push(name);
    localStorage.setItem('wishlist', JSON.stringify(list));
    alert(name + 'added to your wishlist!');
  } else {
    alert(name + 'is already in your wishlist.');
  }
}


