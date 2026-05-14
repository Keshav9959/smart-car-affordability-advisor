// ── CAR DATA ──
const cars = [
  { name: "Swift",   brand: "Maruti",   price: 800000,  img: "images/swift.jpg", category: "Hatchback" },
  { name: "Baleno",  brand: "Maruti",   price: 850000,  img: "images/swift.jpg", category: "Hatchback" },
  { name: "i20",     brand: "Hyundai",  price: 900000,  img: "images/i20.jpg",   category: "Hatchback" },
  { name: "Venue",   brand: "Hyundai",  price: 1000000, img: "images/i20.jpg",   category: "SUV" },
  { name: "Creta",   brand: "Hyundai",  price: 1500000, img: "images/creta.jpg", category: "SUV" },
  { name: "Thar",    brand: "Mahindra", price: 1600000, img: "images/thar.jpg",  category: "SUV" },
  { name: "Nexon",   brand: "Tata",     price: 1200000, img: "images/swift.jpg", category: "SUV" },
  { name: "City",    brand: "Honda",    price: 1400000, img: "images/i20.jpg",   category: "Sedan" },
];

let expenseChartInst = null;
let budgetChartInst  = null;
let userEMI = 0;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderCars('all');
  setupFilterBtns();
  setupNavScroll();
  setupHamburger();
  setupScrollReveal();
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

  if (!salary || !carPrice) {
    alert('Please enter at least your Monthly Salary and Car Price.');
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
  renderCars(document.querySelector('.filter-btn.active')?.dataset.brand || 'all');

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
function renderCars(brand) {
  const grid = document.getElementById('carGrid');
  const filtered = brand === 'all' ? cars : cars.filter(c => c.brand === brand);

  grid.innerHTML = filtered.map((car, i) => {
    const isAffordable = userEMI > 0 && calcEMI(car.price * 0.8, 8.5, 3) <= userEMI * 1.1;
    const badgeClass   = car.category.toLowerCase();
    return `
      <div class="car-card ${isAffordable ? 'affordable-car' : ''}" style="animation-delay:${i * 0.07}s">
        <div class="car-img-wrap">
          <img src="${car.img}" alt="${car.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80'">
          ${isAffordable ? '<span class="car-badge affordable-badge">✓ Affordable</span>' : `<span class="car-badge ${badgeClass}">${car.category}</span>`}
        </div>
        <div class="car-info">
          <h4>${car.name}</h4>
          <p class="car-meta">${car.brand} &bull; ${car.category}</p>
          <div class="car-footer">
            <span class="car-price">${fmt(car.price)}</span>
            <span class="car-emi">~${fmt(calcEMI(car.price * 0.8, 8.5, 3))}/mo</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── FILTER BUTTONS ──
function setupFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCars(btn.dataset.brand);
    });
  });
}
