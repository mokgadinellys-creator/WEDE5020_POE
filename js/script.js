/* ============================================================
   KING'S CAR WASH — MAIN JAVASCRIPT
   WEDE5020 Portfolio of Evidence — Part 3
   Student: Mokgadi Laura Selepe (ST10509313)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ========================================================
       1. HAMBURGER MENU TOGGLE
       ======================================================== */
    const navButton = document.querySelector('header button');
    const navList = document.querySelector('nav ul');
    if (navButton && navList) {
        navButton.addEventListener('click', function () {
            navList.classList.toggle('is-open');
            const expanded = navList.classList.contains('is-open');
            navButton.setAttribute('aria-expanded', expanded);
        });
    }

    /* ========================================================
       2. ACCORDION (services.html)
       ======================================================== */
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            const panel = header.nextElementSibling;
            const isOpen = header.getAttribute('aria-expanded') === 'true';

            // Close all others (single-open accordion)
            accordionHeaders.forEach(function (other) {
                if (other !== header) {
                    other.setAttribute('aria-expanded', 'false');
                    other.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current
            if (isOpen) {
                header.setAttribute('aria-expanded', 'false');
                panel.style.maxHeight = null;
            } else {
                header.setAttribute('aria-expanded', 'true');
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    /* ========================================================
       3. GALLERY LIGHTBOX (services.html)
       ======================================================== */
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const links = Array.from(document.querySelectorAll('.lightbox-link'));
        const lbImg = document.getElementById('lightbox-img');
        const lbCaption = document.getElementById('lightbox-caption');
        const btnClose = lightbox.querySelector('.lightbox-close');
        const btnPrev = lightbox.querySelector('.lightbox-prev');
        const btnNext = lightbox.querySelector('.lightbox-next');
        let currentIndex = 0;
        let lastFocused = null;

        function showImage(index) {
            if (index < 0) index = links.length - 1;
            if (index >= links.length) index = 0;
            currentIndex = index;
            const link = links[index];
            lbImg.src = link.getAttribute('href');
            lbImg.alt = link.querySelector('img').alt;
            lbCaption.textContent = link.dataset.caption || '';
        }

        function openLightbox(index) {
            lastFocused = document.activeElement;
            showImage(index);
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            btnClose.focus();
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            if (lastFocused) lastFocused.focus();
        }

        links.forEach(function (link, i) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                openLightbox(i);
            });
        });

        btnClose.addEventListener('click', closeLightbox);
        btnPrev.addEventListener('click', function () { showImage(currentIndex - 1); });
        btnNext.addEventListener('click', function () { showImage(currentIndex + 1); });
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        });
    }

    /* ========================================================
       4. SERVICE SEARCH FILTER (services.html)
       ======================================================== */
    const searchInput = document.getElementById('serviceSearch');
    if (searchInput) {
        const cards = document.querySelectorAll('.service-card');
        const status = document.getElementById('searchStatus');
        searchInput.addEventListener('input', function () {
            const q = this.value.trim().toLowerCase();
            let visible = 0;
            cards.forEach(function (card) {
                const haystack = (card.dataset.name + ' ' + card.textContent).toLowerCase();
                const show = haystack.indexOf(q) !== -1;
                card.style.display = show ? '' : 'none';
                if (show) visible++;
            });
            if (status) {
                status.textContent = q
                    ? visible + ' service(s) match "' + q + '".'
                    : '';
            }
        });
    }

    /* ========================================================
       5. DYNAMIC TESTIMONIAL ROTATOR (index.html)
       ======================================================== */
    const liveText = document.getElementById('liveReviewText');
    const liveAuthor = document.getElementById('liveReviewAuthor');
    if (liveText && liveAuthor) {
        const reviews = [
            { text: "The best service ever — friendly and professional. Keep making us smile King.", author: "Moloko Caro" },
            { text: "Passionate and very attentive washes — your car feels brand new every time.", author: "Meek Brad" },
            { text: "Best in the province! Service delivery on point.", author: "Mahlatse Selowa" },
            { text: "My car looks brand new every time it gets that magical touch.", author: "A happy customer" }
        ];
        let i = 0;
        function showReview() {
            liveText.textContent = '"' + reviews[i].text + '"';
            liveAuthor.textContent = '— ' + reviews[i].author;
            i = (i + 1) % reviews.length;
        }
        showReview();
        setInterval(showReview, 5000);
    }

    /* ========================================================
       6. ENQUIRY FORM VALIDATION + PROCESSING (enquiry.html)
       ======================================================== */
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        const PRICES = { exterior: 110, interior: 400, 'full-service': 650 };
        const BAKKIE_MULTIPLIER = { passenger: 1, bakkie: 1.5 };
        const fields = ['name', 'email', 'phone', 'service', 'vehicle', 'date'];

        function errorEl(id) { return document.getElementById('err-' + id); }

        function validateField(id) {
            const el = document.getElementById(id);
            const err = errorEl(id);
            if (!el || !err) return true;
            let msg = '';
            el.classList.remove('invalid');
            err.textContent = '';

            if (!el.value.trim()) msg = 'This field is required.';

            if (!msg && id === 'name' && el.value.trim().length < 2) {
                msg = 'Name must be at least 2 characters.';
            }
            if (!msg && id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
                msg = 'Please enter a valid email address.';
            }
            if (!msg && id === 'phone' && !/^0[0-9]{9}$/.test(el.value)) {
                msg = 'Phone must be 10 digits starting with 0 (e.g. 0754313701).';
            }
            if (!msg && id === 'date') {
                const today = new Date(); today.setHours(0, 0, 0, 0);
                if (new Date(el.value) < today) {
                    msg = 'Preferred date cannot be in the past.';
                }
            }
            if (msg) {
                el.classList.add('invalid');
                err.textContent = msg;
                return false;
            }
            return true;
        }

        fields.forEach(function (id) {
            const el = document.getElementById(id);
            if (el) el.addEventListener('blur', function () { validateField(id); });
        });

        const msgEl = document.getElementById('message');
        if (msgEl) {
            msgEl.addEventListener('blur', function () {
                const err = document.getElementById('err-message');
                if (msgEl.value.length > 500) {
                    err.textContent = 'Message must be 500 characters or fewer.';
                    msgEl.classList.add('invalid');
                } else {
                    err.textContent = '';
                    msgEl.classList.remove('invalid');
                }
            });
        }

        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let ok = true;
            fields.forEach(function (id) { if (!validateField(id)) ok = false; });
            if (msgEl && msgEl.value.length > 500) {
                ok = false;
                document.getElementById('err-message').textContent = 'Message must be 500 characters or fewer.';
            }

            const box = document.getElementById('enquiryResponse');

            if (!ok) {
                box.innerHTML = '⚠️ Please correct the highlighted fields below.';
                box.className = 'form-response fail';
                box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            const svc = document.getElementById('service').value;
            const veh = document.getElementById('vehicle').value;
            const price = Math.round(PRICES[svc] * (BAKKIE_MULTIPLIER[veh] || 1));
            const dateStr = new Date(document.getElementById('date').value).toLocaleDateString('en-ZA', {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
            });
            const vol = document.getElementById('volunteer').value;
            const svcText = document.getElementById('service').selectedOptions[0].text;

            let text = 'Thank you, <strong>' + document.getElementById('name').value.trim() + '</strong>! 🎉<br><br>';
            text += '<strong>Service:</strong> ' + svcText + '<br>';
            text += '<strong>Vehicle:</strong> ' + (veh === 'bakkie' ? 'Bakkie' : 'Passenger') + '<br>';
            text += '<strong>Estimated cost:</strong> R' + price + '.00<br>';
            text += '<strong>Requested date:</strong> ' + dateStr + '<br>';
            text += '<strong>Availability:</strong> ✅ Slots are available on your selected date — we will confirm by WhatsApp shortly.<br>';
            if (vol !== 'no') {
                text += '<br><strong>' + (vol === 'volunteer' ? 'Volunteer' : 'Sponsor') + ' request noted</strong> — our founder will be in touch.';
            }
            text += '<br><br>A confirmation has been sent to <strong>' + document.getElementById('email').value + '</strong>.';

            box.innerHTML = text;
            box.className = 'form-response success';
            box.scrollIntoView({ behavior: 'smooth', block: 'center' });
            enquiryForm.reset();
            fields.forEach(function (id) {
                const err = errorEl(id);
                if (err) err.textContent = '';
            });
            if (msgEl) document.getElementById('err-message').textContent = '';
        });
    }

    /* ========================================================
       7. CONTACT FORM VALIDATION + MAILTO EMAIL
       ======================================================== */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const RECIPIENT = 'kingscarwash@example.com'; // ← replace with real business email
        const cf = ['c-name', 'c-email', 'c-phone', 'c-type', 'c-message'];

        function validateContact() {
            let ok = true;
            function setErr(id, msg) {
                const el = document.getElementById(id);
                const err = document.getElementById('err-' + id);
                if (!el || !err) return;
                if (msg) { el.classList.add('invalid'); err.textContent = msg; ok = false; }
                else { el.classList.remove('invalid'); err.textContent = ''; }
            }
            const name = document.getElementById('c-name').value.trim();
            const email = document.getElementById('c-email').value.trim();
            const phone = document.getElementById('c-phone').value.trim();
            const type = document.getElementById('c-type').value;
            const msg = document.getElementById('c-message').value.trim();

            setErr('c-name', name.length < 2 ? 'Please enter your full name (min 2 chars).' : '');
            setErr('c-email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Please enter a valid email address.');
            setErr('c-phone', phone && !/^0[0-9]{9}$/.test(phone) ? 'Phone must be 10 digits starting with 0.' : '');
            setErr('c-type', !type ? 'Please select a message type.' : '');
            setErr('c-message', msg.length < 10 ? 'Message must be at least 10 characters.' : '');
            return ok;
        }

        cf.forEach(function (id) {
            const el = document.getElementById(id);
            if (el) el.addEventListener('blur', validateContact);
        });

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const box = document.getElementById('contactResponse');

            if (!validateContact()) {
                box.className = 'form-response fail';
                box.textContent = '⚠️ Please correct the highlighted fields.';
                box.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            const name = document.getElementById('c-name').value.trim();
            const email = document.getElementById('c-email').value.trim();
            const phone = document.getElementById('c-phone').value.trim();
            const type = document.getElementById('c-type').selectedOptions[0].text;
            const msg = document.getElementById('c-message').value.trim();

            const subject = encodeURIComponent("[King's Car Wash] " + type + " — " + name);
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Phone: ' + (phone || '—') + '\n' +
                'Message type: ' + type + '\n\n' +
                msg + '\n\n---\nSent from the King\'s Car Wash website.'
            );

            const mailtoLink = 'mailto:' + RECIPIENT + '?subject=' + subject + '&body=' + body;
            window.location.href = mailtoLink;

            box.className = 'form-response success';
            box.innerHTML = '✅ Your message is ready! Your default email app should have opened with the message pre-filled.<br><br>' +
                'If it didn\'t open, <a href="' + mailtoLink + '">click here to send it manually</a>.';
            box.scrollIntoView({ behavior: 'smooth' });

            contactForm.reset();
            cf.forEach(function (id) {
                const err = document.getElementById('err-' + id);
                if (err) err.textContent = '';
            });
        });
    }

});