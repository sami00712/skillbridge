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
    module: "Python & AI",
    targetModuleId: "python-ai",
    description: "Connect Python to Gemini API for a smart conversational assistant.",
    difficulty: "Expert",
    tech: ["Python", "Streamlit", "Gemini API"]
  },
  {
    title: "Career Mentor AI",
    module: "AI Agents",
    targetModuleId: "python-ai",
    description: "A multi-agent system that analyzes resumes and gives career advice.",
    difficulty: "Master",
    tech: ["Python", "AI Agents", "Streamlit"]
  },
  {
    title: "Spec-Driven SaaS",
    module: "SD-Development",
    targetModuleId: "spec-driven-dev",
    description: "Full end-to-end product built using Spec-Driven Development workflow.",
    difficulty: "Master",
    tech: ["Spec-Driven", "Gemini CLI", "React"]
  }
];

export const COURSE_DATA: Module[] = [
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
        id: "html-formatting",
        title: "05. Text Decoration: Formatting Tags",
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
        title: "06. Connections: Anchors & Links",
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
        title: "07. Paths: Absolute vs Relative",
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
        title: "08. Visuals: Mastering the <img> Tag",
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
        title: "09. Lists: Unordered & Ordered",
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
        title: "10. Data Representation: Tables Part 1",
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
        title: "11. Rowspan & Colspan: Advanced Tables",
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
        title: "12. User Interaction: The <form> Tag",
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
        title: "13. Input Power: Basic Text & Passwords",
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
        title: "14. Modern Inputs: Date, Color & Number",
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
          title: "15. Large Data: Textarea & Dropdowns",
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
          title: "16. Semantic HTML: SEO & Web Structure",
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
          title: "17. Deep Integration: Iframes & Maps",
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
          title: "18. Meta Tags: SEO Basics",
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
          title: "19. Special Characters & Entities",
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
          title: "20. Final: Best Practices & Clean Code",
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
          title: "21. GitHub: Hosting your Code Online",
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
      id: "python-ai",
      title: "Module 6: Python, Streamlit & AI Agents",
      topics: [
          {
              id: "py-why",
              title: "01. Why Python? (The Future Language)",
              explanation: "Python dunya ki sab se mashhoor aur asaan programming language hai. Ye AI, Data Science, aur Web Development mein sab se zyada use hoti hai. Iska syntax English jaisa hai, is liye beginners ke liye best hai.",
              example: "Instagram ka backend, Spotify ki recommendations, aur ChatGPT jaise AI tools Python mein hi bane hain.",
              tasks: ["3 reasons likho Python seekhne ke.", "Search: What is the rank of Python in programming languages?"],
              homework: ["Explain why Python is better for AI than other languages."],
              beginnerFriendly: true
          },
          {
              id: "py-install",
              title: "02. Install Python & Setup: Ready for Action",
              explanation: "Python use karne ke liye aapko official website 'python.org' se use download karna hoga. VS Code mein Python extension install kar ke aap coding shuru kar saktay hain.",
              code: "# Python version check karne ke liye terminal mein likhein:\npython --version",
              language: "bash",
              tasks: ["Install Python in your system.", "Setup VS Code with Python extension."],
              homework: ["What is an Interpreter in Python?"],
              beginnerFriendly: true
          },
          {
              id: "py-hello",
              title: "03. First Program: Hello World",
              explanation: "Python mein message print karna bohot easy hai. Sirf 'print()' function use hota hai. Koi semicolon (;) lagane ki zaroorat nahi hoti.",
              code: "print('Hello World, Python is Awesome!')",
              language: "python",
              tasks: ["Print your own name and city.", "Try printing a number without quotes."],
              homework: ["What is the difference between print('5') and print(5)?"],
              beginnerFriendly: true
          },
          {
              id: "py-variables",
              title: "04. Variables: Containers for Data",
              explanation: "Variables mein hum data save karte hain. Python mein type batane ki zaroorat nahi hoti, ye khud samajh jata hai.",
              code: "name = 'Sami'\nage = 18\nprint(name, age)",
              language: "python",
              tasks: ["Create variables for your favorite hobby and birth year.", "Change the value of a variable and print it."],
              homework: ["What are the rules for naming variables in Python?"],
              beginnerFriendly: true
          },
          {
              id: "py-types",
              title: "05. Data Types: The 4 Pillars",
              explanation: "Python mein main data types ye hain: 1) String (Text), 2) Int (Poora Number), 3) Float (Decimal wala number), 4) Boolean (True/False).",
              code: "price = 99.99 # Float\nis_active = True # Boolean\nscore = 100 # Int",
              language: "python",
              tasks: ["Create one variable for each data type.", "Check type using type() function."],
              homework: ["Explain the difference between Int and Float with examples."],
              beginnerFriendly: true
          },
          {
              id: "py-casting",
              title: "06. Type Casting: Changing Types",
              explanation: "Baaz auqat humein aik type ko doosri type mein badalna parta hai. Jaise String '18' ko Integer 18 mein.",
              code: "age_str = '18'\nage_int = int(age_str)\nprint(age_int + 2) # Now we can do math",
              language: "python",
              tasks: ["Convert a float to an int.", "Convert an int to a string."],
              homework: ["What happens if you try to convert 'abc' to an int?"],
              beginnerFriendly: true
          },
          {
              id: "py-io",
              title: "07. Input/Output: Talking to User",
              explanation: "User se data 'input()' function se liya jata hai. Yaad rahe input hamesha string deta hai.",
              code: "user_name = input('Enter your name: ')\nprint('Welcome ' + user_name)",
              language: "python",
              tasks: ["Ask user for their age and print it.", "Ask for two numbers and print their sum (casting needed)."],
              homework: ["How to take multiple inputs in one line?"],
              beginnerFriendly: true
          },
          {
              id: "py-operators",
              title: "08. Operators: Math & Logic",
              explanation: "Python mein Basic Math (+, -, *, /) ke ilawa Comparison (==, !=, >, <) aur Logical (and, or, not) operators hote hain.",
              code: "x = 10\ny = 3\nprint(x // y) # Integer Division\nprint(x % y)  # Remainder",
              language: "python",
              tasks: ["Calculate the area of a circle (r=5).", "Use comparison operator to check if 10 is equal to 10."],
              homework: ["What is the difference between / and // in Python?"],
              beginnerFriendly: true
          },
          {
              id: "py-conditions",
              title: "09. Conditions: If/Else (Faisla)",
              explanation: "Python mein indentation (space) bohot important hai. If/Else se hum decisions lete hain.",
              code: "age = 20\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
              language: "python",
              tasks: ["Check if a number is even or odd.", "Grade system: Marks > 90 (A), > 70 (B), else (C)."],
              homework: ["What is 'elif' used for?"],
              beginnerFriendly: true
          },
          {
              id: "py-loops",
              title: "10. Loops: Repeatition (for / while)",
              explanation: "Aik hi kaam baar baar karne ke liye loops use hote hain. 'for' loop counting ke liye aur 'while' condition ke liye.",
              code: "for i in range(5):\n    print('Iteration:', i)",
              language: "python",
              tasks: ["Print table of 2 using for loop.", "Print numbers from 10 to 1 backwords."],
              homework: ["What is an Infinite Loop and how to avoid it?"],
              beginnerFriendly: true
          },
          {
              id: "py-functions",
              title: "11. Functions: Reusable Code",
              explanation: "Function ko 'def' keyword se banate hain. Ye code ko clean aur reusable banata hai.",
              code: "def greet(name):\n    return 'Hi ' + name\n\nprint(greet('Sami'))",
              language: "python",
              tasks: ["Create a function to calculate square of a number.", "Create a function with two parameters."],
              homework: ["What is the purpose of 'return' keyword?"],
              beginnerFriendly: true
          },
          {
              id: "py-lists",
              title: "12. Lists: Collection of Items",
              explanation: "Lists mein hum bohot saari values rakh saktay hain. Ye mutable (changeable) hoti hain.",
              code: "fruits = ['apple', 'mango', 'banana']\nfruits.append('kiwi')\nprint(fruits[0])",
              language: "python",
              tasks: ["Create a list of your 5 favorite movies.", "Remove the second item from your list."],
              homework: ["What is the difference between append() and extend()?"],
              beginnerFriendly: true
          },
          {
              id: "py-tuples",
              title: "13. Tuples: Constant Lists",
              explanation: "Tuples lists jaisi hoti hain magar inki values change nahi ki ja saktin (Immutable). Small brackets () use hote hain.",
              code: "coords = (10, 20)\n# coords[0] = 15 # Error!",
              language: "python",
              tasks: ["Create a tuple of 7 days of the week.", "Try to change a value and see the error."],
              homework: ["When should we use a Tuple instead of a List?"],
              beginnerFriendly: true
          },
          {
              id: "py-dicts",
              title: "14. Dictionaries: Key-Value Pairs",
              explanation: "Dictionary mein hum data ko key aur value ke sath rakhte hain. Jaise digital dictionary.",
              code: "user = {'name': 'Sami', 'age': 18}\nprint(user['name'])",
              language: "python",
              tasks: ["Create a dictionary of a car with make, model, year.", "Add a new key 'color' to the car dictionary."],
              homework: ["How to get all keys of a dictionary?"],
              beginnerFriendly: true
          },
          {
              id: "py-sets",
              title: "15. Sets: Unique Items",
              explanation: "Sets mein duplicates allowed nahi hote. Ye un-ordered collections hain.",
              code: "nums = {1, 2, 2, 3} # Result: {1, 2, 3}",
              language: "python",
              tasks: ["Create a set from a list that has duplicate numbers.", "Check if an item exists in a set."],
              homework: ["Explain the difference between List and Set."],
              beginnerFriendly: true
          },
          {
              id: "py-string-methods",
              title: "16. String Methods: Text Mastery",
              explanation: "Python mein strings per bohot operation ho saktay hain. upper, lower, replace, etc.",
              code: "text = 'python is fun'\nprint(text.upper())\nprint(text.replace('fun', 'great'))",
              language: "python",
              tasks: ["Convert a sentence to Title Case.", "Find the index of a word in a string."],
              homework: ["What does strip() method do?"],
              beginnerFriendly: true
          },
          {
              id: "py-files",
              title: "17. File Handling: Persistent Storage",
              explanation: "Files ko read aur write karna Python mein bohot asaan hai. 'with open' use karna best practice hai.",
              code: "with open('note.txt', 'w') as f:\n    f.write('Hello Students!')",
              language: "python",
              tasks: ["Create a file and write your bio in it.", "Read the same file and print content."],
              homework: ["What are 'r', 'w', and 'a' modes in file handling?"],
              beginnerFriendly: false
          },
          {
              id: "py-exceptions",
              title: "18. Exception Handling: Anti-Crash",
              explanation: "Agar code mein error aa jaye to website crash hone se bachane ke liye try/except use hota hai.",
              code: "try:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print('Can not divide by zero!')",
              language: "python",
              tasks: ["Handle a ValueError when user inputs text instead of number.", "Use 'finally' block for a cleanup task."],
              homework: ["Why should we use specific exception names instead of just 'except'?"],
              beginnerFriendly: false
          },
          {
              id: "py-modules",
              title: "19. Modules & Packages: Using Others' Code",
              explanation: "Baahir ki libraries (jaise math, random) use karne ke liye 'import' keyword use hota hai.",
              code: "import math\nprint(math.sqrt(16))",
              language: "python",
              tasks: ["Use 'random' module to print a random number.", "Import 'datetime' and print today's date."],
              homework: ["How to install external libraries using pip?"],
              beginnerFriendly: false
          },
          {
              id: "py-venv",
              title: "20. Virtual Environment: Project Isolation",
              explanation: "Har project ke liye alag environment banana zarori hai taake versions mix na hon.",
              code: "python -m venv myenv\n# Activate: myenv\\Scripts\\activate (Windows)",
              language: "bash",
              tasks: ["Create a virtual environment for your project.", "Activate it and check pip list."],
              homework: ["Why is a virtual environment important?"],
              beginnerFriendly: false
          },
          {
              id: "py-oop",
              title: "21. OOP Intro: Object Oriented Programming",
              explanation: "OOP mein hum 'Classes' (Blueprints) aur 'Objects' (Real items) banate hain. Ye real-world modeling ke liye hai.",
              code: "class Dog:\n    def bark(self):\n        print('Woof!')\n\nmy_dog = Dog()\nmy_dog.bark()",
              language: "python",
              tasks: ["Create a class 'Car' with a method 'drive'.", "Create two objects of the Car class."],
              homework: ["What is 'self' keyword in Python classes?"],
              beginnerFriendly: false
          },
          {
              id: "py-constructor",
              title: "22. Constructor: Initialization",
              explanation: "'__init__' function constructor hota hai jo tab chalta hai jab object banta hai.",
              code: "class Person:\n    def __init__(self, name):\n        self.name = name\n\np1 = Person('Ali')",
              language: "python",
              tasks: ["Create a Student class that takes name and marks in constructor.", "Print the student details from object."],
              homework: ["Can a class have multiple constructors in Python?"],
              beginnerFriendly: false
          },
          {
              id: "py-inheritance",
              title: "23. Inheritance: Reusing Classes",
              explanation: "Aik class doosri class ki properties aur methods inherit kar sakti hai.",
              code: "class Animal:\n    def eat(self): print('Eating...')\n\nclass Cat(Animal):\n    pass",
              language: "python",
              tasks: ["Create a 'Vehicle' parent class and 'Cycle' child class.", "Override a method in child class."],
              homework: ["What is Multiple Inheritance?"],
              beginnerFriendly: false
          },
          {
              id: "py-encapsulation",
              title: "24. Encapsulation: Hiding Data",
              explanation: "Data ko protect karne ke liye hum use private banate hain (using double underscore __).",
              code: "class Bank:\n    def __init__(self):\n        self.__balance = 1000",
              language: "python",
              tasks: ["Create a class with a private attribute.", "Create a public method to access that private attribute."],
              homework: ["Difference between Public, Private and Protected in Python."],
              beginnerFriendly: false
          },
          {
              id: "py-mini-project",
              title: "25. Mini Project: Student Marks System",
              explanation: "Aik system banaiye jahan students ke marks input houn aur final result (Pass/Fail) calculcate ho.",
              tasks: ["Use Classes to represent a Student.", "Store data in a list.", "Print a report card at the end."],
              homework: ["Add functionality to save results to a text file."],
              beginnerFriendly: false
          },
          {
              id: "st-intro",
              title: "26. What is Streamlit? (Web Apps in Python)",
              explanation: "Streamlit aik aisi library hai jo Python code ko fast web apps mein badal deti hai. Aapko HTML/CSS seekhne ki zaroorat nahi.",
              example: "Data dashboards aur AI chatbots banane ke liye ye best tool hai.",
              tasks: ["Search for Streamlit app gallery.", "List 2 benefits of using Streamlit."],
              homework: ["Explain the difference between Flask and Streamlit."],
              beginnerFriendly: true
          },
          {
              id: "st-install",
              title: "27. Install Streamlit: Your New UI Framework",
              explanation: "Terminal mein sirf aik command se Streamlit install ho jata hai.",
              code: "pip install streamlit",
              language: "bash",
              tasks: ["Install streamlit in your virtual environment.", "Verify installation using 'streamlit hello'."],
              homework: ["What are requirements.txt files?"],
              beginnerFriendly: true
          },
          {
              id: "st-first-app",
              title: "28. First Streamlit App: Hello UI",
              explanation: "Python file bana kar use run karna hota hai 'streamlit run app.py' command se.",
              code: "import streamlit as st\nst.title('My First AI App')\nst.write('Welcome to the future!')",
              language: "python",
              tasks: ["Create a simple welcome app.", "Run the app and see it in your browser."],
              homework: ["How to stop the streamlit server in terminal?"],
              beginnerFriendly: true
          },
          {
              id: "st-inputs",
              title: "29. Text & Input: Interactive UI",
              explanation: "Input lena Streamlit mein line of code ka kaam hai. Text, Number, Selectbox—sab available hai.",
              code: "name = st.text_input('What is your name?')\nst.write(f'Hello {name}')",
              language: "python",
              tasks: ["Create a form with Name, Age and City inputs.", "Show the input values in a colored box."],
              homework: ["Search: How to create a slider in Streamlit?"],
              beginnerFriendly: true
          },
          {
              id: "st-buttons",
              title: "30. Buttons & Interaction: Triggering Logic",
              explanation: "Button pe click hone per hi koi logic execute karna ka tareeqa.",
              code: "if st.button('Click Me'):\n    st.success('Button clicked!')",
              language: "python",
              tasks: ["Create a button that reveals a secret message.", "Create a reset button to clear everything."],
              homework: ["What is st.session_state?"],
              beginnerFriendly: true
          },
          {
              id: "st-layout",
              title: "31. Layout & UI: Columns & Sidebar",
              explanation: "Website ko professional banane ke liye columns aur sidebars use karein.",
              code: "col1, col2 = st.columns(2)\nwith col1: st.write('Left side')\nst.sidebar.title('Settings')",
              language: "python",
              tasks: ["Add a sidebar with 'Home', 'About' buttons.", "Create a 3-column layout to show features."],
              homework: ["How to change the theme (Light/Dark) in Streamlit?"],
              beginnerFriendly: true
          },
          {
              id: "st-calc-app",
              title: "32. Project: Smart Calculator UI",
              explanation: "Streamlit use kar ke aik functional calculator banayein jo numbers aur symbols handling kare.",
              tasks: ["Use st.number_input for inputs.", "Use a selectbox for operations (+, -, *, /).", "Display result in a big header."],
              homework: ["Add error handling for division by zero in UI."],
              beginnerFriendly: true
          },
          {
              id: "ai-api-intro",
              title: "33. What is API? (The Digital Bridge)",
              explanation: "API (Application Programming Interface) do apps ko aapas mein jorta hai. AI model ko use karne ke liye hum Google ya OpenAI ki API use karte hain.",
              example: "Jab aap Google Maps use karte hain kisi app mein, to wo API use kar rahi hoti hai.",
              tasks: ["Search for 'Gemini API' and see its use.", "What is an API Key?"],
              homework: ["Why are APIs called 'The Glue of Internet'?"],
              beginnerFriendly: true
          },
          {
              id: "ai-api-call",
              title: "34. API Call in Python: Fetching AI Brain",
              explanation: "Python mein 'requests' library se hum kisi bhi AI server se baat kar saktay hain.",
              code: "import requests\nres = requests.get('https://api.example.com/data')\nprint(res.json())",
              language: "python",
              tasks: ["Install requests library.", "Fetch advice from a free API (like Advice Slip)."],
              homework: ["What is JSON formatting?"],
              beginnerFriendly: false
          },
          {
              id: "ai-agent-concept",
              title: "35. What are AI Agents? (The Thinkers)",
              explanation: "AI Agent sirf aik chatbot nahi hota, wo 'Action' bhi le sakta hai. Wo internet search kar sakta hai, files read kar sakta hai, aur calculation kar sakta hai.",
              example: "Aik agent jo aapke email parh kar khud unka reply draft kare.",
              tasks: ["List 3 differences between a simple Chatbot and an AI Agent.", "Search: What is AutoGPT?"],
              homework: ["Explain the concept of 'Agency' in AI Agents."],
              beginnerFriendly: true
          },
          {
              id: "ai-basic-agent",
              title: "36. Basic AI Agent: Input-Output Loop",
              explanation: "Basic agent system jo input leti hai, process karti hai, aur specific task complete karti hai.",
              tasks: ["Design a logic for a 'Weather Agent'.", "Explain how an agent uses 'Tools'."],
              homework: ["What is ReAct (Reason + Act) pattern?"],
              beginnerFriendly: false
          },
          {
              id: "ai-prompt-eng",
              title: "37. Prompt Engineering: Smart Instructions",
              explanation: "AI ko sahi tareeqay se instruction dena aik art hai. System prompts aur User prompts mein farq samjhein.",
              code: "System: You are a professional doctor.\nUser: I have a headache.",
              language: "markdown",
              tasks: ["Write a perfect prompt for a Coding Mentor AI.", "Use 'Chain of Thought' technique in a prompt."],
              homework: ["What is Zero-Shot vs Few-Shot prompting?"],
              beginnerFriendly: true
          },
          {
              id: "ai-st-chatbot",
              title: "38. Project: AI Chatbot (AI + Streamlit)",
              explanation: "Ab hum Streamlit UI aur AI Model (Gemini/OpenAI) ko join karein ge.",
              tasks: ["Setup a simple chat UI in Streamlit.", "Add AI response logic using an API."],
              homework: ["How to manage chat history in Streamlit?"],
              beginnerFriendly: false
          },
          {
              id: "ai-multi-agent",
              title: "39. Multi-Agent Concept: Team of AI",
              explanation: "Aik agent nahi, balkay poori team! Aik Manager Agent, aik Researcher Agent, aur aik Writer Agent.",
              example: "Aik project manager agent researcher se data mangta hai aur writer ko blog likhne ka kehta hai.",
              tasks: ["Research on 'CrewAI' or 'LangGraph'.", "Design a flow for a content creation team of agents."],
              homework: ["Why is Multi-Agent system better for complex tasks?"],
              beginnerFriendly: false
          },
          {
              id: "ai-final-project",
              title: "40. Master Project: Career Mentor AI",
              explanation: "Aik complete tool jo user ka resume dekhe, career advice de, aur interview ki practice karwaye.",
              tasks: ["Build Career Advice UI.", "Implement PDF parser to read resumes.", "Add AI Agent to give personalized feedback."],
              homework: ["Write a small report on your final project journey."],
              beginnerFriendly: false
          },
          {
              id: "ai-deploy",
              title: "41. Deployment (Streamlit Cloud)",
              explanation: "Apni Streamlit app ko Vercel jaisa live karein using Streamlit Cloud for free.",
              tasks: ["Push your code to GitHub.", "Connect GitHub to Streamlit Cloud and deploy."],
              homework: ["How to add secrets (API Keys) in Streamlit Cloud?"],
              beginnerFriendly: true
          },
          {
              id: "ai-env-vars",
              title: "42. Environment Variables: Security First",
              explanation: "Python mein .env files aur os.getenv() use kar ke sensitive data bachayein.",
              code: "import os\napi_key = os.getenv('MY_API_KEY')",
              language: "python",
              tasks: ["Install python-dotenv.", "Create a .env file and read a variable from it."],
              homework: ["Why should we never commit .env to public repositories?"],
              beginnerFriendly: true
          },
          {
              id: "ai-finale",
              title: "43. Success: Clean AI Code",
              explanation: "Mastering clean code, modular folder structure, aur professional documentation.",
              tasks: ["Organize your python project into folders (app/, components/, utils/).", "Write a professional README.md for your GitHub."],
              homework: ["What is the next step in your AI learning journey?"],
              beginnerFriendly: true
          }
      ]
  },
  {
      id: "spec-driven-dev",
      title: "Module 7: Spec-Driven Development (AI Engineering)",
      topics: [
          {
              id: "sdd-what",
              title: "01. What is Spec-Driven Development?",
              explanation: "Spec-Driven Development (SDD) ka matlab hai code likhne se pehle uski poori 'Specification' (vazahat) likhna. Ye aik professional developer ka mindset hai jahan planning ko zyada ahmiyat di jati hai.",
              example: "Jaise ghar banane se pehle uska blueprint banta hai, wese hi app banane se pehle uski spec likhi jati hai.",
              tasks: ["Write 3 reasons why planning is better than direct coding.", "Explain 'Spec' in your own words."],
              homework: ["Research: How big companies like NASA use specifications."],
              beginnerFriendly: true
          },
          {
              id: "sdd-why",
              title: "02. Why Spec-Driven Development?",
              explanation: "S-DD ke 3 baray faide hain: 1) Clear Direction (pata hota hai kya banana hai), 2) Fast Development (raasta saaf hota hai), 3) Less Bugs (ghaltiyan pehle hi pakri jati hain).",
              tasks: ["List 3 benefits of SDD.", "Think of a project where direct coding caused problems."],
              homework: ["Write a paragraph on 'Slow is Fast' in programming."],
              beginnerFriendly: true
          },
          {
              id: "sdd-vs-vibe",
              title: "03. Vibe Coding vs Spec-Driven Development",
              explanation: "Vibe coding ka matlab hai baghair soche samjhe code likhna ya AI ko 'vibe' pe instructions dena. Spec-driven development structured aur logic-based hoti hai jo professional scale pe kaam karti hai.",
              tasks: ["Compare Vibe coding vs Structured development.", "Why is Vibe coding risky for big apps?"],
              homework: ["Ask ChatGPT to build an app with simple instructions vs building with a plan. Note the difference."],
              beginnerFriendly: true
          },
          {
              id: "sdd-speckit-intro",
              title: "04. Introduction to Speckit+",
              explanation: "Speckit+ aik modern tool hai jo AI aur structured development ko combine karta hai. Ye aapko specs likhne aur un pe code generate karne mein madad deta hai.",
              tasks: ["What is Speckit+?", "Search for Speckit+ features."],
              homework: ["How can Speckit+ help a beginner developer?"],
              beginnerFriendly: true
          },
          {
              id: "sdd-speckit-setup",
              title: "05. Setup Speckit+: Getting Started",
              explanation: "Speckit+ ko install karna aur uska basic interface samajhna pehla step hai Professional AI Engineering ki dunya mein.",
              tasks: ["Install Speckit+ plugin or tool.", "Explore the initial dashboard."],
              homework: ["List the basic commands found in Speckit+ docs."],
              beginnerFriendly: true
          },
          {
              id: "sdd-gemini-cli-intro",
              title: "06. What is Gemini CLI?",
              explanation: "Gemini CLI aik command-line tool hai jo Google ke sab se powerfull AI 'Gemini' ko terminal se connect karta hai. Ye free hai aur developers ke liye bohot fast hai.",
              tasks: ["Comparison: Gemini vs Claude (Free vs Paid).", "Why use CLI for AI?"],
              homework: ["Find out the tokens limit for Gemini 1.5 Flash."],
              beginnerFriendly: true
          },
          {
              id: "sdd-gemini-cli-install",
              title: "07. Install Gemini CLI: Setup & Commands",
              explanation: "Gemini CLI ko setup karne ke liye aapko API key chahiye hoti hai jo Google AI Studio se milti hai.",
              code: "npm install -g @google/generative-ai\n# Or use the specific CLI tool command\ngemini login",
              language: "bash",
              tasks: ["Setup Gemini CLI on your PC.", "Run a 'test' command to see if AI responds."],
              homework: ["Write down 3 basic Gemini CLI commands."],
              beginnerFriendly: true
          },
          {
              id: "sdd-connect",
              title: "08. Connect Speckit + Gemini CLI",
              explanation: "Dono tools ko jorna hi asli magic hai. Speckit planning karta hai aur Gemini CLI us plan ko code mein badalta hai.",
              tasks: ["Link your Speckit account with Gemini API.", "Verify the connection."],
              homework: ["Draw a simple diagram showing the workflow of Speckit -> Gemini CLI."],
              beginnerFriendly: true
          },
          {
              id: "sdd-first-spec",
              title: "09. First Spec Creation: Defining Your App",
              explanation: "Simple spec likhna seekhein. Website ka header kya hoga, buttons kahan honge, aur user kya karega—sab define karein.",
              tasks: ["Notes App ka specification likho.", "Define 3 core features of your Notes app."],
              homework: ["Write a 'User Story' for your Notes app."],
              beginnerFriendly: true
          },
          {
              id: "sdd-workflow",
              title: "10. COMPLETE SPEC WORKFLOW (The Master Chapter ⭐)",
              explanation: "Ye chapter sab kuch jorta hai. Hum structured syntax use karte hain: SP.CONSTITUTION (Rules), SP.SPECIFY (Features), SP.PLAN (Logic), SP.TASK (Breakdown), SP.IMPLEMENT (Code).",
              code: "# SP.CONSTITUTION\n- Clean Tailwind UI\n- Performance first\n\n# SP.SPECIFY\nFeature: User can add tasks\n\n# SP.PLAN\n1. Create state 2. Map items 3. Style it",
              language: "markdown",
              tasks: ["Ek simple app ka full spec workflow likho.", "Identify the 5 main sections of SP workflow."],
              homework: ["Explain why SP.PLAN is important before SP.IMPLEMENT."],
              beginnerFriendly: true
          },
          {
              id: "sdd-prompt-eng",
              title: "11. Prompt Engineering Basics: Talking to AI",
              explanation: "AI ko vague instructions nahi, balkay 'Context' aur 'Role' ke sath batana professional prompt engineering hai.",
              code: "Poor: Build a login page.\nPro: You are a React dev. Build a secure login page with focus on accessibility using Tailwind.",
              language: "markdown",
              tasks: ["Practice 3 different prompts for the same task.", "Use a 'System Message' approach."],
              homework: ["What is 'Chain of Thought' prompting?"],
              beginnerFriendly: true
          },
          {
              id: "sdd-generate-code",
              title: "12. Generate Code using Gemini CLI",
              explanation: "Spec tayyar hone ke baad terminal se command run kar ke poori file generate karein.",
              code: "gemini generate --spec notes.md --output app.tsx",
              language: "bash",
              tasks: ["Generate your first component using AI CLI.", "Read the generated code to understand logic."],
              homework: ["How to specify the framework (React/NextJS) in generation command?"],
              beginnerFriendly: false
          },
          {
              id: "sdd-debugging",
              title: "13. Debugging AI Code: Fixing Errors",
              explanation: "AI hamesha perfect nahi hota. Errors fix karna aur code ko improve karna developer ki zimadari hai.",
              tasks: ["Find an error in AI generated code.", "Ask AI to fix its own bug using CLI."],
              homework: ["Why should we always review AI code?"],
              beginnerFriendly: false
          },
          {
              id: "sdd-first-ai-tool",
              title: "14. Build Your First AI Tool",
              explanation: "Ab poora knowledge use kar ke aik choti tool banayein jo AI powered ho.",
              tasks: ["Build a 'Simple Idea Generator' tool.", "Use Streamlit or React for UI."],
              homework: ["List the steps you took from Spec to Implementation."],
              beginnerFriendly: false
          },
          {
              id: "sdd-ai-employees",
              title: "15. AI Employees Concept: Task Automation",
              explanation: "AI sirf helper nahi, balkay aapka 'Employee' hai jise aap tasks assign karte hain (Automation).",
              tasks: ["Research: What is AI Automation?", "Identify a daily task that AI can do for you."],
              homework: ["How to give multiple tasks to one AI system?"],
              beginnerFriendly: false
          },
          {
              id: "sdd-ai-agent-build",
              title: "16. Build AI Agent: Input → Output System",
              explanation: "Aik agent banayein jo input le kar intelligent output de or actions perform kare.",
              tasks: ["Create a 'Subject Recommender' agent based on user interest.", "Connect it with a simple UI."],
              homework: ["What is an Autonomus Agent?"],
              beginnerFriendly: false
          },
          {
              id: "sdd-multi-agent-system",
              title: "17. Multi-Agent System: The Dream Team",
              explanation: "Multiple agents ka aapas mein baat karna aur bara task complete karna 'Multi-agent system' hai.",
              example: "Researcher Agent fetches data -> Writer Agent writes content.",
              tasks: ["Design a 2-agent system workflow.", "Explain the role of each agent."],
              homework: ["Search: What is Microsoft AutoGen?"],
              beginnerFriendly: false
          },
          {
              id: "sdd-web-integration",
              title: "18. AI + Website Integration",
              explanation: "AI power ko browser ke saath jorna taake website smart ban sakay.",
              tasks: ["Integrate a 'Smart Search' in your project.", "Show AI thinking process on UI."],
              homework: ["How to handle API timeouts in web frontend?"],
              beginnerFriendly: false
          },
          {
              id: "sdd-final-project",
              title: "19. Final Project: Spec → App (Masterpiece)",
              explanation: "Ab aqri imtehan! Aik complex AI SaaS ya Agent system banayein jo spec driven ho.",
              tasks: ["Build a 'Career Mentor AI' or 'Recipe Agent'.", "Show full Spec to CLI process."],
              homework: ["Record a video of your AI app working."],
              beginnerFriendly: false
          },
          {
              id: "sdd-deployment",
              title: "20. Deployment & Real Use",
              explanation: "Apne project ko cloud pe deploy karein aur real users ko dikhayein.",
              tasks: ["Deploy your Spec-Driven app on Vercel or Netlify.", "Get feedback from 3 users."],
              homework: ["List the deployment steps you followed."],
              beginnerFriendly: true
          }
      ]
  }
];
