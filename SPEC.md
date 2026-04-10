# Lauren Tate Baeza — Portfolio Website Specification

> This is the single source of truth for building the site. Follow it exactly.
> The site must be fully responsive and look great on desktop, tablet, and mobile.

---

## Global

### Technology

- Vanilla HTML, CSS, JS (no frameworks)
- Multi-page site (separate HTML files per page)

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FFC05A` | Page background (golden yellow) |
| `--color-text` | `#336633` | All text — headings, nav links, body, footer (forest green) |

Only two colors are used across the entire site. There are no borders, shadows, or alternate surface colors.

### Typography

**Font family:** PP Editorial Sans (files in `/fonts/`)

| Weight file | CSS `font-weight` | Usage |
|---|---|---|
| `PPEditorialSans-Ultralight.otf` | 200 | Nav links, footer copyright text |
| `PPEditorialSans-Medium.otf` | 500 | Footer artist name ("Lauren Tate Baeza.") |
| `PPEditorialSans-Ultrabold.otf` | 800 | Hero heading (artist name + project carousel) |

**Font sizes (desktop):**

| Element | Size | Weight |
|---|---|---|
| Nav links ("Home", "About", "Contact") | ~16px (1rem) | 200 (Ultralight) |
| Hero artist name ("Lauren Tate Baeza") | ~42px (2.625rem) | 800 (Ultrabold) |
| Hero "X" separator | ~42px (2.625rem) | 800 (Ultrabold) |
| Hero carousel project name | ~42px (2.625rem) | 800 (Ultrabold), italic |
| Footer artist name | ~14px (0.875rem) | 500 (Medium) |
| Footer copyright | ~14px (0.875rem) | 200 (Ultralight) |

### Spacing & Layout

- Max content width: ~1200px, centered
- Page padding (horizontal): ~40px desktop, ~20px mobile
- Nav bar height: ~60px
- Footer padding: ~24px vertical

---

## Page Structure (all pages)

### Navigation Bar

- Fixed/sticky at top of viewport
- Background: same `#FFC05A` (no blur, no border, blends seamlessly with page)
- Left side: "Home" link (navigates to `index.html`)
- Right side: "About" and "Contact" links, spaced ~32px apart
- All nav text: PP Editorial Sans Ultralight (weight 200), color `#336633`
- No hamburger icon on mobile — links should remain visible (stack or reduce spacing)
- **Active page indicator:** the nav link for the current page has a text underline (`text-decoration: underline`) to show which page the user is on
- Non-active links: no underline; on hover, subtle opacity change or underline

### Footer

- Full-width, same `#FFC05A` background
- Centered text: **"Lauren Tate Baeza."** (weight 500) followed by *"Copyright 2026"* (weight 200)
- All text color: `#336633`
- Present on every page

---

## Page 1: Home (`index.html`)

### Layout

- Full viewport height (`100vh`), including nav and footer
- Content vertically and horizontally centered in the main area (between nav and footer)
- Clean, minimal — no images, no cards, just the centered text block

### Hero Content (centered)

Displays as a single horizontal line (desktop):

```
Lauren Tate Baeza    X    [Project Name]
```

- **"Lauren Tate Baeza"** — PP Editorial Sans Ultrabold (800), `#336633`, ~42px
- **"X"** — PP Editorial Sans Ultrabold (800), `#336633`, ~42px, spaced with generous horizontal margin (~48px each side)
- **Project name** — PP Editorial Sans Ultrabold (800), normal (not italic), `#336633`, ~42px

### Project Carousel

The project name on the right side of the "X" cycles through these values in order:

1. Nigeria
2. South Africa
3. MLK
4. Works On Paper
5. Women

**Behavior:**
- Each project name displays for **3 seconds** before transitioning to the next
- Transition animation: crossfade (fade out current, fade in next) over ~0.5s
- Loop is infinite — after "Women" it returns to "Nigeria"
- **On hover:** carousel pauses (resumes on mouse leave)
- Each project name is a clickable link that navigates to the projects page with the correct hash (e.g., `projects.html#nigeria`, `projects.html#south-africa`, `projects.html#mlk`, `projects.html#works-on-paper`, `projects.html#women`)
- Cursor should change to pointer on hover over the project name

### Responsive (mobile)

