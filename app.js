/* Zero2Pro — static site, no server. All data in this file, progress in localStorage. */
'use strict';
var LS_KEY='zero2pro_v1';
var LANGS={hinglish:{label:'Hinglish',code:'hinglish'},english:{label:'English Only',code:'english'},hindi:{label:'हिंदी',code:'hindi'}};

/* ---- UI strings in 3 languages ---- */
var S={
home:{hinglish:'Home',english:'Home',hindi:'होम'},
path:{hinglish:'Learning Path',english:'Learning Path',hindi:'सीखने का रास्ता'},
doubts:{hinglish:'Doubt Solver',english:'Doubt Solver',hindi:'शंका समाधान'},
interview:{hinglish:'Mock Interview',english:'Mock Interview',hindi:'मॉक इंटरव्यू'},
flash:{hinglish:'Flashcards',english:'Flashcards',hindi:'फ्लैशकार्ड'},
mission:{hinglish:'Daily Mission',english:'Daily Mission',hindi:'रोज़ का मिशन'},
parent:{hinglish:'Parent Report',english:'Parent Report',hindi:'माता-पिता रिपोर्ट'},
settings:{hinglish:'Settings',english:'Settings',hindi:'सेटिंग्स'},
mentor:{hinglish:'AI Mentor',english:'AI Mentor',hindi:'AI मेंटर'},
continueLearning:{hinglish:'Continue Learning',english:'Continue Learning',hindi:'सीखना जारी रखें'},
progress:{hinglish:'Progress',english:'Progress',hindi:'प्रगति'},
streak:{hinglish:'Streak',english:'Streak',hindi:'लगातार दिन'},
xp:{hinglish:'XP',english:'XP',hindi:'XP'},
nextTest:{hinglish:'Next Test',english:'Next Test',hindi:'अगला टेस्ट'},
dailyMission:{hinglish:'Daily Mission — 15 minutes',english:'Daily Mission — 15 minutes',hindi:'रोज़ का मिशन — 15 मिनट'},
lessonsDone:{hinglish:'lessons done',english:'lessons done',hindi:'पाठ पूरे हुए'},
free:{hinglish:'FREE',english:'FREE',hindi:'मुफ़्त'},
locked:{hinglish:'Locked',english:'Locked',hindi:'बंद है'},
done:{hinglish:'Done',english:'Done',hindi:'हो गया'},
start:{hinglish:'Start',english:'Start',hindi:'शुरू करें'},
review:{hinglish:'Review',english:'Review',hindi:'दोहराएँ'},
learn:{hinglish:'Learn',english:'Learn',hindi:'सीखें'},
practice:{hinglish:'Practice',english:'Practice',hindi:'अभ्यास'},
test:{hinglish:'Test',english:'Test',hindi:'टेस्ट'},
build:{hinglish:'Build',english:'Build',hindi:'बनाएँ'},
run:{hinglish:'Run Code',english:'Run Code',hindi:'कोड चलाएँ'},
output:{hinglish:'Output',english:'Output',hindi:'परिणाम'},
submitTest:{hinglish:'Submit Test',english:'Submit Test',hindi:'टेस्ट जमा करें'},
passMsg:{hinglish:'Passed! Next lesson unlocked.',english:'Passed! Next lesson unlocked.',hindi:'पास हो गए! अगला पाठ खुल गया।'},
failMsg:{hinglish:'Not yet — 80% needed. Mentor will show your weak topic below.',english:'Not yet — 80% needed. The mentor will show your weak topic below.',hindi:'अभी नहीं — 80% चाहिए। मेंटर नीचे आपका कमज़ोर विषय बताएगा।'},
askMentor:{hinglish:'Ask the mentor…',english:'Ask the mentor…',hindi:'मेंटर से पूछें…'},
send:{hinglish:'Send',english:'Send',hindi:'भेजें'},
yourName:{hinglish:'Your name',english:'Your name',hindi:'आपका नाम'},
chooseLang:{hinglish:'Choose your language',english:'Choose your language',hindi:'अपनी भाषा चुनें'},
begin:{hinglish:'Start Learning — Free',english:'Start Learning — Free',hindi:'सीखना शुरू करें — मुफ़्त'},
copy:{hinglish:'Copy',english:'Copy',hindi:'कॉपी करें'},
copied:{hinglish:'Copied!',english:'Copied!',hindi:'कॉपी हो गया!'},
save:{hinglish:'Save',english:'Save',hindi:'सहेजें'},
reset:{hinglish:'Reset progress',english:'Reset progress',hindi:'प्रगति रीसेट करें'},
weakTopics:{hinglish:'Weak topics — revise these',english:'Weak topics — revise these',hindi:'कमज़ोर विषय — इन्हें दोहराएँ'},
noWeak:{hinglish:'No weak topics yet. Great work!',english:'No weak topics yet. Great work!',hindi:'अभी कोई कमज़ोर विषय नहीं। बहुत बढ़िया!'},
tapFlip:{hinglish:'Tap the card to flip',english:'Tap the card to flip',hindi:'पलटने के लिए कार्ड पर टैप करें'},
knowIt:{hinglish:'I know this',english:'I know this',hindi:'मुझे आता है'},
stillLearning:{hinglish:'Still learning',english:'Still learning',hindi:'अभी सीख रहा हूँ'},
askDoubt:{hinglish:'Ask your doubt in Hinglish, English or Hindi',english:'Ask your doubt in Hinglish, English, or Hindi',hindi:'अपनी शंका हिंदी या अंग्रेज़ी में पूछें'},
postDoubt:{hinglish:'Post Doubt',english:'Post Doubt',hindi:'शंका पूछें'},
resume:{hinglish:'Your Resume',english:'Your Resume',hindi:'आपका रिज़्यूमे'},
download:{hinglish:'Download Resume',english:'Download Resume',hindi:'रिज़्यूमे डाउनलोड करें'},
shareWhats:{hinglish:'Share on WhatsApp',english:'Share on WhatsApp',hindi:'WhatsApp पर भेजें'},
welcome:{hinglish:'Namaste! I am your mentor. Ask me anything — I will give a hint, never the full answer.',english:'Hello! I am your mentor. Ask me anything — I will give a hint, never the full answer.',hindi:'नमस्ते! मैं आपका मेंटर हूँ। कुछ भी पूछें — मैं संकेत दूँगा, पूरा उत्तर नहीं।'},
heroTitle:{hinglish:'Zero se Pro tak — ek hi rasta.',english:'From Zero to Pro — one single path.',hindi:'शून्य से प्रो तक — एक ही रास्ता।'},
heroSub:{hinglish:'Jo student kuch nahi jaanta, woh bhi yahan se poora seekh sakta hai. Level 0 se Level 5 tak, Hinglish, English ya Hindi mein. Roz sirf 15 minute.',english:'A student who knows nothing can learn everything here. Level 0 to Level 5, in Hinglish, English or Hindi. Just 15 minutes a day.',hindi:'जो छात्र कुछ नहीं जानता, वह भी यहाँ से पूरा सीख सकता है। लेवल 0 से लेवल 5 तक, हिंदी या अंग्रेज़ी में। रोज़ सिर्फ 15 मिनट।'},
tagline:{hinglish:'Basic to Advanced • No big fees • Phone-first',english:'Basic to Advanced • No big fees • Phone-first',hindi:'बेसिक से एडवांस्ड • कम फीस • फोन पर सीखें'}
};
function t(k){var l=state.lang;return (S[k]&&(S[k][l]||S[k].hinglish))||k;}
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function L(obj){if(!obj)return '';if(typeof obj==='string')return obj;return obj[state.lang]||obj.hinglish||obj.english||'';}

