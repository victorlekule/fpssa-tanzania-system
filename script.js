    
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

        
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const drawer = document.getElementById('mobile-menu-drawer');
        const body = document.body;

        toggleBtn.addEventListener('click', () => {
            drawer.classList.toggle('-translate-x-full'); // Toggle visibility
            // Add/Remove overflow hidden to prevent body scroll when menu is open
            if (drawer.classList.contains('-translate-x-full')) {
                body.classList.remove('overflow-hidden');
            } else {
                body.classList.add('overflow-hidden');
            }
        });
        
        // Optionally close drawer if a link is clicked
        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!link.classList.contains('flex')) { // Only close if it's not a parent link with a dropdown
                    drawer.classList.add('-translate-x-full');
                    body.classList.remove('overflow-hidden');
                }
            });
        });
        
        //home bacground image script//
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.slideshow-image');
            let currentIndex = 0;
            const cycleTime = 2000; // 2000 milliseconds = 2 seconds

            function cycleBackground() {
                
                // 1. Hide the current image (set opacity to 0)
                images[currentIndex].classList.remove('opacity-100');
                images[currentIndex].classList.add('opacity-0');

                // 2. Calculate the next index
                currentIndex = (currentIndex + 1) % images.length;
                
                // 3. Show the next image (set opacity to 100)
                images[currentIndex].classList.remove('opacity-0');
                images[currentIndex].classList.add('opacity-100');
            }

            // Start the automatic rotation
            // The function runs every 'cycleTime' (2000ms)
            setInterval(cycleBackground, cycleTime);
        });
    
// Ensure the page content isn't hidden under the fixed header.
function adjustContentForHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    const height = header.getBoundingClientRect().height;
    // Apply padding to the body so all content shifts down
    document.body.style.paddingTop = height + 'px';
}

// Run on load and resize (and after a short delay to allow fonts/images to settle)
window.addEventListener('load', () => {
    adjustContentForHeader();
    setTimeout(adjustContentForHeader, 250);
});
window.addEventListener('resize', adjustContentForHeader);

//gallery script//
  
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.gallery-tab');
            const groups = document.querySelectorAll('.gallery-group');
            const container = document.getElementById('gallery-container');

            // Initialize the first tab (2025) as active
            const defaultTab = document.querySelector('[data-year="2025"]');
            defaultTab.classList.add('border-fp-secondary', 'text-fp-primary', 'font-bold');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetYear = tab.getAttribute('data-year');

                    // 1. Update Active Tab Styling
                    tabs.forEach(t => {
                        t.classList.remove('border-fp-secondary', 'text-fp-primary', 'font-bold');
                        t.classList.add('border-transparent', 'text-gray-700');
                    });
                    tab.classList.add('border-fp-secondary', 'text-fp-primary', 'font-bold');
                    tab.classList.remove('border-transparent', 'text-gray-700');
                    
                    // 2. Switch Gallery Group Visibility
                    groups.forEach(group => {
                        group.classList.add('hidden'); // Hide all groups
                    });
                    
                    const targetGroup = document.getElementById(`group-${targetYear}`);
                    if (targetGroup) {
                        targetGroup.classList.remove('hidden'); // Show the selected group
                        
                        // Optional: Add a fade-in effect (requires more CSS/JS for smooth transition)
                        container.style.opacity = 0;
                        setTimeout(() => {
                            container.style.opacity = 1;
                        }, 50);
                    }
                });
            });
        });
   
