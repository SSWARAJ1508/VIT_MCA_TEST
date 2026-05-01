import json

questions = []

# Math (1-10)
math = [
  ("What is the derivative of x^2 with respect to x?", ["x", "2x", "x^2", "2"], 1, "Using the power rule, d/dx(x^n) = n*x^(n-1)."),
  ("If A is a 3x3 matrix with determinant 5, what is the determinant of 2A?", ["10", "20", "30", "40"], 3, "det(kA) = k^n * det(A). Here n=3, so 2^3 * 5 = 40."),
  ("What is the probability of getting a sum of 7 when two dice are thrown?", ["1/6", "1/12", "1/36", "1/4"], 0, "6 pairs out of 36 sum to 7."),
  ("The value of limit (x->0) [sin(x) / x] is:", ["0", "1", "Infinity", "-1"], 1, "Standard trigonometric limit."),
  ("What are the roots of the quadratic equation x^2 - 5x + 6 = 0?", ["2, 3", "-2, -3", "1, 6", "2, -3"], 0, "(x-2)(x-3) = 0."),
  ("Which of the following is the integration of e^x?", ["e^x + c", "xe^x + c", "x^2/2 + c", "ln(x) + c"], 0, "The integral of e^x is e^x."),
  ("If two vectors are orthogonal, their dot product is:", ["1", "-1", "0", "Infinity"], 2, "cos(90) = 0."),
  ("The rank of a null matrix is:", ["0", "1", "Not defined", "Infinity"], 0, "A null matrix has no non-zero rows."),
  ("The maximum value of function f(x) = sin(x) + cos(x) is:", ["1", "2", "sqrt(2)", "0"], 2, "sqrt(1^2 + 1^2) = sqrt(2)."),
  ("How many subsets does a set with 4 elements have?", ["8", "16", "32", "64"], 1, "2^n -> 2^4 = 16.")
]

for i, (q, o, a, exp) in enumerate(math):
    questions.append({"id": i+1, "section": "Mathematics", "question": q, "options": o, "answer": a, "explanation": exp})

# English (11-20)
english = [
  ("Choose the correct synonym for 'ABUNDANT':", ["Scarce", "Plentiful", "Minimal", "Rare"], 1, "Abundant means plentiful."),
  ("Choose the correct antonym for 'ZEAL':", ["Apathy", "Passion", "Energy", "Enthusiasm"], 0, "Apathy is the opposite of zeal."),
  ("Identify the noun: 'She sings beautifully.'", ["She", "sings", "beautifully", "None of these"], 3, "No noun in the given options."),
  ("Meaning of idiom 'Under the weather'?", ["Feeling sick", "Enjoying the rain", "Facing a storm", "Changing plans"], 0, "Feeling ill."),
  ("Fill in the blank: He is afraid ___ dogs.", ["from", "of", "to", "with"], 1, "Preposition 'of' follows afraid."),
  ("Passive voice: 'They are building a house.'", ["A house is built by them.", "A house was being built by them.", "A house is being built by them.", "A house will be built by them."], 2, "Present continuous passive format."),
  ("Choose correctly spelled word:", ["Accomodation", "Acommodation", "Accommodation", "Accommadation"], 2, "Two 'c's and two 'm's."),
  ("Find error: 'One of the boys are missing.'", ["One of", "the boys", "are", "missing"], 2, "'One' is singular, so 'is' instead of 'are'."),
  ("One word for: 'A person who loves books.'", ["Bibliophile", "Philanthropist", "Misogynist", "Introvert"], 0, "Bibliophile collects/loves books."),
  ("Substitute: If I 'would have known', I would have helped you.", ["had known", "knew", "have known", "No improvement"], 0, "Third conditional.")
]

for i, (q, o, a, exp) in enumerate(english):
    questions.append({"id": i+11, "section": "English", "question": q, "options": o, "answer": a, "explanation": exp})

