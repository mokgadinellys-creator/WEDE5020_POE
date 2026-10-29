# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

## [2026-09-17]- Part 2 Submission

### Added
- Created css/style.css and linked it to all 5 HTML pages(index, about, services, contact, enquiry).
- Implemented CSS Custom Properties (variables) for the gold, black, and cream colour scheme.
- Added typography styling using Google Fonts ('Roboto') and responsive font sizes (`clamp()`).
- Implemented CSS Grid for the Services Gallery.
- Added Flexbox layouts for the Header navigation and Hero section.
- Added pseudo-classes (`:hover`, `:focus`, `:active`) to buttons, links, and form inputs.
- Implemented Media Queries for desktop (max-width: 768px) and Mobile (max-width: 480px)


# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

## [2026-10-XX] — Part 3 Submission

### Added — JavaScript Functionality
- Created `js/script.js` and linked it to all 5 HTML pages, replacing inline hamburger script.
- Implemented accordion (FAQ) on `services.html` with accessible `aria-expanded` toggles and smooth max-height transitions.
- Implemented gallery lightbox on `services.html` with prev/next navigation, captions, keyboard Escape support and click-outside-to-close.
- Added Leaflet interactive map to `contact.html` with OpenStreetMap tiles, marker, and popup containing business name, address and phone.
- Fixed the malformed Google Maps `<iframe>` on `contact.html` (removed duplicated attributes).
- Added live service search filter on `services.html` using `data-name` attributes and live `input` events.
- Added dynamic testimonial rotator on `index.html` cycling every 5 seconds with `aria-live="polite"`.

### Added — Enquiry Form (enquiry.html)
- Rebuilt form with HTML5 + JavaScript client-side validation (name min-length, email regex, SA phone regex, date not in past, message max-length).
- Added inline error messages per field with red `invalid` state.
- Added cost calculation based on service + vehicle type (bakkie ×1.5) and availability message.
- Added volunteer/sponsor question per brief.
- Added success/error `form-response` panel with smooth scroll-into-view.

### Added — Contact Form (contact.html)
- Added full contact form (name, email, optional phone, message type dropdown, message textarea).
- Implemented JavaScript validation and `mailto:` email compilation to `kingscarwash@example.com`.
- Added success panel with manual fallback link.

### Added — SEO
- Added unique `<title>`, `<meta name="description">` and `<meta name="keywords">` to all 5 pages, optimised for Modjadjiskloof / Limpopo car detailing keywords.
- Added Open Graph tags and `<link rel="canonical">` to `index.html`.
- Renamed all image files to descriptive, hyphenated, lowercase names.
- Rewrote all `alt` attributes to be descriptive (removed generic "image" wording).
- Added `robots.txt` and `sitemap.xml`.

### Fixed (Part 2 Feedback)
- Fixed `services.html` unclosed `<div>` and stray `</section>` nesting.
- Fixed duplicated `<iframe>` attributes on `contact.html`.
- Removed orphan `</body></html>` duplicates at the end of all pages.
- Corrected footer TikTok link on `services.html` (was plain text).
- Added `aria-label` and `title` attributes to all iframes, buttons and lightbox controls.

## [2026-09-17] — Part 2 Submission

### Added
- Created css/style.css and linked it to all 5 HTML pages (index, about, services, contact, enquiry).
- Implemented CSS Custom Properties (variables) for the gold, black, and cream colour scheme.
- Added typography styling using Google Fonts ('Roboto') and responsive font sizes (`clamp()`).
- Implemented CSS Grid for the Services Gallery.
- Added Flexbox layouts for the Header navigation and Hero section.
- Added pseudo-classes (`:hover`, `:focus`, `:active`) to buttons, links, and form inputs.
- Implemented Media Queries for desktop (max-width: 768px) and Mobile (max-width: 480px).


## [Unreleased]

## [2026-11-02] — Part 3 Submission

### Added — JavaScript Functionality
- Created `js/script.js` and linked it to all 5 HTML pages, replacing inline hamburger script.
- Implemented accordion (FAQ) on `services.html` with accessible `aria-expanded` toggles and smooth max-height transitions.
- Implemented gallery lightbox on `services.html` with prev/next navigation, captions, keyboard Escape support and click-outside-to-close.
- Added Leaflet interactive map to `contact.html` with OpenStreetMap tiles, marker, and popup containing business name, address and phone.
- Fixed the malformed Google Maps `<iframe>` on `contact.html` (removed duplicated attributes).
- Added live service search filter on `services.html` using `data-name` attributes and live `input` events.
- Added dynamic testimonial rotator on `index.html` cycling every 5 seconds with `aria-live="polite"`.

### Added — Enquiry Form (enquiry.html)
- Rebuilt form with HTML5 + JavaScript client-side validation (name min-length, email regex, SA phone regex, date not in past, message max-length).
- Added inline error messages per field with red `invalid` state.
- Added cost calculation based on service + vehicle type (bakkie ×1.5) and availability message.
- Added volunteer/sponsor question per brief.
- Added success/error `form-response` panel with smooth scroll-into-view.

### Added — Contact Form (contact.html)
- Added full contact form (name, email, optional phone, message type dropdown, message textarea).
- Implemented JavaScript validation and `mailto:` email compilation to `kingscarwash@example.com`.
- Added success panel with manual fallback link.

### Added — SEO
- Added unique `<title>`, `<meta name="description">` and `<meta name="keywords">` to all 5 pages, optimised for Modjadjiskloof / Limpopo car detailing keywords.
- Added Open Graph tags and `<link rel="canonical">` to `index.html`.
- Renamed all image files to descriptive, hyphenated, lowercase names.
- Rewrote all `alt` attributes to be descriptive (removed generic "image" wording).
- Added `robots.txt` and `sitemap.xml`.

### Fixed (Part 2 Feedback)
- Fixed `services.html` unclosed `<div>` and stray `</section>` nesting.
- Fixed duplicated `<iframe>` attributes on `contact.html`.
- Removed orphan `</body></html>` duplicates at the end of all pages.
- Corrected footer TikTok link on `services.html` (was plain text).
- Added `aria-label` and `title` attributes to all iframes, buttons and lightbox controls.
- Organized the folders in order for easy access and better understanding for the project

## [2026-09-17] — Part 2 Submission

### Added
- Created css/style.css and linked it to all 5 HTML pages (index, about, services, contact, enquiry).
- Implemented CSS Custom Properties (variables) for the gold, black, and cream colour scheme.
- Added typography styling using Google Fonts ('Roboto') and responsive font sizes (`clamp()`).
- Implemented CSS Grid for the Services Gallery.
- Added Flexbox layouts for the Header navigation and Hero section.
- Added pseudo-classes (`:hover`, `:focus`, `:active`) to buttons, links, and form inputs.
- Implemented Media Queries for desktop (max-width: 768px) and Mobile (max-width: 480px).

### Fixed (Part 1 Feedback)
- **Navigation:** Added a hamburger menu button (`<button>`) in the HTML to prepare for mobile responsiveness.
- **Images:** Added `max-width: 100%` and `height: auto` to all images to prevent horizontal scrolling on mobile devices.
- **Layout:** Wrapped main content sections in a `<main>` tag with a `max-width` to center the content on large screens.

