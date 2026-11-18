/**
 * ====================================================================
 * PORTFOLIO APPLICATION LOGIC
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderPortfolioData();
  setupProjectFilters();
  setupModals();
  setupContactForm();
  setupScrollSpy();
  setupMobileMenu();
});

/* Theme Switcher (Crisp Light Mode default, optional Dark Mode) */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "dark") {
    // Sun icon
    icon.innerHTML = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`;
  } else {
    // Moon icon
    icon.innerHTML = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
  }
}

/* Render Dynamic Data from profile-data.js */
function renderPortfolioData() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Personal / Hero Info
  document.querySelectorAll(".dyn-name").forEach(el => el.textContent = data.personal.fullName);
  document.querySelectorAll(".dyn-role").forEach(el => el.textContent = data.personal.role);
  
  const heroTagline = document.getElementById("hero-tagline");
  if (heroTagline) heroTagline.textContent = data.personal.tagline;

  const statusBadge = document.getElementById("status-badge-text");
  if (statusBadge) statusBadge.textContent = data.personal.statusBadge;

  // Stats Grid
  const statsContainer = document.getElementById("stats-grid");
  if (statsContainer && data.personal.stats) {
    statsContainer.innerHTML = data.personal.stats.map(s => `
      <div class="stat-card">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join("");
  }

  // Certifications (Requested Highlight)
  renderCertifications(data.certifications);

  // Projects
  renderProjects(data.projects);

  // Skills
  renderSkills(data.skills);

  // Experience
  renderExperience(data.experience);

  // Resume Modal Content
  populateResumeModal(data);
}

/* Certifications Render */
function renderCertifications(certs) {
  const container = document.getElementById("certifications-grid");
  if (!container || !certs) return;

  container.innerHTML = certs.map(cert => `
    <div class="cert-card">
      <div>
        <div class="cert-header">
          <div class="cert-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div>
            <div class="cert-badge-tag">${cert.badgeText}</div>
            <h3 class="cert-title">${cert.title}</h3>
            <div class="cert-issuer">${cert.issuer} • ${cert.issueDate}</div>
          </div>
        </div>
        <p class="cert-desc">${cert.description}</p>
        <div class="cert-skills">
          ${cert.skills.map(skill => `<span class="cert-pill">${skill}</span>`).join("")}
        </div>
      </div>
      <div class="cert-footer">
        <span class="cert-id">ID: ${cert.credentialId}</span>
        <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
          Verify Credential ↗
        </a>
      </div>
    </div>
  `).join("");
}

