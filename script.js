
Script · JS
// mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle.addEventListener('click', () => navList.classList.toggle('open'));
  navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));
 
  // typing effect in the hero "code window"
  const target = document.getElementById('typeTarget');
  const lines = [
    ['const ', 'k'], ['developer', ''], [' = {\n', ''],
    ['  name', ''], [': ', ''], ["'Aisha Gul'", 's'], [',\n', ''],
    ['  role', ''], [': ', ''], ["'Full Stack Developer'", 's'], [',\n', ''],
    ['  location', ''], [': ', ''], ["'Peshawar, PK'", 's'], [',\n', ''],
    ['  stack', ''], [': [', ''], ["'JS'", 's'], [', ', ''], ["'Python'", 's'], [', ', ''], ["'Flutter'", 's'], [', ', ''], ["'Flask'", 's'], ['],\n', ''],
    ['  status', ''], [': ', ''], ["'open to work'", 's'], ['\n};', '']
  ];
  let full = lines.map(l => l[0]).join('');
  let spans = [];
  lines.forEach(l => {
    if (l[1] === 'k') spans.push(`<span class="k">${l[0]}</span>`);
    else if (l[1] === 's') spans.push(`<span class="s">${l[0]}</span>`);
    else spans.push(l[0]);
  });
  let i = 0;
  function type(){
    if (i <= full.length){
      // render progressively using plain text slice, then re-apply spans at the end
      target.textContent = full.slice(0, i);
      i += 2;
      requestAnimationFrame(() => setTimeout(type, 12));
    } else {
      target.innerHTML = spans.join('') + '<span class="cursor"></span>';
    }
  }
  type();
 
  // reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));
