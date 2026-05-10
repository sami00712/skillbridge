export interface Topic {
  id: string;
  title: string;
  explanation: string;
  example?: string;
  code?: string;
  language?: string;
  tasks: string[];
  homework: string[];
  beginnerFriendly: boolean;
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export const projectsData = [
  {
    title: "Personal CV Website",
    module: "HTML Basics",
    targetModuleId: "intro",
    description: "Build your first professional identity using semantic HTML.",
    difficulty: "Beginner",
    tech: ["HTML5", "CSS3"]
  },
  {
    title: "TypeScript Calculator",
    module: "TypeScript Mastery",
    targetModuleId: "typescript-mastery",
    description: "A fully functional calculator with strict type checking and clean logic.",
    difficulty: "Intermediate",
    tech: ["TypeScript", "Logic", "Math"]
  },
  {
    title: "Professional Landing Page",
    module: "Next.js & Tailwind",
    targetModuleId: "nextjs-mastery",
    description: "A high-performance responsive site with smooth animations.",
    difficulty: "Advanced",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "AI Chatbot Agent",
    module: "Phase 4: AI & APIs",
    targetModuleId: "py-ai-section",
    description: "Connect Python to Gemini API for a smart conversational assistant.",
    difficulty: "Expert",
    tech: ["Python", "Streamlit", "Gemini API"]
  },
  {
    title: "Career Mentor AI",
    module: "Phase 4: AI & APIs",
    targetModuleId: "py-ai-section",
    description: "A multi-agent system that analyzes resumes and gives career advice.",
    difficulty: "Master",
    tech: ["Python", "AI Agents", "Streamlit"]
  },
  {
    title: "AI Web SaaS",
    module: "Phase 5: Backend & Advanced",
    targetModuleId: "py-advanced-career",
    description: "Full end-to-end product built using FastAPI and Streamlit.",
    difficulty: "Master",
    tech: ["FastAPI", "Python", "Streamlit"]
  }
];

export const WEB_DEV_COURSE: Module[] = [
  {
    id: "intro",
    title: "Module 1: Computer Basics & Software Setup",
    topics: [
      {
        id: "why-computer-for-web",
        title: "01. Computer Basics for Web Development",
        explanation: "Web development ke liye aapko computer ki basic samajh hona zaroori hai. Computer mainly 3 kaam karta hai: 1) Input (Aapka code), 2) Processing (JS Engine), aur 3) Output (Browser pe website). Web developer ban-nay ke liye aapko software aur hardware ke darmiyan coordination samajhna hota hai. Computer hi wo factory hai jahan aap apna digital product banate hain.",
        example: "Jaise aik mechanic ko auzaron aur machine ki samajh honi chahiye, wese hi developer ko apne computer ki power (RAM, CPU) ka pata hona chahiye taake wo heavy code asani se chala sake.",
        tasks: [
          "Check your RAM and Processor speed (Settings -> About).",
          "Identify your Operating System (Windows 10/11 or Mac)."
        ],
        homework: [
          "Write down one reason why a web developer needs a fast computer compared to a normal user."
        ],
        beginnerFriendly: true
      },
      {
        id: "vscode-setup",
        title: "02. VS Code: Your Professional Workspace",
        explanation: "Visual Studio Code (VS Code) dunya ka sab se behtareen 'Code Editor' hai. Isay Microsoft ne 2015 mein release kiya tha. Iska faida ye hai ke ye 'Syntax highlighting' (rangon se code samjhna) aur 'Extensions' support karta hai jo aapka kaam 10x fast kar dete hain.",
        example: "Aik writer ko diary aur pen chahiye, wese hi aik developer ko VS Code chahiye jahan wo apna sara logic likh sake.",
        tasks: [
          "Go to 'code.visualstudio.com' and download the installer.",
          "Install VS Code and open it for the first time.",
          "Install the 'Prettier' extension from the extensions marketplace."
        ],
        homework: [
          "Change the theme of your VS Code from Settings and take a screenshot."
        ],
        beginnerFriendly: true
      },
      {
        id: "nodejs-npm-setup",
        title: "03. Node.js & NPM: The Engine & Tools",
        explanation: "Node.js wo 'Engine' hai jo aapke JavaScript code ko computer pe chalne ke qabil banata hai. Isay 'Ryan Dahl' ne 2009 mein ijad kiya tha. Iske sath NPM (Node Package Manager) install hota hai jo dunya ki sab se bari library hai jahan se hum pehle se bane 'packages' use karte hain (jaise animations ya buttons).",
        example: "Gari ke liye engine zaroori hai, wese hi modern web development (React/NextJS) ke liye Node.js engine bohot zaroori hai.",
        tasks: [
          "Download Node.js 'LTS' version from 'nodejs.org'.",
          "Install it and open Terminal/CMD.",
          "Type 'node -v' and 'npm -v' to verify installation."
        ],
        homework: [
          "Find out what 'LTS' stands for in Node.js downloading site."
        ],
        beginnerFriendly: true
      },
      {
        id: "git-setup",
        title: "04. Git: The Developer's Time Machine",
        explanation: "Git aik 'Version Control System' hai jo 'Linus Torvalds' (Linux ke creator) ne 2005 mein banaya tha. Iska faida ye hai ke agar aapka code ghalat ho jaye, to aap wapis purane version pe ja saktay hain. Ye aapke code ki history save karta hai. Isay install karna professional ban-nay ke liye 100% zaroori hai.",
        example: "Jaise game mein 'Saved Game' hota hai, wese hi coding mein 'Git' aapke code ki progress save karta hai.",
        tasks: [
          "Download Git from 'git-scm.com'.",
          "Complete the installation with default settings.",
          "Type 'git --version' in Terminal to check."
        ],
        homework: [
          "Search for 'GitHub' and see how it is different from Git."
        ],
        beginnerFriendly: true
      },
      {
        id: "browser-devtools",
        title: "05. Browsers & DevTools: The Lab",
        explanation: "Developer sirf browser pe website dekhta nahi balkay usay 'Debug' karta hai. Google Chrome ya Firefox 'DevTools' provide karte hain (Inspect Element) jahan se aap real-time mein code change kar ke dekh saktay hain ke website mobile pe kaisi lag rahi hai.",
        example: "Browser wo mirror (shisha) hai jahan aap apna haseen code (website) dekh saktay hain.",
        tasks: [
          "Install Google Chrome or Firefox Developer Edition.",
          "Right click on any website and select 'Inspect'.",
          "Change the text color of a live website temporarily using DevTools."
        ],
        homework: [
          "Find the 'Network' tab in Inspect element and see how many files load when you open Google."
        ],
        beginnerFriendly: true
      },
      {
        id: "cli-terminal-power",
        title: "06. CLI & Terminal: Power in your Hands",
        explanation: "CLI (Command Line Interface) wo jagah hai jahan aap mouse ke bajaye text commands likh kar computer se kaam karwatay hain. Iski history 1960s se milti hai jab graphical screens (icons/windows) nahi hoti thin. Ek professional developer CLI is liye use karta hai kyunke ye bohot fast hai aur servers pe mouse nahi hota. Aap terminal se files banana, folders delete karna, aur advanced tools run karna seekhte hain.",
        example: "Mouse se kaam karna asaan hai lekin terminal use karna aisa hi hai jaise gari ko manually control karna—aapke pas zyada power aur speed hoti hai.",
        code: "# Basic Commands for Beginners:\ncd ..          # Piche wale folder mein jana\nls             # Files ki list dekhna (Mac/Linux)\ndir            # Files ki list dekhna (Windows)\nmkdir my-web   # Naya folder banana\ntouch app.js   # Nayi file banana (Mac/Linux)\necho > app.js  # Nayi file banana (Windows)",
        language: "bash",
        tasks: [
          "Open your terminal (VS Code mein Ctrl + ` dabayein).",
          "Create a new folder named 'khipro-batch' using terminal.",
          "Check how many files are in your current directory using commands."
        ],
        homework: [
          "List 3 reasons why developers prefer terminal over using a mouse (GUI)."
        ],
        beginnerFriendly: true
      }
    ]
  },
  {
    id: "html",
    title: "Module 2: HTML - The Birth of World Wide Web",
    topics: [
      {
        id: "html-founder",
        title: "01. Tim Berners-Lee & The Birth of HTML",
        explanation: "1989 mein Sir Tim Berners-Lee ne CERN (Switzerland) mein kaam karte hue HTML (HyperText Markup Language) ijad ki thi. Unka maqsad tha ke dunya bhar ke scientists apni reports asani se share kar saken. HTML koi programming language nahi hai, balki ye aik 'Markup Language' hai jo batati hai ke content ki structure kya hai. Pehli website 1991 mein live hui thi jo sirf text par mushtamil thi.",
        code: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>The First Concept</title>\n  </head>\n  <body>\n    <h1>The Internet was born here</h1>\n    <p>HTML was created in a physics lab!</p>\n  </body>\n</html>`,
        language: "html",
        tasks: [
          "Search for 'The first website URL' and visit it.",
          "Create your first index.html file manually."
        ],
        homework: [
          "Explain why Sir Tim Berners-Lee is called the father of the web."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-boilerplate",
        title: "02. The Skeleton: Standard Document Structure",
        explanation: "Har HTML file aik khas 'Boilerplate' se shuru hoti hai. Isme <!DOCTYPE html> browser ko batata hai ke ye HTML5 hai. <html> pura document cover karta hai, <head> mein wo info hoti hai jo user ko nahi dikhti (SEO/Title), aur <body> mein wo sab hota hai jo screen pe nazara ata hai.",
        example: "Jaise insani jism mein aik dhancha (Skeleton) hota hai, wese hi boilerplate har website ka dhancha hai.",
        code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>My Site Structure</title>\n</head>\n<body>\n    <!-- Content goes here -->\n</body>\n</html>`,
        language: "html",
        tasks: [
          "Type the boilerplate code 5 times to memorize it.",
          "Change the <title> to your own name."
        ],
        homework: [
          "What happens if we remove the <!DOCTYPE html> tag? Search it."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-headings",
        title: "03. Hierarchy: Using Headings (h1 - h6)",
        explanation: "HTML mein 6 tarah ki headings hoti hain. <h1> sab se bari aur important hoti hai, jabke <h6> sab se choti. SEO ke liye <h1> sirf aik baar use karni chahiye kyunke ye batata hai ke page kis barey mein hai.",
        example: "Aik Newspaper mein Main Headline <h1> hoti hai, aur choti khabrein <h3> ya <h4> hoti hain.",
        code: "<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<h3>Less important headline</h3>",
        language: "html",
        tasks: [
          "Create a page with all 6 types of headings.",
          "Style your name in <h1> and city in <h2>."
        ],
        homework: [
          "Explain why we shouldn't use <h3> before <h1> in a logical structure."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-paragraphs",
        title: "04. Content Flow: Paragraphs & Line Breaks",
        explanation: "<p> tag text ko blocks mein divide karta hai. <br> tag line break ke liye use hota hai aur <hr> aik horizontal line khench deta hai partition ke liye.",
        example: "Paragraphs bilkul wese hi hain jaise aap ki Urdu ya English ki kitab mein blocks hote hain.",
        code: "<p>This is my first paragraph.</p>\n<hr>\n<p>This paragraph is <br> broken into two lines.</p>",
        language: "html",
        tasks: [
          "Write a 10-line paragraph about Khipro.",
          "Use <hr> to separate two different topics."
        ],
        homework: [
          "What is the difference between <p> and <br> regarding space?"
        ],
        beginnerFriendly: true
      },
      {
        id: "html-linkedin",
        title: "05. LinkedIn: Your Web Identity 🌐",
        explanation: "Professional Web Developer ban-nay ke liye aapka 'Digital Presence' hona bohot zaroori hai. LinkedIn pe apna network banana aur jo aap HTML/CSS seekh rahe hain uski journey share karna aapko employers ki nazar mein laata hai. 'Jo dikhta hai, wo bikta hai!'",
        example: "Real Life: LinkedIn aik aisi exhibition gallery hai jahan aap apna kaam (Web Layouts) dunya ko dikhate hain.",
        tasks: [
          "LinkedIn profile banayein (agar nahi hai).",
          "Headline mein 'Full Stack Web Development Trainee @ Khipro Academy' likhein.",
          "Pehli HTML setup ki screenshot LinkedIn pe post karein."
        ],
        homework: ["Follow 5 tech companies you want to work for."],
        beginnerFriendly: true
      },
      {
        id: "html-formatting",
        title: "06. Text Decoration: Formatting Tags",
        explanation: "Text ko highlight ya bold karne ke liye <strong> aur <b> use hote hain. Italic ke liye <em> aur <i>. Subscript (H₂O) aur Superscript (X²) ke liye <sub> aur <sup> use hote hain.",
        code: "<p>Water is <strong>H<sub>2</sub>O</strong></p>\n<p>Formula of math is <em>X<sup>2</sup></em></p>",
        language: "html",
        tasks: [
          "Write the Chemical Formula of Glucose using <sub>.",
          "Highlight a important sentence using <mark> tag."
        ],
        homework: [
          "Research the difference between <b> and <strong> in terms of SEO."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-anchors",
        title: "07. Connections: Anchors & Links",
        explanation: "<a> tag se hum dunya bhar ki websites connect karte hain. 'href' attribute destination file ka address hota hai. Target='_blank' se link new tab mein khul jata hai.",
        example: "Links bilkul digital roads ki tarah hain jo aik page ko dusre se jortay hain.",
        code: '<a href="https://google.com" target="_blank">Search here</a>',
        language: "html",
        tasks: [
          "Add a link to Facebook.",
          "Create a link that sends an email using 'mailto' protocol."
        ],
        homework: [
          "Create two HTML files and link them to each other."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-paths",
        title: "08. Paths: Absolute vs Relative",
        explanation: "Absolute Path pura URL hota hai (http://...). Relative Path woh hota hai jo aap ki apni files ke darmiyan hota hai (./images/photo.jpg). Professional developers hamesha relative paths use karte hain.",
        tasks: [
          "Identify an absolute path on a live website.",
          "Explain why relative paths are better for project movement."
        ],
        homework: [
          "Write the path to open a file that is in a folder named 'pages' which is outside your current folder."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-images",
        title: "09. Visuals: Mastering the <img> Tag",
        explanation: "Images ke liye <img> tag use hota hai. 'src' image ka path hai aur 'alt' text tab show hota hai jab net slow ho ya image dunya mein exist na karey. Ye SEO ke liye bohot zaroori hai.",
        example: "Alt text bilkul andhay logon ke liye tasveer ka aankhon dekha haal (description) hai.",
        code: '<img src="https://example.com/logo.png" alt="Company Logo" width="200">',
        language: "html",
        tasks: [
          "Find a URL of a picture online and display it in your HTML.",
          "Add a picture from your local computer."
        ],
        homework: [
          "List 3 image formats (JPG, PNG, WebP) and their differences."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-lists",
        title: "10. Lists: Unordered & Ordered",
        explanation: "Unordered (<ul>) bullet points ke liye aur Ordered (<ol>) numbered list ke liye use hota hai. Har item <li> ke andar hota hai.",
        code: "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n<ol>\n  <li>Buy PC</li>\n  <li>Start Course</li>\n</ol>",
        language: "html",
        tasks: [
          "Make a list of your 5 favorite foods.",
          "Make a numbered list of steps to make tea."
        ],
        homework: [
          "Research how to change bullet styles to Squares or Roman numerals in HTML."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-tables-basic",
        title: "11. Data Representation: Tables Part 1",
        explanation: "Tables data ko rows (<tr>) aur columns (<td>) mein dikhane ke liye hote hain. Table headers ke liye <th> use hota hai.",
        code: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Zubair</td>\n    <td>22</td>\n  </tr>\n</table>",
        language: "html",
        tasks: [
          "Create a table showing marks of 3 students.",
          "Add border='1' to see the table lines (though CSS is better for this)."
        ],
        homework: [
          "Draw a 4x4 matrix using HTML table tags."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-tables-adv",
        title: "12. Rowspan & Colspan: Advanced Tables",
        explanation: "Colspan aik cell ko multiple columns cover karne deta hai, aur Rowspan vertically multiple rows merge kar deta hai.",
        example: "Jaisay Excel mein 'Merge Cells' hota hai, HTML mein ye attributes wahi kaam karte hain.",
        code: '<tr><td colspan="2">Total Marks</td></tr>',
        language: "html",
        tasks: [
          "Build a table where one cell takes the space of two columns.",
          "Create a complex weekly timetable."
        ],
        homework: [
          "Research <thead>, <tbody>, and <tfoot> tags for table structure."
        ],
        beginnerFriendly: false
      },
      {
        id: "html-forms-intro",
        title: "13. User Interaction: The <form> Tag",
        explanation: "Forms se hum user ka data (Login, Signup) collect karte hain. Isme 'Action' aur 'Method' attributes bohot important hote hain jo batate hain ke data kahan jayega.",
        code: '<form action="/submit-data" method="POST">\n  <!-- Inputs go here -->\n</form>',
        language: "html",
        tasks: [
          "Create an empty form and give it a heading 'Contact Us'.",
          "Identify 3 websites where you see different forms."
        ],
        homework: [
          "What is the difference between GET and POST methods? Search it."
        ],
        beginnerFriendly: true
      },
      {
        id: "html-input-types",
        title: "14. Input Power: Basic Text & Passwords",
        explanation: "Common inputs mein type='text' simple text ke liye aur type='password' bullets dikhane ke liye use hota hai.",
        code: '<label>Email:</label>\n<input type="email" placeholder="abc@mail.com">\n<br>\n<input type="password" placeholder="Min 8 chars">',
        language: "html",
        tasks: [
          "Create a Login Screen with Email and Password.",
          "Add 'placeholder' to all your inputs."
        ],
        homework: [
          "Why do we need a <label> tag instead of just writing text next to input?"
        ],
        beginnerFriendly: true
      },
      {
        id: "html-input-advanced",
        title: "15. Modern Inputs: Date, Color & Number",
        explanation: "HTML5 ne inputs ko bohot advance kar diya hai. Ab hum type='date' se calendar aur type='color' se color picker generate kar saktay hain.",
        code: '<input type="date">\n<input type="checkbox"> I Agree\n<input type="radio" name="gender"> Male',
        language: "html",
        tasks: [
          "Create a form with a Date of Birth picker.",
          "Create a multi-choice gender selection using Radio buttons."
        ],
        homework: [
          "What happens if we don't give the same 'name' attribute to radio buttons?"
        ],
        beginnerFriendly: true
      },
      {
          id: "html-textarea-select",
          title: "16. Large Data: Textarea & Dropdowns",
          explanation: "Baray message ke liye <textarea> aur list mein se select karne ke liye <select> tag use hota hai.",
          code: '<select>\n  <option>Karachi</option>\n  <option>Khipro</option>\n</select>\n<textarea rows="4">Write message...</textarea>',
          language: "html",
          tasks: [
              "Add a dropdown of 5 different countries.",
              "Add a 5-line textarea for 'Support Message'."
          ],
          homework: [
              "How to set a default selected option in the dropdown? Find the attribute."
          ],
          beginnerFriendly: true
      },
      {
          id: "html-semantic-mastery",
          title: "17. Semantic HTML: SEO & Web Structure",
          explanation: "Semantic tags browser ko page ka maqsad samjhate hain. <header> top ke liye, <nav> menu ke liye, <main> content ke liye aur <footer> bottom ke liye.",
          example: "Sada HTML bilkul kachay ghar jaisa hai, semantic tags use karna use complete puka ghar banata hai jo Google ko pasand ata hai.",
          tasks: [
              "Rewrite your basic page structure using ONLY semantic tags.",
              "Draw a layout using Header, Nav, Aside, Section, and Footer."
          ],
          homework: [
              "Analyze a professional website and find its Header and Footer tags in DevTools."
          ],
          beginnerFriendly: true
      },
      {
          id: "html-iframes",
          title: "18. Deep Integration: Iframes & Maps",
          explanation: "<iframe> se hum kisi doosri website ka page (jaise Google Maps ya YouTube video) apni website mein dikha saktay hain.",
          code: '<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>',
          language: "html",
          tasks: [
              "Embed a map of Khipro City from Google Maps.",
              "Embed a YouTube tutorial video."
          ],
          homework: [
              "Search for the security risks of using Iframes on every page."
          ],
          beginnerFriendly: false
      },
      {
          id: "html-meta-seo",
          title: "19. Meta Tags: SEO Basics",
          explanation: "<meta> tags HTML file ke <head> mein hote hain. Ye batate hain ke website kis barey mein hai aur mobile pe kaisi dikhegi (Viewport).",
          code: '<meta name="description" content="Best Web Lab in Khipro">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          language: "html",
          tasks: [
              "Add a professional meta description to your project.",
              "Check why 'Viewport' meta tag is essential for mobile devices."
          ],
          homework: [
              "What is 'Open Graph' (OG) meta tag? How does it show previews on WhatsApp?"
          ],
          beginnerFriendly: false
      },
      {
          id: "html-symbols",
          title: "20. Special Characters & Entities",
          explanation: "HTML mein kuch symbols reserved hain (jaise < ya >). Unhein likhne ke liye hum '&lt;' ya '&gt;' use karte hain. Copyright ka symbol (&copy;) bhi aise hi banta hai.",
          code: "<p>Copyright &copy; 2026 Skill Bridge Lab</p>\n<p>Greater than sign is &gt;</p>",
          language: "html",
          tasks: [
              "Add a copyright symbol to your website footer.",
              "Display the text '<h1>' on your screen without the browser treating it as a tag."
          ],
          homework: [
              "Find the entity codes for heart, spade, and euro symbols."
          ],
          beginnerFriendly: true
      },
      {
          id: "html-best-practices",
          title: "21. Final: Best Practices & Clean Code",
          explanation: "Code likhne ka sahi tarika: 1) Tags hamesha lowercase hon, 2) Proper indentation (space) ho, 3) Hamesha closing tags lagayen.",
          tasks: [
              "Validate your HTML using 'W3C Validator' online.",
              "Beautify your code using VS Code shortcut: Shift + Alt + F."
          ],
          homework: [
              "Complete your Final HTML-only Portfolio using all 20 modules' knowledge."
          ],
          beginnerFriendly: true
      },
      {
          id: "github-basics",
          title: "22. GitHub: Hosting your Code Online",
          explanation: "Git aapke computer pe code save karta hai, lekin GitHub wo 'Cloud' hai jahan aap apna code internet pe rakhte hain taake dunya dekh sake. Isay 'Developer ki Social Media' bhi kehte hain. Jab aap apna code GitHub pe 'Push' karte hain, to wo mahfooz ho jata hai aur aap apne dosto ke sath mil kar kaam kar saktay hain.",
          example: "Git aapki hard drive hai, aur GitHub aapki Google Drive ya Cloud storage hai jahan se koi bhi link ke zariye code dekh sakta hai.",
          code: "# Pushing code for the first time:\ngit init                   # Nayi repository banana\ngit add .                  # Saari files stage karna\ngit commit -m 'Initial'    # Message likhna\ngit remote add origin URL  # GitHub se jorna\ngit push -u origin main    # Code cloud pe bhejna\n\n# Updating code:\ngit add .\ngit commit -m 'Fixed bug'\ngit push                   # New changes bhejna",
          language: "bash",
          tasks: [
              "Create a free account on github.com.",
              "Create a new repository named 'my-first-web'.",
              "Push your index.html file to GitHub."
          ],
          homework: [
              "Explain the difference between 'git commit' and 'git push' in your own words."
          ],
          beginnerFriendly: true
      }
    ]
  },
  {
      id: "css",
      title: "Module 3: CSS - The Mastery of Styling",
      topics: [
          {
              id: "css-intro-methods",
              title: "01. Why CSS? & The 3 Styling Methods",
              explanation: "CSS (Cascading Style Sheets) website ki 'Personality' hai. Agar HTML aik ghar ka dhancha (structure) hai, to CSS uske rang, furniture, aur decoration ka naam hai. CSS ke baghair har website sirf black-white text hoti. CSS use karne ke 3 tariqy hain: 1) Inline (Tag ke andar), 2) Internal (Head tag mein), aur 3) External (Alag file mein). Hum hamesha 'External CSS' use karte hain kyunke is se code saaf rehta hai aur hum aik hi design ko hazaron pages pe apply kar saktay hain.",
              example: "Jaise aik insaan ke DNA (HTML) ko badla nahi ja sakta magar uska libaas (CSS) roz badla ja sakta hai.",
              code: `<!-- 1. Inline: Direct tag ke andar -->
<h1 style="color: red;">I am Red</h1>

<!-- 2. Internal: Head tag ke andar -->
<style>
  h2 { color: blue; }
</style>

<!-- 3. External (Professional Way) -->
<!-- index.html -->
<link rel="stylesheet" href="style.css">
<h3 class="title">I have a separate file</h3>

/* style.css */
.title {
  color: green;
  font-weight: bold;
}`,
              language: "html",
              tasks: [
                "Create three headings and style each using a different CSS method.",
                "Link an external 'style.css' file to your index.html."
              ],
              homework: [
                "Write 5 points on why External CSS is better than Inline CSS for big projects."
              ],
              beginnerFriendly: true
          },
          {
              id: "css-selectors-basic",
              title: "02. Selectors: Class, ID & Element",
              explanation: "External CSS mein hum HTML tags ko Selectors se target karte hain. Class (.) group ke liye, ID (#) unique item ke liye, aur Element selector direct tag name ke liye hota hai.",
              code: `<!-- index.html -->\n<div id="header">Header Section</div>\n<p class="text">Item 1</p>\n<p class="text">Item 2</p>\n\n/* style.css */\n#header { background: black; color: white; padding: 10px; }\n.text { color: #3498db; }\np { font-size: 16px; font-family: Arial; }`,
              language: "html",
              tasks: ["Target a heading using its tag name.", "Apply a border to all elements with class 'box'."],
              homework: ["Explain why we should use classes more than IDs for styling."],
              beginnerFriendly: true
          },
          {
              id: "css-colors-mastery",
              title: "03. Advanced Colors: HEX & RGBA",
              explanation: "CSS mein colors sirf naam se nahi, balkay codes se diye jate hain. HEX code (#) aur RGBA (Red, Green, Blue, Alpha) sab se zyada use hote hain. 'Alpha' se hum transparency (opacity) control karte hain.",
              code: `/* style.css */\n.card {\n  background-color: #f1c40f; /* Yellow Hex */\n  color: rgba(0, 0, 0, 0.7); /* Black with 70% opacity */\n  border: 2px solid #2ecc71;\n}`,
              language: "css",
              tasks: ["Find the HEX code for 'Light Sea Green'.", "Make a box with 50% transparency using RGBA."],
              homework: ["Research 'HSLA' color model and see how it is different from RGBA."],
              beginnerFriendly: true
          },
          {
              id: "css-box-model-padding",
              title: "04. Box Model (Part 1): Padding & Margin",
              explanation: "Har HTML tag aik box hota hai. Content ke bahar ki jagah 'Margin' hoti hai aur Content aur Border ke darmiyan ki jagah 'Padding' hoti hai.",
              example: "Jaise aapke mobile phone aur uske packing dabbay (box) ke beech jo foam hota hai wo padding hai, aur do dabbon ke beech ki jagah margin hai.",
              code: `/* style.css */\n.box {\n  border: 2px solid black;\n  padding: 20px; /* Inside space */\n  margin: 50px auto;  /* Outside space + centering */\n}`,
              language: "css",
              tasks: ["Add 100px margin to a button.", "Add 10px padding to all sides of a paragraph."],
              homework: ["Draw a diagram showing Padding, Border, and Margin."],
              beginnerFriendly: true
          },
          {
              id: "css-box-model-border",
              title: "05. Box Model (Part 2): Borders & Radius",
              explanation: "Border box ki deewar hoti hai. Iska size, style (solid, dashed), aur color set kar saktay hain. 'border-radius' se hum corners ko round (gol) kar saktay hain.",
              code: `/* style.css */\n.card {\n  border: 5px dashed #gold;\n  border-radius: 15px;\n  padding: 10px;\n  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);\n}`,
              language: "css",
              tasks: ["Make a circular image using border-radius: 50%.", "Create a side-border only (border-left)."],
              homework: ["How to make a button look like a pill (very rounded)? Try it."],
              beginnerFriendly: true
          },
          {
              id: "css-typography",
              title: "06. Typography: Fonts & Alignment",
              explanation: "Text ko khoobsurat banana 'Typography' hai. Aap font-size, font-family, text-align, aur line-height se text ko readable aur professional banate hain.",
              code: `/* style.css */\n.modern-text {\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  line-height: 1.6;\n  text-transform: capitalize;\n}`,
              language: "css",
              tasks: ["Change font of your headings.", "Center align your entire page content."],
              homework: ["Research about 'Google Fonts' and how to import them."],
              beginnerFriendly: true
          },
          {
              id: "css-backgrounds",
              title: "07. Backgrounds: Images & Gradients",
              explanation: "Background mein sirf color nahi balkay images aur 'Gradients' (2 ya zyada colors ka mix) bhi lagaye ja sakte hain. Gradients modern design ki bunyad hain.",
              code: `/* style.css */\n.hero {\n  height: 300px;\n  background: linear-gradient(to right, #ff7e5f, #feb47b);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}`,
              language: "css",
              tasks: ["Apply a diagonal linear-gradient.", "Try putting a background image using 'background-image: url()'." ],
              homework: ["Explain the difference between linear and radial gradients."],
              beginnerFriendly: true
          },
          {
              id: "css-display",
              title: "08. Display: Block vs Inline",
              explanation: "Block elements poori width letay hain (jaise <div>, <h1>), jabke Inline elements sirf utni jagah letay hain jitna content ho (jaise <span>, <a>).",
              code: `<!-- index.html -->\n<span class="inline-box">Stay in Line</span>\n<div class="block-box">Take Whole Row</div>\n\n/* style.css */\n.inline-box { display: inline-block; background: yellow; padding: 5px; }\n.block-box { display: block; background: skyblue; margin-top: 10px; }`,
              language: "html",
              tasks: ["Make an <a> tag behave like a block element.", "Hide an element using display: none;"],
              homework: ["List 3 block-level and 3 inline-level HTML tags."],
              beginnerFriendly: true
          },
          {
              id: "css-positioning-intro",
              title: "09. Positioning: Relative & Absolute",
              explanation: "Positioning se hum elements ko unki normal jagah se hata kar kahin bhi rakhte hain. Absolute position relative parent ke mutabiq kaam karti hai.",
              code: `/* style.css */\n.parent {\n  position: relative;\n  height: 200px;\n  background: #eee;\n}\n.child {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: red;\n  padding: 10px;\n}`,
              language: "css",
              tasks: ["Move a box 50px from top and left using relative positioning.", "Place a badge on the top-right corner of a card."],
              homework: ["What is the difference between relative and absolute positioning?"],
              beginnerFriendly: false
          },
          {
              id: "css-fixed-sticky",
              title: "10. Positioning: Fixed & Sticky",
              explanation: "Fixed element page scroll karne se bhi nahi hilta. Sticky element scrolling ke waqt khas jagah pe ja kar chipak (stick) jata hai.",
              code: `/* style.css */\n.navbar { position: sticky; top: 0; background: white; z-index: 100; }\n.floating-btn { position: fixed; bottom: 30px; right: 30px; }`,
              language: "css",
              tasks: ["Create a sticky header for your page.", "Build a fixed 'Chat with us' button."],
              homework: ["Try making a sidebar that stays fixed while content scrolls."],
              beginnerFriendly: false
          },
          {
              id: "css-zindex",
              title: "11. Z-Index: Layering Elements",
              explanation: "Z-index decide karta hai ke konsa element 'upar' (front) dikhayi dega aur konsa 'piche' (back). Ye sirf positioned elements pe kaam karta hai.",
              code: `/* style.css */\n.box1 { position: absolute; z-index: 2; top: 0; background: red; }\n.box2 { position: absolute; z-index: 1; top: 10px; background: blue; }`,
              language: "css",
              tasks: ["Layer 3 boxes and change their order using z-index.", "Make a pop-up overlay stay on top of everything."],
              homework: ["Why doesn't z-index work on static elements? Search it."],
              beginnerFriendly: false
          },
          {
              id: "css-flexbox-intro",
              title: "12. Flexbox: The Layout Engine",
              explanation: "Flexbox layout banane ka asaan tareeqa hai. 'display: flex' laganay se androni items automatic align honay lagte hain.",
              code: `<!-- index.html -->\n<div class="flex-container">\n  <div>Home</div>\n  <div>About</div>\n  <div>Contact</div>\n</div>\n\n/* style.css */\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n  background: #333;\n  color: white;\n  padding: 15px;\n}`,
              language: "html",
              tasks: ["Center a box both horizontally and vertically inside a <div>.", "Align 4 boxes as columns using 'flex-direction: column'."],
              homework: ["Play the 'Flexbox Froggy' game online (Lesson 1 to 5)."],
              beginnerFriendly: true
          },
          {
              id: "css-flex-align",
              title: "13. Flexbox Mastery: Expert Centering",
              explanation: "Vertical alignment ke liye 'align-items' aur horizontal ke liye 'justify-content' ka istemal hota hai. Ye professional layouts ki jaan hai.",
              code: `/* style.css */\n.center-all {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  border: 1px solid #ccc;\n}`,
              language: "css",
              tasks: ["Build a basic navigation bar with logo on left and links on right.", "Create a flex wrap layout with 10 small boxes."],
              homework: ["Explain the difference between space-around and space-between in Flexbox."],
              beginnerFriendly: true
          },
          {
              id: "css-grid-intro",
              title: "14. CSS Grid: Two-Dimensional Power",
              explanation: "Grid se hum rows aur columns dono ko aik sath control karte hain. Ye complex layouts ke liye best hai.",
              code: `/* style.css */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; /* 3 Equal Columns */\n  gap: 15px;\n}`,
              language: "css",
              tasks: ["Create a 2x2 grid for a photo gallery.", "Add a gap between grid items using the 'gap' property."],
              homework: ["Research about 'fr' unit in CSS Grid."],
              beginnerFriendly: false
          },
          {
              id: "css-hover-effects",
              title: "15. Interactivity: Hover & Transitions",
              explanation: "Jab mouse kisi element pe jaye hum uska style badal saktay hain. 'transition' isay smooth banati hai.",
              code: `/* style.css */\n.btn {\n  background: #3498db; transition: 0.4s;\n}\n.btn:hover {\n  background: #2980b9; transform: scale(1.1);\n}`,
              language: "css",
              tasks: ["Make an image fade when you hover over it.", "Change link color smoothly on hover."],
              homework: ["Create a button that gets bigger and changes color on hover."],
              beginnerFriendly: true
          },
          {
              id: "css-variables",
              title: "16. Clean Code: CSS Variables",
              explanation: "Variables se hum colors ko aik jagah save kar letay hain taake poori website pe aik sath change kar saken.",
              code: `/* style.css */\n:root {\n  --primary: #f39c12;\n  --text-color: #2c3e50;\n}\nh1 { color: var(--primary); }`,
              language: "css",
              tasks: ["Declare 3 color variables in :root.", "Use variables for padding and margin values."],
              homework: ["Why are CSS variables better than hardcoded colors?"],
              beginnerFriendly: false
          },
          {
              id: "css-media-queries",
              title: "17. Responsive Design: Breakpoints",
              explanation: "Device sizes ke mutabiq design change karna 'Responsive Design' hai. Common sizes:\n- Mobile: 320px to 480px\n- Tablet: 481px to 768px\n- Laptop: 769px to 1024px\n- Desktop: 1025px+",
              code: `/* style.css (Desktop First) */\n.menu { display: flex; }\n\n@media (max-width: 768px) {\n  .menu { display: none; } /* Hide on Tablet/Mobile */\n  body { font-size: 14px; }\n}`,
              language: "css",
              tasks: ["Hide a big image on screens smaller than 500px.", "Change the background color for mobile screens only."],
              homework: ["Find the screen resolution of your own mobile and write a media query for it."],
              beginnerFriendly: true
          },
          {
              id: "css-hamburger-menu",
              title: "18. Responsive: The Hamburger Menu",
              explanation: "Mobile pe menu ki jagah kam hoti hai, is liye hum 3 lines (Hamburger Icon) dikhate hain jise click karne pe menu khulta hai.",
              code: `<!-- index.html -->\n<div class="hamburger">☰</div>\n<ul class="nav-links">...</ul>\n\n/* style.css */\n.hamburger { display: none; font-size: 30px; cursor: pointer; }\n@media (max-width: 768px) {\n  .hamburger { display: block; }\n  .nav-links { display: none; } /* Hide normal menu on mobile */\n}`,
              language: "html",
              tasks: ["Build a three-line menu icon using only spans in CSS.", "Toggle a simple menu visibility using a media query."],
              homework: ["Research how to rotate the hamburger lines into an 'X' shape on click."],
              beginnerFriendly: false
          },
          {
              id: "css-animations",
              title: "19. Advanced Motion: @keyframes",
              explanation: "Auto-running animations banane ke liye keyframes use hote hain.",
              code: `/* style.css */\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n.logo { animation: bounce 2s infinite; }`,
              language: "css",
              tasks: ["Create a spinning loader.", "Make a text fade-in when the page loads."],
              homework: ["Build a heart-beat animation using 'scale' transition."],
              beginnerFriendly: false
          },
          {
              id: "css-best-practices",
              title: "20. Final: Professional CSS Practices",
              explanation: "Hamesha comments likhein, classes ko chote naam dein, aur code ko format rakhein (Linting). Specificity (ID > class > tag) ka khas khayal rakhein.",
              code: `/* OK: class-based styling */\n.header-nav { ... }\n\n/* BAD: over-specific and tag-heavy */\ndiv > ul > li > a { ... }`,
              language: "css",
              tasks: ["Refactor your messy code into clean classes.", "Check your CSS specificity score for a navigation bar."],
              homework: ["Final CSS Project: Build a fully responsive personal profile card."],
              beginnerFriendly: true
          }
      ]
  },
  {
      id: "ts",
      title: "Module 4: TypeScript - Zero to Hero (First Steps)",
      topics: [
          {
              id: "ts-intro",
              title: "01. Introduction to TypeScript & History",
              explanation: "TypeScript ko Microsoft ne 2012 mein banaya tha. Iske creator 'Anders Hejlsberg' hain. Asal mein JavaScript mein coding karte waqt bohot ghaltiyan hoti thin jo browser pe chalane ke baad pata chalti thin. TypeScript ne is mushkil ko hal kiya. Ye JavaScript ka aik 'Bada Bhai' hai jo aapko coding ke waqt hi ghaltiyan bata deta hai.",
              example: "Jaise agar aap rasoi (kitchen) mein kaam kar rahe hon aur koi aapko saath saath bataye ke 'namak zyada mat daalna', TypeScript vahi kaam karta hai.",
              tasks: ["Google search karein ke konsi bari companies TypeScript use karti hain.", "Check karein ke TS kab release hui thi."],
              homework: ["Write 2 lines about why we need a 'Bodyguard' like TypeScript for our code."],
              beginnerFriendly: true
          },
          {
              id: "ts-vs-js-basics",
              title: "02. JS vs TS: The Difference between Freedom and Safety",
              explanation: "JavaScript 'Dynamic' hai, matlab ye bohot azad hai, aap kisi bhi variable mein kuch bhi daal saktay hain. Magar TypeScript 'Static' hai, ye kehta hai ke agar aik variable 'Number' ke liye bana hai to usme sirf 'Number' hi ayega. Is wajah se baray projects mein bugs nahi aate.",
              tasks: ["Explain the difference between a loose system and a strict system.", "Search: Why TypeScript is called a 'Superset' of JavaScript?"],
              homework: ["Draw a small Venn diagram showing JS inside TS."],
              beginnerFriendly: true
          },
          {
              id: "ts-installation-guide",
              title: "03. Installation: Setting Up Your Environment",
              explanation: "TypeScript use karne ke liye computer mein 'Node.js' hona zaroori hai. Terminal mein 'npm install -g typescript' likhne se TypeScript compiler (TSC) aapke computer mein install ho jata hai. Ye TSC hi hamare code ko check karta hai.",
              code: "# Terminal mein ye likhein:\nnpm install -g typescript\n\n# Installation check karne ke liye:\ntsc -v",
              language: "bash",
              tasks: ["Apne terminal mein 'tsc -v' chala kar version check karein.", "Agar error aaye to Node.js dobara install karein."],
              homework: ["Write down the full form of NPM and TSC."],
              beginnerFriendly: true
          },
          {
              id: "ts-hello-console",
              title: "04. First Program: Hello World & Console Log",
              explanation: "'console.log' ka matlab hai: 'Computer, ye message screen pe print kar do!'. Ye hamara sab se pehla aur basic tool hai ye dekhne ke liye ke hamara code sahi chal raha hai ya nahi. Har cheez jo hum console.log mein likhte hain wo browser ke console tab mein nazar aati hai.",
              code: "// index.ts\nconsole.log('Assalam-o-Alaikum, Khipro!');\nconsole.log(5 + 10); // Result: 15",
              language: "typescript",
              tasks: ["Create a file named 'app.ts' and write your name in console.log.", "Print a math calculation like 100 * 2 using console.log."],
              homework: ["What is the purpose of 'console.log' in real-world debugging?"],
              beginnerFriendly: true
          },
          {
              id: "ts-compilation-bridge",
              title: "05. Compilation: Converting TS to JS",
              explanation: "Browser ko TypeScript samajh nahi aati, wo sirf JavaScript (JS) samajhta hai. Is liye humein apni '.ts' file ko '.js' mein convert karna parta hai. Is process ko 'Compilation' ya 'Transpilation' kehte hain. Jab hum 'tsc filename.ts' likhte hain to TypeScript aik nayi '.js' file bana deta hai.",
              code: "// 1. File banayein: app.ts\n// 2. Terminal mein likhein:\ntsc app.ts\n\n// 3. Ab aapke pas 'app.js' file ban jayegi jo browser samajh sakta hai.",
              language: "bash",
              tasks: ["Compile your first '.ts' file and check if a '.js' file is created.", "Run the '.js' file using Node by typing 'node app.js' in terminal."],
              homework: ["Why doesn't the browser directly run '.ts' files? Search it."],
              beginnerFriendly: true
          },
          {
              id: "ts-variables-intro",
              title: "06. Variables: Containers for Data",
              explanation: "Variable ka matlab hai aik 'Container' ya 'Dabba' jisme hum koi value save karte hain. 'let' aur 'const' do main tareeqay hain variable banane ke. 'let' ki value baad mein badli ja sakti hai, magar 'const' (Constant) aik bar set ho jaye to vahi rehti hai.",
              code: "let myName = 'Zubair';\nmyName = 'Zubair Ahmed'; // Bilkul sahi!\n\nconst birthYear = 2002;\n// birthYear = 2005; // ERROR: Constant change nahi ho sakta!",
              language: "typescript",
              tasks: ["Create a 'let' variable for your current city.", "Create a 'const' variable for your Date of Birth."],
              homework: ["Think of 3 things in real life that are 'const' (example: gravity) and 3 things that are 'let'."],
              beginnerFriendly: true
          },
          {
              id: "ts-variable-scope",
              title: "07. Variable Scope: Understanding Visibility",
              explanation: "Scope ka matlab hai 'Haq'. Agar aik variable aik kamre (Block/Function) ke andar bana hai, to wo bahar nahi dikhega. Global scope ka matlab hai wo poore ghar (File) mein har jagah use ho sakta hai. Local scope sirf {} brackets ke andar hota hai.",
              code: "let globalVar = 'I am outside';\n\nif (true) {\n  let localVar = 'I am inside';\n  console.log(globalVar); // Yes!\n}\n// console.log(localVar); // ERROR: localVar bahar accessible nahi hai.",
              language: "typescript",
              tasks: ["Create a variable inside an 'if' block and try to access it outside.", "Check where your variable is visible in the code."],
              homework: ["Explain 'Global Scope' in 1 sentence."],
              beginnerFriendly: true
          },
          {
              id: "ts-data-types-basic",
              title: "08. Data Types: Understanding Value Types",
              explanation: "TypeScript mein har value ki aik 'Qism' (Type) hoti hai. 1) String (Text), 2) Number (Ginti), 3) Boolean (Sahi ya Galat). Hamara 'Bodyguard' hamesha check karta hai ke sahi type hi dabba (variable) mein jaye.",
              code: "let userName: string = 'Ali';\nlet userAge: number = 22;\nlet isStudent: boolean = true;\n\n// userAge = 'Twenty'; // ERROR! Number mein string nahi aa sakti.",
              language: "typescript",
              tasks: ["Declare 3 variables with explicit types (String, Number, Boolean).", "Try to assign a number to a string variable and see the red line error."],
              homework: ["Write down the data types of: 'Khipro', 786, false, '100'."],
              beginnerFriendly: true
          },
          {
              id: "ts-type-inference-smart",
              title: "09. Type Inference: Automatic Type Detection",
              explanation: "Agar aap variable ki type nahi likhte magar usme koi value daal dete hain, to TypeScript 'Detect' kar leta hai ke ye kis type ka variable hai. Isay 'Type Inference' kehte hain. Magar behtar professional tareeqa ye hai ke type khud likhi jaye.",
              code: "let country = 'Pakistan'; // TS knows it's a string\n// country = 92; // ERROR! TS knows it was string.",
              language: "typescript",
              tasks: ["Create a variable without specifying type and hover your mouse over it in VS Code.", "Check what type TS has assigned automatically."],
              homework: ["Research: When is Type Inference not enough and we must use explicit types?"],
              beginnerFriendly: true
          },
          {
              id: "ts-if-else",
              title: "10. Decision Making: If-Else Statements",
              explanation: "Coding mein humein aksar faislay karne partay hain ke 'agar ye condition sahi hai to ye kaam karo'. Iske liye hum 'if' aur 'else' use karte hain. Jaise: 'Agar marks 50 se zyada hain to Pass, warna Fail'.",
              code: "let marks: number = 75;\n\nif (marks >= 50) {\n  console.log('Mubarak ho! Aap Pass hain.');\n} else {\n  console.log('Koshish jari rakhein, aap Fail hain.');\n}",
              language: "typescript",
              tasks: ["Create an if-else statement to check if a number is Even or Odd.", "Check if a user's age is enough for a Driving License (18+)."],
              homework: ["Write a program that tells if a number is Positive, Negative or Zero."],
              beginnerFriendly: true
          },
          {
              id: "ts-loops-intro",
              title: "11. Loops: Iteration and Repetition",
              explanation: "Agar humein aik hi kaam 100 baar karna ho, to hum 100 baar code nahi likhte balkay 'Loop' use karte hain. 'for' loop hamain batata hai ke kahan se shuru karna hai, kahan khatam karna hai, aur kitna agay barhna hai.",
              code: "// 1 se 10 tak ginti\nfor (let i = 1; i <= 10; i++) {\n  console.log('Number: ' + i);\n}",
              language: "typescript",
              tasks: ["Print your name 5 times using a for loop.", "Print numbers from 10 down to 1 (Reverse Loop)."],
              homework: ["Write a loop that prints the Table of 5 (5, 10, 15... 50)."],
              beginnerFriendly: true
          },
          {
              id: "ts-functions-the-machine",
              title: "12. Functions: Reusable Code Machines",
              explanation: "Function aik aisi 'Machine' hai jise hum aik baar set karte hain aur baar baar use kar saktay hain. Ye hamara code bachata hai aur repeatition khatam karta hai. Syntax: 'function' likhna, name dena, () brackets, aur phr {} jahan logic hota hai.",
              code: "function sayHello() {\n  console.log('Hello from Function!');\n}\n\nsayHello(); // Machine ko chalana (Call karana)",
              language: "typescript",
              tasks: ["Write a function 'showCity' that prints your city name.", "Call that function 3 times."],
              homework: ["What is the benefit of using functions instead of writing the same code again?"],
              beginnerFriendly: true
          },
          {
              id: "ts-function-parameters",
              title: "13. Function Parameters: Passing Data to Functions",
              explanation: "Parameters ka matlab hai wo 'Information' jo hum function ko dete hain taake wo us pe kaam kar sake. Jaise Juicer machine mein phal (input) daalte hain, wese hi parameters function ke inputs hain.",
              code: "function greetUser(userName: string) {\n  console.log('Welcome ' + userName);\n}\n\ngreetUser('Zubair'); // Output: Welcome Zubair",
              language: "typescript",
              tasks: ["Create a function 'printAge' that takes a number as parameter.", "Pass different names to your greeting function."],
              homework: ["Write a function that takes two numbers and prints their sum."],
              beginnerFriendly: true
          },
          {
              id: "ts-function-return",
              title: "14. Function Return: Getting Values from Functions",
              explanation: "Baaz auqat hum chahte hain ke function sirf print na kare balkay humein koi 'Value' wapis de taake hum usay aagay use kar saken. Iske liye 'return' keyword use hota hai.",
              code: "function multiply(a: number, b: number): number {\n  return a * b;\n}\n\nlet result = multiply(5, 10); // result will be 50",
              language: "typescript",
              tasks: ["Create a function that returns the square of a number.", "Store the returned value in a new variable."],
              homework: ["Explain the difference between 'console.log' inside a function and 'return'."],
              beginnerFriendly: true
          },
          {
              id: "ts-arrays-lists",
              title: "15. Arrays: Working with Lists",
              explanation: "Agar humein bohot saari similar values aik hi variable mein rakhni hon, to hum 'Array' use karte hain. TS mein hum batate hain ke is array mein sirf strings hongi ya sirf numbers.",
              code: "let fruits: string[] = ['Apple', 'Mango', 'Banana'];\nlet scores: number[] = [85, 90, 77];\n\nconsole.log(fruits[0]); // Output: Apple",
              language: "typescript",
              tasks: ["Create an array of 5 friends' names.", "Change the 2nd friend's name in the array."],
              homework: ["How to find the length (total count) of an array? Search it."],
              beginnerFriendly: true
          },
          {
              id: "ts-interfaces-blueprint",
              title: "16. Interfaces: Blueprints for Objects",
              explanation: "Interfaces se hum batate hain ke hamara 'Object' (aik digital item) kaisa dikhega. Jaise aik Student ka name (string) aur ID (number) hona zaroori hai. Ye professional coding ka sab se important part hai.",
              code: "interface Student {\n  name: string;\n  age: number;\n}\n\nlet st1: Student = { name: 'Ali', age: 20 };",
              language: "typescript",
              tasks: ["Create an interface for 'Laptop' with brand and price.", "Try creating an object that doesn't follow the interface and read the error."],
              homework: ["What happens if we forget to add a property that is required by the interface?"],
              beginnerFriendly: false
          },
          {
              id: "ts-dom-html-css-intro",
              title: "17. TypeScript with HTML & CSS: Making the Connection",
              explanation: "Ab hum seekhenge ke TypeScript ko website ke elements (buttons, inputs) ke sath kaise jortay hain. Sab se important baat: Browser '.ts' file nahi samajhta, is liye hum HTML mein hamesha generated '.js' file link karte hain. Pehle tsc command se convert karein, phr link karein.",
              code: `<!-- index.html -->\n<!-- Yaad rahe: niche .js file link karni hai -->\n<script src="app.js"></script>\n\n/* app.ts mein coding karein phr 'tsc app.ts' chalayein */`,
              language: "html",
              tasks: ["Create index.html and app.ts.", "Compile app.ts to app.js and link app.js in your HTML file."],
              homework: ["Explain in steps: How to link TS logic to a live HTML page."],
              beginnerFriendly: true
          },
          {
              id: "ts-selecting-elements",
              title: "18. Selecting Elements: Grabbing HTML Tags",
              explanation: "Typescript mein HTML elements ko select karne ke liye 'document.getElementById' use hota hai. Hamein TS ko batana parta hai ke hamara pakra hua element button hai ya input, warna wo error dega. Isay 'Type Casting' kehte hain.",
              code: "// HTML\n// <button id='myBtn'>Click Me</button>\n\n// TS\nconst btn = document.getElementById('myBtn') as HTMLButtonElement;\nbtn.innerText = 'I am Changed!';",
              language: "typescript",
              tasks: ["Select an <h1> tag by ID and change its color to Red using TS.", "Select an <img> tag and change its src."],
              homework: ["Research: What is 'HTMLElement' and why do we use 'as' keyword?"],
              beginnerFriendly: false
          },
          {
              id: "ts-event-listeners",
              title: "19. Event Listeners: Creating Interactive Websites",
              explanation: "Jab user button pe click kare ya mouse move kare, to hum chahte hain ke kuch ho. Isay 'Events' kehte hain. 'addEventListener' se hum website ko interactive banate hain.",
              code: "const btn = document.getElementById('saveBtn') as HTMLButtonElement;\n\nbtn.addEventListener('click', () => {\n  alert('Button clicked check ho gaya!');\n});",
              language: "typescript",
              tasks: ["Create a button that shows your name in an alert when clicked.", "Change background color of the whole body when a button is clicked."],
              homework: ["List 3 common events like 'click', 'mouseover', etc."],
              beginnerFriendly: false
          },
          {
              id: "ts-inputs-values",
              title: "20. Form Data: Capturing User Input",
              explanation: "Input fields se data nikalna bohot easy hai. Hum '.value' property use karte hain. Yaad rakhein input value hamesha 'string' hoti hai, agar math karni ho to usay 'number' mein convert karna parta hai.",
              code: "const input = document.getElementById('nameInp') as HTMLInputElement;\nconst val = input.value;\n\n// Math ke liye:\nconst age = parseInt(input.value);",
              language: "typescript",
              tasks: ["Create an input field and a button. When clicked, print input value in console.", "Create two inputs and show their sum in an alert."],
              homework: ["What is the difference between 'parseInt' and 'Number()' function?"],
              beginnerFriendly: false
          },
          {
              id: "ts-project-calculator",
              title: "21. Main Project: Building an Addition Calculator",
              explanation: "Ab hum apna pehla real project banayenge. Aik Calculator jo do numbers ko add kare. Isme HTML ke inputs honge, CSS ka design hoga, aur TypeScript ka logic hoga.",
              code: `<!-- HTML -->
<input type="number" id="num1">
<input type="number" id="num2">
<button id="addBtn">Calculate</button>
<h1 id="result">Result: 0</h1>

// TS (Logic)
const n1 = document.getElementById('num1') as HTMLInputElement;
const n2 = document.getElementById('num2') as HTMLInputElement;
const btn = document.getElementById('addBtn') as HTMLButtonElement;
const res = document.getElementById('result') as HTMLElement;

btn.addEventListener('click', () => {
   const total = Number(n1.value) + Number(n2.value);
   res.innerText = "Answer: " + total;
});`,
              language: "typescript",
              tasks: ["Build this addition calculator.", "Style it using CSS to make it look beautiful.", "Add a 'Reset' button to clear values."],
              homework: ["Can you add Minus, Multiply and Divide buttons to this same calculator?"],
              beginnerFriendly: false
          },
          {
              id: "ts-modules-import-export",
              title: "22. Modules: Export & Import (Code Shared Karna)",
              explanation: "Jaisa ke aik badi company mein har department alag hota hai, coding mein bhi hum apne code ko alag alag files mein baant dete hain taake manage karna asaan ho. Iske liye 'export' (bahir bhejna) aur 'import' (andar mangwana) use hota hai. 'export default' aik file se sirf aik hi main cheez bhejne ke liye hota hai.",
              code: "// file1.ts (Exporting code)\nexport const myName = 'Ali';\nexport function sayHi() { console.log('Hi!'); }\n\n// file2.ts (Importing code)\nimport { myName, sayHi } from './file1'; \n\n// Default Export Example:\n// math.ts\nexport default function multiply(a: number, b: number) { return a * b; }\n\n// main.ts\nimport multiply from './math'; // No brackets {} needed for default export",
              language: "typescript",
              tasks: ["Create two files and move your interfaces to a separate file.", "Try to use 'export default' for a main class or function."],
              homework: ["Explain why we use curly braces {} in named imports but not in default imports."],
              beginnerFriendly: true
          },
          {
              id: "ts-summary-best-practices-final",
              title: "23. Finale: Mastering Clean Code Principles",
              explanation: "Mubarak ho! Aap ne TypeScript ki buniyad seekh li hai. Hamesha koshish karein ke code saaf likhain, comments add karein, aur variable names aise rakhein ke koi aur bhi samajh sake. TypeScript aapka sathi hai, dushman nahi!",
              tasks: ["Refactor your calculator code to use functions.", "Search for 'TSConfig' and see how it controls the compiler."],
              homework: ["Write a paragraph about your journey from HTML to TypeScript."],
              beginnerFriendly: true
          }
      ]
  },
  {
      id: "nextjs",
      title: "Module 5: Next.js - The Fullstack Web Framework",
      topics: [
          {
              id: "next-why",
              title: "01. Why Next.js? (The Core Logic)",
              explanation: "Next.js seekhne se pehle ye samajhna zaroori hai ke hum isay kyun use karte hain. HTML/CSS se bani websites 'Static' hoti hain, matlab wo user se interact nahi kar saktin zyada scale pe. Next.js dunya ka sab se popular 'Framework' hai jo websites ko super-fast aur dynamic banata hai.",
              example: "Facebook ya YouTube reload nahi hota jab aap scroll karte hain—ye modern frameworks ki wajah se hota hai. Next.js aapko waisa hi professional experience deta hai.",
              tasks: ["3 differences likho HTML/CSS vs Next.js.", "Identify a website that uses Next.js."],
              homework: ["Explain the problem with full page reloads in legacy websites."],
              beginnerFriendly: true
          },
          {
              id: "next-what",
              title: "02. What is Next.js? (Framework Overview)",
              explanation: "Next.js aik 'Framework' hai jo React (aik library) ke upar bana hai. Framework ka matlab hai aik aisi factory jahan har cheez (Routing, Optimization, Server) pehle se set milti hai. Isay 'Vercel' company ne banaya hai.",
              code: "// Next.js vs React\n// React: Library (Build what you want)\n// Next.js: Framework (Follow our structure for better results)",
              language: "typescript",
              tasks: ["Search for companies using Next.js like TikTok or Nike.", "Find out who is the CEO of Vercel."],
              homework: ["Write down the difference between a Library and a Framework."],
              beginnerFriendly: true
          },
          {
              id: "next-setup",
              title: "03. Setup Environment: Starting Your Journey",
              explanation: "Next.js ke liye Node.js aur VS Code ka hona zaroori hai. Aik command se hamara pura project ready ho jata hai.",
              code: "# Run this command to create a new app\nnpx create-next-app@latest my-app",
              language: "bash",
              tasks: ["Install Node.js if not done.", "Create your first Next.js project using terminal."],
              homework: ["Explain what 'npx' does compared to 'npm'."],
              beginnerFriendly: true
          },
          {
              id: "next-structure",
              title: "04. Folder Structure: Your Digital Map",
              explanation: "Next.js project mein folders ka aik khas matlab hota hai. 'app' folder mein saare pages hote hain, 'public' mein photos/styles, aur 'components' mein reusable code blocks.",
              code: "/my-app\n  /app          // Routes & Pages\n  /public       // Static Assets (Images)\n  /components   // Reusable Blocks\n  package.json  // Dependencies",
              language: "bash",
              tasks: ["Identify the 'page.tsx' file in your project.", "Look at the 'layout.tsx' file."],
              homework: ["Draw a small map of Next.js folder hierarchy."],
              beginnerFriendly: true
          },
          {
              id: "next-hello-world",
              title: "05. First Hello World: TSX Introduction",
              explanation: "Next.js mein hum HTML ki tarah code likhte hain magar usay TSX (TypeScript XML) kehte hain. Isme hum TypeScript aur HTML ko mix kar saktay hain.",
              code: "export default function Home() {\n  return <h1>Hello World, Khipro!</h1>;\n}",
              language: "tsx",
              tasks: ["Change 'Hello World' to your own name in Home page.", "Add a paragraph tag under the heading."],
              homework: ["What is the 'export default' keyword used for?"],
              beginnerFriendly: true
          },
          {
              id: "next-tailwind-intro",
              title: "06. Tailwind CSS Intro: Rapid Styling",
              explanation: "Tailwind CSS aik modern design tool hai jisme humein CSS likhne ki bajaye choti pre-made classes use karni hoti hain. Isay 'Utility-First' framework kehte hain.",
              example: "Traditional CSS mein hum file banate hain, yahan hum direct class likhte hain.",
              code: "// CSS vs Tailwind\n// Plain CSS: <div class='my-card'>...</div>\n// Tailwind: <div className='p-4 bg-blue-500 rounded-lg'>...</div>",
              language: "tsx",
              tasks: ["Find 5 Tailwind classes for font size and padding.", "List 2 advantages of Tailwind over plain CSS."],
              homework: ["Write a paragraph on why Tailwind is fast for developers."],
              beginnerFriendly: true
          },
          {
              id: "next-tailwind-setup",
              title: "07. Tailwind Setup: The Config",
              explanation: "Next.js install karte waqt Tailwind automatic setup ho jata hai. Hamein tailwind.config.ts aur globals.css ko samajhna hota hai.",
              code: "// tailwind.config.ts\nimport type { Config } from \"tailwindcss\";\n\nconst config: Config = {\n  content: [\"./app/**/*.{js,ts,jsx,tsx,mdx}\"],\n  theme: { extend: {} },\n};\nexport default config;",
              language: "typescript",
              tasks: ["Check your tailwind.config.ts file.", "Verify that tailwind directives are in globals.css."],
              homework: ["What does 'content' array do in tailwind config?"],
              beginnerFriendly: true
          },
          {
              id: "next-responsive",
              title: "08. Responsive Design: Mobile First",
              explanation: "Tailwind mein mobile responsive design banana bohot asaan hai using prefixes like sm:, md:, lg:.",
              code: "<div className='bg-red-500 md:bg-blue-500 lg:bg-green-500'>\n  This color changes based on screen size!\n</div>",
              language: "tsx",
              tasks: ["Make a div that is Red on mobile and Blue on desktop.", "Create a responsive navigation bar."],
              homework: ["What are breakpoints in mobile-first design?"],
              beginnerFriendly: true
          },
          {
              id: "next-landing-page",
              title: "09. Project: Landing Page Design",
              explanation: "Apna pehla professional Landing Page design karein using Hero section, Features, aur Footer using Tailwind classes.",
              code: "<section className='flex flex-col items-center py-20 px-4'>\n  <h1 className='text-4xl font-bold'>The Best Product</h1>\n  <button className='mt-6 px-8 py-3 bg-indigo-600 text-white rounded-full'>Get Started</button>\n</section>",
              language: "tsx",
              tasks: ["Design a homepage for a fictional restaurant.", "Use Tailwind grid or flex for layout."],
              homework: ["Submit your landing page link (if possible)."],
              beginnerFriendly: true
          },
          {
              id: "next-file-routing",
              title: "10. File-Based Routing: Easy Navigation",
              explanation: "Next.js ka sab se bara faida ye hai ke aap folder banate hain aur URL khud ban jata hai. Agar hum 'about' folder banayen to '/about' ka page ban jayega.",
              code: "/app\n  page.tsx        // URL: /\n  /about\n    page.tsx      // URL: /about\n  /contact\n    page.tsx      // URL: /contact",
              language: "bash",
              tasks: ["Create an 'about' folder inside the 'app' folder.", "Create a 'page.tsx' inside it."],
              homework: ["If I want a URL like '/contact', what should I do?"],
              beginnerFriendly: true
          },
          {
              id: "next-multiple-pages",
              title: "11. Creating Multiple Pages: Expansion",
              explanation: "Aik website mein sirf aik page nahi hota. Hum Home, About, aur Contact pages banayenge.",
              tasks: ["Create 3 different pages (Home, About, Contact).", "Add a unique heading to each page."],
              homework: ["Write down the importance of having multiple pages in SEO."],
              beginnerFriendly: true
          },
          {
              id: "next-navigation",
              title: "12. Navigation: The Link Component",
              explanation: "Pages ke darmiyan janay ke liye hum standard <a> tag use nahi karte, balkay Next.js ka <Link> component use karte hain taake website reload na ho.",
              code: "import Link from 'next/link';\n\n<Link href='/about'>Go to About</Link>",
              language: "tsx",
              tasks: ["Add links on Home page to go to About and Contact.", "Verify that the page doesn't reload when clicking."],
              homework: ["Why is <Link> faster than regular <a> tags?"],
              beginnerFriendly: true
          },
          {
              id: "next-layout",
              title: "13. Layout System: Persistent UI",
              explanation: "Layout file mein jo code likha jata hai wo saare pages pe show hota hai. Ye Header aur Footer ke liye best hai taake wo baar baar na likhna paray.",
              code: "export default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html>\n      <body>\n        <Navbar />\n        {children}\n        <Footer />\n      </body>\n    </html>\n  );\n}",
              language: "tsx",
              tasks: ["Add a 'Navbar' text inside the layout.tsx file.", "Observe how it appears on all pages."],
              homework: ["Where should common styles go in Next.js?"],
              beginnerFriendly: true
          },
          {
              id: "next-components-intro",
              title: "14. Components: Building Blocks",
              explanation: "Components chote code ke tukre hain jinhein hum baar baar use kar saktay hain. Jaise Button ya Card.",
              tasks: ["Identify what parts of a website can be made into components.", "Create a components folder."],
              homework: ["Why do we use components?"],
              beginnerFriendly: true
          },
          {
              id: "next-create-components",
              title: "15. Creating Real Components: Navbar & Button",
              explanation: "Ab hum aik alag file banayenge components ke liye aur usay pages pe call karenge.",
              code: "// components/Button.tsx\nexport default function MyButton() {\n  return <button className='btn-style'>Click Me</button>;\n}",
              language: "tsx",
              tasks: ["Create a 'Navbar' component.", "Import and use it inside layout.tsx."],
              homework: ["Try making a 'Footer' component."],
              beginnerFriendly: true
          },
          {
              id: "next-props",
              title: "16. Props: Passing Data",
              explanation: "Props (Properties) ke zariye hum components ko data bhejte hain taake wo different information show kar sakein.",
              code: "function Greeting({ name }: { name: string }) {\n  return <h1>Hello {name}</h1>;\n}\n\n// Usage:\n<Greeting name='Zubair' />",
              language: "tsx",
              tasks: ["Create a component that takes a 'title' prop.", "Pass different titles to the same component twice."],
              homework: ["What happens if we don't pass a required prop?"],
              beginnerFriendly: true
          },
          {
              id: "next-events",
              title: "17. Events: Interaction (onClick)",
              explanation: "User jab button click karta hai to hum koi action perform kar saktay hain using 'onClick'.",
              code: "<button onClick={() => alert('Hello')}>Click Me</button>",
              language: "tsx",
              tasks: ["Create a button that alerts your favorite color.", "Try a 'onMouseEnter' event."],
              homework: ["List 3 common events in TSX."],
              beginnerFriendly: true
          },
          {
              id: "next-client-directive",
              title: "18. 'use client' Directive: Interactive Mode",
              explanation: "Next.js by default Server Components use karta hai. Interaction (buttons, state) ke liye humein file ke top pe 'use client' likhna parta hai.",
              code: "\"use client\";\n\nimport { useState } from 'react';\n\nexport default function Interactive() {\n  return <button onClick={() => console.log('Hi')}>Click</button>;\n}",
              language: "tsx",
              tasks: ["Add 'use client' to any page that uses an onClick event.", "Read about Server vs Client components basic diff."],
              homework: ["Why can't we use clicks in Server Components?"],
              beginnerFriendly: true
          },
          {
              id: "next-state",
              title: "19. useState: The Memory of App",
              explanation: "State aik variable hai jo value yad rakhta hai. Agar humein counter banana ho to hum useState use karenge.",
              code: "const [count, setCount] = useState(0);\n\nreturn (\n  <div>\n    <p>Count: {count}</p>\n    <button onClick={() => setCount(count + 1)}>Add</button>\n  </div>\n);",
              language: "tsx",
              tasks: ["Create a counter that increases value on click.", "Create a state for a string (name)."],
              homework: ["What is the difference between a normal variable and State?"],
              beginnerFriendly: true
          },
          {
              id: "next-effect",
              title: "20. useEffect: Side Effects",
              explanation: "Ye hook tab chalta hai jab page load hota hai ya koi state change hoti hai. Ye data fetching ke liye use hota hai.",
              code: "useEffect(() => {\n  console.log(\"Component has mounted!\");\n}, []); // Empty array means run only once",
              language: "tsx",
              tasks: ["Console log 'Page Loaded' only once when component starts.", "Research dependency array in useEffect."],
              homework: ["What happens if we leave the dependency array empty?"],
              beginnerFriendly: true
          },
          {
              id: "next-forms",
              title: "21. Forms in Next.js: User Input",
              explanation: "HTML forms ki tarah hum Next.js mein inputs handle karte hain. Form submission ko handle karne ke liye onSubmit events use hotay hain.",
              code: "<form onSubmit={handleSubmit}>\n  <input type='text' />\n  <button type='submit'>Submit</button>\n</form>",
              language: "tsx",
              tasks: ["Create a simple form with one input field.", "Add a submit button."],
              homework: ["How to prevent page reload on form submit in Next.js?"],
              beginnerFriendly: true
          },
          {
              id: "next-controlled-inputs",
              title: "22. Controlled Inputs: Dynamic Forms",
              explanation: "Inputs ki value ko State se control karna professional tareeqa hai.",
              code: "const [val, setVal] = useState('');\n\n<input value={val} onChange={(e) => setVal(e.target.value)} />",
              language: "tsx",
              tasks: ["Connect an input field to a State variable.", "Show the typed text live on the screen as you type."],
              homework: ["Explain the 'onChange' event in inputs."],
              beginnerFriendly: true
          },
          {
              id: "next-mini-project",
              title: "23. Mini Project: Counter App",
              explanation: "Aik full-featured counter app banaiye jo increment (+), decrement (-), aur reset kare using components and state. Ye aapki basic React logic ko refresh karega Next.js ke context mein.",
              code: "\"use client\";\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div className='p-10 text-center'>\n      <h1 className='text-3xl font-bold'>{count}</h1>\n      <div className='mt-4 space-x-2'>\n        <button onClick={() => setCount(count + 1)} className='bg-green-500 p-2'>+</button>\n        <button onClick={() => setCount(count - 1)} className='bg-red-500 p-2'>-</button>\n        <button onClick={() => setCount(0)} className='bg-gray-500 p-2'>Reset</button>\n      </div>\n    </div>\n  );\n}",
              language: "tsx",
              tasks: ["Build the UI using components.", "Implement the logic using useState."],
              homework: ["Add a condition: if counter is zero, decrement button should be disabled."],
              beginnerFriendly: true
          },
          {
              id: "next-css",
              title: "24. Global CSS: Styling Your App",
              explanation: "Next.js mein blocks ke liye 'globals.css' file hoti hai jo pure project mein effects dikhati hai.",
              code: "/* globals.css */\nbody {\n  background-color: #f0f0f0;\n}\nh1 {\n  color: navy;\n}",
              language: "css",
              tasks: ["Change the background color of your app in globals.css.", "Style a heading using CSS classes."],
              homework: ["What is CSS Specificity?"],
              beginnerFriendly: true
          },
          {
              id: "next-dynamic-routing",
              title: "25. Dynamic Routing: Folder [id]",
              explanation: "Jab hamarey paas hazaron products hon, hum har kisi ke liye alag folder nahi banate balkay Dynamic folder [id] use karte hain.",
              code: "/app/blog/[id]/page.tsx\n\nexport default function Post({ params }: { params: { id: string } }) {\n  return <h1>Post ID: {params.id}</h1>;\n}",
              language: "tsx",
              tasks: ["Create a folder named [id] inside a 'blog' folder.", "Access the ID parameter in the page."],
              homework: ["Why do we use square brackets [] in folder names?"],
              beginnerFriendly: false
          },
          {
              id: "next-nested-routing",
              title: "26. Nested Routing: Multi-Level URLs",
              explanation: "Aik folder ke andar doosra folder URL structure banata hai jaise '/dashboard/settings'. Har folder ka apna page.tsx uska endpoint hota hai.",
              code: "/app\n  /dashboard\n    page.tsx        // URL: /dashboard\n    /settings\n      page.tsx      // URL: /dashboard/settings",
              language: "bash",
              tasks: ["Build a nested dashboard with 'profile' and 'security' pages.", "Connect them using Links."],
              homework: ["Draw a route tree for an e-commerce site."],
              beginnerFriendly: false
          },
          {
              id: "next-layout-adv",
              title: "27. Advanced Layouts: Nested Layouts",
              explanation: "Har page folder ka apna layout ho sakta hai jo sirf us folder aur uske children par apply hota hai.",
              code: "// app/dashboard/layout.tsx\nexport default function DashLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <div className='flex'>\n      <aside>Dashboard Sidebar</aside>\n      <main>{children}</main>\n    </div>\n  );\n}",
              language: "tsx",
              tasks: ["Create a specific layout for your dashboard section only.", "Verify that it doesn't affect the Home page."],
              homework: ["What is the order of layouts execution in Next.js?"],
              beginnerFriendly: false
          },
          {
              id: "next-loading",
              title: "28. Loading UI: Professional Feedback",
              explanation: "Jab data load ho raha ho, hum user ko 'Skeletons' ya loading spinner dikhate hain using 'loading.tsx' file.",
              code: "// loading.tsx\nexport default function Loading() {\n  return <p>Loading Content...</p>;\n}",
              language: "tsx",
              tasks: ["Create a loading.tsx file and see it in action.", "Design a simple CSS spinner."],
              homework: ["Why is user feedback important in slow networks?"],
              beginnerFriendly: false
          },
          {
              id: "next-error",
              title: "29. Error Handling: Graceful Recovery",
              explanation: "Agar page crash ho jaye, to 'error.tsx' use hota hai taake poori website band na ho. Ye hamesha aik Client Component hona chahiye.",
              code: "\"use client\";\n\nexport default function Error({ error, reset }: { error: Error; reset: () => void }) {\n  return (\n    <div>\n      <h2>Something went wrong!</h2>\n      <button onClick={() => reset()}>Try Again</button>\n    </div>\n  );\n}",
              language: "tsx",
              tasks: ["Create an error.tsx file.", "Add a 'Try Again' button using 'reset' function."],
              homework: ["Explain the 'Client Boundary' error handled by Next.js."],
              beginnerFriendly: false
          },
          {
              id: "next-data-fetching",
              title: "30. Data Fetching: APIs Connection",
              explanation: "Hamari app ko bahar ki dunya (Server) se jorna 'Data Fetching' hai using fetch() function.",
              code: "const res = await fetch('https://api.example.com/data');\nconst data = await res.json();",
              language: "tsx",
              tasks: ["Fetch list of users from 'JSONPlaceholder' API.", "Map through the data and show names on screen."],
              homework: ["What is an API?"],
              beginnerFriendly: false
          },
          {
              id: "next-api-basics",
              title: "31. API Routes: Creating Your Own Server",
              explanation: "Next.js mein hum apna backend bhi likh saktay hain using route.ts files.",
              code: "// app/api/hello/route.ts\nexport async function GET() {\n  return Response.json({ message: 'Success' });\n}",
              language: "tsx",
              tasks: ["Create an API route that returns 'Success'.", "Test your API in the browser."],
              homework: ["What are HTTP methods like GET and POST?"],
              beginnerFriendly: false
          },
          {
              id: "next-ssr-csr",
              title: "32. SSR vs CSR: Execution Power",
              explanation: "Server Side Rendering (SSR) mein data server par fetch hota hai aur tayyar HTML browser ko milti hai (SEO ke liye best). Client Side Rendering (CSR) mein browser data lata hai (Interactivity ke liye best).",
              code: "// SSR (Server Component)\nexport default async function ServerPage() {\n  const data = await fetchData(); // Runs on server\n  return <div>{data.name}</div>;\n}\n\n// CSR\n\"use client\";\n// Uses useEffect to fetch data on browser",
              language: "tsx",
              tasks: ["Research: Which one is better for a News Blog?", "Research: Which one is better for a Dashboard?"],
              homework: ["Explain SEO benefits of SSR."],
              beginnerFriendly: false
          },
          {
              id: "next-virtual-dom",
              title: "33. Virtual DOM: Reality Check",
              explanation: "React kaise baghair reload kiye changes ko detect karta hai? Ye 'Virtual DOM' ke concept se hota hai jo memory mein aik copy rakhta hai aur sirf zaroori parts update karta hai.",
              code: "// Conceptual Flow:\n// 1. Initial State -> Real DOM\n// 2. Change -> Virtual DOM Copy\n// 3. Diffing -> Compare V-DOM vs Real DOM\n// 4. Reconciliation -> Update only changed parts",
              language: "typescript",
              tasks: ["Read about DOM vs Virtual DOM online.", "Explain it in one simple sentence."],
              homework: ["Why is Virtual DOM faster?"],
              beginnerFriendly: false
          },
          {
              id: "next-blog-project",
              title: "34. Final Project: Dynamic Blog",
              explanation: "Aik complete blog banayein jisme dynamic routing aur API fetching use ho. Ye project aapne ab tak jo kuch seekha hai uska nichor hoga.",
              code: "// Basic Blog Page Structure\nexport default async function Blog() {\n  const posts = await getPosts();\n  return (\n    <div className='grid gap-4'>\n      {posts.map(post => (\n        <Link key={post.id} href={`/blog/${post.id}`}>\n          <Card title={post.title} />\n        </Link>\n      ))}\n    </div>\n  );\n}",
              language: "tsx",
              tasks: ["Create a list of blog posts.", "Make each post clickable to open a detail page."],
              homework: ["Add a comment section (mock) to each post."],
              beginnerFriendly: false
          },
          {
              id: "next-image-opt",
              title: "35. Image Optimization: Super-Fast Loading",
              explanation: "Next.js ka <Image> component photos ko automatic compress karta hai taake website fast ho.",
              code: "import Image from 'next/image';\n\n<Image src='/logo.png' width={200} height={100} alt='logo' />",
              language: "tsx",
              tasks: ["Replace all <img> tags with Next.js <Image> components.", "Add 'priority' attribute to hero image."],
              homework: ["Why is image size important for website speed?"],
              beginnerFriendly: false
          },
          {
              id: "next-performance",
              title: "36. Performance: Lighthouse Score",
              explanation: "Apni website ki speed check karna sikhien using Google Lighthouse audit. Targeted optimizations jaise Image sizing aur Font loading se score behtar hota hai.",
              code: "# Steps to audit:\n1. Open Chrome DevTools\n2. Go to 'Lighthouse' tab\n3. Click 'Analyze page load'",
              language: "bash",
              tasks: ["Run a Lighthouse audit on your local project.", "Try to fix one red warning."],
              homework: ["What factors affect the Performance score?"],
              beginnerFriendly: false
          },
          {
              id: "next-seo",
              title: "37. SEO Mastery: Ranking on Google",
              explanation: "Keywords, Meta titles, aur descriptions add karna sikhien Next.js Metadata API ke zariye.",
              code: "// page.tsx\nexport const metadata = {\n  title: 'Home Page',\n  description: 'Welcome to our site',\n};",
              language: "tsx",
              tasks: ["Add a dynamic title to your pages.", "Set a professional description."],
              homework: ["What is 'Headless SEO'?"],
              beginnerFriendly: false
          },
          {
              id: "next-deployment",
              title: "38. Deployment: Live on Internet",
              explanation: "Apni website ko dunya ko dikhane ke liye 'Vercel' pe upload karein. Vercel Next.js ka home hai aur deployment sirf 2 minute ka kaam hai.",
              code: "# Deployment flow:\n1. Move code to GitHub\n2. Import project in Vercel\n3. Deploy!",
              language: "bash",
              tasks: ["Connect your GitHub to Vercel.", "Deploy your project and share the live URL."],
              homework: ["What is a 'Deployment Pipeline'?"],
              beginnerFriendly: true
          },
          {
              id: "next-portfolio",
              title: "39. Project: Mega Portfolio",
              explanation: "Aik professional Developer Portfolio banaiye jisme saare modules ka knowledge use ho. Isme Tailwind, Framer Motion, aur Next.js components ka behtareen istemal karein.",
              code: "// components/Hero.tsx\nexport default function Hero() {\n  return (\n    <section className='h-screen flex items-center justify-center'>\n      <h1 className='text-6xl animate-bounce'>I build Web Apps</h1>\n    </section>\n  );\n}",
              language: "tsx",
              tasks: ["Design CV section.", "Add projects gallery.", "Include contact form."],
              homework: ["List 3 features that make a portfolio stand out."],
              beginnerFriendly: false
          },
          {
              id: "next-saas",
              title: "40. Project: Mini SaaS (Software as a Service)",
              explanation: "Aik aisi tool banaiye jo user ki madad kare (jaise Budget Tracker). Isme Database (Firebase/Supabase) connection aur Subscription logic add karein.",
              code: "// Example: Connect to a DB\nexport async function getSubscription(userId: string) {\n  const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);\n  return user.plan;\n}",
              language: "typescript",
              tasks: ["Define a problem.", "Build a Next.js solution."],
              homework: ["Research 3 successful SaaS products built with Next.js."],
              beginnerFriendly: false
          },
          {
              id: "next-auth",
              title: "41. Authentication: Login Basics",
              explanation: "User login kaise hota hai? NextAuth.js (Auth.js) ya Clerk jaise tools se hum Google aur GitHub login asani se add kar saktay hain.",
              code: "// Clerk Setup Example\nimport { SignInButton, UserButton } from '@clerk/nextjs';\n\n<SignInButton />\n<UserButton />",
              language: "tsx",
              tasks: ["Research Clerk or NextAuth libraries.", "Understand what a Session is."],
              homework: ["Why is security important in Login forms?"],
              beginnerFriendly: false
          },
          {
              id: "next-env",
              title: "42. Environment Variables: Hiding Secrets",
              explanation: "Apne passwords aur API keys ko chupane ke liye .env file use karein.",
              code: "// .env.local\nAPI_KEY=12345\n\n// Usage:\nprocess.env.API_KEY",
              language: "typescript",
              tasks: ["Create a .env.local file.", "Access a variable in your code using process.env."],
              homework: ["Why shouldn't we push .env files to GitHub?"],
              beginnerFriendly: false
          },
          {
              id: "next-clean-code",
              title: "43. Clean Code: Industry Standards",
              explanation: "Refactoring, Prettier, aur ESLint use karna sikhien taake code professional lagay aur team ke liye parhna asaan ho.",
              code: "# Run Linter\nnpm run lint\n\n# Format code\nnpx prettier --write .",
              language: "bash",
              tasks: ["Run 'npm run lint' in your project.", "Fix any errors found by linter."],
              homework: ["Why is clean code important for team work?"],
              beginnerFriendly: true
          },
          {
              id: "next-freelancing",
              title: "44. Success: Freelancing & Career Guide",
              explanation: "Ab aap tayyar hain. Fiverr aur Upwork pe client kaise dhoondein aur paise kaise kamayein. Aik achi proposal kaise likhi jati hai?",
              code: "Proposal Template:\n'Hi, I noticed you need a Next.js Landing Page. \nI specialize in fast, SEO-friendly sites \nusing Tailwind and Next.js. Let\\'s discuss!'",
              language: "markdown",
              tasks: ["Look for 'Next.js' jobs on Upwork.", "Write a sample proposal for a Next.js Landing Page."],
              homework: ["Write down your personal goal for the next 6 months."],
              beginnerFriendly: true
        }
      ]
  },
  {
      id: "spec-driven-dev",
      title: "Module 6: Spec-Driven Development (Speckit+ & Gemini CLI)",
      topics: [
          {
              id: "sd-intro",
              title: "01. What is Spec-Driven Development? 📘",
              explanation: "Spec-Driven Development (SDD) ka matlab hai coding shuru karne se pehle poori planning aur documentation (Spec) taiyar karna. Ye wahi tareeqa hai jo dunya ki bari companies use karti hain taake coding ke doran confusion na ho.",
              example: "Jaise building ban-nay se pehle uska 'Naksha' (Map) banta hai, wese hi app ban-nay se pehle uski 'Spec' (Specification) banti hai.",
              tasks: ["Google search karein: 'Software Specification Document example'.", "Apni pasand ki kisi app ke 5 main features ki list banayein."],
              homework: ["Explain why writing a plan is better than starting code directly."],
              beginnerFriendly: true
          },
          {
              id: "sd-why",
              title: "02. Why Spec-Driven Development? 🚀",
              explanation: "Iske do main faide hain: 1) Clear Direction - Aapko pata hota hai ab agla qadam kya hai, 2) Less Bugs - Planning ki wajah se mistakes kam hoti hain aur logic strong hota hai.",
              tasks: ["List 3 problems that occur when coding without a plan.", "Identify a bug you faced before that could have been avoided by planning."],
              homework: ["Write a short note on 'Thinking before Coding'."],
              beginnerFriendly: true
          },
          {
              id: "sd-vibe-vs-spec",
              title: "03. Vibe Coding vs Spec-Driven 🌊",
              explanation: "Vibe coding ka matlab hai random guess lagana aur bina soche samjhe code likhna. Spec-Driven coding 'Structured' hoti hai jahan har line ka aik maqsad hota hai.",
              example: "Achanak se kitchen mein ja kar jo samne aye pakka lena 'Vibe Cooking' hai, lekin Recipe dekh kar procedure follow karna 'Spec-Driven' hai.",
              tasks: ["Difference table banayein: Vibe vs Structured Coding.", "Think of a project where you 'vibed' and it failed later."],
              homework: ["Which approach is more scalable for a team of 10 developers?"],
              beginnerFriendly: true
          },
          {
              id: "sd-speckit-intro",
              title: "04. Introduction to Speckit+ 🛠️",
              explanation: "Speckit+ aik advanced system hai jo AI aur Specifications ko mila kar development ko fast karta hai. Ye aapko 'Constitution' (Rules) aur 'Specify' (Logic) ke concepts sikhata hai.",
              tasks: ["Check the official Speckit+ concept (if available) or research 'AI Spec Tools'.", "Understand the concept of 'Context' in AI coding."],
              homework: ["How can an AI help in writing better specs?"],
              beginnerFriendly: true
          },
          {
              id: "sd-speckit-setup",
              title: "05. Setup Speckit+ ⚙️",
              explanation: "Speckit+ ko install karna aur apne project mein configuration files (Constitution) set karna bohot asaan hai. Ye aapke local VS Code ko 'Superpower' de deta hai.",
              code: "# Typical Setup (Example Commands):\nnpm install -g speckit\nspeckit init",
              language: "bash",
              tasks: ["Speckit init command chala kar check karein (agar installed ho).", "Config files ko analyze karein."],
              homework: ["Search: What is a .constitution file?"],
              beginnerFriendly: true
          },
          {
              id: "sd-gemini-cli-intro",
              title: "06. What is Gemini CLI? 🤖",
              explanation: "Gemini CLI aik free aur powerful command-line tool hai jo Google ke Gemini AI ko direct aapke terminal se connect karta hai. Ab aap code likhte waqt terminal se hi sawal pouch saktay hain.",
              example: "Ye aisa hi hai jaise aapke terminal mein aik senior developer betha ho jo aapki bar waqt madad kare.",
              tasks: ["Find out the latest version of Gemini CLI.", "Read about API keys functionality for AI tools."],
              homework: ["Why is a CLI faster than using a website chatbot?"],
              beginnerFriendly: true
          },
          {
              id: "sd-gemini-cli-install",
              title: "07. Install Gemini CLI 📥",
              explanation: "Gemini CLI setup karne ke liye hamain Node.js zaroori hai. Iske baad API key set karni parti hai taake computer Google ke AI se baat kar sake.",
              code: "# Install Gemini CLI:\nnpm install -g @google/generative-ai-cli\n\n# Set API Key (Variable):\nexport GEMINI_API_KEY='YOUR_KEY_HERE'",
              language: "bash",
              tasks: ["Install the CLI tool globally.", "Verify installation using 'gemini --version'."],
              homework: ["Get your free Gemini API Key from Google AI Studio."],
              beginnerFriendly: true
          },
          {
              id: "sd-connect-tools",
              title: "08. Connect Speckit + Gemini 🔗",
              explanation: "Asli maza tab ata hai jab hum Speckit+ (The Planner) ko Gemini (The Brain) ke sath connect karte hain. Is se complete automated workflow tayyar hota hai.",
              tasks: ["Configure Speckit to use Gemini as the backend engine.", "Test a simple 'hello' query through the integrated system."],
              homework: ["Explain the benefit of integrated AI over copy-pasting code."],
              beginnerFriendly: false
          },
          {
              id: "sd-first-spec",
              title: "09. First Spec Creation 📝",
              explanation: "Ab hum apni pehli real-world Spec likhenge. Isme App ka vision, features, aur user flow define kiya jata hai.",
              tasks: ["Write a 1-page spec for a 'Todo List App'.", "Define input fields and expected output behavior."],
              homework: ["Break down your Todo app into 5 smaller sub-tasks."],
              beginnerFriendly: true
          },
          {
              id: "sd-workflow-mastery",
              title: "10. COMPLETE SPEC WORKFLOW ⭐",
              explanation: "Ye hai professional development ka nichor! Is workflow ko follow kar ke aap complex apps asani se bana saktay hain:\n\n✔ **SP.CONSTITUTION**: Rules set karna (e.g., 'Use Tailwind only').\n✔ **SP.SPECIFY**: Core logic aur requirements define karna.\n✔ **SP.PLAN**: File structure aur architecture plan karna.\n✔ **SP.TASK**: Kaam ko chote manageable tasks mein todna.\n✔ **SP.IMPLEMENT**: AI ki madad se coding karna.\n\nNote: Har step perfect hone ke baad hi aglay pe jana lazmi hai.",
              example: "Code Pic: Aik aisi tasveer jahan Constitution se Implement tak ka sara safar nazar aaye.",
              tasks: ["Complete Task: Ek full-stack spec likho apne dream project ke liye.", "Follow all 5 'SP' steps sequence mein."],
              homework: ["Record a short video explaining your spec to a friend."],
              beginnerFriendly: false
          }
      ]
  }
];

export const PYTHON_AI_COURSE: Module[] = [
  {
    id: "py-foundation-part1",
    title: "Phase 1: Python Foundation (Part 1)",
    topics: [
      {
        id: "ch0-linkedin",
        title: "00. LinkedIn: Your Professional Identity 💼",
        explanation: "LinkedIn dunya ka sab se bara professional network hai jahan dunya bhar ke developers, recruiters aur founders mojood hain. Yahan apni profile banana aur rozana jo aap seekh rahe hain (journey) wo share karna bohot zaroori hai. Is se aapko future mein jobs aur freelancing clients milne mein asani hogi. Yaad rakhein: 'Jo dikhta hai, wo bikta hai!'",
        example: "Real Life: LinkedIn aapka digital Resume hai jo 24/7 dunya ko aapki skills dikhata rehta hai bina aapke bataye.",
        tasks: ["LinkedIn profile banayein (agar nahi hai).", "Apni headline mein 'Python & AI Trainee @ Khipro Academy' likhein.", "Pehli post share karein: 'Excited to start my Python + AI journey! 🚀'"],
        homework: ["Weekly progress share karne ka schedule banayein."],
        beginnerFriendly: true
      },
      {
        id: "ch1-intro",
        title: "01. Introduction to Python",
        explanation: "Python ek bohot hi asaan aur powerful programming language hai jo 1991 mein Guido van Rossum ne ijaad ki. Ye 'High-level' language hai, yani iska code insani zaban (English) se milta julta hai. Python dunya mein Data Science, AI, Web Development, aur Automation ke liye sab se zyada use hoti hai.",
        example: "Jaise English seekhne ke liye alphabet zaroori hain, wese hi digital dunya se baat karne ke liye Python ek behtareen zariya hai.",
        tasks: ["Python ki history search karein.", "3 bari apps ke naam likhein jo Python mein bani hain."],
        homework: ["Write 5 benefits of Python for beginners."],
        beginnerFriendly: true
      },
      {
        id: "ch2-setup",
        title: "02. Installing Python & VS Code",
        explanation: "Python ko use karne ke liye aapko official website 'python.org' se installer download karna hota hai. Uske baad 'VS Code' install karein, jo ek professional code editor hai jahan aap apna code likhein ge.",
        tasks: ["Python install karein.", "VS Code mein 'Python' extension install karein."],
        homework: ["Take a screenshot of your VS Code with a Python file open."],
        beginnerFriendly: true
      },
      {
        id: "ch3-hello",
        title: "03. Hello World Program",
        explanation: "Har programmer ka pehla qadam 'Hello World' print karna hota hai. Python mein hum 'print()' function use karte hain jo screen pe message dikhata hai.",
        code: "print('Hello World! Python is awesome.')",
        language: "python",
        tasks: ["Apna naam print karein.", "Do alag alag lines pe messages print karein."],
        homework: ["What is the purpose of quotes in print()?"],
        beginnerFriendly: true
      },
      {
        id: "ch4-vars",
        title: "04. Variables",
        explanation: "Variables dabba (containers) ki tarah hote hain jin mein hum data save karte hain. Python 'Dynamic Typing' support karta hai, yani aapko variable ki type batane ki zaroorat nahi parti.",
        code: "name = 'Sami'\nage = 18\nprint(name, age)",
        language: "python",
        tasks: ["Age aur City ke liye variables banayein.", "Variable ki value change kar ke print karein."],
        homework: ["Write rules for naming variables in Python."],
        beginnerFriendly: true
      },
      {
        id: "ch5-types",
        title: "05. Data Types",
        explanation: "Python mein main 4 data types hain: \n1. String (Text)\n2. Integer (Pura number)\n3. Float (Decimal wala number)\n4. Boolean (True/False).",
        code: "x = 'Hello' # str\ny = 10      # int\nz = 10.5    # float\na = True    # bool",
        language: "python",
        tasks: ["Har type ka ek variable banayein.", "type() function use kar ke check karein."],
        homework: ["Can a variable hold multiple data types at once? Research it."],
        beginnerFriendly: true
      },
      {
        id: "ch6-casting",
        title: "06. Type Casting",
        explanation: "Type casting ka matlab hai ek data type ko doosri mein badalna. Jaise string '10' ko number 10 mein badalna.",
        code: "age = '18'\nage_num = int(age)\nprint(age_num + 2)",
        language: "python",
        tasks: ["Float ko Integer mein badlein.", "Number ko String mein badal kar message banayein."],
        homework: ["What happens if you cast 'abc' to int?"],
        beginnerFriendly: true
      },
      {
        id: "ch7-io",
        title: "07. Input & Output",
        explanation: "User se baat karne ke liye 'input()' use hota hai. Ye hamesha data ko 'string' mein leta hai, is liye maths ke liye casting zaroori hai.",
        code: "name = input('Enter name: ')\nprint('Welcome ' + name)",
        language: "python",
        tasks: ["User se age puchein aur 10 saal baad ki age print karein.", "Do numbers input lein aur unka sum nikalyein."],
        homework: ["How to take input in the same line as prompt?"],
        beginnerFriendly: true
      },
      {
        id: "ch8-ops",
        title: "08. Operators",
        explanation: "Operators calculations aur comparisons ke liye hote hain. +, -, *, / (Arithmetic), ==, !=, >, < (Comparison), and, or, not (Logical).",
        code: "a = 10\nb = 3\nprint(a % b) # Remainder\nprint(a // b) # Floor Division",
        language: "python",
        tasks: ["Rectangle ka area calculate karein length aur width se.", "Comparison operators ki help se age check karein."],
        homework: ["Difference between / and //?"],
        beginnerFriendly: true
      },
      {
        id: "ch9-conditions",
        title: "09. Conditional Statements",
        explanation: "if, else, aur elif decisions lene ke liye use hote hain. Indentation (space) ka khayal rakhna Python mein bohot zaroori hai.",
        code: "score = 85\nif score >= 90: print('A+')\nelif score >= 80: print('A')\nelse: print('Pass')",
        language: "python",
        tasks: ["Even/Odd number check karne wala code likhein.", "Grade system banayein 5 levels ka."],
        homework: ["What is Nested If?"],
        beginnerFriendly: true
      },
      {
        id: "ch10-loops",
        title: "10. Loops",
        explanation: "Baar baar hone wale kaamon ke liye Loops use hote hain. for loop counting ke liye aur while loop condition ke liye.",
        code: "for i in range(1, 6):\n    print(i)\n\nx = 0\nwhile x < 3:\n    print('Looping...')\n    x += 1",
        language: "python",
        tasks: ["2 ka table print karein 10 tak.", "Numbers 10 se 1 tak reverse print karein."],
        homework: ["Difference between break and continue?"],
        beginnerFriendly: true
      },
      {
        id: "milestone-1-2",
        title: "🚀 Milestone Projects (Ch 1-10)",
        explanation: "Pehle 10 chapters ka nichor! Ab hum real-world logic apply karein ge.",
        tasks: [
          "👨‍🏫 Project 1 (Teacher Build): Basic Calculator - Input/Output aur Operators use kar ke logic banayein.",
          "👨‍🎓 Project 2 (Student Task): Number Guessing Game - Loops aur Conditions use kar ke user ko guess karne ka mauka dein."
        ],
        homework: ["Calculator mein 'Divide by Zero' handle karne ki koshish karein.", "Guessing game mein 'Tries' count add karein."],
        beginnerFriendly: true
      }
    ]
  },
  {
    id: "py-foundation-part2",
    title: "Phase 1: Python Foundation (Part 2)",
    topics: [
      {
        id: "ch11-functions",
        title: "11. Functions (Types & Power)",
        explanation: "Functions code ko reusable banate hain. Python mein 3 main types hain:\n1. **Built-in Functions:** Jo Python mein pehle se hain (e.g., print(), len(), type()).\n2. **User-Defined Functions:** Jo hum khud banate hain (def keyword se).\n3. **Lambda Functions:** Aik line wale short functions.\n\nUse Case: Jab aapko koi logic (jaise Tax calculation) poori app mein 50 jagah use karni ho, to function banayein taake har jagah code na likhna paray.",
        example: "Real Life: 'Juice Machine' (Built-in), 'Dadi ka Nuskha' (User-defined - specific logic), aur 'Quick Snack' (Lambda - fast & small).",
        code: "# 1. User-Defined Function\ndef calculate_tax(salary):\n    return salary * 0.1\n\n# 2. Lambda Function (Short & Anonymous)\nadd_simple = lambda x, y: x + y\n\nprint(f'Tax: {calculate_tax(50000)}')\nprint(f'Sum: {add_simple(5, 10)}')\nprint(len('Hello')) # Built-in",
        language: "python",
        tasks: ["Aik built-in function 'max()' use kar ke list se largest number nikalyein.", "Lambda function banayein jo number ka cube (x*x*x) nikalay.", "User-defined function banayein jo user se marks le mazeed logic ke liye."],
        homework: ["What are Recursive functions in Python?"],
        beginnerFriendly: true
      },
      {
        id: "ch12-lists",
        title: "12. Lists (The Shopping Cart)",
        explanation: "List aik aisi cheez hai jahan aap bohot saara data aik hi variable mein store kar saktay hain. Ye 'ordered' hoti hai, yani har item ka aik index (number) hota hai jo 0 se start hota hai.",
        example: "Real Life: Grocery List ya Mobile Contacts. Aap items add kar saktay hain, nikal saktay hain, ya change kar saktay hain.",
        code: "students = ['Ali', 'Sami', 'Hassan']\nstudents.append('Zaid') # Naya item add karein\nprint(students[1]) # 'Sami' print hoga",
        language: "python",
        tasks: ["5 fruits ki list banayein aur replace karein 2nd item ko 'Pineapple' se.", "List ko reverse order mein print karein."],
        homework: ["How to find the length of a list using a function?"],
        beginnerFriendly: true
      },
      {
        id: "ch13-tuples",
        title: "13. Tuples (Locked Data)",
        explanation: "Tuples bilkul lists jaisi hoti hain magar ye 'Immutable' hoti hain, yani banane ke baad aap inhein change nahi kar saktay. Ye un cheezon ke liye use hoti hain jo fix rehti hain.",
        example: "Real Life: Haftay ke dino ke naam (Mon, Tue...) ya Coordinates (Latitude, Longitude). Inhein koi accidentally change na kar sake is liye tuple best hai.",
        code: "coordinates = (24.8607, 67.0011)\n# coordinates[0] = 25.0 # Error aye ga kyun ke change nahi ho sakta",
        language: "python",
        tasks: ["Aik tuple banayein jis mein 7 colors ke naam hon.", "Check karein ke tuple mein 'Red' exist karta hai ya nahi."],
        homework: ["Why is Tuple faster than List in Python?"],
        beginnerFriendly: true
      },
      {
        id: "ch14-dicts",
        title: "14. Dictionaries (Digital Library)",
        explanation: "Dictionary mein hum data 'Key-Value' pairs mein store karte hain. Aap key dete hain aur aapko uska data (value) mil jata hai. Ye bohot fast hoti hai search karne ke liye.",
        example: "Real Life: Mobile Phone Contact List. Name (Key) hai aur Number (Value) hai. Ya aik Car jis ki properties hon (Brand: Toyota, Model: 2024).",
        code: "car = {\n    'brand': 'Toyota',\n    'model': 'Corolla',\n    'year': 2024\n}\nprint(car['brand'])",
        language: "python",
        tasks: ["Student profile dict banayein (name, roll_no, marks).", "Dict mein aik naya key 'city' add karein."],
        homework: ["How to remove a key from a dictionary?"],
        beginnerFriendly: true
      },
      {
        id: "ch15-sets",
        title: "15. Sets (Unique Only)",
        explanation: "Sets aisi collection hain jin mein 'Duplicates' allowed nahi hotay. Agar aap aik hi value do dafa dalein ge, to wo aik hi count hogi. Inka koi order nahi hota.",
        example: "Real Life: Unique User IDs in a system. Agar aik hi user do dafa sign-up karne ki koshish kare, to set use unique hi rakhe ga.",
        code: "ids = {101, 102, 103, 101}\nprint(ids) # Results: {101, 102, 103}",
        language: "python",
        tasks: ["List of numbers se duplicates nikalne ke liye set use karein.", "Check karein ke set indexing support karta hai ya nahi."],
        homework: ["What is the difference between set.add() and set.update()?"],
        beginnerFriendly: true
      },
      {
        id: "ch16-string-methods",
        title: "16. String Methods (Text Magic)",
        explanation: "Strings pe aap bohot saare built-in functions apply kar saktay hain. Aap text ko bara ya chota kar saktay hain, kisi word ko dhoond kar replace kar saktay hain, ya text ko gaps nikal saktay hain.",
        example: "Real Life: Jab aap password set karte hain to system spaces nikal deta hai (strip) ya check karta hai ke sirf letters hain ya nahi.",
        code: "msg = '  python is awesome  '\nprint(msg.strip().upper()) # 'PYTHON IS AWESOME'\nprint(msg.replace('awesome', 'great'))",
        language: "python",
        tasks: ["Apne naam ko Capital letters mein badlein.", "Aik sentence se 'bad' word ko 'good' se replace karein."],
        homework: ["What does .split() do in a string?"],
        beginnerFriendly: true
      },
      {
        id: "ch17-files",
        title: "17. File Handling (Memory)",
        explanation: "Abhi tak jo hum coding kar rahe hain wo programme band hone pe khatam ho jati hai. File Handling humein data ko computer ki memory (Permanent Storage) mein save karne ki ijazat deta hai.",
        example: "Real Life: Aik game save karna ya notepad mein note likhna. 'w' for Write, 'r' for Read, 'a' for Append (agey jorna).",
        code: "with open('data.txt', 'w') as f:\n    f.write('I am learning AI from Khipro Academy!')",
        language: "python",
        tasks: ["Aik program likhein jo user se 5 lines le aur file mein save kare.", "File read kar ke screen pe display karein."],
        homework: ["What is the advantage of using 'with' keyword?"],
        beginnerFriendly: false
      },
      {
        id: "ch18-exceptions",
        title: "18. Exception Handling (Anti-Crash)",
        explanation: "Agar aapka code wrong input le ya zero se divide ho jaye, to programme crash (error) deta hai. Try/Except se hum system ko crash hone se bacha saktay hain aur user ko tameez se message dikha saktay hain.",
        example: "Real Life: Internet disconnecting while downloading—app crash nahi hoti balkay kehti hai 'Retry'.",
        code: "try:\n    num = int(input('Enter number: '))\n    print(10/num)\nexcept ZeroDivisionError:\n    print('Aap Zero se divide nahi kar saktay!')\nexcept ValueError:\n    print('Sirf numbers likhein!')",
        language: "python",
        tasks: ["Aik code likhein jo 'File Not Found' error ko catch kare.", "User input validation banayein loops aur try-except ke saath."],
        homework: ["Can we have multiple 'except' blocks for one 'try'?"],
        beginnerFriendly: false
      },
      {
        id: "ch19-modules",
        title: "19. Modules & Packages",
        explanation: "Module bani-banayi files hoti hain jin mein functions pehle se likhay hotay hain (e.g., Math operations, Random numbers). 'pip' tool se dunya bhar ke programmers ki libraries install ki jati hain.",
        example: "Real Life: Jaise LEGO blocks—aap market se (pip) blocks laate hain aur apni building mein use karte hain.",
        code: "import random\nprint(random.randint(1, 100)) # 1 se 100 tak koi bhi random number",
        language: "python",
        tasks: ["'math' module se square root nikalyein.", "Random module se 'Heads' ya 'Tails' wala game banayein."],
        homework: ["How to create your own custom module in Python?"],
        beginnerFriendly: false
      },
      {
        id: "ch20-venv",
        title: "20. Virtual Environment (Safe Zone)",
        explanation: "Agar aap aik project mein purani library use kar rahe hain aur doosre mein nayi, to versions clash honge. Venv har project ke liye alag environment (kamra) bana deta hai.",
        example: "Real Life: Jaise lab mein different Chemicals ko alag rkhna taake clash na hon.",
        code: "# Create: python -m venv my_ai_env\n# Activate: my_ai_env\\Scripts\\activate",
        language: "bash",
        tasks: ["Naya venv banayein aur us mein 'requests' library install karein.", "pip list command se libraries check karein."],
        homework: ["Why should we avoid global installations of libraries?"],
        beginnerFriendly: false
      },
      {
        id: "milestone-3-4",
        title: "🚀 Milestone Projects (Ch 11-20)",
        explanation: "Data Structures aur File handling ko real projects mein use karne ka waqt!",
        tasks: [
          "👨‍🏫 Project 3 (Teacher Build): Todo List App - Lists aur File Handling use kar ke tasks save karein.",
          "👨‍🎓 Project 4 (Student Task): Student Record System - Dictionaries aur Exception handling use kar ke student data manage karein."
        ],
        homework: ["Todo list mein 'Timestamp' add karein.", "Student system mein 'Search' feature banayein."],
        beginnerFriendly: false
      }
    ]
  },
  {
    id: "py-oop-projects",
    title: "Phase 2: Logic & OOP",
    topics: [
      {
        id: "ch21-oop-intro",
        title: "21. Object Oriented Programming (OOP)",
        explanation: "OOP aik aisa tareeqa hai jahan hum code ko real-world items ki tarah deal karte hain. 'Class' aik naksha (blueprint) hota hai aur 'Object' us nakshe se bani hui asli cheez.",
        example: "Real Life: 'Car' aik class hai (jis mein tires, engine hota hai), magar 'Apki Mehran' aik object hai.",
        code: "class Robot:\n    def speak(self):\n        print('Hello, I am a Robot!')\n\nmy_robot = Robot()\nmy_robot.speak()",
        language: "python",
        tasks: ["Aik 'Student' class banayein jo 'study' kar sake.", "Class se do different objects banayein."],
        homework: ["Difference between Class and Object?"],
        beginnerFriendly: false
      },
      {
        id: "ch22-init",
        title: "22. Constructor (__init__)",
        explanation: "Constructor tab trigger hota hai jab object banta hai. Ye properties (jaise name, color, age) ko set karne ke liye use hota hai taake har object ka apna data ho.",
        example: "Real Life: Jab bacha paida hota hai to uska naam rakha jata hai—yani initialize kiya jata hai.",
        code: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np1 = Person('Ali', 20)\nprint(p1.name)",
        language: "python",
        tasks: ["Class 'Mobile' banayein with brand aur price in constructor.", "Object banayein aur details display karein."],
        homework: ["What is the purpose of 'self' in Python classes?"],
        beginnerFriendly: false
      },
      {
        id: "ch23-inheritance",
        title: "23. Inheritance (Virasaat)",
        explanation: "Aik class doosri class ki khasiyat (properties) adopt kar sakti hai. Is se code repeat nahi karna parta.",
        example: "Real Life: Bachay apne maa-baap se features (height, eye color) inherit karte hain.",
        code: "class Animal:\n    def eat(self): print('Eating...')\n\nclass Dog(Animal):\n    def bark(self): print('Woof!')\n\nmy_dog = Dog()\nmy_dog.eat() # Parent method",
        language: "python",
        tasks: ["'Vehicle' parent class aur 'Bike' child class banayein.", "Child class mein aik unique property add karein."],
        homework: ["What is Multi-level Inheritance?"],
        beginnerFriendly: false
      },
      {
        id: "ch24-encapsulation",
        title: "24. Encapsulation (Security)",
        explanation: "Data ko makhsoos (private) banana taake bahar se koi ghalti se use tabdeel na kar sake. Double underscore (__) use hota hai.",
        example: "Real Life: Bank Account balance. Aap balance check kar saktay hain magar direct change nahi kar saktay baghair permission ke.",
        code: "class Bank:\n    def __init__(self):\n        self.__balance = 1000 # Private\n\n    def show_balance(self): return self.__balance\n\nmy_bank = Bank()\nprint(my_bank.show_balance())",
        language: "python",
        tasks: ["Private variable '__password' wali class banayein.", "Method banayein jo password check kare."],
        homework: ["Difference between Public and Private members?"],
        beginnerFriendly: false
      },
      {
        id: "ch25-polymorphism",
        title: "25. Polymorphism (Multiple Forms)",
        explanation: "Aik hi naam ka kaam magar result alag alag. Yani different classes mein same function name magar logic alag.",
        example: "Real Life: 'Speak' function—insan bole ga, kutta bhonkay ga, aur billi meow kare gi. Sab bol rahe hain magar tarika alag hai.",
        code: "class Cat: \n    def speak(self): return 'Meow'\nclass Dog: \n    def speak(self): return 'Woof'\n\nanimals = [Cat(), Dog()]\nfor a in animals: print(a.speak())",
        language: "python",
        tasks: ["Shape class banayein with 'area()' function and override in Circle/Square.", "Explain polymorphism with a real-world example."],
        homework: ["What is Method Overriding?"],
        beginnerFriendly: false
      },
      {
        id: "ch26-logic-projects",
        title: "26. Project: ATM & Quiz Logic",
        explanation: "Ab logic ka asli imtehan hai! Hum loops, conditions aur variables ko use kar ke real systems banayein ge.",
        tasks: ["ATM Machine code likhein (Check balance, Withdraw, Deposit).", "Aik interactive Quiz app banayein jo end mein correct answers count kare."],
        homework: ["Draw a flowchart of ATM logic."],
        beginnerFriendly: true
      }
    ]
  },
  {
    id: "py-streamlit-section",
    title: "Phase 3: Streamlit Web Apps",
    topics: [
      {
        id: "ch27-st-intro",
        title: "27. What is Streamlit? (Easy Web)",
        explanation: "Streamlit dunya ka sab se asaan framework hai Python developers ke liye web apps banane ka. Aapko HTML, CSS, ya JavaScript seekhne ki koi zaroorat nahi.",
        example: "Real Life: Agar aap ne koi Machine Learning model banaya hai aur aap chahte hain ke apka dost use website pe use kare, to Streamlit 5 line mein ye kar de ga.",
        tasks: ["Streamlit documentation visit karein.", "3 features likhein jo Streamlit ko fast banate hain."],
        homework: ["Search: Who created Streamlit?"],
        beginnerFriendly: true
      },
      {
        id: "ch28-st-install",
        title: "28. Install Streamlit",
        explanation: "Installation bohot asaan hai. Bas 'pip install streamlit' karein aur check karne ke liye 'streamlit hello' terminal mein likhein.",
        code: "pip install streamlit\n# Run demo:\nstreamlit hello",
        language: "bash",
        tasks: ["Streamlit install karein venv mein.", "Demo dashboard browse karein jo screen pe aye ga."],
        homework: ["Check your streamlit version using terminal."],
        beginnerFriendly: true
      },
      {
        id: "ch29-st-first",
        title: "29. First Streamlit App",
        explanation: "Streamlit mein UI elements add karna itna hi asaan hai jitna print statement likhna. 'st.title' website ka title banata hai aur 'st.write' text likhta hai.",
        code: "import streamlit as st\nst.title('My First AI App')\nst.subheader('Built with Python')\nst.write('Welcome to the world of Streamlit!')",
        language: "python",
        tasks: ["App banayein jis mein apka Bio data display ho.", "Image add karne ke liye st.image scan karein."],
        homework: ["How to run a specific .py file in Streamlit?"],
        beginnerFriendly: true
      },
      {
        id: "ch30-st-inputs",
        title: "30. User Inputs (Interaction)",
        explanation: "Website ko interactive banane ke liye inputs zaroori hain. Streamlit mein forms, buttons, aur text boxes aik function se ban jate hain.",
        example: "Real Life: Login form ya search bar.",
        code: "name = st.text_input('Enter your name')\nif st.button('Submit'):\n    st.success(f'Hello {name}!')",
        language: "python",
        tasks: ["Aik form banayein jo Name, Age aur Country puche.", "Submit button pe user ki details summary dikhayein."],
        homework: ["What is the difference between st.text_input and st.text_area?"],
        beginnerFriendly: true
      },
      {
        id: "milestone-5-6",
        title: "🚀 Milestone Projects (Ch 21-30)",
        explanation: "OOP and Streamlit Web UI integration!",
        tasks: [
          "👨‍🏫 Project 5 (Teacher Build): Weather Web App - Streamlit UI aur Weather API connection.",
          "👨‍🎓 Project 6 (Student Task): Streamlit Calculator - Dashboard UI ke saath advance functions."
        ],
        homework: ["Weather app mein 'Search History' add karein.", "Calculator mein calculation history sidebar mein dikhayein."],
        beginnerFriendly: true
      },
      {
        id: "ch31-st-layout",
        title: "31. Layout & Design (Sidebar & Columns)",
        explanation: "Professional apps mein data side by side hota hai ya menus side per hotay hain. Streamlit mein 'st.sidebar' aur 'st.columns' se ye design banta hai.",
        code: "with st.sidebar:\n    st.header('Settings')\n    st.radio('Choose Theme', ['Light', 'Dark'])\n\ncol1, col2 = st.columns(2)\ncol1.write('Left Content')\ncol2.write('Right Content')",
        language: "python",
        tasks: ["Sidebar mein profile picture aur menu banayein.", "Dashboard layout banayein jis mein 3 columns hon metrics ke liye."],
        homework: ["Search: How to use st.tabs in Streamlit?"],
        beginnerFriendly: true
      },
      {
        id: "ch32-st-calc",
        title: "32. Project: Smart Calculator Web",
        explanation: "Ab hum CLI (terminal) calculator ko aik asli Web App mein badlein ge. User numbers select kare ga aur button click karte hi result aye ga.",
        tasks: ["st.number_input use kar ke do numbers lein.", "Dropdown (st.selectbox) se Operation (+, -, *, /) select karwayein.", "Result ko baray font mein display karein."],
        homework: ["Add a 'Reset' button to clear inputs."],
        beginnerFriendly: true
      },
      {
        id: "ch33-st-upload",
        title: "33. File Upload & Processing",
        explanation: "Asli AI apps files pe kaam karti hain. 'st.file_uploader' se aap images ya documents upload karwa kar un pe Python logic chala saktay hain.",
        code: "file = st.file_uploader('Upload your CSV or Image')\nif file:\n    st.write('File Uploaded Successfully!')",
        language: "python",
        tasks: ["Image uploader banayein aur upload honey wali image dikhayein.", "Text file read kar ke uska content screen pe print karein."],
        homework: ["Search: How to read a dataframe using st.file_uploader?"],
        beginnerFriendly: false
      }
    ]
  },
  {
    id: "py-ai-section",
    title: "Phase 4: AI & APIs",
    topics: [
      {
        id: "ch34-ai-intro",
        title: "34. Introduction to AI (The Big Picture)",
        explanation: "AI ka matlab hai aise Computer Systems jo insano ki tarah soch saktay hon, patterns dhoond saktay hon aur feslay le saktay hon. AI ki main branches NLP (Tezt) aur Computer Vision (Images) hain.",
        example: "Real Life: Netflix ki recommendations, Snapchat ke filters, aur ChatGPT computer ki 'Akal' (AI) ke examples hain.",
        tasks: ["3 real world AI use cases likhein.", "AI vs standard programming ka farq batayein."],
        homework: ["Write a short paragraph on 'Will AI replace programmers?'"],
        beginnerFriendly: true
      },
      {
        id: "ch35-api-basics",
        title: "35. APIs Basics (The Messenger)",
        explanation: "API (Application Programming Interface) aik aisa messenger hai jo aapki request kisi doosre server tak le jata hai aur wahan se jawab wapas lata hai. AI seekhne ke liye API ka concept bohot zaroori hai.",
        example: "Real Life: Restaurant mein Waiter—Aap (User) khana mangte hain, Waiter (API) kitchen (Server) se khana lata hai.",
        tasks: ["Search karein: What is JSON?", "Explain the role of API keys and why they must be kept private."],
        homework: ["Find 3 popular AI APIs available today."],
        beginnerFriendly: true
      },
      {
        id: "ch36-py-api-requests",
        title: "36. Using AI APIs in Python (Requests)",
        explanation: "Python ki 'requests' library use kar ke hum AI Models (like Gemini) se baat karte hain. Hum text bhejtay hain aur AI humein structured JSON response deta hai.",
        code: "import requests\nurl = 'https://api.example.com/v1/chat'\nheaders = {'Authorization': 'Bearer YOUR_KEY'}\nresponse = requests.post(url, json={'prompt': 'Hi AI'}, headers=headers)\nprint(response.json())",
        language: "python",
        tasks: ["Requests library install karein.", "Free dummy API se data fetch karne ka code likhein."],
        homework: ["What is the difference between GET and POST requests?"],
        beginnerFriendly: false
      },
      {
        id: "ch37-prompting",
        title: "37. Prompt Engineering (Talking to AI)",
        explanation: "AI se behtareen response nikalwane ke liye use 'Context' aur 'Instructions' dena zaroori hai. Is art ko Prompt Engineering kehte hain.",
        example: "Real Life: 'Code likho' (Bad Prompt) vs 'Python mein aik variable banao aur use print karo explanation ke saath' (Good Prompt).",
        tasks: ["Aik 'System Prompt' likhein jo AI ko aik strict Maths Teacher bana de.", "Try 3-step reasoning prompt (Chain of Thought)."],
        homework: ["What is temperature in AI model settings?"],
        beginnerFriendly: true
      },
      {
        id: "ch38-gemini-cli",
        title: "38. Gemini CLI & SDK",
        explanation: "Google ka Gemini API use karne ke liye hum 'google-generativeai' library use karte hain. Ye bohot fast hai aur image processing bhi support karti hai.",
        code: "import google.generativeai as genai\ngenai.configure(api_key='YOUR_API_KEY')\nmodel = genai.GenerativeModel('gemini-pro')\nresponse = model.generate_content('Hello!')\nprint(response.text)",
        language: "python",
        tasks: ["Gemini API Key generate karein Google AI Studio se.", "Pehla Python script likhein jo Gemini se reply le."],
        homework: ["How to send images to Gemini using Python?"],
        beginnerFriendly: true
      },
      {
        id: "ch39-claude-api",
        title: "39. Claude Code & reasoning models",
        explanation: "Anthropic ke Claude models coding aur mushkil logic ke liye behtareen hain. Inka reasoning level bohot high hota hai.",
        example: "Real Life: Jab aapko code debug karwana ho ya pura software design karna ho, to Claude best choice hai.",
        tasks: ["Anthropic Console visit karein.", "Claude aur Gemini ke responses ka comparison likhein aik mushkil logic pe."],
        homework: ["What are tokens in LLMs?"],
        beginnerFriendly: true
      },
      {
        id: "ch40-chatbot-project",
        title: "40. Project: Build Professional AI Chatbot",
        explanation: "Ab Streamlit aur Gemini ko join karein! User UI pe sawal likhe ga aur AI ka jawab 'Streaming' (aik aik word kar ke) nazar aye ga.",
        tasks: ["Streamlit app banayein jis mein chat messages record hon.", "User feedback system add karein (Thumbs up/down)."],
        homework: ["How to manage Chat History in Streamlit session_state?"],
        beginnerFriendly: false
      },
      {
        id: "milestone-7-8",
        title: "🚀 Milestone Projects (Ch 31-40)",
        explanation: "AI Integration and Chatbot building!",
        tasks: [
          "👨‍🏫 Project 7 (Teacher Build): AI Chatbot - Gemini API aur Streamlit interface.",
          "👨‍🎓 Project 8 (Student Task): AI Career Advisor - User interests ke mutabiq AI career suggestions de ga."
        ],
        homework: ["Chatbot mein 'Tone Selection' add karein.", "Career advisor mein resume upload feature ka logic sochein."],
        beginnerFriendly: false
      },
      {
        id: "ch41-agents-intro",
        title: "41. AI Agents (Future of AI)",
        explanation: "AI Agent sirf aik chatbot nahi hota, balkay wo 'Action' bhi le sakta hai (jaise files read karna, web search karna, ya email bhejna).",
        example: "Real Life: Aik travel agent jo sirf ticket ka batata nahi, balkay book bhi kar de.",
        tasks: ["AI Agents ke 3 real-world projects dhoondein.", "Explain 'Reasoning vs Action' cycle (ReAct)."],
        homework: ["What is an Autonomy in AI Agents?"],
        beginnerFriendly: true
      },
      {
        id: "ch42-simple-agent",
        title: "42. Project: Build Your First AI Agent",
        explanation: "Python mein aik aisa smart system banayein jo PDF read kare aur us mein se important points nikal kar email draft kare.",
        tasks: ["Agent ka logic flow-chart banayein.", "AI ko 'Tools' ka access dene ka concept samjhein."],
        homework: ["Search: What is function calling in AI APIs?"],
        beginnerFriendly: false
      },
      {
        id: "ch43-multi-agent",
        title: "43. Multi-Agent Systems (Teamwork)",
        explanation: "Jab dher saare agents mil kar aik complex task karte hain (e.g., Researcher Agent data dhoonde ga aur Writer Agent use article likhay ga).",
        example: "Real Life: Aik company ki team jahan har manager ka apna kaam hai.",
        tasks: ["CrewAI ya LangChain ka basic structure check karein.", "Manager Agent ka concept explain karein."],
        homework: ["Can AI agents argue with each other to improve quality?"],
        beginnerFriendly: false
      }
    ]
  },
  {
    id: "py-advanced-career",
    title: "Phase 5: Backend & Advanced",
    topics: [
      {
        id: "ch44-fastapi",
        title: "44. FastAPI (The Professional Brain)",
        explanation: "FastAPI aik modern backend framework hai jo Python mein APIs banane ke liye use hota hai. Ye bohot fast hai aur companies mein production apps ke liye use hota hai.",
        example: "Real Life: Jab aap Uber ya Foodpanda pe order karte hain, to backend (jaise FastAPI) check karta hai ke driver kahan hai aur aapko update bhejta hai.",
        code: "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/status')\ndef check_status():\n    return {'status': 'AI Server is running'}",
        language: "python",
        tasks: ["FastAPI aur Uvicorn install karein.", "Aik GET endpoint banayein jo 'Hello World' return kare."],
        homework: ["What is the difference between Frontend and Backend?"],
        beginnerFriendly: false
      },
      {
        id: "ch45-st-fastapi",
        title: "45. Project: Full AI SaaS Architecture",
        explanation: "Asli SaaS apps mein Streamlit (UI) aur FastAPI (Brain) alag hotay hain. Streamlit frontend hota hai jo user se data leta hai aur FastAPI backend hota hai jo AI logic chala kar result wapas bhejta hai.",
        tasks: ["Streamlit app se FastAPI server pe request bhejein.", "CORS settings configuration samjhein."],
        homework: ["Why we use separation of concerns (Frontend/Backend)?"],
        beginnerFriendly: false
      },
      {
        id: "ch46-db-sqlite",
        title: "46. Database Basics (SQLite)",
        explanation: "AI Apps ko user data aur chats save karne ke liye database chahiye hota hai. SQLite Python ke saath built-in ata hai aur seekhne ke liye perfect hai.",
        example: "Real Life: Aik digital register jahan har entry line by line save ho.",
        code: "import sqlite3\nconn = sqlite3.connect('users.db')\n# Logic to create table and insert data",
        language: "python",
        tasks: ["SQL table banayein 'users' ke naam se.", "Data insert aur fetch karne ka logic likhein."],
        homework: ["Difference between SQL and NoSQL?"],
        beginnerFriendly: false
      },
      {
        id: "ch47-deploy",
        title: "47. Deployment (Going Online)",
        explanation: "Apne computer se nikal kar app ko dunya ko dikhane ke liye deployment zaroori hai. Hum GitHub aur Streamlit Cloud use karein ge.",
        example: "Real Life: Aik shop kholna jo ke pehle sirf aapke ghar (Localhost) mein thi magar ab market (Public URL) mein hai.",
        tasks: ["Requirements.txt file generate karein.", "Streamlit Cloud pe project deploy karein."],
        homework: ["What is Environment Variable in deployment?"],
        beginnerFriendly: true
      },
      {
        id: "ch48-master-project",
        title: "48. Final Mega AI Project: AI SaaS",
        explanation: "Aik complete application banayein (jaise AI Resume Reviewer ya AI Content Generator) jis mein UI, Backend, aur AI Models sub integrated hon.",
        tasks: ["Complete AI automation tool build karein.", "User login/signup system design karein (Logic only)."],
        homework: ["Write a professional project documentation."],
        beginnerFriendly: false
      },
      {
        id: "ch49-freelancing",
        title: "49. Freelancing & Career",
        explanation: "Python aur AI seekh kar aap Fiverr, Upwork ya LinkedIn se clients kaise dhoond saktay hain. Portfolio aur GitHub profile ki ahmiyat.",
        tasks: ["LinkedIn pe apna AI project share karein.", "Fiverr ki top Python AI gigs analyze karein."],
        homework: ["Build your first professional developer CV."],
        beginnerFriendly: true
      },
      {
        id: "ch50-interview",
        title: "50. Interview Prep & Graduation",
        explanation: "Coding interviews mein puche janay wale common sawalat aur mock practice. Aapka 50 chapters ka safar yahan khatam hota hai!",
        tasks: ["Python Quiz solve karein (Timed).", "Final project ka demo record karein."],
        homework: ["Write a 'Thank You' note describing what you learned."],
        beginnerFriendly: true
      },
      {
        id: "milestone-9-10",
        title: "🚀 Milestone Projects (Ch 41-50)",
        explanation: "The Grand Finale! Full Stack AI SaaS and Multi-Agent Systems.",
        tasks: [
          "👨‍🏫 Project 9 (Teacher Build): AI SaaS Web App - FastAPI Backend, Streamlit Frontend, aur Gemini Brain.",
          "👨‍🎓 Project 10 (Student Task): AI Employee System - Multiple agents automate tasks (Research + Coding + Writing)."
        ],
        homework: ["Apni app ka live link CV mein add karein.", "GitHub pe complete documentation likhein."],
        beginnerFriendly: false
      }
    ]
  }
];

