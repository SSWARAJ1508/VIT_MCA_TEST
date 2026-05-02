const questions = [

    /* ================= MATHEMATICS (1–10) ================= */
    
    { id:1, section:"Mathematics", question:"If f(x)=x^3, find f'(2)", options:["6","8","12","4"], answer:2, explanation:"Derivative = 3x² → 3*4=12" },
    { id:2, section:"Mathematics", question:"Determinant of [[1,2],[3,4]]?", options:["-2","2","10","0"], answer:0, explanation:"1*4-2*3=-2" },
    { id:3, section:"Mathematics", question:"Probability of head in one toss?", options:["1","0","1/2","2"], answer:2, explanation:"1/2" },
    { id:4, section:"Mathematics", question:"lim x→0 sinx/x?", options:["0","1","∞","-1"], answer:1, explanation:"Standard limit" },
    { id:5, section:"Mathematics", question:"Roots of x²-5x+6?", options:["2,3","1,6","-2,-3","2,-3"], answer:0, explanation:"(x-2)(x-3)" },
    { id:6, section:"Mathematics", question:"∫1 dx?", options:["x","1","0","x²"], answer:0, explanation:"Integral of 1 = x" },
    { id:7, section:"Mathematics", question:"sin(90°)?", options:["0","1","-1","2"], answer:1, explanation:"sin90=1" },
    { id:8, section:"Mathematics", question:"Mean of 2,4,6?", options:["3","4","5","6"], answer:1, explanation:"(2+4+6)/3=4" },
    { id:9, section:"Mathematics", question:"2²+3²?", options:["5","13","10","9"], answer:1, explanation:"4+9=13" },
    { id:10, section:"Mathematics", question:"Subsets of set with 3 elements?", options:["6","8","4","2"], answer:1, explanation:"2³=8" },
    
    /* ================= ENGLISH (11–20) ================= */
    
    { id:11, section:"English", question:"Choose the correct synonym of 'Meticulous':", options:["Careless","Precise","Lazy","Quick"], answer:1, explanation:"Meticulous means very careful and precise." },

{ id:12, section:"English", question:"Choose the correct antonym of 'Ephemeral':", options:["Temporary","Lasting","Short-lived","Brief"], answer:1, explanation:"Ephemeral means short-lived, opposite is lasting." },

{ id:13, section:"English", question:"Identify the error: 'Each of the students have submitted their assignment.'", options:["Each","students","have","assignment"], answer:2, explanation:"'Each' is singular → should use 'has'." },

{ id:14, section:"English", question:"Choose the correct sentence:", options:["He is superior than me","He is superior to me","He is superior from me","He is superior over me"], answer:1, explanation:"Correct preposition is 'to'." },

{ id:15, section:"English", question:"Fill in the blank: No sooner had he entered the room ___ everyone stood up.", options:["when","than","then","while"], answer:1, explanation:"Correct pair: 'No sooner...than'." },

{ id:16, section:"English", question:"Choose the correct passive form: 'They are repairing the road.'", options:["The road is repaired","The road is being repaired","The road was repaired","The road has been repaired"], answer:1, explanation:"Present continuous passive." },

{ id:17, section:"English", question:"Meaning of idiom 'Spill the beans':", options:["Cook food","Reveal a secret","Waste time","Make noise"], answer:1, explanation:"Means to reveal a secret." },

{ id:18, section:"English", question:"Choose the correctly spelled word:", options:["Definately","Definitely","Definetly","Definatly"], answer:1, explanation:"Correct spelling is 'Definitely'." },

{ id:19, section:"English", question:"One word substitution: 'A person who knows many languages':", options:["Linguist","Polyglot","Scholar","Interpreter"], answer:1, explanation:"Polyglot speaks multiple languages." },

{ id:20, section:"English", question:"Fill in the blank: If I ___ you, I would not accept the offer.", options:["am","was","were","be"], answer:2, explanation:"Subjunctive mood uses 'were'." },
    /* ================= COMPUTER SCIENCE (21–100) ================= */
    
    { id:21, section:"Computer Science", question:"Time complexity of binary search?", options:["O(n)","O(log n)","O(n²)","O(1)"], answer:1, explanation:"Divide and conquer" },
    { id:22, section:"Computer Science", question:"Stack follows?", options:["FIFO","LIFO","Random","None"], answer:1, explanation:"LIFO" },
    { id:23, section:"Computer Science", question:"Queue follows?", options:["FIFO","LIFO","Random","None"], answer:0, explanation:"FIFO" },
    { id:24, section:"Computer Science", question:"Worst case quick sort?", options:["O(n log n)","O(n²)","O(n)","O(log n)"], answer:1, explanation:"Worst case" },
    { id:25, section:"Computer Science", question:"Best scheduling?", options:["FCFS","SJF","RR","Priority"], answer:1, explanation:"SJF" },
    { id:26, section:"Computer Science", question:"Deadlock condition?", options:["Mutual","Hold","Circular","All"], answer:3, explanation:"All required" },
    { id:27, section:"Computer Science", question:"DFS uses?", options:["Queue","Stack","Array","Tree"], answer:1, explanation:"Stack" },
    { id:28, section:"Computer Science", question:"BFS uses?", options:["Queue","Stack","Heap","Tree"], answer:0, explanation:"Queue" },
    { id:29, section:"Computer Science", question:"2NF removes?", options:["Partial dep","Transitive","None","All"], answer:0, explanation:"2NF removes partial" },
    { id:30, section:"Computer Science", question:"3NF removes?", options:["Partial","Transitive","Both","None"], answer:1, explanation:"3NF removes transitive" },
    
    { id:31, section:"Computer Science", question:"Primary key?", options:["Unique","Duplicate","Null","None"], answer:0, explanation:"Unique" },
    { id:32, section:"Computer Science", question:"Foreign key?", options:["Link table","Unique","Null","Primary"], answer:0, explanation:"Relation" },
    { id:33, section:"Computer Science", question:"OSI routing layer?", options:["Network","Transport","Data","Physical"], answer:0, explanation:"Network layer" },
    { id:34, section:"Computer Science", question:"Transport layer?", options:["Routing","End delivery","Framing","Signals"], answer:1, explanation:"Reliable delivery" },
    { id:35, section:"Computer Science", question:"IP type?", options:["Logical","Physical","MAC","None"], answer:0, explanation:"Logical" },
    { id:36, section:"Computer Science", question:"Heap build time?", options:["O(n log n)","O(n)","O(log n)","O(n²)"], answer:1, explanation:"Linear" },
    { id:37, section:"Computer Science", question:"Merge sort time?", options:["O(n log n)","O(n)","O(n²)","O(log n)"], answer:0, explanation:"Always n log n" },
    { id:38, section:"Computer Science", question:"Insertion sort best?", options:["O(n)","O(n²)","O(log n)","O(1)"], answer:0, explanation:"Sorted array" },
    { id:39, section:"Computer Science", question:"Recursion uses?", options:["Queue","Stack","Array","Heap"], answer:1, explanation:"Call stack" },
    { id:40, section:"Computer Science", question:"Hash search avg?", options:["O(1)","O(n)","O(log n)","O(n²)"], answer:0, explanation:"Constant time" },
    
    { id:41, section:"Computer Science", question:"Context switch?", options:["Switch process","Memory","Disk","None"], answer:0, explanation:"Process change" },
    { id:42, section:"Computer Science", question:"Thread?", options:["Heavy","Light","Hardware","Network"], answer:1, explanation:"Lightweight process" },
    { id:43, section:"Computer Science", question:"Deadlock avoidance?", options:["Banker","FIFO","LRU","RR"], answer:0, explanation:"Banker algorithm" },
    { id:44, section:"Computer Science", question:"Paging?", options:["Memory mgmt","CPU","Disk","None"], answer:0, explanation:"Memory management" },
    { id:45, section:"Computer Science", question:"Fragmentation?", options:["Memory waste","CPU","Disk","Network"], answer:0, explanation:"Unused space" },
    { id:46, section:"Computer Science", question:"TCP is?", options:["Reliable","Unreliable","Fast","None"], answer:0, explanation:"Reliable" },
    { id:47, section:"Computer Science", question:"UDP is?", options:["Reliable","Unreliable","Slow","None"], answer:1, explanation:"Unreliable" },
    { id:48, section:"Computer Science", question:"HTTP port?", options:["80","443","21","22"], answer:0, explanation:"Port 80" },
    { id:49, section:"Computer Science", question:"HTTPS port?", options:["80","443","21","25"], answer:1, explanation:"Port 443" },
    { id:50, section:"Computer Science", question:"SMTP?", options:["Mail send","Mail receive","File","None"], answer:0, explanation:"Send email" },
    { id:51, section:"Computer Science", question:"Which command is used to list files in Linux?", options:["ls","cd","rm","mkdir"], answer:0, explanation:"ls lists directory contents" },
    { id:52, section:"Computer Science", question:"What does pwd command do?", options:["Print working directory","Password change","Print file","Process data"], answer:0, explanation:"Shows current directory" },
    { id:53, section:"Computer Science", question:"Which memory is volatile?", options:["ROM","RAM","Hard Disk","SSD"], answer:1, explanation:"RAM is volatile" },
    { id:54, section:"Computer Science", question:"Which symbol is used for pointer in C?", options:["&","*","#","@"], answer:1, explanation:"* declares pointer" },
    { id:55, section:"Computer Science", question:"Which function takes input in C?", options:["printf","scanf","input","read"], answer:1, explanation:"scanf reads input" },
    { id:56, section:"Computer Science", question:"HTML stands for?", options:["HyperText Markup Language","HighText Machine Language","HyperText Machine Language","None"], answer:0, explanation:"Standard definition" },
    { id:57, section:"Computer Science", question:"Largest heading tag?", options:["<h6>","<head>","<h1>","<heading>"], answer:2, explanation:"h1 largest" },
    { id:58, section:"Computer Science", question:"Best structure for hierarchy?", options:["Array","Linked List","Tree","Stack"], answer:2, explanation:"Tree structure" },
    { id:59, section:"Computer Science", question:"Linear search complexity?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:2, explanation:"Sequential search" },
    { id:60, section:"Computer Science", question:"Array stores?", options:["Mixed types","Same type","Objects","Functions"], answer:1, explanation:"Homogeneous data" },
    
    { id:61, section:"Computer Science", question:"Bubble sort works by?", options:["Divide","Swap adjacent","Heap","Merge"], answer:1, explanation:"Swaps neighbors" },
    { id:62, section:"Computer Science", question:"Deadlock occurs due to?", options:["CPU","Circular wait","Disk","Memory"], answer:1, explanation:"Circular wait" },
    { id:63, section:"Computer Science", question:"Virtual memory?", options:["RAM","Cache","Extended memory","Disk"], answer:2, explanation:"Illusion of large memory" },
    { id:64, section:"Computer Science", question:"OS manages?", options:["Hardware","Software","Both","None"], answer:2, explanation:"Resource manager" },
    { id:65, section:"Computer Science", question:"Thread is?", options:["Heavy","Lightweight","Network","Disk"], answer:1, explanation:"Lightweight process" },
    { id:66, section:"Computer Science", question:"Round robin uses?", options:["Priority","Time quantum","FIFO","LIFO"], answer:1, explanation:"Time slicing" },
    { id:67, section:"Computer Science", question:"Context switch means?", options:["Switch CPU","Save/Load process","Memory clear","Disk change"], answer:1, explanation:"Process switch" },
    { id:68, section:"Computer Science", question:"DDL stands for?", options:["Data Definition Language","Data Delete Language","Data Drive Language","None"], answer:0, explanation:"DDL" },
    { id:69, section:"Computer Science", question:"SELECT is?", options:["DDL","DML","DCL","TCL"], answer:1, explanation:"Data query" },
    { id:70, section:"Computer Science", question:"4NF deals with?", options:["Functional dep","Multi-valued dep","Primary key","None"], answer:1, explanation:"4NF" },
    
    { id:71, section:"Computer Science", question:"Foreign key ensures?", options:["Uniqueness","Integrity","Speed","Sorting"], answer:1, explanation:"Referential integrity" },
    { id:72, section:"Computer Science", question:"ACID property not includes?", options:["Atomicity","Consistency","Concurrency","Durability"], answer:2, explanation:"C=Consistency" },
    { id:73, section:"Computer Science", question:"Quick sort avg complexity?", options:["O(n log n)","O(n²)","O(n)","O(log n)"], answer:0, explanation:"Average case" },
    { id:74, section:"Computer Science", question:"Inorder traversal?", options:["Root-left-right","Left-root-right","Left-right-root","Level"], answer:1, explanation:"Sorted order" },
    { id:75, section:"Computer Science", question:"Edges in tree (n nodes)?", options:["n","n-1","n+1","n/2"], answer:1, explanation:"Tree property" },
    { id:76, section:"Computer Science", question:"Balanced BST height?", options:["O(n)","O(log n)","O(n log n)","O(1)"], answer:1, explanation:"Balanced tree" },
    { id:77, section:"Computer Science", question:"Bitwise XOR of 5^3?", options:["6","2","8","1"], answer:0, explanation:"101 ^ 011 = 110" },
    { id:78, section:"Computer Science", question:"volatile keyword?", options:["Constant","Variable change","Register","Global"], answer:1, explanation:"Avoid optimization" },
    { id:79, section:"Computer Science", question:"Fastest IPC?", options:["Pipe","Queue","Shared Memory","Socket"], answer:2, explanation:"Direct access" },
    { id:80, section:"Computer Science", question:"Thrashing?", options:["CPU high","Paging high","Disk fail","Deadlock"], answer:1, explanation:"Excess paging" },
    
    { id:81, section:"Computer Science", question:"Subnet mask does?", options:["Encrypt","Identify network","Speed","Firewall"], answer:1, explanation:"Network part" },
    { id:82, section:"Computer Science", question:"MAC works at?", options:["Network","Data link","Transport","Physical"], answer:1, explanation:"Layer 2" },
    { id:83, section:"Computer Science", question:"TCP vs UDP?", options:["TCP unreliable","UDP reliable","TCP reliable","Same"], answer:2, explanation:"TCP reliable" },
    { id:84, section:"Computer Science", question:"Insertion sort best?", options:["O(n)","O(n²)","O(log n)","O(1)"], answer:0, explanation:"Sorted case" },
    { id:85, section:"Computer Science", question:"printf(\"%d\",printf(\"VIT\"))?", options:["VIT","VIT3","3VIT","Error"], answer:1, explanation:"Inner returns 3" },
    { id:86, section:"Computer Science", question:"malloc returns on fail?", options:["0","NULL","-1","Garbage"], answer:1, explanation:"NULL pointer" },
    { id:87, section:"Computer Science", question:"BFS uses?", options:["Stack","Queue","Heap","List"], answer:1, explanation:"Queue" },
    { id:88, section:"Computer Science", question:"Convoy effect?", options:["RR","SJF","FCFS","Priority"], answer:2, explanation:"FCFS issue" },
    { id:89, section:"Computer Science", question:"Dangling pointer?", options:["Null","Freed memory","Uninit","Function"], answer:1, explanation:"Invalid reference" },
    { id:90, section:"Computer Science", question:"Heap structure?", options:["Tree","Array","Stack","Queue"], answer:0, explanation:"Binary tree" },
    /* FINAL HARD SECTION */
    
    { id:91, section:"Computer Science", question:"B-tree children?", options:["m","m/2","ceil(m/2)","floor(m/2)"], answer:2, explanation:"Definition" },
    { id:92, section:"Computer Science", question:"Belady anomaly?", options:["LRU","FIFO","Optimal","LFU"], answer:1, explanation:"FIFO" },
    { id:93, section:"Computer Science", question:"Heap build?", options:["O(n log n)","O(n)","O(log n)","O(n²)"], answer:1, explanation:"Linear" },
    { id:94, section:"Computer Science", question:"Undecidable?", options:["Halting","TSP","SAT","Hamilton"], answer:0, explanation:"Halting problem" },
    { id:95, section:"Computer Science", question:"char* vs char[]?", options:["Same","Different","Error","None"], answer:0, explanation:"Same in params" },
    { id:96, section:"Computer Science", question:"ALOHA efficiency?", options:["18%","36%","50%","100%"], answer:1, explanation:"1/e" },
    { id:97, section:"Computer Science", question:"/27 hosts?", options:["30","32","62","14"], answer:0, explanation:"2^5-2" },
    { id:98, section:"Computer Science", question:"2PL issue?", options:["Deadlock","Rollback","Delay","None"], answer:1, explanation:"Cascading rollback" },
    { id:99, section:"Computer Science", question:"Dijkstra?", options:["O(V+E)","O(V log V + E)","O(E log V)","O(V²)"], answer:1, explanation:"Heap" },
    { id:100, section:"Computer Science", question:"Peterson?", options:["Deadlock","Critical section","Paging","Cache"], answer:1, explanation:"Mutual exclusion" }
    
    ];