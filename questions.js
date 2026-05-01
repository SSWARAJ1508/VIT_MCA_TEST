const questions = [
    {
      "id": 1,
      "section": "Mathematics",
      "question": "What is the derivative of x^2 with respect to x?",
      "options": [
        "x",
        "2x",
        "x^2",
        "2"
      ],
      "answer": 1,
      "explanation": "Using the power rule, d/dx(x^n) = n*x^(n-1)."
    },
    {
      "id": 2,
      "section": "Mathematics",
      "question": "If A is a 3x3 matrix with determinant 5, what is the determinant of 2A?",
      "options": [
        "10",
        "20",
        "30",
        "40"
      ],
      "answer": 3,
      "explanation": "det(kA) = k^n * det(A). Here n=3, so 2^3 * 5 = 40."
    },
    {
      "id": 3,
      "section": "Mathematics",
      "question": "What is the probability of getting a sum of 7 when two dice are thrown?",
      "options": [
        "1/6",
        "1/12",
        "1/36",
        "1/4"
      ],
      "answer": 0,
      "explanation": "6 pairs out of 36 sum to 7."
    },
    {
      "id": 4,
      "section": "Mathematics",
      "question": "The value of limit (x->0) [sin(x) / x] is:",
      "options": [
        "0",
        "1",
        "Infinity",
        "-1"
      ],
      "answer": 1,
      "explanation": "Standard trigonometric limit."
    },
    {
      "id": 5,
      "section": "Mathematics",
      "question": "What are the roots of the quadratic equation x^2 - 5x + 6 = 0?",
      "options": [
        "2, 3",
        "-2, -3",
        "1, 6",
        "2, -3"
      ],
      "answer": 0,
      "explanation": "(x-2)(x-3) = 0."
    },
    {
      "id": 6,
      "section": "Mathematics",
      "question": "Which of the following is the integration of e^x?",
      "options": [
        "e^x + c",
        "xe^x + c",
        "x^2/2 + c",
        "ln(x) + c"
      ],
      "answer": 0,
      "explanation": "The integral of e^x is e^x."
    },
    {
      "id": 7,
      "section": "Mathematics",
      "question": "If two vectors are orthogonal, their dot product is:",
      "options": [
        "1",
        "-1",
        "0",
        "Infinity"
      ],
      "answer": 2,
      "explanation": "cos(90) = 0."
    },
    {
      "id": 8,
      "section": "Mathematics",
      "question": "The rank of a null matrix is:",
      "options": [
        "0",
        "1",
        "Not defined",
        "Infinity"
      ],
      "answer": 0,
      "explanation": "A null matrix has no non-zero rows."
    },
    {
      "id": 9,
      "section": "Mathematics",
      "question": "The maximum value of function f(x) = sin(x) + cos(x) is:",
      "options": [
        "1",
        "2",
        "sqrt(2)",
        "0"
      ],
      "answer": 2,
      "explanation": "sqrt(1^2 + 1^2) = sqrt(2)."
    },
    {
      "id": 10,
      "section": "Mathematics",
      "question": "How many subsets does a set with 4 elements have?",
      "options": [
        "8",
        "16",
        "32",
        "64"
      ],
      "answer": 1,
      "explanation": "2^n -> 2^4 = 16."
    },
    {
      "id": 11,
      "section": "English",
      "question": "Choose the correct synonym for \"ABUNDANT\":",
      "options": [
        "Scarce",
        "Plentiful",
        "Minimal",
        "Rare"
      ],
      "answer": 1,
      "explanation": "Abundant means plentiful."
    },
    {
      "id": 12,
      "section": "English",
      "question": "Choose the correct antonym for \"ZEAL\":",
      "options": [
        "Apathy",
        "Passion",
        "Energy",
        "Enthusiasm"
      ],
      "answer": 0,
      "explanation": "Apathy is the opposite of zeal."
    },
    {
      "id": 13,
      "section": "English",
      "question": "Identify the noun: \"She sings beautifully.\"",
      "options": [
        "She",
        "sings",
        "beautifully",
        "None of these"
      ],
      "answer": 3,
      "explanation": "No noun in the given options."
    },
    {
      "id": 14,
      "section": "English",
      "question": "Meaning of idiom \"Under the weather\"?",
      "options": [
        "Feeling sick",
        "Enjoying the rain",
        "Facing a storm",
        "Changing plans"
      ],
      "answer": 0,
      "explanation": "Feeling ill."
    },
    {
      "id": 15,
      "section": "English",
      "question": "Fill in the blank: He is afraid ___ dogs.",
      "options": [
        "from",
        "of",
        "to",
        "with"
      ],
      "answer": 1,
      "explanation": "Preposition of follows afraid."
    },
    {
      "id": 16,
      "section": "English",
      "question": "Passive voice: \"They are building a house.\"",
      "options": [
        "A house is built by them.",
        "A house was being built by them.",
        "A house is being built by them.",
        "A house will be built by them."
      ],
      "answer": 2,
      "explanation": "Present continuous passive format."
    },
    {
      "id": 17,
      "section": "English",
      "question": "Choose correctly spelled word:",
      "options": [
        "Accomodation",
        "Acommodation",
        "Accommodation",
        "Accommadation"
      ],
      "answer": 2,
      "explanation": "Two cs and two ms."
    },
    {
      "id": 18,
      "section": "English",
      "question": "Find error: \"One of the boys are missing.\"",
      "options": [
        "One of",
        "the boys",
        "are",
        "missing"
      ],
      "answer": 2,
      "explanation": "One is singular, so is instead of are."
    },
    {
      "id": 19,
      "section": "English",
      "question": "One word for: \"A person who loves books.\"",
      "options": [
        "Bibliophile",
        "Philanthropist",
        "Misogynist",
        "Introvert"
      ],
      "answer": 0,
      "explanation": "Bibliophile collects/loves books."
    },
    {
      "id": 20,
      "section": "English",
      "question": "Substitute: If I \"would have known\", I would have helped you.",
      "options": [
        "had known",
        "knew",
        "have known",
        "No improvement"
      ],
      "answer": 0,
      "explanation": "Third conditional."
    },
    {
      "id": 21,
      "section": "Computer Science",
      "question": "Which is not a database model?",
      "options": [
        "Relational",
        "Network",
        "Object-Oriented",
        "Hexagonal"
      ],
      "answer": 3,
      "explanation": "Hexagonal is a software architecture, not a traditional DB model."
    },
    {
      "id": 22,
      "section": "Computer Science",
      "question": "What is the size of an int in C?",
      "options": [
        "Compiler dependent",
        "2 bytes",
        "4 bytes",
        "8 bytes"
      ],
      "answer": 0,
      "explanation": "The size of int in C depends on the compiler and architecture."
    },
    {
      "id": 23,
      "section": "Computer Science",
      "question": "Which of the following is DML?",
      "options": [
        "CREATE",
        "ALTER",
        "DROP",
        "UPDATE"
      ],
      "answer": 3,
      "explanation": "UPDATE is a Data Manipulation Language command."
    },
    {
      "id": 24,
      "section": "Computer Science",
      "question": "In C, what is the array index starting value?",
      "options": [
        "0",
        "1",
        "-1",
        "None"
      ],
      "answer": 0,
      "explanation": "Arrays in C are zero-indexed."
    },
    {
      "id": 25,
      "section": "Computer Science",
      "question": "Which layer is responsible for routing?",
      "options": [
        "Network",
        "Data Link",
        "Physical",
        "Transport"
      ],
      "answer": 0,
      "explanation": "The Network layer handles logical addressing and routing."
    },
    {
      "id": 26,
      "section": "Computer Science",
      "question": "HTTP operates at which OSI layer?",
      "options": [
        "Application",
        "Transport",
        "Network",
        "Data Link"
      ],
      "answer": 0,
      "explanation": "HTTP is an application layer protocol."
    },
    {
      "id": 27,
      "section": "Computer Science",
      "question": "Which tree traversal visits root first?",
      "options": [
        "Preorder",
        "Inorder",
        "Postorder",
        "Level order"
      ],
      "answer": 0,
      "explanation": "Preorder visits: Root, Left, Right."
    },
    {
      "id": 28,
      "section": "Computer Science",
      "question": "Which data structure uses FIFO?",
      "options": [
        "Stack",
        "Queue",
        "Tree",
        "Graph"
      ],
      "answer": 1,
      "explanation": "Queue operates on First-In-First-Out basis."
    },
    {
      "id": 29,
      "section": "Computer Science",
      "question": "Which SQL keyword is used to sort the result?",
      "options": [
        "ORDER BY",
        "SORT BY",
        "GROUP BY",
        "ALIGN BY"
      ],
      "answer": 0,
      "explanation": "ORDER BY sorts the result set."
    },
    {
      "id": 30,
      "section": "Computer Science",
      "question": "What is a primary key?",
      "options": [
        "Unique identifier",
        "Can be null",
        "Allows duplicates",
        "Used for sorting"
      ],
      "answer": 0,
      "explanation": "A primary key uniquely identifies a row in a table."
    },
    {
      "id": 31,
      "section": "Computer Science",
      "question": "Which scheduling algorithm is non-preemptive?",
      "options": [
        "FCFS",
        "Round Robin",
        "SRTF",
        "Preemptive Priority"
      ],
      "answer": 0,
      "explanation": "First-Come-First-Serve cannot be preempted once a process starts."
    },
    {
      "id": 32,
      "section": "Computer Science",
      "question": "What does a pointer variable store?",
      "options": [
        "Value",
        "Address",
        "String",
        "Float"
      ],
      "answer": 1,
      "explanation": "Pointers store memory addresses."
    },
    {
      "id": 33,
      "section": "Computer Science",
      "question": "Which command is used to remove a directory in Linux?",
      "options": [
        "rmdir",
        "remove",
        "del",
        "mkdir"
      ],
      "answer": 0,
      "explanation": "rmdir removes empty directories."
    },
    {
      "id": 34,
      "section": "Computer Science",
      "question": "Which of the following is a non-linear data structure?",
      "options": [
        "Array",
        "Stack",
        "Queue",
        "Graph"
      ],
      "answer": 3,
      "explanation": "Graphs and trees are non-linear data structures."
    },
    {
      "id": 35,
      "section": "Computer Science",
      "question": "What is the default port for HTTP?",
      "options": [
        "80",
        "443",
        "21",
        "25"
      ],
      "answer": 0,
      "explanation": "Port 80 is reserved for HTTP traffic."
    },
    {
      "id": 36,
      "section": "Computer Science",
      "question": "Which memory is the fastest?",
      "options": [
        "Cache",
        "RAM",
        "Hard Disk",
        "Register"
      ],
      "answer": 3,
      "explanation": "CPU registers are the fastest accessible memory."
    },
    {
      "id": 37,
      "section": "Computer Science",
      "question": "What is deadlock?",
      "options": [
        "Processes waiting for each other",
        "Process ends",
        "OS crashes",
        "RAM full"
      ],
      "answer": 0,
      "explanation": "Deadlock is a circular wait condition between processes."
    },
    {
      "id": 38,
      "section": "Computer Science",
      "question": "Which function is used to allocate memory dynamically in C?",
      "options": [
        "malloc()",
        "alloc()",
        "create()",
        "new()"
      ],
      "answer": 0,
      "explanation": "malloc() allocates dynamic memory in C."
    },
    {
      "id": 39,
      "section": "Computer Science",
      "question": "What is an IP address?",
      "options": [
        "Physical address",
        "Logical address",
        "MAC address",
        "Hardware address"
      ],
      "answer": 1,
      "explanation": "An IP address is a logical address assigned to devices in a network."
    },
    {
      "id": 40,
      "section": "Computer Science",
      "question": "Which SQL clause filters groups?",
      "options": [
        "HAVING",
        "WHERE",
        "GROUP BY",
        "FILTER"
      ],
      "answer": 0,
      "explanation": "HAVING filters groups created by GROUP BY."
    },
    {
      "id": 41,
      "section": "Computer Science",
      "question": "What is the output of 5 % 2 in C?",
      "options": [
        "2.5",
        "2",
        "1",
        "0"
      ],
      "answer": 2,
      "explanation": "The modulus operator returns the remainder, which is 1."
    },
    {
      "id": 42,
      "section": "Computer Science",
      "question": "Which gate is known as the universal gate?",
      "options": [
        "AND",
        "OR",
        "NAND",
        "NOT"
      ],
      "answer": 2,
      "explanation": "NAND and NOR are universal gates."
    },
    {
      "id": 43,
      "section": "Computer Science",
      "question": "What is an operating system?",
      "options": [
        "Hardware",
        "Application software",
        "System software",
        "Firmware"
      ],
      "answer": 2,
      "explanation": "OS is a system software that manages resources."
    },
    {
      "id": 44,
      "section": "Computer Science",
      "question": "Which is not an OOP concept?",
      "options": [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Compilation"
      ],
      "answer": 3,
      "explanation": "Compilation is a language translation step, not an OOP concept."
    },
    {
      "id": 45,
      "section": "Computer Science",
      "question": "What is a foreign key?",
      "options": [
        "A key linking to another table",
        "A unique key",
        "A null key",
        "A primary key"
      ],
      "answer": 0,
      "explanation": "Foreign keys create relationships between tables."
    },
    {
      "id": 46,
      "section": "Computer Science",
      "question": "Which symbol is used for a single-line comment in C?",
      "options": [
        "//",
        "/*",
        "#",
        "--"
      ],
      "answer": 0,
      "explanation": "// is used for single-line comments in C."
    },
    {
      "id": 47,
      "section": "Computer Science",
      "question": "In a binary tree, what is a node with no children called?",
      "options": [
        "Root",
        "Leaf",
        "Branch",
        "Parent"
      ],
      "answer": 1,
      "explanation": "Nodes without children are called leaf nodes."
    },
    {
      "id": 48,
      "section": "Computer Science",
      "question": "Which of these is a volatile memory?",
      "options": [
        "ROM",
        "PROM",
        "RAM",
        "EPROM"
      ],
      "answer": 2,
      "explanation": "RAM loses its data when power is turned off."
    },
    {
      "id": 49,
      "section": "Computer Science",
      "question": "What is the use of the 'ping' command?",
      "options": [
        "Test connectivity",
        "Download files",
        "Edit text",
        "Format disk"
      ],
      "answer": 0,
      "explanation": "Ping tests network reachability to a host."
    },
    {
      "id": 50,
      "section": "Computer Science",
      "question": "Which data structure is used for recursion?",
      "options": [
        "Queue",
        "Stack",
        "Array",
        "Linked List"
      ],
      "answer": 1,
      "explanation": "The call stack handles recursive function calls."
    },
    {
      "id": 51,
      "section": "Computer Science",
      "question": "What is an attribute in DBMS?",
      "options": [
        "A table",
        "A row",
        "A column",
        "A database"
      ],
      "answer": 2,
      "explanation": "An attribute corresponds to a column in a table."
    },
    {
      "id": 52,
      "section": "Computer Science",
      "question": "What is the time complexity of searching in a Hash Table (average case)?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": 0,
      "explanation": "Hash tables provide constant time average access."
    },
    {
      "id": 53,
      "section": "Computer Science",
      "question": "Which protocol is used for secure communication over the web?",
      "options": [
        "HTTP",
        "HTTPS",
        "FTP",
        "SMTP"
      ],
      "answer": 1,
      "explanation": "HTTPS encrypts the communication."
    },
    {
      "id": 54,
      "section": "Computer Science",
      "question": "What does the 'ls' command do in Linux?",
      "options": [
        "List files",
        "Delete files",
        "Copy files",
        "Move files"
      ],
      "answer": 0,
      "explanation": "ls lists directory contents."
    },
    {
      "id": 55,
      "section": "Computer Science",
      "question": "Which topology requires a central hub?",
      "options": [
        "Ring",
        "Bus",
        "Star",
        "Mesh"
      ],
      "answer": 2,
      "explanation": "Star topology connects all nodes to a central hub/switch."
    },
    {
      "id": 56,
      "section": "Computer Science",
      "question": "What is the extension of a compiled Java class file?",
      "options": [
        ".java",
        ".class",
        ".obj",
        ".exe"
      ],
      "answer": 1,
      "explanation": "Java compiles source code to .class bytecode files."
    },
    {
      "id": 57,
      "section": "Computer Science",
      "question": "In C, what is the format specifier for a floating-point number?",
      "options": [
        "%d",
        "%c",
        "%f",
        "%s"
      ],
      "answer": 2,
      "explanation": "%f is used for floats."
    },
    {
      "id": 58,
      "section": "Computer Science",
      "question": "Which of the following is a valid variable name in C?",
      "options": [
        "1var",
        "_var",
        "var-1",
        "%var"
      ],
      "answer": 1,
      "explanation": "Variable names must start with a letter or underscore."
    },
    {
      "id": 59,
      "section": "Computer Science",
      "question": "What is the maximum number of children in a Binary Tree node?",
      "options": [
        "1",
        "2",
        "3",
        "Infinite"
      ],
      "answer": 1,
      "explanation": "A binary tree node has at most two children."
    },
    {
      "id": 60,
      "section": "Computer Science",
      "question": "Which command commits a transaction in SQL?",
      "options": [
        "SAVE",
        "COMMIT",
        "END",
        "DONE"
      ],
      "answer": 1,
      "explanation": "COMMIT makes database changes permanent."
    },
    {
      "id": 61,
      "section": "Computer Science",
      "question": "What is the main purpose of an index in a database?",
      "options": [
        "Save space",
        "Speed up data retrieval",
        "Encrypt data",
        "Normalize data"
      ],
      "answer": 1,
      "explanation": "Indexes accelerate SELECT queries."
    },
    {
      "id": 62,
      "section": "Computer Science",
      "question": "Which sorting algorithm compares adjacent elements and swaps them?",
      "options": [
        "Merge Sort",
        "Quick Sort",
        "Bubble Sort",
        "Selection Sort"
      ],
      "answer": 2,
      "explanation": "Bubble sort repeatedly swaps adjacent out-of-order elements."
    },
    {
      "id": 63,
      "section": "Computer Science",
      "question": "What is a thread?",
      "options": [
        "A heavy process",
        "A lightweight process",
        "A hardware component",
        "A network cable"
      ],
      "answer": 1,
      "explanation": "A thread is the smallest unit of execution within a process."
    },
    {
      "id": 64,
      "section": "Computer Science",
      "question": "Which layer of OSI model uses MAC addresses?",
      "options": [
        "Network",
        "Data Link",
        "Physical",
        "Transport"
      ],
      "answer": 1,
      "explanation": "Data Link layer uses physical MAC addresses."
    },
    {
      "id": 65,
      "section": "Computer Science",
      "question": "What is the base of the Hexadecimal number system?",
      "options": [
        "8",
        "10",
        "16",
        "2"
      ],
      "answer": 2,
      "explanation": "Hexadecimal uses base 16."
    },
    {
      "id": 66,
      "section": "Computer Science",
      "question": "Which function is used to copy a string in C?",
      "options": [
        "strcpy()",
        "copy()",
        "strdup()",
        "stringcopy()"
      ],
      "answer": 0,
      "explanation": "strcpy() copies a string from source to destination."
    },
    {
      "id": 67,
      "section": "Computer Science",
      "question": "What is the size of an IPv4 address?",
      "options": [
        "16 bits",
        "32 bits",
        "64 bits",
        "128 bits"
      ],
      "answer": 1,
      "explanation": "IPv4 addresses are 32-bit numbers."
    },
    {
      "id": 68,
      "section": "Computer Science",
      "question": "What is context switching?",
      "options": [
        "Switching power",
        "Saving state of old process and loading new one",
        "Changing user",
        "Switching network paths"
      ],
      "answer": 1,
      "explanation": "The OS saves the current process context and loads another."
    },
    {
      "id": 69,
      "section": "Computer Science",
      "question": "Which constraint ensures all values in a column are unique?",
      "options": [
        "NOT NULL",
        "UNIQUE",
        "CHECK",
        "DEFAULT"
      ],
      "answer": 1,
      "explanation": "UNIQUE prevents duplicate values in a column."
    },
    {
      "id": 70,
      "section": "Computer Science",
      "question": "What is a loop that never ends called?",
      "options": [
        "Infinite loop",
        "Break loop",
        "Terminated loop",
        "Dead loop"
      ],
      "answer": 0,
      "explanation": "An infinite loop lacks a terminating condition."
    },
    {
      "id": 71,
      "section": "Computer Science",
      "question": "Which of the following is a compiled language?",
      "options": [
        "Python",
        "JavaScript",
        "C",
        "HTML"
      ],
      "answer": 2,
      "explanation": "C is compiled directly to machine code."
    },
    {
      "id": 72,
      "section": "Computer Science",
      "question": "What is SQL primarily used for?",
      "options": [
        "Web design",
        "Database querying",
        "Hardware configuration",
        "OS management"
      ],
      "answer": 1,
      "explanation": "SQL manages and queries relational databases."
    },
    {
      "id": 73,
      "section": "Computer Science",
      "question": "Which logical operator represents 'AND' in C?",
      "options": [
        "||",
        "&&",
        "!",
        "&"
      ],
      "answer": 1,
      "explanation": "&& is the logical AND operator."
    },
    {
      "id": 74,
      "section": "Computer Science",
      "question": "What is a byte?",
      "options": [
        "4 bits",
        "8 bits",
        "16 bits",
        "32 bits"
      ],
      "answer": 1,
      "explanation": "One byte equals 8 bits."
    },
    {
      "id": 75,
      "section": "Computer Science",
      "question": "Which command undoes an uncommitted transaction in SQL?",
      "options": [
        "UNDO",
        "REVERT",
        "ROLLBACK",
        "BACK"
      ],
      "answer": 2,
      "explanation": "ROLLBACK reverts the uncommitted database changes."
    },
    {
      "id": 76,
      "section": "Computer Science",
      "question": "What does a compiler do?",
      "options": [
        "Executes code line by line",
        "Converts high-level code to machine code",
        "Manages memory",
        "Formats disk"
      ],
      "answer": 1,
      "explanation": "It translates entire source code files into executable object code."
    },
    {
      "id": 77,
      "section": "Computer Science",
      "question": "Which tree traversal visits left, root, right?",
      "options": [
        "Preorder",
        "Inorder",
        "Postorder",
        "Level order"
      ],
      "answer": 1,
      "explanation": "Inorder traversal gives sorted order in a BST."
    },
    {
      "id": 78,
      "section": "Computer Science",
      "question": "What is the best case time complexity of Insertion Sort?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": 2,
      "explanation": "Insertion sort is O(n) when the array is already sorted."
    },
    {
      "id": 79,
      "section": "Computer Science",
      "question": "Which keyword is used to declare a constant in C?",
      "options": [
        "const",
        "constant",
        "final",
        "var"
      ],
      "answer": 0,
      "explanation": "const is used to declare read-only variables in C."
    },
    {
      "id": 80,
      "section": "Computer Science",
      "question": "Which protocol is used to receive email?",
      "options": [
        "SMTP",
        "POP3",
        "FTP",
        "DHCP"
      ],
      "answer": 1,
      "explanation": "POP3 and IMAP are used to receive emails."
    },
    {
      "id": 81,
      "section": "Computer Science",
      "question": "What is thrashing in an OS?",
      "options": [
        "High CPU utilization",
        "Excessive paging activity",
        "Disk failure",
        "Deadlock resolution"
      ],
      "answer": 1,
      "explanation": "Thrashing happens when the OS spends more time paging than executing code."
    },
    {
      "id": 82,
      "section": "Computer Science",
      "question": "What is the primary purpose of a subnet mask?",
      "options": [
        "To encrypt traffic",
        "To identify network and host portions of an IP",
        "To speed up routing",
        "To act as a firewall"
      ],
      "answer": 1,
      "explanation": "It masks the IP to find the network ID."
    },
    {
      "id": 83,
      "section": "Computer Science",
      "question": "Which layer of OSI model uses MAC addresses?",
      "options": [
        "Network Layer",
        "Data Link Layer",
        "Physical Layer",
        "Transport Layer"
      ],
      "answer": 1,
      "explanation": "Layer 2 uses MAC addresses for local delivery."
    },
    {
      "id": 84,
      "section": "Computer Science",
      "question": "What is the difference between TCP and UDP?",
      "options": [
        "TCP is connectionless, UDP is connection-oriented",
        "TCP is reliable, UDP is not",
        "TCP is faster than UDP",
        "They operate at different layers"
      ],
      "answer": 1,
      "explanation": "TCP provides guaranteed delivery, UDP does not."
    },
    {
      "id": 85,
      "section": "Computer Science",
      "question": "Which sorting algorithm has O(n) time complexity in the best case?",
      "options": [
        "Merge Sort",
        "Insertion Sort",
        "Selection Sort",
        "Heap Sort"
      ],
      "answer": 1,
      "explanation": "Insertion sort is O(n) when the array is already sorted."
    },
    {
      "id": 86,
      "section": "Computer Science",
      "question": "What is the output of \"printf(\"%d\", printf(\"VIT\"));\" in C?",
      "options": [
        "VIT",
        "VIT3",
        "3VIT",
        "Error"
      ],
      "answer": 1,
      "explanation": "Inner printf prints VIT and returns 3. Outer prints 3."
    },
    {
      "id": 87,
      "section": "Computer Science",
      "question": "What does \"malloc\" return on failure in C?",
      "options": [
        "0",
        "NULL",
        "-1",
        "Garbage value"
      ],
      "answer": 1,
      "explanation": "malloc returns a NULL pointer if it cannot allocate memory."
    },
    {
      "id": 88,
      "section": "Computer Science",
      "question": "Which data structure is used to implement BFS?",
      "options": [
        "Stack",
        "Queue",
        "Priority Queue",
        "Linked List"
      ],
      "answer": 1,
      "explanation": "Breadth-First Search requires a Queue."
    },
    {
      "id": 89,
      "section": "Computer Science",
      "question": "Which scheduling algorithm suffers from the convoy effect?",
      "options": [
        "Round Robin",
        "SJF",
        "FCFS",
        "Priority"
      ],
      "answer": 2,
      "explanation": "First-Come-First-Serve suffers from convoy effect when a long process blocks shorter ones."
    },
    {
      "id": 90,
      "section": "Computer Science",
      "question": "What is a dangling pointer?",
      "options": [
        "A pointer pointing to null",
        "A pointer pointing to a freed memory location",
        "A pointer that is uninitialized",
        "A pointer to a function"
      ],
      "answer": 1,
      "explanation": "Dangling pointers reference deallocated memory."
    },
    {
      "id": 91,
      "section": "Computer Science",
      "question": "In a B-tree of order m, what is the minimum number of children for an internal node (except root)?",
      "options": [
        "m",
        "m/2",
        "ceil(m/2)",
        "floor(m/2)"
      ],
      "answer": 2,
      "explanation": "An internal node must have at least ceil(m/2) children."
    },
    {
      "id": 92,
      "section": "Computer Science",
      "question": "Which page replacement algorithm suffers from Beladys Anomaly?",
      "options": [
        "LRU",
        "FIFO",
        "Optimal",
        "LFU"
      ],
      "answer": 1,
      "explanation": "FIFO can have more page faults when allocated more frames (Beladys Anomaly)."
    },
    {
      "id": 93,
      "section": "Computer Science",
      "question": "What is the time complexity of building a heap from an unordered array?",
      "options": [
        "O(n log n)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": 1,
      "explanation": "Using the bottom-up approach, building a max-heap takes O(n) time."
    },
    {
      "id": 94,
      "section": "Computer Science",
      "question": "Which of the following problems is undecidable?",
      "options": [
        "Halting Problem",
        "Hamiltonian Path Problem",
        "Boolean Satisfiability Problem",
        "Travelling Salesman Problem"
      ],
      "answer": 0,
      "explanation": "The Halting problem has no general algorithmic solution."
    },
    {
      "id": 95,
      "section": "Computer Science",
      "question": "In C, what is the difference between \"char *p\" and \"char p[]\" as function arguments?",
      "options": [
        "No difference",
        "Array decays to a pointer",
        "Pointer is passed by value, array by reference",
        "Compiler error"
      ],
      "answer": 0,
      "explanation": "As function parameters, they are exactly equivalent; an array decays to a pointer."
    },
    {
      "id": 96,
      "section": "Computer Science",
      "question": "What is the maximum throughput of the Slotted ALOHA protocol?",
      "options": [
        "18.4%",
        "36.8%",
        "50%",
        "100%"
      ],
      "answer": 1,
      "explanation": "Slotted ALOHA has a max efficiency of 1/e, which is approx 36.8%."
    },
    {
      "id": 97,
      "section": "Computer Science",
      "question": "If a subnet mask is 255.255.255.224, how many usable hosts are there per subnet?",
      "options": [
        "30",
        "32",
        "62",
        "14"
      ],
      "answer": 0,
      "explanation": "224 leaves 5 bits for hosts. 2^5 - 2 = 30 usable hosts."
    },
    {
      "id": 98,
      "section": "Computer Science",
      "question": "Which concurrency control protocol ensures conflict serializability but may cause cascading rollbacks?",
      "options": [
        "Two-Phase Locking (2PL)",
        "Timestamp Ordering",
        "Strict 2PL",
        "Validation Based Protocol"
      ],
      "answer": 0,
      "explanation": "Basic 2PL allows uncommitted data to be read, causing cascading rollbacks."
    },
    {
      "id": 99,
      "section": "Computer Science",
      "question": "What is the complexity of Dijkstras algorithm using a Min-Priority Queue (Fibonacci Heap)?",
      "options": [
        "O(V + E)",
        "O(V log V + E)",
        "O(E log V)",
        "O(V^2)"
      ],
      "answer": 1,
      "explanation": "Fibonacci heaps decrease key operation takes O(1) amortized, leading to O(V log V + E)."
    },
    {
      "id": 100,
      "section": "Computer Science",
      "question": "In an OS context, what does \"Petersons Solution\" solve?",
      "options": [
        "Deadlock avoidance",
        "Critical Section Problem for 2 processes",
        "Memory fragmentation",
        "Cache coherence"
      ],
      "answer": 1,
      "explanation": "Petersons algorithm is a concurrent programming algorithm for mutual exclusion between two processes."
    }
  ];