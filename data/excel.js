// بنك أسئلة مادة إكسيل (135 سؤالاً) - د. أحمد عمارة & د. مليكة لطفي
const excelData = {
    title: "Excel Spreadsheet (إكسيل - د. أحمد عمارة & د. مليكة لطفي)",
    questions: [
        // === القسم الأول: أسئلة الدكتورة مليكة علاء لطفي (68 سؤالاً) ===
        {
            type: "tf",
            question: "Cell locking or hiding formulas will not be activated until the workbook is protected",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: قفل الخلية أو إخفاء الصيغ لن يتم تنشيطهم حتى يتم حماية المصنف أو ورقة العمل."
        },
        {
            type: "tf",
            question: "A green flag will appear beside a cell if the cell is a ‘text format’ while it contains numbers",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: سيظهر علم أخضر بجانب الخلية بتنسيق نص بينما تحتوي على أرقام."
        },
        {
            type: "tf",
            question: "The user can be prevented from creating a layout or a macro, moving or copying worksheets, or making any modifications, whether deleting or adding",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: يمكن منع المستخدم من إنشاء تخطيط أو ماكرو أو نسخ أوراق العمل أو التعديل عليها."
        },
        {
            type: "tf",
            question: "You can change the values or the cells content from horizontal to vertical using paste special",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: يمكنك تغيير القيم أو محتوى الخلايا من أفقي إلى عمودي باستخدام لصق خاص."
        },
        {
            type: "tf",
            question: "The NOW function returns the serial number for the current date",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: تقوم دالة NOW بإرجاع الرقم التسلسلي للتاريخ الحالي (الإجابة المعتمدة بالمذكرة True)."
        },
        {
            type: "tf",
            question: "Using a cell reference instead of dealing with the cell value directly in the formula allows the formula to automatically update its result by updating the cell value",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: استخدام مرجع الخلية يسمح للصيغة بتحديث نتيجتها تلقائياً عند تحديث قيمة الخلية."
        },
        {
            type: "tf",
            question: "Excel allows merging more than one worksheet, and thus calculations can be performed across these sheets",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: يتيح لك برنامج الاكسيل دمج أكثر من ورقة عمل وبالتالي يمكن إجراء العمليات الحسابية عبر هذه الأوراق."
        },
        {
            type: "tf",
            question: "To move the chart to a new sheet or another file, choose ''move chart'' from the “Design” tab",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: لنقل الرسم البياني إلى ورقة جديدة أو ملف آخر اختر نقل رسم بياني من تبويب تصميم."
        },
        {
            type: "tf",
            question: "A green triangle will appear beside a cell if the cell is a ‘text format’ while it contains numbers",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: سيظهر مثلث أخضر بجانب الخلية إذا كانت الخلية بتنسيق نص بينما تحتوي على أرقام."
        },
        {
            type: "tf",
            question: "To insert a dropdown list in a cell, you must have cells range including the options to appear in the dropdown list",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص15: لإدراج قائمة منسدلة في خلية يجب أن يكون لديك مدى خلايا يتضمن الخيارات التي ستظهر في القائمة."
        },
        {
            type: "tf",
            question: "Excel provides the conversion of numbers in a specific table into a chart in order to facilitate reading data and quickly reach results",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص16: يوفر برنامج الاكسيل إمكانية تحويل الأرقام في جدول معين إلى رسم بياني لتسهيل القراءة والوصول السريع."
        },
        {
            type: "tf",
            question: "You can also name the range by selecting the range then from the Data tab in the Defined Names group, choose the Define Name command, enter the new name and dick OK",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: خطأ (False) لأن التبويب الصحيح هو Formulas وليس Data، ومكتوبة بلفظ (dick OK) خطأ مطبعي في المذكرة الأصلية."
        },
        {
            type: "tf",
            question: "In the protected workbook, the user can be prevented from creating a layout or a macro, moving or copying worksheets, or making any modifications whether deleting or adding",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص16: صحيح للتأكيد على منع المستخدم من التعديل في المصنف المحمي."
        },
        {
            type: "tf",
            question: "There are 2 types of references, relative reference and percentage reference",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: خطأ (False) لأن الأنواع هي مرجع نسبي ومرجع مطلق وليس مرجع نسبة مئوية."
        },
        {
            type: "tf",
            question: "Open windows can be switched through the Page Layout tab",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: خطأ (False) لأن تبديل النوافذ المفتوحة يكون من تبويب عرض View."
        },
        {
            type: "tf",
            question: "Two worksheets can be linked together and the results displayed on a third worksheet",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص16: صحيح، يمكن ربط ورقتي عمل وإظهار النتائج في ورقة عمل ثالثة."
        },
        {
            type: "tf",
            question: "To transfer an image from one worksheet to another by moving",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: معتمدة خطأ (False) لأن النقل مخصص للمخططات Charts وليس الصور الثابتة."
        },
        {
            type: "tf",
            question: "A new row can be inserted into the worksheet by right- click on the row Name",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص16: صحيح، يمكن إدراج صف جديد عن طريق الضغط على زر الماوس الأيمن فوق اسم (رقم) الصف."
        },
        {
            type: "tf",
            question: "To insert a row or column, select the row or column",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: خطأ (False)، لأن الإدراج في إكسيل يتطلب تحديد الصف أو العمود التالي للمكان المراد."
        },
        {
            type: "tf",
            question: "The LOWER function converts all uppercase letters to lowercase",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص16: صحيح، تقوم الدالة LOWER بتحويل كل الأحرف الكبيرة إلى أحرف صغيرة."
        },
        {
            type: "tf",
            question: "The range L11:N15 contains 15 cells",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص16: صحيح، النطاق يحتوي على 15 خلية (3 أعمدة × 5 صفوف)."
        },
        {
            type: "tf",
            question: "Operations enclosed in braclets are the last calculations performed by Excel within the equation",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: خطأ (False) لأن ما بين الأقواس يُنفذ أولاً وليس أخيراً (مكتوبة braclets بالمذكرة)."
        },
        {
            type: "tf",
            question: "The RANDBETWEEN function, a new random integer is returned each time the worksheet is recalculated",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص16: صحيح، تقوم دالة RANDBETWEEN بإرجاع عدد صحيح عشوائي جديد كلما تم إعادة حساب ورقة العمل."
        },
        {
            type: "tf",
            question: "Zooming the workbook in and out is done from the Review tab",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: خطأ (False)، تكبير وتصغير المصنف يتم من تبويب عرض View."
        },
        {
            type: "tf",
            question: "The chart should have a title that explains the overall content of the chart, and usually, this title is located at the bottom of the chart",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص16: خطأ (False)، لأن عنوان المخطط يقع عادةً في الأعلى فوق المخطط وليس أسفله."
        },
        {
            type: "tf",
            question: "You cannot control a cell value using data Validation option",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص17: خطأ (False)، لأن خيار التحقق من صحة البيانات يُستخدم للتحكم في قيمة الخلية."
        },
        {
            type: "tf",
            question: "We can exclude the third part of the SUMIF equation if the conditional range is the same as the sum range",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص17: صحيح، يمكن الاستغناء عن الجزء الثالث من معادلة SUMIF إذا كان النطاق المشروط هو ذاته نطاق الجمع."
        },
        {
            type: "tf",
            question: "You can insert a comment in a cell using view tab",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص17: خطأ (False)، إضافة تعليق تتم من تبويب مراجعة Review وليس View."
        },
        {
            type: "tf",
            question: "When auto-filling numbers, we only enter one value",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص17: خطأ (False)، عند التعبئة التلقائية للأرقام نقوم بإدخال قيمتين لتحديد النمط المتسلسل للزيادة."
        },
        {
            type: "tf",
            question: "Filtering is used to arrange values in ascending order or descending order",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص17: خطأ (False)، لأن الترتيب التصاعدي أو التنازلي هو وظيفة الفرز Sort وليس التصفية."
        },
        {
            type: "tf",
            question: "The NOW functions belong to the general functions",
            options: ["True", "False"],
            correct: 1,
            hint: "د. مليكة ص17: خطأ (False)، تنتمي دالة NOW إلى مجموعة دوال التاريخ والوقت Date & Time."
        },
        {
            type: "tf",
            question: "Excel allows performing calculations on more than three worksheets",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص17: صحيح، يمكن إجراء العمليات الحسابية على أكثر من ثلاث أوراق عمل في برنامج الاكسيل."
        },
        {
            type: "tf",
            question: "You may use an image as a sheet background for display purposes only and is not printed",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص17: صحيح، يمكن استخدام صورة كخلفية لورقة العمل لأغراض العرض فقط لكن لا يتم طباعتها."
        },
        {
            type: "tf",
            question: "The error #Num appears when there is an invalid numerical value",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص17: صحيح، يظهر الخطأ NUM# عندما تكون هناك قيم رقمية غير صالحة حسابياً."
        },
        {
            type: "tf",
            question: "The worksheet appears in normal view at 100 % magnification and is subject to change",
            options: ["True", "False"],
            correct: 0,
            hint: "د. مليكة ص17: صحيح، تظهر ورقة العمل في العرض العادي بنسبة التكبير 100% وهي قابلة للتغيير."
        },
        {
            type: "mcq",
            question: "The function .................. searches for a value written in a cell, then recalls its data in a specific column",
            options: ["MATCH", "VLOOKUP", "INDEX", "LOOKUP"],
            correct: 1,
            hint: "د. مليكة ص17: الدالة التي تبحث عن قيمة مكتوبة في خلية وتستدعي بياناتها في عمود محدد هي VLOOKUP."
        },
        {
            type: "mcq",
            question: "You can control the content of a cell through",
            options: ["Data validation", "Format cells", "Filter", "Sorting"],
            correct: 0,
            hint: "د. مليكة ص17: يمكنك التحكم في محتوى الخلية من خلال التحقق من صحة البيانات Data validation."
        },
        {
            type: "mcq",
            question: "To move the chart to a new sheet or another file, choose 'move chart' from",
            options: ["Design tab", "Home tab", "Insert tab", "View tab"],
            correct: 0,
            hint: "د. مليكة ص17: لنقل الرسم البياني نختار 'move chart' من تبويب التصميم Design."
        },
        {
            type: "mcq",
            question: "To calculate the number of passed students in a range, you use the following function",
            options: ["COUNTIF(F3:F6, passed)", "COUNTIF(F3:F6, \"passed\")", "COUNT(F3:F6, \"passed\")", "SUMIF(F3:F6, passed)"],
            correct: 1,
            hint: "د. مليكة ص17: نستخدم دالة COUNTIF لحساب عدد الطلبة الناجحين في مدى معين مع وضع الكلمة بين علامتي تنصيص."
        },
        {
            type: "mcq",
            question: "Proper function belongs to ... function",
            options: ["Mathematical", "Statistical", "Text", "Logical"],
            correct: 2,
            hint: "د. مليكة ص17: تنتمي دالة Proper إلى مجموعة دوال النصوص Text."
        },
        {
            type: "mcq",
            question: "Round function belongs to ... function",
            options: ["Mathematical", "Statistical", "Text", "Logical"],
            correct: 0,
            hint: "د. مليكة ص17: تنتمي دالة Round إلى مجموعة دوال الرياضيات Mathematical."
        },
        {
            type: "mcq",
            question: "To select row in range of cells in the worksheet, choose",
            options: ["CTRL+SHIFT+➔", "CTRL+SHIFT+END", "SHIFT+SPACE", "CTRL+SPACE"],
            correct: 0,
            hint: "د. مليكة ص18: لتحديد صف في نطاق من الخلايا في ورقة العمل نختار الاختصار المذكور بالسهم CTRL+SHIFT+➔."
        },
        {
            type: "mcq",
            question: "To select range of cells in the worksheet, choose",
            options: ["CTRL+SHIFT+➔", "CTRL+SHIFT+END", "ALT+F4", "SHIFT+SPACE"],
            correct: 1,
            hint: "د. مليكة ص18: لتحديد نطاق شامل من الخلايا في ورقة العمل نختار CTRL+SHIFT+END."
        },
        {
            type: "mcq",
            question: "To distinguish between a relative cell reference and absolute cell reference we use",
            options: ["#", "&", "$", "@"],
            correct: 2,
            hint: "د. مليكة ص18: للتمييز بين مرجع الخلية النسبي ومرجع الخلية المطلق نستخدم علامة الدولار $."
        },
        {
            type: "mcq",
            question: "To distinguish between a relative and an absolute cell reference we use ... in absolute cell reference before column code as well as before row number",
            options: ["#", "&", "$", "@"],
            correct: 2,
            hint: "د. مليكة ص18: نضع علامة $ في مرجع الخلية المطلق قبل رمز العمود وكذلك قبل رقم الصف."
        },
        {
            type: "mcq",
            question: "The ... function is used to count the number of cells containing a numeric or text value",
            options: ["COUNT", "COUNTA", "COUNTBLANK", "COUNTIF"],
            correct: 1,
            hint: "د. مليكة ص18: تُستخدم دالة COUNTA لحساب عدد الخلايا المحتوية على قيمة رقمية أو نصية (غير فارغة)."
        },
        {
            type: "mcq",
            question: "When using SUBTOTAL function to get the total, the detailed total, and the total for each category, we will notice on the right side there are ... levels",
            options: ["2", "3", "4", "5"],
            correct: 1,
            hint: "د. مليكة ص18: عند استخدام دالة SUBTOTAL سنلاحظ في الجانب الأيمن وجود 3 مستويات."
        },
        {
            type: "mcq",
            question: "The chart can be moved to a new worksheet or another file using the Chart Move options on the ... tab",
            options: ["Design", "Format", "Layout", "View"],
            correct: 0,
            hint: "د. مليكة ص18: يمكن نقل المخطط باستخدام خيارات نقل المخطط من خلال تبويب تصميم Design."
        },
        {
            type: "mcq",
            question: "In Excel what can't be secured against password protecting a sheet",
            options: ["Modifying cells", "Deleting rows", "Unauthorized users can open the sheet", "Formatting cells"],
            correct: 2,
            hint: "د. مليكة ص18: ما لا يمكن تأمينه ضد حماية الورقة بكلمة مرور هو أن المستخدمين غير المصرح لهم يمكنهم فتح ورقة العمل ومشاهدتها."
        },
        {
            type: "mcq",
            question: "The function .......... searches for a value written in a cell, then recalls its order in a specific column",
            options: ["MATCH", "VLOOKUP", "INDEX", "COUNTIF"],
            correct: 0,
            hint: "د. مليكة ص18: الدالة التي تبحث عن قيمة مكتوبة في الخلية وتستدعي ترتيبها في عمود محدد هي دالة MATCH."
        },
        {
            type: "mcq",
            question: "The ............ function converts the first letter of each word in a text string to an uppercase letter",
            options: ["UPPER", "LOWER", "Proper", "TEXT"],
            correct: 2,
            hint: "د. مليكة ص18: تقوم دالة Proper بتحويل الحرف الأول من كل كلمة في سلسلة نصية إلى حرف كبير."
        },
        {
            type: "mcq",
            question: "Conditional format can be applied through the ................... tab",
            options: ["Data", "Insert", "Home", "Review"],
            correct: 2,
            hint: "يمكن تطبيق التنسيق الشرطي من خلال علامة تبويب الصفحة الرئيسية Home."
        },
        {
            type: "mcq",
            question: "You can move between the different comments in a worksheet by pressing",
            options: ["Home tab", "Insert tab", "Review tab", "View tab"],
            correct: 2,
            hint: "د. مليكة ص18: يمكن التنقل بين التعليقات المختلفة في ورقة العمل من خلال تبويب مراجعة Review."
        },
        {
            type: "mcq",
            question: "We show or hide gridlines from the ....................... tab (عك العرض)",
            options: ["Home", "Page layout", "View", "Review"],
            correct: 2,
            hint: "د. مليكة ص18: لإخفاء أو إظهار خطوط الشبكة (عند العرض) نستخدم تبويب View."
        },
        {
            type: "mcq",
            question: "We show or hide gridlines from the .......................tab (عك الطباعة)",
            options: ["Home", "Page layout", "View", "Review"],
            correct: 1,
            hint: "د. مليكة ص18: لإخفاء أو إظهار خطوط الشبكة (عند الطباعة) نستخدم تبويب تخطيط الصفحة Page layout."
        },
        {
            type: "mcq",
            question: "Cells that contains digital data can be counted using function",
            options: ["Count", "COUNTA", "COUNTIF", "SUM"],
            correct: 0,
            hint: "د. مليكة ص18: يمكن حساب عدد الخلايا التي تحتوي على قيم رقمية باستخدام دالة Count."
        },
        {
            type: "mcq",
            question: "The error ........... appears when the equation needs to be corrected",
            options: ["#VALUE!", "#REF!", "?Name#", "#NUM!"],
            correct: 2,
            hint: "د. مليكة ص19: يظهر الخطأ ?Name# عندما تحتاج المعادلة أو اسم الدالة إلى تصحيح."
        },
        {
            type: "mcq",
            question: "To search within the worksheet for a specific formula or value use ................ tab",
            options: ["Data", "Review", "Home", "View"],
            correct: 2,
            hint: "د. مليكة ص19: للبحث داخل ورقة العمل عن صيغة أو قيمة معينة نستخدم تبويب الصفحة الرئيسية Home."
        },
        {
            type: "mcq",
            question: "You can change the values or the cells content from horizontal to vertical using ................ tab",
            options: ["Home", "Insert", "Page Layout", "Data"],
            correct: 0,
            hint: "د. مليكة ص19: يمكنك تغيير قيم أو محتوى الخلايا من الوضع الأفقي للعمودي من تبويب Home."
        },
        {
            type: "mcq",
            question: "You can set some rows to be repeated at the top while printing via",
            options: ["Print area", "Print titles", "Page breaks", "Orientation"],
            correct: 1,
            hint: "د. مليكة ص19: يمكن ضبط بعض الصفوف ليتم تكرارها في الأعلى أثناء الطباعة عبر عناوين الطباعة Print titles."
        },
        {
            type: "mcq",
            question: "Function that returns the serial number for the current date",
            options: ["NOW", "Today", "DATE", "YEAR"],
            correct: 1,
            hint: "د. مليكة ص19: دالة تقوم بإرجاع الرقم التسلسلي للتاريخ الحالي فقط هي دالة Today."
        },
        {
            type: "mcq",
            question: "To close the program window, click on",
            options: ["ALT + F4", "CTRL + W", "ALT + Enter", "CTRL + Q"],
            correct: 0,
            hint: "د. مليكة ص19: لإغلاق نافذة البرنامج بالكامل نضغط على مفتاحي ALT + F4."
        },
        {
            type: "mcq",
            question: "Change the table style from the ............. tab",
            options: ["Home", "Insert", "Design", "Data"],
            correct: 2,
            hint: "د. مليكة ص19: تغيير نمط وشكل الجدول يتم من خلال تبويب تصميم Design."
        },
        {
            type: "mcq",
            question: "There are ............... basic ways to display worksheets",
            options: ["2", "3", "4", "5"],
            correct: 1,
            hint: "د. مليكة ص19: يوجد 3 طرق أساسية لعرض أوراق العمل."
        },
        {
            type: "mcq",
            question: "The worksheet is protected in .............",
            options: ["One way", "Two ways", "Three ways", "Four ways"],
            correct: 1,
            hint: "د. مليكة ص19: يمكن حماية ورقة العمل بطريقتين أساسيتين Two ways."
        },
        {
            type: "mcq",
            question: "Is keeping an area of the worksheet visible while you scroll to other columns and rows",
            options: ["Splitting", "Hiding", "Freezing", "Locking"],
            correct: 2,
            hint: "د. مليكة ص19: تجميد الألواح Freezing هو إبقاء منطقة من ورقة العمل مرئية أثناء التمرير."
        },
        {
            type: "mcq",
            question: "A way to find a subset of data to temporarily exclude rows that we dont wand to display on the screenand show rows that match a condition",
            options: ["Sorting", "Filtering", "Freezing", "Grouping"],
            correct: 1,
            hint: "د. مليكة ص19: طريقة للعثور على مجموعة فرعية من البيانات واستبعاد الصفوف مؤقتاً هي التصفية Filtering."
        },
        {
            type: "mcq",
            question: "Applying a specific format automatically, such as colour, to one or more cells based on the cell's value according to a specified condition to distinguish it from the rest of the data",
            options: ["Conditional formatting", "Data validation", "Styles", "Table format"],
            correct: 0,
            hint: "د. مليكة ص19: تطبيق تنسيق معين تلقائياً مثل اللون بناءً على قيمة الخلية لشرط محدد هو التنسيق الشرطي Conditional formatting."
        },
        {
            type: "mcq",
            question: "The conditional formatting is located in the group .............",
            options: ["Styles", "Cells", "Editing", "Font"],
            correct: 0,
            hint: "د. مليكة ص19: يوجد التنسيق الشرطي في مجموعة الأنماط Styles بتبويب الصفحة الرئيسية."
        },

        // === القسم الثاني: أسئلة الدكتور أحمد عمارة (67 سؤالاً) ===
        {
            type: "tf",
            question: "To protect an Excel workbook, you can set a password from the File tab.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: لحماية المصنف بشكل كامل يمكن تعيين كلمة مرور عبر تبويب ملف File."
        },
        {
            type: "tf",
            question: "By default, Excel provides three worksheets in a new workbook.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: بشكل افتراضي كان البرنامج يفتح 3 أوراق عمل في الإصدارات التقليدية."
        },
        {
            type: "tf",
            question: "The formula =SUM(A1:A10) will add all numbers from cell A1 to cell A10.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صيغة دالة الجمع صحيحة لجمع النطاق الممتد بين الخليتين."
        },
        {
            type: "tf",
            question: "You can use the shortcut Ctrl + P to save the current workbook.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ (False) لأن الاختصار Ctrl + P مخصص للأمر طباعة Print، والحفظ هو Ctrl + S."
        },
        {
            type: "tf",
            question: "A relative reference changes automatically when a formula is copied to another cell.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، المرجع النسبي يتغير تلقائياً ليناسب الموضع الجديد للخلية."
        },
        {
            type: "tf",
            question: "The error #REF! indicates that a cell reference is not valid or has been deleted.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، يظهر خطأ المرجع عند حذف خلايا كانت مرتبطة بالمعادلة."
        },
        {
            type: "mcq",
            question: "Which feature is used to lock specific rows or columns so they remain visible while scrolling?",
            options: ["Split Window", "Freeze Panes", "Hide Columns", "Lock Cells"],
            correct: 1,
            hint: "د. عمارة: الميزة المستخدمة لتثبيت الرؤوس هي Freeze Panes (تجميد الألواح)."
        },
        {
            type: "mcq",
            question: "To combine multiple cells into a single large cell, you use",
            options: ["Wrap Text", "Merge & Center", "Format Painter", "AutoSum"],
            correct: 1,
            hint: "د. عمارة: لدمج الخلايا المحددة وجعلها خلية واحدة نستخدم Merge & Center."
        },
        {
            type: "mcq",
            question: "Which of the following functions allows you to count cells based on a specific criteria?",
            options: ["COUNT", "COUNTA", "COUNTIF", "COUNTBLANK"],
            correct: 2,
            hint: "د. عمارة: لحساب عدد الخلايا التي تستوفي شرطاً معيناً نستخدم دالة COUNTIF."
        },
        {
            type: "tf",
            question: "An Excel workbook must contain at least one worksheet.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: يجب أن يحتوي مصنف إكسيل على ورقة عمل واحدة على الأقل."
        },
        {
            type: "tf",
            question: "By default, new workbooks in modern Excel versions open with three worksheets.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، الإصدارات الحديثة تفتح بورقة عمل واحدة افتراضياً."
        },
        {
            type: "tf",
            question: "The formula bar displays the actual formula or value stored in the active cell.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: شريط الصيغة يعرض المعادلة الحقيقية المخزنة داخل الخلية النشطة."
        },
        {
            type: "tf",
            question: "You can open an existing workbook using the shortcut Ctrl + O.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: الاختصار Ctrl + O يُستخدم لفتح ملف موجود بالفعل."
        },
        {
            type: "tf",
            question: "The shortcut Ctrl + S is used to print the current worksheet.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، Ctrl + S للحفظ بينما الطباعة هي Ctrl + P."
        },
        {
            type: "tf",
            question: "To select the entire worksheet, you can click the Select All button or press Ctrl + A.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الاختصار Ctrl + A يقوم بتحديد كافة خلايا ورقة العمل."
        },
        {
            type: "tf",
            question: "Rows in Excel are labeled with letters (A, B, C...) and columns are labeled with numbers.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، الأعمدة هي التي تُسمى بالحروف والصفوف بالأرقام."
        },
        {
            type: "tf",
            question: "A cell reference like B5 refers to column B and row 5.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، يبدأ اسم الخلية بالحرف الممثل للعمود متبوعاً برقم الصف."
        },
        {
            type: "tf",
            question: "The Name Box displays the address of the currently active cell.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صندوق الاسم يُظهر عنوان وموضع الخلية المحددة حالياً."
        },
        {
            type: "tf",
            question: "You can move to cell A1 instantly by pressing Ctrl + Home.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الانتقال الفوري للخلية الأولى يتم عبر Ctrl + Home."
        },
        {
            type: "tf",
            question: "The Wrap Text feature combines multiple selected cells into a single larger cell.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، الميزة التي تدمج الخلايا هي Merge بينما Wrap Text تلتف بالنص داخل الخلية."
        },
        {
            type: "tf",
            question: "Merge & Center combines selected cells and centers the content in the new cell.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تقوم بدمج الخلايا وتوسيط النص بداخلها تلقائياً."
        },
        {
            type: "tf",
            question: "To enter a formula in Excel, the cell content must begin with an equal sign (=).",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: أساس كتابة المعادلات البدء بعلامة التساوي =."
        },
        {
            type: "tf",
            question: "The AutoSum button is located in the Editing group on the Home tab.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، أيقونة الجمع التلقائي تقع في مجموعة التعديل بتبويب الصفحة الرئيسية."
        },
        {
            type: "tf",
            question: "The formula =SUM(B2:B5) calculates the average of values from B2 to B5.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، الدالة SUM تحسب المجموع وليس المتوسط الحسابي."
        },
        {
            type: "tf",
            question: "The AVERAGE function calculates the mathematical mean of a range of numbers.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، المتوسط الحسابي يتم عبر دالة AVERAGE."
        },
        {
            type: "tf",
            question: "The MAX function returns the smallest value within a specified range.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، دالة MAX تُرجع القيمة الأكبر والأعلى، بينما الصغرى هي MIN."
        },
        {
            type: "tf",
            question: "The MIN function ignores text values and only evaluates numbers in its range.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تتجاهل القيم النصية وتفحص النطاق الرقمي فقط."
        },
        {
            type: "tf",
            question: "A relative cell reference changes automatically when the formula is copied to another location.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تتغير المراجع النسبية لتلائم الصفوف والأعمدة الجديدة."
        },
        {
            type: "tf",
            question: "An absolute cell reference is created by adding a percentage sign (%) before the column and row.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، التثبيت يتم بعلامة الدولار $ وليس النسبة المئوية."
        },
        {
            type: "tf",
            question: "The cell reference $C$4 is an example of an absolute reference.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، وضع علامتي دولار يُثبت العمود والصف بالكامل."
        },
        {
            type: "tf",
            question: "The reference G$2 is a mixed reference where only the row number is locked.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تسمى مرجعاً مختلطاً لتثبيت جزء واحد فقط وهو الصف."
        },
        {
            type: "tf",
            question: "To toggle between relative, absolute, and mixed references, you can use the F4 key.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، مفتاح التحويل بين المراجع هو F4."
        },
        {
            type: "tf",
            question: "The error #VALUE! indicates that Excel cannot recognize text in a formula name.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، عدم التعرف على الاسم هو خطأ ?NAME# بينما خطأ القيمة يعود لاستخدام نوع بيانات غير متوافق."
        },
        {
            type: "tf",
            question: "The error #DIV/0! occurs when a formula attempts to divide a number by zero or an empty cell.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، يظهر عند محاولة القسمة على الصفر."
        },
        {
            type: "tf",
            question: "The error #REF! appears when a cell reference used in a formula has been deleted.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، يشير لفقدان المرجع الحسابي للخلية المرتبطة."
        },
        {
            type: "tf",
            question: "Sorting allows you to view only the rows that meet a specific condition, hiding the rest.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، العزل بناءً على شرط هو وظيفة التصفية Filter وليس الفرز Sort."
        },
        {
            type: "tf",
            question: "Filtering rearranges the rows of a worksheet in alphabetical or numerical order.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، إعادة الترتيب الأبجدي والرقمي هو الفرز Sort."
        },
        {
            type: "tf",
            question: "You can apply conditional formatting to highlight cells containing specific text or values.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تُستخدم لإبراز نطاق البيانات بصرياً لسهولة الفحص."
        },
        {
            type: "tf",
            question: "Charts are graphical representations of worksheet data.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، المخطط هو التمثيل الرسومي المباشر للأرقام الحسابية."
        },
        {
            type: "tf",
            question: "An embedded chart exists as an object inside the worksheet alongside the data.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، المخطط المضمن يقع ككائن في نفس الصفحة مع أرقامه."
        },
        {
            type: "tf",
            question: "A chart sheet is a separate sheet that contains only one chart and no table rows.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، صفحة المخطط المستقلة تُفرد لعرض الرسم البياني وحده."
        },
        {
            type: "tf",
            question: "To delete a worksheet, you can right-click its tab and choose Delete.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، خيارات التعديل على التبويب السفلي للورقة تشمل الحذف."
        },
        {
            type: "tf",
            question: "Once a worksheet is deleted, the action can be easily reversed using the Undo button.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، حذف الأوراق نهائي ولا يمكن التراجع عنه بزر Undo."
        },
        {
            type: "tf",
            question: "You can rename a worksheet by double-clicking its sheet tab.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، النقر المزدوج السريع يفتح مربع إعادة تسمية التبويب."
        },
        {
            type: "tf",
            question: "The shortcut Ctrl + Page Down moves to the next worksheet to the right.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، التنقل بين التبويبات المجاورة يميناً يتم عبر Page Down."
        },
        {
            type: "tf",
            question: "The shortcut Ctrl + Page Up moves to the previous worksheet to the left.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الانتقال لليسار يكون عبر الاختصار المذكور."
        },
        {
            type: "tf",
            question: "By default, text entered into a cell aligns to the left side.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، النصوص تترتب لليسار والبيانات الرقمية لليمين افتراضياً."
        },
        {
            type: "tf",
            question: "By default, numbers entered into a cell align to the right side.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الأرقام تبدأ محاذاتها لليمين بشكل تلقائي."
        },
        {
            type: "tf",
            question: "To display formulas instead of results in cells, you can press Ctrl + `.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، اختصار إظهار صياغة المعادلات بدلاً من نواتجها."
        },
        {
            type: "tf",
            question: "The COUNT function counts cells containing both text and numeric values.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، دالة COUNT تعد الأرقام فقط، بينما النصوص والكل تُعد عبر COUNTA."
        },
        {
            type: "tf",
            question: "The COUNTA function counts the number of non-empty cells in a range.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تعد جميع الخلايا غير الفارغة أياً كان نوع محتواها."
        },
        {
            type: "tf",
            question: "The COUNTBLANK function counts the number of empty cells in a specified range.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح.. وظيفتها حصر الخلايا الفارغة في النطاق المحدد."
        },
        {
            type: "tf",
            question: "The Flash Fill feature automatically fills data when it senses a clear pattern.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تعتمد على استشعار النمط التلقائي لتعبئة البيانات."
        },
        {
            type: "tf",
            question: "To adjust column width to fit the longest entry, you can double-click the boundary between column headers.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، النقر المزدوج على الحد الفاصل يفعل الاحتواء التلقائي."
        },
        {
            type: "tf",
            question: "The keyboard shortcut Ctrl + Z is used to redo the last action.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، الاختصار Ctrl + Z مخصص للتراجع Undo بينما الإعادة Redo هي Ctrl + Y."
        },
        {
            type: "tf",
            question: "You can lock a workbook by selecting Protect Workbook under the Review tab.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، خيارات حماية بنية وهيكل المصنف تقع بتبويب مراجعة."
        },
        {
            type: "tf",
            question: "Excel formulas always follow standard mathematical rules for order of operations.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تتبع ترتيب الأسبقيات الرياضية الافتراضية بدقة."
        },
        {
            type: "tf",
            question: "Multiplication and division are performed after addition and subtraction in formulas.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، الضرب والقسمة يسبقان الجمع والطرح في الترتيب الرياضي."
        },
        {
            type: "tf",
            question: "The shortcut Ctrl + C copies the selected cells to the clipboard.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الاختصار القياسي لعملية النسخ الحسابي."
        },
        {
            type: "tf",
            question: "The shortcut Ctrl + V is used to cut the selected cell data.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، الاختصار Ctrl + V للصق Paste والقص هو Ctrl + X."
        },
        {
            type: "tf",
            question: "The gridlines of a worksheet are always printed by default.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، خطوط الشبكة تظهر على الشاشة ولا تُطبع إلا عند تفعيل خيار طباعتها بشكل صريح."
        },
        {
            type: "tf",
            question: "You can split a worksheet window into separate panes to view different sections at once.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، ميزة التقسيم تتيح مراقبة خلايا متباعدة في وقت واحد."
        },
        {
            type: "tf",
            question: "The UPPER function converts all text characters in a cell to lowercase.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، دالة UPPER تحول الحروف إلى كبيرة وصغيرة هي LOWER."
        },
        {
            type: "tf",
            question: "The TODAY function requires arguments inside its parentheses to function correctly.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، دالة TODAY لا تتطلب أي وسيطات وتُكتب بأقواس فارغة () دائماً."
        },
        {
            type: "tf",
            question: "You can move a chart sheet to become an embedded object inside another worksheet.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، يمكن تعديل موضع المخطط وتغيير حالته ونوعه."
        },
        {
            type: "tf",
            question: "Data Validation rules can prevent users from entering invalid text length or numbers.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تُقيد طول النص ونطاق الأرقام لمنع أخطاء الإدخال العشوائية."
        },
        {
            type: "tf",
            question: "The SUMIF function allows you to sum values in a range only if they meet a specific condition.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، دالة الجمع الشرطي تجمع الخلايا التي تطابق المعيار المحدد."
        },
        {
            type: "tf",
            question: "The error #NULL! appears if you specify an intersection of two cell ranges that do not intersect.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، يظهر خطأ الفراغ أو التقاطع عند صياغة مدى خاطئ يفصله مسافة."
        },
        {
            type: "tf",
            question: "The shortcut Alt + = inserts the AutoSum formula instantly for selected numbers.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الاختصار السريع لكتابة صيغة الجمع التلقائي بضغطة زر."
        },
        {
            type: "tf",
            question: "An absolute cell reference locks both the row and column and never changes during fill operations.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تمنع المراجع المطلقة تحرك الخلايا أثناء السحب والتعبئة."
        },
        {
            type: "tf",
            question: "You can change a worksheet's gridline visibility from the View tab group.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، تبويب عرض يحتوي على خيارات التنشيط والإخفاء لخطوط الشبكة."
        },
        {
            type: "tf",
            question: "The PMT function calculates the payments required for a loan based on constant payments and interest rate.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الدالة المالية PMT تحسب دفعات القروض الدورية الافتراضية."
        },
        {
            type: "tf",
            question: "The VLOOKUP function can search for data horizontally across the rows of a table.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، البحث الأفقي يتم عبر HLOOKUP بينما دالة VLOOKUP مخصصة للبحث الرأسي بالأعمدة."
        },
        {
            type: "tf",
            question: "Conditional formatting rules are static and do not adapt when cell values change.",
            options: ["True", "False"],
            correct: 1,
            hint: "د. عمارة: خطأ، التنسيقات الشرطية ديناميكية وتتغير فوراً بتعديل قيم الخلايا المرتبطة."
        },
        {
            type: "tf",
            question: "You can hide whole columns or rows in an Excel worksheet without deleting their contents.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، خيار الإخفاء يحجب الرؤية مع الإبقاء الكامل على البيانات المخزنة."
        },
        {
            type: "tf",
            question: "The file extension for a standard, modern Excel workbook is .xlsx.",
            options: ["True", "False"],
            correct: 0,
            hint: "د. عمارة: صحيح، الامتداد الافتراضي للمصنفات الحديثة هو xlsx."
        }
    ]
};