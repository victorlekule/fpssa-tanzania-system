    
tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'fpso-dark': '#003f88', // Deep Blue - Primary Nav
                        'fpso-accent': '#ffcc00', // Gold/Yellow - Accent/Buttons
                        'fpso-utility': '#f3f4f6', // Light Gray - Utility Bar
                        'fpso-green': '#2C860B', // dark Green - Utility Bar
                        'fpso-red': '#F40E0E', // dark Green - Utility Bar
                    }
                }
            }
        }

        // Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const drawer = document.getElementById('mobile-menu-drawer');
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');
    const overlay = document.getElementById('menu-overlay');

    function updateMenuPosition() {
        if (header && drawer) {
            const headerHeight = header.offsetHeight;
            drawer.style.top = `${headerHeight}px`;
            // Calculate height to fill the rest of the screen
            drawer.style.maxHeight = `calc(100vh - ${headerHeight}px)`;
            drawer.style.overflowY = 'auto'; // scrollable if too long
        }
    }

    function toggleMenu() {
        const isClosed = drawer.classList.contains('-translate-x-full');

        if (isClosed) {
            // OPEN
            updateMenuPosition();
            drawer.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden'); // Show dark overlay
            iconOpen.classList.add('hidden');
            iconClose.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        } else {
            // CLOSE
            drawer.classList.add('-translate-x-full');
            overlay.classList.add('hidden'); // Hide dark overlay
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = ''; 
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleMenu);
    }
    
    // Allow closing by clicking the dark overlay
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            drawer.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = '';
        } else if (!drawer.classList.contains('-translate-x-full')) {
            updateMenuPosition();
        }
    });

    updateMenuPosition();
});

     //HOME  PAGE SCRPT //

        //home section 1//
document.addEventListener("DOMContentLoaded", () => {
    // Select all images with the class 'slideshow-image'
    const slides = document.querySelectorAll('.slideshow-image');
    
    // Configuration
    const slideInterval = 5000; // Change image every 5000ms (5 seconds)
    let currentSlide = 0;

    // Only run if slides exist
    if (slides.length > 0) {
        setInterval(() => {
            // 1. Hide the current slide
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');

            // 2. Calculate the index of the next slide
            // (currentSlide + 1) % slides.length ensures it loops back to 0 after the last image
            currentSlide = (currentSlide + 1) % slides.length;

            // 3. Show the next slide
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
            
        }, slideInterval);
    }
});

        //home section 2//
    document.addEventListener("DOMContentLoaded", () => {
    
    // --- PART 1: About Section Image Slideshow ---
    const aboutImages = document.querySelectorAll('.about-image');
    let aboutSlideIndex = 0;

    if (aboutImages.length > 0) {
        setInterval(() => {
            // Hide current
            aboutImages[aboutSlideIndex].classList.remove('opacity-100');
            aboutImages[aboutSlideIndex].classList.add('opacity-0');

            // Move to next
            aboutSlideIndex = (aboutSlideIndex + 1) % aboutImages.length;

            // Show next
            aboutImages[aboutSlideIndex].classList.remove('opacity-0');
            aboutImages[aboutSlideIndex].classList.add('opacity-100');
        }, 4000); // Changes every 4 seconds
    }

    // --- PART 2: Scroll Reveal Animation (Intersection Observer) ---
    // This watches elements with class 'reveal-on-scroll'
    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: "0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that makes the element visible
                entry.target.classList.add('is-visible');
                // Stop watching this element once it's revealed (optional)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Find all elements to animate
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
        scrollObserver.observe(el);
    });

});

 //home section 3//