/* ---- LESSONS: 18 lessons, 3 per level ---- */
var LEVELS=[
{id:0,title:{hinglish:'Level 0 — True Zero',english:'Level 0 — True Zero',hindi:'लेवल 0 — बिल्कुल शुरुआत'},desc:{hinglish:'Computer, browser, files — bilkul shuruaat se.',english:'Computer, browser, files — from absolute zero.',hindi:'कंप्यूटर, ब्राउज़र, फ़ाइलें — बिल्कुल शुरुआत से।'}},
{id:1,title:{hinglish:'Level 1 — Thinking',english:'Level 1 — Thinking',hindi:'लेवल 1 — सोचना'},desc:{hinglish:'Logic aur problem ko steps mein todna.',english:'Logic and breaking a problem into steps.',hindi:'तर्क और समस्या को चरणों में तोड़ना।'}},
{id:2,title:{hinglish:'Level 2 — First Code (Python)',english:'Level 2 — First Code (Python)',hindi:'लेवल 2 — पहला कोड (Python)'},desc:{hinglish:'Python basics — variables, loops, if-else.',english:'Python basics — variables, loops, if-else.',hindi:'Python की बुनियाद — वेरिएबल, लूप, if-else।'}},
{id:3,title:{hinglish:'Level 3 — Websites (HTML / CSS / JS)',english:'Level 3 — Websites (HTML / CSS / JS)',hindi:'लेवल 3 — वेबसाइट (HTML / CSS / JS)'},desc:{hinglish:'Apni pehli website banao.',english:'Build your first website.',hindi:'अपनी पहली वेबसाइट बनाएँ।'}},
{id:4,title:{hinglish:'Level 4 — Advanced (DSA + Projects)',english:'Level 4 — Advanced (DSA + Projects)',hindi:'लेवल 4 — एडवांस्ड (DSA + प्रोजेक्ट)'},desc:{hinglish:'Data structures aur ek poora project.',english:'Data structures and one full project.',hindi:'डेटा स्ट्रक्चर और एक पूरा प्रोजेक्ट।'}},
{id:5,title:{hinglish:'Level 5 — Job Ready',english:'Level 5 — Job Ready',hindi:'लेवल 5 — नौकरी के लिए तैयार'},desc:{hinglish:'Interview, aptitude, resume aur mock test.',english:'Interview, aptitude, resume and mock test.',hindi:'इंटरव्यू, योग्यता, रिज़्यूमे और मॉक टेस्ट।'}}
];
/* Quiz helper: q/opts are {hinglish,english,hindi} objects */
function Q(qH,qE,qHi,oH,oE,oHi,ans){return{q:{hinglish:qH,english:qE,hindi:qHi},opts:[{hinglish:oH[0],english:oE[0],hindi:oHi[0]},{hinglish:oH[1],english:oE[1],hindi:oHi[1]},{hinglish:oH[2],english:oE[2],hindi:oHi[2]},{hinglish:oH[3],english:oE[3],hindi:oHi[3]}],ans:ans};}
var LESSONS=[
{id:'L01',level:0,ptype:'task',title:{hinglish:'What is a computer?',english:'What is a computer?',hindi:'कंप्यूटर क्या है?'},
learn:{hinglish:'Computer ek machine hai jo instructions follow karta hai. Iske 3 main parts hain: Input (keyboard, mouse), Process (CPU — dimaag), Output (screen). Phone bhi ek chhota computer hai. File matlab saved kaam — jaise photo ya notes. Folder matlab files rakhne ki jagah, jaise almari mein dibbe.',
english:'A computer is a machine that follows instructions. It has 3 main parts: Input (keyboard, mouse), Processing (CPU — the brain), Output (screen). A phone is also a small computer. A file is saved work — like a photo or notes. A folder is a place to keep files, like boxes in a cupboard.',
hindi:'कंप्यूटर एक मशीन है जो निर्देशों का पालन करती है। इसके 3 मुख्य भाग हैं: इनपुट (कीबोर्ड, माउस), प्रोसेसिंग (CPU — दिमाग), आउटपुट (स्क्रीन)। फोन भी एक छोटा कंप्यूटर है। फ़ाइल मतलब सहेजा हुआ काम — जैसे फोटो या नोट्स। फ़ोल्डर फ़ाइलें रखने की जगह है।'},
practice:{starter:'',hint:{hinglish:'Apne phone mein ek folder banao "Zero2Pro" aur usme ek note likho.',english:'On your phone, make a folder called "Zero2Pro" and write one note in it.',hindi:'अपने फोन में "Zero2Pro" नाम का फ़ोल्डर बनाएँ और उसमें एक नोट लिखें।'}},
quiz:[Q('CPU kya hai?','What is the CPU?','CPU क्या है?',['Screen','Computer ka dimaag','Keyboard','Mouse'],['Screen','The brain of the computer','Keyboard','Mouse'],['स्क्रीन','कंप्यूटर का दिमाग','कीबोर्ड','माउस'],1),
Q('File kya hoti hai?','What is a file?','फ़ाइल क्या होती है?',['Saved kaam','Ek button','Ek wire','Ek app ka naam'],['Saved work','A button','A wire','An app name'],['सहेजा हुआ काम','एक बटन','एक तार','एक ऐप का नाम'],0),
Q('Folder ka kaam kya hai?','What is a folder for?','फ़ोल्डर का काम क्या है?',['Files rakhna','Internet chalana','Photo lena','Sound badhana'],['Keeping files','Running the internet','Taking photos','Raising sound'],['फ़ाइलें रखना','इंटरनेट चलाना','फोटो लेना','आवाज़ बढ़ाना'],0),
Q('Phone kya hai?','What is a phone?','फोन क्या है?',['Chhota computer','Sirf ek ghadi','Ek TV','Ek radio'],['A small computer','Only a watch','A TV','A radio'],['एक छोटा कंप्यूटर','सिर्फ एक घड़ी','एक टीवी','एक रेडियो'],0),
Q('Mouse kya hai?','What is a mouse?','माउस क्या है?',['Output device','Input device','Storage','Battery'],['Output device','Input device','Storage','Battery'],['आउटपुट डिवाइस','इनपुट डिवाइस','स्टोरेज','बैटरी'],1)],
build:{hinglish:'Apna "Zero2Pro" folder banao aur usme apna pehla note likho: "Main coding seekh raha hoon."',english:'Make your "Zero2Pro" folder and write your first note in it: "I am learning coding."',hindi:'अपना "Zero2Pro" फ़ोल्डर बनाएँ और उसमें पहला नोट लिखें: "मैं कोडिंग सीख रहा हूँ।"'}},
{id:'L02',level:0,ptype:'task',title:{hinglish:'Browser aur Internet',english:'Browser and Internet',hindi:'ब्राउज़र और इंटरनेट'},
learn:{hinglish:'Browser woh app hai jisse hum websites kholte hain — jaise Chrome. Internet duniya bhar ke computers ka network hai. Website ka address hota hai, jaise zero2pro.site. Search karne ke liye hum Google use karte hain. Link par click karo to nayi page khulti hai.',
english:'A browser is the app we use to open websites — like Chrome. The internet is a network of computers around the world. A website has an address, like zero2pro.site. We use Google to search. Click a link to open a new page.',
hindi:'ब्राउज़र वह ऐप है जिससे हम वेबसाइट खोलते हैं — जैसे Chrome। इंटरनेट दुनिया भर के कंप्यूटरों का नेटवर्क है। वेबसाइट का पता होता है, जैसे zero2pro.site। खोजने के लिए हम Google इस्तेमाल करते हैं। लिंक पर क्लिक करने से नया पेज खुलता है।'},
practice:{starter:'',hint:{hinglish:'Browser kholo, "Zero2Pro" search karo, aur pehli 3 links ke naam likho.',english:'Open your browser, search "Zero2Pro", and write the names of the first 3 links.',hindi:'ब्राउज़र खोलें, "Zero2Pro" खोजें, और पहले 3 लिंक के नाम लिखें।'}},
quiz:[Q('Browser kya hai?','What is a browser?','ब्राउज़र क्या है?',['Website kholne wala app','Ek game','Ek photo app','Ek charger'],['An app to open websites','A game','A photo app','A charger'],['वेबसाइट खोलने वाला ऐप','एक गेम','एक फोटो ऐप','एक चार्जर'],0),
Q('Chrome kya hai?','What is Chrome?','Chrome क्या है?',['Ek browser','Ek phone','Ek keyboard','Ek file'],['A browser','A phone','A keyboard','A file'],['एक ब्राउज़र','एक फोन','एक कीबोर्ड','एक फ़ाइल'],0),
Q('Website ka address kya kehlata hai?','What is a website address called?','वेबसाइट के पते को क्या कहते हैं?',['URL','Password','File','Folder'],['URL','Password','File','Folder'],['URL','पासवर्ड','फ़ाइल','फ़ोल्डर'],0),
Q('Search ke liye kya use karte hain?','What do we use to search?','खोजने के लिए क्या इस्तेमाल करते हैं?',['Google','Calculator','Camera','Clock'],['Google','Calculator','Camera','Clock'],['Google','कैलकुलेटर','कैमरा','घड़ी'],0),
Q('Link par click karne se kya hota hai?','What happens when you click a link?','लिंक पर क्लिक करने से क्या होता है?',['Nayi page khulti hai','Phone band hota hai','Photo delete hoti hai','Kuch nahi'],['A new page opens','The phone switches off','A photo is deleted','Nothing'],['नया पेज खुलता है','फोन बंद होता है','फोटो डिलीट होती है','कुछ नहीं'],0)],
build:{hinglish:'Apne 3 favourite websites ke naam aur unke kaam likho.',english:'Write the names of your 3 favourite websites and what they do.',hindi:'अपनी 3 पसंदीदा वेबसाइट के नाम और उनके काम लिखें।'}},
{id:'L03',level:0,ptype:'js',title:{hinglish:'Pehla code — Hello!',english:'First code — Hello!',hindi:'पहला कोड — Hello!'},
learn:{hinglish:'Code matlab computer ko instructions dena, ek line mein ek kaam. JavaScript mein likhte hain: console.log("Hello") — iska matlab hai "Hello dikhao". Run dabao, aur neeche output mein Hello dikhega. Galti ho to daro mat — error batata hai kya theek karna hai.',
english:'Code means giving instructions to the computer, one job per line. In JavaScript we write: console.log("Hello") — it means "show Hello". Press Run and you will see Hello in the output below. Do not fear errors — an error tells you what to fix.',
hindi:'कोड मतलब कंप्यूटर को निर्देश देना, एक लाइन में एक काम। JavaScript में लिखते हैं: console.log("Hello") — इसका मतलब है "Hello दिखाओ"। Run दबाएँ, नीचे आउटपुट में Hello दिखेगा। गलती से डरें नहीं — एरर बताता है कि क्या ठीक करना है।'},
practice:{starter:'console.log("Hello, mera naam Rahul hai");\nconsole.log(2 + 3);',hint:{hinglish:'Apna naam badlo aur 10 + 5 ka answer dekho.',english:'Change the name to yours and see the answer of 10 + 5.',hindi:'नाम बदलकर अपना नाम लिखें और 10 + 5 का उत्तर देखें।'}},
quiz:[Q('console.log kya karta hai?','What does console.log do?','console.log क्या करता है?',['Kuch dikhata hai','Phone band karta hai','File delete karta hai','Internet band karta hai'],['Shows something','Switches the phone off','Deletes a file','Switches the internet off'],['कुछ दिखाता है','फोन बंद करता है','फ़ाइल डिलीट करता है','इंटरनेट बंद करता है'],0),
Q('Code mein ek line ka matlab?','What does one line of code mean?','कोड में एक लाइन का मतलब?',['Ek kaam','Ek photo','Ek gaana','Ek call'],['One job','A photo','A song','A call'],['एक काम','एक फोटो','एक गाना','एक कॉल'],0),
Q('2 + 3 ka answer?','What is 2 + 3?','2 + 3 का उत्तर?',['5','6','23','0'],['5','6','23','0'],['5','6','23','0'],0),
Q('Error ka matlab?','What does an error mean?','एरर का मतलब?',['Kuch theek karna hai','Sab khatam','Phone kharab','Internet nahi'],['Something needs fixing','Everything is over','The phone is broken','No internet'],['कुछ ठीक करना है','सब खत्म','फोन खराब','इंटरनेट नहीं'],0),
Q('Run button kya karta hai?','What does the Run button do?','Run बटन क्या करता है?',['Code chalata hai','Code delete karta hai','Page band karta hai','Photo leta hai'],['Runs the code','Deletes the code','Closes the page','Takes a photo'],['कोड चलाता है','कोड डिलीट करता है','पेज बंद करता है','फोटो लेता है'],0)],
build:{hinglish:'Apna naam aur apne gaon/sheher ka naam print karo, 2 lines mein.',english:'Print your name and your village/city name, in 2 lines.',hindi:'अपना नाम और अपने गाँव/शहर का नाम 2 लाइनों में प्रिंट करें।'}},
{id:'L04',level:1,ptype:'task',title:{hinglish:'Problem ko steps mein todna',english:'Breaking a problem into steps',hindi:'समस्या को चरणों में तोड़ना'},
learn:{hinglish:'Badi problem ko chhote steps mein tod do. Example: Chai banana — 1) Paani ubalo, 2) Chai patti dalo, 3) Doodh dalo, 4) Chhano. Coding bhi aise hi hoti hai: pehle steps likho, phir har step ka code likho. Jo step samajh na aaye, use aur chhota tod do.',
english:'Break a big problem into small steps. Example: making tea — 1) Boil water, 2) Add tea leaves, 3) Add milk, 4) Strain it. Coding works the same way: first write the steps, then write code for each step. If a step is still unclear, break it smaller.',
hindi:'बड़ी समस्या को छोटे चरणों में तोड़ दें। उदाहरण: चाय बनाना — 1) पानी उबालें, 2) चाय पत्ती डालें, 3) दूध डालें, 4) छानें। कोडिंग भी ऐसे ही होती है: पहले चरण लिखें, फिर हर चरण का कोड लिखें। जो चरण समझ न आए, उसे और छोटा तोड़ दें।'},
practice:{starter:'',hint:{hinglish:'"Maggie banana" ko 4 steps mein likho.',english:'Write "making Maggi" in 4 steps.',hindi:'"मैगी बनाना" को 4 चरणों में लिखें।'}},
quiz:[Q('Pehla step kya hai?','What is the first step?','पहला चरण क्या है?',['Problem ko todna','Code likhna','Run dabana','Sab bhool jana'],['Breaking the problem','Writing code','Pressing Run','Forgetting everything'],['समस्या को तोड़ना','कोड लिखना','Run दबाना','सब भूल जाना'],0),
Q('Chai banane ka pehla step?','What is the first step of making tea?','चाय बनाने का पहला चरण?',['Paani ubalna','Doodh dalna','Chhana','Peena'],['Boiling water','Adding milk','Straining','Drinking'],['पानी उबालना','दूध डालना','छानना','पीना'],0),
Q('Step samajh na aaye to?','If a step is unclear, what to do?','चरण समझ न आए तो?',['Aur chhota tod do','Chhod do','Guess karo','Rona shuru karo'],['Break it smaller','Leave it','Guess','Start crying'],['और छोटा तोड़ दें','छोड़ दें','अंदाज़ा लगाएँ','रोना शुरू करें'],0),
Q('Coding mein pehle kya likhte hain?','In coding, what do we write first?','कोडिंग में पहले क्या लिखते हैं?',['Steps','Final code','Error','Password'],['Steps','Final code','Error','Password'],['चरण','अंतिम कोड','एरर','पासवर्ड'],0),
Q('Steps likhne se kya fayda?','What is the benefit of writing steps?','चरण लिखने से क्या फायदा?',['Kaam aasan ho jata hai','Kaam mushkil hota hai','Time waste hota hai','Kuch nahi'],['The work becomes easy','The work becomes hard','Time is wasted','Nothing'],['काम आसान हो जाता है','काम मुश्किल होता है','समय बर्बाद होता है','कुछ नहीं'],0)],
build:{hinglish:'Apne roz ka ek kaam (jaise school jaana) 5 steps mein likho.',english:'Write one daily task (like going to school) in 5 steps.',hindi:'अपना एक रोज़ का काम (जैसे स्कूल जाना) 5 चरणों में लिखें।'}},
{id:'L05',level:1,ptype:'js',title:{hinglish:'Variables — naam wali dibbi',english:'Variables — a named box',hindi:'वेरिएबल — नाम वाला डिब्बा'},
learn:{hinglish:'Variable matlab naam wali dibbi jisme value rakhte hain. Example: let naam = "Rahul"; — "naam" dibbi hai, "Rahul" usme hai. let umar = 17; — umar mein 17 hai. Baad mein hum naam ko use kar sakte hain, dobara likhne ki zaroorat nahi.',
english:'A variable is a named box that holds a value. Example: let naam = "Rahul"; — "naam" is the box, "Rahul" is inside it. let umar = 17; — umar holds 17. Later we can use the name instead of writing the value again.',
hindi:'वेरिएबल मतलब नाम वाला डिब्बा जिसमें मान रखते हैं। उदाहरण: let naam = "Rahul"; — "naam" डिब्बा है, "Rahul" उसमें है। let umar = 17; — उम्र में 17 है। बाद में हम नाम का इस्तेमाल कर सकते हैं, मान दोबारा लिखने की ज़रूरत नहीं।'},
practice:{starter:'let naam = "Rahul";\nlet umar = 17;\nconsole.log(naam);\nconsole.log(umar + 1);',hint:{hinglish:'Apna naam aur umar dalo. umar + 5 karke dekho.',english:'Put your name and age. Try age + 5.',hindi:'अपना नाम और उम्र डालें। उम्र + 5 करके देखें।'}},
quiz:[Q('Variable kya hai?','What is a variable?','वेरिएबल क्या है?',['Naam wali dibbi','Ek photo','Ek gaana','Ek wire'],['A named box','A photo','A song','A wire'],['नाम वाला डिब्बा','एक फोटो','एक गाना','एक तार'],0),
Q('let naam = "Rahul" mein naam kya hai?','In let naam = "Rahul", what is naam?','let naam = "Rahul" में naam क्या है?',['Variable ka naam','Ek number','Ek error','Ek file'],['The variable name','A number','An error','A file'],['वेरिएबल का नाम','एक नंबर','एक एरर','एक फ़ाइल'],0),
Q('let umar = 17 mein 17 kya hai?','In let umar = 17, what is 17?','let umar = 17 में 17 क्या है?',['Value','Naam','Code','File'],['Value','Name','Code','File'],['मान','नाम','कोड','फ़ाइल'],0),
Q('Variable ka fayda?','What is the benefit of a variable?','वेरिएबल का फायदा?',['Value dobara use kar sakte hain','Kuch nahi','Phone fast hota hai','Internet chalta hai'],['We can reuse the value','Nothing','The phone gets fast','The internet runs'],['मान दोबारा इस्तेमाल कर सकते हैं','कुछ नहीं','फोन तेज़ होता है','इंटरनेट चलता है'],0),
Q('"Rahul" kis type ki value hai?','What type of value is "Rahul"?','"Rahul" किस प्रकार का मान है?',['Text (string)','Number','Boolean','File'],['Text (string)','Number','Boolean','File'],['टेक्स्ट (string)','नंबर','बूलियन','फ़ाइल'],0)],
build:{hinglish:'Apne 2 doston ke naam aur umar variables mein rakho aur print karo.',english:'Store 2 friends’ names and ages in variables and print them.',hindi:'अपने 2 दोस्तों के नाम और उम्र वेरिएबल में रखें और प्रिंट करें।'}},
{id:'L06',level:1,ptype:'py',title:{hinglish:'If-Else — faisla lena',english:'If-Else — making a decision',hindi:'If-Else — फैसला लेना'},
learn:{hinglish:'If matlab "agar". Example: agar umar 18 se zyada hai to "Adult" print karo, warna "Minor". Python mein likhte hain:\nif umar >= 18:\n    print("Adult")\nelse:\n    print("Minor")\nDhyaan do: colon (:) aur 4 spaces ka indent zaroori hai.',
english:'If means "if". Example: if age is 18 or more, print "Adult", else print "Minor". In Python we write:\nif umar >= 18:\n    print("Adult")\nelse:\n    print("Minor")\nNote: the colon (:) and 4-space indent are required.',
hindi:'If मतलब "अगर"। उदाहरण: अगर उम्र 18 या ज़्यादा है तो "Adult" प्रिंट करें, वरना "Minor"। Python में लिखते हैं:\nif umar >= 18:\n    print("Adult")\nelse:\n    print("Minor")\nध्यान दें: कोलन (:) और 4 स्पेस का इंडेंट ज़रूरी है।'},
practice:{starter:'umar = 17\nif umar >= 18:\n    print("Adult")\nelse:\n    print("Minor")',hint:{hinglish:'Umar ko 20 badlo aur Run karo. Phir 15 karke dekho.',english:'Change the age to 20 and Run. Then try 15.',hindi:'उम्र को 20 बदलकर Run करें। फिर 15 करके देखें।'}},
quiz:[Q('If ka matlab?','What does if mean?','If का मतलब?',['Agar','Hamesha','Kabhi nahi','Band karo'],['If','Always','Never','Stop'],['अगर','हमेशा','कभी नहीं','बंद करो'],0),
Q('else kab chalta hai?','When does else run?','else कब चलता है?',['Jab if galat ho','Hamesha','Kabhi nahi','Pehle'],['When if is false','Always','Never','First'],['जब if गलत हो','हमेशा','कभी नहीं','पहले'],0),
Q('Python mein if ke baad kya aata hai?','What comes after if in Python?','Python में if के बाद क्या आता है?',['Colon (:)','Full stop','Comma','Question mark'],['Colon (:)','Full stop','Comma','Question mark'],['कोलन (:)','फुल स्टॉप','कॉमा','प्रश्न चिह्न'],0),
Q('Indent matlab?','What is indent?','इंडेंट मतलब?',['Line ke start mein spaces','Line ke end mein dot','Bada font','Naya page'],['Spaces at the start of a line','A dot at the end','Big font','A new page'],['लाइन की शुरुआत में स्पेस','लाइन के अंत में डॉट','बड़ा फ़ॉन्ट','नया पेज'],0),
Q('umar = 20 ho to kya print hoga?','If umar = 20, what prints?','umar = 20 हो तो क्या प्रिंट होगा?',['Adult','Minor','Error','Kuch nahi'],['Adult','Minor','Error','Nothing'],['Adult','Minor','एरर','कुछ नहीं'],0)],
build:{hinglish:'Ek program likho: agar marks 40 se zyada hain to "Pass", warna "Fail".',english:'Write a program: if marks are more than 40, print "Pass", else "Fail".',hindi:'एक प्रोग्राम लिखें: अगर अंक 40 से ज़्यादा हैं तो "Pass", वरना "Fail"।'}},
{id:'L07',level:2,ptype:'py',title:{hinglish:'Python Variables aur Print',english:'Python Variables and Print',hindi:'Python वेरिएबल और Print'},
learn:{hinglish:'Python mein variable banane ke liye let nahi likhte. Seedha likhte hain: naam = "Rahul". Print karne ke liye: print(naam). Python simple hai — semicolon (;) ki zaroorat nahi. Number aur text dono aise hi rakhte hain.',
english:'In Python we do not write let to make a variable. We write directly: naam = "Rahul". To print: print(naam). Python is simple — no semicolon (;) needed. Numbers and text are stored the same way.',
hindi:'Python में वेरिएबल बनाने के लिए let नहीं लिखते। सीधे लिखते हैं: naam = "Rahul"। प्रिंट के लिए: print(naam)। Python आसान है — सेमीकोलन (;) की ज़रूरत नहीं। नंबर और टेक्स्ट ऐसे ही रखते हैं।'},
practice:{starter:'naam = "Rahul"\numar = 17\nprint(naam)\nprint(umar + 3)',hint:{hinglish:'Apna naam likho aur umar + 10 print karo.',english:'Write your name and print age + 10.',hindi:'अपना नाम लिखें और उम्र + 10 प्रिंट करें।'}},
quiz:[Q('Python mein variable kaise banate hain?','How do you make a variable in Python?','Python में वेरिएबल कैसे बनाते हैं?',['naam = "Rahul"','let naam = "Rahul";','var naam','naam : Rahul'],['naam = "Rahul"','let naam = "Rahul";','var naam','naam : Rahul'],['naam = "Rahul"','let naam = "Rahul";','var naam','naam : Rahul'],0),
Q('Python mein print kaise karte hain?','How do you print in Python?','Python में प्रिंट कैसे करते हैं?',['print(naam)','console.log(naam)','show(naam)','echo naam'],['print(naam)','console.log(naam)','show(naam)','echo naam'],['print(naam)','console.log(naam)','show(naam)','echo naam'],0),
Q('Python mein semicolon zaroori hai?','Is a semicolon needed in Python?','Python में सेमीकोलन ज़रूरी है?',['Nahi','Haan, hamesha','Sirf number mein','Sirf text mein'],['No','Yes, always','Only for numbers','Only for text'],['नहीं','हाँ, हमेशा','सिर्फ नंबर में','सिर्फ टेक्स्ट में'],0),
Q('umar + 3 mein + kya hai?','In umar + 3, what is +?','umar + 3 में + क्या है?',['Operator (jod)','Variable','Function','File'],['Operator (addition)','Variable','Function','File'],['ऑपरेटर (जोड़)','वेरिएबल','फंक्शन','फ़ाइल'],0),
Q('print("Hi") kya dikhayega?','What will print("Hi") show?','print("Hi") क्या दिखाएगा?',['Hi','"Hi"','Error','HiHi'],['Hi','"Hi"','Error','HiHi'],['Hi','"Hi"','एरर','HiHi'],0)],
build:{hinglish:'Apna naam, gaon aur favourite subject print karo — 3 lines.',english:'Print your name, village, and favourite subject — 3 lines.',hindi:'अपना नाम, गाँव और पसंदीदा विषय प्रिंट करें — 3 लाइनें।'}},
{id:'L08',level:2,ptype:'py',title:{hinglish:'Loops — ek kaam baar-baar',english:'Loops — one job again and again',hindi:'लूप — एक काम बार-बार'},
learn:{hinglish:'Loop matlab ek kaam baar-baar karna bina dobara likhe. Python mein:\nfor i in range(5):\n    print(i)\nYe 0,1,2,3,4 print karega. range(5) matlab 0 se 4 tak. Loop se hum 100 baar ka kaam 2 lines mein kar lete hain.',
english:'A loop means doing one job again and again without rewriting it. In Python:\nfor i in range(5):\n    print(i)\nThis prints 0,1,2,3,4. range(5) means 0 to 4. With a loop we do 100 repetitions in 2 lines.',
hindi:'लूप मतलब एक काम बार-बार करना बिना दोबारा लिखे। Python में:\nfor i in range(5):\n    print(i)\nयह 0,1,2,3,4 प्रिंट करेगा। range(5) मतलब 0 से 4 तक। लूप से हम 100 बार का काम 2 लाइनों में कर लेते हैं।'},
practice:{starter:'for i in range(5):\n    print(i)\nprint("Ho gaya!")',hint:{hinglish:'range(5) ko range(3) badlo. Phir apna naam 3 baar print karo.',english:'Change range(5) to range(3). Then print your name 3 times.',hindi:'range(5) को range(3) बदलें। फिर अपना नाम 3 बार प्रिंट करें।'}},
quiz:[Q('Loop ka kaam?','What is a loop for?','लूप का काम?',['Ek kaam baar-baar','Ek baar kaam','Phone band','File delete'],['Doing one job again and again','Doing a job once','Switching the phone off','Deleting a file'],['एक काम बार-बार','एक बार काम','फोन बंद','फ़ाइल डिलीट'],0),
Q('range(5) kya deta hai?','What does range(5) give?','range(5) क्या देता है?',['0 se 4','1 se 5','5 se 10','0 se 5'],['0 to 4','1 to 5','5 to 10','0 to 5'],['0 से 4','1 से 5','5 से 10','0 से 5'],0),
Q('for i in range(3) kitni baar chalega?','How many times will for i in range(3) run?','for i in range(3) कितनी बार चलेगा?',['3','2','5','1'],['3','2','5','1'],['3','2','5','1'],0),
Q('Loop mein indent kyun zaroori hai?','Why is indent needed in a loop?','लूप में इंडेंट क्यों ज़रूरी है?',['Batane ke liye kaunsi line loop mein hai','Sundar dikhne ke liye','Kuch nahi','Error lane ke liye'],['To show which lines are in the loop','To look pretty','For nothing','To cause an error'],['बताने के लिए कौनसी लाइन लूप में है','सुंदर दिखने के लिए','कुछ नहीं','एरर लाने के लिए'],0),
Q('100 baar print karne ka best tareeka?','What is the best way to print 100 times?','100 बार प्रिंट करने का सबसे अच्छा तरीका?',['Loop','100 lines likhna','Copy-paste 100 baar','Chhod dena'],['Loop','Writing 100 lines','Copy-paste 100 times','Leaving it'],['लूप','100 लाइनें लिखना','100 बार कॉपी-पेस्ट','छोड़ देना'],0)],
build:{hinglish:'1 se 10 tak ke numbers print karo loop se.',english:'Print numbers 1 to 10 using a loop.',hindi:'लूप से 1 से 10 तक के नंबर प्रिंट करें।'}},
{id:'L09',level:2,ptype:'py',title:{hinglish:'Functions — kaam ko naam do',english:'Functions — give a job a name',hindi:'फंक्शन — काम को नाम दो'},
learn:{hinglish:'Function matlab ek kaam ko naam dekar baar-baar use karna. Python mein:\ndef namaste(naam):\n    print("Namaste " + naam)\n\nnamaste("Rahul")\nAb "namaste" ko jab chaho bula sakte ho. def matlab define — "main ek function bana raha hoon".',
english:'A function means naming a job so you can reuse it. In Python:\ndef namaste(naam):\n    print("Namaste " + naam)\n\nnamaste("Rahul")\nNow you can call "namaste" whenever you want. def means define — "I am making a function".',
hindi:'फंक्शन मतलब एक काम को नाम देकर बार-बार इस्तेमाल करना। Python में:\ndef namaste(naam):\n    print("Namaste " + naam)\n\nnamaste("Rahul")\nअब "namaste" को जब चाहो बुला सकते हो। def मतलब define — "मैं एक फंक्शन बना रहा हूँ"।'},
practice:{starter:'def namaste(naam):\n    print("Namaste " + naam)\n\nnamaste("Rahul")\nnamaste("Priya")',hint:{hinglish:'Ek naya function banao jo "Shubh Prabhat" print kare.',english:'Make a new function that prints "Good Morning".',hindi:'एक नया फंक्शन बनाएँ जो "शुभ प्रभात" प्रिंट करे।'}},
quiz:[Q('Function ka fayda?','What is the benefit of a function?','फंक्शन का फायदा?',['Kaam dobara use karna','Kaam bhool jana','Phone band','File delete'],['Reusing the job','Forgetting the job','Switching the phone off','Deleting a file'],['काम दोबारा इस्तेमाल करना','काम भूल जाना','फोन बंद','फ़ाइल डिलीट'],0),
Q('Python mein function kaise banate hain?','How do you make a function in Python?','Python में फंक्शन कैसे बनाते हैं?',['def se','let se','for se','if se'],['With def','With let','With for','With if'],['def से','let से','for से','if से'],0),
Q('namaste("Rahul") mein "Rahul" kya hai?','In namaste("Rahul"), what is "Rahul"?','namaste("Rahul") में "Rahul" क्या है?',['Argument (input)','Function ka naam','Ek error','Ek file'],['Argument (input)','The function name','An error','A file'],['आर्गुमेंट (इनपुट)','फंक्शन का नाम','एक एरर','एक फ़ाइल'],0),
Q('Function ko chalane ko kya kehte hain?','What is running a function called?','फंक्शन को चलाने को क्या कहते हैं?',['Call karna','Delete karna','Band karna','Chhupana'],['Calling it','Deleting it','Closing it','Hiding it'],['कॉल करना','डिलीट करना','बंद करना','छिपाना'],0),
Q('def ke baad kya aata hai?','What comes after def?','def के बाद क्या आता है?',['Function ka naam aur colon','Full stop','Ek number','Ek photo'],['Function name and colon','Full stop','A number','A photo'],['फंक्शन का नाम और कोलन','फुल स्टॉप','एक नंबर','एक फोटो'],0)],
build:{hinglish:'Ek function banao jo do numbers ko jodkar print kare.',english:'Make a function that adds two numbers and prints the result.',hindi:'एक फंक्शन बनाएँ जो दो नंबर जोड़कर प्रिंट करे।'}},
{id:'L10',level:3,ptype:'html',title:{hinglish:'HTML — website ki haddi',english:'HTML — the skeleton of a website',hindi:'HTML — वेबसाइट की हड्डी'},
learn:{hinglish:'HTML se website ka structure banta hai. <h1> bada heading hai, <p> paragraph hai, <button> button hai. Har tag < > mein likha jata hai aur band hota hai </ >. Example: <h1>Mera Naam Rahul Hai</h1> — ye screen par bada dikhega.',
english:'HTML builds the structure of a website. <h1> is a big heading, <p> is a paragraph, <button> is a button. Every tag is written in < > and closed with </ >. Example: <h1>My Name Is Rahul</h1> — this shows big on screen.',
hindi:'HTML से वेबसाइट का ढाँचा बनता है। <h1> बड़ा शीर्षक है, <p> पैराग्राफ है, <button> बटन है। हर टैग < > में लिखा जाता है और </ > से बंद होता है। उदाहरण: <h1>मेरा नाम राहुल है</h1> — यह स्क्रीन पर बड़ा दिखेगा।'},
practice:{starter:'<h1>Mera Naam Rahul Hai</h1>\n<p>Main coding seekh raha hoon.</p>\n<button>Click Karo</button>',hint:{hinglish:'Apna naam badlo aur ek aur <p> line jodo.',english:'Change the name to yours and add one more <p> line.',hindi:'नाम बदलकर अपना नाम लिखें और एक और <p> लाइन जोड़ें।'}},
quiz:[Q('HTML ka kaam?','What is HTML for?','HTML का काम?',['Website ka structure','Website ka rang','Website ka data','Website ka password'],['Website structure','Website colour','Website data','Website password'],['वेबसाइट का ढाँचा','वेबसाइट का रंग','वेबसाइट का डेटा','वेबसाइट का पासवर्ड'],0),
Q('<h1> kya hai?','What is <h1>?','<h1> क्या है?',['Bada heading','Chhota text','Ek photo','Ek button'],['A big heading','Small text','A photo','A button'],['बड़ा शीर्षक','छोटा टेक्स्ट','एक फोटो','एक बटन'],0),
Q('<p> kya hai?','What is <p>?','<p> क्या है?',['Paragraph','Photo','Link','Table'],['Paragraph','Photo','Link','Table'],['पैराग्राफ','फोटो','लिंक','टेबल'],0),
Q('Tag kaise band hota hai?','How is a tag closed?','टैग कैसे बंद होता है?',['</ > se','( ) se','[ ] se','{ } se'],['With </ >','With ( )','With [ ]','With { }'],['</ > से','( ) से','[ ] से','{ } से'],0),
Q('<button> kya banata hai?','What does <button> make?','<button> क्या बनाता है?',['Ek button','Ek photo','Ek heading','Ek file'],['A button','A photo','A heading','A file'],['एक बटन','एक फोटो','एक शीर्षक','एक फ़ाइल'],0)],
build:{hinglish:'Apna chhota bio page banao: naam (h1), 2 lines (p), aur ek button.',english:'Make your small bio page: name (h1), 2 lines (p), and one button.',hindi:'अपना छोटा बायो पेज बनाएँ: नाम (h1), 2 लाइनें (p), और एक बटन।'}},
{id:'L11',level:3,ptype:'html',title:{hinglish:'CSS — website ko sundar banao',english:'CSS — make the website beautiful',hindi:'CSS — वेबसाइट को सुंदर बनाएँ'},
learn:{hinglish:'CSS se rang, size aur style badalte hain. Example: h1 { color: green; } — heading hara ho jayega. p { font-size: 18px; } — text bada hoga. HTML haddi hai, CSS uske kapde hain.',
english:'CSS changes colour, size and style. Example: h1 { color: green; } — the heading becomes green. p { font-size: 18px; } — the text becomes bigger. HTML is the skeleton, CSS is its clothes.',
hindi:'CSS से रंग, आकार और स्टाइल बदलते हैं। उदाहरण: h1 { color: green; } — शीर्षक हरा हो जाएगा। p { font-size: 18px; } — टेक्स्ट बड़ा होगा। HTML हड्डी है, CSS उसके कपड़े हैं।'},
practice:{starter:'<style>h1{color:green} p{font-size:18px}</style>\n<h1>Mera Naam Rahul Hai</h1>\n<p>Main coding seekh raha hoon.</p>',hint:{hinglish:'Rang ko blue badlo aur font-size 22px karo.',english:'Change the colour to blue and font-size to 22px.',hindi:'रंग को blue बदलें और font-size 22px करें।'}},
quiz:[Q('CSS ka kaam?','What is CSS for?','CSS का काम?',['Rang aur style','Structure','Data','Password'],['Colour and style','Structure','Data','Password'],['रंग और स्टाइल','ढाँचा','डेटा','पासवर्ड'],0),
Q('h1 { color: green; } kya karega?','What will h1 { color: green; } do?','h1 { color: green; } क्या करेगा?',['Heading hara hoga','Heading gayab hoga','Heading chhota hoga','Kuch nahi'],['The heading becomes green','The heading disappears','The heading becomes small','Nothing'],['शीर्षक हरा होगा','शीर्षक गायब होगा','शीर्षक छोटा होगा','कुछ नहीं'],0),
Q('font-size se kya badalta hai?','What does font-size change?','font-size से क्या बदलता है?',['Text ka size','Text ka rang','Page ka naam','Button ka kaam'],['Text size','Text colour','Page name','Button job'],['टेक्स्ट का आकार','टेक्स्ट का रंग','पेज का नाम','बटन का काम'],0),
Q('HTML haddi hai to CSS kya hai?','If HTML is the skeleton, what is CSS?','HTML हड्डी है तो CSS क्या है?',['Kapde (style)','Dimaag','Paer','Khaana'],['Clothes (style)','Brain','Legs','Food'],['कपड़े (स्टाइल)','दिमाग','पैर','खाना'],0),
Q('color: blue ka matlab?','What does color: blue mean?','color: blue का मतलब?',['Neela rang','Laal rang','Hara rang','Kala rang'],['Blue colour','Red colour','Green colour','Black colour'],['नीला रंग','लाल रंग','हरा रंग','काला रंग'],0)],
build:{hinglish:'Apne bio page ka heading neela aur background halka peela banao.',english:'Make your bio page heading blue and background light yellow.',hindi:'अपने बायो पेज का शीर्षक नीला और बैकग्राउंड हल्का पीला बनाएँ।'}},
{id:'L12',level:3,ptype:'js',title:{hinglish:'JavaScript — button ko zinda karo',english:'JavaScript — make the button alive',hindi:'JavaScript — बटन को ज़िंदा करें'},
learn:{hinglish:'JavaScript se website zinda hoti hai — click par kuch hota hai. Example: button dabao to "Namaste!" dikhe. Hum document.getElementById se element pakadte hain aur onclick par kaam karte hain. HTML structure hai, CSS style hai, JS kaam hai.',
english:'JavaScript makes a website alive — something happens on click. Example: press the button and "Namaste!" appears. We grab an element with document.getElementById and do work on onclick. HTML is structure, CSS is style, JS is action.',
hindi:'JavaScript से वेबसाइट ज़िंदा होती है — क्लिक पर कुछ होता है। उदाहरण: बटन दबाएँ तो "नमस्ते!" दिखे। हम document.getElementById से एलिमेंट पकड़ते हैं और onclick पर काम करते हैं। HTML ढाँचा है, CSS स्टाइल है, JS काम है।'},
practice:{starter:'let count = 0;\ncount = count + 1;\nconsole.log("Count: " + count);\nconsole.log("Button dabaya gaya!");',hint:{hinglish:'Count ko 5 se shuru karo aur 2 baar +1 karo.',english:'Start count at 5 and add 1 twice.',hindi:'Count को 5 से शुरू करें और 2 बार +1 करें।'}},
quiz:[Q('JavaScript ka kaam?','What is JavaScript for?','JavaScript का काम?',['Website ko zinda karna','Sirf rang','Sirf structure','File banana'],['Making the website alive','Only colour','Only structure','Making files'],['वेबसाइट को ज़िंदा करना','सिर्फ रंग','सिर्फ ढाँचा','फ़ाइल बनाना'],0),
Q('Click par kaam kaise hota hai?','How does work happen on click?','क्लिक पर काम कैसे होता है?',['onclick se','CSS se','HTML se','File se'],['With onclick','With CSS','With HTML','With a file'],['onclick से','CSS से','HTML से','फ़ाइल से'],0),
Q('count = count + 1 ka matlab?','What does count = count + 1 mean?','count = count + 1 का मतलब?',['Count 1 badhao','Count 1 ghatao','Count 0 karo','Count delete karo'],['Increase count by 1','Decrease count by 1','Make count 0','Delete count'],['Count 1 बढ़ाओ','Count 1 घटाओ','Count 0 करो','Count डिलीट करो'],0),
Q('HTML, CSS, JS mein JS kya hai?','Among HTML, CSS, JS, what is JS?','HTML, CSS, JS में JS क्या है?',['Kaam / Action','Rang','Structure','Photo'],['Action','Colour','Structure','Photo'],['काम / Action','रंग','ढाँचा','फोटो'],0),
Q('document.getElementById kya karta hai?','What does document.getElementById do?','document.getElementById क्या करता है?',['Element pakadta hai','Element delete karta hai','Page band karta hai','Photo leta hai'],['Grabs an element','Deletes an element','Closes the page','Takes a photo'],['एलिमेंट पकड़ता है','एलिमेंट डिलीट करता है','पेज बंद करता है','फोटो लेता है'],0)],
build:{hinglish:'Ek counter banao: har baar +1 ho aur number print ho.',english:'Make a counter: add 1 each time and print the number.',hindi:'एक काउंटर बनाएँ: हर बार +1 हो और नंबर प्रिंट हो।'}},
{id:'L13',level:4,ptype:'py',title:{hinglish:'Lists aur Dictionaries',english:'Lists and Dictionaries',hindi:'लिस्ट और डिक्शनरी'},
learn:{hinglish:'List matlab ek dibbe mein kai values: dost = ["Rahul", "Priya", "Amit"]. Dictionary matlab naam se value: student = {"naam": "Rahul", "umar": 17}. List mein order hota hai, dictionary mein naam se dhoondhte hain.',
english:'A list means many values in one box: dost = ["Rahul", "Priya", "Amit"]. A dictionary means value by name: student = {"naam": "Rahul", "umar": 17}. A list has order, a dictionary is searched by name.',
hindi:'लिस्ट मतलब एक डिब्बे में कई मान: dost = ["Rahul", "Priya", "Amit"]। डिक्शनरी मतलब नाम से मान: student = {"naam": "Rahul", "umar": 17}। लिस्ट में क्रम होता है, डिक्शनरी में नाम से खोजते हैं।'},
practice:{starter:'dost = ["Rahul", "Priya", "Amit"]\nprint(dost[0])\nprint(len(dost))',hint:{hinglish:'Apna 4th dost list mein jodo aur print karo.',english:'Add a 4th friend to the list and print it.',hindi:'अपना चौथा दोस्त लिस्ट में जोड़ें और प्रिंट करें।'}},
quiz:[Q('List kya hai?','What is a list?','लिस्ट क्या है?',['Ek dibbe mein kai values','Ek value','Ek photo','Ek file'],['Many values in one box','One value','A photo','A file'],['एक डिब्बे में कई मान','एक मान','एक फोटो','एक फ़ाइल'],0),
Q('dost[0] kya dega?','What will dost[0] give?','dost[0] क्या देगा?',['Pehla dost','Aakhri dost','Sab dost','Kuch nahi'],['The first friend','The last friend','All friends','Nothing'],['पहला दोस्त','आखिरी दोस्त','सब दोस्त','कुछ नहीं'],0),
Q('len(dost) kya hai?','What is len(dost)?','len(dost) क्या है?',['List ki lambai','List ka naam','List ka rang','List ki umar'],['The length of the list','The list name','The list colour','The list age'],['लिस्ट की लंबाई','लिस्ट का नाम','लिस्ट का रंग','लिस्ट की उम्र'],0),
Q('Dictionary mein value kaise dhoondhte hain?','How do you find a value in a dictionary?','डिक्शनरी में मान कैसे खोजते हैं?',['Naam (key) se','Number se','Rang se','Size se'],['By name (key)','By number','By colour','By size'],['नाम (key) से','नंबर से','रंग से','आकार से'],0),
Q('{"naam": "Rahul"} mein "naam" kya hai?','In {"naam": "Rahul"}, what is "naam"?','{"naam": "Rahul"} में "naam" क्या है?',['Key','Value','List','Function'],['Key','Value','List','Function'],['Key','Value','लिस्ट','फंक्शन'],0)],
build:{hinglish:'Apne 5 doston ki list banao aur loop se sabke naam print karo.',english:'Make a list of 5 friends and print all names with a loop.',hindi:'अपने 5 दोस्तों की लिस्ट बनाएँ और लूप से सबके नाम प्रिंट करें।'}},
{id:'L14',level:4,ptype:'js',title:{hinglish:'Arrays aur Sort — data ko sajao',english:'Arrays and Sort — arrange data',hindi:'ऐरे और Sort — डेटा सजाएँ'},
learn:{hinglish:'JavaScript mein list ko Array kehte hain: let marks = [70, 85, 60]. marks.sort() se chhota se bada ho jata hai. marks.length se pata chalta hai kitne hain. Array se hum marks, naam, price — sab arrange kar sakte hain.',
english:'In JavaScript a list is called an Array: let marks = [70, 85, 60]. marks.sort() arranges it small to big. marks.length tells how many there are. With arrays we can arrange marks, names, prices — everything.',
hindi:'JavaScript में लिस्ट को ऐरे कहते हैं: let marks = [70, 85, 60]। marks.sort() से छोटा से बड़ा हो जाता है। marks.length से पता चलता है कितने हैं। ऐरे से हम अंक, नाम, कीमत — सब सजा सकते हैं।'},
practice:{starter:'let marks = [70, 85, 60];\nconsole.log(marks.length);\nconsole.log(marks[0] + marks[1]);',hint:{hinglish:'Ek aur mark 90 jodo aur total print karo.',english:'Add one more mark 90 and print the total.',hindi:'एक और अंक 90 जोड़ें और कुल प्रिंट करें।'}},
quiz:[Q('JavaScript mein list ko kya kehte hain?','What is a list called in JavaScript?','JavaScript में लिस्ट को क्या कहते हैं?',['Array','Dictionary','File','Loop'],['Array','Dictionary','File','Loop'],['ऐरे','डिक्शनरी','फ़ाइल','लूप'],0),
Q('marks.length kya batata hai?','What does marks.length tell?','marks.length क्या बताता है?',['Kitne items hain','Sabse bada mark','Sabse chhota mark','Total'],['How many items there are','The biggest mark','The smallest mark','The total'],['कितने आइटम हैं','सबसे बड़ा अंक','सबसे छोटा अंक','कुल'],0),
Q('sort() kya karta hai?','What does sort() do?','sort() क्या करता है?',['Arrange karta hai','Delete karta hai','Add karta hai','Chhupata hai'],['Arranges','Deletes','Adds','Hides'],['सजाता है','डिलीट करता है','जोड़ता है','छिपाता है'],0),
Q('marks[0] kya hai?','What is marks[0]?','marks[0] क्या है?',['Pehla item','Aakhri item','Total','Length'],['The first item','The last item','The total','The length'],['पहला आइटम','आखिरी आइटम','कुल','लंबाई'],0),
Q('Array mein kya rakh sakte hain?','What can you keep in an array?','ऐरे में क्या रख सकते हैं?',['Numbers, naam, sab kuch','Sirf photo','Sirf file','Kuch nahi'],['Numbers, names, everything','Only photos','Only files','Nothing'],['नंबर, नाम, सब कुछ','सिर्फ फोटो','सिर्फ फ़ाइल','कुछ नहीं'],0)],
build:{hinglish:'Apne 5 subjects ke marks ka array banao aur total + average print karo.',english:'Make an array of your 5 subjects’ marks and print total + average.',hindi:'अपने 5 विषयों के अंकों का ऐरे बनाएँ और कुल + औसत प्रिंट करें।'}},
{id:'L15',level:4,ptype:'task',title:{hinglish:'Apna pehla poora project',english:'Your first full project',hindi:'आपका पहला पूरा प्रोजेक्ट'},
learn:{hinglish:'Ab tak tumne chhote parts seekhe. Project matlab sabko jodna: HTML structure + CSS style + JS kaam + data list. Example project: Apna Portfolio Page — naam, photo jagah, skills list, aur ek button jo "Namaste" dikhaye. Project ko 3 din mein tod do: Day 1 structure, Day 2 style, Day 3 kaam.',
english:'So far you learned small parts. A project means joining them all: HTML structure + CSS style + JS action + a data list. Example project: your Portfolio Page — name, photo place, skills list, and a button that shows "Namaste". Split the project into 3 days: Day 1 structure, Day 2 style, Day 3 action.',
hindi:'अब तक आपने छोटे भाग सीखे। प्रोजेक्ट मतलब सबको जोड़ना: HTML ढाँचा + CSS स्टाइल + JS काम + डेटा लिस्ट। उदाहरण प्रोजेक्ट: अपना पोर्टफोलियो पेज — नाम, फोटो की जगह, स्किल्स लिस्ट, और एक बटन जो "नमस्ते" दिखाए। प्रोजेक्ट को 3 दिन में तोड़ दें: दिन 1 ढाँचा, दिन 2 स्टाइल, दिन 3 काम।'},
practice:{starter:'',hint:{hinglish:'Apne project ke 3 din ka plan likho.',english:'Write your 3-day plan for your project.',hindi:'अपने प्रोजेक्ट के 3 दिन का प्लान लिखें।'}},
quiz:[Q('Project matlab?','What is a project?','प्रोजेक्ट मतलब?',['Sab parts ko jodna','Ek line code','Ek photo','Ek file'],['Joining all parts','One line of code','A photo','A file'],['सब भागों को जोड़ना','एक लाइन कोड','एक फोटो','एक फ़ाइल'],0),
Q('Portfolio mein kya hota hai?','What is in a portfolio?','पोर्टफोलियो में क्या होता है?',['Naam, skills, kaam','Sirf photo','Sirf naam','Kuch nahi'],['Name, skills, work','Only a photo','Only a name','Nothing'],['नाम, स्किल्स, काम','सिर्फ फोटो','सिर्फ नाम','कुछ नहीं'],0),
Q('Project ko kaise todte hain?','How do you split a project?','प्रोजेक्ट को कैसे तोड़ते हैं?',['Dinon / steps mein','Ek hi din mein sab','Bina plan ke','Chhod kar'],['Into days / steps','Everything in one day','Without a plan','By leaving it'],['दिनों / चरणों में','एक ही दिन में सब','बिना प्लान के','छोड़कर'],0),
Q('Day 1 mein kya karte hain?','What do you do on Day 1?','दिन 1 में क्या करते हैं?',['Structure (HTML)','Style (CSS)','Kaam (JS)','Test'],['Structure (HTML)','Style (CSS)','Action (JS)','Test'],['ढाँचा (HTML)','स्टाइल (CSS)','काम (JS)','टेस्ट'],0),
Q('Project complete hone par kya milega?','What do you get when the project is done?','प्रोजेक्ट पूरा होने पर क्या मिलेगा?',['Dikhane layak kaam','Kuch nahi','Sirf error','Ek photo'],['Work worth showing','Nothing','Only an error','A photo'],['दिखाने लायक काम','कुछ नहीं','सिर्फ एरर','एक फोटो'],0)],
build:{hinglish:'Apna Portfolio Page ka plan likho: kya-kya hoga, 3 din mein kaise banega.',english:'Write the plan for your Portfolio Page: what it will have, how you will build it in 3 days.',hindi:'अपने पोर्टफोलियो पेज का प्लान लिखें: क्या-क्या होगा, 3 दिन में कैसे बनेगा।'}},
{id:'L16',level:5,ptype:'task',title:{hinglish:'Resume banao — 1 page',english:'Make a resume — 1 page',hindi:'रिज़्यूमे बनाएँ — 1 पेज'},
learn:{hinglish:'Resume 1 page ka hona chahiye: Naam, phone, email, Skills (Python, HTML, JS), Projects (Portfolio Page), Education. Jhooth mat likho — jo seekha hai wahi likho. Resume mein numbers achhe lagte hain: "18 lessons, 5 projects".',
english:'A resume should be 1 page: Name, phone, email, Skills (Python, HTML, JS), Projects (Portfolio Page), Education. Do not lie — write only what you learned. Numbers look good on a resume: "18 lessons, 5 projects".',
hindi:'रिज़्यूमे 1 पेज का होना चाहिए: नाम, फोन, ईमेल, स्किल्स (Python, HTML, JS), प्रोजेक्ट (पोर्टफोलियो पेज), शिक्षा। झूठ मत लिखें — जो सीखा है वही लिखें। रिज़्यूमे में नंबर अच्छे लगते हैं: "18 पाठ, 5 प्रोजेक्ट"।'},
practice:{starter:'',hint:{hinglish:'Apni 3 skills aur 1 project likho.',english:'Write your 3 skills and 1 project.',hindi:'अपनी 3 स्किल्स और 1 प्रोजेक्ट लिखें।'}},
quiz:[Q('Resume kitne page ka?','How many pages should a resume be?','रिज़्यूमे कितने पेज का?',['1','5','10','20'],['1','5','10','20'],['1','5','10','20'],0),
Q('Resume mein kya likhte hain?','What do we write in a resume?','रिज़्यूमे में क्या लिखते हैं?',['Skills aur projects','Sirf photo','Sirf gaane','Kuch nahi'],['Skills and projects','Only a photo','Only songs','Nothing'],['स्किल्स और प्रोजेक्ट','सिर्फ फोटो','सिर्फ गाने','कुछ नहीं'],0),
Q('Resume mein jhooth?','Lying in a resume?','रिज़्यूमे में झूठ?',['Kabhi nahi','Chalta hai','Zaroori hai','Pehle din'],['Never','It is fine','It is needed','On the first day'],['कभी नहीं','चलता है','ज़रूरी है','पहले दिन'],0),
Q('Numbers kyun achhe lagte hain?','Why do numbers look good?','नंबर क्यों अच्छे लगते हैं?',['Kaam saaf dikhta hai','Rang achha lagta hai','Page bhar jata hai','Kuch nahi'],['The work is clear','The colour looks good','The page fills up','Nothing'],['काम साफ दिखता है','रंग अच्छा लगता है','पेज भर जाता है','कुछ नहीं'],0),
Q('Skills mein kya likhoge?','What will you write in Skills?','स्किल्स में क्या लिखेंगे?',['Jo seekha hai','Jo nahi seekha','Kuch bhi','Sirf naam'],['What you learned','What you did not learn','Anything','Only a name'],['जो सीखा है','जो नहीं सीखा','कुछ भी','सिर्फ नाम'],0)],
build:{hinglish:'Apna 1-page resume ka draft likho.',english:'Write a draft of your 1-page resume.',hindi:'अपने 1 पेज के रिज़्यूमे का ड्राफ्ट लिखें।'}},
{id:'L17',level:5,ptype:'task',title:{hinglish:'Interview — "Tell me about yourself"',english:'Interview — "Tell me about yourself"',hindi:'इंटरव्यू — "अपने बारे में बताइए"'},
learn:{hinglish:'Interview mein pehla sawal hota hai: "Tell me about yourself". Jawab 1 minute ka ho: 1) Naam + kahan se ho, 2) Kya seekha (Python, website), 3) Kya banaya (Portfolio), 4) Aage kya karna chahte ho. Darna mat — dheere bolo, saaf bolo.',
english:'The first interview question is: "Tell me about yourself". The answer should be 1 minute: 1) Name + where you are from, 2) What you learned (Python, website), 3) What you built (Portfolio), 4) What you want to do next. Do not fear — speak slowly and clearly.',
hindi:'इंटरव्यू में पहला सवाल होता है: "अपने बारे में बताइए"। जवाब 1 मिनट का हो: 1) नाम + कहाँ से हो, 2) क्या सीखा (Python, वेबसाइट), 3) क्या बनाया (पोर्टफोलियो), 4) आगे क्या करना चाहते हो। डरें नहीं — धीरे बोलें, साफ बोलें।'},
practice:{starter:'',hint:{hinglish:'Apna 1-minute jawab likho aur zor se 2 baar bolo.',english:'Write your 1-minute answer and say it aloud twice.',hindi:'अपना 1 मिनट का जवाब लिखें और ज़ोर से 2 बार बोलें।'}},
quiz:[Q('"Tell me about yourself" ka jawab kitna lamba?','How long should "Tell me about yourself" be?','"अपने बारे में बताइए" का जवाब कितना लंबा?',['1 minute','10 minute','5 second','1 ghanta'],['1 minute','10 minutes','5 seconds','1 hour'],['1 मिनट','10 मिनट','5 सेकंड','1 घंटा'],0),
Q('Pehle kya bolte hain?','What do you say first?','पहले क्या बोलते हैं?',['Naam + kahan se','Salary','Chhutti','Kuch nahi'],['Name + where from','Salary','Leave','Nothing'],['नाम + कहाँ से','वेतन','छुट्टी','कुछ नहीं'],0),
Q('Interview mein kaise bolna chahiye?','How should you speak in an interview?','इंटरव्यू में कैसे बोलना चाहिए?',['Dheere aur saaf','Bahut tez','Bahut dheere','Chup rehna'],['Slowly and clearly','Very fast','Very slow','Staying silent'],['धीरे और साफ','बहुत तेज़','बहुत धीरे','चुप रहना'],0),
Q('Apna project batana kyun zaroori hai?','Why is it important to mention your project?','अपना प्रोजेक्ट बताना क्यों ज़रूरी है?',['Kaam dikhta hai','Time waste hota hai','Kuch nahi','Dar lagta hai'],['Your work is visible','Time is wasted','Nothing','It scares you'],['काम दिखता है','समय बर्बाद होता है','कुछ नहीं','डर लगता है'],0),
Q('Interview se pehle kya karna chahiye?','What should you do before an interview?','इंटरव्यू से पहले क्या करना चाहिए?',['Practice karna','Kuch nahi','Der se jaana','Phone band karna'],['Practise','Nothing','Going late','Switching the phone off'],['अभ्यास करना','कुछ नहीं','देर से जाना','फोन बंद करना'],0)],
build:{hinglish:'Apna 1-minute introduction likho aur Mock Interview tab mein bolkar practice karo.',english:'Write your 1-minute introduction and practise it aloud in the Mock Interview tab.',hindi:'अपना 1 मिनट का परिचय लिखें और मॉक इंटरव्यू टैब में बोलकर अभ्यास करें।'}},
{id:'L18',level:5,ptype:'task',title:{hinglish:'Final Mock Test aur aage ka plan',english:'Final Mock Test and your next plan',hindi:'अंतिम मॉक टेस्ट और आगे का प्लान'},
learn:{hinglish:'Ab tum Zero se Pro tak aa gaye. Final test mein 5 sawal honge — har level se ek. Pass hone par tum Job Ready ho. Aage ka plan: 1) Roz 1 project banao, 2) Interview practice roz karo, 3) Apna resume har hafte update karo. Seekhna kabhi rukta nahi.',
english:'You have now come from Zero to Pro. The final test has 5 questions — one from each level. Passing it means you are Job Ready. Your next plan: 1) Build 1 project every day, 2) Practise interviews daily, 3) Update your resume every week. Learning never stops.',
hindi:'अब आप शून्य से प्रो तक आ गए। अंतिम टेस्ट में 5 सवाल होंगे — हर लेवल से एक। पास होने पर आप नौकरी के लिए तैयार हैं। आगे का प्लान: 1) रोज़ 1 प्रोजेक्ट बनाएँ, 2) रोज़ इंटरव्यू अभ्यास करें, 3) हर हफ्ते रिज़्यूमे अपडेट करें। सीखना कभी रुकता नहीं।'},
practice:{starter:'',hint:{hinglish:'Apne aage ke 30 din ka plan likho.',english:'Write your plan for the next 30 days.',hindi:'अपने आगे के 30 दिन का प्लान लिखें।'}},
quiz:[Q('Final test mein kitne sawal?','How many questions in the final test?','अंतिम टेस्ट में कितने सवाल?',['5','50','100','1'],['5','50','100','1'],['5','50','100','1'],0),
Q('Job Ready ka matlab?','What does Job Ready mean?','Job Ready का मतलब?',['Interview ke liye taiyaar','Sab khatam','Kuch nahi seekha','Phone ready'],['Ready for interviews','Everything is over','Learned nothing','Phone ready'],['इंटरव्यू के लिए तैयार','सब खत्म','कुछ नहीं सीखा','फोन तैयार'],0),
Q('Aage roz kya karna hai?','What to do daily from now on?','आगे रोज़ क्या करना है?',['Project + practice','Kuch nahi','Sirf TV','Sona'],['Project + practice','Nothing','Only TV','Sleeping'],['प्रोजेक्ट + अभ्यास','कुछ नहीं','सिर्फ टीवी','सोना'],0),
Q('Resume kab update karna hai?','When to update your resume?','रिज़्यूमे कब अपडेट करना है?',['Har hafte','Kabhi nahi','Saal mein ek baar','Roz 10 baar'],['Every week','Never','Once a year','10 times a day'],['हर हफ्ते','कभी नहीं','साल में एक बार','रोज़ 10 बार'],0),
Q('Seekhna kab rukta hai?','When does learning stop?','सीखना कब रुकता है?',['Kabhi nahi','Job milte hi','Test pass karte hi','Level 5 par'],['Never','As soon as you get a job','As soon as you pass the test','At Level 5'],['कभी नहीं','नौकरी मिलते ही','टेस्ट पास करते ही','लेवल 5 पर'],0)],
build:{hinglish:'Apne agle 30 din ka plan likho: roz kya seekhoge, kya banaoge.',english:'Write your next 30-day plan: what you will learn and build each day.',hindi:'अपने अगले 30 दिन का प्लान लिखें: रोज़ क्या सीखेंगे, क्या बनाएँगे।'}}
];