/* Projects Render */
function renderProjects(projects, filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container || !projects) return;

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => `
    <div class="project-card" data-category="${proj.category}">
      <div class="project-img-wrapper">
        <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy" />
        <span class="project-category-badge">${proj.categoryName}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-actions">
          <button class="btn btn-sm btn-primary" onclick="openCaseStudy('${proj.id}')">
            View Case Study
          </button>
          <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
            Live Demo ↗
          </a>
          <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" title="Source Code">
            GitHub
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* Skills Render */
function renderSkills(skills) {
  const container = document.getElementById("skills-grid");
  if (!container || !skills) return;

  container.innerHTML = skills.map(cat => `
    <div class="skill-category-card">
      <div class="skill-header">
        <div class="skill-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <div>
          <h3 class="skill-title">${cat.category}</h3>
          <p class="skill-desc">${cat.description}</p>
        </div>
      </div>
      <div class="skill-pills">
        ${cat.items.map(item => `<span class="skill-pill">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* Experience Render */
function renderExperience(exp) {
  const container = document.getElementById("experience-timeline");
  if (!container || !exp) return;

  container.innerHTML = exp.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${item.role}</h3>
            <span class="timeline-company">${item.company}</span>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>
        <ul class="timeline-bullets">
          ${item.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
        <div class="timeline-tech">
          ${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/* Project Filter Tabs */
function setupProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(window.PORTFOLIO_DATA.projects, category);
    });
  });
}

/* Modal System (Resume, Case Study, etc.) */
function setupModals() {
  // Modal triggers
  document.querySelectorAll("[data-modal-target]").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute("data-modal-target");
      openModal(targetId);
    });
  });

  // Modal close buttons
  document.querySelectorAll(".modal-close, .modal-close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Close on outside overlay click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  document.body.style.overflow = "";
}

/* Populate ATS-Friendly Printable Resume */
function populateResumeModal(data) {
  const area = document.getElementById("resume-content-area");
  if (!area) return;

  area.innerHTML = `
    <div id="resume-print-area" class="resume-paper">
      <div class="resume-header">
        <h1 class="resume-name">${data.personal.fullName}</h1>
        <div class="resume-title-sub">${data.personal.role}</div>
        <div class="resume-contact-line">
          <span>📍 ${data.personal.location}</span>
          <span>✉️ ${data.personal.email}</span>
          <span>🔗 ${data.personal.github}</span>
          <span>💼 ${data.personal.linkedin}</span>
        </div>
      </div>

      <div>
        <div class="resume-section-title">Professional Summary</div>
        <p style="margin-bottom: 1rem; color: #334155;">${data.resumeData.summary}</p>
      </div>

      <div>
        <div class="resume-section-title">Core Competencies & Technical Skills</div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1rem;">
          ${data.resumeData.keyCompetencies.map(k => `<div>• <strong>${k}</strong></div>`).join("")}
        </div>
      </div>

      <div>
        <div class="resume-section-title">Verified Certifications</div>
        <div style="margin-bottom: 1rem;">
          ${data.certifications.map(c => `
            <div style="margin-bottom: 0.5rem;">
              <strong>${c.title}</strong> — <em>${c.issuer}</em> (${c.issueDate})
              <div style="font-size: 0.75rem; color: #64748b;">Credential ID: ${c.credentialId}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div>
        <div class="resume-section-title">Work Experience</div>
        ${data.experience.map(e => `
          <div style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; font-weight: 700; color: #0f172a;">
              <span>${e.role} — ${e.company}</span>
              <span style="font-size: 0.8125rem; color: #64748b;">${e.period}</span>
            </div>
            <ul style="padding-left: 1.25rem; margin-top: 0.35rem; color: #334155; font-size: 0.8125rem;">
              ${e.highlights.map(h => `<li style="margin-bottom: 0.25rem;">${h}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>

      <div>
        <div class="resume-section-title">Education</div>
        ${data.education.map(ed => `
          <div>
            <strong>${ed.degree}</strong> — ${ed.institution} (${ed.period})
            <div style="font-size: 0.8125rem; color: #64748b;">${ed.details}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

/* Case Study Modal */
window.openCaseStudy = function(projectId) {
  const data = window.PORTFOLIO_DATA;
  const project = data.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBody = document.getElementById("case-study-body");
  const modalTitle = document.getElementById("case-study-title");

  if (modalTitle) modalTitle.textContent = `${project.title} — Architectural Case Study`;
  if (modalBody) {
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 1.25rem;" />
        <p style="font-size: 1.05rem; color: var(--text-secondary);">${project.description}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: 10px; border-left: 4px solid #ef4444;">
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;">🚨 The Engineering Problem</h4>
          <p style="color: var(--text-secondary); font-size: 0.9375rem;">${project.caseStudy.problem}</p>
        </div>

        <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: 10px; border-left: 4px solid var(--primary);">
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;">💡 Technical Architecture & Solution</h4>
          <p style="color: var(--text-secondary); font-size: 0.9375rem;">${project.caseStudy.solution}</p>
        </div>

        <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: 10px; border-left: 4px solid var(--success);">
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;">📈 Measurable Production Impact</h4>
          <p style="color: var(--text-secondary); font-size: 0.9375rem;">${project.caseStudy.impact}</p>
        </div>
      </div>

      <div style="margin-top: 1.75rem;">
        <h4 style="margin-bottom: 0.75rem;">Technologies Implemented</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `;
  }

  const liveBtn = document.getElementById("case-study-live-btn");
  if (liveBtn) liveBtn.href = project.liveUrl;

  const repoBtn = document.getElementById("case-study-repo-btn");
  if (repoBtn) repoBtn.href = project.repoUrl;

  openModal("case-study-modal");
};

/* Resume Print / PDF Action */
window.printResume = function() {
  window.print();
};

/* Copy Resume Text */
window.copyResumeSummary = function() {
  const data = window.PORTFOLIO_DATA;
  const text = `${data.personal.fullName} - ${data.personal.role}
Email: ${data.personal.email} | Location: ${data.personal.location}

SUMMARY:
${data.resumeData.summary}

KEY COMPETENCIES:
${data.resumeData.keyCompetencies.join("\n")}

CERTIFICATIONS:
${data.certifications.map(c => `- ${c.title} (${c.issuer}, ${c.credentialId})`).join("\n")}`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("Resume summary copied to clipboard! 📋");
  }).catch(() => {
    showToast("Unable to copy to clipboard.");
  });
};

/* Contact Form */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const originalText = btn.innerHTML;
    btn.innerHTML = "Sending Message...";
    btn.disabled = true;

    // Simulate sending with realistic feedback
    setTimeout(() => {
      btn.innerHTML = "Message Sent! ✓";
      showToast("Thank you! Your message has been received. I'll get back to you within 24 hours. 🚀");
      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 3000);
    }, 800);
  });
}

/* Toast Message */
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  toast.innerHTML = `
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ScrollSpy for active nav items */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* Mobile Menu Navigation */
function setupMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    const isVisible = navLinks.style.display === "flex";
    if (isVisible) {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "4.5rem";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "var(--bg-card)";
      navLinks.style.padding = "1.5rem";
      navLinks.style.borderBottom = "1px solid var(--border-color)";
      navLinks.style.boxShadow = "var(--card-shadow-hover)";
    }
  });

  // Close on mobile item click
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
      }
    });
  });
}