document.addEventListener("DOMContentLoaded", () => {
    
    // Check if the browser supports IntersectionObserver (Modern browsers do)
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Run animation only once
            }
        });
    }, observerOptions);

    // Target all elements with the class 'reveal-on-scroll'
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
        scrollObserver.observe(el);
    });
});

 //home section 4//
 document.addEventListener("DOMContentLoaded", () => {
    
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
        scrollObserver.observe(el);
    });
});


 //home section 5//
 document.addEventListener("DOMContentLoaded", () => {
    
    const track = document.getElementById('gallery-track');

    // DATA: Array of 20 Items (You can edit the text and images here)
    // I am recycling your 4 images to make 20 items.
    const galleryItems = [
        { img: "Picha/1.jpeg", title: "Orientation Day", desc: "Welcoming the new batch of procurement leaders." },
        { img: "picha/3.jpeg", title: "Networking Event", desc: "Students connecting with industry giants." },
        { img: "Picha/2.jpeg", title: "Workshop 101", desc: "Hands-on training in supply chain logistics." },
        { img: "Picha/3.jpeg", title: "Annual Summit", desc: "Celebrating excellence in our department." },
        { img: "Picha/1.jpeg", title: "Guest Lecture", desc: "Insights from the CEO of Logistics Co." },
        { img: "Picha/2.jpeg", title: "Study Tour", desc: "Visiting the port authority for real experience." },
        { img: "Picha/3.jpeg", title: "Graduation", desc: "Our members stepping into the professional world." },
        { img: "Picha/2.jpeg", title: "Charity Drive", desc: "Giving back to the community together." },
        { img: "Picha/1.jpeg", title: "Tech Seminar", desc: "Learning about AI in procurement." },
        { img: "Picha/2.jpeg", title: "Team Building", desc: "Strengthening bonds at the retreat." },
        { img: "Picha/3.jpeg", title: "Innovation Award", desc: "Recognizing creative solutions in supply chain." },
        { img: "Picha/2.jpeg", title: "Alumni Meet", desc: "Connecting past and present members." },
        { img: "Picha/1.jpeg", title: "Exam Prep", desc: "Group studies for the PSPTB exams." },
        { img: "Picha/2.jpeg", title: "Sports Day", desc: "Healthy competition on the field." },
        { img: "Picha/3.jpeg", title: "Internship Fair", desc: "Securing placements for our students." },
        { img: "Picha/3.jpeg", title: "Debate Club", desc: "Discussing ethics in global sourcing." },
        { img: "Picha/1.jpeg", title: "Cultural Night", desc: "Celebrating our diverse backgrounds." },
        { img: "Picha/2.jpeg", title: "Mentorship", desc: "Seniors guiding juniors." },
        { img: "Picha/3.jpeg", title: "Project Demo", desc: "Showcasing final year procurement projects." },
        { img: "Picha/1.jpeg", title: "Farewell Party", desc: "Wishing the best to outgoing leaders." },
    ];

    // Function to generate the HTML for a single card
    function createCard(item) {
        return `
            <div class="gallery-card relative min-w-[200px] h-[200px] rounded-xl overflow-hidden cursor-pointer shadow-md">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                <div class="gallery-text absolute bottom-0 left-0 w-full p-6 text-white z-10">
                    <h3 class="text-xl font-bold text-emerald-400 mb-1">${item.title}</h3>
                    <p class="text-sm text-gray-200 leading-snug">${item.desc}</p>
                </div>
            </div>
        `;
    }

    // 1. Generate the initial 20 cards
    let galleryHTML = galleryItems.map(item => createCard(item)).join('');

    // 2. DUPLICATE the content (Clone) to create the seamless infinite loop
    // We add the same 20 cards again to the end.
    galleryHTML += galleryHTML;

    // 3. Inject into the DOM
    if(track) {
        track.innerHTML = galleryHTML;
        // Add the animation class now that content is loaded
        track.classList.add('animate-scroll');
    }
});