/* ---- State ---- */
var defaultState={name:'',lang:'hinglish',xp:0,streak:0,lastDay:'',completed:{},doubts:[],flashKnown:{},interview:[],missionDate:'',missionDone:false,badges:[]};
var state=load();
function load(){try{var s=JSON.parse(localStorage.getItem(LS_KEY)||'null');if(s&&typeof s==='object')return Object.assign({},defaultState,s);}catch(e){}return Object.assign({},defaultState);}
function save(){try{localStorage.setItem(LS_KEY,JSON.stringify(state));}catch(e){}}
function todayStr(){return new Date().toISOString().slice(0,10);}
function touchDay(){var d=todayStr();if(state.lastDay!==d){var y=new Date(Date.now()-86400000).toISOString().slice(0,10);state.streak=(state.lastDay===y)?state.streak+1:1;state.lastDay=d;state.missionDone=false;save();}}
function addXP(n){state.xp+=n;var b=[['First Lesson',50],['100 XP',100],['500 XP',500],['Level 2 Unlocked',0]];b.forEach(function(x){if(state.xp>=x[1]&&x[1]>0&&state.badges.indexOf(x[0])<0)state.badges.push(x[0]);});save();}
function toast(msg){var el=document.getElementById('toast');el.textContent=msg;el.style.display='block';setTimeout(function(){el.style.display='none';},2600);}
function lessonById(id){for(var i=0;i<LESSONS.length;i++)if(LESSONS[i].id===id)return LESSONS[i];return null;}
function lessonIndex(id){for(var i=0;i<LESSONS.length;i++)if(LESSONS[i].id===id)return i;return -1;}
function isUnlocked(les){var idx=lessonIndex(les.id);if(idx===0)return true;var prev=LESSONS[idx-1];var sc=state.completed[prev.id];if(!sc||sc<80)return false;return true;}
function isPlanLocked(les){return false;}
function completedCount(){return Object.keys(state.completed).length;}
function progressPct(){return Math.round(completedCount()/LESSONS.length*100);}
function nextLesson(){for(var i=0;i<LESSONS.length;i++){var les=LESSONS[i];if(!state.completed[les.id]&&isUnlocked(les))return les;}return LESSONS[LESSONS.length-1];}
function weakTopics(){var w=[];LESSONS.forEach(function(les){var sc=state.completed[les.id];if(sc!=null&&sc<80)w.push(les);});if(!w.length){LESSONS.forEach(function(les){if(!state.completed[les.id])w.push(les);});}return w.slice(0,6);}

