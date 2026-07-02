// بنك أسئلة مادة أساسيات تكنولوجيا المعلومات ونظم التشغيل الكامل (97 سؤال) - نسخة نظيفة بدون رموز جانبية
const itData = {
    title: "Fundamentals of IT & OS (أساسيات تكنولوجيا المعلومات ونظم التشغيل)",
    questions: [
        // ==========================================
        // أولاً: أسئلة المذكرة الأولى (إعداد د. مليكة علاء) - 55 سؤالاً حرفياً
        // ==========================================
        {
            question: "The physical components of a computer can be seen and touched includes software Component",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكن مشاهدة المكونات المادية للحاسب الالى ولمسها بما في ذلك المكونات البرمجية"
        },
        {
            question: "Metal part that contains most of computer parts is Power or System unit.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) الجزء المعدني الذي يحتوي علي معظم أجزاء الحاسب هو وحدة الطاقة أو النظام"
        },
        {
            question: "The physical components of a computer can be seen and touched, such as systems and applications software",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكن مشاهدة المكونات المادية للحاسب الالى مثل انظمة التشغيل والبرمجيات التطبيقية"
        },
        {
            question: "A computer can operate without an operating system but cannot operate without application software",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكن للحاسب الالى ان يعمل بدون نظام التشغيل ولكن لا يمكنه العمل بدون البرامج التطبيقية"
        },
        {
            question: "The memory unit is considered the brain of a computer",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) وحدة الذاكرة هي بمثابة الدماغ بالنسبة للحاسب الالى"
        },
        {
            question: "The arithmetic and logic unit are in the central processing unit",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) توجد وحدة الحساب والمنطق في وحدة المعالجة المركزية"
        },
        {
            question: "Function keys used to perform certain tasks",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يتم استخدام المفاتيح الوظيفية (مفاتيح الدالة) لتنفيذ مهام معينة"
        },
        {
            question: "All functions keys do same functions in all programs",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تستخدم مفاتيح الدالة بلوحة المفاتيح لنفس الوظائف في كل البرامج"
        },
        {
            question: "Permanent memory computer devices are an electronic chip that has the ability to store information temporarily",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) الذاكرة الدائمة فى اجهزة الكمبيوتر عبارة عن شريحة الكترونية تعمل على تخزين المعلومات بشكل مؤقت"
        },
        {
            question: "The larger the size of the RAM, the faster the computer",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) كلما ازداد حجم ذاكرة الرام, كلما كان الحاسب أسرع"
        },
        {
            question: "The hard disk is the main secondary storage device in a computer",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) القرص الصلب هو جهاز التخزين الثانوى الرئيسي في الحاسب الالى"
        },
        {
            question: "Analog computers is a combination of an analog and digital computers",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) اجهزة الحاسب التناظرية عبارة عن مزيج من اجهزة الحاسوب التناظرية والرقمية"
        },
        {
            question: "The user interface that relies on writing commands to computers is referred to as GUI",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) واجهة المستخدم لكتابة الاوامر للحاسبات الآلية هي GUI"
        },
        {
            question: "Windows system enjoys a high degree of freedom to modify, operate distribute and develop its parts",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) نظام تشغيل ويندوز يتمتع بدرجة عالية من الحرية في تعديل وتشغيل وتوزيع وتطوير اجزاءه"
        },
        {
            question: "Windows is an open-source Linux-based operating system developed by Google and the Open Mobile Alliance \" OHA \"",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) ويندوز هو احد انظمة التشغيل مفتوحة المصدر التي تعتمد على نظام لينكس وطورته شركة جوجل والتحالف المفتوح للهواتف النقالة"
        },
        {
            question: "One of the most important features of the Windows 10 operating system is the presence of the voice assistant Cortana, the Microsoft Edge browser and the graphical Start menu",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) من اهم مميزات نظام تشغيل ويندوز ۱۰ وجود المساعد الصوتي كورتانا ومتصفح ميكروسوفت ايدج وقائمة ابدأ الرسومية"
        },
        {
            question: "Windows 11 include ability to run Android applications and games directly",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تشمل مميزات ويندوز ۱۱ امكانية تشغيل تطبيقات والعاب اندرويد مباشرة"
        },
        {
            question: "One Drive offers 1TB of free storage space per user",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمنح اون درايف المستخدمين 1 تيرابايت من مساحة التخزين المجانية"
        },
        {
            question: "A password can be created using a picture",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يمكن انشاء كلمة مرور باستخدام صورة"
        },
        {
            question: "Analog computer uses binary numbers",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يستخدم الحاسب الالى التناظرى الارقام الثنائية"
        },
        {
            question: "Analogue computers are designed to work on digital data that is presented in the form of binary numbers",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) صممت أجهزة الكمبيوتر التناظرية للعمل علي البيانات الرقمية التي يتم تقديمها في شكل ارقام ثنائية"
        },
        {
            question: "Read-only memory ( ROM ) stores information that can be modified by the user",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تخزن ذاكرة القراءة فقط ( ROM ) المعلومات التي يمكن للمستخدم تعديلها"
        },
        {
            question: "Linux is a closed-source operating system",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) لينكس هو نظام تشغيل مغلق المصدر"
        },
        {
            question: "Android is an open-source operating system developed by Apple",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) أندرويد هو نظام تشغيل مفتوح المصدر تم تطويره بواسطة شركة أبل"
        },
        {
            question: "MAC OS was the first operating system to use a graphical user interface ( GUI )",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) MAC OS هو أول نظام تشغيل يستخدم واجهة مستخدم رسومية (GUI)"
        },
        {
            question: "A computer is an electronic device that accepts inputs, processes them, and produces outputs",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) الحاسب الالى هو جهاز إلكتروني يستقبل المدخلات ويعالجها وينتج مخرجات"
        },
        {
            question: "The scanner is used to input audio into the computer",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يتم استخدام الماسح الضوئي لإدخال الصوت إلى الكمبيوتر"
        },
        {
            question: "USB 4.0 has a data transfer rate of up to 40 GB",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يتمتع 4.0 USB بمعدل نقل بيانات يصل إلى ٤٠ جيجابايت"
        },
        {
            question: "Secondary storage devices store information even after the computer is turned off",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تخزن أجهزة التخزين الثانوية المعلومات حتى بعد إيقاف تشغيل الكمبيوتر"
        },
        {
            question: "Hybrid computers are a combination of analog and digital computers",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) أجهزة الحاسب الهجينة هي مزيج من أجهزة الكمبيوتر التناظرية والرقمية"
        },
        {
            question: "Simulation programs can bypass elements of time, place, and danger",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يمكن لبرامج المحاكاة تجاوز عناصر الزمان والمكان والخطر"
        },
        {
            question: "Computer software is divided into .............",
            options: ["One type", "Two types", "Three types", "Four types"],
            correct: 1,
            hint: "تنقسم برمجيات الحاسب الالى الى ..... Two types"
        },
        {
            question: "......... A metal box that contains almost all of the basic computer components",
            options: ["The system unit", "The power supply", "The CPU", "The Monitor"],
            correct: 0,
            hint: "صندوق معدني يحتوى جميع مكونات الحاسب الاساسية تقريبا: The system unit"
        },
        {
            question: "the process by which you can achieve a specific idea or solve a problem by dividing the idea or problem into successive steps .............",
            options: ["Designing", "Programming", "Analyzing", "Testing"],
            correct: 1,
            hint: "عملية تستطيع بواسطتها انجاز فكرة معينة او حل مشكلة ما عن طريق تقسيم الفكرة أو المشكلة الى خطوات متتالية: Programming"
        },
        {
            question: "...... any program whose tasks all or one of which cause some kind of damage to system",
            options: ["Firmware", "Shareware", "Malware", "Freeware"],
            correct: 2,
            hint: "اى برنامج يكون كل مهامه أو أحدها عمل ضرر ما في النظام: Malware"
        },
        {
            question: "The name of the file or folder is changed using a key .............",
            options: ["F1", "F2", "F5", "F10"],
            correct: 1,
            hint: "يتم تغيير اسم الملف أو المجلد عن طريق مفتاح: F2"
        },
        {
            question: "To Copy files and folder .............",
            options: ["CTRL + INSERT", "CTRL + DELETE", "SHIFT + INSERT", "ALT + INSERT"],
            correct: 0,
            hint: "لنسخ الملفات والمجلدات: CTRL + INSERT"
        },
        {
            question: "Who is The founder of Microsoft Corporation ?",
            options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
            correct: 1,
            hint: "من هو مؤسس شركة مايكروسوفت ؟ Bill Gates"
        },
        {
            question: "All these software applications are provided by Microsoft except .............",
            options: ["Word", "Excel", "Google Drive", "PowerPoint"],
            correct: 2,
            hint: "كل هذه التطبيقات البرمجية مقدمة بواسطة ميكروسوفت ما عدا: Google Drive"
        },
        {
            question: "............ the application used for planning events",
            options: ["Calendar", "Stopwatch", "Calculator", "Notes"],
            correct: 0,
            hint: "التطبيق المستخدم في التخطيط للاحداث: Calendar"
        },
        {
            question: "To count the duration of performing a task, use .............",
            options: ["Clock", "Stopwatch", "Alarm", "Timer"],
            correct: 1,
            hint: "لحساب مدة تنفيذ المهمة. استخدم: Stopwatch"
        },
        {
            question: "The ......... system is an example of a multi-tasking program",
            options: ["MS-DOS", "Mac OS", "Windows 1.0", "BIOS"],
            correct: 1,
            hint: "نظام تشغيل هو مثال لنظام متعدد المهام: Mac OS"
        },
        {
            question: "......... is a volatile memory",
            options: ["ROM", "RAM", "Flash Memory", "Hard Disk"],
            correct: 1,
            hint: "هي ذاكرة متطايرة: RAM"
        },
        {
            question: "......... types of hard disks store data on flash memory similar to working principle of flash memory",
            options: ["HDD", "SSD", "FDD", "CD-ROM"],
            correct: 1,
            hint: "الاقراص الصلبة من نوع تقوم بتخزين البيانات على ذاكرة فلاش شبيهة بمبدأ عمل ذاكرة الفلاش المحمولة: SSD"
        },
        {
            question: "....... Hard disk covered with a magnetic layer",
            options: ["SSD", "HDD", "USB", "RAM"],
            correct: 1,
            hint: "قرص معدنى مغطاة بطبقة مغناطيسية: HDD"
        },
        {
            question: "............ an electronic memory that contains information that is useful in the initial operation of the device",
            options: ["RAM", "ROM", "Cache", "Virtual Memory"],
            correct: 1,
            hint: "ذاكرة الكترونية تحتوى معلومات مفيدة في عملية التشغيل الأولية للجهاز: ROM"
        },
        {
            question: "Microsoft released its first version of the Windows operating system in .............",
            options: ["1981", "1985", "1990", "1995"],
            correct: 1,
            hint: "اطلقت شركة مايكروسوفت أول إصداراتها من نظام تشغيل ويندوز في: 1985"
        },
        {
            question: "Who is the founder of Google corporation ?",
            options: ["Bill Gates", "Larry Page", "Mark Zuckerberg", "Steve Jobs"],
            correct: 1,
            hint: "من هو مؤسس شركة جوجل ؟ Larry Page"
        },
        {
            question: "All notifications are collected in ............",
            options: ["Taskbar", "Action Center", "Control Panel", "Start Menu"],
            correct: 1,
            hint: "يتم تجميع كافة الاشعارات في: Action Center"
        },
        {
            question: "loses all its contents when turn off the computer or cut off the power",
            options: ["ROM", "RAM", "Hard Disk", "SSD"],
            correct: 1,
            hint: "تفقد جميع محتوياتها عند إيقاف تشغيل الحاسب الالى او انقطاع الطاقة: RAM"
        },
        {
            question: "Type of computer that uses binary number .............",
            options: ["Analog computer", "Digital computer", "Hybrid computer", "Super computer"],
            correct: 1,
            hint: "نوع الحاسب الذي يستخدم النظام الثنائي: Digital computer"
        },
        {
            question: "Which part of the CPU performs arithmetic and logical operations ?",
            options: ["CU", "ALU", "Registers", "Cache"],
            correct: 1,
            hint: "أي جزء من وحدة المعالجة المركزية يقوم بالعمليات الحسابية والمنطقية ؟ ALU"
        },
        {
            question: "What is the unit used to measure processor speed?",
            options: ["Megabyte (MB)", "Megahertz (MHz)", "Gigabyte (GB)", "Bits per second"],
            correct: 1,
            hint: "ما هي الوحدة المستخدمة لقياس سرعة المعالج ؟ Megahertz (MHz)"
        },
        {
            question: "Viruses, worms, and Trojan horses are examples of .............",
            options: ["common software", "common malware", "operating systems", "hardware components"],
            correct: 1,
            hint: "الفيروسات والديدان وأحصنة طروادة هي أمثلة على: common malware"
        },
        {
            question: "The system unit of a computer contains which of the following components .............",
            options: ["Monitor", "Power supply", "Keyboard", "Mouse"],
            correct: 1,
            hint: "تحتوي وحدة النظام في الكمبيوتر على أى من المكونات التالية: Power supply"
        },

        // ==========================================
        // ثانياً: أسئلة المذكرة الثانية (إعداد د. أحمد عمارة) - 42 سؤالاً حرفياً مكرراً ومتطابقاً
        // ==========================================
        {
            question: "The user interface that relies on writing commands to computers is referred to as GUI.",
            options: ["True", "False"],
            correct: 1,
            hint: "تُعرف واجهة المستخدم التي تعتمد على كتابة الأوامر لأجهزة الكمبيوتر باسم واجهة المستخدم الرسومية GUI (خطأ والصحيح CLI)"
        },
        {
            question: "The user interface that relies on writing commands to computers is referred to as CLI.",
            options: ["True", "False"],
            correct: 0,
            hint: "واجهة المستخدم التي تعتمد على كتابة الأوامر إلى أجهزة الكمبيوتر تسمى CLI. (صواب)"
        },
        {
            question: "User interface to give command for computer is GUI. (Graphical User Interface)",
            options: ["True", "False"],
            correct: 1,
            hint: "واجهة المستخدم لإعطاء الأوامر للكمبيوتر هي GUI. (المقصود الواجهة الرسومية خطأ لأنها للأوامر النصية)"
        },
        {
            question: "Windows 11 include ability to run Android applications and games directly",
            options: ["True", "False"],
            correct: 0,
            hint: "يتضمن ويندوز 11 القدرة على تشغيل تطبيقات وألعاب الأندرويد مباشرة. (صواب)"
        },
        {
            question: "Who is the founder of Microsoft Corporation?",
            options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
            correct: 1,
            hint: "من هو مؤسس شركة ميكروسوفت؟ Bill Gates"
        },
        {
            question: "The hard disk is the main secondary storage device in a computer system.",
            options: ["True", "False"],
            correct: 0,
            hint: "القرص الصلب هو جهاز التخزين الثانوي الرئيسي في نظام الكمبيوتر. (صواب)"
        },
        {
            question: "A computer can operate without an operating system but cannot operate without application software.",
            options: ["True", "False"],
            correct: 1,
            hint: "يمكن للكمبيوتر أن يعمل بدون نظام تشغيل ولكن لا يمكنه العمل بدون برامج تطبيقية. (خطأ والعكس صحيح)"
        },
        {
            question: "One Drive offers 1TB of free storage space per user.",
            options: ["True", "False"],
            correct: 1,
            hint: "يوفر ون درايف مساحة تخزين مجانية تبلغ 1 تيرابايت لكل مستخدم. (خطأ والصحيح 5 GB)"
        },
        {
            question: "To count the duration of performing a task, use",
            options: ["Clock", "Timer", "Calendar", "Watch"],
            correct: 1,
            hint: "لحساب مدة تنفيذ المهمة، استخدم: Timer"
        },
        {
            question: "An electronic memory that contains information that is useful in the initial operation of the device.",
            options: ["RAM", "ROM", "Cache", "Flash"],
            correct: 1,
            hint: "ذاكرة إلكترونية تحتوي على معلومات مفيدة في التشغيل الأولي للجهاز: ROM"
        },
        {
            question: "Permanent Memory Computer devices are an electronic chip that has the ability to store information temporarily.",
            options: ["True", "False"],
            correct: 1,
            hint: "الذاكرة الدائمة في أجهزة الحاسب الآلي عبارة عن شريحة إلكترونية لديها القدرة على تخزين المعلومات بشكل مؤقت. (خطأ لأنها الذاكرة المؤقتة)"
        },
        {
            question: "The ......... system is an example of a multitasking program.",
            options: ["MS-DOS", "Mac OS", "BIOS", "Windows 1.0"],
            correct: 1,
            hint: "نظام ......... هو مثال لبرنامج متعدد المهام: Mac OS"
        },
        {
            question: "The larger the size of the RAM, the faster the computer.",
            options: ["True", "False"],
            correct: 0,
            hint: "كلما زاد حجم ذاكرة الوصول العشوائي (RAM)، كلما كان الكمبيوتر أسرع. (صواب)"
        },
        {
            question: "Computer software is divided into ....",
            options: ["One type", "Two types", "Three types", "Four types"],
            correct: 1,
            hint: "تنقسم برامج الكمبيوتر إلى: Two types"
        },
        {
            question: "Windows system enjoys a high degree of freedom to modify, operate distribute and develop its parts.",
            options: ["True", "False"],
            correct: 1,
            hint: "يتمتع نظام ويندوز بدرجة عالية من الحرية في التعديل والتشغيل والتوزيع والتطوير على أجزائه. (خطأ والصحيح Linux)"
        },
        {
            question: "Analog computers are a combination of an analog and digital computers.",
            options: ["True", "False"],
            correct: 1,
            hint: "أجهزة الكمبيوتر التناظرية عبارة عن مزيج من أجهزة الكمبيوتر التناظرية والرقمية. (خطأ والصحيح الهجينة)"
        },
        {
            question: "All these software applications are provided by Microsoft except....",
            options: ["Word", "Excel", "Google Drive", "PowerPoint"],
            correct: 2,
            hint: "يتم توفير كافة هذه التطبيقات البرمجية بواسطة مايكروسوفت باستثناء: Google Drive"
        },
        {
            question: "The memory unit is considered the brain of a computer.",
            options: ["True", "False"],
            correct: 1,
            hint: "تعتبر وحدة الذاكرة عقل الكمبيوتر. (خطأ والصحيح وحدة التحكم والمعالجة CPU)"
        },
        {
            question: "The arithmetic and logic unit are in the central processing unit.",
            options: ["True", "False"],
            correct: 0,
            hint: "توجد وحدة الحساب والمنطق في وحدة المعالجة المركزية. (صواب)"
        },
        {
            question: "The application used for planning events ..",
            options: ["Calendar", "Stopwatch", "Notes", "Calculator"],
            correct: 0,
            hint: "التطبيق المستخدم للتخطيط للأحداث: Calendar"
        },
        {
            question: "... Types of hard disks store data on flash memory similar to working principle of flash memory.",
            options: ["HDD", "SSD", "RAM", "ROM"],
            correct: 1,
            hint: "الأقراص الصلبة من نوع ... تقوم بتخزين البيانات على ذاكرة وميضية على غرار مبدأ عمل ذاكرة الفلاش: SSD"
        },
        {
            question: "A metal box that contains almost all of the basic computer components ...",
            options: ["The system unit", "The CPU", "The Monitor", "The RAM"],
            correct: 0,
            hint: "صندوق معدني يحتوي على جميع مكونات الكمبيوتر الأساسية تقريباً: The system unit"
        },
        {
            question: "...........is a volatile memory.",
            options: ["ROM", "RAM", "SSD", "HDD"],
            correct: 1,
            hint: "...... ذاكرة متغيرة: RAM"
        },
        {
            question: "The process by which you can achieve a specific idea or solve a problem by dividing the idea or problem into successive steps ...",
            options: ["Designing", "Programming", "Analyzing", "Testing"],
            correct: 1,
            hint: "العملية التي يمكنك من خلالها تحقيق فكرة معينة أو حل مشكلة ما، وذلك من خلال تقسيم الفكرة أو المشكلة إلى خطوات متتالية: Programming"
        },
        {
            question: "One of the most important features of the Windows 10 operating system is the presence of the voice assistant Cortana, the Microsoft Edge browser and the presence of graphical Start menu.",
            options: ["True", "False"],
            correct: 0,
            hint: "من أهم مميزات نظام التشغيل ويندوز 10 وجود المساعد الصوتي كورتانا ومتصفح ميكروسوفت ايدج وقائمة ابدأ الرسومية. (صواب)"
        },
        {
            question: "Microsoft released its first version of the Windows operating system in ...",
            options: ["1981", "1985", "1990", "1995"],
            correct: 1,
            hint: "قدمت شركة ميكروسوفت أول إصداراتها من نظام التشغيل ويندوز في: 1985"
        },
        {
            question: "A password can be created using a picture",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن إنشاء كلمة مرور بواسطة صورة. (صواب)"
        },
        {
            question: "Windows is an open-source Linux-based operating system developed by Google and the Open Mobile Alliance (OHA).",
            options: ["True", "False"],
            correct: 1,
            hint: "الويندوز هو نظام تشغيل مفتوح المصدر يستند إلى نظام تشغيل لينكس تم تطويره بواسطة شركة جوجل والتحالف المفتوح للهواتف النقالة. (خطأ والصحيح Android)"
        },
        {
            question: "Any program whose tasks all or one of which cause some kind of damage to system",
            options: ["Firmware", "Malware", "Freeware", "Shareware"],
            correct: 1,
            hint: "أي برنامج تؤدي مهامه كلها أو بعضها إحداث نوع من الضرر للنظام: Malware"
        },
        {
            question: "Hard disk covered with a magnetic layer",
            options: ["SSD", "HDD", "Flash", "RAM"],
            correct: 1,
            hint: "قرص صلب مغطى بطبقة مغناطيسية: HDD"
        },
        {
            question: "The name of the file or folder is changed using a key ...",
            options: ["F1", "F2", "F5", "F12"],
            correct: 1,
            hint: "يتم تغيير اسم الملف أو المجلد عن طريق مفتاح: F2"
        },
        {
            question: "All functions keys do same functions in all programs.",
            options: ["True", "False"],
            correct: 1,
            hint: "تقوم جميع مفاتيح الوظائف بنفس الوظائف في جميع البرامج. (خطأ لأنها تختلف من برنامج لآخر)"
        },
        {
            question: "The physical components of a computer can be seen and touched, unlike the software components",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن رؤية المكونات المادية للكمبيوتر ولمسها، على عكس المكونات البرمجية. (صواب)"
        },
        {
            question: "The physical components of a computer are the components that can be seen and touched, and this includes the system unit and software.",
            options: ["True", "False"],
            correct: 1,
            hint: "المكونات المادية لجهاز الكمبيوتر هي المكونات التي يمكن رؤيتها ولمسها، وهذا يشمل وحدة النظام والبرمجيات. (خطأ لأن البرمجيات لا يمكن لمسها)"
        },
        {
            question: "Once the computer is turned off or the power is cut off, the RAM loses all its contents.",
            options: ["True", "False"],
            correct: 0,
            hint: "بمجرد إيقاف تشغيل الكمبيوتر أو قطع الطاقة، تفقد RAM جميع محتوياتها. (صواب)"
        },
        {
            question: "Once the computer is turned off or the power is cut off, the ROM loses all its contents.",
            options: ["True", "False"],
            correct: 1,
            hint: "بمجرد إيقاف تشغيل الكمبيوتر أو قطع الطاقة، تفقد ROM جميع محتوياتها. (خطأ والصحيح RAM)"
        },
        {
            question: "Analog computer uses binary numbers.",
            options: ["True", "False"],
            correct: 1,
            hint: "يستخدم الكمبيوتر التناظري الأرقام الثنائية. (خطأ والصحيح الرقمي)"
        },
        {
            question: "Type of computer that uses binary number ...",
            options: ["Analog computer", "Digital computer", "Hybrid computer", "Super computer"],
            correct: 1,
            hint: "نوع الكمبيوتر الذي يستخدم الرقم الثنائي: Digital computer"
        },
        {
            question: "Analogue computers are designed to work on digital data that is presented in the form of binary numbers.",
            options: ["True", "False"],
            correct: 1,
            hint: "صممت أجهزة الكمبيوتر التناظرية للعمل على البيانات الرقمية التي يتم تقديمها في شكل أرقام ثنائية. (خطأ والصحيح الرقمية)"
        },
        {
            question: "Metal part that contains most of computer parts is System unit.",
            options: ["True", "False"],
            correct: 0,
            hint: "الجزء المعدني الذي يحتوي على معظم أجزاء الكمبيوتر هو وحدة النظام. (صواب)"
        },
        {
            question: "Metal part that contains most of computer parts is Power unit.",
            options: ["True", "False"],
            correct: 1,
            hint: "الجزء المعدني الذي يحتوي على معظم أجزاء الكمبيوتر هو وحدة الطاقة. (خطأ والصحيح وحدة النظام)"
        },
        {
            question: "To copy files and folders ...",
            options: ["CTRL + INSERT", "CTRL + DELETE", "SHIFT + INSERT", "ALT + INSERT"],
            correct: 0,
            hint: "لنسخ الملفات والمجلدات: CTRL + INSERT (ويمكن أيضاً من خلال CTRL + C)"
        }
    ]
};