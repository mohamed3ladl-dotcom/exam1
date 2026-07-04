// بنك أسئلة مادة العروض التقديمية PowerPoint - اختبارات التحول الرقمي 2026
// يتضمن أسئلة د. أحمد عمارة (67 سؤالاً) وأسئلة د. مليكة علاء لطفي (76 سؤالاً) بالتفصيل الكامل

const powerData = {
    title: "PowerPoint Presentations (العروض التقديمية)",
    
    // ==========================================
    // الجزء الأول: أسئلة الدكتور أحمد عمارة (67 سؤالاً)
    // ==========================================
    drAmaraQuestions: [
        {
            question: "When you create a new blank presentation, begins with a slide whose layout is the title slide.",
            options: ["True", "False"],
            correct: 0,
            hint: "عند إنشاء عرض تقديمي جديد فارغ، يبدأ بشريحة يكون تخطيطها شريحة العنوان. (صواب)"
        },
        {
            question: "When you create a new, blank presentation, the title slide layout name begins with one slide (begins with one slide called a title slide).",
            options: ["True", "False"],
            correct: 1,
            hint: "عند إنشاء عرض تقديمي جديد فارغ، يبدأ اسم تخطيط شريحة العنوان بشريحة واحدة تسمى شريحة عنوان. (خطأ - التسمية الافتراضية هي شريحة العنوان مباشرة)"
        },
        {
            question: "One element can carry more than one movement.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن أن يكون للعنصر الواحد أكثر من حركة. (صواب)"
        },
        {
            question: "The main bar includes commands for references.",
            options: ["True", "False"],
            correct: 1,
            hint: "يتضمن الشريط الرئيسي أوامر للمراجع. (خطأ - لا يتضمن)"
        },
        {
            question: "Why use outline view?",
            options: [
                "To format table border style layouts.",
                "To edit bulleted addresses and texts rapidly.",
                "To insert high-resolution photography models.",
                "To record audio narrations across current presentation views."
            ],
            correct: 1,
            hint: "لماذا تستخدم عرض المخطط التفصيلي؟ لتعديل العناوين النقطية والنصوص بسرعة."
        },
        {
            question: "To change the table style from ... tab.",
            options: ["Design", "Insert", "Transitions", "View"],
            correct: 0,
            hint: "لتغيير نمط الجدول نختار علامة التبويب: Design (تصميم)."
        },
        {
            question: "To change the table style, we click Table Tools/Design tab, then select the table style you want.",
            options: ["True", "False"],
            correct: 0,
            hint: "لتغيير نمط الجدول، ننقر فوق علامة التبويب أدوات الجدول - التصميم، ثم نحدد نمط الجدول الذي نريده. (صواب)"
        },
        {
            question: "How can you save layouts, colors, fonts, effects, background styles, and content for others to use with their presentations?",
            options: [
                "Export the file as a template",
                "Save the document configuration as a PDF document",
                "Synchronize file elements using Microsoft OneDrive storage",
                "Convert the slides interface setup into grayscale printing options"
            ],
            correct: 0,
            hint: "كيف يمكنك حفظ التخطيطات والألوان والخطوط والتأثيرات وأنماط الخلفية والمحتوى ليستخدمها الآخرون؟ تصدير الملف كقالب (Export the file as a template)."
        },
        {
            question: "When splitting slides into sections, we can collapse, expand, rename or remove section.",
            options: ["True", "False"],
            correct: 0,
            hint: "عند تقسيم الشرائح إلى أقسام، يمكننا ضغط القسم أو توسيعه أو إعادة تسميته أو إزالته. (صواب)"
        },
        {
            question: "You can add a chart or graph to a slide using the View tab.",
            options: ["True", "False"],
            correct: 1,
            hint: "يمكنك إضافة مخطط أو رسم بياني إلى شريحة باستخدام علامة التبويب 'عرض'. (خطأ - الصحيح من تبويب إدراج Insert)"
        },
        {
            question: "The order of items within a slide can be changed by changing the order of the slides.",
            options: ["True", "False"],
            correct: 1,
            hint: "يمكن تغيير ترتيب العناصر داخل الشريحة عن طريق تغيير ترتيب الشرائح. (خطأ - تغيير ترتيب الشرائح يغير الشرائح نفسها وليس العناصر الداخلية)"
        },
        {
            question: "To record the screen, we click ...",
            options: [
                "Insert -> Screen Recording",
                "Design -> Apply Background",
                "View -> Slide Sorter View",
                "Playback -> Trim Media Layout"
            ],
            correct: 0,
            hint: "لتسجيل الشاشة نضغط على: Insert -> Screen Recording (إدراج ثم تسجيل الشاشة)."
        },
        {
            question: "How do you resize a table after inserting it?",
            options: [
                "Dragging edges",
                "Clicking Ctrl + T on keyboard",
                "Modifying font style definitions",
                "Applying background formatting templates"
            ],
            correct: 0,
            hint: "كيف يمكنك تغيير حجم الجدول بعد إدراجه؟ سحب الحواف (Dragging edges)."
        },
        {
            question: "From one of the ways to create a presentation, press the Windows key (Windows 10) and then choose PowerPoint.",
            options: ["True", "False"],
            correct: 0,
            hint: "من إحدى طرق إنشاء عرض تقديمي اضغط على مفتاح Windows ثم اختر PowerPoint. (صواب)"
        },
        {
            question: "There are ... ways to insert a new slide.",
            options: ["1 way", "2 ways", "3 ways", "4-5 ways"],
            correct: 3,
            hint: "يوجد ... طرق لإضافة شريحة جديدة: 4-5 طرق."
        },
        {
            question: "There is only one way to insert a new blank slide for your presentation.",
            options: ["True", "False"],
            correct: 1,
            hint: "هناك طريقة واحدة فقط لإدراج شريحة فارغة جديدة لعرضك التقديمي. (خطأ - توجد عدة طرق)"
        },
        {
            question: "The appropriate tab to change the background color of a table cell in PowerPoint is:",
            options: ["Table Design (Design)", "Insert tab", "View configuration", "Home menu"],
            correct: 0,
            hint: "علامة التبويب المناسبة لتغيير لون الخلفية لخلية الجدول في PowerPoint هي: Table Design (أدوات الجدول - تصميم)."
        },
        {
            question: "When you save a presentation to a .potx, what kind of PowerPoint file is generated?",
            options: ["Template", "Video file", "Grayscale handout", "WordArt schema"],
            correct: 0,
            hint: "عند حفظ عرض تقديمي بامتداد potx ما نوع ملف PowerPoint الناتج؟ قالب (Template)."
        },
        {
            question: "To animate a three-dimensional model in slides, you should ...",
            options: [
                "Click and drag",
                "Press Ctrl + T on the keyboard layout",
                "Choose reference commands from the main bar",
                "Convert the shape background to solid colors"
            ],
            correct: 0,
            hint: "لتحريك نموذج ثلاثي الأبعاد في الشرائح: اضغط واسحب (Click and drag)."
        },
        {
            question: "What command is used to add animation effects to items on slides?",
            options: ["Add effects", "Table Design", "Transitions tab", "Outline structure"],
            correct: 0,
            hint: "ما الأمر المستخدم لإضافة تأثيرات الرسوم المتحركة إلى العناصر الموجودة على الشرائح؟ إضافة تأثيرات (Add effects)."
        },
        {
            question: "... is a set of pre-made fonts, colors and special effects that complement each other.",
            options: ["Design / Themes", "Format background", "Video formatting", "SmartArt layouts"],
            correct: 0,
            hint: "مجموعة من الخطوط المعدة مسبقاً والألوان والمؤثرات الخاصة التي تكمل بعضها البعض: التصميم / النسق (Design / Themes)."
        },
        {
            question: "What happens when I press the Esc key while playing a slideshow from the current slide or from the beginning?",
            options: [
                "Slideshow ends",
                "The table styles are inverted automatically",
                "Background effects freeze instantly",
                "The presentation template format resets"
            ],
            correct: 0,
            hint: "ماذا يحدث عندما أضغط على مفتاح Esc أثناء تشغيل عرض الشرائح من الشريحة الحالية أو من البداية؟ ينتهي عرض الشرائح (Slideshow ends)."
        },
        {
            question: "To format the background of a specific slide or group of slides by tab ... then ...",
            options: [
                "Design then Format Background (Apply to selected)",
                "View then Slide Sorter configuration",
                "Home tab then choose drawing outline group",
                "Insert tab then select Multiple Icons layout"
            ],
            correct: 0,
            hint: "لتنسيق خلفية شريحة أو مجموعة شرائح محددة بواسطة علامة التبويب: Design ثم Format Background لتطبيقها على الشريحة المحددة فقط وليس الكل."
        },
        {
            question: "After making a wide range of formatting for colors, fonts and effects, they can be saved in a specific format on the computer to be used later.",
            options: ["True", "False"],
            correct: 0,
            hint: "بعد إجراء مجموعة واسعة من التنسيقات للألوان والخطوط والتأثيرات، يمكن حفظها بتنسيق معين على الكمبيوتر لاستخدامها لاحقاً. (صواب)"
        },
        {
            question: "In the 'Sound' group, you can control the duration of the transition and even determine the sound that plays during the transition.",
            options: ["True", "False"],
            correct: 1,
            hint: "في المجموعة 'الصوت'، يمكنك التحكم في مدة الانتقال وحتى تحديد الصوت الذي يتم تشغيله أثناء الانتقال. (خطأ - التحكم في المدة يكون من مجموعة التوقيت Timing)"
        },
        {
            question: "The language of the program interface can be changed by tabbing the transitions.",
            options: ["True", "False"],
            correct: 1,
            hint: "تغيير لغة واجهة البرنامج عن طريق الضغط على علامة التبويب للانتقالات. (خطأ - الصحيح يتم من قائمة ملف File)"
        },
        {
            question: "The presentation file can be saved as a video file.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن حفظ ملف العرض التقديمي كملف فيديو. (صواب)"
        },
        {
            question: "Animations can change the size and color of an element within a slide.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن للحركات أن تغير حجم ولون العنصر داخل الشريحة. (صواب)"
        },
        {
            question: "You can save the PowerPoint file on OneDrive to access it from any device and from anywhere.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكنك حفظ ملف العرض التقديمي على OneDrive للوصول إليه من أي جهاز ومن أي مكان. (صواب)"
        },
        {
            question: "Formatting and layout freeze when saving presentation as a ... file.",
            options: ["PDF", "PPTX", "POTX", "GIF"],
            correct: 0,
            hint: "يتجمد التنسيق والتخطيط عند حفظ العرض التقديمي كملف: PDF."
        },
        {
            question: "To save the presentation in the latest presentation format, we choose to save with the extension ....",
            options: [".pptx", ".ppt", ".pps", ".potx"],
            correct: 0,
            hint: "لحفظ العرض التقديمي بأحدث تنسيق نختار الحفظ بامتداد: .pptx"
        },
        {
            question: "To save the presentation for PowerPoint show, we choose ...",
            options: [".ppsx", ".ppt", ".txt", ".pdf"],
            correct: 0,
            hint: "لحفظ العرض التقديمي بأحدث تنسيق للعرض المباشر نختار الحفظ بامتداد: .ppsx"
        },
        {
            question: "To save the presentation to a previous version of PowerPoint, we choose to save with the extension ...",
            options: [".ppt", ".pptx", ".potx", ".ppsx"],
            correct: 0,
            hint: "لحفظ العرض التبديمي إلى إصدار سابق من بوربوينت نختار الحفظ بامتداد: .ppt"
        },
        {
            question: "To save the presentation to a previous version for PowerPoint show, we choose ...",
            options: [".pps", ".ppsx", ".pptx", ".potx"],
            correct: 0,
            hint: "لحفظ العرض التقديمي في إصدار سابق من PowerPoint للعرض نختار الحفظ بالامتداد: .pps"
        },
        {
            question: "The presentation can be printed in grayscale.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن طباعة العرض التقديمي بتدرج الرمادي. (صواب)"
        },
        {
            question: "Animations have 5 types in PowerPoint.",
            options: ["True", "False"],
            correct: 1,
            hint: "يوجد خمس مجموعات من الحركات في برنامج البوربوينت. (خطأ - يوجد أربع مجموعات 4)"
        },
        {
            question: "To do background formatting from a view tab you can apply the background to the selected slide only or apply it to all slides by pressing the command (apply to All).",
            options: ["True", "False"],
            correct: 1,
            hint: "للقيام بتنسيق الخلفية من علامة تبويب عرض، يمكنك تطبيق الخلفية على الشريحة المحددة فقط أو تطبيقها على جميع الشرائح بالضغط على الأمر تطبيق على الكل. (خطأ - يتم ذلك من تبويب تصميم Design وليس عرض)"
        },
        {
            question: "To adjust the brightness and contrast in the picture press the color balance tool.",
            options: ["True", "False"],
            correct: 1,
            hint: "لضبط السطوع والتباين في الصورة اضغط على أداة توازن الألوان. (خطأ - نستخدم أداة تحسين أو تصحيح Corrections)"
        },
        {
            question: "To add an icon in the slide, click ...",
            options: [
                "the insert tab and choose the icon",
                "the design menu and modify layout options",
                "the home tab within drawing shapes group",
                "the view option to manage custom graphics"
            ],
            correct: 0,
            hint: "لإضافة أيقونة في الشريحة، انقر: علامة التبويب إدراج واختيار أيقونة (the insert tab and choose the icon)."
        },
        {
            question: "The chart title appears in the slide below the chart.",
            options: ["True", "False"],
            correct: 1,
            hint: "يظهر عنوان المخطط في الشريحة أسفل المخطط. (خطأ - يظهر في الأعلى Above افتراضياً)"
        },
        {
            question: "When you insert a shape to the slide, it appears automatically.",
            options: ["True", "False"],
            correct: 1,
            hint: "عندما تقوم بإدراج شكل في الشريحة، فإنه يظهر تلقائياً. (خطأ - يجب أن تقوم برسمه draw it يدوياً)"
        },
        {
            question: "One of printing colors available to print the presentation file is to print in blue only.",
            options: ["True", "False"],
            correct: 1,
            hint: "أحد ألوان الطباعة المتوفرة لطباعة ملف العرض التقديمي هو الطباعة باللون الأزرق فقط. (خطأ - الخيارات هي ملون، تدرج رمادي، أو أسود وأبيض)"
        },
        {
            question: "To change the color of the SmartArt graphic, use ...",
            options: ["The Format / Design tab", "The references main bar", "The windows layout panel", "The text box configuration"],
            correct: 0,
            hint: "لتغيير لون رسم SmartArt نستخدم علامة التبويب: Format / Design."
        },
        {
            question: "To add an ... in a SmartArt graphic Right-click on the shape and choose Add Shape.",
            options: ["additional shape", "embedded video file", "online hyperlinked picture", "automatic chart reference"],
            correct: 0,
            hint: "في رسم SmartArt لإضافة شكل إضافي انقر بزر الماوس الأيمن على الشكل واختر إضافة شكل (additional shape)."
        },
        {
            question: "To add an additional shape in a SmartArt graphic:",
            options: [
                "Right-click on the shape and choose 'Add Shape'",
                "Press Ctrl + T on your keyboard layout",
                "Click on View tab and choose slide section layout",
                "Drag the edges of the text box layout dynamically"
            ],
            correct: 0,
            hint: "لإضافة شكل إضافي في رسم SmartArt: انقر بزر الماوس الأيمن على الشكل واختر 'إضافة شكل'."
        },
        {
            question: "Slide transition is the visual effect that occurs when moving from one slide to another.",
            options: ["True", "False"],
            correct: 0,
            hint: "انتقال الشريحة هو التأثير المرئي الذي يحدث عند الانتقال من شريحة إلى أخرى. (صواب)"
        },
        {
            question: "To add 3D effects to the shape, click on format and shape effect.",
            options: ["True", "False"],
            correct: 0,
            hint: "لإضافة تأثيرات ثلاثية الأبعاد إلى الشكل، انقر فوق التنسيق وتأثير الشكل. (صواب)"
        },
        {
            question: "The background of the current slide can be filled with an image from your computer or an image download from the internet.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن ملء خلفية الشريحة الحالية بصورة من جهاز الكمبيوتر الخاص بك أو بصورة محملة من الإنترنت. (صواب)"
        },
        {
            question: "You can insert multiple icons at the same time.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكنك إدراج أيقونات متعددة في نفس الوقت. (صواب)"
        },
        {
            question: "Click on .... to add WordArt.",
            options: ["Insert", "Design", "Transitions", "Format"],
            correct: 0,
            hint: "انقر على تبويب إدراج (Insert) لإضافة وورد آرت."
        },
        {
            question: "You can apply background formatting from the .. tab.",
            options: ["Design", "View", "Home", "Animations"],
            correct: 0,
            hint: "يمكنك تطبيق تنسيق الخلفية من علامة التبويب: Design (تصميم)."
        },
        {
            question: "To trim the edge of media, click on Trim Video from the tab ..",
            options: ["Playback options", "Insert configurations", "Table tools design", "Format text layout"],
            correct: 0,
            hint: "لقص حافة أو توقيت الوسائط، انقر فوق 'قص الفيديو' من علامة تبويب: Playback (خيارات التشغيل)."
        },
        {
            question: "To change the order of shapes in a SmartArt graphic, Click Ctrl + T on your keyboard.",
            options: ["True", "False"],
            correct: 1,
            hint: "لتغيير ترتيب الأشكال في رسم SmartArt، انقر فوق Ctrl + T على لوحة المفاتيح. (خطأ - الاختصار Ctrl + T مخصص لتنسيق الخطوط Font)"
        },
        {
            question: "To open previously saved presentation file, we press the keys ctrl + O.",
            options: ["True", "False"],
            correct: 0,
            hint: "لفتح ملف العرض التقديمي المحفوظ سابقاً نضغط على المفاتيح: Ctrl + O. (صواب)"
        },
        {
            question: "The appropriate view can be chosen from a set of Presentation Views methods commands such as Normal and Slide Sorter and Notes Page.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن اختيار العرض المناسب من مجموعة أوامر طرق عرض العرض التقديمي مثل طريقة العرض العادي وفارز الشرائح وصفحة الملاحظات. (صواب)"
        },
        {
            question: "The most common type of Picture formats used in online presentations is GIF.",
            options: ["True", "False"],
            correct: 0,
            hint: "النوع الأكثر شيوعاً من تنسيقات الصور المستخدمة في العروض التقديمية عبر الإنترنت بتنسيق GIF. (صواب وفقاً للمعتمد في هذا الجزء من المذكرة)"
        },
        {
            question: "The Purpose of The Table Design Tab PowerPoint is to ...",
            options: [
                "Customize table formatting",
                "Insert screen recording video modules",
                "Animate a three-dimensional model directly",
                "Apply background configurations to selected slides"
            ],
            correct: 0,
            hint: "الغرض من علامة تبويب تصميم الجدول هو: تخصيص وتعديل تنسيق الجدول (Customize table formatting)."
        },
        {
            question: "This layout contains the main title and subtitle:",
            options: ["Title slide", "Blank layout", "Outline view template", "Section division layout"],
            correct: 0,
            hint: "يحتوي هذا التخطيط على العنوان الرئيسي والعنوان الفرعي: شريحة العنوان (Title slide)."
        },
        {
            question: "You can use ...... to delete border between table cells.",
            options: ["Eraser", "WordArt", "Text box", "Hyperlink"],
            correct: 0,
            hint: "لحذف الحدود بين خلايا الجدول يمكنك استخدام أداة: الممحاة (Eraser)."
        },
        {
            question: "The text you add becomes part of the shape and if you rotate the shape the text will also rotate.",
            options: ["True", "False"],
            correct: 0,
            hint: "يصبح النص الذي تضيفه جزءاً من الشكل، وإذا قمت بتدوير الشكل، فسيتم تدوير النص أيضاً. (صواب)"
        },
        {
            question: "To add graphs, click ...",
            options: [
                "Insert and then chart",
                "Design and choose theme layout",
                "Format shapes within drawing group",
                "Playback and apply audio options"
            ],
            correct: 0,
            hint: "لإضافة الرسوم البيانية، اضغط على: Insert and then chart (إدراج ثم مخطط)."
        },
        {
            question: "The best practice for using picture in presentation to ensure audience appeal is to avoid pictures.",
            options: ["True", "False"],
            correct: 1,
            hint: "أفضل ممارسة لاستخدام الصورة في العرض التقديمي لضمان جاذبية الجمهور هي تجنب الصور كلياً. (خطأ)"
        },
        {
            question: "The best practice for using picture in presentation to ensure audience appeal is to avoid too many pictures.",
            options: ["True", "False"],
            correct: 0,
            hint: "أفضل ممارسة لاستخدام الصورة في العرض التقديمي لضمان جاذبية الجمهور هي تجنب الصور الكثيرة جداً. (صواب - لأن كثرتها تشتت الانتباه)"
        },
        {
            question: "It is best to avoid mixing drawn images with photographs.",
            options: ["True", "False"],
            correct: 0,
            hint: "يفضل تجنب خلط الصور المرسومة (الكارتونية) مع الصور الفوتوغرافية الطبيعية في نفس العرض العرض التقديمي. (صواب)"
        },
        {
            question: "The shape outline on the Home tab in ......... group.",
            options: ["Drawing", "Font", "Paragraph", "Clipboard"],
            correct: 0,
            hint: "أمر حدود (إطار) الشكل يقع في علامة التبويب الصفحة الرئيسية في مجموعة: رسم (Drawing)."
        },
        {
            question: "is used to navigate from the current page to another Web Site or File.",
            options: ["Hyperlink", "Eraser", "SmartArt graphic", "Outline view"],
            correct: 0,
            hint: "يُستخدم للتنقل من الصفحة الحالية إلى موقع ويب آخر أو ملف: الارتباط التشعبي (Hyperlink)."
        },
        {
            question: "If you want to add a comment about chart you can use ......",
            options: ["Text box", "Hyperlink", "Eraser", "WordArt"],
            correct: 0,
            hint: "إذا كنت ترغب في إضافة تعليق أو نص توضيحي حول المخطط يمكنك استخدام: مربع نص (Text box)."
        }
    ],

    // ===========================================
    // الجزء الثاني: أسئلة الدكتورة مليكة (76 سؤالاً)
    // ===========================================
    drMalikaQuestions: [
        {
            question: "When you insert a shape to the slide, it appears automatically.",
            options: ["True", "False"],
            correct: 1,
            hint: "عند إدراج شكل في الشريحة فإنه يظهر تلقائياً. (خطأ - يجب رسمه يدوياً وفقاً للقواعد المعتمدة)"
        },
        {
            question: "One element can carry more than one movement.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن أن يكون للعنصر الواحد أكثر من حركة. (صواب)"
        },
        {
            question: "The main bar includes commands for references.",
            options: ["True", "False"],
            correct: 1,
            hint: "يتضمن الشريط الرئيسي أوامر المراجع. (خطأ - لا يتضمن في الباوربوينت)"
        },
        {
            question: "To change the table style, we click Table Tools/Design tab, then select the table style you want.",
            options: ["True", "False"],
            correct: 0,
            hint: "لتغيير نمط الجدول نضغط فوق علامة تبويب أدوات الجدول - تصميم ثم نحدد نمط الجدول الذي نريده. (صواب)"
        },
        {
            question: "When splitting slides into sections, we can collapse, expand, rename or remove section.",
            options: ["True", "False"],
            correct: 0,
            hint: "عند تقسيم الشرائح إلى أقسام يمكننا ضغط القسم أو توسيعه أو إعادة تسميته أو إزالته. (صواب)"
        },
        {
            question: "You can add a chart or graph to a slide using the View tab.",
            options: ["True", "False"],
            correct: 1,
            hint: "يمكن إضافة مخطط أو رسم بياني إلى الشريحة باستخدام علامة تبويب عرض. (خطأ - من تبويب إدراج Insert)"
        },
        {
            question: "The order of items within a slide can be changed by changing the order of the slides.",
            options: ["True", "False"],
            correct: 1,
            hint: "يمكن تغيير ترتيب العناصر داخل الشريحة عن طريق تغيير ترتيب الشرائح. (خطأ - يغير ترتيب الشرائح ككل فقط)"
        },
        {
            question: "From one of the ways to create a presentation, press the Windows key (Windows 10) and then choose PowerPoint.",
            options: ["True", "False"],
            correct: 0,
            hint: "من إحدى طرق إنشاء العروض التقديمية الضغط على مفتاح Windows ثم اختر PowerPoint. (صواب)"
        },
        {
            question: "The appropriate view can be chosen from a set of Presentation Views methods commands such as Normal and Slide Sorter and Notes Page.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن اختيار طريقة العرض المناسبة من مجموعة أوامر طرق العرض التقديمي مثل طريقة العرض العادي وفارز الشرائح وصفحة الملاحظات. (صواب)"
        },
        {
            question: "There is only one way to insert a new blank slide for your presentation.",
            options: ["True", "False"],
            correct: 1,
            hint: "هناك طريقة واحدة فقط لإدراج شريحة فارغة جديدة لعرضك التقديمي. (خطأ - توجد عدة طرق تتراوح بين 4 إلى 5 طرق)"
        },
        {
            question: "When you create a new, blank presentation, the title slide layout name begins with one slide.",
            options: ["True", "False"],
            correct: 1,
            hint: "عند إنشاء عرض تقديمي جديد فارغ يبدأ اسم تخطيط شريحة العنوان بشريحة واحدة. (خطأ - يبدأ بنوع تخطيط شريحة العنوان مباشرة Title Slide)"
        },
        {
            question: "After making a wide range of formatting for colors, fonts and effects they can be saved in a specific format on the computer to be used later.",
            options: ["True", "False"],
            correct: 0,
            hint: "بعد إجراء مجموعة واسعة من التنسيقات للألوان والخطوط والتأثيرات يمكن حفظها بتنسيق معين على الكمبيوتر لاستخدامها لاحقاً. (صواب)"
        },
        {
            question: "In the 'Sound' group, you can control the duration of the transition and even determine the sound that, plays during the transition.",
            options: ["True", "False"],
            correct: 1,
            hint: "في مجموعة الصوت يمكنك التحكم في مدة الانتقال وحتى تحديد الصوت الذي يتم تشغيله أثناء الانتقال. (خطأ - التحكم في المدة يتبع لمجموعة التوقيت Timing)"
        },
        {
            question: "The language of the program interface can be changed by tabbing the Transitions.",
            options: ["True", "False"],
            correct: 1,
            hint: "يمكن تغيير لغة واجهة البرنامج عن طريق الضغط على علامة التبويب انتقالات. (خطأ - يتم من قائمة ملف File)"
        },
        {
            question: "The presentation file can be saved as a video file.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن حفظ ملف العرض التقديمي كملف فيديو. (صواب)"
        },
        {
            question: "Animations can change the size and color of an element within a slide.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن للحركات أن تغير لون وحجم العنصر داخل الشريحة. (صواب)"
        },
        {
            question: "You can save the PowerPoint file on OneDrive to access it from any device and from anywhere.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن حفظ ملف العرض التقديمي على OneDrive للوصول إليه من أي جهاز أو من أي مكان. (صواب)"
        },
        {
            question: "The presentation can be printed in grayscale.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن طباعة العرض التقديمي بتدرج رمادي. (صواب)"
        },
        {
            question: "Animations have 5 types in PowerPoint.",
            options: ["True", "False"],
            correct: 1,
            hint: "يوجد 5 مجموعات من الحركات في باوربوينت. (خطأ - يوجد 4 مجموعات فقط)"
        },
        {
            question: "Slide transition is the visual effect that occurs when moving from one slide to another.",
            options: ["True", "False"],
            correct: 0,
            hint: "انتقال الشريحة هو التأثير المرئي الذي يحدث عند الانتقال من شريحة إلى أخرى. (صواب)"
        },
        {
            question: "To do background formatting from a view tab, you can apply the background to the selected slide only or apply it to all slides by pressing the command (apply to All).",
            options: ["True", "False"],
            correct: 1,
            hint: "لتنسيق الخلفية من تبويب عرض، يمكنك تطبيق الخلفية على الشريحة المحددة فقط أو تطبيقها على جميع الشرائح بالضغط على الأمر (تطبيق على الكل). (خطأ - يتم من تبويب تصميم Design)"
        },
        {
            question: "The chart title appears in the slide below the chart.",
            options: ["True", "False"],
            correct: 1,
            hint: "يظهر عنوان المخطط في الشريحة أسفل المخطط. (خطأ - يظهر في الأعلى)"
        },
        {
            question: "You can insert multiple icons at the same time.",
            options: ["True", "False"],
            correct: 0,
            hint: "يمكن إدراج أيقونات متعددة في نفس الوقت. (صواب)"
        },
        {
            question: "To adjust the brightness and contrast in the picture press the color balance tool.",
            options: ["True", "False"],
            correct: 1,
            hint: "لضبط السطوع والتباين في الصورة اضغط على أداة توازن الألوان. (خطأ - من أداة تحسين وتصحيح Corrections)"
        },
        {
            question: "One of printing colors available to print the presentation file is to print in blue only.",
            options: ["True", "False"],
            correct: 1,
            hint: "لطباعة ملف العرض التقديمي ألوان الطباعة المتوفرة هو الطباعة باللون الأزرق فقط. (خطأ)"
        },
        {
            question: "To add 3D effects to the shape, click on format and shape effect.",
            options: ["True", "False"],
            correct: 0,
            hint: "لإضافة تأثيرات ثلاثية الأبعاد إلى الشكل اضغط على تنسيق ثم تأثيرات الأشكال. (صواب)"
        },
        {
            question: "To change the order shape in a SmartArt graphic Click CTRL + T on your keyboard.",
            options: ["True", "False"],
            correct: 1,
            hint: "أمر تغيير الشكل في رسم سمارت آرت الضغط فوق CTRL + T في لوحة المفاتيح. (خطأ - الاختصار لتنسيق الخط)"
        },
        {
            question: "The background of the current slide can be filled with an image from your computer or an image download from the internet.",
            options: ["True", "False"],
            correct: 0,
            hint: "خلفية الشريحة الحالية يمكن ملؤها بصورة من جهاز الكمبيوتر الخاص بك أو بصورة محملة من الإنترنت. (صواب)"
        },
        {
            question: "When splitting slides into sections, we can collapse, expand, rename or remove sections.",
            options: ["True", "False"],
            correct: 0,
            hint: "عند تقسيم الشرائح إلى أقسام يمكن طي الأقسام أو توسيعها أو إعادة تسميتها أو إزالتها. (صواب)"
        },
        {
            question: "In the Sound group you can control the duration of the transition and even determine the sound that plays the transition.",
            options: ["True", "False"],
            correct: 1,
            hint: "في مجموعة الصوت يمكنك التحكم في مدة الانتقال وتحديد الصوت الذي يقوم بتشغيل عند الانتقال. (خطأ - التحكم بالمدة يتبع لمجموعة التوقيت)"
        },
        {
            question: "To open previously saved presentation file we press the keys CTRL+O.",
            options: ["True", "False"],
            correct: 0,
            hint: "لفتح ملف العرض التقديمي المحفوظ سابقاً اضغط على مفاتيح CTRL + O. (صواب)"
        },
        {
            question: "The most common type of Picture formats used in online presentations in GIF.",
            options: ["True", "False"],
            correct: 0,
            hint: "امتداد الصور الأكثر شيوعاً من تنسيقات الصور المستخدمة في العروض التقديمية عبر الإنترنت بامتداد GIF. (صواب)"
        },
        {
            question: "The best practice for using picture in presentation to ensure audience appeal is to avoid pictures.",
            options: ["True", "False"],
            correct: 1,
            hint: "أفضل ممارسة لضمان جاذبية الجمهور للعرض التقديمي هي تجنب استخدام الصور. (خطأ)"
        },
        {
            question: "The text you add becomes part of the shape and if you rotate the shape the text will also rotate.",
            options: ["True", "False"],
            correct: 0,
            hint: "النص الذي تضيفه يصبح جزءاً من الشكل وإذا قمت بتدوير الشكل، فسيتم تدوير النص أيضاً. (صواب)"
        },
        {
            question: "It is best to avoid mixing drawn images with photographs.",
            options: ["True", "False"],
            correct: 0,
            hint: "يفضل تجنب خلط الصور المرسومة مع الصور الفوتوغرافية. (صواب)"
        },
        {
            question: "The best practice for using picture in presentation to ensure audience appeal is to avoid too many pictures.",
            options: ["True", "False"],
            correct: 0,
            hint: "أفضل ممارسة لاستخدام الصورة في العروض التقديمية لضمان جاذبية الجمهور هي تجنب الصور الكثيرة. (صواب)"
        },
        {
            question: "To change the color of the SmartArt, we use:",
            options: ["Format / Design tab", "View bar", "Transitions panel", "Home text menu"],
            correct: 0,
            hint: "لتغيير لون سمارت آرت نختار تبويب التنسيق أو التصميم للرسم."
        },
        {
            question: "... is a set of pre-made fonts, colors and special effects that complement each other.",
            options: ["Design / Themes", "Format text layout", "Insert chart tools", "Playback options menu"],
            correct: 0,
            hint: "مجموعة من الخطوط المعدة مسبقاً والألوان والمؤثرات الخاصة التي تكمل بعضها البعض: علامة تبويب التصميم (Design / Themes)."
        },
        {
            question: "To save the presentation in the latest presentation format, we choose to save with the extension:",
            options: ["*.pptx", "*.ppt", "*.pps", ".potx"],
            correct: 0,
            hint: "لحفظ العرض التقديمي بأحدث تطبيق نختار الحفظ بامتداد: *.pptx"
        },
        {
            question: "To save the presentation to a previous version for PowerPoint show, we choose:",
            options: ["*.pps", "*.ppsx", "*.pptx", "*.ppt"],
            correct: 0,
            hint: "لحفظ العرض التقديمي إلى إصدار سابق من باوربوينت للعرض نختار الحفظ بامتداد: *.pps"
        },
        {
            question: "Why use outline view?",
            options: [
                "To edit bulleted addresses and texts",
                "To apply background 3D effects",
                "To draw shapes automatically inside slides",
                "To erase specific cell borders inside a table"
            ],
            correct: 0,
            hint: "لماذا تستخدم طريقة عرض المخطط التفصيلي؟ لتعديل العناوين النقطية والنصوص."
        },
        {
            question: "How can you save layouts, colors, fonts, effects, background styles, and content for others to use with their presentations?",
            options: [
                "Export the file as a template",
                "Save presentation layout freeze as PDF file",
                "Insert graphs from external internet connections",
                "Change program interface using transitions tab"
            ],
            correct: 0,
            hint: "كيف يمكنك حفظ التخطيطات والألوان والخطوط والتأثيرات وأنماط الخلفية والمحتوى ليتم استخدامه من جانب الآخرين في عروضهم التقديمية؟ تصدير الملف كقالب (Export the file as a template)."
        },
        {
            question: "To record the screen, we click:",
            options: [
                "Insert -> Screen Recording",
                "Design -> Background layout",
                "Playback -> Trim video timeline",
                "Home -> Drawing shape outline"
            ],
            correct: 0,
            hint: "لتسجيل الشاشة نضغط على: Insert -> Screen Recording (إدراج ثم تسجيل الشاشة)."
        },
        {
            question: "How do you resize a table after inserting it?",
            options: ["Dragging edges", "Pressing CTRL+T", "Using Eraser tool", "Applying View layouts"],
            correct: 0,
            hint: "كيف يمكنك تغيير حجم الجدول بعد إدراجه؟ سحب الحواف (Dragging edges)."
        },
        {
            question: "What command is used to add animation effects to items on slides?",
            options: ["Add effects", "Format background", "Table design style", "SmartArt arrangement"],
            correct: 0,
            hint: "ما الأمر المستخدم في إضافة تأثيرات الرسوم المتحركة إلى العنصر الموجود على الشريحة؟ إضافة تأثيرات (Add effects)."
        },
        {
            question: "The appropriate tab to change the background color of a table cell in PowerPoint is:",
            options: ["Tab Tables / Table Design", "Insert charts layout", "Transitions group Setup", "Home Drawing Tools"],
            correct: 0,
            hint: "علامة التبويب المناسبة لتغيير لون الخلفية لخلية الجدول في باوربوينت هي: تبويب أدوات الجدول / تصميم الجدول."
        },
        {
            question: "When you save a presentation to a .potx, what kind of PowerPoint file is generated?",
            options: ["Template", "Video file", "Frozen layout document", "Interactive SmartArt chart"],
            correct: 0,
            hint: "عند حفظ عرض تقديمي بامتداد potx ما هو نوع الملف الناتج؟ قالب (Template)."
        },
        {
            question: "To animate a three-dimensional model in slides, we perform:",
            options: ["Click and drag", "Ctrl + T keyboard combination", "Table styles formatting selection", "View layouts standard commands"],
            correct: 0,
            hint: "لتحريك نموذج ثلاثي الأبعاد في الشرائح: اضغط واسحب (Click and drag)."
        },
        {
            question: "What happens when I press the Esc key while playing a slideshow from the current slide or from the beginning?",
            options: ["Slideshow ends", "Background layout resets", "Table styles collapse", "Program language configuration toggles"],
            correct: 0,
            hint: "ماذا يحدث عندما أضغط على مفتاح Esc أثناء تشغيل عرض الشرائح من الشريحة الحالية أو من البداية؟ ينتهي العرض (Slideshow ends)."
        },
        {
            question: "To format the background of a specific slide or group of slides by tab .... then ....",
            options: [
                "Design then Format Background / Apply to selected",
                "View then change slide sorter layouts",
                "Home tab then modify drawing elements outline",
                "Insert tab then choose multiple icons directly"
            ],
            correct: 0,
            hint: "لتنسيق خلفية الشريحة أو مجموعة من الشرائح المحددة بواسطة علامة تبويب: Design ثم اختيار خيارات الخلفية للشريحة المعنية فقط."
        },
        {
            question: "Formatting and layout freeze when saving presentation as a .... file.",
            options: ["PDF", "PPTX", "POTX", "PPSX"],
            correct: 0,
            hint: "يتجمد التنسيق والتخطيط عند حفظ العرض التقديمي كملف: PDF."
        },
        {
            question: "To save the presentation to an earlier version of PowerPoint, we choose to save with the extension:",
            options: ["*.ppt", "*.pptx", "*.ppsx", "*.potx"],
            correct: 0,
            hint: "لحفظ العرض التقديمي إلى إصدار سابق من باوربوينت نختار الحفظ بامتداد: *.ppt"
        },
        {
            question: "To save the presentation in the latest presentation format, we choose to save with the extension:",
            options: ["*.pptx", "*.ppt", "*.pps", "*.ppsx"],
            correct: 0,
            hint: "لحفظ العرض التقديمي بأحدث تنسيق عرض نختار الحفظ بامتداد: *.pptx"
        },
        {
            question: "To add an icon in the slide, click:",
            options: [
                "insert tab and choose the icon",
                "design menu to change color theme",
                "playback tab to edit audio links",
                "home ribbon and choose custom font styles"
            ],
            correct: 0,
            hint: "لإضافة أيقونة إلى الشريحة: علامة التبويب إدراج ثم اختيار الأيقونة (insert tab and choose the icon)."
        },
        {
            question: "To add an ... in a SmartArt graphic Right-click on the shape and choose Add Shape.",
            options: ["additional shape", "online video player", "hyperlinked text box", "custom database log"],
            correct: 0,
            hint: "لإضافة ... في رسم سمارت آرت اضغط بزر الماوس الأيمن على الشكل واختر إضافة شكل: شكل إضافي (additional shape)."
        },
        {
            question: "To trim the edge of media click on Trim Video from the tab:",
            options: ["Playback Options", "Insert Components", "Table Tools Design", "Home Layout Setup"],
            correct: 0,
            hint: "لتشذيب توقيت الوسائط اضغط فوق اقتطاع الفيديو من تبويب: خيارات التشغيل (Playback Options)."
        },
        {
            question: "You can apply background formatting from the ........... tab.",
            options: ["Design", "View", "Transitions", "Animations"],
            correct: 0,
            hint: "يمكن تطبيق تنسيق الخلفية من تبويب: تصميم (Design)."
        },
        {
            question: "The Purpose of The Table Design Tab PowerPoint is to .....",
            options: [
                "Customize table formatting",
                "Record full screen interaction sequences",
                "Animate dynamic three-dimensional structures",
                "Freeze document structural layout to static templates"
            ],
            correct: 0,
            hint: "الغرض من تبويب تصميم الجدول هو: تخصيص وتعديل تنسيقات الجداول (Customize table formatting)."
        },
        {
            question: "To add WordArt, click on:",
            options: ["Insert tab", "Design menu", "Transitions bar", "View panel"],
            correct: 0,
            hint: "لإضافة وورد آرت أضغط على تبويب: إدراج (Insert)."
        },
        {
            question: "To add graphs, click ....",
            options: [
                "Insert and then chart",
                "Design and choose theme formats",
                "Home inside drawing group properties",
                "Playback and setup custom audio channels"
            ],
            correct: 0,
            hint: "لإضافة رسوم بيانية اضغط على: Insert and then chart (إدراج ثم مخطط)."
        },
        {
            question: "This layout contains the main title and subtitle:",
            options: ["Title slide", "Blank presentation layout", "Section division template", "Outline view panel"],
            correct: 0,
            hint: "يحتوي هذا التخطيط على العنوان الرئيسي والعنوان الفرعي: شريحة العنوان (Title slide)."
        },
        {
            question: "You can use ................ to delete border between table cells.",
            options: ["Eraser", "WordArt", "Text box", "Hyperlink"],
            correct: 0,
            hint: "لحذف حدود الجدول يمكنك استخدام أداة: الممحاة (Eraser)."
        },
        {
            question: "The shape outline on the Home tab in ..... group.",
            options: ["Drawing", "Font", "Paragraph", "Clipboard"],
            correct: 0,
            hint: "حدود (إطار) الشكل في تبويب الصفحة الرئيسية في مجموعة: رسم (Drawing)."
        },
        {
            question: "If you want to add a comment about chart you can use ...",
            options: ["Text box", "Hyperlink", "Eraser tool", "WordArt schema"],
            correct: 0,
            hint: "إذا كنت ترغب في إضافة تعليق للمخطط يمكنك استخدام: مربع نص (Text box)."
        },
        {
            question: "Each movement has different options called ...",
            options: ["Effects / Effect options", "Table layout designs", "SmartArt formatting templates", "Transitions timing intervals"],
            correct: 0,
            hint: "كل حركة لها خيارات مختلفة تسمى: خيارات التأثير (Effect Options)."
        },
        {
            question: "There are ..... ways to insert a new slide.",
            options: ["5 ways", "1 way", "2 ways", "3 ways"],
            correct: 0,
            hint: "هناك ... طرق لإدراج شريحة جديدة: 5 طرق (أو من 4 لـ 5 طرق)."
        },
        {
            question: "A link can be created from a tab:",
            options: ["Insert", "Design", "Transitions", "View"],
            correct: 0,
            hint: "يمكن إنشاء رابط من تبويب: إدراج (Insert)."
        },
        {
            question: "Make it possible to jump to a slide, file, program, or website with one click. As well as the ability to display pop-up hints.",
            options: ["Hyperlink", "Eraser tool", "SmartArt graphic layout", "Table design customization"],
            correct: 0,
            hint: "يجعل الانتقال إلى شريحة أو ملف أو برنامج أو موقع ويب ممكناً بضغطة واحدة وكذلك القدرة على عرض التلميحات المنبثقة: الارتباط التشعبي (Hyperlink)."
        },
        {
            question: "Is used to navigate from the current page to another Web Site or File.",
            options: ["Hyperlink", "Text box description", "WordArt model layout", "Outline view arrangement"],
            correct: 0,
            hint: "يستخدم للتنقل من الصفحة الحالية إلى موقع ويب آخر أو ملف: الارتباط التشعبي (Hyperlink)."
        },
        {
            question: "To save presentation in the latest format, choose:",
            options: ["pptx", "ppt", "pps", "potx"],
            correct: 0,
            hint: "لحفظ العرض التقديمي بأحدث تنسيق، اختر: pptx."
        }
    ]
};