//ABOUT US//
//Hero section  1//
document.addEventListener("DOMContentLoaded", () => {
    
    // --- OUR STORY SLIDER LOGIC ---
    const storyImages = document.querySelectorAll('.story-bg');
    let storyIndex = 0;

    if (storyImages.length > 0) {
        setInterval(() => {
            // 1. Hide current image
            storyImages[storyIndex].classList.remove('opacity-100');
            storyImages[storyIndex].classList.add('opacity-0');

            // 2. Move to next index
            storyIndex = (storyIndex + 1) % storyImages.length;

            // 3. Show next image
            storyImages[storyIndex].classList.remove('opacity-0');
            storyImages[storyIndex].classList.add('opacity-100');
            
        }, 3000); // Change image every 3 seconds (Change to 1000 for 1 second)
    }

    // --- ANIMATION OBSERVER (If not already in your file) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
});

//Hero section 2//
document.addEventListener("DOMContentLoaded", () => {
    
    // --- ABOUT SECTION SLIDESHOW ---
    const aboutSlides = document.querySelectorAll('.about-slide');
    let aboutSlideIndex = 0;
    const slideIntervalTime = 4000; // Change image every 4 seconds

    // Only run if images exist
    if (aboutSlides.length > 0) {
        setInterval(() => {
            // 1. Fade OUT the current image
            aboutSlides[aboutSlideIndex].classList.remove('opacity-100');
            aboutSlides[aboutSlideIndex].classList.add('opacity-0');

            // 2. Calculate the next index (loops back to 0 after the last image)
            aboutSlideIndex = (aboutSlideIndex + 1) % aboutSlides.length;

            // 3. Fade IN the next image
            aboutSlides[aboutSlideIndex].classList.remove('opacity-0');
            aboutSlides[aboutSlideIndex].classList.add('opacity-100');
            
        }, slideIntervalTime);
    }

    // ... keep your existing scroll observer code here ...
});

//Hero Section 3//
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
});

//gallery script//

document.addEventListener('DOMContentLoaded', function() {
    
    // ================= GALLERY TAB LOGIC =================
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleryGroups = document.querySelectorAll('.gallery-group');

    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 1. Deactivate all tabs
            galleryTabs.forEach(t => t.classList.remove('active-tab', 'bg-emerald-600', 'text-white'));
            galleryTabs.forEach(t => t.classList.add('bg-white', 'text-gray-700'));

            // 2. Activate clicked tab
            this.classList.remove('bg-white', 'text-gray-700');
            this.classList.add('active-tab', 'bg-emerald-600', 'text-white');

            // 3. Hide all groups
            galleryGroups.forEach(group => group.classList.add('hidden'));

            // 4. Show the selected group
            const year = this.getAttribute('data-year');
            const targetGroup = document.getElementById(`group-${year}`);
            if (targetGroup) {
                targetGroup.classList.remove('hidden');
            }
        });
    });

});


// Clubs//
document.addEventListener("DOMContentLoaded", () => {
    
    // --- CLUB SEARCH FUNCTIONALITY ---
    const searchInput = document.getElementById('club-search');
    const clubCards = document.querySelectorAll('.club-card');
    const noResultsMsg = document.getElementById('no-results');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            let hasVisibleCards = false;

            clubCards.forEach(card => {
                // Get the club name and location text from inside the card
                const clubName = card.querySelector('h3').textContent.toLowerCase();
                const clubLocation = card.querySelector('p').textContent.toLowerCase();

                // Check if search term matches name OR location
                if (clubName.includes(searchTerm) || clubLocation.includes(searchTerm)) {
                    card.classList.remove('hidden');
                    // Add a small animation reset if you want it to pop back in
                    card.style.display = 'block';
                    hasVisibleCards = true;
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });

            // Toggle the "No Results" message
            if (hasVisibleCards) {
                noResultsMsg.classList.add('hidden');
            } else {
                noResultsMsg.classList.remove('hidden');
            }
        });
    }
});




