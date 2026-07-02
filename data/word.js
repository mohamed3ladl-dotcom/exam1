// بنك أسئلة مادة معالج النصوص (Word Processing) - مقسم حسب الدكاترة لسهولة المراجعة
const wordData = {
    title: "Word Processing (معالج النصوص - وورد)",
    questions: [
        // =========================================================================
        // أولاً: جزء أسئلة الدكتورة مليكة (متضمنة الصواب والخطأ والاختيار من متعدد)
        // =========================================================================
        {
            question: "You can move between changes tracked by the file but can't approve or reject them",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكنك التنقل وتتبع التغييرات في الملف ولكن لا يمكنك الموافقة عليها أو رفضها"
        },
        {
            question: "We can add a chart from photo option",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكن إضافة مخطط من خيارات الصورة"
        },
        {
            question: "To move a word, it must be cut",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) لتحريك كلمة لابد من قصها"
        },
        {
            question: "Ribbon has been included in Office applications since Office 2007",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تم تضمين شريط التبويبات في تطبيقات أوفيس منذ عام ۲۰۰۷"
        },
        {
            question: "The endnote appears in the bottom margin of each page",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يظهر التعليق الختامي بالهامش السفلي لكل صفحة"
        },
        {
            question: "Translation is available within Word via the Thesaurus tool",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تتوفر الترجمة داخل برنامج معالج النصوص من خلال أداة قاموس المترادفات"
        },
        {
            question: "Text can not be replaced within a Word document",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) لا يمكن استبدال النص داخل مستند الوورد"
        },
        {
            question: "If you have multiple Word documents open at once, you can switch between open windows by Switch windows, window group, view tab",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) إذا كان لديك عدة ملفات وورد مفتوحة في نفس الوقت يمكن التبديل بين النوافذ المفتوحة عن طريق تبديل النوافذ ، مجموعة نافذة ، تبويب عرض"
        },
        {
            question: "To change the format of a word, it must be selected first",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) لتغيير تنسيق كلمة لابد من تحديدها أولاً"
        },
        {
            question: "An equation can be inserted from a set of symbols",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يمكن إدراج معادلة من مجموعة من رموز"
        },
        {
            question: "you can insert a chart from a photo group",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكن إدراج مخطط من مجموعة الصور"
        },
        {
            question: "The footnote appears in the bottom margin of each page",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تظهر الحاشية السفلية في الهامش السفلى لكل صفحة"
        },
        {
            question: "Information in the Citations or Manage Sources tool cannot be used to create footnotes or endnotes",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) لا يمكن استخدام المعلومات الموجودة في أداة الاقتباسات أو إدارة المصادر لإنشاء الحواشي السفلية أو التعليقات الختامية"
        },
        {
            question: "Information in the Citations or Manage Sources tool can be used to create citations or references",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يمكن استخدام المعلومات الموجودة في أداة الاقتباسات أو إدارة المصادر لإنشاء اقتباسات او مراجع"
        },
        {
            question: "Paragraph borders appear on the horizontal ruler only by clicking on the beginning of the Paragraph",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تظهر حدود الفقرة على المسطرة الأفقية فقط من خلال النقر على بداية الفقرة"
        },
        {
            question: "In print page preview mode, you can see all the pages of your document",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) في وضع معاينة صفحة الطباعة يمكن رؤية جميع صفحات المستند"
        },
        {
            question: "Is possible to control the insertion of a footnote into the word from home tab",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) من الممكن التحكم في إدراج حاشية سفلية في برنامج معالج النصوص من التبويب الرئيسي"
        },
        {
            question: "The head and footer setting appear in read mode",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يظهر الرأس والتذييل في وضع القراءة"
        },
        {
            question: "When you click save selection as a new Quick style should not be named so that the style you created appears in the style gallery",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) عندما تقوم بحفظ التحديد كنمط سريع جديد لا يجب تسميته بحيث يظهر النمط الذي قمت بإنشائه في معرض الأنماط"
        },
        {
            question: "The method of numbering the footnote cannot be changed to be alphabetically instead of traditional numbers",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) لا يمكن تغيير طريقة ترقيم الحاشية السفلية لتكون أبجدياً بدلاً من الأرقام التقليدية"
        },
        {
            question: "Cross references are updated automatically",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يتم تحديث المراجع التبادلية تلقائياً"
        },
        {
            question: "Translate a text in word 2019 by selecting it and right click",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) لترجمة نص في الوورد عن طريق تحديده والضغط علي زر الماوس الأيمن"
        },
        {
            question: "Page viewed before printing from view tab",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) معاينة الصفحة قبل الطباعة من تبويب عرض"
        },
        {
            question: "You can translate a word by clicking on it",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يمكن ترجمة الكلمة بالضغط عليها"
        },
        {
            question: "The Footnote and Endnote dialog box contains options to control how footnotes and endnotes appear from home tab",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يحتوي مربع الحوار الحاشية السفلية والتعليق الختامي على خيارات للتحكم في كيفية ظهورهم من تبويبة الشريط الرئيسي"
        },
        {
            question: "The document saves with extension HMT for display on the Web",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يتم حفظ المستند بامتداد HMT لعرضه على الويب"
        },
        {
            question: "It is possible to control the insertion of a footnote into the word processor from a home tab",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) من الممكن التحكم في إدراج الحاشية السفلية في معالج النصوص من التبويب الرئيسي"
        },
        {
            question: "Start Mail Merge group contains a recipient selection tool which allows us to write a new list containing recipient data",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تحتوي مجموعة بدء دمج المراسلات على أداة تحديد المستلمين التي تتيح كتابة قائمة جديدة ببيانات المستلمين"
        },
        {
            question: "Start Mail Merge section contains a set of tools that identify the recipients of a message",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يحتوي قسم بدء دمج المراسلات على مجموعة من الأدوات التي تحدد مستلمين الرسالة"
        },
        {
            question: "The document can be saved in different formats except",
            options: [".docx", ".pdf", ".txt", ".exe"],
            correct: 3,
            hint: "يمكن حفظ المستند بتنسيقات مختلفة ما عدا: .exe"
        },
        {
            question: "To choose wide margins within the document from the ... group",
            options: ["Page Setup", "Paragraph", "Styles", "Font"],
            correct: 0,
            hint: "لاختيار هوامش واسعة في المستند من مجموعة: Page Setup"
        },
        {
            question: "To choose wide margins within the document from the ... tab",
            options: ["Home", "Insert", "Layout", "View"],
            correct: 2,
            hint: "لاختيار هوامش واسعة في المستند من تبويب: Layout"
        },
        {
            question: "The quick style created appears in",
            options: ["Font group", "Paragraph group", "Style group", "Editing group"],
            correct: 2,
            hint: "يظهر النمط السريع الذي تم إنشاؤه في: Style group"
        },
        {
            question: "To change the format of a table in Word from a tab",
            options: ["Table Layout", "Table Design", "Insert", "Home"],
            correct: 1,
            hint: "لتغيير تنسيق الجدول في الوورد من تبويب: Table Design"
        },
        {
            question: "Spelling errors in Word are marked with a ... line under the word",
            options: ["Blue", "Green", "Red", "Yellow"],
            correct: 2,
            hint: "الأخطاء الإملائية في معالج النصوص تظهر بخط أحمر (Red) تحت الكلمة"
        },
        {
            question: "To control document margins, select",
            options: ["Page Setup", "Paragraph", "Font", "Page Background"],
            correct: 0,
            hint: "للتحكم في هوامش المستند، اختر: Page Setup"
        },
        {
            question: "Press ... key to print the document",
            options: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
            correct: 1,
            hint: "لطباعة الملف اضغط على مفتاح: Ctrl + P"
        },
        {
            question: "To view different sections of a document at the same time",
            options: ["New Window", "Arrange All", "Split", "Switch Windows"],
            correct: 2,
            hint: "لعرض مقاطع مختلفة من المستند في نفس الوقت اختر: Split"
        },
        {
            question: "The shortcut to close the Word file is",
            options: ["Ctrl + Q", "Ctrl + W", "Ctrl + E", "Ctrl + R"],
            correct: 1,
            hint: "اختصار إغلاق مستند الوورد هو: Ctrl + W"
        },
        {
            question: "To write a comment on word press key",
            options: ["Ctrl + Alt + C", "Ctrl + Alt + M", "Ctrl + Shift + C", "Alt + Shift + M"],
            correct: 1,
            hint: "لكتابة تعليق على كلمة اضغط على مفتاح: Ctrl + Alt + M"
        },
        {
            question: "You can add a comment on some words using the",
            options: ["Home tab", "Insert tab", "Review tab", "References tab"],
            correct: 2,
            hint: "يمكن إضافة تعليق على بعض الكلمات من خلال تبويب: Review tab"
        },
        {
            question: "To add page numbering within a word document using",
            options: ["The Page Setup", "the Header and Footer", "The Table of Contents", "The Footnotes"],
            correct: 1,
            hint: "لإضافة ترقيم للصفحات داخل مستند الوورد من خلال: the Header and Footer"
        },
        {
            question: "It is possible to control the display of the ruler from the",
            options: ["Show group", "Views group", "Zoom group", "Window group"],
            correct: 0,
            hint: "من الممكن التحكم في إظهار المسطرة من خلال مجموعة: Show group"
        },
        {
            question: "The indent can be set using the ... sign",
            options: ["Enter", "Space", "Tab", "Shift"],
            correct: 2,
            hint: "يمكن ضبط المسافة البادئة من خلال: Tab"
        },
        {
            question: "You can write in a Word document in three columns through a group",
            options: ["Page Setup", "Paragraph", "Page Background", "Paragraph Spacing"],
            correct: 0,
            hint: "يمكن الكتابة في مستند الوورد في ثلاثة أعمدة من خلال مجموعة: Page Setup"
        },
        {
            question: "To control adding a cell or column within a table in a Word file from the tab",
            options: ["Table Design", "Table Layout", "Insert", "Home"],
            correct: 1,
            hint: "للتحكم في إضافة خلية أو عمود داخل الجدول في مستند وورد من تبويب: Table Layout"
        },
        {
            question: "is a set of characteristics, such as font name size and color paragraph alignment and spacing border and shading",
            options: ["Format", "Layout", "style", "Template"],
            correct: 2,
            hint: "مجموعة من الخصائص مثل اسم الخط وحجمه واللون ومحاذاة الفقرات الملونة وتباعد الأنماط والحدود والتظليل: style"
        },
        {
            question: "The position of images in the document is determined by the group",
            options: ["Adjust", "Picture Styles", "Arrange", "Size"],
            correct: 2,
            hint: "يتم تحديث موضع الصور في المستند من خلال مجموعة: Arrange"
        },
        {
            question: "To view the origin of the merged fields, we choose",
            options: ["Highlight fields", "Match Fields", "Update Labels", "Find Recipient"],
            correct: 0,
            hint: "لكي يتم مشاهدة أصل الحقول التي تم دمجها نختار: Highlight fields"
        },
        {
            question: "A document watermark can made through a group",
            options: ["Page Setup", "Page Background", "Paragraph", "Styles"],
            correct: 1,
            hint: "يمكن إنشاء علامة مائية للمستند من خلال مجموعة: Page Background"
        },
        {
            question: "You can insert breaks, from tab",
            options: ["Home", "Insert", "Layout", "Review"],
            correct: 2,
            hint: "يمكن إدراج الفواصل من تبويب: Layout"
        },
        {
            question: "You can insert three dimensional models from ........... set",
            options: ["Tables", "illustrations", "Add-ins", "Text"],
            correct: 1,
            hint: "يمكنك إدراج نماذج ثلاثية الأبعاد من مجموعة: illustrations"
        },
        {
            question: "you can search for a word from the tab",
            options: ["Home", "Insert", "Layout", "View"],
            correct: 0,
            hint: "يمكن البحث عن كلمة من تبويب: Home"
        },
        {
            question: "resize a page in the word, use group",
            options: ["page setup", "Paragraph", "Styles", "Arrange"],
            correct: 0,
            hint: "لتغيير حجم الصفحة في الوورد، استخدم مجموعة: page setup"
        },
        {
            question: "resize a page in the word, use tab",
            options: ["Home", "Insert", "Layout", "View"],
            correct: 2,
            hint: "لتغيير حجم الصفحة في برنامج معالج النصوص، استخدم تبويب: Layout"
        },
        {
            question: "To add the signature line, from group",
            options: ["Pages", "Tables", "Illustrations", "Text"],
            correct: 3,
            hint: "لإضافة سطر التوقيع من مجموعة: Text"
        },
        {
            question: "You can insert page break, from",
            options: ["Home", "Insert", "Layout", "View"],
            correct: 1,
            hint: "يمكن إضافة فاصل صفحة من: Insert"
        },
        {
            question: "Word document can be written in three columns through",
            options: ["page setup", "Paragraph", "Page Background", "Styles"],
            correct: 0,
            hint: "مستند الوورد يمكن كتابته في ثلاثة أعمدة من خلال مجموعة: page setup"
        },
        {
            question: "Are text below illustrations",
            options: ["Footnotes", "Endnotes", "Captions", "Headers"],
            correct: 2,
            hint: "نص أسفل الرسوم التوضيحية: Captions"
        },
        {
            question: "The default view in the word is the",
            options: ["Read Mode", "Print layout view", "Web Layout", "Draft"],
            correct: 1,
            hint: "طريقة العرض الافتراضية في برنامج الوورد هي: Print layout view"
        },
        {
            question: "The headers and footers were not visible in",
            options: ["Print Layout", "Full Screen", "Draft", "Web Layout"],
            correct: 2,
            hint: "الرؤوس والتذييلات لا تكون مرئية في طريقة عرض: Draft"
        },
        {
            question: "Allow to move through the pages of document in a structured view",
            options: ["Navigation pane", "Status bar", "Scroll bar", "Ruler"],
            correct: 0,
            hint: "يسمح بالتنقل عبر صفحات المستند في طريقة عرض هيكلية: Navigation pane"
        },
        {
            question: "Used to place frames and shoe them together in a horizontal plane",
            options: ["New Window", "Arrange all", "Split", "Switch Windows"],
            correct: 1,
            hint: "يستخدم لتنظيم الإطارات وإظهارها معاً في مستوى أفقي: Arrange all"
        },
        {
            question: "Paragraph borders appear on the ...... ruler by clicking on the beginning of the Paragraph",
            options: ["Horizontal", "Vertical", "Horizontal and vertical", "None"],
            correct: 2,
            hint: "تظهر حدود الفقرة على المسطرة الأفقية والعمودية (Horizontal and vertical) من خلال النقر على بداية الفقرة"
        },
        {
            question: "The numbers of words appear in",
            options: ["Title bar", "Status bar", "Ribbon", "Task pane"],
            correct: 1,
            hint: "يظهر عدد الكلمات في شريط الحالة: Status bar"
        },
        {
            question: "To add an additional shape in a SmartArt graphic",
            options: ["Double click", "Right-click on the shape and choose \"Add Shape\"", "Delete key", "None"],
            correct: 1,
            hint: "لاضافة شكل إضافي في رسم سمارت ارت: Right-click on the shape and choose \"Add Shape\""
        },
        {
            question: "In print page preview mode, you can see",
            options: ["Current page only", "Headers only", "All the pages", "None"],
            correct: 2,
            hint: "في وضع معاينة ما قبل الطباعة يمكنك رؤية: All the pages"
        },

        // =========================================================================
        // ثانياً: جزء أسئلة الدكتور أحمد عمارة (شاملة التكرار بصياغات النسخة المحدثة)
        // =========================================================================
        {
            question: "To control document margins, select ...",
            options: ["Paragraph", "page setup", "Font", "Styles"],
            correct: 1,
            hint: "للتحكم في هوامش المستند اختر: page setup"
        },
        {
            question: "To move a word it must be cute (cut)",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) لتحريك كلمة لابد من قصها (يوجد طرق أخرى)"
        },
        {
            question: "To choose wide margins within the document from the... (group)",
            options: ["page setup", "Paragraph", "Styles", "Font"],
            correct: 0,
            hint: "لاختيار هوامش واسعة داخل المستند من مجموعة: page setup"
        },
        {
            question: "To choose wide margins within the document from the ... (tab)",
            options: ["Home", "Insert", "Layout", "View"],
            correct: 2,
            hint: "لاختيار هوامش واسعة داخل المستند من تبويب: Layout"
        },
        {
            question: "Ribbon has been included in Office applications since Office 2007.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تم تضمين الشريط في تطبيقات Office منذ عام 2007"
        },
        {
            question: "The quick style created appears in ...",
            options: ["Font group", "Paragraph group", "Style group", "Editing group"],
            correct: 2,
            hint: "يظهر النمط السريع الذي تم انشاؤه في مجموعة: Style group"
        },
        {
            question: "To change the format of a table in Word from a tab...",
            options: ["Table Layout", "Table Design", "Insert", "Home"],
            correct: 1,
            hint: "لتغيير تنسيق الجدول في الوورد من تبويب: Table Design"
        },
        {
            question: "Spelling errors in Word are marked with a... line under the word.",
            options: ["blue", "green", "red", "yellow"],
            correct: 2,
            hint: "الأخطاء الإملائية في معالج النصوص تميز بخط أحمر (red) تحت الكلمة"
        },
        {
            question: "The endnote appears in the bottom margin of each page.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يظهر التعليق الختامي بالهامش السفلي لكل صفحة (والصحيح في نهاية المستند At the end of the document)"
        },
        {
            question: "Translation is available within Word via the Thesaurus tool.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تتوفر الترجمة داخل برنامج وورد بواسطة أداة قاموس المرادفات (والصحيح الترجمة من مجموعة اللغة تبويب مراجعة)"
        },
        {
            question: "Press ... key to print the document.",
            options: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
            correct: 1,
            hint: "اضغط على مفتاح طباعة المستند: Ctrl + P"
        },
        {
            question: "Text cannot be replaced within a Word document.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) لا يمكن استبدال النص داخل مستند وورد (يمكن بأداة استبدال مجموعة تحرير تبويب الشريط الرئيسي)"
        },
        {
            question: "To view different sections of a document at the same time ...",
            options: ["New Window", "Arrange All", "Split", "Switch Windows"],
            correct: 2,
            hint: "لعرض مقاطع مختلفة من المستند في نفس الوقت: Split"
        },
        {
            question: "The shortcut to close the Word file is ...",
            options: ["Ctrl + Q", "Ctrl + W", "Ctrl + E", "Ctrl + R"],
            correct: 1,
            hint: "اختصار اغلاق ملف الوورد هو: Ctrl + W"
        },
        {
            question: "To write a comment on word press key ...",
            options: ["Ctrl + Alt + C", "Ctrl + Alt + M", "Ctrl + Shift + C", "Alt + Shift + M"],
            correct: 1,
            hint: "لكتابة تعليق على كلمة إضغط مفتاح: Ctrl + Alt + M"
        },
        {
            question: "You can add a comment on some words using the ....",
            options: ["Home tab", "Insert tab", "Review tab", "References tab"],
            correct: 2,
            hint: "يمكن اضافة تعليق على بعض الكلمات بواسطة تبويب: Review tab"
        },
        {
            question: "If you have multiple Word documents open at once, you can switch between open windows by Switch windows, window group, view tab.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) إذا كان لديك عدة مستندات (Word) مفتوحة في آن واحد، يمكنك التبديل بين النوافذ المفتوحة عن طريق تبديل النوافذ، مجموعة نافذة، تبويب عرض"
        },
        {
            question: "To add page numbering within a word document using . group",
            options: ["Page Setup", "the Header and Footer", "Table of Contents", "Footnotes"],
            correct: 1,
            hint: "لإضافة ترقيم للصفحات داخل مستند وورد من خلال مجموعة: the Header and Footer"
        },
        {
            question: "It is possible to control the display of the ruler from the...",
            options: ["Show group", "Views group", "Zoom group", "Window group"],
            correct: 0,
            hint: "من الممكن التحكم في اظهار المسطرة من مجموعة: Show group (View tab)"
        },
        {
            question: "The indent can be set using the master... sign.",
            options: ["Enter", "Space", "Tab", "Shift"],
            correct: 2,
            hint: "يمكن ضبط المسافة البادئة باستخدام علامة: Tab الرئيسي"
        },
        {
            question: "You can write in a Word document in three columns through a group ....",
            options: ["Page Setup", "Paragraph", "Page Background", "Styles"],
            correct: 0,
            hint: "يمكنك الكتابة في مستند Word في ثلاثة أعمدة من خلال مجموعة: Page Setup"
        },
        {
            question: "To control adding a cell or column within a table in a Word file from the tab...",
            options: ["Table Design", "Table Layout", "Insert", "Home"],
            correct: 1,
            hint: "للتحكم في إضافة خلية أو عمود داخل جدول في ملف Word من علامة التبويب: Table Layout"
        },
        {
            question: "To change the format of a word, it must be selected first.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) لتغيير تنسيق كلمة لابد من تحديدها أولا"
        },
        {
            question: "The head and footer appear in read mode. (print layout)",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يظهر الرأس والتذييل في وضع القراءة والموضع الصحيح له هو تخطيط الطباعة print layout"
        },
        {
            question: "The header and footer settings appear in read mode. (print layout)",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تظهر إعدادات الرأس والتذييل في وضع القراءة والموضع الصحيح له هو تخطيط الطباعة"
        },
        {
            question: "To resize a page in the word, use ... (group)",
            options: ["page setup", "Paragraph", "Styles", "Arrange"],
            correct: 0,
            hint: "لتغيير حجم الصفحة في برنامج معالج النصوص، استخدم مجموعة: page setup"
        },
        {
            question: "To resize a page in the word, use ... (tab)",
            options: ["Home", "Insert", "Layout", "View"],
            correct: 2,
            hint: "لتغيير حجم الصفحة في برنامج معالج النصوص، استخدم تبويب: Layout"
        },
        {
            question: "You can search for a word from the tab",
            options: ["Home page", "Insert", "Layout", "View"],
            correct: 0,
            hint: "يمكنك البحث عن كلمة من علامة التبويب: Home page (group)"
        },
        {
            question: "You can insert page break, from",
            options: ["Home", "Insert", "Layout", "References"],
            correct: 1,
            hint: "يمكنك إدراج فاصل الصفحات، من تبويب: Insert"
        },
        {
            question: "You can insert breaks, from .......",
            options: ["Home", "Insert", "Layout", "Review"],
            correct: 2,
            hint: "يمكنك إدراج فواصل من تبويب: Layout"
        },
        {
            question: "We can add a chart from photo option",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكننا إضافة مخطط من خيار الصورة (والصحيح تبويب إدراج مجموعة رسوم توضيحية، مخطط Insert, illustrations, chart)"
        },
        {
            question: "You can insert a chart from a photo group.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكنك إدراج مخطط من مجموعة الصور (والصحيح مجموعة رسومات توضيحية illustrations)"
        },
        {
            question: "You can insert a chart from a photo collection.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكنك إدراج مخطط من مجموعة الصور (والصحيح illustrations group)"
        },
        {
            question: "...... is a set of characteristics, such as font name size and color paragraph alignment and style spacing border and shading.",
            options: ["Template", "Layout", "Style", "Format"],
            correct: 2,
            hint: "عبارة عن مجموعة من الخصائص، مثل حجم اسم الخط ومحاذاة الفقرات الملونة وتباعد الأنماط والحدود والتظليل: Style"
        },
        {
            question: "An equation can be inserted from a set of symbols.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يمكن إدراج معادلة من مجموعة من الرموز"
        },
        {
            question: "you can move between changes tracked by the file but can't approve or reject them.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكنك التنقل وتتبع التغييرات في الملف ولكن لا يمكنك الموافقة عليها أو رفضها"
        },
        {
            question: "To add the signature line, from ..... group",
            options: ["Pages", "Tables", "Illustrations", "Text"],
            correct: 3,
            hint: "لإضافة سطر التوقيع من مجموعة: Text"
        },
        {
            question: "A document watermark can made through a group....",
            options: ["Page Setup", "Page Background", "Paragraph", "Styles"],
            correct: 1,
            hint: "يمكن إنشاء علامة مائية للوثيقة من خلال مجموعة: Page Background"
        },
        {
            question: "Paragraph borders appear on the horizontal ruler only by clicking on the beginning of the Paragraph.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تظهر حدود الفقرة على المسطرة الأفقية فقط من خلال النقر على بداية الفقرة (والصحيح الأفقية والعمودية horizontal and vertical)"
        },
        {
            question: "Paragraph borders appear on the horizontal ruler by clicking on the beginning of the Paragraph.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تظهر حدود الفقرة على المسطرة الأفقية من خلال النقر على بداية الفقرة"
        },
        {
            question: "In print page preview mode, you can see all the pages of your document.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) في وضع معاينة صفحة الطباعة، يمكنك رؤية جميع صفحات المستند"
        },
        {
            question: "The document can be saved in different formats except ...",
            options: [".docx", ".pdf", ".txt", ".exe"],
            correct: 3,
            hint: "يمكن حفظ المستند بتنسيقات مختلفة باستثناء: .exe"
        },
        {
            question: "It is possible to control the insertion of a footnote into the word processor from a master tab. (References)",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) من الممكن التحكم في إدراج حاشية سفلية في برنامج معالج الكلمات من التبويب الرئيسية (والصحيح مراجع References)"
        },
        {
            question: "You can insert three dimensional models from ... set",
            options: ["Tables", "illustrations", "Add-ins", "Text"],
            correct: 1,
            hint: "يمكنك إدراج نماذج ثلاثية الأبعاد من مجموعة: illustrations"
        },
        {
            question: "You can translate by selecting the word and and right clicking on it.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يمكنك الترجمة عن طريق تحديد الكلمة ثم النقر عليها بزر الماوس الأيمن"
        },
        {
            question: "A page break can be inserted from Break tab",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يمكن ادراج فاصل صفحة من تبويب فواصل (خطأ لأن قسم فواصل ليس تبوياً بل من مجموعة إعداد الصفحة بتبويب تخطيط او من مجموعة صفحات تبويب إدراج)"
        },
        {
            question: "Used to place frames and shoe them together in a horizontal plane....",
            options: ["New Window", "Arrange all", "Split", "Switch Windows"],
            correct: 1,
            hint: "يستخدم لوضع الإطارات واظهارها معا في مستوى أفقى: Arrange all"
        },
        {
            question: "Allow to move through the pages of document in a structured view...",
            options: ["Navigation pane", "Status bar", "Scroll bar", "Ruler"],
            correct: 0,
            hint: "يسمح بالتنقل عبر صفحات المستند في عرض منظم: Navigation pane"
        },
        {
            question: "The headers and footers were not visible in view",
            options: ["Print layout", "Full Screen", "Draft", "Web Layout"],
            correct: 2,
            hint: "لا يكون الرأس أو التذييل مرئيا في عرض: Draft"
        },
        {
            question: "The default view in the word is the .......",
            options: ["Read Mode", "Print layout", "Web Layout", "Draft"],
            correct: 1,
            hint: "العرض الافتراضي في برنامج معالج النصوص هو: Print layout"
        },
        {
            question: "Cross references are updated automatically.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يتم تحديث المراجع التبادلية تلقائيًا"
        },
        {
            question: "... are text below illustrations ....",
            options: ["Footnotes", "Endnotes", "Captions", "Headers"],
            correct: 2,
            hint: "نص أسفل الرسومات التوضيحية: Captions"
        },
        {
            question: "The method of numbering the footnote cannot be changed to be alphabetically instead of traditional numbers.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) لا يمكن تغيير طريقة ترقيم الحاشية السفلية لتكون أبجدياً بدلاً من الأرقام التقليدية"
        },
        {
            question: "When you click Save selection as a new Quick Style, the style should not be named so that the style you created appears in the style gallery.",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) عند النقر فوق حفظ التحديد كنمط سريع جديد، لا ينبغي تسمية النمط حتى يظهر في معرض الأنماط"
        },
        {
            question: "Status bar contains the number of words in a word processor document.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يحتوي شريط الحالة على عدد الكلمات الموجودة في مستند معالج الكلمات"
        },
        {
            question: "The document is printed or previewed before printing From the View tab. (File and then Print)",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) تتم طباعة المستند أو معاينته قبل الطباعة من علامة التبويب عرض (والصحيح ملف ثم طباعة)"
        },
        {
            question: "A style is a set of characteristics, such as font name size and color paragraph alignment and spacing, borders and shading.",
            options: ["Template", "Layout", "Style", "Format"],
            correct: 2,
            hint: "النمط هو مجموعة من الخصائص، مثل اسم الخط وحجمه ولونه ومحاذاة الفقرات والتباعد والحدود والتظليل: Style"
        },
        {
            question: "The Footnote and Endnote dialog box contains options to control how footnotes and endnotes appear from . master tab. (References)",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يحتوي مربع الحوار على خيارات للتحكم في كيفية ظهور الحواشي والتعليقات من علامة التبويب الرئيسية"
        },
        {
            question: "The Footnote and Endnote dialog box contains options to control how footnotes and endnotes appear from References tab.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يحتوي مربع الحوار على خيارات للتحكم في كيفية ظهور الحواشي السفلية والتعليقات الختامية من علامة التبويب مراجع"
        },
        {
            question: "Start Mail Merge group contains a recipient selection tool (Select Recipients) which allows us to write a new list containing recipient data. (Select Recipient Section)",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تحتوي مجموعة بدء دمج المراسلات على أداة تحديد المستلمين والتي تتيح لنا كتابة قائمة جديدة تحتوي على بيانات المستلمين (المجموعة تحتوي على أقسام وليس أدوات)"
        },
        {
            question: "Start Mail Merge section contains a set of tools that identify the recipients of a message. (Select Recipient)",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) يحتوي قسم بدء دمج المراسلات على مجموعة من الأدوات التي تحدد مستلمى الرسالة"
        },
        {
            question: "In print page preview mode. you can see ...",
            options: ["Current page", "Headers only", "all the pages of your document", "None"],
            correct: 2,
            hint: "في وضع معاينة صفحة الطباعة، يمكنك رؤية: all the pages of your document"
        },
        {
            question: "You can translate a word by clicking on it.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) تستطيع ترجمة كلمة بالضغط عليها"
        },
        {
            question: "Information in the Citations or Manage Sources tool cannot be used to create footnotes or endnotes.",
            options: ["True", "False"],
            correct: 0,
            hint: "(True) لا يمكن استخدام المعلومات في أداة 'الاقتباسات' أو 'إدارة المصادر' لإنشاء الحواشي السفلية أو التعليقات الختامية"
        },
        {
            question: "The document saves with extinction HMT for display on the Web. (htm)",
            options: ["True", "False"],
            correct: 1,
            hint: "(False) يتم حفظ المستند بامتداد HMT لعرضه على الويب (والصحيح htm)"
        },
        {
            question: "To add an additional shape in a SmartArt graphic...",
            options: ["Double click", "Right-click on the shape and choose \"Add Shape\"", "Delete key", "None"],
            correct: 1,
            hint: "لإضافة شكل إضافي في رسم SmartArt: Right-click on the shape and choose \"Add Shape\""
        },
        {
            question: "The position of images in the document is determined by the group ....",
            options: ["Adjust", "Picture Styles", "Arrange", "Size"],
            correct: 2,
            hint: "يتم تحديد موضع الصور في المستند من خلال المجموعة: Arrange"
        },
        {
            question: "To view the origin of the merged fields, we choose ...",
            options: ["Highlight fields", "Match Fields", "Update Labels", "Find Recipient"],
            correct: 0,
            hint: "لكي يتم مشاهدة أصل الحقول التي تم دمجها نختار: Highlight fields"
        },

        // =========================================================================
        // ثالثاً: جزء أسئلة التوصيل والاختصارات (Matching & Shortcuts)
        // =========================================================================
        {
            question: "What is the shortcut for Bold text?",
            options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + C"],
            correct: 0,
            hint: "Ctrl + B لعمل نص عريض (Bold text)"
        },
        {
            question: "What is the shortcut to replace a word?",
            options: ["Ctrl + F", "Ctrl + H", "Ctrl + Z", "Ctrl + V"],
            correct: 1,
            hint: "Ctrl + H لاستبدال كلمة (To replace a word)"
        },
        {
            question: "What is the shortcut for Italic text?",
            options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + X"],
            correct: 1,
            hint: "Ctrl + I لعمل نص مائل (Italic text)"
        },
        {
            question: "What is the shortcut to paste a word?",
            options: ["Ctrl + C", "Ctrl + P", "Ctrl + V", "Ctrl + X"],
            correct: 2,
            hint: "Ctrl + V للصق كلمة (To paste a word)"
        },
        {
            question: "What is the shortcut for Underlined text?",
            options: ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + Shift"],
            correct: 0,
            hint: "Ctrl + U لوضع خط تحت النص (Underlined text)"
        },
        {
            question: "What is the shortcut to copy a word?",
            options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + A"],
            correct: 2,
            hint: "Ctrl + C لنسخ كلمة (To copy a word)"
        },
        {
            question: "What is the shortcut to return to previous action (Undo)?",
            options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + R"],
            correct: 1,
            hint: "Ctrl + Z للتراجع عن الإجراء السابق (Return to previous)"
        },
        {
            question: "What is the shortcut to search for a word?",
            options: ["Ctrl + H", "Ctrl + S", "Ctrl + F", "Ctrl + N"],
            correct: 2,
            hint: "Ctrl + F للبحث عن كلمة (To search for a word)"
        }
    ]
};