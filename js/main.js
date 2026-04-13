/* ─────────────────────────────────────────
   Premium Pioneers — Shared JS
   Injects nav + footer, handles mobile menu
───────────────────────────────────────── */

const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STxW2s6AS39QY4JoDFB7nhvWqaub-wCai4wAq16PtHbcycIM1tPlZAfyVs5qJNj_Ex99ufQWgrm-hEN_ZNvDDgCJKZa-MCItAf0jQo5j56J2e5hJP2M5udHjnLDEUeFF2aHCufReqdjNTmI_KWaI3fiSSnHGT0QGpFyP7brv89EuZmEaWNDUQZAZHDcOzXs81WeaVJiSr6H0F0C2bM8ax2j54Aqsie5__lF-iU=w400" alt="Premium Pioneers Sales Group" class="nav-logo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">
      <span class="nav-logo-fallback" style="display:none">Premium <span style="color:var(--gold)">Pioneers</span></span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="partners.html">Partners</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html" class="nav-cta">Contact us</a></li>
    </ul>
    <div class="nav-mobile-toggle" id="mobileToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div class="footer-logo-wrap">
          <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STxW2s6AS39QY4JoDFB7nhvWqaub-wCai4wAq16PtHbcycIM1tPlZAfyVs5qJNj_Ex99ufQWgrm-hEN_ZNvDDgCJKZa-MCItAf0jQo5j56J2e5hJP2M5udHjnLDEUeFF2aHCufReqdjNTmI_KWaI3fiSSnHGT0QGpFyP7brv89EuZmEaWNDUQZAZHDcOzXs81WeaVJiSr6H0F0C2bM8ax2j54Aqsie5__lF-iU=w400" alt="Premium Pioneers Sales Group" class="footer-logo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <div class="footer-logo" style="display:none">Premium <span>Pioneers</span></div>
        </div>
        <p class="footer-desc">A sourcing representative company focused on product curation, channel development, and end-to-line retail partnerships.</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="partners.html">Partners</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:nick@premiumpioneers.com">nick@premiumpioneers.com</a></li>
          <li><a href="https://www.linkedin.com/in/nick-merklin-66398269/" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Premium Pioneers, LLC. All rights reserved.</span>
      <div>
        <a href="mailto:nick@premiumpioneers.com">Email</a>
        <a href="https://www.linkedin.com/in/nick-merklin-66398269/" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile menu toggle
  document.addEventListener('click', e => {
    const toggle = e.target.closest('#mobileToggle');
    const links  = document.getElementById('navLinks');
    if (toggle && links) {
      links.classList.toggle('open');
    } else if (links && !e.target.closest('.nav')) {
      links.classList.remove('open');
    }
  });

  // Scroll-reveal for elements with .reveal class
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
