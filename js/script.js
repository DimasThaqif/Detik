// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize saat page load
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    }
});

// Ambil elemen logo dan tentukan titik scroll untuk trigger
const logo = document.getElementById('site-logo'); // Ganti dengan ID/class logo kamu
const triggerPoint = 100; // Pixel dari atas, sesuaikan kebutuhan

window.addEventListener('scroll', function() {
  if (window.scrollY >= triggerPoint) {
    // Jika scroll melewati trigger point, ganti ke logo gelap
    logo.src = 'path-ke/download.png';
  } else {
    // Jika masih di atas, pakai logo putih
    logo.src = 'path-ke/download.png';
  }
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchKeyword = document.getElementById('searchKeyword');
    const departmentFilter = document.getElementById('departmentFilter');
    const levelFilter = document.getElementById('levelFilter');
    const searchButton = document.getElementById('searchButton');
    const jobItems = document.querySelectorAll('.job-item');
    const noResults = document.getElementById('noResults');

    function filterJobs() {
        const keyword = searchKeyword.value.toLowerCase();
        const department = departmentFilter.value;
        const level = levelFilter.value;
        
        let visibleCount = 0;

        jobItems.forEach(item => {
            const title = item.querySelector('.job-title').textContent.toLowerCase();
            const itemDept = item.getAttribute('data-department');
            const itemLevel = item.getAttribute('data-level');
            
            const matchesKeyword = title.includes(keyword);
            const matchesDept = !department || itemDept === department;
            const matchesLevel = !level || itemLevel === level;
            
            if (matchesKeyword && matchesDept && matchesLevel) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }

    // Event listeners
    searchKeyword.addEventListener('input', filterJobs);
    departmentFilter.addEventListener('change', filterJobs);
    levelFilter.addEventListener('change', filterJobs);
    searchButton.addEventListener('click', filterJobs);

    // Clear filters function (optional)
    function clearFilters() {
        searchKeyword.value = '';
        departmentFilter.value = '';
        levelFilter.value = '';
        filterJobs();
    }

});