- The hero text stacks vertically on small screens:
  ```
  Lauren Tate Baeza
  X
  [Project Name]
  ```
- Font size scales down (~28px / 1.75rem on mobile)
- The carousel still functions identically
- Footer remains at bottom of viewport

---

## Page 2: About (`about.html`)

### Layout

- Not full-viewport like the home page — content flows naturally and page scrolls as needed
- Same nav and footer as all pages; "About" link in nav is underlined (active state)

### Section 1: "About" Heading

- **"About"** displayed top-left below the nav bar
- PP Editorial Sans Ultrabold (800), `#336633`, large size (~48px / 3rem)
- Left-aligned, with standard page horizontal padding
- Margin below: ~32px

### Section 2: Bio Paragraph (Typewriter Animation)

- Centered on the page, max-width ~800px
- Text size: ~16px (1rem), weight 500 (Medium), color `#336633`
- Line height: ~1.7

**Full text:**

> I am an arts leader and political historian who— **in partnership with cultural and educational institutions, arts nonprofits, and federal, state, and municipal governments** —has organized over 20 exhibitions and special projects, and presented over 50 lectures and public talks related to Black and African art, culture, and society in the 20th century.

**Styling within the paragraph:**
- Most of the text is weight 500 (Medium)
- The phrase **"in partnership with cultural and educational institutions, arts nonprofits, and federal, state, and municipal governments"** is weight 800 (Ultrabold) to stand out as a highlight

**Typewriter animation:**
- On page load, the text appears character by character (typewriter effect)
- Speed: fast enough to feel dynamic but still readable (~30-50ms per character)
- A blinking cursor (same green `#336633`) follows the text as it types, disappears when complete
- The bold portion retains its bold styling as it types in — the weight changes inline as those characters appear

### Section 3: "Listed here, are a few"

- Appears below the bio paragraph after the typewriter finishes (fade in)
- Centered, same text style as bio (~16px, weight 500)
- **"here"** is a styled link: underlined, possibly slightly different shade or same green — clicking it smooth-scrolls down to the partner list below
- Text: `Listed here, are a few`

### Section 4: Partner / Institution List

- Displayed in a **3-column grid** layout (desktop)
- Each item is plain text, weight 200 (Ultralight), color `#336633`, ~14px (0.875rem)
- No bullets, no borders — clean flat list

**Staggered entrance animation:**
- Each item animates in **one by one**, sequentially
- Animation: fade in + slight upward slide (translateY ~10px to 0)
- Stagger delay: ~50-80ms between each item
- Animation triggers after the typewriter effect completes (or on scroll into view)

**Full list (left to right, top to bottom across 3 columns):**

| Column 1 | Column 2 | Column 3 |
|---|---|---|
| Art for Amnesty | Smithsonian Institution | Tanzania Ministry of Arts and Culture |
| Institute for Food and Development Policy | High Museum of Art | National Museum and House of Culture |
| United States Department of Agriculture | National Center for Civil and Human Rights | Nafasi Art Space, Dar es Salaam |
| United States Consulate in Lagos | CNN/Turner Broadcasting | Modzi Arts, Lusaka |
| Nigerian Consulate in Atlanta | PBS | Kin ArtStudio, Kinshasa |
| French Consulate in Atlanta | VR for Good | Congo Biennale |
| Swiss Consulate in Atlanta | Ford Foundation | Cape Town Art Fair |
| City of Atlanta Office of Cultural Affairs | Columbia University | Brundyn Arts & Culture |
| Georgia State Capitol | University of California, Los Angeles | kd |
| Atlanta Beltline | Morehouse College Martin Luther King Jr. Collection | Mariane Ibrahim Gallery |
| Spelman College | Goat Farm Arts Center | O'DA Gallery |
| California State University, Northridge | Serenbe | Hammonds House Museum |
| Georgia College & State University | | |

### Responsive (mobile)

- "About" heading stays left-aligned, scales down (~36px)
- Bio paragraph full-width with side padding
- Partner list collapses to **1 column** on mobile, **2 columns** on tablet
- Typewriter and stagger animations still play
- Stagger animation speed may be slightly faster on mobile to avoid long waits

---

## Page 3: Contact (`contact.html`)

### Layout

- Same nav and footer as all pages; "Contact" link in nav is underlined (active state)
- Content is left-aligned within a centered container (max-width ~700px), shifted slightly left of page center
- Generous top padding (~80px below nav)

