// Mobile menu toggle
function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Tab switching (removed as we're removing the search section)
function switchTab(element, tabName) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    element.classList.add('active');
    
    var input = element.closest('.quick-search').querySelector('.search-input');
    if (input) {
        input.placeholder = tabName + 'を入力してください（例: のど、AGA、受診の目安）';
    }
}

// Video lazy loading
function initVideoLazyLoad() {
    var videoLazyElements = document.querySelectorAll('.video-lazy');
    
    videoLazyElements.forEach(function(elem) {
        elem.addEventListener('click', function() {
            var videoId = elem.dataset.videoId;
            var iframe = document.createElement('iframe');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            
            elem.innerHTML = '';
            elem.appendChild(iframe);
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ accordion toggle
function toggleFAQ(element) {
    var answer = element.nextElementSibling;
    var isOpen = element.classList.contains('active');
    
    // Close all FAQs
    var allQuestions = document.querySelectorAll('.faq-question');
    var allAnswers = document.querySelectorAll('.faq-answer');
    
    allQuestions.forEach(function(q) {
        q.classList.remove('active');
    });
    
    allAnswers.forEach(function(a) {
        a.style.maxHeight = null;
    });
    
    // Open clicked FAQ if it was closed
    if (!isOpen) {
        element.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', function() {
    initVideoLazyLoad();
});