//news script//
document.addEventListener("DOMContentLoaded", () => {
    
    // --- NEWS SEARCH FUNCTIONALITY ---
    const newsInput = document.getElementById('news-search');
    const newsItems = document.querySelectorAll('.news-item');
    const newsNoResults = document.getElementById('news-no-results');

    if (newsInput) {
        newsInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            newsItems.forEach(item => {
                // Search in Title, Description, and hidden Data Tags
                const title = item.querySelector('h3').textContent.toLowerCase();
                const desc = item.querySelector('p').textContent.toLowerCase();
                const tags = item.getAttribute('data-tags') ? item.getAttribute('data-tags').toLowerCase() : "";

                if (title.includes(term) || desc.includes(term) || tags.includes(term)) {
                    item.classList.remove('hidden');
                    visibleCount++;
                } else {
                    item.classList.add('hidden');
                }
            });

            // Show "No Results" if everything is hidden
            if (visibleCount === 0) {
                newsNoResults.classList.remove('hidden');
            } else {
                newsNoResults.classList.add('hidden');
            }
        });
    }
});
    
//news  (read more ) script//
document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.carousel-image');
            const caption = document.getElementById('image-caption');
            let currentIndex = 0;
            const cycleTime = 2000; // 1000 milliseconds = 1 second

            if (images.length === 0) return;

            function updateCarousel() {
                // 1. Hide all images
                images.forEach(img => {
                    img.classList.remove('opacity-100');
                    img.classList.add('opacity-0');
                });

                // 2. Show the current image
                const currentImage = images[currentIndex];
                currentImage.classList.remove('opacity-0');
                currentImage.classList.add('opacity-100');

                // 3. Update the caption text
                caption.textContent = currentImage.getAttribute('data-description');

                // 4. Move to the next index
                currentIndex = (currentIndex + 1) % images.length;
            }

            // Set the initial state (redundant but ensures immediate visibility)
            updateCarousel(); 
            currentIndex = 1; // Start cycle from the next image

            // Start the automatic rotation
            setInterval(updateCarousel, cycleTime);
        });

        //job filter script//
document.addEventListener("DOMContentLoaded", () => {
    
    // --- JOB SEARCH & FILTER ---
    const jobSearch = document.getElementById('job-search');
    const jobFilter = document.getElementById('job-filter');
    const jobCards = document.querySelectorAll('.job-card');
    const noJobsMsg = document.getElementById('job-no-results');

    function filterJobs() {
        const searchTerm = jobSearch.value.toLowerCase().trim();
        const filterType = jobFilter.value.toLowerCase();
        let visibleCount = 0;

        jobCards.forEach(card => {
            const type = card.getAttribute('data-type');
            const keywords = card.getAttribute('data-keywords').toLowerCase();
            const title = card.querySelector('h3').textContent.toLowerCase();
            const company = card.querySelector('p').textContent.toLowerCase();

            // 1. Check Text Match (Title, Company, or Keywords)
            const matchesSearch = title.includes(searchTerm) || 
                                  company.includes(searchTerm) || 
                                  keywords.includes(searchTerm);

            // 2. Check Type Match (Dropdown)
            const matchesType = (filterType === 'all') || (type === filterType);

            if (matchesSearch && matchesType) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Toggle "No Results" message
        if (visibleCount === 0) {
            noJobsMsg.classList.remove('hidden');
        } else {
            noJobsMsg.classList.add('hidden');
        }
    }

    if (jobSearch && jobFilter) {
        jobSearch.addEventListener('keyup', filterJobs);
        jobFilter.addEventListener('change', filterJobs);
    }
});

// contact//
document.addEventListener("DOMContentLoaded", () => {
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop actual submission for demo
            
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Change button state
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            // Simulate server delay
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
                btn.classList.remove('bg-black', 'hover:bg-emerald-600');
                btn.classList.add('bg-emerald-500');
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.add('bg-black', 'hover:bg-emerald-600');
                    btn.classList.remove('bg-emerald-500', 'opacity-75', 'cursor-not-allowed');
                }, 3000);
            }, 1500);
        });
    }
});