/* ---- Flashcards data (from weak topics + core concepts) ---- */
var FLASH=[
{q:{hinglish:'Variable kya hai?',english:'What is a variable?',hindi:'वेरिएबल क्या है?'},a:{hinglish:'Naam wali dibbi — usme value rakhte hain.',english:'A named box — you store a value in it.',hindi:'नाम वाला डिब्बा — उसमें मान रखते हैं।'}},
{q:{hinglish:'Loop kab use karte hain?',english:'When do we use a loop?',hindi:'लूप कब इस्तेमाल करते हैं?'},a:{hinglish:'Jab ek kaam baar-baar karna ho.',english:'When one job must be done again and again.',hindi:'जब एक काम बार-बार करना हो।'}},
{q:{hinglish:'if-else kya karta hai?',english:'What does if-else do?',hindi:'if-else क्या करता है?'},a:{hinglish:'Faisla leta hai — agar ye to woh, warna kuch aur.',english:'It decides — if this, then that, else something else.',hindi:'फैसला लेता है — अगर यह तो वह, वरना कुछ और।'}},
{q:{hinglish:'HTML kya hai?',english:'What is HTML?',hindi:'HTML क्या है?'},a:{hinglish:'Website ka structure — haddi.',english:'The structure of a website — the skeleton.',hindi:'वेबसाइट का ढाँचा — हड्डी।'}},
{q:{hinglish:'CSS kya hai?',english:'What is CSS?',hindi:'CSS क्या है?'},a:{hinglish:'Website ka rang aur style — kapde.',english:'Website colour and style — the clothes.',hindi:'वेबसाइट का रंग और स्टाइल — कपड़े।'}},
{q:{hinglish:'Function kyun banate hain?',english:'Why do we make a function?',hindi:'फंक्शन क्यों बनाते हैं?'},a:{hinglish:'Kaam ko naam dekar dobara use karne ke liye.',english:'To name a job so you can reuse it.',hindi:'काम को नाम देकर दोबारा इस्तेमाल करने के लिए।'}},
{q:{hinglish:'range(5) kya deta hai?',english:'What does range(5) give?',hindi:'range(5) क्या देता है?'},a:{hinglish:'0, 1, 2, 3, 4',english:'0, 1, 2, 3, 4',hindi:'0, 1, 2, 3, 4'}},
{q:{hinglish:'Resume kitne page ka hota hai?',english:'How many pages is a resume?',hindi:'रिज़्यूमे कितने पेज का होता है?'},a:{hinglish:'1 page — skills, projects, education.',english:'1 page — skills, projects, education.',hindi:'1 पेज — स्किल्स, प्रोजेक्ट, शिक्षा।'}}
];

