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

### Fixed (Part 1 Feedback)
- **Navigation:** Added a hamburger menu button (`<button>`) in the HTML to prepare for mobile responsiveness.
- **Images:** Added `max-width: 100%` and `height: auto` to all images to prevent horizontal scrolling on mobile devices.
- **Layout:** Wrapped main content sections in a `<main>` tag with a `max-width` to center the content on large screens.

