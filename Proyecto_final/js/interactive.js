// ===================================
// INTERACTIVIDAD MEJORADA
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Efecto de clic en tarjetas
    const semanaCards = document.querySelectorAll('.semana-card');
    
    semanaCards.forEach(card => {
        // Efecto ripple al hacer clic
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
        
        // Efecto parallax suave
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const rotateX = (y - 0.5) * 5;
            const rotateY = (x - 0.5) * 5;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
    
    // Scroll animation para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.semana-card, .unidad').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // Cargar archivos de GitHub (si existe el elemento)
    loadGitHubFiles();
});

// ===================================
// CARGAR ARCHIVOS DE GITHUB
// ===================================

async function loadGitHubFiles() {
    // Configurar tu usuario de GitHub aquí
    const githubUsername = 'tu-usuario-github'; // Cambiar esto
    const token = ''; // Opcional: agregar token si es necesario
    
    const semanaCards = document.querySelectorAll('.semana-card');
    
    semanaCards.forEach(async (card, index) => {
        const semanaNum = index + 1;
        const githubUrl = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;
        
        try {
            const headers = token ? { 'Authorization': `token ${token}` } : {};
            const response = await fetch(githubUrl, { headers });
            
            if (!response.ok) return;
            
            const repos = await response.json();
            
            // Filtrar repositorios por semana
            const semanaRepos = repos.filter(repo => {
                const repoName = repo.name.toLowerCase();
                return repoName.includes(`semana${semanaNum}`) || 
                       repoName.includes(`week${semanaNum}`);
            });
            
            if (semanaRepos.length > 0) {
                const fileDiv = document.createElement('div');
                fileDiv.classList.add('github-files');
                
                fileDiv.innerHTML = `
                    <strong>📁 Archivos en GitHub:</strong>
                    <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                        ${semanaRepos.map(repo => `
                            <li>
                                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                                    ${repo.name}
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                `;
                
                const existingFiles = card.querySelector('.github-files');
                if (existingFiles) {
                    existingFiles.replaceWith(fileDiv);
                } else {
                    card.appendChild(fileDiv);
                }
            }
        } catch (error) {
            console.log(`No se pudieron cargar los archivos de GitHub para la semana ${semanaNum}`);
        }
    });
}

// ===================================
// ANIMACIÓN DE NÚMEROS
// ===================================

function animateCounter(element, target, duration = 1000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===================================
// EFECTO DE BÚSQUEDA EN TIEMPO REAL
// ===================================

function setupSearchFilter() {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.semana-card');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ===================================
// EFECTO SCROLLING SUAVE
// ===================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

setupSmoothScroll();
setupSearchFilter();

// ===================================
// MODO OSCURO/CLARO (Opcional)
// ===================================

function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    
    if (!toggleButton) return;
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    toggleButton.addEventListener('click', function() {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

setupThemeToggle();

// ===================================
// RIPPLE EFFECT EN BOTONES
// ===================================

const style = document.createElement('style');
style.textContent = `
    .semana-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