/* ---- Mentor: rule-based hints, never full answer ---- */
var MENTOR_RULES=[
{keys:['loop','for','range','लूप'],hinglish:'Loop ke baare mein socho: kab shuru hoga, kab rukega? range(5) mein pehla number 0 hota hai. Apna code phir se padho — kaunsi line baar-baar chal rahi hai? Hint: Lesson L08 kholo.',english:'Think about the loop: when does it start, when does it stop? In range(5) the first number is 0. Read your code again — which line repeats? Hint: open Lesson L08.',hindi:'लूप के बारे में सोचें: कब शुरू होगा, कब रुकेगा? range(5) में पहला नंबर 0 होता है। अपना कोड फिर से पढ़ें — कौनसी लाइन बार-बार चल रही है? संकेत: पाठ L08 खोलें।'},
{keys:['variable','var','let','वेरिएबल'],hinglish:'Variable ek naam wali dibbi hai. Pehle naam likho, phir = , phir value. Example socho: naam = "Rahul". Tumhari dibbi ka naam kya hai? Hint: Lesson L05.',english:'A variable is a named box. First the name, then =, then the value. Think: naam = "Rahul". What is your box called? Hint: Lesson L05.',hindi:'वेरिएबल एक नाम वाला डिब्बा है। पहले नाम, फिर =, फिर मान। सोचें: naam = "Rahul"। आपके डिब्बे का नाम क्या है? संकेत: पाठ L05।'},
{keys:['if','else','if-else','अगर'],hinglish:'If matlab "agar". Pehle condition check karo: kya ye sach hai? Agar haan to pehla block, warna else. Colon (:) aur indent mat bhoolo. Hint: Lesson L06.',english:'If means "if". First check the condition: is it true? If yes, the first block, else the else block. Do not forget the colon (:) and indent. Hint: Lesson L06.',hindi:'If मतलब "अगर"। पहले शर्त जाँचें: क्या यह सच है? अगर हाँ तो पहला ब्लॉक, वरना else। कोलन (:) और इंडेंट मत भूलें। संकेत: पाठ L06।'},
{keys:['function','def','फंक्शन'],hinglish:'Function ko naam do, phir use bulao. def se banate hain, phir naam() se bulate hain. Tumhara function kya kaam karega — ek line mein batao? Hint: Lesson L09.',english:'Name the function, then call it. Make it with def, call it with name(). What will your function do — say it in one line? Hint: Lesson L09.',hindi:'फंक्शन को नाम दें, फिर उसे बुलाएँ। def से बनाते हैं, फिर नाम() से बुलाते हैं। आपका फंक्शन क्या काम करेगा — एक लाइन में बताएँ? संकेत: पाठ L09।'},
{keys:['html','css','website','वेबसाइट'],hinglish:'HTML structure hai, CSS style hai. Pehle <h1> aur <p> se structure banao, phir CSS se rang badlo. Tumhara page kis baare mein hai? Hint: Lesson L10.',english:'HTML is structure, CSS is style. First build structure with <h1> and <p>, then change colour with CSS. What is your page about? Hint: Lesson L10.',hindi:'HTML ढाँचा है, CSS स्टाइल है। पहले <h1> और <p> से ढाँचा बनाएँ, फिर CSS से रंग बदलें। आपका पेज किस बारे में है? संकेत: पाठ L10।'},
{keys:['interview','resume','job','नौकरी','इंटरव्यू'],hinglish:'Interview mein 1 minute mein bolo: naam, kya seekha, kya banaya, aage kya karna hai. Apna jawab likhkar zor se bolo. Hint: Lesson L17 aur Mock Interview tab.',english:'In an interview speak for 1 minute: name, what you learned, what you built, what you want next. Write your answer and say it aloud. Hint: Lesson L17 and the Mock Interview tab.',hindi:'इंटरव्यू में 1 मिनट में बोलें: नाम, क्या सीखा, क्या बनाया, आगे क्या करना है। अपना जवाब लिखकर ज़ोर से बोलें। संकेत: पाठ L17 और मॉक इंटरव्यू टैब।'},
{keys:['error','bug','fail','गलत','एरर'],hinglish:'Error daraane ke liye nahi, batane ke liye hai. Error ki pehli line padho — wahan line number hota hai. Us line mein kya galat hai? Bracket ya colon check karo.',english:'An error is not there to scare you, it is there to tell you. Read the first line of the error — it has the line number. What is wrong on that line? Check brackets or colon.',hindi:'एरर डराने के लिए नहीं, बताने के लिए है। एरर की पहली लाइन पढ़ें — वहाँ लाइन नंबर होता है। उस लाइन में क्या गलत है? ब्रैकेट या कोलन जाँचें।'}
];
function mentorReply(text){var low=(' '+text+' ').toLowerCase();for(var i=0;i<MENTOR_RULES.length;i++){var r=MENTOR_RULES[i];for(var j=0;j<r.keys.length;j++){if(low.indexOf(r.keys[j].toLowerCase())>=0)return L(r);}}
var weak=weakTopics();var wmsg=weak.length?({hinglish:' Tumhara weak topic hai: '+L(weak[0].title)+' — use dobara padho.',english:' Your weak topic is: '+L(weak[0].title)+' — revise it again.',hindi:' आपका कमज़ोर विषय है: '+L(weak[0].title)+' — उसे दोबारा पढ़ें।'})[state.lang]:'';
return {hinglish:'Achha sawal! Pehle khud socho: problem ko 2 chhote steps mein todo. Kya tum bata sakte ho pehla step kya hai? Main hint dunga, poora answer nahi.'+wmsg,english:'Good question! First think yourself: break the problem into 2 small steps. Can you tell me the first step? I will give a hint, not the full answer.'+wmsg,hindi:'अच्छा सवाल! पहले खुद सोचें: समस्या को 2 छोटे चरणों में तोड़ें। क्या आप पहला चरण बता सकते हैं? मैं संकेत दूँगा, पूरा उत्तर नहीं।'+wmsg}[state.lang];}

