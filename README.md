# CodeCraft — Software Design & Development Website

A modern, responsive, single-page static website built with pure HTML, CSS, and JavaScript (no frameworks, no build step).

## ✨ Features

- **Responsive Design** — works on desktop, tablet, and mobile (breakpoints: 1100px, 991px, 900px, 768px, 720px, 600px, 480px, 400px)
- **Sticky Header** — transparent on top, blurred dark background on scroll
- **Mobile Menu** — hamburger toggle with animated icon and `aria-expanded` support
- **Scroll Reveal Animations** — sections fade in using `IntersectionObserver`
- **Active Nav Highlighting** — current section auto-detected while scrolling
- **Testimonial Slider** — auto-slide every 6s, prev/next buttons, dot navigation, arrow-key support, pauses on hover
- **Contact Form** — name, email, phone, subject, service select, and message fields
- **Smooth Anchor Scrolling** — fixed-header offset handled in JS + CSS `scroll-margin-top`
- **Auto Year** — footer copyright year updates automatically
- **Dark Mode Ready** — CSS variables prepared for `[data-theme="dark"]`

## 📁 Project Structure

```
codecraft-project/
├── index.html          # Main page (header, hero, about, services,
│                       #   process, projects, testimonials, contact, footer)
├── README.md           # This file
└── assets/
    ├── css/
    │   └── style.css   # All styling + responsive rules
    └── js/
        └── script.js   # Menu, slider, scroll reveal, active nav
```

## 🚀 How to Run

No installation or build needed. Just open `index.html` in any modern browser.

Optional — run a local dev server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit: http://localhost:8000

## 🛠️ Customization

| What to change       | Where                                                        |
|----------------------|--------------------------------------------------------------|
| Colors / theme       | `:root` variables at the top of `assets/css/style.css`       |
| Hero background      | `.hero` background URL in `assets/css/style.css`             |
| Testimonials         | `testimonials` array in `assets/js/script.js`                |
| Services / projects  | Edit the cards directly in `index.html`                      |
| Contact details      | Email / phone / social links in the Contact + Footer sections|
| Auto-slide speed     | `setInterval(..., 6000)` in `assets/js/script.js`            |

## 📄 Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- Icons: [Font Awesome 6.5.2](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/)
- Images: Unsplash + thum.io live previews

Built with ♥ by Dinesh Saini — Jaipur, Rajasthan, India
