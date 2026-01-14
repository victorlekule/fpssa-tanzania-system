// Function to toggle Sidebar on Mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

// Function to switch tabs
function switchTab(tabName) {
    // 1. Hide all views
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    
    // 2. Show target view
    const target = document.getElementById('view-' + tabName);
    if(target) target.classList.remove('hidden');

    // 3. Reset all nav buttons
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('bg-[#1abc9c]', 'text-white', 'shadow-md');
        el.classList.add('text-slate-300', 'hover:bg-[#34495e]', 'hover:text-white');
    });

    // 4. Highlight active button
    const activeNav = document.getElementById('nav-' + tabName);
    if(activeNav) {
        activeNav.classList.remove('text-slate-300', 'hover:bg-[#34495e]', 'hover:text-white');
        activeNav.classList.add('bg-[#1abc9c]', 'text-white', 'shadow-md');
    }

    // 5. Close sidebar on mobile if open
    if(window.innerWidth < 768) {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    }
}

function logout() {
    if(confirm("Are you sure you want to logout?")) {
        window.location.href = "login.html";
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    switchTab('dashboard');
});