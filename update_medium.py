import json
import re

files = [
    "/Users/shubhamswaraj/Desktop/VITMCA/questions.js",
    "/Users/shubhamswaraj/Desktop/VITTEST/questions.js"
]

medium_qs = [
    ("Which is not a database model?", ["Relational", "Network", "Object-Oriented", "Hexagonal"], 3, "Hexagonal is a software architecture, not a traditional DB model."),
    ("What is the size of an int in C?", ["Compiler dependent", "2 bytes", "4 bytes", "8 bytes"], 0, "The size of int in C depends on the compiler and architecture."),
    ("Which of the following is DML?", ["CREATE", "ALTER", "DROP", "UPDATE"], 3, "UPDATE is a Data Manipulation Language command."),
    ("In C, what is the array index starting value?", ["0", "1", "-1", "None"], 0, "Arrays in C are zero-indexed."),
    ("Which layer is responsible for routing?", ["Network", "Data Link", "Physical", "Transport"], 0, "The Network layer handles logical addressing and routing."),
    ("HTTP operates at which OSI layer?", ["Application", "Transport", "Network", "Data Link"], 0, "HTTP is an application layer protocol."),
    ("Which tree traversal visits root first?", ["Preorder", "Inorder", "Postorder", "Level order"], 0, "Preorder visits: Root, Left, Right."),
    ("Which data structure uses FIFO?", ["Stack", "Queue", "Tree", "Graph"], 1, "Queue operates on First-In-First-Out basis."),
    ("Which SQL keyword is used to sort the result?", ["ORDER BY", "SORT BY", "GROUP BY", "ALIGN BY"], 0, "ORDER BY sorts the result set."),
    ("What is a primary key?", ["Unique identifier", "Can be null", "Allows duplicates", "Used for sorting"], 0, "A primary key uniquely identifies a row in a table."),
    ("Which scheduling algorithm is non-preemptive?", ["FCFS", "Round Robin", "SRTF", "Preemptive Priority"], 0, "First-Come-First-Serve cannot be preempted once a process starts."),
    ("What does a pointer variable store?", ["Value", "Address", "String", "Float"], 1, "Pointers store memory addresses."),
    ("Which command is used to remove a directory in Linux?", ["rmdir", "remove", "del", "mkdir"], 0, "rmdir removes empty directories."),
    ("Which of the following is a non-linear data structure?", ["Array", "Stack", "Queue", "Graph"], 3, "Graphs and trees are non-linear data structures."),
    ("What is the default port for HTTP?", ["80", "443", "21", "25"], 0, "Port 80 is reserved for HTTP traffic."),
    ("Which memory is the fastest?", ["Cache", "RAM", "Hard Disk", "Register"], 3, "CPU registers are the fastest accessible memory."),
    ("What is deadlock?", ["Processes waiting for each other", "Process ends", "OS crashes", "RAM full"], 0, "Deadlock is a circular wait condition between processes."),
    ("Which function is used to allocate memory dynamically in C?", ["malloc()", "alloc()", "create()", "new()"], 0, "malloc() allocates dynamic memory in C."),
    ("What is an IP address?", ["Physical address", "Logical address", "MAC address", "Hardware address"], 1, "An IP address is a logical address assigned to devices in a network."),
    ("Which SQL clause filters groups?", ["HAVING", "WHERE", "GROUP BY", "FILTER"], 0, "HAVING filters groups created by GROUP BY."),
    ("What is the output of 5 % 2 in C?", ["2.5", "2", "1", "0"], 2, "The modulus operator returns the remainder, which is 1."),
    ("Which gate is known as the universal gate?", ["AND", "OR", "NAND", "NOT"], 2, "NAND and NOR are universal gates."),
    ("What is an operating system?", ["Hardware", "Application software", "System software", "Firmware"], 2, "OS is a system software that manages resources."),
    ("Which is not an OOP concept?", ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"], 3, "Compilation is a language translation step, not an OOP concept."),
    ("What is a foreign key?", ["A key linking to another table", "A unique key", "A null key", "A primary key"], 0, "Foreign keys create relationships between tables."),
    ("Which symbol is used for a single-line comment in C?", ["//", "/*", "#", "--"], 0, "// is used for single-line comments in C."),
    ("In a binary tree, what is a node with no children called?", ["Root", "Leaf", "Branch", "Parent"], 1, "Nodes without children are called leaf nodes."),
    ("Which of these is a volatile memory?", ["ROM", "PROM", "RAM", "EPROM"], 2, "RAM loses its data when power is turned off."),
    ("What is the use of the 'ping' command?", ["Test connectivity", "Download files", "Edit text", "Format disk"], 0, "Ping tests network reachability to a host."),
    ("Which data structure is used for recursion?", ["Queue", "Stack", "Array", "Linked List"], 1, "The call stack handles recursive function calls."),
    ("What is an attribute in DBMS?", ["A table", "A row", "A column", "A database"], 2, "An attribute corresponds to a column in a table."),
    ("What is the time complexity of searching in a Hash Table (average case)?", ["O(1)", "O(n)", "O(log n)", "O(n^2)"], 0, "Hash tables provide constant time average access."),
    ("Which protocol is used for secure communication over the web?", ["HTTP", "HTTPS", "FTP", "SMTP"], 1, "HTTPS encrypts the communication."),
    ("What does the 'ls' command do in Linux?", ["List files", "Delete files", "Copy files", "Move files"], 0, "ls lists directory contents."),
    ("Which topology requires a central hub?", ["Ring", "Bus", "Star", "Mesh"], 2, "Star topology connects all nodes to a central hub/switch."),
    ("What is the extension of a compiled Java class file?", [".java", ".class", ".obj", ".exe"], 1, "Java compiles source code to .class bytecode files."),
    ("In C, what is the format specifier for a floating-point number?", ["%d", "%c", "%f", "%s"], 2, "%f is used for floats."),
    ("Which of the following is a valid variable name in C?", ["1var", "_var", "var-1", "%var"], 1, "Variable names must start with a letter or underscore."),
    ("What is the maximum number of children in a Binary Tree node?", ["1", "2", "3", "Infinite"], 1, "A binary tree node has at most two children."),
    ("Which command commits a transaction in SQL?", ["SAVE", "COMMIT", "END", "DONE"], 1, "COMMIT makes database changes permanent."),
    ("What is the main purpose of an index in a database?", ["Save space", "Speed up data retrieval", "Encrypt data", "Normalize data"], 1, "Indexes accelerate SELECT queries."),
    ("Which sorting algorithm compares adjacent elements and swaps them?", ["Merge Sort", "Quick Sort", "Bubble Sort", "Selection Sort"], 2, "Bubble sort repeatedly swaps adjacent out-of-order elements."),
    ("What is a thread?", ["A heavy process", "A lightweight process", "A hardware component", "A network cable"], 1, "A thread is the smallest unit of execution within a process."),
    ("Which layer of OSI model uses MAC addresses?", ["Network", "Data Link", "Physical", "Transport"], 1, "Data Link layer uses physical MAC addresses."),
    ("What is the base of the Hexadecimal number system?", ["8", "10", "16", "2"], 2, "Hexadecimal uses base 16."),
    ("Which function is used to copy a string in C?", ["strcpy()", "copy()", "strdup()", "stringcopy()"], 0, "strcpy() copies a string from source to destination."),
    ("What is the size of an IPv4 address?", ["16 bits", "32 bits", "64 bits", "128 bits"], 1, "IPv4 addresses are 32-bit numbers."),
    ("What is context switching?", ["Switching power", "Saving state of old process and loading new one", "Changing user", "Switching network paths"], 1, "The OS saves the current process context and loads another."),
    ("Which constraint ensures all values in a column are unique?", ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"], 1, "UNIQUE prevents duplicate values in a column."),
    ("What is a loop that never ends called?", ["Infinite loop", "Break loop", "Terminated loop", "Dead loop"], 0, "An infinite loop lacks a terminating condition."),
    ("Which of the following is a compiled language?", ["Python", "JavaScript", "C", "HTML"], 2, "C is compiled directly to machine code."),
    ("What is SQL primarily used for?", ["Web design", "Database querying", "Hardware configuration", "OS management"], 1, "SQL manages and queries relational databases."),
    ("Which logical operator represents 'AND' in C?", ["||", "&&", "!", "&"], 1, "&& is the logical AND operator."),
    ("What is a byte?", ["4 bits", "8 bits", "16 bits", "32 bits"], 1, "One byte equals 8 bits."),
    ("Which command undoes an uncommitted transaction in SQL?", ["UNDO", "REVERT", "ROLLBACK", "BACK"], 2, "ROLLBACK reverts the uncommitted database changes."),
    ("What does a compiler do?", ["Executes code line by line", "Converts high-level code to machine code", "Manages memory", "Formats disk"], 1, "It translates entire source code files into executable object code."),
    ("Which tree traversal visits left, root, right?", ["Preorder", "Inorder", "Postorder", "Level order"], 1, "Inorder traversal gives sorted order in a BST."),
    ("What is the best case time complexity of Insertion Sort?", ["O(1)", "O(log n)", "O(n)", "O(n^2)"], 2, "Insertion sort is O(n) when the array is already sorted."),
    ("Which keyword is used to declare a constant in C?", ["const", "constant", "final", "var"], 0, "const is used to declare read-only variables in C."),
    ("Which protocol is used to receive email?", ["SMTP", "POP3", "FTP", "DHCP"], 1, "POP3 and IMAP are used to receive emails.")
]

for file_path in files:
    try:
        with open(file_path, "r") as f:
            content = f.read()
        
        # Extract JSON
        json_str = content.replace("const questions = ", "").rstrip(";\n ")
        q_list = json.loads(json_str)
        
        # Keep 1-20 (index 0 to 19) and 81-100 (index 80 to 99)
        first_20 = q_list[:20]
        last_20 = q_list[80:100]
        
        # Generate 60 medium questions (ID 21 to 80)
        middle_60 = []
        for i, (q, o, a, exp) in enumerate(medium_qs):
            middle_60.append({
                "id": 21 + i,
                "section": "Computer Science",
                "question": q,
                "options": o,
                "answer": a,
                "explanation": exp
            })
            
        final_qs = first_20 + middle_60 + last_20
        
        # Reassign IDs sequentially just to be safe
        for i, item in enumerate(final_qs):
            item["id"] = i + 1
            
        new_content = "const questions = " + json.dumps(final_qs, indent=2) + ";"
        
        with open(file_path, "w") as f:
            f.write(new_content)
        print(f"Updated {file_path}")
        
    except Exception as e:
        print(f"Failed to process {file_path}: {e}")
