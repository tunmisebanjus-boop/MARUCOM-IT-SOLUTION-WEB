```css
:root {
    --dark: #07152f;
    --navy: #0b1f46;

    --blue: #2563eb;
    --light-blue: #60a5fa;

    --purple: #7c3aed;
    --light-purple: #a78bfa;

    --green: #10b981;
    --light-green: #34d399;

    --cyan: #06b6d4;
    --light-cyan: #67e8f9;

    --orange: #f59e0b;
    --light-orange: #fbbf24;

    --pink: #ec4899;
    --light-pink: #f472b6;

    --white: #ffffff;
    --background: #f4f7ff;
    --text: #172033;
    --muted: #667085;
    --border: #e2e8f0;

    --shadow: 0 15px 40px rgba(15, 23, 42, .10);
}


/* ================= RESET ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input {
    font-family: inherit;
}

.container {
    width: min(1180px, 92%);
    margin: auto;
}


/* ================= HEADER ================= */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;

    background:
        linear-gradient(
            90deg,
            var(--dark),
            var(--navy),
            #172b63,
            var(--purple)
        );

    border-bottom: 3px solid var(--cyan);

    box-shadow:
        0 5px 25px rgba(7, 21, 47, .25);
}

.nav-container {
    min-height: 76px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: white;

    display: flex;
    flex-direction: column;

    line-height: 1;
}

.logo span {
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: .5px;

    background:
        linear-gradient(
            90deg,
            var(--cyan),
            var(--light-blue),
            var(--light-purple)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.logo small {
    margin-top: 6px;

    color: var(--light-cyan);

    font-size: .65rem;
    font-weight: 800;

    letter-spacing: 2px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav a {
    color: #e8efff;

    font-size: .88rem;
    font-weight: 600;

    transition: .3s;
}

.nav a:hover {
    color: var(--light-cyan);
    transform: translateY(-2px);
}

.nav-whatsapp {
    background:
        linear-gradient(
            135deg,
            var(--green),
            #059669
        );

    color: white !important;

    padding: 10px 18px;

    border-radius: 9px;

    box-shadow:
        0 7px 18px rgba(16, 185, 129, .3);
}

.nav-whatsapp:hover {
    background:
        linear-gradient(
            135deg,
            var(--light-green),
            var(--green)
        );
}

.menu-toggle {
    display: none;

    border: 0;

    background: transparent;

    color: white;

    font-size: 1.8rem;

    cursor: pointer;
}


/* ================= HERO ================= */

.hero {
    min-height: 680px;

    position: relative;

    display: flex;
    align-items: center;

    background:
        url("images/laptop-4.jpg")
        center / cover no-repeat;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            120deg,
            rgba(7, 21, 47, .97),
            rgba(37, 99, 235, .82),
            rgba(124, 58, 237, .78),
            rgba(236, 72, 153, .45)
        );
}

.hero-content {
    position: relative;

    z-index: 1;

    max-width: 780px;

    padding: 90px 0;

    color: white;
}

.hero-label {
    display: inline-block;

    color: var(--light-cyan);

    font-size: .85rem;

    font-weight: 800;

    letter-spacing: 3px;

    margin-bottom: 18px;

    padding: 7px 13px;

    border-radius: 30px;

    background:
        rgba(6, 182, 212, .13);

    border:
        1px solid rgba(103, 232, 249, .35);
}

.hero h1 {
    font-size: clamp(2.8rem, 7vw, 5.5rem);

    line-height: 1.02;

    letter-spacing: -3px;
}

.hero h1 span {
    display: block;

    background:
        linear-gradient(
            90deg,
            var(--light-cyan),
            var(--light-blue),
            var(--light-purple),
            var(--light-pink)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.hero-text {
    max-width: 670px;

    margin: 25px 0 15px;

    color: #edf3ff;

    font-size: 1.08rem;
}

.location {
    color: #d9e5ff;

    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;

    flex-wrap: wrap;

    gap: 13px;
}

.btn {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    padding: 14px 23px;

    border-radius: 10px;

    font-weight: 700;

    transition: .3s;
}

.btn:hover {
    transform: translateY(-4px);

    box-shadow:
        0 12px 25px rgba(0, 0, 0, .18);
}

.btn-primary {
    background:
        linear-gradient(
            135deg,
            var(--blue),
            var(--purple)
        );

    color: white;

    box-shadow:
        0 8px 20px rgba(37, 99, 235, .3);
}

.btn-green {
    background:
        linear-gradient(
            135deg,
            var(--green),
            #059669
        );

    color: white;

    box-shadow:
        0 8px 20px rgba(16, 185, 129, .3);
}


/* ================= GENERAL SECTIONS ================= */

section {
    padding: 95px 0;
}

.section-heading {
    text-align: center;

    margin-bottom: 48px;
}

.section-label {
    display: inline-block;

    color: var(--blue);

    font-size: .78rem;

    font-weight: 800;

    letter-spacing: 2.5px;

    margin-bottom: 8px;
}

.section-heading h2 {
    font-size: clamp(2rem, 4vw, 3rem);

    margin-bottom: 10px;

    background:
        linear-gradient(
            90deg,
            var(--dark),
            var(--blue),
            var(--purple)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.section-heading p:last-child {
    color: var(--muted);
}


/* ================= PRODUCTS ================= */

.products-section {
    position: relative;

    background:
        linear-gradient(
            135deg,
            #ffffff 0%,
            #f0f7ff 45%,
            #f7f0ff 100%
        );
}

.products-section::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 5px;

    background:
        linear-gradient(
            90deg,
            var(--blue),
            var(--purple),
            var(--pink),
            var(--orange),
            var(--green),
            var(--cyan)
        );
}

.product-controls {
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;

    margin-bottom: 35px;
}

.search-box {
    flex: 1;
}

.search-box input {
    width: 100%;

    padding: 15px 18px;

    border: 2px solid #dbe4f5;

    border-radius: 12px;

    outline: none;

    font-size: .95rem;

    background: white;

    transition: .3s;
}

.search-box input:focus {
    border-color: var(--cyan);

    box-shadow:
        0 0 0 4px rgba(6, 182, 212, .12);
}

.filter-buttons {
    display: flex;

    gap: 8px;

    flex-wrap: wrap;
}

.filter-btn {
    border: 2px solid #e1e7f0;

    background: white;

    padding: 11px 17px;

    border-radius: 9px;

    cursor: pointer;

    font-weight: 700;

    color: var(--muted);

    transition: .3s;
}

.filter-btn:hover {
    color: white;

    border-color: var(--purple);

    background: var(--purple);

    transform: translateY(-2px);
}

.filter-btn.active {
    color: white;

    border-color: var(--blue);

    background:
        linear-gradient(
            135deg,
            var(--blue),
            var(--purple)
        );

    box-shadow:
        0 7px 18px rgba(37, 99, 235, .25);
}


/* ================= PRODUCT GRID ================= */

.product-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 23px;
}

.product-card {
    position: relative;

    background: white;

    border: 1px solid #e2e8f0;

    border-radius: 15px;

    overflow: hidden;

    box-shadow:
        0 8px 25px rgba(15, 23, 42, .07);

    transition: .35s;
}

.product-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 5px;

    z-index: 3;

    background:
        linear-gradient(
            90deg,
            var(--blue),
            var(--purple),
            var(--cyan),
            var(--green),
            var(--orange),
            var(--pink)
        );
}

.product-card:hover {
    transform: translateY(-8px);

    box-shadow:
        0 20px 45px rgba(15, 23, 42, .14);
}

.product-image {
    height: 220px;

    position: relative;

    overflow: hidden;

    background: #eef2f7;
}

.product-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;

    transition: .4s;
}

.product-card:hover .product-image img {
    transform: scale(1.07);
}


/* ================= BADGES ================= */

.product-badge {
    position: absolute;

    top: 15px;
    left: 15px;

    padding: 7px 12px;

    color: white;

    border-radius: 7px;

    font-size: .72rem;

    font-weight: 800;

    box-shadow:
        0 6px 15px rgba(0, 0, 0, .18);
}

.product-badge.blue {
    background:
        linear-gradient(
            135deg,
            var(--blue),
            #1d4ed8
        );
}

.product-badge.purple {
    background:
        linear-gradient(
            135deg,
            var(--purple),
            #6d28d9
        );
}

.product-badge.green {
    background:
        linear-gradient(
            135deg,
            var(--green),
            #059669
        );
}

.product-badge.cyan {
    background:
        linear-gradient(
            135deg,
            var(--cyan),
            #0891b2
        );
}

.product-badge.orange {
    background:
        linear-gradient(
            135deg,
            var(--orange),
            #d97706
        );
}

.product-badge.pink {
    background:
        linear-gradient(
            135deg,
            var(--pink),
            #db2777
        );
}


/* ================= PRODUCT INFO ================= */

.product-info {
    padding: 21px;
}

.product-info h3 {
    font-size: 1.05rem;

    margin-bottom: 8px;
}

.product-info p {
    color: var(--muted);

    font-size: .86rem;
}

.no-results {
    display: none;

    text-align: center;

    color: var(--muted);

    padding: 35px;
}


/* ================= BIRTHDAY ================= */

.birthday-section {
    position: relative;

    overflow: hidden;

    color: white;

    background:
        linear-gradient(
            125deg,
            var(--dark),
            #102a62 30%,
            var(--blue) 55%,
            var(--purple) 78%,
            #9d174d
        );
}

.birthday-section::before {
    content: "";

    position: absolute;

    width: 430px;
    height: 430px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(6, 182, 212, .35),
            transparent 70%
        );

    top: -200px;
    right: -100px;
}

.birthday-section::after {
    content: "";

    position: absolute;

    width: 380px;
    height: 380px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(236, 72, 153, .3),
            transparent 70%
        );

    bottom: -190px;
    left: -120px;
}

.birthday-container {
    position: relative;

    z-index: 2;
}

.birthday-content {
    max-width: 1050px;

    margin: auto;

    text-align: center;
}

.light-label {
    color: var(--light-cyan);

    background:
        rgba(6, 182, 212, .12);

    padding: 7px 13px;

    border-radius: 30px;
}

.birthday-content h2 {
    font-size: clamp(2.2rem, 5vw, 4.7rem);

    line-height: 1.05;

    margin: 22px 0;
}

.birthday-content h2 span {
    display: block;

    background:
        linear-gradient(
            90deg,
            var(--light-cyan),
            var(--light-blue),
            var(--light-purple),
            var(--light-pink),
            var(--light-orange)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.birthday-intro {
    max-width: 780px;

    margin: auto;

    color: #e1eaff;

    font-size: 1.05rem;
}

.birthday-for {
    display: inline-block;

    margin-top: 28px;

    padding: 11px 20px;

    border-radius: 30px;

    background:
        linear-gradient(
            90deg,
            rgba(6, 182, 212, .2),
            rgba(124, 58, 237, .2),
            rgba(236, 72, 153, .2)
        );

    border:
        1px solid rgba(255,255,255,.2);

    box-shadow:
        0 8px 25px rgba(0,0,0,.12);
}

.birthday-features {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;

    margin: 50px 0;
}

.birthday-feature {
    padding: 28px;

    border-radius: 16px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.13),
            rgba(255,255,255,.05)
        );

    border:
        1px solid rgba(255,255,255,.16);

    transition: .3s;
}

.birthday-feature:nth-child(1) {
    border-bottom: 4px solid var(--cyan);
}

.birthday-feature:nth-child(2) {
    border-bottom: 4px solid var(--pink);
}

.birthday-feature:nth-child(3) {
    border-bottom: 4px solid var(--orange);
}

.birthday-feature:hover {
    transform: translateY(-7px);

    background:
        rgba(255,255,255,.15);
}

.feature-icon {
    font-size: 2.2rem;

    margin-bottom: 13px;
}

.birthday-feature h3 {
    margin-bottom: 8px;
}

.birthday-feature p {
    color: #cbd8ee;

    font-size: .88rem;
}

.birthday-buttons {
    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 13px;
}

.birthday-btn {
    padding: 15px 22px;

    border-radius: 11px;

    font-weight: 800;

    color: white;

    transition: .3s;

    box-shadow:
        0 8px 20px rgba(0,0,0,.15);
}

.birthday-btn:hover {
    transform: translateY(-4px) scale(1.02);
}

.birthday-btn.voice {
    background:
        linear-gradient(
            135deg,
            var(--cyan),
            #0891b2
        );
}

.birthday-btn.video {
    background:
        linear-gradient(
            135deg,
            var(--pink),
            #db2777
        );
}

.birthday-btn.combo {
    background:
        linear-gradient(
            135deg,
            var(--orange),
            #d97706
        );
}

.tiktok-btn {
    display: inline-block;

    margin-top: 20px;

    padding: 13px 21px;

    border-radius: 11px;

    color: white;

    font-weight: 800;

    background:
        linear-gradient(
            135deg,
            #111827,
            var(--pink)
        );

    border:
        1px solid rgba(255,255,255,.25);

    transition: .3s;
}

.tiktok-btn:hover {
    transform: translateY(-3px);

    box-shadow:
        0 10px 25px rgba(236,72,153,.3);
}


/* ================= SERVICES ================= */

.services-section {
    background:
        linear-gradient(
            135deg,
            #f4f7ff,
            #eef9ff,
            #faf5ff
        );
}

.services-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 22px;
}

.service-card {
    position: relative;

    background: white;

    padding: 30px;

    border-radius: 16px;

    border-top: 5px solid;

    box-shadow:
        0 10px 30px rgba(15,23,42,.07);

    transition: .3s;

    overflow: hidden;
}

.service-card::after {
    content: "";

    position: absolute;

    width: 100px;
    height: 100px;

    border-radius: 50%;

    right: -45px;
    bottom: -45px;

    opacity: .08;
}

.service-card:hover {
    transform: translateY(-7px);

    box-shadow:
        0 20px 40px rgba(15,23,42,.12);
}

.service-blue {
    border-color: var(--blue);
}

.service-blue::after {
    background: var(--blue);
}

.service-purple {
    border-color: var(--purple);
}

.service-purple::after {
    background: var(--purple);
}

.service-green {
    border-color: var(--green);
}

.service-green::after {
    background: var(--green);
}

.service-orange {
    border-color: var(--orange);
}

.service-orange::after {
    background: var(--orange);
}

.service-icon {
    width: 58px;
    height: 58px;

    display: grid;

    place-items: center;

    border-radius: 14px;

    font-size: 1.8rem;

    margin-bottom: 18px;
}

.service-blue .service-icon {
    background: rgba(37,99,235,.12);
}

.service-purple .service-icon {
    background: rgba(124,58,237,.12);
}

.service-green .service-icon {
    background: rgba(16,185,129,.12);
}

.service-orange .service-icon {
    background: rgba(245,158,11,.14);
}

.service-card h3 {
    margin-bottom: 9px;
}

.service-card p {
    color: var(--muted);

    font-size: .9rem;

    margin-bottom: 18px;
}

.service-card a {
    color: var(--blue);

    font-weight: 800;

    font-size: .85rem;
}

.service-purple a {
    color: var(--purple);
}

.service-green a {
    color: var(--green);
}

.service-orange a {
    color: var(--orange);
}


/* ================= HOURS ================= */

.hours-section {
    background:
        linear-gradient(
            135deg,
            #ffffff,
            #f1f7ff
        );
}

.hours-card {
    max-width: 750px;

    margin: auto;

    border: 1px solid #dce5f3;

    border-radius: 16px;

    overflow: hidden;

    box-shadow: var(--shadow);

    background: white;
}

.hours-row {
    display: flex;

    justify-content: space-between;

    padding: 19px 23px;

    border-bottom: 1px solid #e8edf5;

    transition: .2s;
}

.hours-row:hover {
    background:
        linear-gradient(
            90deg,
            #f0f7ff,
            #faf5ff
        );
}

.hours-row:last-child {
    border-bottom: 0;
}

.hours-row span {
    font-weight: 700;
}

.hours-row strong {
    color: var(--green);
}

.hours-row:nth-child(2) strong {
    color: var(--blue);
}

.hours-row:nth-child(3) strong {
    color: var(--purple);
}

.hours-row:nth-child(4) strong {
    color: var(--cyan);
}

.hours-row:nth-child(5) strong {
    color: var(--orange);
}

.hours-row:nth-child(6) strong {
    color: var(--pink);
}

.hours-row.sunday strong {
    color: #ef4444;
}


/* ================= ABOUT ================= */

.about-section {
    background:
        linear-gradient(
            135deg,
            #eef6ff,
            #f7f0ff,
            #fff5fa
        );
}

.about-container {
    display: grid;

    grid-template-columns: 1.4fr .8fr;

    gap: 70px;

    align-items: center;
}

.about-text h2 {
    font-size: clamp(2rem, 4vw, 3.3rem);

    line-height: 1.1;

    margin-bottom: 22px;
}

.about-text h2 span {
    background:
        linear-gradient(
            90deg,
            var(--blue),
            var(--purple),
            var(--pink)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.about-text p {
    color: var(--muted);

    margin-bottom: 17px;
}

.about-box {
    position: relative;

    background:
        linear-gradient(
            145deg,
            var(--dark),
            var(--navy),
            var(--purple)
        );

    color: white;

    padding: 42px;

    border-radius: 20px;

    box-shadow:
        0 20px 45px rgba(37,99,235,.18);

    border-left: 6px solid var(--cyan);

    overflow: hidden;
}

.about-box::before {
    content: "";

    position: absolute;

    width: 200px;
    height: 200px;

    border-radius: 50%;

    background:
        rgba(6,182,212,.2);

    top: -90px;
    right: -70px;
}

.about-box::after {
    content: "";

    position: absolute;

    width: 180px;
    height: 180px;

    border-radius: 50%;

    background:
        rgba(236,72,153,.2);

    right: -70px;
    bottom: -80px;
}

.about-box-icon {
    position: relative;

    z-index: 2;

    font-size: 2.8rem;

    margin-bottom: 15px;
}

.about-box h3 {
    position: relative;

    z-index: 2;

    margin-bottom: 20px;
}

.about-box p {
    position: relative;

    z-index: 2;

    color: #d4deef;

    margin-bottom: 7px;
}


/* ================= CONTACT ================= */

.contact-section {
    background:
        linear-gradient(
            180deg,
            #ffffff,
            #f2f7ff
        );
}

.contact-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 22px;
}

.contact-card {
    position: relative;

    padding: 31px;

    background: white;

    border: 1px solid #e1e8f3;

    border-radius: 16px;

    box-shadow:
        0 10px 30px rgba(15,23,42,.06);

    transition: .3s;

    overflow: hidden;
}

.contact-card:hover {
    transform: translateY(-7px);

    box-shadow:
        0 20px 40px rgba(15,23,42,.11);
}

.contact-card:nth-child(1) {
    border-top: 5px solid var(--blue);
}

.contact-card:nth-child(2) {
    border-top: 5px solid var(--green);
}

.contact-card:nth-child(3) {
    border-top: 5px solid var(--purple);
}

.contact-icon {
    width: 52px;
    height: 52px;

    display: grid;

    place-items: center;

    border-radius: 13px;

    margin-bottom: 17px;

    font-size: 1.4rem;
}

.blue-icon {
    background: rgba(37,99,235,.12);

    color: var(--blue);
}

.green-icon {
    background: rgba(16,185,129,.12);

    color: var(--green);
}

.purple-icon {
    background: rgba(124,58,237,.12);

    color: var(--purple);
}

.contact-card h3 {
    margin-bottom: 8px;
}

.contact-card p {
    color: var(--muted);

    margin-bottom: 15px;
}

.contact-card a {
    color: var(--blue);

    font-weight: 800;

    font-size: .88rem;
}

.contact-card:nth-child(2) a {
    color: var(--green);
}

.contact-card:nth-child(3) a {
    color: var(--purple);
}


/* ================= FOOTER ================= */

.footer {
    position: relative;

    background:
        linear-gradient(
            135deg,
            var(--dark),
            var(--navy),
            #172b63,
            var(--purple)
        );

    color: white;

    border-top: 5px solid;

    border-image:
        linear-gradient(
            90deg,
            var(--cyan),
            var(--blue),
            var(--purple),
            var(--pink),
            var(--orange),
            var(--green)
        ) 1;
}

.footer-container {
    padding: 55px 0;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;

    gap: 35px;
}

.footer-brand h3 {
    font-size: 1.5rem;

    background:
        linear-gradient(
            90deg,
            var(--light-cyan),
            var(--light-blue),
            var(--light-purple)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.footer-brand p {
    color: var(--light-cyan);

    font-size: .75rem;

    letter-spacing: 2px;
}

.footer-links {
    display: flex;

    flex-wrap: wrap;

    gap: 12px 20px;
}

.footer-links a {
    color: #cbd5e1;

    font-size: .85rem;

    transition: .3s;
}

.footer-links a:hover {
    color: var(--pink);

    transform: translateX(3px);
}

.footer-contact p {
    color: #cbd5e1;

    font-size: .85rem;

    margin-bottom: 8px;
}

.footer-bottom {
    border-top:
        1px solid rgba(255,255,255,.12);

    padding: 20px;

    text-align: center;

    color: #94a3b8;

    font-size: .8rem;
}


/* ================= FLOATING WHATSAPP ================= */

.floating-whatsapp {
    position: fixed;

    right: 22px;
    bottom: 22px;

    z-index: 900;

    width: 58px;
    height: 58px;

    display: grid;

    place-items: center;

    background:
        linear-gradient(
            135deg,
            var(--green),
            #059669
        );

    color: white;

    border-radius: 50%;

    font-size: 1.5rem;

    box-shadow:
        0 10px 28px rgba(16,185,129,.4);

    transition: .3s;
}

.floating-whatsapp:hover {
    transform: scale(1.1);

    box-shadow:
        0 14px 32px rgba(16,185,129,.5);
}


/* ================= BACK TO TOP ================= */

.back-to-top {
    position: fixed;

    right: 22px;
    bottom: 92px;

    z-index: 900;

    width: 46px;
    height: 46px;

    border: 0;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--blue)
        );

    color: white;

    font-size: 1.2rem;

    cursor: pointer;

    opacity: 0;

    visibility: hidden;

    transition: .3s;

    box-shadow:
        0 8px 20px rgba(124,58,237,.3);
}

.back-to-top:hover {
    transform: translateY(-4px);
}

.back-to-top.show {
    opacity: 1;

    visibility: visible;
}


/* ================= TABLET ================= */

@media (max-width: 1050px) {

    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .nav {
        gap: 13px;
    }

    .nav a {
        font-size: .82rem;
    }
}


/* ================= MOBILE MENU ================= */

@media (max-width: 850px) {

    .menu-toggle {
        display: block;
    }

    .nav {
        position: absolute;

        top: 76px;
        left: 0;

        width: 100%;

        background:
            linear-gradient(
                180deg,
                var(--dark),
                var(--navy),
                #172b63
            );

        display: none;

        flex-direction: column;

        align-items: stretch;

        padding: 20px;

        border-top:
            1px solid rgba(255,255,255,.1);
    }

    .nav.active {
        display: flex;
    }

    .nav a {
        padding: 10px 0;

        font-size: .9rem;
    }

    .nav-whatsapp {
        text-align: center;
    }

    .product-controls {
        flex-direction: column;

        align-items: stretch;
    }

    .filter-buttons {
        justify-content: center;
    }

    .about-container {
        grid-template-columns: 1fr;

        gap: 35px;
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

    .footer-container {
        grid-template-columns: 1fr;
    }
}


/* ================= MOBILE ================= */

@media (max-width: 650px) {

    section {
        padding: 70px 0;
    }

    .hero {
        min-height: 590px;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .hero-buttons {
        flex-direction: column;

        align-items: stretch;
    }

    .btn {
        width: 100%;
    }

    .product-grid {
        grid-template-columns: repeat(2, 1fr);

        gap: 14px;
    }

    .product-image {
        height: 180px;
    }

    .product-info {
        padding: 15px;
    }

    .product-info h3 {
        font-size: .95rem;
    }

    .product-info p {
        font-size: .78rem;
    }

    .birthday-features {
        grid-template-columns: 1fr;
    }

    .birthday-buttons {
        flex-direction: column;
    }

    .birthday-btn {
        width: 100%;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .hours-row {
        font-size: .88rem;
    }
}


/* ================= SMALL PHONES ================= */

@media (max-width: 430px) {

    .product-grid {
        grid-template-columns: 1fr;
    }

    .product-image {
        height: 220px;
    }

    .filter-buttons {
        display: grid;

        grid-template-columns: repeat(2, 1fr);
    }

    .filter-btn {
        width: 100%;
    }

    .floating-whatsapp {
        right: 16px;
        bottom: 16px;
    }

    .back-to-top {
        right: 16px;
        bottom: 82px;
    }
}
```
