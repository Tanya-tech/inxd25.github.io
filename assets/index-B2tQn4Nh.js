(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const re=`#,Broader Category,Narrowed Pattern,Description\r
1,Scroll-Driven Storytelling,Sticky Scroll,Visual remains fixed while surrounding narrative content scrolls.\r
,,Scroll Sequencing,Scrolling progresses through a series of predefined narrative states.\r
,,Scroll Transformation,"Visual elements change, morph, or transform based on scroll position."\r
,,Scroll Camera Control,"Scrolling controls the movement or viewpoint of a map, 3D scene, or camera."\r
,,Parallax,Different visual layers move at different speeds to create a sense of depth.\r
,,Scroll Animation,"Animation progresses, loops, or responds directly to the user's scroll position."\r
2,Direct Manipulation,Parameter Slider,User adjusts a continuous variable and immediately sees its effect.\r
,,Drag & Relocate,User physically moves an object from one position to another.\r
,,Canvas Manipulation,"User directly creates, edits, draws, erases, or modifies elements on a canvas."\r
,,Node Manipulation,"User directly activates, moves, connects, or changes individual nodes or elements."\r
,,Simulation Control,User directly controls the execution or parameters of a simulated system.\r
,,Game-like Manipulation,User performs physical or game-like actions to influence the system or outcome.\r
3,Progressive Disclosure,Hover Reveal,Additional information appears when the pointer hovers over an element.\r
,,Click Reveal,Additional information is revealed after the user clicks an element.\r
,,Tooltip,Small contextual information appears when interacting with a specific element.\r
,,Hover Highlight,Hovering emphasizes an element and/or its related information.\r
,,Interactive Annotation,Contextual labels or explanations appear through interaction.\r
,,Interactive Map Reveal,Hovering or selecting a geographic element reveals additional information.\r
4,Comparison & View Switching,Toggle,User switches between two predefined states or views.\r
,,Comparison Slider,"User moves a divider to compare two states, images, or datasets."\r
,,Segmented Control,User selects one of several predefined views using a set of options.\r
,,Tab Switching,User switches between different content or data views.\r
,,Side-by-Side Comparison,Multiple states or datasets are displayed simultaneously for comparison.\r
,,Dynamic Comparison,The comparison changes dynamically based on the user's selections.\r
5,Linked Views,Linked Interaction,An interaction with one element causes another element or view to respond.\r
,,Coordinated Views,Multiple visualizations update together to represent the same user action.\r
,,Cross-Filtering,Selecting data in one view filters related data across other views.\r
,,Bidirectional Linking,Changes or selections in either of two connected views affect the other.\r
6,Navigation & Wayfinding,Persistent Navigation,Navigation controls remain available as the user moves through the experience.\r
,,Index / Contents,An overview provides access to different sections of the experience.\r
,,Menu Navigation,A menu allows users to move between different sections or destinations.\r
,,Tab Navigation,Tabs provide direct access to different sections or views.\r
,,Step Navigation,User progresses through content one step at a time.\r
,,Swipe Navigation,"Swiping moves between screens, panels, or narrative states."\r
,,Arrow / Keyboard Navigation,Arrows or keyboard controls allow sequential movement through content.\r
,,Hyperlink Exploration,Users follow links to explore related content at their own pace.\r
7,"Input, Search & Filtering",Search,User enters a query to find specific information.\r
,,Text Input,User enters text that is used to modify or personalize the experience.\r
,,Dropdown Selection,User selects one option from a predefined list.\r
,,Sorting,User changes the order in which information is displayed.\r
,,Filtering,User removes unwanted information to focus on a specific subset.\r
,,Personalization,User-provided information changes the content or experience specifically for them.\r
,,Layer Filtering,User adds or removes layers to control which information is visible.\r
8,Animated State Transitions,Morphing,One visual form smoothly transforms into another while maintaining visual continuity.\r
,,Object-Constancy Transition,The same object visually persists while its representation or position changes.\r
,,Animated Route,Animation traces movement along a geographic or spatial route.\r
,,Animated Flow,"Animation communicates movement, direction, or flow through a system."\r
,,Explode / Inspect,A complex object separates or expands to reveal its internal components.\r
,,Aggregate → Individual,A grouped representation transitions into its individual elements.\r
,,State Transition,Animation communicates a change from one state or condition to another.\r
9,Prediction & Feedback,Prediction Prompt,User is asked to predict an outcome before seeing the actual data or result.\r
,,User Guess → Data Reveal,User makes a guess and the actual value is subsequently revealed for comparison.\r
,,Prediction Drawing,User visually draws or constructs their prediction before seeing the actual result.\r
,,Personal Feedback,"System provides feedback based on the user's own input, behaviour, or prediction."\r
,,Comparative Feedback,"User's response is compared against another benchmark, dataset, or population."\r
,,Reward / Reinforcement,"An interaction produces a reward, acknowledgement, or reinforcing response."\r
,,Replay,"User can revisit or replay a previous action, process, or sequence."\r
10,Media & Content,Audio Playback,User controls or triggers audio as part of the experience.\r
,,Video Playback,User controls or triggers video content.\r
,,Static Overview,A non-interactive visual provides an overall summary or orientation.\r
,,Banner / Illustration,Static visual content supports the narrative or communicates contextual information.\r
11,Remove from Interaction Taxonomy,Circles vs. Hexagons,A visual encoding decision involving shape; it does not describe a user interaction.`,ie=`Refined Category,Narrowed Pattern,Description\r
Opening / Anchoring Devices,Familiarization,Begins with something recognizable to help the audience enter an unfamiliar topic. It establishes familiarity before introducing complexity.\r
,Question First,Opens with a clear question that frames what the audience is about to investigate. The narrative progressively works toward answering it.\r
,Historical Setup,Establishes relevant history or past events before introducing the present-day issue. It uses the past to explain how the current situation emerged.\r
,Set the context,Provides essential background before presenting the main finding or argument. It helps the audience understand why the information matters.\r
,Start with a familiar claim,"Opens with a commonly held belief or assumption. The data then confirms, challenges, or complicates that belief."\r
,Try it yourself,"Invites the audience to perform an action, make a choice, or explore a scenario themselves. The interaction becomes part of the narrative."\r
Audience Positioning,Contextual,"Builds understanding by placing data within its broader social, geographic, historical, or cultural context."\r
,Parametric,Lets the audience change variables or parameters to see how the outcome changes. The interaction exposes relationships within the data.\r
,Reader-as-subject,"Places the audience themselves within the dataset or scenario. Their characteristics, choices, or location become the basis of the exploration."\r
,Try it yourself,"Invites the audience to perform an action, make a choice, or explore a scenario themselves. The interaction becomes part of the narrative."\r
,Personal–Global–Personal Narrative,"Starts with an individual experience, expands to a broader systemic or global pattern, then returns to the individual."\r
Structure,Multidirectional,Allows audiences to explore different paths through the information rather than following one fixed narrative sequence.\r
,Scale shifting,"Moves between levels of scale, such as individual, city, state, and country, to reveal patterns across levels."\r
,Temporal Structuring,"Organizes information around time, using chronology or temporal progression as the primary narrative structure."\r
,Two-point comparison,"Directly compares two entities, places, groups, or periods to reveal meaningful similarities or differences."\r
,Multi-stage timeline,"Breaks a development into multiple stages, showing how a phenomenon changes or escalates over time."\r
,Geographic Chronology,Combines movement through geography with progression through time. The narrative unfolds across places in a temporal sequence.\r
,Sequential Journey,"Guides the audience through a series of connected steps, locations, events, or stages. Each step builds on the previous one."\r
,Concrete to Abstract,"Begins with a tangible example or specific case before moving toward broader concepts, patterns, or conclusions."\r
,Gradual Reveal,Withholds information initially and progressively reveals details or findings. Understanding develops incrementally.\r
,Modular,Divides the story into distinct sections that explore different aspects of the subject. These modules collectively build the larger story.\r
,Macro-to-Micro,"Begins with a broad, large-scale pattern before narrowing down to specific places, people, cases, or examples."\r
Narrative arc,Guided,Leads the audience through a predetermined sequence of information and interactions. The author controls the order of discovery.\r
,Circular,"Ends by returning to the opening question, idea, image, or situation. The ending reframes or resolves the beginning."\r
,Kebab,"Starts with a specific human anecdote, zooms out to a broad analytical ""nut graph,"" dives into juicy details in the middle, and ends by looping back to the initial person or story"\r
,Anticipatory framing,"Signals what the audience should expect, notice, or discover before presenting the information. It creates anticipation for what follows."\r
,Standard journalistic,"Follows a conventional editorial structure of introduction, context, evidence, analysis, and conclusion."\r
,Martini,"Begins with a broad overview and progressively narrows toward a specific finding, case, or detail."\r
,Reverse Martini,Begins with a specific case or detail and progressively expands toward the broader pattern or issue.\r
,The Problem-First,"Opens by presenting a problem or tension before explaining its causes, context, or possible implications."\r
Voice & Character,Expert driven,"Uses an expert as the primary narrative anchor through whom evidence, interpretation, and insights are introduced."\r
,Dual-character,"Uses two people or perspectives as parallel narrative anchors, allowing the story to develop through their contrast or relationship."\r
,Anecdotal,Uses a specific personal story or incident as the entry point for exploring a larger data-driven issue.\r
,Author,"Makes the creator or researcher a visible narrative presence who guides, interprets, or participates in the story."\r
,Conversational,"Uses an informal, direct, dialogue-like voice that addresses the audience as a participant rather than a passive reader."`;function X(c){const a=[];let i=[],o=!1,e="";for(let t=0;t<c.length;t++){const r=c[t],l=c[t+1];r==='"'?o&&l==='"'?(e+='"',t++):o=!o:r===","&&!o?(i.push(e.trim()),e=""):(r==="\r"||r===`
`)&&!o?(r==="\r"&&l===`
`&&t++,i.push(e.trim()),i.some(B=>B.length>0)&&a.push(i),i=[],e=""):e+=r}return(e.length>0||i.length>0)&&(i.push(e.trim()),i.some(t=>t.length>0)&&a.push(i)),a}function oe(){const c=X(re),a=[];let i="";for(let o=1;o<c.length;o++){const e=c[o];if(!e||e.length<4)continue;const t=e[1],r=e[2],l=e[3];t&&(i=t),r&&l&&a.push({id:`interactive-${o}`,category:i,pattern:r,description:l,type:"INTERACTIVE PATTERN"})}return a}function ae(){const c=X(ie),a=[];let i="";for(let o=1;o<c.length;o++){const e=c[o];if(!e||e.length<3)continue;const t=e[0],r=e[1],l=e[2];t&&(i=t),r&&l&&a.push({id:`narrative-${o}`,category:i,pattern:r,description:l,type:"NARRATIVE PATTERN"})}return a}document.addEventListener("DOMContentLoaded",()=>{const c=oe(),a=ae(),i=[...new Set(c.map(n=>n.category))],o=[...new Set(a.map(n=>n.category))],e=document.getElementById("view-hero"),t=document.getElementById("view-patterns"),r=document.getElementById("app-navbar"),l=document.getElementById("nav-logo"),B=document.getElementById("nav-home"),L=document.getElementById("nav-interactive"),A=document.getElementById("nav-narrative"),k=document.getElementById("nav-sketchnotes"),v=document.getElementById("patterns-page-title"),y=document.getElementById("patterns-page-desc"),w=document.getElementById("search-input"),D=document.getElementById("hamburger-btn"),M=document.getElementById("tag-all"),I=document.getElementById("active-tag-pill"),W=document.getElementById("active-tag-name"),N=document.getElementById("tag-close-btn"),T=document.getElementById("sidebar-drawer"),f=document.getElementById("drawer-backdrop"),R=document.getElementById("drawer-close-btn"),b=document.getElementById("drawer-title"),H=document.getElementById("drawer-category-list"),O=document.getElementById("patterns-grid"),q=document.getElementById("hero-about-btn"),m=document.getElementById("about-modal"),F=document.getElementById("modal-close-btn");let C="interactive",h="All";const K=[360,190,280,280,360,190,190,280,360,280,190,360,360,280,190,190,360,280,280,190,360,360,190,280,190,360,280,190,360,280];function Y(n,s){let d=n*17;for(let g=0;g<s.length;g++)d+=s.charCodeAt(g);const u=Math.abs(d)%K.length;return K[u]}function Z(){m&&(m.classList.add("open"),document.body.style.overflow="hidden")}function V(){m&&(m.classList.remove("open"),document.body.style.overflow="")}q==null||q.addEventListener("click",n=>{n.preventDefault(),Z()}),F==null||F.addEventListener("click",V),m==null||m.addEventListener("click",n=>{n.target===m&&V()});function _(){T&&f&&(T.classList.add("open"),f.classList.add("active"))}function $(){T&&f&&(T.classList.remove("open"),f.classList.remove("active"))}D==null||D.addEventListener("click",_),R==null||R.addEventListener("click",$),f==null||f.addEventListener("click",$),document.addEventListener("keydown",n=>{n.key==="Escape"&&(V(),$())});function ee(){if(!H)return;const n=C==="interactive"?i:o;b&&(b.textContent=h==="All"?n[0]||"Categories":h);let s="";n.forEach(d=>{const u=h===d;s+=`
        <li class="drawer-category-item">
          <label class="drawer-radio-label">
            <input type="radio" name="drawer-category" value="${E(d)}" ${u?"checked":""}>
            <span class="drawer-radio-custom"></span>
            <span class="drawer-text ${u?"active":""}">${E(d)}</span>
          </label>
        </li>
      `}),H.innerHTML=s,H.querySelectorAll('input[name="drawer-category"]').forEach(d=>{d.addEventListener("change",u=>{P(u.target.value)})})}function P(n){h=n,h==="All"?(I&&(I.style.display="none"),b&&C==="interactive"&&(b.textContent=i[0]||"Categories")):(I&&(I.style.display="inline-flex"),W&&(W.textContent=h),b&&(b.textContent=h)),ee(),j()}N==null||N.addEventListener("click",()=>P("All")),M==null||M.addEventListener("click",()=>P("All"));function j(){if(!O)return;const n=C==="interactive"?c:a,s=((w==null?void 0:w.value)||"").toLowerCase().trim(),d=n.filter(p=>{const z=h==="All"||p.category===h,U=!s||p.pattern.toLowerCase().includes(s)||p.description.toLowerCase().includes(s)||p.category.toLowerCase().includes(s);return z&&U});if(d.length===0){O.innerHTML=`
        <div class="empty-state">
          <p>No pattern cards found matching your search and filter criteria.</p>
        </div>
      `;return}const u=window.innerWidth;let g=3;u<640?g=1:u<1100&&(g=2);const x=Array.from({length:g},()=>({height:0,cardsHtml:[]}));d.forEach((p,z)=>{const U=Y(z,p.pattern),te=U+120;let G=0,J=x[0].height;for(let S=1;S<g;S++)x[S].height<J&&(J=x[S].height,G=S);const ne=`
        <article class="pattern-card-lf">
          <div class="card-img-placeholder" style="height: ${U}px;">
            <span class="card-badge-tag">${E(p.category)}</span>
          </div>
          <h3 class="card-lf-title">${E(p.pattern)}</h3>
          <p class="card-lf-desc">${E(p.description)}</p>
          <a href="#" class="card-lf-link" onclick="event.preventDefault();">Read more &rarr;</a>
        </article>
      `;x[G].cardsHtml.push(ne),x[G].height+=te+36}),O.innerHTML=`
      <div class="patterns-grid-masonry">
        ${x.map(p=>`
          <div class="masonry-column">
            ${p.cardsHtml.join("")}
          </div>
        `).join("")}
      </div>
    `}function E(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}w==null||w.addEventListener("input",j),window.addEventListener("resize",j);function Q(){const n=window.location.hash||"#home";[B,L,A,k].forEach(s=>s==null?void 0:s.classList.remove("active")),n==="#home"||n===""||n==="#"?(e==null||e.classList.add("active"),t==null||t.classList.remove("active"),r&&(r.style.display="none")):(e==null||e.classList.remove("active"),t==null||t.classList.add("active"),r&&(r.style.display="flex"),n==="#narrative"?(C="narrative",A==null||A.classList.add("active"),v&&(v.textContent="Narrative Patterns"),y&&(y.textContent="Patterns shaping compelling narrative experiences.")):n==="#sketchnotes"?(C="interactive",k==null||k.classList.add("active"),v&&(v.textContent="Sketchnotes"),y&&(y.textContent="Visual note-taking for creative storytelling.")):(C="interactive",L==null||L.classList.add("active"),v&&(v.textContent="Interactive Patterns"),y&&(y.textContent="Exploring dynamic and engaging interactive patterns.")),P("All"))}l==null||l.addEventListener("click",()=>{window.location.hash="#home"}),window.addEventListener("hashchange",Q),Q()});