/* ---- Code runners ---- */
function runJS(code){var logs=[];var fake={log:function(){var a=[];for(var i=0;i<arguments.length;i++)a.push(String(arguments[i]));logs.push(a.join(' '));},error:function(){logs.push('Error: '+Array.prototype.join.call(arguments,' '));}};try{var fn=new Function('console',code);fn(fake);return{ok:true,out:logs.join('\n')||'(no output — try console.log)'};}catch(e){return{ok:false,out:'Error: '+e.message};}}
function pyStr(v){if(Array.isArray(v))return '['+v.map(pyStr).join(', ')+']';if(v===true)return 'True';if(v===false)return 'False';if(v==null)return 'None';return String(v);}
function pyRange(a,b,c){var r=[];if(b==null){b=a;a=0;}c=c||1;if(c>0){for(var i=a;i<b;i+=c)r.push(i);}else{for(var j=a;j>b;j+=c)r.push(j);}return r;}
function transpilePython(src){
var lines=src.replace(/\r/g,'').split('\n');var out=[];var stack=[];
function indentOf(s){var m=s.match(/^ */);return m?m[0].length:0;}
function pyCond(c){return c.replace(/\band\b/g,'&&').replace(/\bor\b/g,'||').replace(/\bnot\s+/g,'!').replace(/==/g,'===').replace(/!=/g,'!==');}
function convert(stmt){
stmt=stmt.replace(/f"([^"]*)"/g,function(m,inner){return '`'+inner.replace(/\{([^}]+)\}/g,'${$1}')+'`';});
stmt=stmt.replace(/f'([^']*)'/g,function(m,inner){return '`'+inner.replace(/\{([^}]+)\}/g,'${$1}')+'`';});
stmt=stmt.replace(/\blen\(([^()]*)\)/g,'($1).length');
stmt=stmt.replace(/\bstr\(([^()]*)\)/g,'String($1)');
stmt=stmt.replace(/\bint\(([^()]*)\)/g,'parseInt($1)');
stmt=stmt.replace(/^print\s*\((.*)\)\s*$/,function(m,args){return '__out('+args+');';});
stmt=stmt.replace(/^def\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*:\s*$/,function(m,n,args){return 'function '+n+'('+args+'){';});
stmt=stmt.replace(/^if\s+(.+):\s*$/,function(m,c){return 'if ('+pyCond(c)+') {';});
stmt=stmt.replace(/^for\s+([A-Za-z_]\w*)\s+in\s+range\s*\(([^)]*)\)\s*:\s*$/,function(m,v,args){return 'for (var '+v+' of __range('+args+')) {';});
stmt=stmt.replace(/^for\s+([A-Za-z_]\w*)\s+in\s+(\S+)\s*:\s*$/,function(m,v,arr){return 'for (var '+v+' of '+arr+') {';});
stmt=stmt.replace(/^while\s+(.+):\s*$/,function(m,c){return 'while ('+pyCond(c)+') {';});
stmt=stmt.replace(/\bTrue\b/g,'true').replace(/\bFalse\b/g,'false').replace(/\bNone\b/g,'null');
return stmt;
}
for(var li=0;li<lines.length;li++){
var raw=lines[li];if(!raw.trim())continue;if(raw.trim().indexOf('#')===0)continue;
var ind=indentOf(raw);var code=raw.trim();
var mElse=/^else\s*:\s*$/.exec(code);var mElif=/^elif\s+(.+):\s*$/.exec(code);
if(mElse||mElif){
out.push(' '.repeat(Math.max(0,stack.length-1))+(mElse?'} else {':'} else if ('+pyCond(mElif[1])+') {'));
continue;
}
while(stack.length&&ind<=stack[stack.length-1]){out.push(' '.repeat(stack.length-1)+'}');stack.pop();}
var isBlock=/:\s*$/.test(code);
var stmt=convert(code);
out.push(' '.repeat(stack.length)+stmt);
if(isBlock&&/\{$/.test(stmt))stack.push(ind);
}
while(stack.length){out.push(' '.repeat(stack.length-1)+'}');stack.pop();}
return out.join('\n');
}
function runPython(code){var logs=[];function __out(){var a=[];for(var i=0;i<arguments.length;i++)a.push(pyStr(arguments[i]));logs.push(a.join(' '));}
try{var js=transpilePython(code);var fn=new Function('__out','__range','__pyStr',js);fn(__out,pyRange,pyStr);return{ok:true,out:logs.join('\n')||'(no output — try print)'};}catch(e){return{ok:false,out:'Error: '+e.message};}
}
function runCode(ptype,code){
if(ptype==='js')return runJS(code);
if(ptype==='py')return runPython(code);
return{ok:true,out:'(HTML preview below)'};
}

