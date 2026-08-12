# Skill: Narrative & Interaction Patterns Explorer

## Project

Build an editorial exploration website for a class dataset of narrative
and interaction patterns found in digital/data-driven articles.

The site is an exploration/reference tool, not simply an article
catalogue.

Core journey: **Hook → Introduction → Narrative vs Interaction → Explore
Hub → Pattern/Article exploration**

## Global Navigation

Top navigation: - Home - Interactive Patterns - Narrative Patterns -
Sketchnotes

Active section should be visually indicated.

## Main Pattern Exploration Page

### Left categorical sidebar

Use a categorical accordion inspired by the **Data Visualisation Guide**
reference.

Do NOT use a generic grey radio-button filter.

Requirements: - Fixed vertical sidebar, about 20--22% width. -
Full-width horizontal category bars. - Each main category has a distinct
colour. - Category names are uppercase with white text. - Chevron on the
right for expand/collapse. - Expanded categories reveal subcategories. -
Subcategory text uses the parent category colour. - Sidebar remains
visible while content scrolls. - Final taxonomy must come from the
cleaned dataset; do not invent it.

Placeholder structure: - CATEGORY 1 - Subcategory 1 - Subcategory 2 -
Subcategory 3 - CATEGORY 2 - CATEGORY 3 - CATEGORY 4 - CATEGORY 5

### Narrative / Interaction tabs

At the top of the content area: - NARRATIVE PATTERNS - INTERACTION
PATTERNS

Active tab uses a simple underline/visual indicator.

### Search

Place a search field above the cards: **Search patterns...**

Search primarily by pattern name. Include a subtle search icon. Keep it
visually secondary.

## Pattern Cards

Every card contains: 1. Rectangular thumbnail/image placeholder. 2.
Small uppercase category label. 3. Pattern name as the main heading. 4.
Short description explaining the pattern. 5. Subtle divider. 6. "Source
article" label. 7. Article title. 8. **Read article →** link.

Example patterns: - Scroll Trigger - Annotation Layer - Juxtaposition -
Repetition - Personalization - Gradual Reveal

Use neutral image placeholders for now.

### Card interactions

-   Clicking the card will eventually open a Pattern Detail page.
-   "Read article →" is a separate action that will eventually open the
    original article.
-   Do not build the Pattern Detail page yet.
-   Do not invent article URLs.

## Visual Direction

Minimal, editorial, clean, typography-led, spacious and highly
scannable.

Avoid: - Generic SaaS dashboard aesthetics - Excessive rounded cards -
Heavy shadows - Excessive gradients - Unnecessary decoration - Complex
controls

The coloured categorical sidebar should provide the main visual accent.

## Current Wireframe

``` text
┌───────────────────────────────────────────────────────────────┐
│ INxD'25       Home   Interactive Patterns   Narrative   Sketch│
├────────────────┬──────────────────────────────────────────────┤
│  CATEGORIES    │  Narrative Patterns / Interaction Patterns  │
│  [COLOUR BAR]  │  Search patterns...                         │
│  [COLOUR BAR]  │                                              │
│  [COLOUR BAR]  │  ┌─────────────┐  ┌─────────────┐            │
│  [COLOUR BAR]  │  │ THUMBNAIL   │  │ THUMBNAIL   │            │
│                │  │ CATEGORY    │  │ CATEGORY    │            │
│                │  │ Pattern     │  │ Pattern     │            │
│                │  │ Description │  │ Description │            │
│                │  │ Source      │  │ Source      │            │
│                │  │ Read article│  │ Read article│            │
│                │  └─────────────┘  └─────────────┘            │
└────────────────┴──────────────────────────────────────────────┘
```

## Broader Website Narrative

### Hook

**HOW DO STORIES WORK?**

Copy: \> We scroll.\
\> We click.\
\> We compare.\
\> We discover. \> \> But behind every interactive story are choices
about what we see, when we see it, and how we experience it. \> \>
**Explore the patterns behind digital storytelling →**

Keep the Hook minimal and curiosity-driven.

### Introduction

Heading: **STORIES ARE DESIGNED**

Explain that interactive stories are sequences of choices: what appears
first, what is revealed later, what users interact with, and where those
interactions take them. These choices form recurring patterns.

### Narrative vs Interaction

**Narrative --- How does the story unfold?** Narrative patterns describe
the structure and sequence of a story. Mental model: **Narrative = where
the story goes**

**Interaction --- How does the reader participate?** Interactive
patterns describe what the reader can do and how actions affect the
experience. Mental model: **Interaction = how you move through it**

### Explore Hub

The Explore Hub is a junction, not a dashboard.

Three routes: - Patterns --- discover techniques - Articles --- explore
individual stories and the patterns they combine - Connections ---
discover relationships between patterns

Optionally show a small collection snapshot: - X stories - X narrative
patterns - X interaction patterns - X genres

Do not overload this page.

## Future Pages

### Pattern Detail

Eventually: **What is it? → How does it work? → Why is it used? → Where
is it used? → Article examples → Original article**

### Article Detail

Eventually: - Article title - Source/publication - Genre - Thumbnail -
Description - Patterns identified - Original article link

### Connections

Eventually explore pattern-to-pattern and article-to-pattern
relationships.

### Sketchnotes

Separate navigation destination for class-created sketchnotes.

## Data Requirements

The cleaned dataset should support: - Pattern name - Pattern type:
Narrative / Interaction - Category - Subcategory, if applicable - Short
description - Thumbnail/example reference - Article title - Article
URL - Publication/source - Genre - Article thumbnail/reference - Article
↔ Pattern relationships

Preserve meaningful article-pattern relationships because one article
can contain multiple patterns and one pattern can appear in multiple
articles.

## Rules

1.  Website is an exploration tool, not a static catalogue.
2.  Users can browse categories or search directly.
3.  Narrative and Interaction are the two primary pattern types.
4.  Categories communicate the taxonomy.
5.  Original articles remain accessible.
6.  Examples should eventually be visual, preferably thumbnails/GIFs
    where useful.
7.  Do not invent taxonomy, definitions, URLs or data.
8.  Use placeholders until the cleaned dataset is connected.
9.  Build information architecture before decorative styling.

## Current Build Scope

Build only: - Top navigation - Home placeholder - Interactive Patterns -
Narrative Patterns - Sketchnotes - Coloured categorical sidebar -
Expand/collapse categories - Search bar - Pattern card grid - Thumbnail
placeholders - Category - Pattern name - Description - Source article -
Article title - Read article link - Basic card interaction placeholder

Do not build yet: - Pattern Detail page - Article Detail page -
Connections visualization - Complex filtering - Final taxonomy - Final
imagery/GIFs - Final article URLs - Full backend/database
