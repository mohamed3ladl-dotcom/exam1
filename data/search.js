// بنك أسئلة مادة البحث على الإنترنت (Web Search) - اختبارات التحول الرقمي 2026
// يحتوي الملف على أسئلة دكتورة مليكة (28 سؤالاً) وأسئلة دكتور عمارة (29 سؤالاً) بالتفصيل التام وبنفس الترتيب المعتمد.

const searchData = {
    title: "Web Search (البحث على الإنترنت)",
    
    // ================= أولاً: أسئلة الدكتورة مليكة علاء لطفي (28 سؤالاً) =================
    drMalikaQuestions: [
        {
            question: "The Arabic index for Reference citations enables you to write search terms in Arabic only.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يمكنك البحث في فهرس الكشاف العربي للاستشهادات المرجعية بكتابة مصطلحات البحث باللغتين العربية والإنجليزية وليس العربية فقط (Arabic and English)."
        },
        {
            question: "The journal's impact factor is based on calculating the number of times articles are searched for during a given year in the journal.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يعتمد معامل التأثير للمجلة على حساب عدد الاستشهادات أو المقالات الواردة منها (Citations) وليس عدد مرات البحث عن المقالات."
        },
        {
            question: "The Egyptian Knowledge Bank (EKB) offers a range of online workshops.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يقدم بنك المعرفة المصري (EKB) مجموعة من ورش العمل عبر الإنترنت للباحثين والمستخدمين."
        },
        {
            question: "Scopus sources are accessed through the ELSEVIER database.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يتم الوصول إلى مصادر وقاعدة بيانات Scopus من خلال الناشر وقاعدة البيانات الأم ELSEVIER."
        },
        {
            question: "The search engine comprehensively scans the network to obtain results when you enter search words.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يقوم محرك البحث بفحص الفهارس وقواعد البيانات المخزنة لديه (Indexes) بشكل شامل للحصول على النتائج عند إدخال كلمات البحث، وليس فحص الشبكة الحية بالكامل في نفس اللحظة."
        },
        {
            question: "Boolean operations cannot be used when searching within a ProQuest database.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يمكن استخدام العمليات البوليانية أو المنطقية (مثل AND, OR, NOT) عند البحث داخل قاعدة بيانات ProQuest لتضييق أو توسيع النتائج."
        },
        {
            question: "SCImago displays SCOPUS metrics for a journal per year.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يعرض موقع SCImago مقاييس ومؤشرات SCOPUS الخاصة بالمجلة العلمية مصنفة وفقاً لكل سنة."
        },
        {
            question: "The user can access Clarivate from the Sources menu in the Egyptian Knowledge Bank.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يمكن للمستخدم والباحث الوصول إلى Clarivate ومصادرها من خلال قائمة المصادر (Sources menu) المتوفرة داخل بنك المعرفة المصري."
        },
        {
            question: "Dar Al-Mandumah's index contains a group of subsections.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يحتوي فهرس وقاعدة بيانات دار المنظومة على مجموعة من الأقسام الفرعية والتخصصية (مثل المنظومة للعلوم الاقتصادية، الإسلامية، اللغوية إلخ)."
        },
        {
            question: "The document can be saved for viewing on the web with the HMT extension.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يمكن حفظ المستند للعرض على الويب باستخدام امتداد HTML أو HTM وليس الامتداد الخاطئ HMT."
        },
        {
            question: "Advanced search in WOS is used to narrow your search according to specific criteria.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يتم استخدام آليات البحث المتقدم في شبكة العلوم (WOS) لتضييق نطاق البحث وتقليل النتائج وفقاً لمعايير دقيقة ومحددة."
        },
        {
            question: "SJR enables you to arrange journals in your field and filter them by topic, but it is difficult to classify them by year.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: تمكنك منصة ومؤشر SJR من ترتيب المجلات وتصفيتها حسب الموضوع، ومن السهل جداً تصنيفها وترتيبها وفقاً للسنة وليس صعباً."
        },
        {
            question: "The Scopus database is a powerful tool if you want to compare journals in the same subject category.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: تذكر المذكرة المرفقة أن هذه العبارة تُعتبر (False) في نمط أسئلة التحول الرقمي نظراً لأن مقارنة وترتيب المجلات المباشر الدقيق لفئة معينة يتبع أدوات ومقاييس أخرى كمعامل التأثير المرتبط بـ Clarivate أو تخصيص SJR الحصري للمقارنات."
        },
        {
            question: "When you click on the name of the magazine or periodical in WOS, the impact factor of the magazine or periodical is displayed.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: عند الضغط على اسم المجلة أو الدورية داخل قاعدة Web of Science (WOS) يتم عرض بيانات معامل التأثير الخاص بها مباشرة."
        },
        {
            question: "All Photos posted on Unsplash are free to copy, modify distribute including for commercial purposes.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: جميع الصور المنشورة على موقع Unsplash مجانية تماماً ويمكنك نسخها، تعديلها، توزيعها، واستخدامها للأغراض الشخصية والتجارية دون قيود."
        },
        {
            question: "The words you type in a search field to get your results are called ......",
            options: ["Search terms", "Query logs", "Index metadata", "Hyperlinks"],
            correct: 0,
            hint: "الكلمات التي تكتبها في حقل البحث للحصول على نتائجك تسمى مصطلحات البحث (Search terms)."
        },
        {
            question: "Using the Google search engine, if you want to know who cited a Washington Post article on their site, the correct structure of the search sentence is:",
            options: ["site:washingtonpost.com", "link:washingtonpost.com", "related:washingtonpost.com", "info:washingtonpost.com"],
            correct: 1,
            hint: "لمعرفة من استشهد بمقالة أو ربط بموقع واشنطن بوست نستخدم الأمر link: متبوعاً برابط الموقع بدون مسافات."
        },
        {
            question: "Using Google, if you want to find a website similar to eBay, what is the correct syntax for your search term?",
            options: ["similar:eBay.com", "like:eBay.com", "related:eBay.com", "site:eBay.com"],
            correct: 2,
            hint: "لإيجاد مواقع ويب مشابهة لموقع معين نستخدم الصيغة related: متبوعة باسم النطاق مباشرة."
        },
        {
            question: "The website ........ allows you to use EndNote Online for free.",
            options: ["Elsevier", "Scopus", "Clarivate", "ProQuest"],
            correct: 2,
            hint: "يتيح موقع Clarivate استخدام أداة إدارة المراجع الشهيرة EndNote Online بشكل مجاني للمستخدمين المشتركين."
        },
        {
            question: "The Database... enables you to merge more than one account of the same author.",
            options: ["Dar Al-Mandumah", "Scopus", "ProQuest", "Google Scholar"],
            correct: 1,
            hint: "تمكنك قاعدة بيانات ومحرك Scopus من دمج أكثر من حساب أو ملف تعريف لنفس المؤلف (Author feedback / merge profiles)."
        },
        {
            question: "The data source in SCImago is .....",
            options: ["Web of Science", "Scopus", "PubMed", "Clarivate Analytics"],
            correct: 1,
            hint: "مصدر البيانات والمقاييس الأساسي الذي تعتمد عليه منصة ومؤشرات SCImago هو قاعدة بيانات Scopus."
        },
        {
            question: "Use..... to expand your search.",
            options: ["AND", "NOT", "OR", "AND NOT"],
            correct: 2,
            hint: "لتوسيع نطاق البحث ليشمل أي من الكلمتين أو كلاهما معاً نستخدم الرابط المنطقي OR."
        },
        {
            question: "Using a ...... when searching on Google leads to reducing (narrowing) the search results.",
            options: ["plus (+)", "hyphen (-)", "asterisk (*)", "quotation marks (\"\")"],
            correct: 1,
            hint: "يؤدي استخدام الشرطة أو علامة الناقص hyphen (-) قبل كلمة معينة في جوجل إلى تضييق النتائج عن طريق استبعاد تلك الكلمة تماماً."
        },
        {
            question: "Refers to the technical (gateway) used to access resources on a web server:",
            options: ["IP Address", "Port", "Domain", "Protocol"],
            correct: 1,
            hint: "يشير المصطلح المنفذ (Port) إلى البوابة أو المدخل التقني الرقمي المستخدم للوصول واستدعاء الموارد الموجودة على خادم الويب."
        },
        {
            question: "The............ platform is the product of cooperation between the Al-Alfi Foundation for Human and Social Development and the Ministry of Higher Education.",
            options: ["EKB", "Ejada", "Dar Al-Mandumah", "WOS"],
            correct: 1,
            hint: "منصة إجادة (Ejada) هي نتاج تعاون مشترك ومثمر بين مؤسسة الألفي للتنمية البشرية والاجتماعية ووزارة التعليم العالي."
        },
        {
            question: "An indicator that is considered a measure of the scientific influence of scientific journals that explains the status of the journals from which citations come is:",
            options: ["Impact Factor (IF)", "SCIMAGO Journal Rank", "h-index", "i10-index"],
            correct: 1,
            hint: "المؤشر الذي يعتبر مقياساً للتأثير العلمي للمجلات ويوضح مكانة وحالة المجلات التي تأتي منها الاستشهادات هو تصنيف ومؤشر SCIMAGO Journal Rank (SJR)."
        },
        {
            question: "Use advanced search to ....... your results.",
            options: ["Expand", "Narrow", "Delete", "Ignore"],
            correct: 1,
            hint: "نستخدم البحث المتقدم من أجل تضييق (Narrow) وتقليص نتائج البحث للوصول لأدق وأقرب مادة مطلوبة."
        },
        {
            question: "You can use OneDrive as a cloud drive within tab ........",
            options: ["Settings icon", "App launcher icon", "Help menu", "Profile picture"],
            correct: 1,
            hint: "يمكنك فتح واستخدام تطبيق OneDrive السحابي من خلال الضغط على أيقونة مشغل التطبيقات (App launcher icon) المكونة من 9 نقاط في واجهة برامج مايكروسوفت."
        }
    ],

    // ================= ثانياً: أسئلة الدكتور أحمد عمارة (29 سؤالاً - الإصدار الثالث المعتمد) =================
    drOmaraQuestions: [
        {
            question: "Secure shopping websites and e-stores start with the website domain HTTP.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: تبدأ مواقع التسوق الإلكتروني والمتاجر الإلكترونية الآمنة والموثوقة بنطاق بروتوكول HTTPS المشفر وليس HTTP العادي."
        },
        {
            question: "The journal's impact factor is based on calculating the number of times articles are searched for during a given year in the journal. (citations or articles coming from it)",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يعتمد معامل التأثير للمجلة على حساب الاستشهادات أو المقالات الواردة منها (Citations) وليس عدد مرات البحث."
        },
        {
            question: "Using the Google search engine, if you want to know who cited a Washington Post article on their site, the correct structure of the search sentence is link:washingtonpost.com.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: البنية الصحيحة لمعرفة من استشهد بموقع واشنطن بوست أو وضع رابطاً له في جوجل هي استخدام المعامل link:washingtonpost.com."
        },
        {
            question: "The words you type in a search field to get your results are called Search terms.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: الكلمات التي تُكتب في حقل البحث للحصول على نتائج تُعرف علمياً بمصطلحات البحث (Search terms)."
        },
        {
            question: "The Database Scopus enables you to merge more than one account of the same author.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: تتيح قاعدة بيانات Scopus للمؤلفين دمج أكثر من حساب أو ملف تعريفي يخص نفس الكاتب لمنع التكرار وضمان دقة الإحصائيات."
        },
        {
            question: "The Egyptian Knowledge Bank (EKB) offers a range of online workshops.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يقدم بنك المعرفة المصري مجموعة متنوعة ودورية من ورش العمل التفاعلية والدورات عبر الإنترنت."
        },
        {
            question: "Boolean operations cannot be used when searching within a ProQuest database.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يمكن استخدام العمليات المنطقية البوليانية لتوسيع أو تضييق نطاقات البحث داخل قاعدة بيانات ProQuest."
        },
        {
            question: "Scopus sources are accessed through the ELSEVIER database.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يتم تصفح والوصول إلى كافة مصادر وبيانات Scopus من خلال البوابة وقاعدة البيانات الكبرى ELSEVIER."
        },
        {
            question: "The user can access Clarivate from the Sources menu in the Egyptian Knowledge Bank.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يستطيع الباحث الوصول إلىClarivate بشكل كامل ومباشر عبر قائمة المصادر التابعة لبنك المعرفة المصري."
        },
        {
            question: "SCImago displays SCOPUS metrics for a journal according a year.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: توفر منصة SCImago عرضاً شاملاً لمقاييس مجلات Scopus مصنفة ومحدثة وفقاً لكل سنة."
        },
        {
            question: "The search engine comprehensively scans the network to obtain results when you enter search words. (indexes)",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: محرك البحث يبحث في فهارسه وقواعد بياناته (Indexes) وليس الشبكة بالكامل بشكل حي ومباشر وقت كتابة الكلمة."
        },
        {
            question: "The website Clarivate allows you to use EndNote Online for free.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يتيح موقع منصة Clarivate للباحثين استخدام وإدارة المراجع بواسطة أداة EndNote Online مجاناً."
        },
        {
            question: "Using Google, if you want to find a website similar to eBay, the correct syntax for your search term is related: eBay.com.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: الصياغة الصحيحة للبحث عن مواقع ويب شبيهة أو ذات صلة بموقع إيباي هي related: eBay.com."
        },
        {
            question: "Dar Al-Mandumah's index contains a group of subsections.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: تشتمل قواعد دار المنظومة العربية على فهارس مقسمة لمجموعات وأقسام فرعية تخصصية متكاملة."
        },
        {
            question: "The document can be saved for viewing on the web with the HMT extension. (html)",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: يتم حفظ المستندات والملفات للعرض البرمجي على شبكة الويب بامتداد html أو htm وليس HMT."
        },
        {
            question: "Use advanced search to Narrow your results.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: الهدف الأساسي والجوهري من استخدام أدوات البحث المتقدم هو تضييق وتقليص النتائج (Narrow)."
        },
        {
            question: "The data source in SCImago is Scopus.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: المصدر الرئيسي والوحيد المعتمد للمعلومات والبيانات في تصنيفات SCImago هو Scopus."
        },
        {
            question: "Advanced search in WOS is used to narrow your search according to specific criteria.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: في قاعدة Web of Science (WOS) نستخدم خيارات البحث المتقدم لتضييق وتحديد النتائج وفقاً لمعايير دقيقة."
        },
        {
            question: "Use OR to expand your search.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: المعامل المنطقي المستخدم لتوسيع وتكبير نطاق نتائج البحث هو معامل الخيار OR."
        },
        {
            question: "SJR enables you to arrange journals in your field and filter them by topic, but it is difficult to classify them by year.",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: منصة SJR تتيح الترتيب والتصفية والتصنيف الكامل حسب الموضوع وأيضاً حسب السنة بكل سهولة ويسر."
        },
        {
            question: "The Scopus database is a powerful tool if you want to compare journals in the same subject category. (IF)",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: تصنيف المجلات والمقارنة التفصيلية المباشرة للأقسام تعتمد بشكل أساسي على مقاييس معامل التأثير (IF) المرتبط بقواعد بيانات شبكة العلوم التابعة لـ Clarivate وليس Scopus بمفردها."
        },
        {
            question: "refers to the technical 'gateway' used to access resources on a web server .... Port.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: المصطلح والمفهوم التقني الدال على البوابة الرقمية للوصول إلى موارد خادم الويب هو المنفذ (Port)."
        },
        {
            question: "Using a hyphen (-) when searching on Google leads to reducing the search results.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: استخدام الشرطة/الناقص (-) في جملة البحث بجوجل يقلل ويضيق النتائج عن طريق حذف وإقصاء الكلمات التي تلي العلامة."
        },
        {
            question: "An indicator that is considered a measure of the scientific influence of scientific journals that explains the status of the journals from which citations come is SCIMAGO Journal Rank.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: المؤشر والمقياس المعتمد للتأثير العلمي للنشريات ومكانة مجلات الاستشهاد هو SCIMAGO Journal Rank."
        },
        {
            question: "You can use OneDrive as a cloud drive within tab App launcher icon.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يتم الانتقال لتطبيق OneDrive السحابي من خلال أيقونة مشغل التطبيقات (App launcher icon)."
        },
        {
            question: "The Ejada platform is the product of cooperation between the Al-Alfi Foundation for Human and Social Development, the Ministry of Higher Education.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: منصة إجادة الإلكترونية هي نتاج التعاون الرسمي والوثيق بين مؤسسة الألفي للتنمية ووزارة التعليم العالي."
        },
        {
            question: "When you click on the name of the magazine or periodical in WOS, the impact factor of the magazine or periodical is displayed.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: عند النقر على اسم المجلة أو الدورية داخل قاعدة بيانات WOS يتم فتح وعرض قيمة معامل التأثير الخاص بها مباشرة."
        },
        {
            question: "The Arabic Index for reference Citations enables you to write search terms in Arabic only. (Arabic and English)",
            options: ["True", "False"],
            correct: 1,
            hint: "خطأ: الكشاف العربي للاستشهادات المرجعية يتيح للباحث كتابة مصطلحات وبنود البحث باللغتين العربية والإنجليزية معاً وليس باللغة العربية فقط."
        },
        {
            question: "All Photos posted on Unsplash are free to copy, modify distribute including for commercial purposes.",
            options: ["True", "False"],
            correct: 0,
            hint: "صواب: يتيح موقع Unsplash لجميع رواده تحميل، نسخ، تعديل، وتوزيع كافة الصور المنشورة مجاناً وبشكل كامل حتى للأغراض التجارية."
        }
    ]
};