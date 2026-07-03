// ── TYPEWRITER ──
    const roles = [
      "Digital Marketing Professional",
      "SEO Content Writer",
      "YouTube Creator",
      "Social Media Manager",
      "Web Content Strategist"
    ];
    let ri = 0, ci = 0, deleting = false;
    const el = document.getElementById('typewriter');
    function type() {
      const word = roles[ri];
      if (!deleting) {
        el.innerHTML = word.slice(0, ci + 1) + '<span class="cursor"></span>';
        ci++;
        if (ci === word.length) { deleting = true; setTimeout(type, 1600); return; }
      } else {
        el.innerHTML = word.slice(0, ci - 1) + '<span class="cursor"></span>';
        ci--;
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(type, deleting ? 55 : 85);
    }
    type();

    // ── TICKER ──
    const skills = [
      "On-page SEO","Meta Titles & Descriptions","Keyword Structuring",
      "Content Writing","CMS Publishing","URL Optimization",
      "YouTube Management","Video Editing","Instagram Management",
      "Facebook Pages","Canva","HTML5 & CSS3","Blog Writing",
      "Storytelling","Audience Engagement","SEO Settings"
    ];
    const track = document.getElementById('ticker');
    const doubled = [...skills, ...skills];
    track.innerHTML = doubled.map(s =>
      `<span class="ticker-item"><span class="ticker-dot"></span>${s}</span>`
    ).join('');

    // ── FADE IN ──
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