// login form//
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');

    // Your demo credentials
    const VALID_USERNAME = "admin"; 
    const VALID_PASSWORD = "123";

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Loading State on Button
        const originalBtnHTML = loginBtn.innerHTML;
        loginBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Authenticating...`;
        loginBtn.disabled = true;

        setTimeout(() => {
            if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                // SUCCESS: Change button to green and redirect
                loginBtn.innerHTML = `<i class="fa-solid fa-check"></i> Verified`;
                loginBtn.classList.replace('bg-black', 'bg-emerald-500');

                setTimeout(() => {
                    window.location.href = "Member.html"; 
                }, 600);

            } else {
                // FAILURE: Reset button and alert the user simply
                loginBtn.innerHTML = originalBtnHTML;
                loginBtn.disabled = false;
                
                // Professional way to show error without extra divs:
                alert("The Username or Password provided is incorrect.");
                
                // Clear password for security
                document.getElementById('password').value = "";
            }
        }, 1000);
    });
});

//member dasbbord//
// Function to switch tabs
function switchTab(tabName) {
    // 1. Hide all View Sections
    const allViews = document.querySelectorAll('.view-section');
    allViews.forEach(view => {
        view.classList.add('hidden');
    });

    // 2. Remove Active Class from all Nav Buttons
    const allNavs = document.querySelectorAll('.nav-item');
    allNavs.forEach(nav => {
        nav.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg');
        nav.classList.add('text-slate-400', 'hover:bg-slate-800', 'hover:text-white');
    });

    // 3. Show the Selected View
    const targetView = document.getElementById('view-' + tabName);
    if (targetView) {
        targetView.classList.remove('hidden');
    }

    // 4. Add Active Class to Selected Nav Button
    const targetNav = document.getElementById('nav-' + tabName);
    if (targetNav) {
        targetNav.classList.remove('text-slate-400', 'hover:bg-slate-800', 'hover:text-white');
        targetNav.classList.add('bg-emerald-600', 'text-white', 'shadow-lg');
    }
}

// Function to Toggle Seminar Details in Payment Section
function toggleSeminarDetails() {
    const details = document.getElementById('seminar-details');
    details.classList.toggle('hidden');
}

// Function to Logout
function logout() {
    if(confirm("Are you sure you want to logout?")) {
        window.location.href = "login.html";
    }
}

// Initialize: Ensure Dashboard is active on load
document.addEventListener('DOMContentLoaded', () => {
    switchTab('dashboard');
});











        //registation form script//
        document.addEventListener('DOMContentLoaded', () => {
            const universitySelect = document.getElementById('university');
            const campusField = document.getElementById('campus_field');
            const campusInput = document.getElementById('campus');

            const toggleCampusField = () => {
                const selectedValue = universitySelect.value;
                
                // Check if the selected university value contains "_NoCampus"
                if (selectedValue.includes('_NoCampus')) {
                    campusField.classList.add('hidden');
                    campusInput.removeAttribute('required'); // Remove required attribute
                } else {
                    campusField.classList.remove('hidden');
                    // Add back required attribute only if needed, 
                    // but often for complex forms, it's better to make it optional unless strictly necessary.
                    // campusInput.setAttribute('required', 'required'); 
                }
            };

            // Run on page load
            toggleCampusField();

            // Run on university change
            universitySelect.addEventListener('change', toggleCampusField);
        });


        //LOGIN form script//
        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('login-form');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const errorMessage = document.getElementById('error-message');

            // --- HARDCODED DEMO CREDENTIALS ---
            const DEMO_USERNAME = "MZA/BPLM/22/107505";
            const DEMO_PASSWORD = "Victor@2025";
            const DASHBOARD_URL = 'Member.html'; // Ensure this matches your dashboard filename

            loginForm.addEventListener('submit', (e) => {
                e.preventDefault(); // Stop the form from performing a real submission

                // Normalize inputs to trim whitespace
                const enteredUsername = usernameInput.value.trim();
                const enteredPassword = passwordInput.value.trim();
                
                // Hide any previous error message
                errorMessage.classList.add('hidden');

                // --- CHECK DEMO CREDENTIALS ---
                if (enteredUsername === DEMO_USERNAME && enteredPassword === DEMO_PASSWORD) {
                    
                    // 1. Successful Login: Log and redirect
                    console.log("Demo Login Successful for Victor!");
                    // Redirect to the dashboard page
                    window.location.href = DASHBOARD_URL;

                } else {
                    
                    // 2. Failed Login: Display error
                    console.error("Login Failed: Incorrect demo credentials.");
                    errorMessage.classList.remove('hidden');

                    // Optional: Clear password field for security
                    passwordInput.value = '';
                }
            });
        });





   //payment script//
   document.addEventListener('DOMContentLoaded', () => {
            const paymentDetailsDiv = document.getElementById('payment-details');
            const paymentMethodInputs = document.querySelectorAll('input[name="payment_method"]');
            const payButton = document.getElementById('pay-button');
            const paymentForm = document.getElementById('payment-form');

            // --- 1. Define HTML templates for different payment methods ---
            const mobileMoneyHtml = `
                <h4 class="text-lg font-semibold text-gray-800">Mobile Money / Bank Details</h4>
                <p class="text-sm text-gray-600">Please select your provider to receive a prompt or use the bank details below for a transfer.</p>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="provider" class="block text-sm font-medium text-gray-700">Provider</label>
                        <select id="provider" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 bg-white">
                            <option>M-Pesa</option>
                            <option>Tigo Pesa</option>
                            <option>Airtel Money</option>
                            <option>Bank Transfer</option>
                        </select>
                    </div>
                    <div>
                        <label for="phone_pay" class="block text-sm font-medium text-gray-700">Your Phone Number</label>
                        <input type="tel" id="phone_pay" placeholder="+255..." class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3" required>
                    </div>
                </div>
                <div class="bg-yellow-50 p-3 rounded text-sm mt-3">
                    <strong>Bank Details (for manual transfer):</strong> A/C Name: FPSSA Fund | A/C No: 123456789 | Bank: CRDB Bank
                </div>
            `;

            const cardHtml = `
                <h4 class="text-lg font-semibold text-gray-800">Card Information</h4>
                <p class="text-sm text-gray-600">Enter your card details securely below.</p>
                <div>
                    <label for="card_number" class="block text-sm font-medium text-gray-700">Card Number</label>
                    <input type="text" id="card_number" placeholder="XXXX XXXX XXXX XXXX" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3" required>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <label for="expiry" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input type="text" id="expiry" placeholder="MM/YY" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3" required>
                    </div>
                    <div class="col-span-1">
                        <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                        <input type="text" id="cvv" placeholder="123" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3" required>
                    </div>
                    <div class="col-span-1">
                        <label for="zip" class="block text-sm font-medium text-gray-700">ZIP/Postal Code</label>
                        <input type="text" id="zip" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3">
                    </div>
                </div>
            `;

            // --- 2. Function to update details based on radio button ---
            const updatePaymentDetails = (method) => {
                if (method === 'mobile') {
                    paymentDetailsDiv.innerHTML = mobileMoneyHtml;
                } else if (method === 'card') {
                    paymentDetailsDiv.innerHTML = cardHtml;
                }
                // Update button text for clarity
                payButton.textContent = `Initiate Payment (60,000 TZS) via ${method === 'mobile' ? 'Mobile Money' : 'Card'}`;
            };

            // Initial load (default to mobile money)
            updatePaymentDetails('mobile');

            // Listen for changes in payment method selection
            paymentMethodInputs.forEach(input => {
                input.addEventListener('change', (e) => {
                    updatePaymentDetails(e.target.value);
                    
                    // Highlight selected option
                    document.querySelectorAll('.payment-option').forEach(label => {
                        label.classList.remove('border-psso-primary', 'bg-psso-primary/5');
                        label.classList.add('border-gray-300');
                    });
                    e.target.closest('label').classList.remove('border-gray-300');
                    e.target.closest('label').classList.add('border-psso-primary', 'bg-psso-primary/5');
                });
            });

            // --- 3. Payment Simulation and Redirect ---
            paymentForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // Simple form validation check (Tailwind styling implies some HTML validation)
                const currentMethod = document.querySelector('input[name="payment_method"]:checked').value;
                
                alert(`Simulating payment of 60,000 TZS via ${currentMethod}...`);

                // In a real application, an API call would happen here.
                // Assuming successful response after a brief delay:
                setTimeout(() => {
                    // Redirect to a success page
                    window.location.href = 'payment-success.html'; 
                }, 2000); 
            });
        });


        //club script//
       document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('club-search');
            const clubCards = document.querySelectorAll('.club-card');
            const noResults = document.getElementById('no-results');

            const filterClubs = () => {
                const searchTerm = searchInput.value.toLowerCase().trim();
                let resultsCount = 0;

                clubCards.forEach(card => {
                    const location = card.getAttribute('data-location').toLowerCase();
                    
                    if (location.includes(searchTerm)) {
                        card.classList.remove('hidden');
                        resultsCount++;
                    } else {
                        card.classList.add('hidden');
                    }
                });

                if (resultsCount === 0) {
                    noResults.classList.remove('hidden');
                } else {
                    noResults.classList.add('hidden');
                }
            };

            // Event listeners for search
            searchInput.addEventListener('input', filterClubs);
        });

        //visity page//
        document.addEventListener('DOMContentLoaded', () => {
            const eventSearchInput = document.getElementById('event-search');
            const clubEvents = document.querySelectorAll('.club-event');
            const noEvents = document.getElementById('no-events');
            const clubTitleElement = document.getElementById('club-title');
            
            // --- 1. Dynamic Club Title ---
            const urlParams = new URLSearchParams(window.location.search);
            const clubParam = urlParams.get('club');
            
            if (clubParam) {
                // Simple function to capitalize the first letter of each word (e.g., "dar es salaam" -> "Dar Es Salaam")
                const formatClubName = (str) => {
                    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                };
                
                clubTitleElement.textContent = `Events for ${formatClubName(clubParam)}`;
                document.title = `${formatClubName(clubParam)} Events - PSSO`;
            } else {
                 clubTitleElement.textContent = "Club Events (No Club Selected)";
            }

            // --- 2. Event Filtering Logic ---
            const filterEvents = () => {
                const searchTerm = eventSearchInput.value.toLowerCase().trim();
                let resultsCount = 0;

                clubEvents.forEach(eventDiv => {
                    const keywords = eventDiv.getAttribute('data-keywords').toLowerCase();
                    const title = eventDiv.querySelector('h3').textContent.toLowerCase();
                    
                    // Check if search term is in keywords or title
                    if (keywords.includes(searchTerm) || title.includes(searchTerm)) {
                        eventDiv.classList.remove('hidden');
                        resultsCount++;
                    } else {
                        eventDiv.classList.add('hidden');
                    }
                });

                if (resultsCount === 0) {
                    noEvents.classList.remove('hidden');
                } else {
                    noEvents.classList.add('hidden');
                }
            };

            // Event listeners for search
            eventSearchInput.addEventListener('input', filterEvents);
        });

        //member dashboard script registation//
        document.addEventListener('DOMContentLoaded', () => {
            const universitySelect = document.getElementById('university');
            const campusField = document.getElementById('campus_field');
            const campusInput = document.getElementById('campus');

            const toggleCampusField = () => {
                const selectedValue = universitySelect.value;
                
                // Check if the selected university value contains "_NoCampus"
                if (selectedValue.includes('_NoCampus')) {
                    campusField.classList.add('hidden');
                    campusInput.removeAttribute('required'); // Remove required attribute
                } else {
                    campusField.classList.remove('hidden');
                    // Add back required attribute only if needed, 
                    // but often for complex forms, it's better to make it optional unless strictly necessary.
                    // campusInput.setAttribute('required', 'required'); 
                }
            };

            // Run on page load
            toggleCampusField();

            // Run on university change
            universitySelect.addEventListener('change', toggleCampusField);
        });