### Heading

- **"For inquires, please use the contact form below."**
- PP Editorial Sans Ultrabold (800), `#336633`, ~42px (2.625rem)
- Line height: ~1.25
- Wraps to two lines naturally on desktop
- Margin below: ~40px

### Contact Form

All labels and field text: PP Editorial Sans, `#336633`

**Fields (top to bottom):**

1. **Name** (section label)
   - "Name" — weight 500, ~16px, acts as a group heading
   - Two side-by-side fields below:
     - **First Name** *(required)* — label weight 500, "(required)" weight 200 italic, ~14px
     - **Last Name** *(required)* — same styling
   - Fields are equal width, ~16px gap between them

2. **Email** *(required)*
   - Full-width field
   - Label: weight 500, "(required)" weight 200 italic, ~14px

3. **Subject** *(required)*
   - Full-width field
   - Label: same styling as Email

4. **Message** *(required)*
   - Full-width textarea, taller (~150px height), resizable vertically
   - Label: same styling as Email

**Field styling:**
- Background: `#FDF3DC` (very light warm cream/off-white)
- No visible border (or very subtle matching border)
- No border-radius (square corners)
- Padding inside fields: ~12px
- Vertical spacing between field groups: ~24px
- On focus: subtle outline or bottom-border highlight in `#336633`

**Submit button:**
- Text: "Submit"
- PP Editorial Sans weight 200 (Ultralight), `#336633`, ~16px
- No background fill — transparent/text-only button
- Underline below the text in `#336633` (~2px solid, slightly wider than the text)
- On hover: opacity change or underline thickens
- Aligned left, below the message field with ~24px top margin

### Form Behavior

- All fields marked *(required)* must be validated before submission
- Since this is a static site, form submission can use:
  - A `mailto:` action, or
  - A third-party service (Formspree, Netlify Forms, etc.) — to be decided
  - For now, wire up client-side validation and a placeholder `action`

### Responsive (mobile)

- First Name and Last Name fields stack vertically (full-width each)
- All other fields remain full-width
- Heading font scales down (~28px)
- Form container takes full width with side padding

---

## Page 4: Projects (`projects.html`) — Single Page, All Projects

> The original Squarespace site had each project as its own page. This build combines them into a **single page** that swaps content dynamically without a full page reload.

### Architecture

- One HTML file: `projects.html`
- All 5 project datasets are stored in the page (HTML sections or JS data)
- Navigating between projects swaps the visible content with a smooth transition
- URL should update with a hash or query param (e.g., `projects.html#nigeria`) so direct links and browser back/forward work
- The home page carousel links point here (e.g., `projects.html#nigeria`, `projects.html#south-africa`, etc.)

### Layout (shared across all projects)

#### Heading

- **"Lauren Tate Baeza x [Project Name]"**
- PP Editorial Sans Ultralight (200), `#336633`, large size (~48px / 3rem)
- "Lauren Tate Baeza x" stays constant; the project name swaps
- Left-aligned, generous top padding (~80px below nav)
- The "x" is lowercase, weight 200, same as the rest of the heading

#### "projects" Subheading

- Text: **"projects"** (lowercase)
- PP Editorial Sans weight 500 (Medium), `#336633`, ~18px (1.125rem)
- Has a **text-decoration underline**
- Left-aligned, with top margin (~60px below heading)

**Underline draw-in animation:** When a new project loads (initial page load or navigation between projects), the underline on "projects" animates from left to right — drawing itself in over ~0.4s. This gives a satisfying visual cue that new content has loaded.

#### Project List

- Displayed as a **vertical list** (single column), no bullets
- Each item is a line of text, left-aligned
- PP Editorial Sans weight 200 (Ultralight), `#336633`, ~14px (0.875rem)
- Line spacing: ~28px between items (generous vertical rhythm)
- Each item is a clickable link (for future sub-project detail pages or external links — for now, they can be non-navigating styled links or plain text)
- On hover: subtle underline or opacity change

**Entrance animation:** When a project loads, the list items fade in one by one with a stagger (~80ms delay between each), similar to the About page partner list (fade + slight upward slide).

#### "To [Next Project]" Navigation Link

