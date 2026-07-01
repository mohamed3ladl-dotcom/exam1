// بنك أسئلة مادة الأمن السيبراني - اختبارات التحول الرقمي 2026
const cyberData = {
    title: "Cybersecurity (الأمن السيبراني)",
    questions: [
        {
            question: "What is a computer hacker?",
            options: [
                "A person who designs hardware component architecture safely.",
                "A person who uses a computer to illegally hack into your computer and steal your personal information.",
                "An authorized administrator managing network user permissions.",
                "A software tool utilized to scan system ports for vulnerabilities."
            ],
            correct: 1,
            hint: "مخترق جهاز الكمبيوتر: شخص يستخدم جهاز كمبيوتر فى اختراق جهاز الكمبيوتر الخاص بك بشكل غير قانوني وسرقة المعلومات الخاصة بك."
        },
        {
            question: "What measures can reduce the social engineering attack surface?",
            options: [
                "Increasing the frequency of standard manual system backups.",
                "Minimizing the transmission of personal information.",
                "Utilizing public wireless internet access points without restrictions.",
                "Upgrading local computer processing and execution speeds."
            ],
            correct: 1,
            hint: "التدابير للحد من سطح هجوم الهندسة الاجتماعية: الحد من نقل المعلومات الشخصية."
        },
        {
            question: "What is malicious software that infects computers?",
            options: [
                "Programs specifically designed to disrupt, damage, or gain unauthorized access to a computer system.",
                "Applications targeted entirely at expanding local memory capacity.",
                "System updates approved by verified security vendors.",
                "Database structures specialized in indexing non-executable files."
            ],
            correct: 0,
            hint: "البرمجيات الضارة (Malware): برامج مصممة خصيصاً لتعطيل نظام الكمبيوتر أو إتلافه أو الوصول بشكل غير مصرح به إليه."
        },
        {
            question: "What is encryption?",
            options: [
                "Deleting residual log histories from shared cloud servers.",
                "Converting information or data into code to prevent unauthorized access.",
                "Duplicating files over separate remote network domains.",
                "Translating high-level programming modules to binary formatting."
            ],
            correct: 1,
            hint: "التشفيير: تحويل المعلومات أو البيانات إلى كود (رمز) بهدف منع الوصول غير المصرح به لها."
        },
        {
            question: "What is a cyberattack?",
            options: [
                "An authorized maintenance evaluation sequence performed by IT teams.",
                "An attempt to damage or destroy a computer network or system carried out by attackers.",
                "A scheduled data synchronization process across local drives.",
                "Expanding corporate hardware infrastructures globally."
            ],
            correct: 1,
            hint: "الهجوم السيبراني: محاولة إتلاف أو تدمير شبكة أو نظام كمبيوتر تتم بواسطة المهاجمين."
        },
        {
            question: "What is cybersecurity?",
            options: [
                "The state of protection against criminal or unauthorized use of electronic data.",
                "The mechanical process of assembly for dynamic server racks.",
                "Maximizing energy consumption parameters within data hosting environments.",
                "The speed of transmitting raw digital communication over fiber optic pipelines."
            ],
            correct: 0,
            hint: "الأمن السيبراني: حالة التأمين والحماية من الاستخدام الإجرامي أو غير المصرح به للبيانات الإلكترونية."
        },
        {
            question: "What is a password?",
            options: [
                "A public registry displaying network terminal identifiers.",
                "A secret word or phrase used to access your online account.",
                "The default dynamic configuration address assigned by your ISP.",
                "An open-source token shared publicly to encrypt standard data files."
            ],
            correct: 1,
            hint: "كلمة المرور: كلمة أو عبارة سرية يجب أن تستخدمها حتى يمكنك الدخول على حسابك على شبكة الإنترنت."
        },
        {
            question: "What is a computer virus?",
            options: [
                "A hardware malfunction restricting power to the processing unit.",
                "A piece of code that can copy itself and harm a device, such as damaging the system or destroying data.",
                "An operating system diagnostic update targeting graphics errors.",
                "A secure backup partition designated for archiving corporate logs."
            ],
            correct: 1,
            hint: "فيروس الكمبيوتر: جزء من التعليمات البرمجية القادر على نسخ نفسه، والذي يكون له تأثير ضار على الجهاز، مثل إتلاف النظام أو تدمير البيانات."
        },
        {
            question: "What is social engineering?",
            options: [
                "Manipulating people over the internet to reveal confidential information.",
                "Constructing physical building security protocols using advanced architecture.",
                "The optimization process of data routing channels over local networks.",
                "Programming automated algorithms to scan public file trees."
            ],
            correct: 0,
            hint: "الهندسة الاجتماعية: التلاعب بالأشخاص عبر شبكة الإنترنت بهدف الكشف عن معلومات سرية."
        },
        {
            question: "Which of the following is not a hacker?",
            options: [
                "Black hat hacker",
                "White hat hacker",
                "Blue hat hacker",
                "Script kiddie"
            ],
            correct: 2,
            hint: "أي مما يلي لا يعد مخترق للأجهزة؟ مخترق القبعة الزرقاء (Blue hat hacker) حسب المذكرة المرفقة كإجابة نموذجية للامتحان للتحايل على هذا الخيار."
        },
        {
            question: "What is a computer backup?",
            options: [
                "Replacing internal physical components to boost local storage speed.",
                "Copying original files stored on a laptop, desktop, or external hard drive.",
                "Deleting older system logs to free up continuous space.",
                "Sharing restricted storage credentials across public network platforms."
            ],
            correct: 1,
            hint: "نسخة احتياطية: عندما نقوم بنسخ الملفات الأصلية المخزنة على جهاز الكمبيوتر المحمول أو سطح المكتب أو محرك الأقراص الصلبة الخارجي."
        },
        {
            question: "What is ransomware?",
            options: [
                "A type of malicious software designed to block access to a computer system until a certain amount of money is paid.",
                "An antivirus application that updates definition signatures automatically.",
                "A free operational compression tool utilizing secure open formats.",
                "A network management suite optimizing data packet transitions."
            ],
            correct: 0,
            hint: "برمجيات الفدية: نوع من البرمجيات الضارة المصممة لمنع الوصول إلى نظام الكمبيوتر حتى يتم دفع مبلغ مالي معين."
        },
        {
            question: "It is a type of email virus that replicates itself, steals information, or damages a computer system.",
            options: [
                "Computer Worms",
                "Spam Filters",
                "Data Firewalls",
                "Encryption Keys"
            ],
            correct: 0,
            hint: "ديدان الكمبيوتر (Computer Worms): هي فيروسات البريد الإلكتروني التي تقوم بتكرار نفسها أو سرقة المعلومات أو الإضرار بنظام الكمبيوتر."
        },
        {
            question: "What is the biggest threat to cybersecurity?",
            options: [
                "Hardware component failure",
                "The human factor",
                "Outdated server architecture",
                "Unoptimized database schemas"
            ],
            correct: 1,
            hint: "أكبر تهديد للأمن السيبراني: العامل البشري (The human factor)."
        },
        {
            question: "Attacks in which attackers attempt to discover passwords for protected online accounts and social media platforms.",
            options: [
                "Phishing Attacks",
                "Password Attacks",
                "Denial-of-Service Attacks",
                "Man-in-the-Middle Attacks"
            ],
            correct: 1,
            hint: "هجمات كلمات المرور (Password Attacks): هجمات يقوم بها مهاجمون لتحديد أو معرفة كلمات المرور الخاصة بالمناطق المحمية ومنصات التواصل الاجتماعي."
        },
        {
            question: "Which of the following is an example of authentication?",
            options: [
                "Username",
                "Hard drive partition formatting",
                "Downloading public data sheets",
                "Increasing screen layout brightness"
            ],
            correct: 0,
            hint: "مثال للمصادقة: اسم المستخدم (Username)."
        },
        // أسئلة صواب وخطأ (True / False) المباشرة والمحاكية للامتحان الحقيقي بالكامل
        {
            question: "The Information Security Triad (CIA Triad) model includes data confidentiality, integrity, and availability.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) يتضمن نموذج ثالوث أمن المعلومات سرية البيانات وسلامتها وتوافرها."
        },
        {
            question: "The Information Security Triad (CIA Triad) model focuses on data availability, integrity, and reliability.",
            options: ["True", "False"],
            correct: 1,
            hint: "(خطأ) يركز النموذج على السرية (Confidentiality) وليس الاعتمادية (Reliability)."
        },
        {
            question: "The Information Security Triad (CIA Triad) model is used to ensure the security of data and systems.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) يستخدم نموذج ثالوث أمن المعلومات في ضمان تأمين البيانات والأنظمة."
        },
        {
            question: "The Information Security Triad (CIA Triad) is a guiding framework that organizations should follow when protecting information.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) يعد نموذج ثالوث أمن المعلومات دليلاً إرشادياً يتعين على المؤسسات الالتزام به لحماية المعلومات."
        },
        {
            question: "The primary goal of the Information Security Triad (CIA Triad) is to protect data from any unauthorized access.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) الهدف الأساسي هو حماية البيانات من أي وصول غير مصرح به لها، بالإضافة بالطبع إلى السلامة والتوافر."
        },
        {
            question: "Availability ensures that authorized users can access data when they need it within an appropriate time frame.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) يضمن التوافر إمكانية وصول المستخدمين المصرح لهم إلى البيانات عند احتياجهم لها في فترة زمنية مناسبة بشكل متسق وموثوق."
        },
        {
            question: "Integrity refers to ensuring that no one can modify data without permission.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) تشير السلامة إلى ضمان عدم قدرة أي شخص على تعديل البيانات دون إذن وضمان موثوقيتها واتساقها ودقتها."
        },
        {
            question: "One example of confidentiality is encrypting documents on a computer system so that no one can read them except the authorized user(s).",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) أحد الأمثلة الدالة على السرية هو تشفير المستندات على النظام بحيث لا يمكن لأحد قراءتها غير المستخدمين المعنيين."
        },
        {
            question: "Confidentiality refers to the system's ability to maintain data privacy and restrict access to unauthorized individuals.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) تشير السرية إلى قدرة النظام على المحافظة على خصوصية البيانات وتقييد اطلاع الأشخاص غير المصرح لهم عليها."
        },
        {
            question: "Online Piracy is a legal activity if done online.",
            options: ["True", "False"],
            correct: 1,
            hint: "(خطأ) القرصنة الإلكترونية نشاط غير قانوني (Illegal)."
        },
        {
            question: "In phishing attacks, victims provide their login information on fake websites.",
            options: ["True", "False"],
            correct: 0,
            hint: "(صواب) في هجمات التصيد الاحتيالي، يقدم الضحايا معلومات تسجيل الدخول الخاصة بهم على مواقع ويب مزيفة."
        },
        {
            question: "A large number of downloads always guarantees that an app is safe.",
            options: ["True", "False"],
            correct: 1,
            hint: "(خطأ) عدد التنزيلات الكبير لا يضمن دائماً أن التطبيق آمن."
        },
        {
            question: "ATM Fraud always requires knowing the victim's PIN.",
            options: ["True", "False"],
            correct: 1,
            hint: "(خطأ) عمليات الاحتيال على الصراف الآلي قد تتم بوجود الرقم السري للضحية أو بدونه."
        },
        {
            question: "Public Wi-Fi networks are always secure.",
            options: ["True", "False"],
            correct: 1,
            hint: "(خطأ) شبكات الواي فاي العامة غير آمنة (Unsecure)."
        },
        // أسئلة إكمال الفراغ (تحولت لاختيار من متعدد تفاعلي)
        {
            question: "Avoid visiting websites that don't have ........ in the URL.",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            correct: 2,
            hint: "تجنب زيارة المواقع الإلكترونية التي لا تحتوي على HTTPS في عنوان URL."
        },
        {
            question: "Installing reliable antivirus software helps prevent ........ and viruses.",
            options: ["Malware", "Hardware logs", "System Backups", "Valid Credentials"],
            correct: 0,
            hint: "يساعد تثبيت برامج مكافحة الفيروسات الموثوقة على منع البرامج الضارة (Malware) والفيروسات."
        },
        {
            question: "Multi-Factor Authentication (MFA) means...",
            options: [
                "Using only one basic password configuration for all digital networks.",
                "Using more than one method to verify identity.",
                "Disabling standard access verification protocols globally.",
                "Storing clear text passwords inside an open excel spreadsheet document."
            ],
            correct: 1,
            hint: "المصادقة متعددة العوامل (MFA) تعني: استخدام أكثر من طريقة للتحقق من الهوية."
        },
        {
            question: "One way to protect your data is ...",
            options: [
                "Sharing your personal credentials openly on dynamic social platforms.",
                "Creating long unique passwords and using a password manager.",
                "Disabling firewalls and security definitions across all networks.",
                "Connecting exclusively to unencrypted public infrastructure links."
            ],
            correct: 1,
            hint: "إحدى طرق حماية بياناتك هي: إنشاء كلمات مرور طويلة وفريدة واستخدم مدير كلمات المرور."
        },
        {
            question: "A Denial-of-Service (DOS) attack aims to: .....",
            options: [
                "Overwhelm systems or networks with traffic to make them unavailable.",
                "Create full encrypted local secondary backups for security redundancy.",
                "Authorize legal administration configurations dynamically.",
                "Optimize operational bandwidth execution throughout standard business hours."
            ],
            correct: 0,
            hint: "هجوم حجب الخدمة (DOS) يهدف إلى: إغراق الأنظمة أو الشبكات بحركة مرور كثيفة لجعلها غير متاحة."
        }
    ]
};