/* ---- Rendering ---- */
var app=document.getElementById('app');
var navItems=[['#/home','home'],['#/path','path'],['#/doubts','doubts'],['#/interview','interview'],['#/flashcards','flash'],['#/mission','mission'],['#/parent','parent']];
function renderNav(){var h='';navItems.forEach(function(n){var hash=location.hash||'#/home';h+='<a href="'+n[0]+'" class="'+(hash.indexOf(n[0])===0?'active':'')+'">'+t(n[1])+'</a>';});document.getElementById('topNav').innerHTML=h;
var bn=[['#/home','🏠'],['#/path','🗺️'],['#/doubts','❓'],['#/interview','🎤'],['#/mission','🔥']];var bh='';bn.forEach(function(n){bh+='<a href="'+n[0]+'">'+n[1]+'<br>'+t(n[0]==='#/home'?'home':n[0]==='#/path'?'path':n[0]==='#/doubts'?'doubts':n[0]==='#/interview'?'interview':'mission')+'</a>';});document.getElementById('bottomNav').innerHTML=bh;
var lp='';Object.keys(LANGS).forEach(function(k){lp+='<button data-lang="'+k+'" class="'+(state.lang===k?'active':'')+'">'+LANGS[k].label+'</button>';});document.getElementById('langPicker').innerHTML=lp;
document.querySelectorAll('#langPicker button').forEach(function(b){b.onclick=function(){state.lang=b.getAttribute('data-lang');save();render();};});
}
function setLang(l){state.lang=l;save();render();}
function route(){var h=location.hash||'#/home';if(!state.name)return renderOnboarding();touchDay();
if(h.indexOf('#/lesson/')===0)return renderLesson(h.split('/')[2]);
if(h==='#/path')return renderPath();if(h==='#/doubts')return renderDoubts();if(h==='#/interview')return renderInterview();if(h==='#/flashcards')return renderFlashcards();if(h==='#/mission')return renderMission();if(h==='#/parent')return renderParent();if(h==='#/settings')return renderSettings();return renderHome();}
function render(){renderNav();route();}
function renderOnboarding(){
app.innerHTML='<div class="hero"><h1>'+esc(t('heroTitle'))+'</h1><p>'+esc(t('heroSub'))+'</p><p class="small" style="margin-top:10px">'+esc(t('tagline'))+'</p></div>'
+'<div class="card"><h2>'+esc(t('yourName'))+'</h2><input type="text" id="obName" placeholder="Rahul" value="'+esc(state.name)+'">'
+'<label>'+esc(t('chooseLang'))+'</label><div class="btnrow" id="obLang">'
+Object.keys(LANGS).map(function(k){return '<button class="btn '+(state.lang===k?'':'secondary')+'" data-l="'+k+'">'+LANGS[k].label+'</button>';}).join('')
+'</div><div class="btnrow"><button class="btn" id="obStart">'+esc(t('begin'))+'</button></div>'
+'<p class="small" style="margin-top:10px">'+(state.lang==='hindi'?'सब कुछ मुफ़्त — सभी लेवल, सभी पाठ।':state.lang==='english'?'Everything free — all levels, all lessons.':'Sab kuch free — saare levels, saare lessons.')+'</p></div>';
document.querySelectorAll('#obLang button').forEach(function(b){b.onclick=function(){state.lang=b.getAttribute('data-l');save();renderOnboarding();};});
document.getElementById('obStart').onclick=function(){var n=document.getElementById('obName').value.trim();if(!n){toast(state.lang==='hindi'?'कृपया नाम लिखें':state.lang==='english'?'Please type your name':'Please apna naam likho');return;}state.name=n;save();location.hash='#/home';render();toast('Welcome, '+n+'!');};
}
function statCards(){
var pct=progressPct();var nl=nextLesson();
return '<div class="grid"><div class="card"><h2>'+esc(state.name||'Student')+' 👋</h2><p class="muted">'+esc(t('progress'))+': '+pct+'% • '+completedCount()+' / '+LESSONS.length+' '+esc(t('lessonsDone'))+'</p><div class="bar"><i style="width:'+pct+'%"></i></div><div class="btnrow"><a class="btn" href="#/lesson/'+nl.id+'">'+esc(t('continueLearning'))+': '+esc(L(nl.title))+'</a><a class="btn secondary" href="#/path">'+esc(t('path'))+'</a></div></div>'
+'<div class="card"><div class="kv"><span>🔥 '+esc(t('streak'))+'</span><b>'+state.streak+' '+(state.lang==='hindi'?'दिन':state.lang==='english'?'days':'din')+'</b></div><div class="kv"><span>⭐ '+esc(t('xp'))+'</span><b>'+state.xp+'</b></div><div class="kv"><span>🎯 '+esc(t('nextTest'))+'</span><b>'+esc(L(nl.title))+'</b></div><div class="kv"><span>🏅 Badges</span><b>'+(state.badges.length?state.badges.join(', '):'—')+'</b></div></div></div>';
}
function renderHome(){
var nl=nextLesson();var weak=weakTopics();
app.innerHTML='<div class="hero"><h1>'+esc(t('heroTitle'))+'</h1><p>'+esc(t('heroSub'))+'</p></div>'+statCards()
+'<div class="grid"><div class="card"><h2>🎯 '+esc(t('dailyMission'))+'</h2><p class="muted">'+esc(L(nl.title))+' — '+(state.missionDone?'✅ Done':'15 min')+'</p><div class="btnrow"><a class="btn" href="#/mission">'+esc(t('mission'))+'</a><a class="btn secondary" href="#/lesson/'+nl.id+'">'+esc(t('start'))+'</a></div></div>'
+'<div class="card"><h2>🧠 '+esc(t('mentor'))+'</h2><p class="muted">'+esc(t('welcome'))+'</p><div class="btnrow"><a class="btn secondary" href="#/lesson/'+nl.id+'">'+esc(t('askMentor'))+'</a></div></div></div>'
+'<div class="card" style="margin-top:14px"><h2>⚠️ '+esc(t('weakTopics'))+'</h2>'+(weak.length?weak.map(function(w){return '<p>• <a href="#/lesson/'+w.id+'">'+esc(L(w.title))+'</a> — '+(state.completed[w.id]!=null?state.completed[w.id]+'%':'not done')+'</p>';}).join(''):'<p class="muted">'+esc(t('noWeak'))+'</p>')+'</div>'
+'<div class="card" style="margin-top:14px"><h2>🗺️ '+esc(t('path'))+'</h2><p class="muted">Level 0 → Level 5 • 18 lessons • 80% to unlock next</p><div class="btnrow"><a class="btn" href="#/path">'+esc(t('path'))+'</a><a class="btn secondary" href="#/settings">'+esc(t('settings'))+'</a></div></div>';
}
function renderPath(){
var h='<div class="hero"><h1>🗺️ '+esc(t('path'))+'</h1><p>'+esc(t('heroSub'))+'</p></div>';
h+='<div class="okbox">✅ '+(state.lang==='hindi'?'सब कुछ मुफ़्त — सभी लेवल खुले हैं।':state.lang==='english'?'Everything is free — all levels are open.':'Sab kuch free — saare levels khule hain.')+'</div>';
LEVELS.forEach(function(lv){
var ls=LESSONS.filter(function(x){return x.level===lv.id;});
h+='<div class="level"><div class="level-head"><div><b>'+esc(L(lv.title))+'</b><div class="small">'+esc(L(lv.desc))+'</div></div><span class="pill green">'+esc(t('free'))+'</span></div>';
ls.forEach(function(les){var sc=state.completed[les.id];var un=isUnlocked(les);var pl=isPlanLocked(les);
h+='<div class="lesson '+(sc!=null?'done':'')+' '+(!un?'locked':'')+'"><div class="num">'+(sc!=null?'✓':les.id.replace('L',''))+'</div><div style="flex:1"><h4>'+esc(L(les.title))+'</h4><p>'+(sc!=null?sc+'% • '+esc(t('done')):!un?'🔒 '+esc(t('locked')):'—')+'</p></div>'+(un?'<a class="btn" href="#/lesson/'+les.id+'">'+esc(sc!=null?t('review'):t('start'))+'</a>':'<span class="pill">'+esc(t('locked'))+'</span>')+'</div>';});
h+='</div>';});
app.innerHTML=h;
}

/* ---- Lesson player ---- */
var quizAnswers={};var quizDone=false;
function renderLesson(id){
var les=lessonById(id);if(!les){location.hash='#/path';return;}
if(!isUnlocked(les)){app.innerHTML='<div class="card"><h2>🔒 '+esc(t('locked'))+'</h2><p class="muted">'+esc(t('failMsg'))+'</p><div class="btnrow"><a class="btn" href="#/path">'+esc(t('path'))+'</a></div></div>';return;}
quizAnswers={};quizDone=false;var sc=state.completed[les.id];
var steps=['learn','practice','test','build'];
app.innerHTML='<p><a href="#/path">← '+esc(t('path'))+'</a></p><div class="card"><span class="pill green">'+esc(L(LEVELS[les.level].title))+'</span> '+(sc!=null?'<span class="pill">✓ '+sc+'%</span>':'')+'<h2 style="margin-top:8px">'+esc(L(les.title))+'</h2>'
+'<div class="tabs" id="lessonTabs">'+steps.map(function(s,i){return '<button data-step="'+s+'" class="'+(i===0?'active':'')+'">'+(i+1)+'. '+esc(t(s))+'</button>';}).join('')+'</div>'
+'<div id="stepBox"></div></div>'
+'<div class="card" style="margin-top:14px"><h2>🧠 '+esc(t('mentor'))+'</h2><div id="mentorBox"><p class="muted">'+esc(t('welcome'))+'</p></div><div style="display:flex;gap:8px;margin-top:10px"><input type="text" id="mentorIn" placeholder="'+esc(t('askMentor'))+'"><button class="btn" id="mentorSend">'+esc(t('send'))+'</button></div></div>';
function showStep(step){
document.querySelectorAll('#lessonTabs button').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-step')===step);});
var box=document.getElementById('stepBox');
if(step==='learn'){box.innerHTML='<p style="white-space:pre-line">'+esc(L(les.learn))+'</p><div class="btnrow"><button class="btn" data-go="practice">'+esc(t('practice'))+' →</button></div>';}
if(step==='practice'){
if(les.ptype==='task'){box.innerHTML='<p>'+esc(L(les.practice.hint))+'</p><textarea id="taskAns" placeholder="..."></textarea><div class="btnrow"><button class="btn" id="taskDone">✓ '+(state.lang==='hindi'?'हो गया':state.lang==='english'?'Done':'Ho gaya')+'</button><button class="btn secondary" data-go="test">'+esc(t('test'))+' →</button></div><p class="small" id="taskMsg"></p>';
document.getElementById('taskDone').onclick=function(){var v=document.getElementById('taskAns').value.trim();if(v.length<3){document.getElementById('taskMsg').textContent=state.lang==='hindi'?'कुछ लिखें, फिर Done दबाएँ।':state.lang==='english'?'Write something, then press Done.':'Kuch likho, phir Done dabao.';return;}addXP(10);document.getElementById('taskMsg').textContent='✓ +10 XP';toast('+10 XP');};}
else if(les.ptype==='html'){box.innerHTML='<p class="muted">'+esc(L(les.practice.hint))+'</p><textarea class="codebox" id="codeEd">'+esc(les.practice.starter)+'</textarea><div class="btnrow"><button class="btn" id="runBtn">'+esc(t('run'))+'</button><button class="btn secondary" data-go="test">'+esc(t('test'))+' →</button></div><div class="output" id="codeOut">Preview below</div><iframe id="htmlPrev" style="width:100%;min-height:160px;background:#fff;border:1px solid var(--line);border-radius:12px;margin-top:8px" title="preview"></iframe>';
document.getElementById('runBtn').onclick=function(){var c=document.getElementById('codeEd').value;document.getElementById('htmlPrev').srcdoc=c;document.getElementById('codeOut').textContent='Preview updated ✓';addXP(5);};}
else{box.innerHTML='<p class="muted">'+esc(L(les.practice.hint))+'</p><textarea class="codebox" id="codeEd">'+esc(les.practice.starter)+'</textarea><div class="btnrow"><button class="btn" id="runBtn">'+esc(t('run'))+'</button><button class="btn secondary" data-go="test">'+esc(t('test'))+' →</button></div><div class="output" id="codeOut">—</div>';
document.getElementById('runBtn').onclick=function(){var c=document.getElementById('codeEd').value;var r=runCode(les.ptype,c);document.getElementById('codeOut').textContent=(r.ok?'':'')+r.out;if(r.ok)addXP(5);else toast('Error — check the code');};}
}
if(step==='test'){box.innerHTML='<p class="muted">5 questions • 80% (4/5) to pass</p>'+les.quiz.map(function(q,qi){return '<div class="quiz-q"><b>Q'+(qi+1)+'. '+esc(L(q.q))+'</b>'+q.opts.map(function(o,oi){return '<button class="opt" data-q="'+qi+'" data-o="'+oi+'">'+esc(L(o))+'</button>';}).join('')+'</div>';}).join('')+'<div class="btnrow"><button class="btn" id="submitTest">'+esc(t('submitTest'))+'</button></div><p id="testMsg"></p>';
box.querySelectorAll('.opt').forEach(function(b){b.onclick=function(){var qi=+b.getAttribute('data-q');quizAnswers[qi]=+b.getAttribute('data-o');box.querySelectorAll('.opt[data-q="'+qi+'"]').forEach(function(x){x.style.borderColor='';});b.style.borderColor='var(--green)';};});
document.getElementById('submitTest').onclick=function(){
if(Object.keys(quizAnswers).length<5){document.getElementById('testMsg').textContent=state.lang==='hindi'?'पहले सभी 5 सवालों के जवाब दें।':state.lang==='english'?'Answer all 5 questions first.':'Pehle saare 5 sawal ke jawab do.';return;}
var correct=0;les.quiz.forEach(function(q,qi){var chosen=quizAnswers[qi];var opts=box.querySelectorAll('.opt[data-q="'+qi+'"]');opts.forEach(function(o){var oi=+o.getAttribute('data-o');if(oi===q.ans)o.classList.add('correct');else if(oi===chosen)o.classList.add('wrong');o.disabled=true;});if(chosen===q.ans)correct++;});
var score=Math.round(correct/5*100);state.completed[les.id]=score;if(score>=80)addXP(50);else addXP(10);save();quizDone=true;
document.getElementById('testMsg').innerHTML='<b>'+score+'% — '+(score>=80?esc(t('passMsg')):esc(t('failMsg')))+'</b>';
if(score<80){var mb=document.getElementById('mentorBox');mb.innerHTML+='<p class="okbox">🧠 Mentor: '+(state.lang==='hindi'?'कमज़ोर विषय: ':'Weak topic: ')+esc(L(les.title))+' — '+esc(L(les.learn)).slice(0,120)+'…</p>';}
toast(score+'%');};
}
if(step==='build'){box.innerHTML='<p>'+esc(L(les.build))+'</p><textarea id="buildAns" placeholder="..."></textarea><div class="btnrow"><button class="btn" id="buildDone">✓ '+(state.lang==='hindi'?'पूरा हुआ':state.lang==='english'?'Completed':'Complete')+'</button></div><p class="small" id="buildMsg"></p>';
document.getElementById('buildDone').onclick=function(){if(document.getElementById('buildAns').value.trim().length<3){document.getElementById('buildMsg').textContent='Write something first.';return;}addXP(20);document.getElementById('buildMsg').textContent='✓ +20 XP — '+(state.lang==='hindi'?'बहुत बढ़िया!':'Great work!');toast('+20 XP');};}
box.querySelectorAll('[data-go]').forEach(function(b){b.onclick=function(){showStep(b.getAttribute('data-go'));};});
}
document.querySelectorAll('#lessonTabs button').forEach(function(b){b.onclick=function(){showStep(b.getAttribute('data-step'));};});
showStep('learn');
document.getElementById('mentorSend').onclick=function(){var inp=document.getElementById('mentorIn');var v=inp.value.trim();if(!v)return;var box=document.getElementById('mentorBox');box.innerHTML+='<p><b>'+esc(state.name||'You')+':</b> '+esc(v)+'</p><p><b>🧠 Mentor:</b> '+esc(mentorReply(v))+'</p>';inp.value='';};
}