cs_easy = [
    ("What does CPU stand for?", ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"], 1, "Central Processing Unit."),
    ("Which of the following is an input device?", ["Monitor", "Printer", "Keyboard", "Speaker"], 2, "Keyboard is used to input data."),
    ("What does RAM stand for?", ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Routine Access Memory"], 1, "Random Access Memory is volatile memory."),
    ("Which is not an Operating System?", ["Windows", "Linux", "Oracle", "macOS"], 2, "Oracle is an RDBMS, not an OS."),
    ("What does HTTP stand for?", ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperTest Transfer Protocol", "HyperText Transfer Package"], 0, "HyperText Transfer Protocol."),
    ("What is the brain of a computer?", ["RAM", "Motherboard", "CPU", "Hard Drive"], 2, "CPU is considered the brain."),
    ("Which of these is a non-volatile memory?", ["SRAM", "DRAM", "ROM", "Cache"], 2, "ROM retains data without power."),
    ("What does GUI stand for?", ["General User Interface", "Graphical User Interface", "Graphical Universal Interface", "General Universal Interface"], 1, "Graphical User Interface."),
    ("What is 1 Byte equal to?", ["4 bits", "8 bits", "16 bits", "32 bits"], 1, "1 Byte = 8 bits."),
    ("Who is known as the father of computers?", ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"], 0, "Charles Babbage is the father of computers."),
    ("Which of the following is a web browser?", ["Google", "Yahoo", "Bing", "Chrome"], 3, "Chrome is a web browser, others are search engines."),
    ("What does IP stand for?", ["Internet Protocol", "Intranet Protocol", "Internal Protocol", "International Protocol"], 0, "Internet Protocol."),
    ("Which language is used for web styling?", ["HTML", "C++", "CSS", "Python"], 2, "CSS is used for styling."),
    ("What is a compiler?", ["Hardware", "Software that translates high-level to machine code", "An OS", "A database"], 1, "It compiles source code to machine code."),
    ("What does SQL stand for?", ["Structured Query Language", "Standard Query Language", "Simple Query Language", "Sequential Query Language"], 0, "Structured Query Language."),
    ("Which is a primary key constraint?", ["Cannot be null", "Can be duplicate", "Can be null", "None of these"], 0, "Primary key must be unique and not null."),
    ("What does DBMS stand for?", ["Data Base Management System", "Data Basic Management System", "Document Base Management System", "Data Base Management Software"], 0, "Database Management System."),
    ("What is an algorithm?", ["A programming language", "Step-by-step procedure to solve a problem", "A hardware component", "An operating system"], 1, "It is a logical sequence of steps."),
    ("Which data structure uses LIFO?", ["Queue", "Tree", "Array", "Stack"], 3, "Stack uses Last-In-First-Out."),
    ("Which data structure uses FIFO?", ["Stack", "Queue", "Tree", "Graph"], 1, "Queue uses First-In-First-Out."),
    ("What is the default port for HTTP?", ["80", "443", "21", "22"], 0, "Port 80 is for HTTP."),
    ("What is the default port for HTTPS?", ["80", "443", "21", "25"], 1, "Port 443 is for HTTPS."),
    ("Which protocol is used for email transmission?", ["FTP", "SMTP", "HTTP", "SNMP"], 1, "Simple Mail Transfer Protocol."),
    ("What does LAN stand for?", ["Local Area Network", "Large Area Network", "Logical Area Network", "Limited Area Network"], 0, "Local Area Network."),
    ("What does WAN stand for?", ["Wireless Area Network", "Wide Area Network", "Web Area Network", "Whole Area Network"], 1, "Wide Area Network."),
    ("Which is the lowest layer of the OSI model?", ["Data Link Layer", "Network Layer", "Physical Layer", "Transport Layer"], 2, "Physical Layer is Layer 1."),
    ("Which layer is responsible for routing?", ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 2, "Network Layer handles routing."),
    ("What is the main function of the Transport Layer?", ["Routing", "Error-free end-to-end delivery", "Framing", "Signal transmission"], 1, "Ensures reliable end-to-end communication."),
    ("Which IP class allows a maximum of 254 hosts?", ["Class A", "Class B", "Class C", "Class D"], 2, "Class C has an 8-bit host ID, so 2^8 - 2 = 254."),
    ("What does DNS do?", ["Assigns IP addresses", "Translates domain names to IP addresses", "Routes packets", "Encrypts data"], 1, "Domain Name System resolves names to IPs."),
    ("Which command is used to display files in Linux?", ["cd", "mkdir", "ls", "rm"], 2, "ls is used to list directory contents."),
    ("What does the 'pwd' command do?", ["Print working directory", "Password change", "Print window display", "Process working directory"], 0, "pwd shows the current directory path."),
    ("In C, what is the size of 'char'?", ["1 byte", "2 bytes", "4 bytes", "8 bytes"], 0, "char is typically 1 byte."),
    ("In C, which symbol is used for pointers?", ["&", "*", "#", "@"], 1, "* is the dereference and pointer declaration operator."),
    ("What is the extension of a C source file?", [".cpp", ".c", ".h", ".obj"], 1, ".c is the standard extension."),
    ("Which function is used to read input in C?", ["printf", "scanf", "read", "input"], 1, "scanf is used for formatted input."),
    ("What does HTML stand for?", ["HyperText Markup Language", "HyperText Machine Language", "HyperText Marking Language", "HyperText Macro Language"], 0, "HyperText Markup Language."),
    ("Which tag is used for the largest heading in HTML?", ["<heading>", "<h6>", "<head>", "<h1>"], 3, "<h1> is the largest heading."),
    ("Which data structure is best for hierarchical data?", ["Array", "Linked List", "Tree", "Stack"], 2, "Trees naturally represent hierarchical relationships."),
    ("What is the time complexity of searching in an unsorted array?", ["O(1)", "O(log n)", "O(n)", "O(n^2)"], 2, "Linear search takes O(n) time."),
    ("What is an array?", ["A collection of mixed data types", "A collection of same data type elements", "A dynamic structure", "A tree-like structure"], 1, "Arrays store elements of the same type in contiguous memory."),
    ("Which sorting algorithm is simplest?", ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"], 2, "Bubble sort is the most basic sorting algorithm."),
    ("What is a deadlock?", ["A program termination", "Two processes waiting indefinitely for each other", "A memory leak", "A network failure"], 1, "Circular wait causes deadlock."),
    ("What is virtual memory?", ["RAM", "Cache", "Illusion of larger main memory", "Hard disk"], 2, "OS technique to extend apparent memory."),
    ("Which component manages hardware and software resources?", ["CPU", "RAM", "Operating System", "Compiler"], 2, "OS acts as an interface between user and hardware."),
    ("What is a thread?", ["A heavy-weight process", "A light-weight process", "A network cable", "A hardware component"], 1, "Thread is the smallest unit of execution."),
    ("Which scheduling algorithm uses a time quantum?", ["FCFS", "SJF", "Round Robin", "Priority"], 2, "Round Robin assigns a fixed time slice to each process."),
    ("What is context switching?", ["Switching power", "Saving state of old process and loading new one", "Changing user context", "Switching network paths"], 1, "The OS switches the CPU between processes."),
    ("What does DDL stand for in SQL?", ["Data Definition Language", "Data Manipulation Language", "Data Description Language", "Data Design Language"], 0, "DDL defines database schema."),
    ("Which SQL keyword is used to retrieve data?", ["GET", "SELECT", "FETCH", "PULL"], 1, "SELECT query fetches data.")
]

cs_medium = [
    ("Which normal form is based on the concept of multi-valued dependency?", ["2NF", "3NF", "BCNF", "4NF"], 3, "4NF handles multi-valued dependencies."),
    ("What is a foreign key?", ["A key that uniquely identifies a row", "An attribute linking to another table's primary key", "A composite key", "A candidate key"], 1, "Foreign key maintains referential integrity."),
    ("Which of the following is not a property of a transaction (ACID)?", ["Atomicity", "Concurrency", "Isolation", "Durability"], 1, "C stands for Consistency, not Concurrency."),
    ("What is the worst-case time complexity of Quick Sort?", ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], 2, "Worst case occurs with already sorted arrays if poorly partitioned."),
    ("Which traversal strategy visits left, root, right?", ["Pre-order", "In-order", "Post-order", "Level-order"], 1, "In-order traversal visits the root in the middle."),
    ("How many edges are in a spanning tree of a graph with n vertices?", ["n", "n-1", "n+1", "n/2"], 1, "A spanning tree on n vertices always has n-1 edges."),
    ("What is the height of a balanced binary search tree with n nodes?", ["O(n)", "O(log n)", "O(n log n)", "O(1)"], 1, "Balancing ensures height remains logarithmic."),
    ("What is the result of 10 ^ 12 in C? (^ is bitwise XOR)", ["2", "6", "8", "22"], 1, "1010 ^ 1100 = 0110, which is 6."),
    ("What does the 'volatile' keyword mean in C?", ["Variable can change unexpectedly", "Variable is constant", "Variable is stored in registers", "Variable is global"], 0, "Prevents compiler optimization for variables that can be altered by hardware."),
    ("Which IPC mechanism is fastest?", ["Pipes", "Message Queues", "Shared Memory", "Sockets"], 2, "Shared memory avoids overhead of copying data between kernel and user space."),
    ("What is thrashing in an OS?", ["High CPU utilization", "Excessive paging activity", "Disk failure", "Deadlock resolution"], 1, "Thrashing happens when the OS spends more time paging than executing code."),
    ("What is the primary purpose of a subnet mask?", ["To encrypt traffic", "To identify network and host portions of an IP", "To speed up routing", "To act as a firewall"], 1, "It masks the IP to find the network ID."),
    ("Which layer of OSI model uses MAC addresses?", ["Network Layer", "Data Link Layer", "Physical Layer", "Transport Layer"], 1, "Layer 2 uses MAC addresses for local delivery."),
    ("What is the difference between TCP and UDP?", ["TCP is connectionless, UDP is connection-oriented", "TCP is reliable, UDP is not", "TCP is faster than UDP", "They operate at different layers"], 1, "TCP provides guaranteed delivery, UDP does not."),
    ("Which sorting algorithm has O(n) time complexity in the best case?", ["Merge Sort", "Insertion Sort", "Selection Sort", "Heap Sort"], 1, "Insertion sort is O(n) when the array is already sorted."),
    ("What is the output of 'printf(\"%d\", printf(\"VIT\"));' in C?", ["VIT", "VIT3", "3VIT", "Error"], 1, "Inner printf prints 'VIT' and returns 3. Outer prints 3."),
    ("What does 'malloc' return on failure in C?", ["0", "NULL", "-1", "Garbage value"], 1, "malloc returns a NULL pointer if it cannot allocate memory."),
    ("Which data structure is used to implement BFS?", ["Stack", "Queue", "Priority Queue", "Linked List"], 1, "Breadth-First Search requires a Queue."),
    ("Which scheduling algorithm suffers from the convoy effect?", ["Round Robin", "SJF", "FCFS", "Priority"], 2, "First-Come-First-Serve suffers from convoy effect when a long process blocks shorter ones."),
    ("What is a dangling pointer?", ["A pointer pointing to null", "A pointer pointing to a freed memory location", "A pointer that is uninitialized", "A pointer to a function"], 1, "Dangling pointers reference deallocated memory.")
]

cs_hard = [
    ("In a B-tree of order m, what is the minimum number of children for an internal node (except root)?", ["m", "m/2", "ceil(m/2)", "floor(m/2)"], 2, "An internal node must have at least ceil(m/2) children."),
    ("Which page replacement algorithm suffers from Belady's Anomaly?", ["LRU", "FIFO", "Optimal", "LFU"], 1, "FIFO can have more page faults when allocated more frames (Belady's Anomaly)."),
    ("What is the time complexity of building a heap from an unordered array?", ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"], 1, "Using the bottom-up approach, building a max-heap takes O(n) time."),
    ("Which of the following problems is undecidable?", ["Halting Problem", "Hamiltonian Path Problem", "Boolean Satisfiability Problem", "Travelling Salesman Problem"], 0, "The Halting problem has no general algorithmic solution."),
    ("In C, what is the difference between 'char *p' and 'char p[]' as function arguments?", ["No difference", "Array decays to a pointer", "Pointer is passed by value, array by reference", "Compiler error"], 0, "As function parameters, they are exactly equivalent; an array decays to a pointer."),
    ("What is the maximum throughput of the Slotted ALOHA protocol?", ["18.4%", "36.8%", "50%", "100%"], 1, "Slotted ALOHA has a max efficiency of 1/e, which is approx 36.8%."),
    ("If a subnet mask is 255.255.255.224, how many usable hosts are there per subnet?", ["30", "32", "62", "14"], 0, "224 leaves 5 bits for hosts. 2^5 - 2 = 30 usable hosts."),
    ("Which concurrency control protocol ensures conflict serializability but may cause cascading rollbacks?", ["Two-Phase Locking (2PL)", "Timestamp Ordering", "Strict 2PL", "Validation Based Protocol"], 0, "Basic 2PL allows uncommitted data to be read, causing cascading rollbacks."),
    ("What is the complexity of Dijkstra's algorithm using a Min-Priority Queue (Fibonacci Heap)?", ["O(V + E)", "O(V log V + E)", "O(E log V)", "O(V^2)"], 1, "Fibonacci heaps decrease key operation takes O(1) amortized, leading to O(V log V + E)."),
    ("In an OS context, what does 'Peterson's Solution' solve?", ["Deadlock avoidance", "Critical Section Problem for 2 processes", "Memory fragmentation", "Cache coherence"], 1, "Peterson's algorithm is a concurrent programming algorithm for mutual exclusion between two processes.")
]

cs_total = cs_easy + cs_medium + cs_hard

for i, (q, o, a, exp) in enumerate(cs_total):
    questions.append({"id": i+21, "section": "Computer Science", "question": q, "options": o, "answer": a, "explanation": exp})

js_content = f"const questions = {json.dumps(questions, indent=2)};"

with open("/Users/shubhamswaraj/Desktop/VITMCA/questions.js", "w") as f:
    f.write(js_content)
with open("/Users/shubhamswaraj/Desktop/VITTEST/questions.js", "w") as f:
    f.write(js_content)

print("questions.js generated with", len(questions), "questions.")