//news script//
document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('news-search');
            const searchButton = document.getElementById('search-button');
            const newsContainer = document.getElementById('news-container');
            const newsItems = document.querySelectorAll('.news-item');

            const filterNews = () => {
                const searchTerm = searchInput.value.toLowerCase().trim();

                newsItems.forEach(item => {
                    const title = item.querySelector('h3').textContent.toLowerCase();
                    const paragraph = item.querySelector('p').textContent.toLowerCase();
                    const date = item.querySelector('span').textContent.toLowerCase();
                    const tags = item.getAttribute('data-tags') ? item.getAttribute('data-tags').toLowerCase() : '';

                    // Check if any part of the news item contains the search term
                    if (title.includes(searchTerm) || paragraph.includes(searchTerm) || date.includes(searchTerm) || tags.includes(searchTerm)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            };

            // Event Listeners for search
            searchButton.addEventListener('click', filterNews);
            searchInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    filterNews();
                }
            });
            // Optional: Live search as user types
            // searchInput.addEventListener('input', filterNews); 
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
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('job-search');
            const filterSelect = document.getElementById('job-filter');
            const jobCards = document.querySelectorAll('.job-card');
            const noResults = document.getElementById('no-results');
            const applyButtons = document.querySelectorAll('.apply-btn');

            // --- 1. Job Filtering & Search Logic ---
            const filterJobs = () => {
                const searchTerm = searchInput.value.toLowerCase().trim();
                const filterType = filterSelect.value;
                let resultsCount = 0;

                jobCards.forEach(card => {
                    const jobType = card.getAttribute('data-type');
                    const jobKeywords = card.getAttribute('data-keywords').toLowerCase();
                    
                    const matchesSearch = jobKeywords.includes(searchTerm);
                    const matchesType = (filterType === 'all' || jobType === filterType);

                    if (matchesSearch && matchesType) {
                        card.classList.remove('hidden');
                        resultsCount++;
                    } else {
                        card.classList.add('hidden');
                    }
                });

                // Show/Hide No Results message
                if (resultsCount === 0) {
                    noResults.classList.remove('hidden');
                } else {
                    noResults.classList.add('hidden');
                }
            };

            // Event listeners for filtering
            searchInput.addEventListener('input', filterJobs);
            filterSelect.addEventListener('change', filterJobs);

            // --- 2. Dynamic "Apply Now" Button Logic ---
            applyButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const applyType = button.getAttribute('data-apply-type');
                    const target = button.getAttribute('data-target');

                    if (applyType === 'email') {
                        // Creates a mailto link to open the user's email client
                        window.location.href = `mailto:${target}?subject=Application for Procurement Intern Position`;
                    } else if (applyType === 'link') {
                        // Opens an external URL (e.g., Ajira Portal, LinkedIn)
                        window.open(target, '_blank');
                    } else if (applyType === 'form') {
                        // For a direct form (e.g., opens a modal or navigates to a form page)
                        alert(`Application form functionality goes here. Targeting: ${target}`);
                        // Example: openModal('application-form-modal');
                    } else {
                        alert('Application method not defined.');
                    }
                });
            });
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


        //member dashboard script//
        document.addEventListener('DOMContentLoaded', () => {
            const uploadInput = document.getElementById('passport-upload');
            const profilePicture = document.getElementById('profile-picture');

            // --- 1. Profile Picture Upload Simulation ---
            uploadInput.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        // Update the image source to the uploaded file
                        profilePicture.src = e.target.result;
                        alert("Photo uploaded successfully! (Note: This is a client-side simulation.)");
                        // In a real application, the file would be uploaded to a server here.
                    };
                    reader.readAsDataURL(file);
                }
            });

            // --- 2. Dynamic Data Placeholder (For a real system, this would come from an API) ---
            const memberData = {
                name: "Victor Lekule",
                id: "MZA/BPLM/22/107505",
                uni: "TIA MWANZA",
                level: "Degree ",
                regDate: "2024-01-15",
                endDate: "2024-12-31" 
            };
            
            document.getElementById('member-name').textContent = memberData.name;
            document.getElementById('member-id').textContent = memberData.id;
            document.getElementById('member-uni').textContent = memberData.uni;
            document.getElementById('member-level').textContent = memberData.level;
            document.getElementById('reg-date').textContent = memberData.regDate;
            document.getElementById('end-date').textContent = memberData.endDate;
            
            // NOTE: The Upcoming Events list is hardcoded in HTML for this template, 
            // but in a real app, this JS function would fetch it.
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