/* ---- Top 5 extras ---- */
function renderDoubts(){
var list=state.doubts.map(function(d,i){return '<div class="card" style="margin:10px 0"><b>❓ '+esc(d.q)+'</b><p class="muted">🧠 '+esc(d.a)+'</p><span class="small">'+esc(d.when)+'</span></div>';}).join('')||'<p class="muted">No doubts yet.</p>';
app.innerHTML='<div class="hero"><h1>❓ '+esc(t('doubts'))+'</h1><p>'+esc(t('askDoubt'))+'</p></div><div class="card"><textarea id="doubtIn" placeholder="'+esc(t('askDoubt'))+'"></textarea><div class="btnrow"><button class="btn" id="doubtBtn">'+esc(t('postDoubt'))+'</button></div></div><div id="doubtList">'+list+'</div>';
document.getElementById('doubtBtn').onclick=function(){var v=document.getElementById('doubtIn').value.trim();if(v.length<3)return;var a=mentorReply(v);state.doubts.unshift({q:v,a:a,when:new Date().toLocaleString()});addXP(5);save();renderDoubts();toast('+5 XP');};
}
var INTERVIEW_Q=[
{q:{hinglish:'Tell me about yourself.',english:'Tell me about yourself.',hindi:'अपने बारे में बताइए।'},keys:['naam','name','seekha','learn','project','python','website']},
{q:{hinglish:'Loops kya hote hain? Example do.',english:'What are loops? Give an example.',hindi:'लूप क्या होते हैं? उदाहरण दें।'},keys:['loop','baar','again','range','for','repeat']},
{q:{hinglish:'Apna favourite project kya hai aur kyun?',english:'What is your favourite project and why?',hindi:'आपका पसंदीदा प्रोजेक्ट क्या है और क्यों?'},keys:['project','portfolio','website','banaya','built','kyun','why']}
];
function renderInterview(){
var done=state.interview;
var resume='Name: '+state.name+'\nZero2Pro — Basic to Advanced\nLessons completed: '+completedCount()+' / '+LESSONS.length+' ('+progressPct()+'%)\nXP: '+state.xp+' | Streak: '+state.streak+' days\nSkills: Python basics, HTML, CSS, JavaScript, Loops, Functions, Lists, Arrays\nProjects: Portfolio Page (Level 4), Bio Page (Level 3)\nLanguages: '+(state.lang==='english'?'English':state.lang==='hindi'?'Hindi':'Hinglish')+'\nMock interview score: '+(done.length?Math.round(done.reduce(function(a,b){return a+b.score;},0)/done.length)+'/100':'not attempted yet');
app.innerHTML='<div class="hero"><h1>🎤 '+esc(t('interview'))+'</h1><p>'+(state.lang==='hindi'?'3 सवाल — जवाब लिखें, स्कोर पाएँ।':'3 questions — write your answer, get a score.')+'</p></div>'
+INTERVIEW_Q.map(function(item,i){var prev=done[i];return '<div class="card" style="margin:10px 0"><b>Q'+(i+1)+'. '+esc(L(item.q))+'</b><textarea id="iv'+i+'" placeholder="...">'+(prev?esc(prev.ans):'')+'</textarea><div class="btnrow"><button class="btn" data-iv="'+i+'">'+(prev?'Update score':'Score my answer')+'</button></div>'+(prev?'<p>Score: <b>'+prev.score+'/100</b> • '+esc(prev.fb)+'</p>':'')+'</div>';}).join('')
+'<div class="card"><h2>📄 '+esc(t('resume'))+'</h2><pre class="resume" id="resumeText">'+esc(resume)+'</pre><div class="btnrow"><button class="btn" id="copyResume">'+esc(t('copy'))+'</button><button class="btn secondary" id="dlResume">'+esc(t('download'))+'</button></div></div>';
document.querySelectorAll('[data-iv]').forEach(function(b){b.onclick=function(){var i=+b.getAttribute('data-iv');var ans=document.getElementById('iv'+i).value.trim();if(ans.length<10){toast(state.lang==='hindi'?'थोड़ा लंबा जवाब लिखें।':state.lang==='english'?'Write a slightly longer answer.':'Thoda lamba jawab likho.');return;}
var low=ans.toLowerCase();var hits=INTERVIEW_Q[i].keys.filter(function(k){return low.indexOf(k)>=0;}).length;var score=Math.min(100,Math.round(40+ans.length/4+hits*12));var fb=score>=80?(state.lang==='hindi'?'बहुत बढ़िया — साफ और पूरा जवाब।':state.lang==='english'?'Great — clear and complete answer.':'Bahut badhiya — saaf aur poora jawab.'):(state.lang==='hindi'?'अच्छा प्रयास — एक उदाहरण और अपनी कहानी जोड़ें।':state.lang==='english'?'Good try — add one example and your story.':'Achha prayas — ek example aur apni kahani jodo.');
state.interview[i]={ans:ans,score:score,fb:fb};addXP(15);save();renderInterview();toast(score+'/100');};});
document.getElementById('copyResume').onclick=function(){navigator.clipboard&&navigator.clipboard.writeText(document.getElementById('resumeText').textContent);toast(t('copied'));};
document.getElementById('dlResume').onclick=function(){var blob=new Blob([document.getElementById('resumeText').textContent],{type:'text/plain'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(state.name||'student')+'-resume.txt';a.click();};
}
var flashIdx=0,flashFlip=false;
function renderFlashcards(){
var weak=weakTopics();var cards=FLASH.slice();if(weak.length){cards.unshift({q:{hinglish:'Weak: '+L(weak[0].title),english:'Weak: '+L(weak[0].title),hindi:'कमज़ोर: '+L(weak[0].title)},a:{hinglish:'Is lesson ko dobara padho — Test mein 80% lao.',english:'Revise this lesson again — get 80% in the Test.',hindi:'इस पाठ को दोबारा पढ़ें — टेस्ट में 80% लाएँ।'}});}
if(flashIdx>=cards.length)flashIdx=0;var c=cards[flashIdx];
app.innerHTML='<div class="hero"><h1>🧠 '+esc(t('flash'))+'</h1><p>'+esc(t('tapFlip'))+' • '+(flashIdx+1)+' / '+cards.length+'</p></div>'
+'<div class="flash '+(flashFlip?'flipped':'')+'" id="flashCard"><div class="flash-inner"><div class="flash-face"><b>'+esc(L(c.q))+'</b></div><div class="flash-face back"><b>'+esc(L(c.a))+'</b></div></div></div>'
+'<div class="btnrow" style="margin-top:12px"><button class="btn secondary" id="flPrev">← Prev</button><button class="btn" id="flKnow">'+esc(t('knowIt'))+'</button><button class="btn secondary" id="flStill">'+esc(t('stillLearning'))+'</button><button class="btn secondary" id="flNext">Next →</button></div>'
+'<div class="card" style="margin-top:14px"><h2>⚠️ '+esc(t('weakTopics'))+'</h2>'+(weak.length?weak.map(function(w){return '<p>• <a href="#/lesson/'+w.id+'">'+esc(L(w.title))+'</a></p>';}).join(''):'<p class="muted">'+esc(t('noWeak'))+'</p>')+'</div>';
document.getElementById('flashCard').onclick=function(){flashFlip=!flashFlip;renderFlashcards();};
document.getElementById('flPrev').onclick=function(){flashIdx=(flashIdx-1+cards.length)%cards.length;flashFlip=false;renderFlashcards();};
document.getElementById('flNext').onclick=function(){flashIdx=(flashIdx+1)%cards.length;flashFlip=false;renderFlashcards();};
document.getElementById('flKnow').onclick=function(){state.flashKnown[cards[flashIdx].q.hinglish]=true;addXP(5);flashIdx=(flashIdx+1)%cards.length;flashFlip=false;save();renderFlashcards();};
document.getElementById('flStill').onclick=function(){flashIdx=(flashIdx+1)%cards.length;flashFlip=false;renderFlashcards();};
}
function renderMission(){
var nl=nextLesson();var days=[];var now=new Date();for(var d=6;d>=0;d--){var dt=new Date(now.getTime()-d*86400000);var ds=dt.toISOString().slice(0,10);days.push({d:dt.getDate(),hit:ds<=state.lastDay&&state.streak>0&&(d<state.streak||ds===state.lastDay),today:ds===todayStr()});}
app.innerHTML='<div class="hero"><h1>🔥 '+esc(t('mission'))+'</h1><p>'+esc(t('dailyMission'))+' — '+esc(L(nl.title))+'</p></div>'
+'<div class="card"><h2>🎯 '+(state.lang==='hindi'?'आज का मिशन':'Today')+'</h2><p>1. '+esc(L(nl.title))+' — Learn (5 min)<br>2. Practice — Run code once<br>3. Test — 5 questions, 80% pass</p><div class="btnrow"><a class="btn" href="#/lesson/'+nl.id+'">'+esc(t('start'))+'</a><button class="btn secondary" id="missionDone">✓ '+(state.missionDone?'Done':'Mark done')+'</button></div><p class="small" id="missionMsg">'+(state.missionDone?'✓ +20 XP today':'')+'</p></div>'
+'<div class="card" style="margin-top:14px"><h2>🔥 '+esc(t('streak'))+' — '+state.streak+' '+(state.lang==='hindi'?'दिन':'days')+'</h2><div class="cal">'+days.map(function(x){return '<div class="'+(x.hit?'hit':'')+' '+(x.today?'today':'')+'">'+x.d+'</div>';}).join('')+'</div><p class="small">Badges: '+(state.badges.length?state.badges.join(', '):'—')+' • XP ladder: '+(state.xp<100?'Beginner':state.xp<300?'Learner':state.xp<600?'Builder':'Pro')+' ('+state.xp+' XP)</p></div>';
document.getElementById('missionDone').onclick=function(){if(state.missionDone)return;state.missionDone=true;addXP(20);save();renderMission();toast('+20 XP');};
}
function parentReportText(){
var weak=weakTopics().map(function(w){return L(w.title);}).join(', ')||(state.lang==='hindi'?'कोई नहीं':'None');
if(state.lang==='hindi')return 'Zero2Pro — साप्ताहिक रिपोर्ट\nनाम: '+state.name+'\nइस हफ्ते पूरे पाठ: '+completedCount()+' / '+LESSONS.length+' ('+progressPct()+'%)\nलगातार दिन: '+state.streak+' | XP: '+state.xp+'\nकमज़ोर विषय: '+weak+'\nअगला कदम: '+L(nextLesson().title)+'';
if(state.lang==='english')return 'Zero2Pro — Weekly Report\nName: '+state.name+'\nLessons completed: '+completedCount()+' / '+LESSONS.length+' ('+progressPct()+'%)\nStreak: '+state.streak+' days | XP: '+state.xp+'\nWeak topics: '+weak+'\nNext step: '+L(nextLesson().title)+'';
return 'Zero2Pro — Hafta Report\nNaam: '+state.name+'\nIs hafte poore lessons: '+completedCount()+' / '+LESSONS.length+' ('+progressPct()+'%)\nStreak: '+state.streak+' din | XP: '+state.xp+'\nWeak topics: '+weak+'\nAgla step: '+L(nextLesson().title)+'';
}
function renderParent(){
app.innerHTML='<div class="hero"><h1>👪 '+esc(t('parent'))+'</h1><p>'+(state.lang==='hindi'?'माता-पिता के लिए साप्ताहिक रिपोर्ट — असली प्रगति से बनी।':'Weekly report for parents — made from real progress.')+'</p></div><div class="card"><pre class="resume" id="parentText">'+esc(parentReportText())+'</pre><div class="btnrow"><button class="btn" id="copyParent">'+esc(t('copy'))+'</button><a class="btn secondary" id="waParent" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(parentReportText())+'">'+esc(t('shareWhats'))+'</a></div></div>';
document.getElementById('copyParent').onclick=function(){navigator.clipboard&&navigator.clipboard.writeText(document.getElementById('parentText').textContent);toast(t('copied'));};
}
function renderSettings(){
app.innerHTML='<div class="card"><h2>⚙️ '+esc(t('settings'))+'</h2><label>'+esc(t('yourName'))+'</label><input type="text" id="setName" value="'+esc(state.name)+'"><label>'+esc(t('chooseLang'))+'</label><div class="btnrow">'+Object.keys(LANGS).map(function(k){return '<button class="btn '+(state.lang===k?'':'secondary')+'" data-l="'+k+'">'+LANGS[k].label+'</button>';}).join('')+'</div><div class="btnrow"><button class="btn" id="setSave">'+esc(t('save'))+'</button><button class="btn danger" id="setReset">'+esc(t('reset'))+'</button></div><p class="small">Progress is saved on this device (localStorage). Everything is free • XP: '+state.xp+'</p></div>';
document.querySelectorAll('[data-l]').forEach(function(b){b.onclick=function(){setLang(b.getAttribute('data-l'));};});
document.getElementById('setSave').onclick=function(){var n=document.getElementById('setName').value.trim();if(n)state.name=n;save();toast(t('copied'));render();};
document.getElementById('setReset').onclick=function(){if(confirm('Reset all progress?')){localStorage.removeItem(LS_KEY);location.hash='';location.reload();}};
}
/* ---- Init ---- */
window.addEventListener('hashchange',render);
render();