- Positioned at the **bottom-left** of the content area, above the footer
- Text: **"To [Next Project Name]"** (e.g., "To South Africa")
- PP Editorial Sans weight 500 (Medium), `#336633`, ~14px
- Has a **text-decoration underline**
- Clicking it swaps the page content to the next project (no page reload)

**Underline draw-in animation:** Same as "projects" — the underline animates from left to right (~0.4s) when the project loads.

**Navigation order is circular:**
1. Nigeria → "To South Africa"
2. South Africa → "To MLK"
3. MLK → "To Works On Paper"
4. Works On Paper → "To Women"
5. Women → "To Nigeria"

#### Transition Between Projects

When navigating between projects (via the bottom link or URL hash change):
1. Current content fades out (~0.3s)
2. New heading, project list, and bottom link fade in (~0.3s)
3. "projects" underline and "To ..." underline draw-in animations play
4. List items stagger in one by one
5. Page scrolls to top smoothly

---

### Project Data

#### Nigeria (`#nigeria`)

**Heading:** Lauren Tate Baeza x Nigeria

**Project list:**
1. LagosAtlanta Artist Residency
2. US Consulate Celebrates 50 Years as Sister Cities
3. Nigerian Galleries at the High Museum of Art
4. Bruce Onobrakpeya: The Mask and the Cross
5. Bruce Onobrakpeya and dele jegede in Conversation
6. NMAFA at 60: A Weekend with Bruce Onobrakpeya
7. Nigeria's Latest Food Sovereignty Struggle: The World is Watching publication
8. Austere Imaginary

**Next link:** To South Africa → `#south-africa`

---

#### South Africa (`#south-africa`)

**Heading:** Lauren Tate Baeza x South Africa

**Project list:**
1. Ezrom Legae: Beasts
2. Three Decades of Democracy: South African Works on Paper
3. Printmaking in South African Art with Mary Sibande and Judy Hecker
4. 21st Century Museums: Zeitz Museum of Contemporary Art and the High Museum of Art with Koyo Kouoh
5. On Memory and Place with Yasser Booley, Thania Peterson and Haroon Gunn-Saile
6. Salon #68: The History of Atlanta and South Africa Relations

**Next link:** To MLK → `#mlk`

---

#### MLK (`#mlk`)

**Heading:** Lauren Tate Baeza x MLK

**Project list:**
1. The Other Dream: King and the Poor People's Campaign
2. Headline, Byline, Exclusive: King's Legacy through Media
3. In Remembrance of King: Civil Rights Tapestries by Peter Sis
4. 70th Anniversary of the Universal Declaration of Human Rights
5. We Share the Dream: King's Beloved Community
6. The Meaning of Hope: Best of the Martin Luther King, Jr. Collection
7. Fragments

**Next link:** To Works On Paper → `#works-on-paper`

---

#### Works On Paper (`#works-on-paper`)

**Heading:** Lauren Tate Baeza x Works On Paper

**Project list:**
1. Austere Imaginary
2. Ezrom Legae: Beasts
3. Bruce Onobrakpeya: The Mask and the Cross
4. Three Decades of Democracy: South African Works on Paper
5. Printmaking in South African Art with Mary Sibande and Judy Hecker

**Next link:** To Women → `#women`

---

#### Women (`#women`)

**Heading:** Lauren Tate Baeza x Women

**Project list:**
1. Austere Imaginary
2. re/mix at the Congo Biennale
3. the end is near, the end is the beginning
4. Her Truth, Her Power
5. Women and Ceramic Arts in Africa
6. Clay as Living Archive with Jareh Das, Adebunmi Gbadebo and Anina Major
7. Beyond Mythologies: Black Women Heroes of the Atlantic with Grace Kisa and Thabisile Griffin
8. I See (Wo)men As Trees artist talk with Taiye Idahor
9. African Modernism: Women in Focus
10. Women and Water Scarcity in East Africa
11. Black Women in STEM

**Next link:** To Nigeria → `#nigeria`

---

### Responsive (mobile)

- Heading scales down (~28px / 1.75rem)
- Project list items remain single column (already is)
- "To ..." link stays bottom-left
- All animations still play

---

## All Pages Specified

- [x] Home (`index.html`)
- [x] About (`about.html`)
- [x] Contact (`contact.html`)
- [x] Projects (`projects.html`) — Nigeria, South Africa, MLK, Works On Paper, Women
