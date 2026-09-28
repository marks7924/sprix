/* ==========================================================================
   SPRIX OFFICIAL LEARNING PORTAL - MAIN JS APPLICATION ENGINE
   Curriculum Engine with Chapter Open State Preservation
   ========================================================================== */

(function () {
    'use strict';

    // Internationalization (i18n) Translations System - English & Arabic Support
    let currentUiLang = localStorage.getItem('sprix_ui_lang') || 'en';

    const translations = {
        en: {
            brandName: "Sprix Portal",
            navHome: "Home",
            navCurriculum: "Curriculum",
            searchPlaceholder: "Search lessons, concepts...",
            searchMobilePlaceholder: "Search lessons...",
            darkMode: "Dark Mode",
            lightMode: "Light Mode",
            langBtnText: "العربية",
            // Home View
            heroTitle: "Sprix Portal Curriculum",
            heroSubtitle: "A clean, editorial technical curriculum designed for mastering modern JavaScript and Python programming through structured lessons, real-time code execution, and interactive assessments.",
            enterCurriculum: "Enter Curriculum →",
            jsTrackBtn: "JavaScript (54 Ch)",
            pyTrackBtn: "Python (10 Ch)",
            feat1Title: "Structured Curriculum",
            feat1Desc: "Explore 54 chapters for JavaScript and 10 chapters for Python. Lessons cover core concepts, syntax, conditionals, loops, functions, and data structures.",
            feat2Title: "Interactive Assessments",
            feat2Desc: "Verify your understanding with multiple-choice quizzes and code-answering editors equipped with automated validation and complete solution breakdowns.",
            feat3Title: "Real-Time Sandbox",
            feat3Desc: "Write and execute JavaScript statements live within an integrated browser console to inspect logs, outputs, and return values instantly.",
            feat4Title: "Editorial & Responsive",
            feat4Desc: "Built with crisp editorial typography, dark/light theme switching, 100% phone responsiveness, and drawer navigation with zero neon/AI glow.",
            // Sidebar Header
            selectTrack: "Select Language Track",
            sidebarTitle: "Sidebar",
            hideSidebar: "Hide Sidebar",
            // Lesson Document View
            explanationH2: "Explanation & Concepts",
            specNoteLabel: "Developer Specification:",
            copyCode: "Copy Code",
            codeCopied: "Copied!",
            markCompleted: "Mark as Completed",
            completed: "Completed",
            readTimeSuffix: "min read",
            // Sandbox
            navSandbox: "Sandbox",
            sandboxTitle: "Interactive Code Sandbox",
            sandboxSubtitle: "Execute JavaScript statements in real-time and inspect output logs.",
            sandboxHide: "Hide",
            sandboxShow: "Show",
            runScript: "Run Script",
            execConsole: "Execution Console:",
            consoleInit: "> Console initialized. Click \"Run Script\" to execute.",
            // Standalone Sandbox View
            sandboxViewHeading: "Interactive Code Sandbox",
            sandboxViewDesc: "Write and run JavaScript code live. Inspect outputs, test concepts, and experiment freely.",
            sandboxViewEditorLabel: "📝 Code Editor",
            sandboxViewConsoleLabel: "🖥 Execution Console",
            // Mobile sandbox quick-access
            mobileSandboxNavLabel: "Quick Access",
            mobileSandboxNavText: "Open Interactive Sandbox",
            // Quiz & Assessment
            quizTitle: "Chapter Knowledge Assessment",
            quizSubtitle: "Answer the questions below to test your understanding of this chapter's topics.",
            codeAnswerEditor: "👨‍💻 Code Answer Editor",
            resetCode: "Reset Code",
            submitQuiz: "Submit Quiz Answers",
            showAnswers: "💡 Show Answers & Solutions",
            hideAnswers: "🙈 Hide Answers",
            incompleteQuizTitle: "Incomplete Assessment",
            incompleteQuizMsg: "Please complete all questions before submitting! Unanswered:",
            correctOutput: "✓ Correct! Executed Output:",
            incorrectOutput: "✗ Incorrect.",
            expectedOutput: "Expected output:",
            expectedSolution: "Expected Solution:",
            // Grade Banner
            gradePassedTitle: "Assessment Passed!",
            gradePassedSub: "Great job! You have demonstrated solid comprehension of this chapter's programming concepts.",
            gradeFailedTitle: "Assessment Needs Improvement",
            gradeFailedSub: "Review the solution explanations below and retry the assessment questions.",
            finalScore: "Final Score",
            questionsCorrect: "Questions Correct",
            passRate: "Pass Rate",
            // Footer Navigation
            prevLessonSub: "← Previous Lesson",
            nextLessonSub: "Next Lesson →",
            // Toasts & Alerts
            chapterLockedTitle: "Chapter Locked",
            chapterLockedMsg: "This chapter is locked. Content will be added by the instructor.",
            testBreaklineTitle: "Test Breakline Divider",
            testBreaklineMsg: "Tests serve as breaklines between chapters. Questions will be added by the instructor."
        },
        ar: {
            brandName: "بوابة سبريكس",
            navHome: "الرئيسية",
            navCurriculum: "المنهج الدراسي",
            searchPlaceholder: "ابحث في الدروس والمفاهيم...",
            searchMobilePlaceholder: "ابحث في الدروس...",
            darkMode: "الوضع الداكن",
            lightMode: "الوضع الفاتح",
            langBtnText: "English",
            // Home View
            heroTitle: "بوابة سبريكس التعليمية",
            heroSubtitle: "منهج تعليمي تقني رفيع المستوى مصمم لإتقان برمجة جافا سكريبت وباثون من خلال دروس مهيكلة، وتنفيذ مباشر للكود، وتقييمات تفاعلية.",
            enterCurriculum: "دخول المنهج الدراسي ←",
            jsTrackBtn: "جافا سكريبت (54 فصل)",
            pyTrackBtn: "باثون (10 فصول)",
            feat1Title: "منهج دراسي مهيكل",
            feat1Desc: "استكشف 54 فصلاً لجافا سكريبت و 10 فصول لباثون. تغطي الدروس المفاهيم الأساسية، التركيب، النصوص الشرطية، الحلقات، التوابع وهياكل البيانات.",
            feat2Title: "تقييمات تفاعلية",
            feat2Desc: "اختبر فهمك باستخدام أسئلة اختيار من متعدد ومحررات إجابة بالكود مع تصحيح آلي وشرح كامل للحلول.",
            feat3Title: "بيئة كود تفاعلية مباشرة",
            feat3Desc: "اكتب ونفّذ تعليمات جافا سكريبت مباشرة في وحدة تحكم المتصفح للتحقق من المخرجات والنتائج فوراً.",
            feat4Title: "تصميم متجاوب وأنيق",
            feat4Desc: "تم بناء الموقع بطباعة تحريرية راقية، وتبديل الوضع الداكن/الفاتح، وتجاوب 100% مع الهواتف وقائمة سحب دون ألوان نيون مزعجة.",
            // Sidebar Header
            selectTrack: "اختر مسار اللغة",
            sidebarTitle: "الشريط الجانبي",
            hideSidebar: "إخفاء الشريط الجانبي",
            // Lesson Document View
            explanationH2: "الشرح والمفاهيم",
            specNoteLabel: "مواصفات المطور:",
            copyCode: "نسخ الكود",
            codeCopied: "تم النسخ!",
            markCompleted: "تحديد كـ مكتمل",
            completed: "مكتمل",
            readTimeSuffix: "دقائق قراءة",
            // Sandbox
            navSandbox: "بيئة الكود",
            sandboxTitle: "بيئة الكود التفاعلية",
            sandboxSubtitle: "نفّذ تعليمات جافا سكريبت مباشرة وشاهد النتائج في الوقت الفعلي.",
            sandboxHide: "إخفاء",
            sandboxShow: "إظهار",
            runScript: "تشغيل الكود",
            execConsole: "وحدة التحكم:",
            consoleInit: "> تم تهيئة وحدة التحكم. اضغط \"تشغيل الكود\" للتنفيذ.",
            // Standalone Sandbox View
            sandboxViewHeading: "بيئة الكود التفاعلية",
            sandboxViewDesc: "اكتب ونفّذ كود جافا سكريبت مباشرة. افحص المخرجات واختبر المفاهيم بحرية.",
            sandboxViewEditorLabel: "📝 محرر الكود",
            sandboxViewConsoleLabel: "🖥 وحدة التنفيذ",
            // Mobile sandbox quick-access
            mobileSandboxNavLabel: "وصول سريع",
            mobileSandboxNavText: "فتح بيئة الكود التفاعلية",
            // Quiz & Assessment
            quizTitle: "تقييم معرفة الفصل",
            quizSubtitle: "أجب عن الأسئلة أدناه لاختبار فهمك لمواضيع هذا الفصل.",
            codeAnswerEditor: "👨‍💻 محرر إجابة الكود",
            resetCode: "إعادة ضبط الكود",
            submitQuiz: "إرسال إجابات التقييم",
            showAnswers: "💡 عرض الإجابات والحلول",
            hideAnswers: "🙈 إخفاء الإجابات",
            incompleteQuizTitle: "تقييم غير مكتمل",
            incompleteQuizMsg: "يرجى الإجابة على جميع الأسئلة قبل الإرسال! الأسئلة المتبقية:",
            correctOutput: "✓ إجابة صحيحة! ناتج التنفيذ:",
            incorrectOutput: "✗ إجابة غير صحيحة.",
            expectedOutput: "المخرجات المتوقعة:",
            expectedSolution: "الحل المتوقع:",
            // Grade Banner
            gradePassedTitle: "اجتزت التقييم بنجاح!",
            gradePassedSub: "عمل ممتاز! لقد أظهرت استيعاباً قوياً للمفاهيم البرمجية في هذا الفصل.",
            gradeFailedTitle: "التقييم يحتاج إلى تحسين",
            gradeFailedSub: "راجِع شروحات الحلول أدناه وأعِد محاولة الإجابة عن أسئلة التقييم.",
            finalScore: "النتيجة النهائية",
            questionsCorrect: "الأسئلة الصحيحة",
            passRate: "نسبة النجاح",
            // Footer Navigation
            prevLessonSub: "الدرس السابق ←",
            nextLessonSub: "← الدرس التالي",
            // Toasts & Alerts
            chapterLockedTitle: "الفصل مغلق",
            chapterLockedMsg: "هذا الفصل مغلق حالياً. سيتم إضافة المحتوى بواسطة المحاضر.",
            testBreaklineTitle: "فاصل التقييم",
            testBreaklineMsg: "تُعتبر الاختبارات فواصل بين الفصول. سيتم إضافة الأسئلة بواسطة المحاضر."
        }
    };

    // Arabic Content Titles Mapping Dictionary
    const arabicContentMap = {
        'Introduction': 'المقدمة',
        'Calculations and Strings': 'الحسابات والنصوص',
        'Variables': 'المتغيرات',
        'Test 1 Knowledge Check': 'تقييم معرفة الاختبار الأول',
        'IF Statement': 'جملة IF الشرطية',
        'IF-ELSE Statement': 'جملة IF-ELSE الشرطية',
        'Else IF': 'جملة Else IF الشرطية',
        'Test 2 Knowledge Check': 'تقييم معرفة الاختبار الثاني',
        'Logical Operators': 'المعاملات المنطقية',
        'Iterative Operation': 'العمليات التكرارية وحلقات التكرار',
        'What is Programming': 'ما هي البرمجة',
        'How to Use an Editor': 'كيفية استخدام محرر الأكواد',
        'Console': 'وحدة التحكم (Console)',
        'Comment': 'التعليقات (Comments)',
        'Comment Out': 'إلغاء تفعيل الكود بالتعليق (Comment Out)',
        'How to Output to the Console': 'كيفية الإخراج إلى وحدة التحكم',
        'Calculation Method': 'طريقة الحساب والعمليات',
        'Consolidation': 'دمج النصوص والحسابات (Consolidation)',
        'Declaration and Assignments': 'الإعلان عن المتغيرات وتعيينها',
        'Test 1 Assessment': 'تقييم الاختبار الأول',
        'How to Write Variables': 'كيفية كتابة المتغيرات',
        'IF Statement Syntax': 'تركيب جملة IF الشرطية',
        'How IF Statement Works': 'كيف تعمل جملة IF الشرطية',
        'Operators (Comparison)': 'معاملات المقارنة (Comparison Operators)',
        'Else IF Statement': 'جملة Else IF الشرطية',
        'Test 2 Assessment': 'تقييم الاختبار الثاني',
        'Logical Operator Syntax': 'تركيب المعاملات المنطقية',
        'Use of Logical Operators': 'استخدام المعاملات المنطقية',
        'Newline & Indentation in Programs': 'السطر الجديد والمسافة البادئة في البرامج',
        'Iterative Process': 'العملية التكرارية وحلقة for',
        'Increment': 'معاملات التزايد (Increment)',
        'Python Test 1 Check': 'اختبار معرفة باثون 1',
        'IF - ELSE Statement': 'جملة IF - ELSE الشرطية',
        'ELIF Statement': 'جملة ELIF الشرطية',
        'Python Test 2 Check': 'اختبار معرفة باثون 2',
        'Logical Operator': 'المعاملات المنطقية',
        'Test 3 Assessment': 'تقييم الاختبار 3',
        'Function 1': 'الدوال 1',
        'Function 2': 'الدوال 2',
        'Test 4 Assessment': 'تقييم الاختبار 4',
        'Types': 'الأنواع والأنماط',
        'Array': 'المصفوفات',
        'Test 5 Assessment': 'تقييم الاختبار 5',
        'HTML 1': 'لغة HTML 1',
        'CSS 1': 'تنسيقات CSS 1',
        'Test 6 Assessment': 'تقييم الاختبار 6',
        'Conditions 4': 'الشروط 4',
        'Looping 1': 'الحلقات التكرارية 1',
        'Function 3': 'الدوال 3',
        'Test 7 Assessment': 'تقييم الاختبار 7',
        'Looping 2': 'الحلقات التكرارية 2',
        'Arrays 2': 'المصفوفات 2',
        'Test 8 Assessment': 'تقييم الاختبار 8',
        'For of': 'حلقة For of',
        'Conditions 5': 'الشروط 5',
        'Test 9 Assessment': 'تقييم الاختبار 9',
        'Functions 4': 'الدوال 4',
        'Flowchart': 'مخطط التدفق (Flowchart)',
        'Test 10 Assessment': 'تقييم الاختبار 10',
        'HTML 2': 'لغة HTML 2',
        'CSS 2': 'تنسيقات CSS 2',
        'Test 11 Assessment': 'تقييم الاختبار 11',
        'switch statements': 'جملة switch',
        'modulo': 'معامل باقي القسمة (modulo)',
        'Test 12 Assessment': 'تقييم الاختبار 12',
        'const inequality': 'الثوابت وعدم المساواة',
        'while statements': 'حلقة while التكرارية',
        'Test 13 Assessment': 'تقييم الاختبار 13',
        'CSS 3': 'تنسيقات CSS 3',
        'website creation': 'إنشاء المواقع الإلكترونية',
        'Test 14 Assessment': 'تقييم الاختبار 14',
        'functions / for of / reminders': 'الدوال / حلقة for of / تذكيرات',
        'switch statement 2 / negation': 'جملة switch 2 / النفي المنطقي',
        'Test 15 Assessment': 'تقييم الاختبار 15',
        'while statement 2': 'حلقة while 2',
        'Arrays 3': 'المصفوفات 3',
        'Test 16 Assessment': 'تقييم الاختبار 16',
        'array operation 1': 'عمليات المصفوفات 1',
        'array operation 2': 'عمليات المصفوفات 2',
        'Test 17 Assessment': 'تقييم الاختبار 17',
        'what is a function': 'ما هي الدالة',
        'how to create a function': 'كيفية إنشاء دالة',
        'truncate a fraction': 'إزالة الكسر العشري',
        'how to create random numbers': 'كيفية إنشاء أرقام عشوائية',
        'character assignment': 'تعيين النصوص والأحرف',
        'data types differences': 'الفروق بين أنواع البيانات',
        'type determination': 'تحديد نوع البيانات (typeof)',
        'comparison of values and types': 'مقارنة القيم والأنواع',
        'type conversion': 'تحويل أنواع البيانات',
        'what is an array?': 'ما هي المصفوفة؟',
        'arrays and for statements': 'المصفوفات وحلقة for',
        'length of array': 'طول المصفوفة (length)',
        'what is html ?': 'ما هي لغة HTML؟',
        'display of text': 'عرض النصوص والعناوين',
        'listing': 'القوائم (Lists)',
        'image display': 'عرض الصور',
        'character colour': 'ألوان النصوص والخلفيات',
        'character thickness and size': 'حجم وسماكة الخطوط',
        'class': 'فئات التنسيق (Classes)',
        'scope of if statement': 'نطاق جملة IF الشرطية',
        'nested conditional branches': 'الفروع الشرطية المتداخلة',
        'scoop of for loop': 'نطاق حلقة for التكرارية',
        'nested loops and conditionals': 'الحلقات والشروط المتداخلة',
        'how to write operators': 'كيفية كتابة المعاملات البرمجية',
        'scope in function': 'نطاق المتغيرات داخل الدالة',
        'functions without arguments': 'دوال بدون معلمات (أرجومنتات)',
        'multi parameter functions': 'دوال متعددة المعلمات',
        'repeating math operations': 'تكرار العمليات الحسابية',
        'using for loop counter I': 'استخدام عداد حلقة for (المتغير i)',
        'combining loops and arrays': 'دمج الحلقات والمصفوفات',
        'array length usage': 'استخدام طول المصفوفة (length)',
        'array with loop and if': 'استخدام المصفوفات مع الحلقات والجمل الشرطية',
        'for of': 'حلقة for...of التكرارية',
        'math in conditional branches': 'الحسابات الرياضية داخل الفروع الشرطية',
        'applying nested conditionals': 'تطبيق الشروط المتداخلة'
    };

    function t(key) {
        return (translations[currentUiLang] && translations[currentUiLang][key]) || translations['en'][key] || key;
    }

    function getChapterTitleText(ch) {
        if (!ch) return '';
        if (currentUiLang === 'ar' && arabicContentMap[ch.chapterTitle]) {
            return arabicContentMap[ch.chapterTitle];
        }
        return ch.chapterTitle;
    }

    function getLessonTitleText(les) {
        if (!les) return '';
        if (currentUiLang === 'ar' && arabicContentMap[les.title]) {
            return arabicContentMap[les.title];
        }
        return les.title;
    }

    // Official Curriculum Data matching User Specification
    const curriculumData = {
        javascript: [
            // Chapter 1: Introduction
            {
                chapterId: 'js-ch1',
                chapterNumber: 'Ch 1',
                chapterTitle: 'Introduction',
                lessons: [
                    {
                        id: 'js-1-1',
                        lessonNumber: '1.1',
                        category: 'js',
                        title: 'What is Programming',
                        readTime: '3 min read',
                        spec: 'Programming Core Concepts',
                        description: 'Programming is the process of writing precise instructions for a computer to perform tasks, build software, automate operations, and solve problems. In web development, programming languages like JavaScript enable web applications to respond dynamically to user actions.',
                        descriptionAr: 'البرمجة هي عملية كتابة تعليمات دقيقة للحاسوب لتنفيذ المهام وبناء البرمجيات وأتمتة العمليات وحل المشكلات. في تطوير الويب، تمكن لغات البرمجة مثل جافا سكريبت تطبيقات الويب من الاستجابة بشكل تفاعلي لإجراءات المستخدم.',
                        specNote: 'Conceptual Overview: Programming is about logical problem-solving and giving clear instructions to computers.',
                        specNoteAr: 'نظرة عامة مفاهيمية: البرمجة يدور مفهومها حول حل المشكلات منطقياً وإعطاء تعليمات واضحة للحاسوب.',
                        code: ''
                    },
                    {
                        id: 'js-1-2',
                        lessonNumber: '1.2',
                        category: 'js',
                        title: 'How to Use an Editor',
                        readTime: '3 min read',
                        spec: 'Developer Environment',
                        description: 'A code editor (such as VS Code or an integrated IDE) is a software tool used to write, edit, and manage code files. Code editors provide helpful developer features like syntax highlighting, auto-indentation, file navigation, and error checking.',
                        descriptionAr: 'محرر الأكواد (مثل VS Code أو بيئة التطوير المدمجة) هو أداة برمجية تستخدم لكتابة وتعديل وإدارة ملفات الكود. توفر محررات الأكواد ميزات مفيدة للمطورين مثل تمييز التركيب البرمجي، والمسافة البادئة التلقائية، والتنقل بين الملفات.',
                        specNote: 'Conceptual Overview: Code editors are where developers write and save program files before running them.',
                        specNoteAr: 'نظرة عامة مفاهيمية: محررات الأكواد هي المكان الذي يكتب فيه المطورون البرامج ويحفظونها قبل تشغيلها.',
                        code: ''
                    },
                    {
                        id: 'js-1-3',
                        lessonNumber: '1.3',
                        category: 'js',
                        title: 'Console',
                        readTime: '2 min read',
                        spec: 'Developer Console Output API',
                        description: 'The console is the primary developer interface for displaying messages, testing calculations, and debugging errors. The console.log() method outputs data to the browser developer console.',
                        descriptionAr: 'وحدة التحكم (Console) هي الواجهة الرئيسية للمطور لعرض الرسائل، واختبار الحسابات، وتنقيح الأخطاء. تُخرج دالة console.log() البيانات إلى وحدة تحكم مطور المتصفح.',
                        specNote: 'Usage: Open your browser inspect panel (F12 or right-click -> Inspect -> Console) to see console outputs.',
                        specNoteAr: 'الاستخدام: افتح لوحة الفحص في متصفحك (F12 أو انقر بزر الماوس الأيمن -> فحص -> Console) لرؤية مخرجات وحدة التحكم.',
                        code: `// Outputting text to the console
console.log("Hello, World!");
console.log("Welcome to Sprix Portal");`
                    },
                    {
                        id: 'js-1-4',
                        lessonNumber: '1.4',
                        category: 'js',
                        title: 'Comment',
                        readTime: '2 min read',
                        spec: 'Single-line & Multi-line Documentation',
                        description: 'Comments are notes written in code that are ignored by the JavaScript engine during execution. They explain what code does for yourself and other developers.',
                        descriptionAr: 'التعليقات هي ملاحظات مكتوبة داخل الكود يتجاهلها محرك جافا سكريبت أثناء التنفيذ. تشرح ما يفعله الكود لك وللمطورين الآخرين.',
                        specNote: 'Syntax: Use // for single-line comments and /* ... */ for multi-line comments.',
                        specNoteAr: 'التركيب: استخدم // للتعليقات أحادية السطر و /* ... */ للتعليقات متعددة الأسطر.',
                        code: `// This is a single-line comment

/* This is a 
   multi-line comment 
   spanning multiple lines */
console.log("Comments do not affect code execution");`
                    },
                    {
                        id: 'js-1-5',
                        lessonNumber: '1.5',
                        category: 'js',
                        title: 'Comment Out',
                        readTime: '2 min read',
                        spec: 'Debugging & Code Disabling',
                        description: '"Commenting out" means temporarily converting a line of code into a comment so it won\'t run. This is extremely useful when testing and debugging code.',
                        descriptionAr: '"إلغاء تفعيل الكود بالتعليق" يعني تحويل سطر برمجيا مؤقتاً إلى تعليق حتى لا يعمل. هذا مفيد جداً عند اختبار واكتشاف الأخطاء في الكود.',
                        specNote: 'Shortcut: Highlight lines in VS Code and press Ctrl+/ (or Cmd+/) to toggle comments.',
                        specNoteAr: 'اختصار: حدد الأسطر في VS Code واضغط Ctrl+/ (أو Cmd+/) لتبديل التعليقات.',
                        code: `console.log("This line will execute");

// console.log("This line is commented out and WILL NOT execute");

console.log("This line will also execute");`
                    }
                ]
            },

            // Chapter 2: Calculations and Strings
            {
                chapterId: 'js-ch2',
                chapterNumber: 'Ch 2',
                chapterTitle: 'Calculations and Strings',
                lessons: [
                    {
                        id: 'js-2-1',
                        lessonNumber: '2.1',
                        category: 'js',
                        title: 'How to Output to the Console',
                        readTime: '3 min read',
                        spec: 'Console Output & String vs Number Literals',
                        description: 'You can pass strings (text inside quotes) or numbers directly into console.log(). Quotes distinguish literal text from numeric calculations.',
                        descriptionAr: 'يمكنك تمرير النصوص (النص داخل علامات التنصيص) أو الأرقام مباشرة إلى console.log(). تميز علامات التنصيص النص الصريح عن الحسابات الرقمية.',
                        specNote: 'Difference: "1+1" inside quotes is printed as literal text "1+1", whereas 1+1 without quotes is calculated as 2.',
                        specNoteAr: 'الفارق: "1+1" داخل علامات التنصيص تُطبع كنص صريح "1+1"، بينما 1+1 بدون علامات تنصيص تُحسب كـ 2.',
                        code: `console.log("1+1"); // Outputs literal string: 1+1
console.log(1+1);   // Outputs numeric calculation: 2`
                    },
                    {
                        id: 'js-2-2',
                        lessonNumber: '2.2',
                        category: 'js',
                        title: 'Calculation Method',
                        readTime: '3 min read',
                        spec: 'Arithmetic Operators & Precedence',
                        description: 'JavaScript performs arithmetic operations using +, -, *, /, and %. Standard mathematical order of precedence applies (multiplication/division before addition/subtraction, parentheses first).',
                        descriptionAr: 'تجري جافا سكريبت العمليات الحسابية باستخدام +, -, *, /, و %. تنطبق أسبقية العمليات الرياضية القياسية (الضرب/القسمة قبل الجمع/الطرح، والأقواس أولاً).',
                        specNote: 'Parentheses: Use ( ) to override precedence rules and force specific order of calculations.',
                        specNoteAr: 'الأقواس: استخدم الأقواس ( ) لتجاوز قواعد الأسبقية وفرض ترتيب معين للحسابات.',
                        code: `console.log(10 + 5);     // Addition: 15
console.log(20 - 4);     // Subtraction: 16
console.log(6 * 7);      // Multiplication: 42
console.log(100 / 4);    // Division: 25
console.log(10 + 5 * 2); // Multiplication first: 20
console.log((10 + 5) * 2); // Parentheses first: 30`
                    },
                    {
                        id: 'js-2-3',
                        lessonNumber: '2.3',
                        category: 'js',
                        title: 'Consolidation',
                        readTime: '3 min read',
                        spec: 'String Concatenation & Mixed Expressions',
                        description: 'Consolidation combines text and calculation outputs together using the + operator for string concatenation.',
                        descriptionAr: 'دمج النصوص والحسابات يجمع بين النصوص ومخرجات الحسابات معاً باستخدام معامل + لربط النصوص.',
                        specNote: 'Concatenation Rule: When adding a string to a number, JavaScript converts the number to a string.',
                        specNoteAr: 'قاعدة الربط: عند إضافة نص إلى رقم، تحوّل جافا سكريبت الرقم إلى نص تلقائياً.',
                        code: `console.log("Total points: " + 100);
console.log("Score: " + (50 + 40) + " points");`
                    }
                ]
            },

            // Chapter 3: Variables
            {
                chapterId: 'js-ch3',
                chapterNumber: 'Ch 3',
                chapterTitle: 'Variables',
                lessons: [
                    {
                        id: 'js-3-1',
                        lessonNumber: '3.1',
                        category: 'js',
                        title: 'Declaration and Assignments',
                        readTime: '3 min read',
                        spec: 'Variable Allocation (let)',
                        description: 'Variables store data values in memory. Use "let" to declare a variable and assign a value using the equals sign =. The value stored in a "let" variable can be updated later in the program.',
                        descriptionAr: 'تخزن المتغيرات قيم البيانات في الذاكرة. استخدم "let" للإعلان عن متغير وتعيين قيمة له باستخدام علامة المساواة =. يمكن تحديث القيمة المخزنة لاحقاً في البرنامج.',
                        specNote: 'Assignment: The single equals sign = assigns the value on the right to the variable name on the left.',
                        specNoteAr: 'التعيين: تعين علامة المساواة المفردة = القيمة الموجودة على اليمين إلى اسم المتغير على اليسار.',
                        code: `// Declare a variable with let:
let x;

// Assign a value to a variable:
let y = 2; // y stores the number 2

// Update a variable's value:
y = 5; // y now stores 5
console.log(y);`
                    }
                ]
            },

            // Chapter 4: Test 1 Knowledge Assessment
            {
                chapterId: 'js-ch4',
                chapterNumber: 'Ch 4',
                chapterTitle: 'Test 1 Knowledge Check',
                isTest: true,
                isLocked: false,
                testQuestions: [
                    {
                        id: 'q1',
                        type: 'mcq',
                        question: '1. Select the correct program to output "Hello" to the console.',
                        questionAr: '1. اختر البرنامج الصحيح لإخراج "Hello" إلى وحدة التحكم.',
                        options: [
                            'console.log("Hello");',
                            'log.console("Hello");',
                            'consolelog("Hello")',
                            'console.logHello;'
                        ],
                        correctIndex: 0,
                        explanation: 'console.log("Hello"); is the standard JavaScript method to print output to the developer console.',
                        explanationAr: 'console.log("Hello"); هي الطريقة القياسية في جافا سكريبت لطباعة المخرجات في وحدة تحكم المطور.'
                    },
                    {
                        id: 'q2',
                        type: 'code',
                        question: '2. Output "Hello" to the console.',
                        questionAr: '2. اطبع كلمة "Hello" في وحدة التحكم.',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: 'Hello',
                        expectedAnswer: 'console.log("Hello");',
                        explanation: 'Use console.log("Hello"); to output the string "Hello".',
                        explanationAr: 'استخدم console.log("Hello"); لإخراج النص "Hello".'
                    },
                    {
                        id: 'q3',
                        type: 'code',
                        question: '3. Create your program as follows:\nChange "Leave this text." to a comment.\n*Execute the program and it will output "Make the first line a comment."',
                        questionAr: '3. أنشئ برنامجك كالتالي:\nحوّل "Leave this text." إلى تعليق.\n*نفّذ البرنامج وسيخرج "Make the first line a comment."',
                        initialCode: 'Leave this text.\nconsole.log("Make the first line a comment.");',
                        expectedOutput: 'Make the first line a comment.',
                        expectedAnswer: '//Leave this text.\nconsole.log("Make the first line a comment.");',
                        explanation: 'Add // at the start of the first line to convert it into a single-line comment.',
                        explanationAr: 'أضف // في بداية السطر الأول لتحويله إلى تعليق أحادي السطر.'
                    },
                    {
                        id: 'q4',
                        type: 'mcq',
                        question: '4. Select the correct program that will let the computer calculate "5+7" and output the calculation results to the console.',
                        questionAr: '4. اختر البرنامج الصحيح الذي يجعل الحاسوب يحسب "5+7" ويطبع ناتج الحساب في وحدة التحكم.',
                        options: [
                            'console.log(5" + "7);',
                            'console.log("5" + "7");',
                            'console.log("5 + 7");',
                            'console.log(5 + 7);'
                        ],
                        correctIndex: 3,
                        explanation: 'console.log(5 + 7); evaluates the mathematical addition (12) without quotes.',
                        explanationAr: 'console.log(5 + 7); يحسب عملية الجمع الرياضية (12) بدون علامات تنصيص.'
                    },
                    {
                        id: 'q5',
                        type: 'mcq',
                        question: '5. Select the correct symbol for multiplication used in the program.',
                        questionAr: '5. اختر الرمز الصحيح لعملية الضرب المستخدم في البرمجة.',
                        options: [
                            '/',
                            '+',
                            '-',
                            '*'
                        ],
                        correctIndex: 3,
                        explanation: 'The asterisk (*) is the operator for multiplication in programming.',
                        explanationAr: 'رمز النجمة (*) هو معامل عملية الضرب في البرمجة.'
                    },
                    {
                        id: 'q6',
                        type: 'code',
                        question: '6. Let the computer calculate "3*5" and output "The answer is 15." to the console.',
                        questionAr: '6. اجعل الحاسوب يحسب "3*5" واطبع "The answer is 15." في وحدة التحكم.',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: 'The answer is 15.',
                        expectedAnswer: 'console.log("The answer is " + (3 * 5) + ".");',
                        explanation: 'console.log("The answer is " + (3 * 5) + "."); concatenates text string with the calculation result.',
                        explanationAr: 'console.log("The answer is " + (3 * 5) + "."); يربط بين النص الصريح ونتيجة الحساب.'
                    },
                    {
                        id: 'q7',
                        type: 'mcq',
                        question: '7. Select the correct declaration for the variable number.',
                        questionAr: '7. اختر الإعلان الصحيح للمتغير number.',
                        options: [
                            'number;',
                            'let number;',
                            'let = number;',
                            'number let;'
                        ],
                        correctIndex: 1,
                        explanation: 'let number; uses the keyword let followed by the variable name.',
                        explanationAr: 'let number; يستخدم الكلمة المفتاحية let متبوعة باسم المتغير.'
                    },
                    {
                        id: 'q8',
                        type: 'code',
                        question: '8. Create your program as follows:\n(1) Declare the variable num.\n(2) Assign 5 to num.\n(3) Output the value of num to the console.',
                        questionAr: '8. أنشئ برنامجك كالتالي:\n(1) أعلن عن المتغير num.\n(2) عين 5 للمتغير num.\n(3) اطبع قيمة num في وحدة التحكم.',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: '5',
                        expectedAnswer: 'let num;\nnum = 5;\nconsole.log(num);',
                        explanation: 'Declare with let num;, assign with num = 5;, and output with console.log(num);',
                        explanationAr: 'أعلن بواسطة let num;، وعيّن القيمة num = 5;، واطبع بواسطة console.log(num);'
                    }
                ],
                lessons: [
                    {
                        id: 'js-4-test',
                        lessonNumber: '4.0',
                        category: 'js',
                        title: 'Test 1 Assessment',
                        readTime: '10 min assessment',
                        spec: 'Interactive Test 1',
                        description: 'Complete the 8 questions below (multiple-choice and live code editor problems) covering Chapters 1 to 3.',
                        specNote: 'Click Submit Quiz Answers after filling out your responses to test your code.',
                        code: `// Test 1 Assessment: Complete all 8 problems below`
                    }
                ]
            },

            // Chapter 5: IF Statement
            {
                chapterId: 'js-ch5',
                chapterNumber: 'Ch 5',
                chapterTitle: 'IF Statement',
                lessons: [
                    {
                        id: 'js-5-1',
                        lessonNumber: '5.1',
                        category: 'js',
                        title: 'How to Write Variables',
                        readTime: '3 min read',
                        spec: 'Variable Scope & Prep for Conditionals',
                        description: 'Before writing conditionals, initialize variables with values (like scores, ranks, or status) that will be tested in conditional expressions.',
                        descriptionAr: 'قبل كتابة الشروط، قم بتهيئة المتغيرات بقيم (مثل النقاط أو الرتبة أو الحالة) التي سيتم اختبارها في التعبيرات الشرطية.',
                        specNote: 'Initialization: Always assign an initial value to your variable before testing it in an if statement.',
                        specNoteAr: 'التهيأة: قم دائماً بتعيين قيمة أولية لمتغيرك قبل اختباره في جملة if.',
                        code: `let y = 2;
let score = 85;
let isLoggedIn = true;`
                    },
                    {
                        id: 'js-5-2',
                        lessonNumber: '5.2',
                        category: 'js',
                        title: 'IF Statement Syntax',
                        readTime: '3 min read',
                        spec: 'Conditional Statement Structure',
                        description: 'An if statement executes a block of code enclosed in curly braces { } only if its condition inside parentheses ( ) evaluates to true.',
                        descriptionAr: 'تنفذ جملة if كتلة الكود المحصورة بين الأقواس المعقوفة { } فقط إذا كانت صيغة الشرط داخل الأقواس ( ) تُرجع قيمة صحيحة (true).',
                        specNote: 'Syntax Rule: if (condition) { // code to run if true }',
                        specNoteAr: 'قاعدة التركيب: if (الشرط) { // الكود المراد تشغيله إذا كان الشرط صحيحاً }',
                        code: `let y = 2;

// IF statement check:
if (y > 1) {
    console.log("y is greater than 1");
}`
                    },
                    {
                        id: 'js-5-3',
                        lessonNumber: '5.3',
                        category: 'js',
                        title: 'How IF Statement Works',
                        readTime: '3 min read',
                        spec: 'Boolean Evaluation Mechanics',
                        description: 'The condition inside parentheses is evaluated as a boolean (true or false). If true, the code inside { } runs. If false, the code inside { } is skipped completely.',
                        descriptionAr: 'يتم تقييم الشرط داخل الأقواس كقيمة بولينية (صحيح true أو خاطئ false). إذا كان صحيحاً، يعمل الكود داخل { }. وإذا كان خاطئاً، يتم تخطي الكود بالكامل.',
                        specNote: 'Execution: If y = 0 in y > 1, the condition evaluates to false and console.log does not run.',
                        specNoteAr: 'التنفيذ: إذا كانت y = 0 في الشرط y > 1، يُرجع الشرط خاطئ false ولا يتم تشغيل console.log.',
                        code: `let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}`
                    }
                ]
            },

            // Chapter 6: IF-ELSE Statement
            {
                chapterId: 'js-ch6',
                chapterNumber: 'Ch 6',
                chapterTitle: 'IF-ELSE Statement',
                lessons: [
                    {
                        id: 'js-6-1',
                        lessonNumber: '6.1',
                        category: 'js',
                        title: 'IF-ELSE Statement',
                        readTime: '3 min read',
                        spec: 'Dual Branching Control Flow',
                        description: 'An if-else statement provides a fallback code block. If the if condition is true, the if block runs. If the if condition is false, the else block runs.',
                        descriptionAr: 'توفر جملة if-else مساراً بديلاً للكود. إذا كان شرط if صحيحاً، يتم تنفيذ كتلة if. وإذا كان شرط if خاطئاً، يتم تنفيذ كتلة else.',
                        specNote: 'Rule: The else block runs ONLY when the initial if condition is false.',
                        specNoteAr: 'القاعدة: تعمل كتلة else فقط عندما يكون شرط if الأولي خاطئاً (false).',
                        code: `let y = 2;

if (y > 1) {
    console.log("y is greater than 1");
} else { // else = if the first condition is false do this
    console.log("y is less than or equal to 1");
}`
                    },
                    {
                        id: 'js-6-2',
                        lessonNumber: '6.2',
                        category: 'js',
                        title: 'Operators (Comparison)',
                        readTime: '4 min read',
                        spec: 'Comparison Operators (==, ===, >, <, >=, <=)',
                        description: 'Comparison operators compare two values in conditional checks. Loose equal == checks values; strict equal === checks values AND data types strictly.',
                        descriptionAr: 'تقارن معاملات المقارنة بين قيمتين في الفحوصات الشرطية. يقارن المعامل الضمني == القيم فقط، بينما يقارن المعامل الصارم === القيم وأنواع البيانات بدقة.',
                        specNote: 'Strictness: Always prefer === over == to prevent implicit type conversion bugs.',
                        specNoteAr: 'الدقة: يفضل دائماً استخدام === بدلاً من == لمنع أخطاء التحويل التلقائي للأنواع.',
                        code: `console.log(1 == "1");  // true  (loose equality - ignores type)
console.log(1 === "1"); // false (strict equality - compares type too)

// Comparison operators:
// >  (greater than)
// <  (less than)
// >= (greater than or equal to)
// <= (less than or equal to)`
                    }
                ]
            },

            // Chapter 7: Else IF
            {
                chapterId: 'js-ch7',
                chapterNumber: 'Ch 7',
                chapterTitle: 'Else IF',
                lessons: [
                    {
                        id: 'js-7-1',
                        lessonNumber: '7.1',
                        category: 'js',
                        title: 'Else IF Statement',
                        readTime: '4 min read',
                        spec: 'Multi-Branch Conditional Chaining',
                        description: 'When you have more than two possible outcomes, use "else if" to check secondary conditions if the first condition evaluates to false.',
                        descriptionAr: 'عندما يكون لديك أكثر من نتيجتين محتملتين، استخدم "else if" للتحقق من شروط ثانوية إذا أسفر الشرط الأول عن قيمة خاطئة.',
                        specNote: 'Flow: Conditions are evaluated top to bottom. As soon as one condition evaluates to true, its block runs and the remaining branches are skipped.',
                        specNoteAr: 'التدفق: يتم تقييم الشروط من الأعلى إلى الأسفل. بمجرد أن يُرجع أحد الشروط قيمة صحيحة، يتم تنفيذ كتلته وتخطي بقية الفروع.',
                        code: `let y = 2;

if (y > 1) {
    console.log("y is greater than 1");
} else if (y < 1) { // else if = if the first condition is false check this condition
    console.log("y is less than 1");
} else {
    console.log("y is equal to 1");
}`
                    }
                ]
            },

            // Chapter 8: Test 2 Knowledge Check
            {
                chapterId: 'js-ch8',
                chapterNumber: 'Ch 8',
                chapterTitle: 'Test 2 Knowledge Check',
                isTest: true,
                isLocked: false,
                testQuestions: [
                    {
                        id: 'q1',
                        type: 'code',
                        question: '1. Create your program as follows:\n\n(1) Declare the variable num and assign 7.\n(2) If variable num is equal to 7, output "Correct".',
                        questionAr: '1. أنشئ برنامجك كالتالي:\n\n(1) أعلن عن المتغير num وعيّن له القيمة 7.\n(2) إذا كانت قيمة المتغير num تساوي 7، اطبع "Correct".',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: 'Correct',
                        expectedAnswer: 'let num = 7;\nif (num == 7) {\nconsole.log(\"Correct\");\n}',
                        explanation: 'Declare let num = 7; then use if (num == 7) { console.log("Correct"); } to check equality and print.',
                        explanationAr: 'أعلن let num = 7; ثم استخدم if (num == 7) { console.log("Correct"); } للتحقق من المساواة والطباعة.'
                    },
                    {
                        id: 'q2',
                        type: 'mcq',
                        question: '2. Please select the output result of the following program.\n\nlet num = 10;\nconsole.log(num == 10);',
                        questionAr: '2. اختر ناتج تنفيذ البرنامج التالي.\n\nlet num = 10;\nconsole.log(num == 10);',
                        options: [
                            '100',
                            'true',
                            'false',
                            '10'
                        ],
                        correctIndex: 1,
                        explanation: 'num == 10 compares the value of num (10) with 10. Since they are equal, the expression evaluates to true.',
                        explanationAr: 'يقارن num == 10 قيمة num (وهي 10) مع 10. بما أنهما متساويان، يرجع التعبير true.'
                    },
                    {
                        id: 'q3',
                        type: 'code',
                        question: '3. On the second line, enter the conditional expression:\n\n(1) If the value of the variable score is greater than or equal to 60, "Pass", otherwise "Fail".\n*Enter only the conditional expression.\n\nlet score = 70;\nif(______){console.log("Pass");}\nelse{console.log("Fail");}',
                        questionAr: '3. في السطر الثاني، أدخل التعبير الشرطي:\n\n(1) إذا كانت قيمة المتغير score أكبر من أو تساوي 60، اطبع "Pass"، وإلا اطبع "Fail".\n*أدخل التعبير الشرطي فقط.',
                        initialCode: 'let score = 70;\nif(){console.log("Pass");}\nelse{console.log("Fail");}',
                        expectedOutput: 'Pass',
                        expectedAnswer: 'let score = 70;\nif(score >= 60){console.log(\"Pass\");}\nelse{console.log(\"Fail\");}',
                        explanation: 'The conditional expression score >= 60 checks if score is greater than or equal to 60. Since score is 70, it outputs "Pass".',
                        explanationAr: 'يتحقق التعبير الشرطي score >= 60 مما إذا كانت score أكبر من أو تساوي 60. بما أن score هي 70، يطبع "Pass".'
                    },
                    {
                        id: 'q4',
                        type: 'mcq',
                        question: '4. Select a program with the conditional expression "the value of the variable num is less than 20".',
                        questionAr: '4. اختر البرنامج الذي يحتوي على التعبير الشرطي "قيمة المتغير num أقل من 20".',
                        options: [
                            'num <= 20',
                            'num >= 20',
                            'num == 20',
                            'num < 20'
                        ],
                        correctIndex: 3,
                        explanation: 'num < 20 means "num is less than 20". Note: <= means less than or equal, which is different from strictly less than (<).',
                        explanationAr: 'num < 20 تعني "num أقل من 20". ملاحظة: <= تعني أقل من أو يساوي، وهو مختلف عن أقل من فقط (<).'
                    },
                    {
                        id: 'q5',
                        type: 'code',
                        question: '5. Create your program as follows:\n\n(1) Declare the variable num and assign 100 to it.\n(2) If variable num is equal to 100, output "correct".\n(3) If not, "miss" is output.',
                        questionAr: '5. أنشئ برنامجك كالتالي:\n\n(1) أعلن عن المتغير num وعيّن له القيمة 100.\n(2) إذا كانت قيمة num تساوي 100، اطبع "correct".\n(3) وإلا، اطبع "miss".',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: 'correct',
                        expectedAnswer: 'let num = 100;\nif (num == 100) {\nconsole.log(\"correct\");\n} else {\nconsole.log(\"miss\");\n}',
                        explanation: 'Declare let num = 100; then use if (num == 100) to check. Since 100 == 100, it outputs "correct". The else block handles the false case.',
                        explanationAr: 'أعلن let num = 100; ثم استخدم if (num == 100) للتحقق. بما أن 100 == 100، يطبع "correct". كتلة else تتعامل مع الحالة الخاطئة.'
                    },
                    {
                        id: 'q6',
                        type: 'mcq',
                        question: '6. Please select the output result of the following program.\n\nlet score = 92;\nif (score == 100){console.log("Perfect score");}\nelse if (score >= 80){console.log("So close");}\nelse if (score >= 60){console.log("Pass");}',
                        questionAr: '6. اختر ناتج تنفيذ البرنامج التالي.\n\nlet score = 92;\nif (score == 100){console.log("Perfect score");}\nelse if (score >= 80){console.log("So close");}\nelse if (score >= 60){console.log("Pass");}',
                        options: [
                            'Pass',
                            'So close',
                            'Perfect score',
                            'No output'
                        ],
                        correctIndex: 1,
                        explanation: 'score is 92. First check: 92 == 100 is false. Second check: 92 >= 80 is true → outputs "So close". Remaining branches are skipped.',
                        explanationAr: 'قيمة score هي 92. الفحص الأول: 92 == 100 خاطئ. الفحص الثاني: 92 >= 80 صحيح → يطبع "So close". يتم تخطي بقية الفروع.'
                    },
                    {
                        id: 'q7',
                        type: 'code',
                        question: '7. Create a program as follows:\n\n(1) If variable num is less than or equal to 3, output "A".\n(2) If not, and if num is greater than or equal to 6, output "B".\n(3) If not, output "C".\n\nlet num = 4;\nif (______){console.log("A");}\nelse if (_______){console.log("B");}\nelse{console.log("C");}',
                        questionAr: '7. أنشئ برنامجك كالتالي:\n\n(1) إذا كانت قيمة num أقل من أو تساوي 3، اطبع "A".\n(2) وإلا، وإذا كانت num أكبر من أو تساوي 6، اطبع "B".\n(3) وإلا، اطبع "C".',
                        initialCode: 'let num = 4;\nif (){console.log("A");}\nelse if (){console.log("B");}\nelse{console.log("C");}',
                        expectedOutput: 'C',
                        expectedAnswer: 'let num = 4;\nif (num <= 3){console.log(\"A\");}\nelse if (num >= 6){console.log(\"B\");}\nelse{console.log(\"C\");}',
                        explanation: 'num is 4. First: 4 <= 3 is false. Second: 4 >= 6 is false. Falls through to else → outputs "C".',
                        explanationAr: 'قيمة num هي 4. الأول: 4 <= 3 خاطئ. الثاني: 4 >= 6 خاطئ. ينتقل إلى else → يطبع "C".'
                    }
                ],
                lessons: [
                    {
                        id: 'js-8-test',
                        lessonNumber: '8.0',
                        category: 'js',
                        title: 'Test 2 Assessment',
                        readTime: '10 min assessment',
                        spec: 'Interactive Test 2',
                        description: 'Complete the 7 questions below (multiple-choice and live code editor problems) covering Chapters 5 to 7 (IF, IF-ELSE, ELSE IF statements and comparison operators).',
                        descriptionAr: 'أكمل الأسئلة السبعة أدناه (أسئلة اختيار متعدد ومحرر كود مباشر) تغطي الفصول 5 إلى 7 (جمل IF و IF-ELSE و ELSE IF ومعاملات المقارنة).',
                        specNote: 'Click Submit Quiz Answers after filling out your responses to test your code.',
                        specNoteAr: 'انقر على زر إرسال إجابات الاختبار بعد ملء إجاباتك لاختبار الكود.',
                        code: `// Test 2 Assessment: Complete all 7 problems below`
                    }
                ]
            },

            // Chapter 9: Logical Operators
            {
                chapterId: 'js-ch9',
                chapterNumber: 'Ch 9',
                chapterTitle: 'Logical Operators',
                lessons: [
                    {
                        id: 'js-9-1',
                        lessonNumber: '9.1',
                        category: 'js',
                        title: 'Logical Operator Syntax',
                        readTime: '3 min read',
                        spec: 'Logical AND (&&), OR (||), NOT (!)',
                        description: 'Logical operators combine or invert boolean checks inside conditional statements.',
                        descriptionAr: 'تدمج المعاملات المنطقية أو تعكس الفحوصات البولينية داخل الجمل الشرطية.',
                        specNote: 'Key Operators: && means AND; || means OR; ! means NOT.',
                        specNoteAr: 'المعاملات الرئيسية: && تعني "و" (AND)؛ || تعني "أو" (OR)؛ ! تعني "ليس" (NOT).',
                        code: `// && (AND): Both conditions must be true
// || (OR): At least one condition must be true
// !  (NOT): Inverts boolean value (true becomes false)`
                    },
                    {
                        id: 'js-9-2',
                        lessonNumber: '9.2',
                        category: 'js',
                        title: 'Use of Logical Operators',
                        readTime: '4 min read',
                        spec: 'Combining Boolean Checks in Practice',
                        description: 'Logical operators allow you to test multiple conditions in a single if statement without nesting multiple if blocks.',
                        descriptionAr: 'تتيح لك المعاملات المنطقية اختبار شروط متعددة في جملة if واحدة دون الحاجة لتداخل كتل if متعددة.',
                        specNote: 'Example: Checking if a user is eligible based on both age AND active membership status.',
                        specNoteAr: 'مثال: التحقق مما إذا كان المستخدم مؤهلاً بناءً على كل من العمر وحالة العضوية النشطة معاً.',
                        code: `let age = 20;
let hasLicense = true;

// Both conditions must be true:
if (age >= 18 && hasLicense) {
    console.log("You can drive");
}

let isWeekend = true;
let isHoliday = false;

// At least one condition must be true:
if (isWeekend || isHoliday) {
    console.log("No work today!");
}`
                    }
                ]
            },

            // Chapter 10: Iterative Operation
            {
                chapterId: 'js-ch10',
                chapterNumber: 'Ch 10',
                chapterTitle: 'Iterative Operation',
                lessons: [
                    {
                        id: 'js-10-1',
                        lessonNumber: '10.1',
                        category: 'js',
                        title: 'Newline & Indentation in Programs',
                        readTime: '3 min read',
                        spec: 'Code Formatting & Readability Standards',
                        description: 'In programming, a new line is started when an opening left curly bracket "{" appears, and before a closing right curly bracket "}" appears. Indentation is the practice of inserting spaces at the beginning of a line to make code structured and easy to read.',
                        descriptionAr: 'في البرمجة، يبدأ سطر جديد عند ظهور القوس المعقوف الفاتح "{" وقبل القوس المغلق "}". المسافة البادئة هي إضافة مسافات في بداية السطر لجعل الكود مهيكلاً وسهل القراءة.',
                        specNote: 'Readability Rule: Always indent statements inside curly braces { } to visually represent code blocks clearly.',
                        specNoteAr: 'قاعدة القراءة: أضف دائماً مسافة بادئة للتعليمات داخل الأقواس المعقوفة { } لتمثيل كتل الكود وضوحاً.',
                        code: `// Proper Newlines and Indentation Syntax:
if (score >= 80) {
    console.log("New line starts after opening left curly bracket {");
    console.log("Indentation (spaces) added at start of inner lines");
} // New line before closing right curly bracket }`
                    },
                    {
                        id: 'js-10-2',
                        lessonNumber: '10.2',
                        category: 'js',
                        title: 'Iterative Process',
                        readTime: '4 min read',
                        spec: 'For Loop Syntax & Execution Cycle',
                        description: 'An iterative process repeats a block of code multiple times. A for loop uses an index variable (let i = 0), a continuation condition (i < 10), and an increment step (i++).',
                        descriptionAr: 'تكرر العملية التكرارية كتلة من الكود عدة مرات. تستخدم حلقة for متغير عداد (let i = 0)، وشرط استمرار (i < 10)، وخطوة تزايد (i++).',
                        specNote: 'Loop Parts: for (initialization; condition; increment) { // repeated block }',
                        specNoteAr: 'أجزاء الحلقة: for (التهيئة; الشرط; التزايد) { // الكتلة المكررة }',
                        code: `// To make a loop:
for (let i = 0; i < 10; i++) { // ++ means increment value is 1
    console.log("hi");
}`
                    },
                    {
                        id: 'js-10-3',
                        lessonNumber: '10.3',
                        category: 'js',
                        title: 'Increment',
                        readTime: '3 min read',
                        spec: 'Increment Operators (++, +=)',
                        description: 'Incrementing means increasing a variable value by a specific step. ++ increases by 1 (e.g. i++). += adds a specified value (e.g. i += 2).',
                        descriptionAr: 'يعني التزايد زيادة قيمة المتغير بمقدار خطوة محددة. يزود ++ بمقدار 1 (مثل i++). ويضيف += قيمة محددة (مثل i += 2).',
                        specNote: 'Shorthand: i = i + 1 is written as i++. i = i + 3 is written as i++. i += 3 is written as i += 3.',
                        specNoteAr: 'اختصار: تُكتب i = i + 1 بصيغة i++. وتُكتب i = i + 3 بصيغة i += 3.',
                        code: `let count = 0;
count++;    // count becomes 1
count += 5; // count becomes 6 (count = count + 5)
console.log("Incremented Count:", count);`
                    }
                ]
            },
            // Chapter 11: Test 3 Knowledge Check
            {
                chapterId: 'js-ch11',
                chapterNumber: 'Ch 11',
                chapterTitle: 'Test 3 Knowledge Check',
                isTest: true,
                isLocked: false,
                testQuestions: [
                    {
                        id: 'q1',
                        type: 'mcq',
                        question: '1. Select the program that means "A or B".',
                        questionAr: '1. اختر البرنامج الذي يعني "A أو B".',
                        options: [
                            'A == B',
                            'A < B',
                            'A || B',
                            'A && B'
                        ],
                        correctIndex: 2,
                        explanation: '|| is the logical OR operator. It returns true if at least one of the conditions (A or B) is true. && means AND (both must be true).',
                        explanationAr: '|| هو معامل OR المنطقي. يرجع true إذا كان واحد على الأقل من الشرطين (A أو B) صحيحاً. && يعني AND (كلاهما يجب أن يكون صحيحاً).'
                    },
                    {
                        id: 'q2',
                        type: 'mcq',
                        question: '2. Please select the output result of the following program.\n\nlet num = 9;\nif (num <= 3 || num >= 7) {console.log("A");}\nelse{console.log("B");}',
                        questionAr: '2. اختر ناتج تنفيذ البرنامج التالي.\n\nlet num = 9;\nif (num <= 3 || num >= 7) {console.log("A");}\nelse{console.log("B");}',
                        options: [
                            'A',
                            'B',
                            '9',
                            'No output'
                        ],
                        correctIndex: 0,
                        explanation: 'num is 9. Check: 9 <= 3 is false, BUT 9 >= 7 is true. Since || (OR) only needs one side to be true, the condition passes → outputs "A".',
                        explanationAr: 'قيمة num هي 9. التحقق: 9 <= 3 خاطئ، لكن 9 >= 7 صحيح. بما أن || (أو) يحتاج فقط أن يكون جانب واحد صحيحاً، الشرط يتحقق → يطبع "A".'
                    },
                    {
                        id: 'q3',
                        type: 'mcq',
                        question: '3. Select the correct program to add 1 to variable i.',
                        questionAr: '3. اختر البرنامج الصحيح لإضافة 1 إلى المتغير i.',
                        options: [
                            'i+',
                            '1+1',
                            'i++',
                            'i++1'
                        ],
                        correctIndex: 2,
                        explanation: 'i++ is the increment operator that adds 1 to the variable i. It is shorthand for i = i + 1.',
                        explanationAr: 'i++ هو معامل التزايد الذي يضيف 1 إلى المتغير i. وهو اختصار لـ i = i + 1.'
                    },
                    {
                        id: 'q4',
                        type: 'mcq',
                        question: '4. Select the correct answer for the program that repeats the specified processing 10 times.',
                        questionAr: '4. اختر الإجابة الصحيحة للبرنامج الذي يكرر المعالجة المحددة 10 مرات.',
                        options: [
                            'for (i<10; let i=0; i++) { Specified process }',
                            'for (let i=0; i++; i<10) { Specified process }',
                            'for (let i=0; i<10; i++) { Specified process }',
                            'for { Specified process } (let i=0; i<10; i++)'
                        ],
                        correctIndex: 2,
                        explanation: 'The correct for loop syntax is: for (initialization; condition; increment). So: for (let i=0; i<10; i++) runs the code 10 times (i goes from 0 to 9).',
                        explanationAr: 'صيغة حلقة for الصحيحة هي: for (تهيئة; شرط; تزايد). إذن: for (let i=0; i<10; i++) تنفذ الكود 10 مرات (i من 0 إلى 9).'
                    },
                    {
                        id: 'q5',
                        type: 'mcq',
                        question: '5. Please select the output result of the following program.\n\nfor (let i = 0; i < 2; i++) {\n console.log("Hello");\n};',
                        questionAr: '5. اختر ناتج تنفيذ البرنامج التالي.\n\nfor (let i = 0; i < 2; i++) {\n console.log("Hello");\n};',
                        options: [
                            'Hello\nHello',
                            'No output',
                            'Hello\nHello\nHello',
                            'Hello'
                        ],
                        correctIndex: 0,
                        explanation: 'The loop starts at i=0 and runs while i<2. So it executes when i=0 and i=1 (2 iterations), printing "Hello" twice.',
                        explanationAr: 'تبدأ الحلقة عند i=0 وتعمل طالما i<2. فتنفذ عند i=0 و i=1 (تكراران)، وتطبع "Hello" مرتين.'
                    },
                    {
                        id: 'q6',
                        type: 'code',
                        question: '6. Create your program as follows:\n\n(1) Output "Good morning" 10 times to the console.\n*Variable name is i and assign 0 at the beginning.\nUse the increment operator.',
                        questionAr: '6. أنشئ برنامجك كالتالي:\n\n(1) اطبع "Good morning" 10 مرات في وحدة التحكم.\n*اسم المتغير i وعيّن 0 في البداية.\nاستخدم معامل التزايد.',
                        initialCode: '// Write your code below:\n',
                        expectedOutput: 'Good morning\nGood morning\nGood morning\nGood morning\nGood morning\nGood morning\nGood morning\nGood morning\nGood morning\nGood morning',
                        expectedAnswer: 'for (let i = 0; i < 10; i++) {\nconsole.log(\"Good morning\");\n}',
                        explanation: 'Use for (let i = 0; i < 10; i++) { console.log("Good morning"); } to repeat the output 10 times.',
                        explanationAr: 'استخدم for (let i = 0; i < 10; i++) { console.log("Good morning"); } لتكرار الطباعة 10 مرات.'
                    },
                    {
                        id: 'q7',
                        type: 'code',
                        question: '7. Create your program as follows:\n\n(1) If variable a is greater than or equal to 2 AND b is greater than or equal to 3, output "Condition met".\n*Only the conditional expression should be entered.\n\nlet a = 4;\nlet b = 3;\nif (________){\nconsole.log("Condition met");\n}',
                        questionAr: '7. أنشئ برنامجك كالتالي:\n\n(1) إذا كانت a أكبر من أو تساوي 2 و b أكبر من أو تساوي 3، اطبع "Condition met".\n*أدخل التعبير الشرطي فقط.',
                        initialCode: 'let a = 4;\nlet b = 3;\nif (){\nconsole.log(\"Condition met\");\n}',
                        expectedOutput: 'Condition met',
                        expectedAnswer: 'let a = 4;\nlet b = 3;\nif (a >= 2 && b >= 3){\nconsole.log(\"Condition met\");\n}',
                        explanation: 'Use a >= 2 && b >= 3 as the conditional expression. && (AND) requires BOTH conditions to be true. a=4 >= 2 ✓ and b=3 >= 3 ✓ → outputs "Condition met".',
                        explanationAr: 'استخدم a >= 2 && b >= 3 كتعبير شرطي. && (و) يتطلب أن يكون كلا الشرطين صحيحاً. a=4 >= 2 ✓ و b=3 >= 3 ✓ → يطبع "Condition met".'
                    },
                    {
                        id: 'q8',
                        type: 'code',
                        question: '8. Create your program as follows:\n\n(1) Output "Hello" three times to the console.\n*Variable name is i and assign 0 at the beginning.\nUse the increment operator.\n\n______(____________) {\n console.log("Hello");\n}',
                        questionAr: '8. أنشئ برنامجك كالتالي:\n\n(1) اطبع "Hello" ثلاث مرات في وحدة التحكم.\n*اسم المتغير i وعيّن 0 في البداية.\nاستخدم معامل التزايد.',
                        initialCode: '// Write your full for loop below:\n',
                        expectedOutput: 'Hello\nHello\nHello',
                        expectedAnswer: 'for (let i = 0; i < 3; i++) {\nconsole.log(\"Hello\");\n}',
                        explanation: 'Use for (let i = 0; i < 3; i++) { console.log("Hello"); } — the loop runs 3 times (i=0, i=1, i=2).',
                        explanationAr: 'استخدم for (let i = 0; i < 3; i++) { console.log("Hello"); } — تعمل الحلقة 3 مرات (i=0, i=1, i=2).'
                    }
                ],
                lessons: [
                    {
                        id: 'js-11-test',
                        lessonNumber: '11.0',
                        category: 'js',
                        title: 'Test 3 Assessment',
                        readTime: '10 min assessment',
                        spec: 'Interactive Test 3',
                        description: 'Complete the 8 questions below (multiple-choice and live code editor problems) covering Chapters 9 to 10 (Logical Operators, For Loops, and combining conditionals with iteration).',
                        descriptionAr: 'أكمل الأسئلة الثمانية أدناه (أسئلة اختيار متعدد ومحرر كود مباشر) تغطي الفصول 9 إلى 10 (المعاملات المنطقية وحلقات For والجمع بين الشروط والتكرار).',
                        specNote: 'Click Submit Quiz Answers after filling out your responses to test your code.',
                        specNoteAr: 'انقر على زر إرسال إجابات الاختبار بعد ملء إجاباتك لاختبار الكود.',
                        code: `// Test 3 Assessment: Complete all 8 problems below`
                    }
                ]
            },

            // Chapter 12: Function 1
            {
                chapterId: 'js-ch12',
                chapterNumber: 'Ch 12',
                chapterTitle: 'Function 1',
                lessons: [
                    {
                        id: 'js-12-1',
                        lessonNumber: '12.1',
                        category: 'js',
                        title: 'what is a function',
                        readTime: '3 min read',
                        spec: 'Reusable Code Blocks',
                        description: 'A function is a reusable block of code designed to perform a specific task. Instead of repeating the same code multiple times across a program, you wrap it in a function and call it whenever needed.',
                        descriptionAr: 'الدالة (Function) هي كتلة كود قابلة للإعادة الاستخدام مصممة لتنفيذ مهمة محددة. بدلاً من تكرار نفس الكود عدة مرات في البرنامج، تغلفه داخل دالة واستدعيها كلما احتجت إليها.',
                        specNote: 'Conceptual Overview: Functions promote code modularity, readability, and reduce duplication (DRY principle).',
                        specNoteAr: 'نظرة عامة مفاهيمية: تعزز الدوال النمطية وقابلية قراءة الكود وتقليل التكرار (مبدأ DRY).',
                        code: `// Defining a simple function:
function sayHello() {
    console.log("Hello! Welcome to Sprix Portal.");
}

// Calling the function:
sayHello();
sayHello();`
                    },
                    {
                        id: 'js-12-2',
                        lessonNumber: '12.2',
                        category: 'js',
                        title: 'how to create a function',
                        readTime: '4 min read',
                        spec: 'Function Syntax, Parameters & Return Values',
                        description: 'Create a function using the "function" keyword, followed by a name, parentheses (), and curly braces {} containing executable statements. Functions can take parameters as input and return values using the "return" keyword.',
                        descriptionAr: 'تُنشأ الدالة باستخدام الكلمة المفتاحية "function" متبوعة باسم الدالة، ثم أقواس ()، وأقواس معقوفة {} تحتوي على الكود. يمكن للدوال استقبال معلمات كمدخلات وإرجاع نتائج باستخدام الكلمة المفتاحية "return".',
                        specNote: 'Syntax: function name(param1, param2) { // code block; return result; }',
                        specNoteAr: 'التركيب: function name(param1, param2) { // كتلة الكود; return result; }',
                        code: `// Function with parameters and return value:
function addNumbers(a, b) {
    let total = a + b;
    return total;
}

let result = addNumbers(5, 10);
console.log("Result of 5 + 10 =", result);`
                    }
                ]
            },

            // Chapter 13: Function 2
            {
                chapterId: 'js-ch13',
                chapterNumber: 'Ch 13',
                chapterTitle: 'Function 2',
                lessons: [
                    {
                        id: 'js-13-1',
                        lessonNumber: '13.1',
                        category: 'js',
                        title: 'truncate a fraction',
                        readTime: '3 min read',
                        spec: 'Mathematical Truncation & Rounding (Math.trunc)',
                        description: 'Truncating a fraction means removing its decimal portion to keep only the integer part. In JavaScript, Math.floor() rounds down, Math.ceil() rounds up, Math.round() rounds to nearest integer, and Math.trunc() simply cuts off decimal digits.',
                        descriptionAr: 'إزالة الكسر العشري تعني التخلص من الأرقام بعد الفاصلة العشرية والاحتفاظ بالعدد الصحيح فقط. في جافا سكريبت، تقرب Math.floor() للأدنى، و Math.ceil() للأعلى، و Math.round() لأقرب عدد صحيح، بينما تقطع Math.trunc() الكسر العشري مباشرة.',
                        specNote: 'Behavior: Math.trunc(15.89) returns 15, while Math.round(15.89) returns 16.',
                        specNoteAr: 'السلوك: Math.trunc(15.89) ترجع 15، بينما Math.round(15.89) ترجع 16.',
                        code: `let price = 15.89;

console.log("Original Price:", price);
console.log("Math.trunc(price):", Math.trunc(price)); // 15
console.log("Math.floor(price):", Math.floor(price)); // 15
console.log("Math.ceil(price):", Math.ceil(price));   // 16
console.log("Math.round(price):", Math.round(price)); // 16`
                    },
                    {
                        id: 'js-13-2',
                        lessonNumber: '13.2',
                        category: 'js',
                        title: 'how to create random numbers',
                        readTime: '4 min read',
                        spec: 'Pseudo-Random Generation (Math.random)',
                        description: 'JavaScript provides Math.random(), which returns a floating-point random number between 0 (inclusive) and 1 (exclusive). To generate a random integer within a range (e.g. 1 to 10), multiply Math.random() by the range size and apply Math.floor().',
                        descriptionAr: 'توفر جافا سكريبت دالة Math.random() التي ترجع رقماً عشرياً عشوائياً بين 0 (مشمول) و 1 (غير مشمول). لتوليد عدد صحيح عشوائي ضمن نطاق (مثل من 1 إلى 10)، اضرب Math.random() في مدى النطاق واستخدم Math.floor().',
                        specNote: 'Formula: Math.floor(Math.random() * max) + min generates integers in [min, max].',
                        specNoteAr: 'الصيغة: Math.floor(Math.random() * max) + min تنشئ أعداداً صحيحة ضمن النطاق.',
                        code: `// Random decimal between 0 and 1:
console.log("Random decimal:", Math.random());

// Random integer between 1 and 10:
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random integer (1-10):", randomNum);`
                    }
                ]
            },

            // Chapter 14: Test 4 Breakline Divider
            {
                chapterId: 'js-ch14',
                chapterNumber: 'Ch 14',
                chapterTitle: 'Test 4 Assessment',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-14-test',
                        lessonNumber: '14.0',
                        category: 'js',
                        title: 'Test 4 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 4',
                        description: '🔒 Test 4 is locked until questions are added by the instructor.',
                        descriptionAr: '🔒 التقييم الرابع مغلق حالياً حتى يتم إضافة الأسئلة بواسطة المحاضر.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        specNoteAr: 'ملاحظة المحاضر: أسئلة التقييم قيد الإعداد.',
                        code: `// 🔒 Test 4 is locked`
                    }
                ]
            },

            // Chapter 15: Types
            {
                chapterId: 'js-ch15',
                chapterNumber: 'Ch 15',
                chapterTitle: 'Types',
                lessons: [
                    {
                        id: 'js-15-1',
                        lessonNumber: '15.1',
                        category: 'js',
                        title: 'character assignment',
                        readTime: '3 min read',
                        spec: 'String Literal Declarations & Expressions',
                        description: 'In JavaScript, characters and text are stored as String data types enclosed in single quotes \'\', double quotes "", or backticks ``. Assigning text to a variable creates a string instance.',
                        descriptionAr: 'في جافا سكريبت، تُخزن الأحرف والنصوص كأنواع بيانات نصية (String) محاطة بعلامات تنصيص مفردة \'\' أو مزدوجة "" أو علامات تنصيص مائلة ``. تعيين النص لمتغير ينشئ كائناً نصياً.',
                        specNote: 'Template Literals: Backticks `` allow embedding expressions directly using ${expression} syntax.',
                        specNoteAr: 'القوالب النصية: تتيح علامات التنصيص المائلة تضمين التعبيرات مباشرة باستخدام صيغة ${expression}.',
                        code: `let charA = 'A';
let greeting = "Hello World";
let formatted = \`Letter: \${charA}, Message: \${greeting}\`;

console.log(formatted);`
                    },
                    {
                        id: 'js-15-2',
                        lessonNumber: '15.2',
                        category: 'js',
                        title: 'data types differences',
                        readTime: '4 min read',
                        spec: 'Primitive vs Reference Data Types',
                        description: 'JavaScript primitive types include String, Number, Boolean, Undefined, Null, and Symbol. Numbers store numeric calculations, Strings store text literals, and Booleans represent true/false logical states.',
                        descriptionAr: 'تشمل الأنواع الأولية في جافا سكريبت النصوص String والأرقام Number والأنواع المنطقية Boolean و Undefined و Null. تخزن الأرقام الحسابات، وتخزن النصوص الكلمات، بينما تمثل البولين الحالة المنطقية.',
                        specNote: 'Difference: Primitive values are immutable; adding a number to a string concatenates them into text.',
                        specNoteAr: 'الفارق: القيم الأولية غير قابلة للتغيير؛ إضافة رقم إلى نص يدمجهما في نص واحد.',
                        code: `let count = 42;        // Number
let text = "42";       // String
let isActive = true;   // Boolean

console.log("Number addition:", count + 8);  // 50
console.log("String concatenation:", text + 8); // "428"`
                    },
                    {
                        id: 'js-15-3',
                        lessonNumber: '15.3',
                        category: 'js',
                        title: 'type determination',
                        readTime: '3 min read',
                        spec: 'Type Inspection Operator (typeof)',
                        description: 'The typeof operator evaluates a variable or expression and returns a string indicating its data type (e.g. "string", "number", "boolean", "undefined", "object", or "function").',
                        descriptionAr: 'يُقيم معامل typeof المتغير أو التعبير ويرجع نصاً يوضح نوع البيانات (مثل "string" أو "number" أو "boolean" أو "undefined" أو "object").',
                        specNote: 'Usage: Use typeof to validate argument types before processing data.',
                        specNoteAr: 'الاستخدام: استخدم typeof للتحقق من أنواع المدخلات قبل معالجة البيانات.',
                        code: `console.log(typeof 100);        // "number"
console.log(typeof "Sprix");    // "string"
console.log(typeof false);      // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof [1, 2, 3]);  // "object"`
                    },
                    {
                        id: 'js-15-4',
                        lessonNumber: '15.4',
                        category: 'js',
                        title: 'comparison of values and types',
                        readTime: '4 min read',
                        spec: 'Loose (==) vs Strict (===) Equality',
                        description: 'Loose equality == converts data types automatically before comparing values (implicit coercion), whereas strict equality === checks both value AND data type without type conversion.',
                        descriptionAr: 'يقارن معامل المساواة الضمني == القيم فقط بعد تحويل أنواع البيانات تلقائياً، بينما يقارن معامل المساواة الصارم === القيمة ونوع البيانات معاً دون تحويل ضمني.',
                        specNote: 'Best Practice: Always use strict equality === to prevent unpredictable type coercion bugs.',
                        specNoteAr: 'الممارسة الأفضل: استخدم دائماً المساواة الصارمة === لتجنب أخطاء تحويل الأنواع التلقائي.',
                        code: `let num = 5;
let str = "5";

console.log("Loose Equal (5 == '5'):", num == str);   // true
console.log("Strict Equal (5 === '5'):", num === str); // false`
                    },
                    {
                        id: 'js-15-5',
                        lessonNumber: '15.5',
                        category: 'js',
                        title: 'type conversion',
                        readTime: '4 min read',
                        spec: 'Explicit Type Casting (Number, String, parseInt)',
                        description: 'Type conversion is converting a value from one data type to another. Explicit conversion uses constructors like Number(), String(), and Boolean(), or functions like parseInt() and parseFloat().',
                        descriptionAr: 'تحويل الأنواع هو تغيير قيمة من نوع بيانات إلى آخر. يستخدم التحويل الصريح الدوال المدمجة مثل Number() و String() و Boolean() أو parseInt() و parseFloat().',
                        specNote: 'Parsing: parseInt("123.45") parses the integer portion 123, while parseFloat() retains decimals.',
                        specNoteAr: 'التحليل: تحلل parseInt("123.45") الجزء الصحيح 123، بينما تحتفظ parseFloat() بالكسور.',
                        code: `let strNum = "123.45";

console.log("parseInt:", parseInt(strNum));     // 123
console.log("parseFloat:", parseFloat(strNum)); // 123.45
console.log("Number():", Number(strNum));       // 123.45
console.log("String(456):", String(456));     // "456"`
                    }
                ]
            },

            // Chapter 16: Array
            {
                chapterId: 'js-ch16',
                chapterNumber: 'Ch 16',
                chapterTitle: 'Array',
                lessons: [
                    {
                        id: 'js-16-1',
                        lessonNumber: '16.1',
                        category: 'js',
                        title: 'what is an array?',
                        readTime: '3 min read',
                        spec: 'Array Data Structure & Zero-Based Indexing',
                        description: 'An array is an ordered collection of values stored inside square brackets [...] separated by commas. Each item in an array has a zero-based index position starting at 0.',
                        descriptionAr: 'المصفوفة (Array) هي قائمة مرتبة من القيم المخزنة داخل أقواس مربعة [...] وتفصل بينها فواصل. تمتلك كل قيمة في المصفوفة فهراساً (Index) يبدأ من القيمة 0.',
                        specNote: 'Indexing Rule: Access elements using array[index], e.g., fruits[0] gets the first element.',
                        specNoteAr: 'قاعدة الفهرسة: الوصول للعناصر باستخدام array[index]، مثل fruits[0] للحصول على العنصر الأول.',
                        code: `let fruits = ["Apple", "Banana", "Cherry"];

console.log("First fruit:", fruits[0]);  // Apple
console.log("Second fruit:", fruits[1]); // Banana
console.log("Full array:", fruits);`
                    },
                    {
                        id: 'js-16-2',
                        lessonNumber: '16.2',
                        category: 'js',
                        title: 'arrays and for statements',
                        readTime: '4 min read',
                        spec: 'Array Iteration Cycle',
                        description: 'You can iterate over every element in an array using a standard for loop, starting index let i = 0 up to i < array.length.',
                        descriptionAr: 'يمكنك المرور والتكرار على جميع عناصر المصفوفة باستخدام حلقة for التكرارية القياسية، بدءاً من الفهرس let i = 0 وحتى i < array.length.',
                        specNote: 'Loop Pattern: for (let i = 0; i < array.length; i++) { // process array[i] }',
                        specNoteAr: 'نمط الحلقة: for (let i = 0; i < array.length; i++) { // معالجة array[i] }',
                        code: `let scores = [85, 92, 78, 90, 88];

for (let i = 0; i < scores.length; i++) {
    console.log(\`Student \${i + 1} score:\`, scores[i]);
}`
                    },
                    {
                        id: 'js-16-3',
                        lessonNumber: '16.3',
                        category: 'js',
                        title: 'length of array',
                        readTime: '3 min read',
                        spec: 'Array Length Property & Mutations (push)',
                        description: 'The .length property returns the total number of elements in an array. The index of the last element is always array.length - 1. You can add new elements to the end of an array using .push().',
                        descriptionAr: 'ترجع الخاصية .length العدد الإجمالي للعناصر داخل المصفوفة. يكون فهرس العنصر الأخير دائماً array.length - 1. يمكنك إضافة عناصر جديدة إلى نهاية المصفوفة باستخدام .push().',
                        specNote: 'Dynamic Resizing: Adding elements automatically increases the .length property value.',
                        specNoteAr: 'التغيير الديناميكي: إضافة العناصر يزيد تلقائياً قيمة الخاصية .length.',
                        code: `let colors = ["Red", "Green", "Blue"];

console.log("Array length:", colors.length); // 3
console.log("Last element:", colors[colors.length - 1]); // Blue

colors.push("Yellow");
console.log("Updated length after push:", colors.length); // 4`
                    }
                ]
            },

            // ═══════════════════════════════════════════════════
            // MID-COURSE SUMMARY: JavaScript Foundations (Ch 1 - 16)
            // ═══════════════════════════════════════════════════
            {
                chapterId: 'js-ch16-summary',
                chapterNumber: '📗 Review',
                chapterTitle: 'Mid-Course Summary (Ch 1 – 16)',
                lessons: [
                    {
                        id: 'js-mid-s1',
                        lessonNumber: 'R.1',
                        category: 'js',
                        title: 'Console, Strings & Math',
                        readTime: '4 min review',
                        spec: 'Core Pillar I — Output, Text & Arithmetic',
                        description: '⚡ REVIEW — console.log() is the fundamental output command. Text inside quotes ("...") is a string — it prints literally. Numbers without quotes are evaluated as math.\n\n📌 Key Distinction:\n• console.log("1+1") → prints the text 1+1\n• console.log(1+1) → calculates and prints 2\n\n📌 String Concatenation: The + operator between strings joins them together: "Hello" + " World" → "Hello World".\n\n📌 Arithmetic Operators: + (add), - (subtract), * (multiply), / (divide), % (remainder).\n\n📌 Comments: // single-line comment. They are ignored by the computer.',
                        descriptionAr: '⚡ مراجعة — console.log() هو أمر الإخراج الأساسي. النص داخل علامات التنصيص ("...") هو نص حرفي — يُطبع كما هو. الأرقام بدون تنصيص تُحسب رياضياً.\n\n📌 الفرق الجوهري:\n• console.log("1+1") → يطبع النص 1+1\n• console.log(1+1) → يحسب ويطبع 2\n\n📌 دمج النصوص: معامل + بين النصوص يدمجها: "Hello" + " World" → "Hello World".\n\n📌 المعاملات الحسابية: + (جمع)، - (طرح)، * (ضرب)، / (قسمة)، % (باقي القسمة).\n\n📌 التعليقات: // تعليق سطر واحد. يتجاهلها الحاسوب.',
                        specNote: 'Remember: Quotes make strings. No quotes make numbers. This is the #1 rule in JavaScript.',
                        specNoteAr: 'تذكر: علامات التنصيص تصنع نصوصاً. بدون تنصيص تصنع أرقاماً. هذه هي القاعدة رقم 1 في جافا سكريبت.',
                        code: `// ═══════════════════════════════════════
// REVIEW I: Console, Strings & Math
// ═══════════════════════════════════════

// Output to the console:
console.log("Hello World");  // prints text

// String vs Number distinction:
console.log("1+1");  // Output: "1+1" (string - no calculation)
console.log(1+1);    // Output: 2     (number - calculated!)

// String concatenation (joining):
console.log("Hello" + " " + "World"); // "Hello World"

// Arithmetic operators:
console.log(10 + 3);  // 13 (addition)
console.log(10 - 3);  // 7  (subtraction)
console.log(10 * 3);  // 30 (multiplication)
console.log(10 / 3);  // 3.33... (division)
console.log(10 % 3);  // 1  (remainder)

// Comments — ignored by the computer:
// This line does nothing
console.log("This line runs"); // inline comment`
                    },
                    {
                        id: 'js-mid-s2',
                        lessonNumber: 'R.2',
                        category: 'js',
                        title: 'Variables & Assignment',
                        readTime: '3 min review',
                        spec: 'Core Pillar II — Data Storage & Updates',
                        description: '⚡ REVIEW — Variables store data using the keyword "let". The = sign assigns a value to a variable name. You can update the stored value at any time.\n\n📌 Declaration: let x; creates a variable with no value (undefined).\n📌 Assignment: let y = 2; creates AND assigns in one step.\n📌 Update: y = 5; changes the stored value (no let needed for updates).\n📌 Naming: Variable names are case-sensitive and cannot start with numbers.',
                        descriptionAr: '⚡ مراجعة — تخزن المتغيرات البيانات باستخدام الكلمة المفتاحية "let". علامة = تعيّن قيمة لاسم المتغير. يمكنك تحديث القيمة المخزنة في أي وقت.\n\n📌 الإعلان: let x; ينشئ متغيراً بدون قيمة (undefined).\n📌 التعيين: let y = 2; ينشئ ويعيّن في خطوة واحدة.\n📌 التحديث: y = 5; يغير القيمة المخزنة (لا حاجة لـ let عند التحديث).\n📌 التسمية: أسماء المتغيرات حساسة لحالة الأحرف ولا يمكن أن تبدأ بأرقام.',
                        specNote: 'Common Mistake: Using let again when updating a variable causes an error. Only use let the FIRST time.',
                        specNoteAr: 'خطأ شائع: استخدام let مرة أخرى عند تحديث متغير يسبب خطأ. استخدم let فقط في المرة الأولى.',
                        code: `// ═══════════════════════════════════════
// REVIEW II: Variables & Assignment
// ═══════════════════════════════════════

// Declaration (no value yet):
let x;
console.log(x); // undefined

// Declaration + Assignment:
let y = 2;
console.log(y); // 2

// Updating a variable (no let!):
y = 5;
console.log(y); // 5

// Variables in calculations:
let price = 100;
let tax = 10;
console.log("Total:", price + tax); // Total: 110`
                    },
                    {
                        id: 'js-mid-s3',
                        lessonNumber: 'R.3',
                        category: 'js',
                        title: 'Conditionals: if / else / else if',
                        readTime: '5 min review',
                        spec: 'Core Pillar III — Decision Making & Branching',
                        description: '⚡ REVIEW — if checks a condition. If true, the code inside { } runs. else provides a fallback path when false. else if adds extra conditions to check in sequence.\n\n📌 Comparison Operators:\n• == (equal to)  • != (not equal to)\n• > (greater)  • < (less than)\n• >= (greater or equal)  • <= (less or equal)\n\n📌 Flow: JavaScript checks conditions top-to-bottom. The FIRST true condition runs — all others are skipped.\n\n📌 Scope: Variables declared inside { } cannot be accessed outside those { }.',
                        descriptionAr: '⚡ مراجعة — تفحص if شرطاً. إذا كان صحيحاً، يتم تنفيذ الكود داخل { }. توفر else مساراً بديلاً عندما يكون خاطئاً. تضيف else if شروطاً إضافية للفحص بالتسلسل.\n\n📌 معاملات المقارنة:\n• == (يساوي)  • != (لا يساوي)\n• > (أكبر)  • < (أصغر)\n• >= (أكبر أو يساوي)  • <= (أصغر أو يساوي)\n\n📌 التدفق: تفحص جافا سكريبت الشروط من الأعلى للأسفل. أول شرط صحيح يُنفذ — وتُتخطى البقية.\n\n📌 النطاق: المتغيرات المعلنة داخل { } لا يمكن الوصول إليها خارج تلك { }.',
                        specNote: 'Key Pattern: if → first check | else if → additional checks | else → everything else (catch-all).',
                        specNoteAr: 'النمط الأساسي: if → الفحص الأول | else if → فحوصات إضافية | else → كل شيء آخر (التقاط الكل).',
                        code: `// ═══════════════════════════════════════
// REVIEW III: if / else / else if
// ═══════════════════════════════════════

// Simple if:
let score = 85;
if (score >= 60) {
    console.log("Pass"); // ✅ Runs
}

// if-else:
let age = 15;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor"); // ✅ Runs
}

// else if chain:
let grade = 92;
if (grade == 100) {
    console.log("Perfect");
} else if (grade >= 80) {
    console.log("So close"); // ✅ Runs (first true condition)
} else if (grade >= 60) {
    console.log("Pass"); // Skipped! Already matched above
} else {
    console.log("Fail");
}

// ⚠️ Scope: Variables inside { } stay inside { }
if (true) {
    let secret = "hidden";
}
// console.log(secret); // ❌ Error!`
                    },
                    {
                        id: 'js-mid-s4',
                        lessonNumber: 'R.4',
                        category: 'js',
                        title: 'Logical Operators & For Loops',
                        readTime: '5 min review',
                        spec: 'Core Pillar IV — Logic Gates & Repetition',
                        description: '⚡ REVIEW — Logical operators combine conditions: && (AND — both must be true), || (OR — at least one true), ! (NOT — inverts true↔false).\n\n📌 for Loop Structure: for (initialization; condition; increment) { code }\n• Initialization: let i = 0 (starting point)\n• Condition: i < 10 (keep going while true)\n• Increment: i++ (add 1 after each loop)\n\n📌 The counter variable i can be used inside calculations within the loop body.\n📌 Compound operators: += adds, -= subtracts, *= multiplies, /= divides.',
                        descriptionAr: '⚡ مراجعة — تجمع المعاملات المنطقية الشروط: && (و — كلاهما صحيح)، || (أو — واحد على الأقل صحيح)، ! (ليس — يعكس صح↔خطأ).\n\n📌 هيكل حلقة for: for (تهيئة; شرط; تزايد) { كود }\n• التهيئة: let i = 0 (نقطة البداية)\n• الشرط: i < 10 (استمر طالما صحيح)\n• التزايد: i++ (أضف 1 بعد كل دورة)\n\n📌 يمكن استخدام متغير العداد i في الحسابات داخل جسم الحلقة.\n📌 معاملات مركبة: += تجمع، -= تطرح، *= تضرب، /= تقسم.',
                        specNote: 'Loop Runs: for (let i = 0; i < 5; i++) runs 5 times (i = 0, 1, 2, 3, 4). The condition is checked BEFORE each iteration.',
                        specNoteAr: 'تشغيل الحلقة: for (let i = 0; i < 5; i++) تعمل 5 مرات (i = 0, 1, 2, 3, 4). يُفحص الشرط قبل كل تكرار.',
                        code: `// ═══════════════════════════════════════
// REVIEW IV: Logic & Loops
// ═══════════════════════════════════════

// Logical AND (&&) — both must be true:
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
    console.log("Entry allowed"); // ✅
}

// Logical OR (||) — at least one true:
let num = 9;
if (num <= 3 || num >= 7) {
    console.log("In range"); // ✅ (9 >= 7 is true)
}

// Basic for loop:
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4

// Using counter i in math:
let total = 0;
for (let i = 1; i <= 5; i++) {
    total += i; // total = total + i
}
console.log("Sum 1-5:", total); // 15

// Compound operators:
let points = 10;
points += 5;  // 15 (same as points = points + 5)
points *= 2;  // 30 (same as points = points * 2)
console.log("Points:", points);`
                    },
                    {
                        id: 'js-mid-s5',
                        lessonNumber: 'R.5',
                        category: 'js',
                        title: 'Functions & Return Values',
                        readTime: '5 min review',
                        spec: 'Core Pillar V — Reusable Code Blocks',
                        description: '⚡ REVIEW — A function is a reusable block of code. Defined with the keyword function, followed by a name, then parentheses () for parameters, then curly braces {} for the body.\n\n📌 Arguments/Parameters: Values passed into the function through ().\n📌 return: Sends a value back from the function. Code after return does NOT execute.\n📌 No Arguments: Functions can work without parameters — goodMorning().\n📌 Multiple Parameters: function calc(a, b, c) accepts 3 inputs.\n📌 Scope: Variables inside { } of a function cannot be used outside.\n📌 Built-in Math: Math.max(), Math.min(), Math.round(), Math.floor(), Math.random().',
                        descriptionAr: '⚡ مراجعة — الدالة هي كتلة كود قابلة لإعادة الاستخدام. تُعرّف بكلمة function، ثم اسم، ثم أقواس () للمعاملات، ثم أقواس معقوفة {} للجسم.\n\n📌 الأرجومنتات/المعاملات: قيم تُمرر للدالة من خلال ().\n📌 return: تُرجع قيمة من الدالة. الكود بعد return لا يُنفذ.\n📌 بدون أرجومنتات: الدوال تعمل بدون معاملات — goodMorning().\n📌 معاملات متعددة: function calc(a, b, c) تقبل 3 مدخلات.\n📌 النطاق: المتغيرات داخل { } للدالة لا يمكن استخدامها خارجها.\n📌 دوال Math المدمجة: Math.max(), Math.min(), Math.round(), Math.floor(), Math.random().',
                        specNote: 'Calling Rule: Always include () when calling a function. greet vs greet() — the first is a reference, the second actually runs it.',
                        specNoteAr: 'قاعدة الاستدعاء: أضف دائماً () عند استدعاء الدالة. greet مقابل greet() — الأول مرجع فقط، والثاني يشغّلها فعلاً.',
                        code: `// ═══════════════════════════════════════
// REVIEW V: Functions & Return
// ═══════════════════════════════════════

// Function with parameters:
function add(a, b) {
    return a + b;
}
console.log(add(3, 7)); // 10

// Function WITHOUT parameters:
function greet() {
    return "Good morning!";
}
console.log(greet()); // "Good morning!"

// Multiple parameters:
function introduce(name, age, city) {
    return name + " is " + age + " from " + city;
}
console.log(introduce("Ali", 25, "Tokyo"));

// Built-in Math:
console.log(Math.max(5, 12, 8));    // 12
console.log(Math.min(5, 12, 8));    // 5
console.log(Math.round(3.6));       // 4
console.log(Math.floor(3.9));       // 3
console.log(Math.floor(Math.random() * 10)); // 0-9

// ⚠️ Scope: Variables inside function stay inside
function secret() {
    let hidden = "can't see me";
    return hidden;
}
// console.log(hidden); // ❌ Error!`
                    },
                    {
                        id: 'js-mid-s6',
                        lessonNumber: 'R.6',
                        category: 'js',
                        title: 'Types, Equality & Arrays',
                        readTime: '5 min review',
                        spec: 'Core Pillar VI — Type System & Data Collections',
                        description: '⚡ REVIEW — JavaScript has types: String ("text"), Number (42), Boolean (true/false). Use typeof to check a value\'s type. Type conversion: Number("10") → 10, String(42) → "42".\n\n📌 Equality:\n• == (loose) converts types: 1 == "1" → true\n• === (strict) checks type AND value: 1 === "1" → false\n• Always prefer === to avoid bugs!\n\n📌 Arrays: Ordered collections inside [ ]. Access by index starting at 0. .length returns total count. for loops iterate through all elements. .push() adds to the end.',
                        descriptionAr: '⚡ مراجعة — تمتلك جافا سكريبت أنواعاً: String ("نص")، Number (42)، Boolean (true/false). استخدم typeof لفحص نوع القيمة. تحويل الأنواع: Number("10") → 10، String(42) → "42".\n\n📌 المساواة:\n• == (ضمنية) تحول الأنواع: 1 == "1" → true\n• === (صارمة) تفحص النوع والقيمة: 1 === "1" → false\n• استخدم دائماً === لتجنب الأخطاء!\n\n📌 المصفوفات: مجموعات مرتبة داخل [ ]. الوصول بالفهرس بدءاً من 0. ترجع .length العدد الإجمالي. حلقات for تمر على كل العناصر. تضيف .push() للنهاية.',
                        specNote: 'Golden Rule: === is safer than ==. Array index starts at 0, and the last element is array[array.length - 1].',
                        specNoteAr: 'القاعدة الذهبية: === أكثر أماناً من ==. فهرس المصفوفة يبدأ من 0، والعنصر الأخير هو array[array.length - 1].',
                        code: `// ═══════════════════════════════════════
// REVIEW VI: Types, Equality & Arrays
// ═══════════════════════════════════════

// typeof — checking data types:
console.log(typeof 100);      // "number"
console.log(typeof "Hello");  // "string"
console.log(typeof true);     // "boolean"

// Type conversion:
console.log(Number("10"));  // 10 (string → number)
console.log(String(500));   // "500" (number → string)

// == vs === (Loose vs Strict):
console.log(1 == "1");   // true  ⚠️ type coercion!
console.log(1 === "1");  // false ✅ strict check

// Arrays — ordered collections:
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);        // "Apple" (first)
console.log(fruits[2]);        // "Cherry" (third)
console.log(fruits.length);    // 3

// Loop through an array:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Add to array:
fruits.push("Mango");
console.log(fruits.length); // 4
console.log(fruits[3]);     // "Mango"`
                    }
                ]
            },

            // Chapter 17: Test 5 Breakline Divider
            {
                chapterId: 'js-ch17',
                chapterNumber: 'Ch 17',
                chapterTitle: 'Test 5 Assessment',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-17-test',
                        lessonNumber: '17.0',
                        category: 'js',
                        title: 'Test 5 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 5',
                        description: '🔒 Test 5 is locked until questions are added by the instructor.',
                        descriptionAr: '🔒 التقييم الخامس مغلق حالياً حتى يتم إضافة الأسئلة بواسطة المحاضر.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        specNoteAr: 'ملاحظة المحاضر: أسئلة التقييم قيد الإعداد.',
                        code: `// 🔒 Test 5 is locked`
                    }
                ]
            },

            // Chapter 18: HTML 1
            {
                chapterId: 'js-ch18',
                chapterNumber: 'Ch 18',
                chapterTitle: 'HTML 1',
                lessons: [
                    {
                        id: 'js-18-1',
                        lessonNumber: '18.1',
                        category: 'html',
                        title: 'what is html ?',
                        readTime: '3 min read',
                        spec: 'HyperText Markup Language Structure',
                        description: 'HTML (HyperText Markup Language) is the standard markup language used to structure web pages and their content. HTML uses elements defined by tags enclosed in angle brackets like <h1>, <p>, and <div>.',
                        descriptionAr: 'لغة HTML (لغة ترميز النص الفائق) هي اللغة القياسية المستخدمة لبناء هيكل صفحات الويب ومحتواها. تستخدم HTML وسوماً محاطة بأقواس زاوية مثل <h1> و <p> و <div> لتحديد العناصر.',
                        specNote: 'Document Skeleton: HTML documents contain <html>, <head>, and <body> structural elements.',
                        specNoteAr: 'هيكل المستند: تحتوي مستندات HTML على عناصر <html> و <head> و <body>.',
                        code: `<!DOCTYPE html>
<html>
<head>
    <title>Sprix Learning Portal</title>
</head>
<body>
    <h1>Welcome to Web Development</h1>
    <p>HTML creates the structural foundation of web applications.</p>
</body>
</html>`
                    },
                    {
                        id: 'js-18-2',
                        lessonNumber: '18.2',
                        category: 'html',
                        title: 'display of text',
                        readTime: '3 min read',
                        spec: 'Headings (h1-h6) & Paragraphs (p)',
                        description: 'HTML provides semantic text elements: Heading tags <h1> to <h6> define titles and document hierarchy, while paragraph tags <p> define body text blocks.',
                        descriptionAr: 'توفر HTML وسوماً نصية دلالية: وسوم العناوين من <h1> إلى <h6> تحدد العناوين والتسلسل الهرمي للمستند، بينما تحدد وسوم الفقرات <p> كتل النصوص.',
                        specNote: 'Hierarchy: Use one <h1> per page for the main title, and <h2>-<h6> for subheadings.',
                        specNoteAr: 'التدرج: استخدم عنواناً رئيساً واحداً <h1> لكل صفحة، و <h2>-<h6> للعناوين الفرعية.',
                        code: `<h1>Main Page Title (H1)</h1>
<h2>Section Header (H2)</h2>
<h3>Subsection Title (H3)</h3>
<p>This is a paragraph of descriptive body text on the webpage.</p>`
                    },
                    {
                        id: 'js-18-3',
                        lessonNumber: '18.3',
                        category: 'html',
                        title: 'listing',
                        readTime: '3 min read',
                        spec: 'Ordered (ol) & Unordered (ul) Lists',
                        description: 'Lists group related items together. Use <ol> for ordered (numbered) lists, <ul> for unordered (bulleted) lists, and <li> for individual list items inside them.',
                        descriptionAr: 'تجمع القوائم العناصر المرتبطة معاً. استخدم <ol> للقوائم المرتبة (المفهرسة بأرقام)، و <ul> للقوائم غير المرتبة (المنقطة)، ووسوم <li> لكل عنصر داخل القائمة.',
                        specNote: 'Nesting: Lists can be nested inside other list items to build hierarchical sub-lists.',
                        specNoteAr: 'التداخل: يمكن تضمين القوائم داخل عناصر قائمة أخرى لبناء قوائم فرعية.',
                        code: `<h3>Unordered List:</h3>
<ul>
    <li>HTML Structure</li>
    <li>CSS Styling</li>
    <li>JavaScript Logic</li>
</ul>

<h3>Ordered List:</h3>
<ol>
    <li>Plan application</li>
    <li>Write code</li>
    <li>Test feature</li>
</ol>`
                    },
                    {
                        id: 'js-18-4',
                        lessonNumber: '18.4',
                        category: 'html',
                        title: 'image display',
                        readTime: '3 min read',
                        spec: 'Image Embed Tag (img) & Attributes (src, alt)',
                        description: 'The <img> tag embeds images into a web page. It is a self-closing tag that requires a "src" attribute specifying the image URL and an "alt" attribute providing alternative text for accessibility and SEO.',
                        descriptionAr: 'يضمن وسم <img> الصور داخل صفحة الويب. وهو وسم مغلق ذاتياً يتطلب خاصية "src" لتحديد رابط مسار الصورة وخاصية "alt" لتوفير نص بديل للوصولية ومحركات البحث SEO.',
                        specNote: 'Accessibility: Always include meaningful alt text for screen-readers and fallback display.',
                        specNoteAr: 'الوصولية: أضف دائماً نصوص alt توضيحية لقرّاء الشاشة والعرض البديل.',
                        code: `<!-- Image tag with src, alt description, and dimensions -->
<img src="logo.png" alt="Sprix Official Logo" width="200" height="60">`
                    },
                    {
                        id: 'js-18-5',
                        lessonNumber: '18.5',
                        category: 'html',
                        title: 'comment',
                        readTime: '2 min read',
                        spec: 'HTML Documentation Syntax',
                        description: 'HTML comments start with <!-- and end with -->. Text inside comments is ignored by the browser and will not be displayed on the rendered page.',
                        descriptionAr: 'تبدأ تعليقات HTML بـ <!-- وتنتهي بـ -->. يتجاهل المتصفح النص الموجود داخل التعليقات ولن يُعرض في الصفحة.',
                        specNote: 'Syntax: <!-- Comment text goes here -->',
                        specNoteAr: 'التركيب: <!-- نص التعليق يكتب هنا -->',
                        code: `<!-- Main Navigation Section Starts -->
<nav>
    <p>Navigation Content</p>
</nav>
<!-- Main Navigation Section Ends -->`
                    }
                ]
            },

            // Chapter 19: CSS 1
            {
                chapterId: 'js-ch19',
                chapterNumber: 'Ch 19',
                chapterTitle: 'CSS 1',
                lessons: [
                    {
                        id: 'js-19-1',
                        lessonNumber: '19.1',
                        category: 'css',
                        title: 'character colour',
                        readTime: '3 min read',
                        spec: 'Text & Background Color Styling',
                        description: 'CSS (Cascading Style Sheets) controls web page presentation. The color property sets text color using named color keywords, hex codes (#2563eb), or RGB values. The background-color property sets element background color.',
                        descriptionAr: 'تتحكم لغة CSS في تصميم تنسيق صفحات الويب. تحدد خاصية color لون النص باستخدام أسماء الألوان أو الأكواد السداسية عشري (#2563eb) أو قيم RGB. بينما تحدد خاصية background-color لون خلفية العنصر.',
                        specNote: 'Property Syntax: selector { color: #value; background-color: #value; }',
                        specNoteAr: 'صيغة الخاصية: selector { color: #value; background-color: #value; }',
                        code: `/* CSS Text & Background Styles: */
h1 {
    color: #2563eb; /* Primary blue heading */
}

p {
    color: #334155; /* Dark text color */
    background-color: #f8fafc; /* Light gray background */
}`
                    },
                    {
                        id: 'js-19-2',
                        lessonNumber: '19.2',
                        category: 'css',
                        title: 'character thickness and size',
                        readTime: '3 min read',
                        spec: 'Typography Properties (font-size, font-weight)',
                        description: 'Use font-size to adjust text size (in px, rem, or em), font-weight to change text thickness (400 for normal, 600 for semi-bold, 700 for bold), and font-family to specify fonts.',
                        descriptionAr: 'استخدم font-size لتعديل حجم النص (بوحدات px أو rem أو em)، وخاصية font-weight لتغيير سماكة النص (400 للعادي، 600 لشبه العريض، 700 للعريض)، وخاصية font-family لتحديد نوع الخط.',
                        specNote: 'Units: Relative units like rem adapt responsively to user browser font preferences.',
                        specNoteAr: 'الوحدات: تتكيف الوحدات النسبية مثل rem بشكل تجاوبي مع تفضيلات المتصفح.',
                        code: `.title-headline {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;       /* 32px font size */
    font-weight: 700;      /* Bold font weight */
    line-height: 1.3;
}`
                    },
                    {
                        id: 'js-19-3',
                        lessonNumber: '19.3',
                        category: 'css',
                        title: 'class',
                        readTime: '4 min read',
                        spec: 'Class Selectors (.classname) & Reusability',
                        description: 'A CSS class selector targets HTML elements with a matching class="..." attribute. In CSS, class rules start with a period .classname. Multiple elements can share the same class.',
                        descriptionAr: 'يستهدف محدد الفئة (Class Selector) في CSS عناصر HTML التي تحتوي على خاصية class="..." مطابقة. في CSS، تبدأ قواعد الكلاس بنقطة .classname. يمكن لعناصر متعددة المشاركة في نفس الكلاس.',
                        specNote: 'Reusability: Classes are designed for styling reusable UI components across a site.',
                        specNoteAr: 'إمكانية التكرار: صُممت الكلاسات لتنسيق المكونات القابلة للإعادة الاستخدام عبر الموقع.',
                        code: `<!-- HTML Markup: -->
<button class="btn-primary">Save Changes</button>
<button class="btn-primary">Submit Form</button>

/* CSS Rule: */
.btn-primary {
    background-color: #2563eb;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 6px;
}`
                    },
                    {
                        id: 'js-19-4',
                        lessonNumber: '19.4',
                        category: 'css',
                        title: 'comment',
                        readTime: '2 min read',
                        spec: 'CSS Comments Syntax',
                        description: 'CSS comments start with /* and end with */. Comments can span single or multiple lines and are ignored by the browser when rendering element styles.',
                        descriptionAr: 'تبدأ تعليقات HTML بـ /* وتنتهي بـ */. ويمكن أن تمتد لسطر واحد أو أسطر متعددة ويتجاهلها المتصفح عند تطبيق التنسيقات.',
                        specNote: 'Syntax: /* Comment text */',
                        specNoteAr: 'التركيب: /* نص التعليق */',
                        code: `/* ==========================================
   NAVIGATION BAR STYLES
   ========================================== */

/* Main Header Container */
.header-nav {
    display: flex;
}`
                    }
                ]
            },
            // Chapter 20: Test 6 Breakline Divider
            {
                chapterId: 'js-ch20',
                chapterNumber: 'Ch 20',
                chapterTitle: 'Test 6 Assessment',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-20-test',
                        lessonNumber: '20.0',
                        category: 'js',
                        title: 'Test 6 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 6',
                        description: '🔒 Test 6 is locked until questions are added by the instructor.',
                        descriptionAr: '🔒 التقييم السادس مغلق حالياً حتى يتم إضافة الأسئلة بواسطة المحاضر.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        specNoteAr: 'ملاحظة المحاضر: أسئلة التقييم قيد الإعداد.',
                        code: `// 🔒 Test 6 is locked`
                    }
                ]
            },

            // Chapter 21: Conditions 4
            {
                chapterId: 'js-ch21',
                chapterNumber: 'Ch 21',
                chapterTitle: 'Conditions 4',
                lessons: [
                    {
                        id: 'js-21-1',
                        lessonNumber: '21.1',
                        category: 'js',
                        title: 'scope of if statement',
                        readTime: '3 min read',
                        spec: 'Conditional Block Scoping (let/const)',
                        description: 'Block scope restricts variables declared with let or const inside an if statement block {} so they are only accessible within those curly braces. Attempting to access a block-scoped variable outside its if block results in a ReferenceError.',
                        descriptionAr: 'يحدد نطاق الكتلة (Block Scope) المتغيرات المعلنة باستخدام let أو const داخل كتلة جملة if {} لتعمل فقط داخل تلك الأقواس. تسبب محاولة الوصول إلى متغير محلي خارج كتلة if ظهور خطأ مرجعي ReferenceError.',
                        specNote: 'Scope Rule: Variables defined inside {} cannot be accessed outside the block; global variables remain accessible inside.',
                        specNoteAr: 'قاعدة النطاق: لا يمكن الوصول للمتغيرات المعرفة داخل {} من الخارج؛ بينما تظل المتغيرات العامة متاحة بالداخل.',
                        code: `let score = 90;

if (score >= 80) {
    let reward = "Gold Badge"; // Block-scoped variable
    console.log("Inside IF block:", reward);
}

console.log("Outside IF score:", score);
// console.log(reward); // ReferenceError: reward is not defined`
                    },
                    {
                        id: 'js-21-2',
                        lessonNumber: '21.2',
                        category: 'js',
                        title: 'nested conditional branches',
                        readTime: '4 min read',
                        spec: 'Hierarchical & Multi-Layered Branching',
                        description: 'Nested conditionals are if statements placed inside another if or else block. They allow you to test hierarchical or multi-layered conditions where secondary checks depend on the primary condition evaluating to true.',
                        descriptionAr: 'الشروط المتداخلة هي جمل if موضوعة داخل كتلة if أو else أخرى. وتسمح لك باختبار شروط هرمية أو متعددة الطبقات حيث يعتمد الفحص الثانوي على كون الفحص الأول صحيحاً.',
                        specNote: 'Clean Code Tip: Avoid deep nesting levels (more than 2-3 levels) by using logical AND (&&) or early returns.',
                        specNoteAr: 'نصيحة الكود النظيف: تجنب التداخل العميق (أكثر من مستويين) باستخدام المعامل المنطقي && أو الإرجاع المبكر.',
                        code: `let isUserLoggedIn = true;
let userRole = "admin";

if (isUserLoggedIn) {
    console.log("Welcome back, user!");
    if (userRole === "admin") {
        console.log("Access Granted: Admin Control Panel");
    } else {
        console.log("Access Granted: Member Dashboard");
    }
} else {
    console.log("Please log in to continue.");
}`
                    }
                ]
            },

            // Chapter 22: Looping 1
            {
                chapterId: 'js-ch22',
                chapterNumber: 'Ch 22',
                chapterTitle: 'Looping 1',
                lessons: [
                    {
                        id: 'js-22-1',
                        lessonNumber: '22.1',
                        category: 'js',
                        title: 'scoop of for loop',
                        readTime: '3 min read',
                        spec: 'For Loop Counter Scope (let i)',
                        description: 'The loop counter variable let i declared inside a for (let i = 0; ...) header is scoped strictly to the loop body block. Once the loop finishes executing, i is destroyed and no longer exists outside the loop.',
                        descriptionAr: 'متغير عداد حلقة التكرار let i المعلن داخل ترويسة for (let i = 0; ...) يقتصر نطاقه تماماً على كتلة جسم الحلقة. بمجرد انتهاء تنفيذ الحلقة، يتم إتلاف i ولا يعود موجوداً خارج الحلقة.',
                        specNote: 'Counter Scope: Declare loop counters with let to prevent pollution of the outer scope.',
                        specNoteAr: 'نطاق العداد: أعلن دائماً عن العدادات بـ let لمنع تلوث النطاق الخارجي.',
                        code: `for (let i = 1; i <= 3; i++) {
    console.log("Loop iteration i =", i);
}

// i is no longer defined here:
console.log("Loop completed.");`
                    },
                    {
                        id: 'js-22-2',
                        lessonNumber: '22.2',
                        category: 'js',
                        title: 'nested loops and conditionals',
                        readTime: '4 min read',
                        spec: 'Combining Loops & Conditionals',
                        description: 'You can embed if statements inside for loops to filter data, or place a for loop inside another for loop to process multi-dimensional data grids and matrix structures.',
                        descriptionAr: 'يمكنك تضمين جمل if الشرطية داخل حلقات for لتصفية البيانات، أو وضع حلقة for داخل حلقة for أخرى لمعالجة شبكات البيانات ومصفوفات التكرار متعددة الأبعاد.',
                        specNote: 'Execution Cycle: In nested loops, the inner loop completes ALL its iterations for every SINGLE iteration of the outer loop.',
                        specNoteAr: 'دورة التنفيذ: في الحلقات المتداخلة، تنفذ الحلقة الداخلية جميع تكراراتها لكل تكرار واحد في الحلقة الخارجية.',
                        code: `// Filter even numbers in a loop:
console.log("Even numbers from 1 to 6:");
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}`
                    },
                    {
                        id: 'js-22-3',
                        lessonNumber: '22.3',
                        category: 'js',
                        title: 'how to write operators',
                        readTime: '3 min read',
                        spec: 'Compound Assignment Operators (+=, -=, *=, /=)',
                        description: 'Compound assignment operators combine arithmetic with assignment: += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign), and %= (remainder and assign).',
                        descriptionAr: 'تدمج معاملات التعيين المركبة الحساب مع التعيين: += (إضافة وتعيين)، -= (طرح وتعيين)، *= (ضرب وتعيين)، /= (قسمة وتعيين)، و %= (باقي القسمة وتعيين).',
                        specNote: 'Shorthand Equivalent: x += 5 is exact shorthand for x = x + 5.',
                        specNoteAr: 'المكافئ المختصر: x += 5 هي اختصار مطابق تماماً لـ x = x + 5.',
                        code: `let score = 100;
score += 25; // score = 125
score -= 10; // score = 115
score *= 2;  // score = 230
console.log("Final Score:", score);`
                    }
                ]
            },

            // Chapter 23: Function 3
            {
                chapterId: 'js-ch23',
                chapterNumber: 'Ch 23',
                chapterTitle: 'Function 3',
                lessons: [
                    {
                        id: 'js-23-1',
                        lessonNumber: '23.1',
                        category: 'js',
                        title: 'scope in function',
                        readTime: '3 min read',
                        spec: 'Function Scope & Encapsulation',
                        description: 'Variables declared inside a function have local scope and cannot be accessed from outside the function. Variables declared outside any function have global scope and can be accessed anywhere in the script.',
                        descriptionAr: 'المتغيرات المعلنة داخل الدالة تمتلك نطاقاً محلياً (Local Scope) ولا يمكن الوصول إليها من خارج الدالة. بينما المتغيرات المعلنة خارج أي دالة تمتلك نطاقاً عاماً (Global Scope) وتكون متاحة في أي مكان.',
                        specNote: 'Encapsulation: Local function variables shield state from unwanted external modification.',
                        specNoteAr: 'الكبسلة: تحمي متغيرات الدالة المحلية حالة البيانات من التعديلات الخارجية غير المرغوبة.',
                        code: `let appName = "Sprix Portal"; // Global Scope

function showStatus() {
    let userStatus = "Online"; // Local Scope
    console.log(appName + " - Status:", userStatus);
}

showStatus();`
                    },
                    {
                        id: 'js-23-2',
                        lessonNumber: '23.2',
                        category: 'js',
                        title: 'functions without arguments',
                        readTime: '3 min read',
                        spec: 'No-Argument Functions & Static Tasks',
                        description: 'Functions without arguments do not accept parameters in their parentheses (). They perform fixed, predefined operations such as printing static banners, initializing system states, or clearing inputs.',
                        descriptionAr: 'الدوال بدون أرجومنتات (بدون معلمات) لا تستقبل مدخلات داخل الأقواس (). وتنفذ عمليات ثابتة محددة مسبقاً مثل طباعة الفواصل، أو تهيئة حالات النظام، أو مسح الإدخالات.',
                        specNote: 'Calling Syntax: Always include parentheses fn() when invoking a function, even if it takes no arguments.',
                        specNoteAr: 'صيغة الاستدعاء: أضف دائماً الأقواس fn() عند استدعاء الدالة، حتى لو كانت لا تأخذ أرجومنتات.',
                        code: `function printDivider() {
    console.log("========================================");
}

printDivider();
console.log("Lesson Content Here");
printDivider();`
                    },
                    {
                        id: 'js-23-3',
                        lessonNumber: '23.3',
                        category: 'js',
                        title: 'multi parameter functions',
                        readTime: '4 min read',
                        spec: 'Multi-Parameter Signatures & Ordering',
                        description: 'Functions can accept multiple parameters separated by commas in the function signature function calc(a, b, c). When calling the function, arguments are passed in matching order.',
                        descriptionAr: 'يمكن للدوال استقبال معلمات متعددة تفصل بينها فواصل في تعريف الدالة function calc(a, b, c). عند استدعاء الدالة، تُمرر الأرجومنتات بنفس الترتيب المطابق.',
                        specNote: 'Default Parameters: You can specify default values for parameters, e.g., function greet(name = "Guest").',
                        specNoteAr: 'المعلمات الافتراضية: يمكنك تحديد قيم افتراضية للمعلمات، مثل function greet(name = "Guest").',
                        code: `function calculateTotal(price, taxRate, discount) {
    let tax = price * taxRate;
    let total = (price + tax) - discount;
    return total;
}

let finalAmount = calculateTotal(100, 0.15, 10);
console.log("Final Amount (Price: $100, Tax: 15%, Discount: $10) =", finalAmount);`
                    }
                ]
            },

            // Chapter 24: Test 7 Breakline Divider
            {
                chapterId: 'js-ch24',
                chapterNumber: 'Ch 24',
                chapterTitle: 'Test 7 Assessment',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-24-test',
                        lessonNumber: '24.0',
                        category: 'js',
                        title: 'Test 7 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 7',
                        description: '🔒 Test 7 is locked until questions are added by the instructor.',
                        descriptionAr: '🔒 التقييم السابع مغلق حالياً حتى يتم إضافة الأسئلة بواسطة المحاضر.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        specNoteAr: 'ملاحظة المحاضر: أسئلة التقييم قيد الإعداد.',
                        code: `// 🔒 Test 7 is locked`
                    }
                ]
            },

            // Chapter 25: Looping 2
            {
                chapterId: 'js-ch25',
                chapterNumber: 'Ch 25',
                chapterTitle: 'Looping 2',
                lessons: [
                    {
                        id: 'js-25-1',
                        lessonNumber: '25.1',
                        category: 'js',
                        title: 'repeating math operations',
                        readTime: '3 min read',
                        spec: 'Cumulative Accumulation & Series Loops',
                        description: 'Loops are ideal for automating repetitive mathematical operations, such as calculating cumulative sums, factorials, compound interest, or sequence values over multiple steps.',
                        descriptionAr: 'تعد الحلقات التكرارية مثالية لأتمتة العمليات الحسابية المكررة، مثل حساب المجموع التراكمي، والمضروب (Factorial)، أوالفائدة المركبة، أو تتابع القيم عبر خطوات متعددة.',
                        specNote: 'Accumulator Pattern: Initialize an accumulator variable before the loop (e.g. let sum = 0) and update it inside.',
                        specNoteAr: 'نمط المجمع: قم بتهيئة متغير مجمع قبل الحلقة (مثل let sum = 0) وحدثه داخل الحلقة.',
                        code: `// Calculate cumulative sum from 1 to 5:
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
    console.log(\`Step \${i}: current sum = \${sum}\`);
}
console.log("Total Sum (1 to 5):", sum);`
                    },
                    {
                        id: 'js-25-2',
                        lessonNumber: '25.2',
                        category: 'js',
                        title: 'using for loop counter I',
                        readTime: '4 min read',
                        spec: 'Counter Variable Calculations & Step Sequences',
                        description: 'The loop counter variable i can be used directly inside calculations, mathematical formulas, multiplication tables, or generating custom numerical sequences.',
                        descriptionAr: 'يمكن استخدام متغير العداد i مباشرة داخل الحسابات الرياضية، والصيغ الحسابية، وجداول الضرب، أو توليد متتاليات رقمية مخصصة.',
                        specNote: 'Step Control: You can increment i by step values other than 1, e.g., i += 2 or i *= 2.',
                        specNoteAr: 'التحكم بالخطوة: يمكنك زيادة العداد i بخطوات مختلفة عن 1، مثل i += 2 أو i *= 2.',
                        code: `// Multiplication table for 7 using counter i:
console.log("Multiplication Table for 7:");
for (let i = 1; i <= 10; i++) {
    console.log(\`7 x \${i} = \${7 * i}\`);
}`
                    }
                ]
            },

            // Chapter 26: Arrays 2
            {
                chapterId: 'js-ch26',
                chapterNumber: 'Ch 26',
                chapterTitle: 'Arrays 2',
                lessons: [
                    {
                        id: 'js-26-1',
                        lessonNumber: '26.1',
                        category: 'js',
                        title: 'combining loops and arrays',
                        readTime: '3 min read',
                        spec: 'Array Iteration & Data Aggregation',
                        description: 'Combining for loops with arrays allows you to process, transform, or calculate totals across every element in a data collection efficiently.',
                        descriptionAr: 'يتيح دمج حلقات for مع المصفوفات معالجة أو تحويل أو حساب المجاميع عبر كل عنصر في مجموعة البيانات بكفاءة.',
                        specNote: 'Access Pattern: Use array[i] within for (let i = 0; i < array.length; i++) to read or write elements.',
                        specNoteAr: 'نمط الوصول: استخدم array[i] داخل حلقة for (let i = 0; i < array.length; i++) لقراءة التعديل أو العناصر.',
                        code: `let prices = [10, 25, 40, 15];
let totalPrice = 0;

for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
}

console.log("Prices Array:", prices);
console.log("Total Price = $" + totalPrice);`
                    },
                    {
                        id: 'js-26-2',
                        lessonNumber: '26.2',
                        category: 'js',
                        title: 'array length usage',
                        readTime: '3 min read',
                        spec: 'Dynamic Bounds Checking via .length',
                        description: 'Using array.length as the loop termination condition ensures the loop dynamically adjusts if items are added or removed from the array, avoiding out-of-bounds index errors.',
                        descriptionAr: 'يضمن استخدام array.length كشرط لإنهاء الحلقة تكيف الحلقة ديناميكياً إذا تم إضافة عناصر إلى المصفوفة أو حذفها، مما يمنع أخطاء تجاوز حدود الفهرس.',
                        specNote: 'Dynamic Guard: Always use i < array.length rather than hardcoding static index counts.',
                        specNoteAr: 'الحماية الديناميكية: استخدم دائماً i < array.length بدلاً من كتابة أرقام ثابتة لعدد العناصر.',
                        code: `let items = ["Book", "Pen", "Notebook", "Desk"];

console.log("Processing", items.length, "items:");
for (let i = 0; i < items.length; i++) {
    console.log(\`Item #\${i + 1}: \${items[i]}\`);
}`
                    },
                    {
                        id: 'js-26-3',
                        lessonNumber: '26.3',
                        category: 'js',
                        title: 'array with loop and if',
                        readTime: '4 min read',
                        spec: 'Data Filtering & Search Algorithms',
                        description: 'Combining arrays, for loops, and if conditional statements enables data filtering, searching for target elements, counting passing scores, or finding maximum/minimum values in arrays.',
                        descriptionAr: 'يتيح دمج المصفوفات وحلقات for والجمل الشرطية if إمكانية تصفية البيانات، والبحث عن عناصر محددة، وعد النقاط الناجحة، أو إيجاد القيمة الأكبر والأصغر في المصفوفة.',
                        specNote: 'Filtering Pattern: Test each element with if (array[i] condition) and push matching items to a result array.',
                        specNoteAr: 'نمط التصفية: اختبر كل عنصر بـ if (الشرط على array[i]) وأضف العناصر المطابقة إلى مصفوفة نتائج.',
                        code: `let examScores = [45, 82, 60, 95, 30, 75];
let passingScores = [];

for (let i = 0; i < examScores.length; i++) {
    if (examScores[i] >= 60) {
        passingScores.push(examScores[i]);
    }
}

console.log("All Scores:", examScores);
console.log("Passing Scores (>= 60):", passingScores);`
                    }
                ]
            },

            // Chapter 27: Test 8 Breakline Divider
            {
                chapterId: 'js-ch27',
                chapterNumber: 'Ch 27',
                chapterTitle: 'Test 8 Assessment',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-27-test',
                        lessonNumber: '27.0',
                        category: 'js',
                        title: 'Test 8 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 8',
                        description: '🔒 Test 8 is locked until questions are added by the instructor.',
                        descriptionAr: '🔒 التقييم الثامن مغلق حالياً حتى يتم إضافة الأسئلة بواسطة المحاضر.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        specNoteAr: 'ملاحظة المحاضر: أسئلة التقييم قيد الإعداد.',
                        code: `// 🔒 Test 8 is locked`
                    }
                ]
            },

            // Chapter 28: For of
            {
                chapterId: 'js-ch28',
                chapterNumber: 'Ch 28',
                chapterTitle: 'For of',
                lessons: [
                    {
                        id: 'js-28-1',
                        lessonNumber: '28.1',
                        category: 'js',
                        title: 'for of',
                        readTime: '3 min read',
                        spec: 'Modern Iterable Loop (for...of)',
                        description: 'The for...of loop provides a clean, modern syntax for iterating directly over iterable objects such as Arrays, Strings, or Sets without manually managing index counter variables.',
                        descriptionAr: 'توفر حلقة for...of صيغة حديثة وأنيقة للتكرار مباشرة على العناصر القابلة للتكرار مثل المصفوفات والنصوص، دون الحاجة لإدارة متغيرات العداد اليدوية.',
                        specNote: 'Syntax: for (const element of array) { // use element directly }',
                        specNoteAr: 'التركيب: for (const element of array) { // استخدام العنصر مباشرة }',
                        code: `let languages = ["JavaScript", "Python", "HTML", "CSS"];

console.log("Track Languages using for...of:");
for (const lang of languages) {
    console.log("Language:", lang);
}`
                    }
                ]
            },

            // Chapter 29: Conditions 5
            {
                chapterId: 'js-ch29',
                chapterNumber: 'Ch 29',
                chapterTitle: 'Conditions 5',
                lessons: [
                    {
                        id: 'js-29-1',
                        lessonNumber: '29.1',
                        category: 'js',
                        title: 'math in conditional branches',
                        readTime: '3 min read',
                        spec: 'Arithmetic Expressions in Conditionals',
                        description: 'You can perform mathematical calculations directly inside if condition expressions (e.g. if (a + b > 100)) or execute math calculations inside conditional branch blocks to compute custom results based on conditions.',
                        descriptionAr: 'يمكنك إجراء الحسابات الرياضية مباشرة داخل تعبيرات شرط if (مثل if (a + b > 100)) أو تنفيذ حسابات رياضية داخل كتل الفروع الشرطية لحساب نتائج مخصصة بناءً على الشروط.',
                        specNote: 'Order of Operations: Mathematical operators are evaluated before comparison operators in conditions.',
                        specNoteAr: 'ترتيب العمليات: تُحسب المعاملات الرياضية أولاً قبل معاملات المقارنة في الشروط.',
                        code: `let price = 120;
let discount = 0.2; // 20%

if (price * (1 - discount) > 90) {
    console.log("Discounted price qualifies for free shipping!");
} else {
    console.log("Standard shipping applied.");
}`
                    },
                    {
                        id: 'js-29-2',
                        lessonNumber: '29.2',
                        category: 'js',
                        title: 'applying nested conditionals',
                        readTime: '4 min read',
                        spec: 'Decision Trees & Business Logic Validation',
                        description: 'Practical applications of nested conditionals involve multi-step validation logic, such as checking user login credentials, authorization permissions, account status, and transaction limits step by step.',
                        descriptionAr: 'تتضمن التطبيقات العملية للشروط المتداخلة التحقق متعدد الخطوات، مثل فحص بيانات تسجيل دخول المستخدم، وصلاحيات الوصول، وحالة الحساب، وحدود المعاملات خطوة بخطوة.',
                        specNote: 'Decision Trees: Nested conditionals represent logical decision trees in application business logic.',
                        specNoteAr: 'أشجار القرارات: تمثل الشروط المتداخلة أشجار القرارات المنطقية في برمجيات التطبيق.',
                        code: `let cartTotal = 150;
let isVipMember = true;
let promoCodeValid = true;

if (cartTotal >= 100) {
    if (isVipMember) {
        console.log("Eligible for 25% VIP Discount!");
    } else if (promoCodeValid) {
        console.log("Eligible for 15% Promo Discount!");
    } else {
        console.log("Eligible for 10% Standard Discount!");
    }
} else {
    console.log("Add more items to get discounts.");
}`
                    }
                ]
            },

            // Chapter 30: Test 9 Breakline Divider
            {
                chapterId: 'js-ch30',
                chapterNumber: 'Ch 30',
                chapterTitle: 'Test 9 Assessment',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-30-test',
                        lessonNumber: '30.0',
                        category: 'js',
                        title: 'Test 9 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 9',
                        description: '🔒 Test 9 is locked until questions are added by the instructor.',
                        descriptionAr: '🔒 التقييم التاسع مغلق حالياً حتى يتم إضافة الأسئلة بواسطة المحاضر.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        specNoteAr: 'ملاحظة المحاضر: أسئلة التقييم قيد الإعداد.',
                        code: `// 🔒 Test 9 is locked`
                    }
                ]
            },

            // ═══════════════════════════════════════════════════
            // MASTER SUMMARY: Complete Foundations Review (Ch 1 - 30)
            // ═══════════════════════════════════════════════════
            {
                chapterId: 'js-ch30-summary',
                chapterNumber: '📘 Summary',
                chapterTitle: 'Master Summary (Ch 1 – 30)',
                lessons: [
                    {
                        id: 'js-summary-variables',
                        lessonNumber: 'S.1',
                        category: 'js',
                        title: 'Variables, Types & Strict Equality',
                        readTime: '5 min review',
                        spec: 'Foundation Pillar I — Data & Type Safety',
                        description: '⚡ MASTER REVIEW — Variables store data using "let". Strings are text wrapped in quotes, Numbers are raw numeric values. Use typeof to inspect a value\'s type. Loose equality (==) converts types before comparing; strict equality (===) checks both value AND type — always prefer === to avoid bugs.\n\n📌 Key Rules:\n• console.log("1+1") outputs the string "1+1"\n• console.log(1+1) outputs the number 2\n• Number("10") converts string to number 10\n• String(500) converts number to string "500"\n• 1 == "1" → true (type coercion!)\n• 1 === "1" → false (strict check)',
                        descriptionAr: '⚡ مراجعة شاملة — تخزن المتغيرات البيانات باستخدام "let". النصوص هي كلمات محاطة بعلامات تنصيص، والأرقام هي قيم عددية صرفة. استخدم typeof لفحص نوع القيمة. المساواة الضمنية (==) تحول الأنواع قبل المقارنة؛ المساواة الصارمة (===) تفحص القيمة والنوع معاً — استخدم دائماً === لتجنب الأخطاء.\n\n📌 القواعد الأساسية:\n• console.log("1+1") يطبع النص "1+1"\n• console.log(1+1) يطبع الرقم 2\n• Number("10") يحول النص إلى رقم 10\n• String(500) يحول الرقم إلى نص "500"\n• 1 == "1" → true (تحويل ضمني!)\n• 1 === "1" → false (فحص صارم)',
                        specNote: 'Golden Rule: Always use === instead of == to prevent unpredictable type coercion bugs.',
                        specNoteAr: 'القاعدة الذهبية: استخدم دائماً === بدلاً من == لمنع أخطاء تحويل الأنواع التلقائي.',
                        code: `// ═══════════════════════════════════════
// PILLAR I: Variables, Types & Equality
// ═══════════════════════════════════════

// Declaring variables:
let x;          // Declaration only
let y = 2;      // Declaration + assignment

// String vs Number:
console.log("1+1");  // Output: "1+1" (string literal)
console.log(1+1);    // Output: 2     (numeric calculation)

// Type checking:
console.log(typeof 100);     // "number"
console.log(typeof "Word");  // "string"

// Loose vs Strict equality:
console.log(1 == "1");   // true  — == converts types automatically
console.log(1 === "1");  // false — === checks value AND type

// Type conversion:
console.log(Number("10"));  // 10  (string → number)
console.log(String(500));   // "500" (number → string)`
                    },
                    {
                        id: 'js-summary-conditionals',
                        lessonNumber: 'S.2',
                        category: 'js',
                        title: 'Conditionals, Logic & Nested Branches',
                        readTime: '6 min review',
                        spec: 'Foundation Pillar II — Decision Trees & Control Flow',
                        description: '⚡ MASTER REVIEW — if executes code when a condition is true. else provides a fallback when the condition is false. else if chains additional checks. Logical operators: && (AND — both must be true), || (OR — at least one true), ! (NOT — inverts).\n\n📌 Nested Conditionals: You can place if statements inside other if/else blocks to build multi-layer decision trees for complex authorization, scoring, or routing logic.\n\n📌 Math in Conditions: Arithmetic expressions can be evaluated directly inside if() parentheses.',
                        descriptionAr: '⚡ مراجعة شاملة — تنفذ if الكود عندما يكون الشرط صحيحاً. توفر else مساراً بديلاً عندما يكون الشرط خاطئاً. تسلسل else if يضيف فحوصات إضافية. المعاملات المنطقية: && (و — كلاهما صحيح)، || (أو — واحد على الأقل صحيح)، ! (ليس — يعكس القيمة).\n\n📌 الشروط المتداخلة: يمكنك وضع جمل if داخل كتل if/else أخرى لبناء أشجار قرارات متعددة الطبقات.\n\n📌 الحساب في الشروط: يمكن تقييم التعبيرات الحسابية مباشرة داخل أقواس if().',
                        specNote: 'Scope Warning: Variables declared inside { } are block-scoped and CANNOT be accessed outside those curly braces.',
                        specNoteAr: 'تحذير النطاق: المتغيرات المعلنة داخل { } محدودة النطاق ولا يمكن الوصول إليها خارج تلك الأقواس.',
                        code: `// ═══════════════════════════════════════
// PILLAR II: Conditionals & Logic Gates
// ═══════════════════════════════════════

// Basic if / else / else if:
let y = 2;
if (y > 1) {
    console.log("y is greater than 1");
} else if (y < 1) {
    console.log("y is less than 1");
} else {
    console.log("y is equal to 1");
}

// Logical operators:
// && = AND  |  || = OR  |  ! = NOT
let age = 20;
let hasLicense = true;
if (age >= 18 && hasLicense) {
    console.log("You can drive");
}

// Nested conditionals with else:
let weather = "sunny";
let shop = "CLOSED";
if (weather == "sunny") {
    if (shop == "OPEN") {
        console.log("Let's buy bread and go for a picnic");
    } else {
        console.log("Let's buy apple and go for a picnic");
    }
} else {
    console.log("Lunch at home");
}

// Nested conditionals with else if:
let group = "Group C";
if (weather == "sunny") {
    if (group == "Group A") {
        console.log("Destination is the zoo");
    } else if (group == "Group B") {
        console.log("Destination is the museum");
    } else {
        console.log("Destination is the art museum");
    }
} else {
    console.log("Field trip canceled");
}

// Math inside conditions:
let fish = 120;
let count = 0;
if (fish >= 100) {
    console.log("Super big catch!");
    count = count + 1;
    console.log("Super big fish counter:" + count);
}

// ⚠️ SCOPE RULE: Variables inside { } can't be used outside { }
if (true) {
    let secret = "hidden";
    console.log(secret); // ✅ Works inside
}
// console.log(secret); // ❌ ReferenceError!`
                    },
                    {
                        id: 'js-summary-loops',
                        lessonNumber: 'S.3',
                        category: 'js',
                        title: 'Loops, Iteration & Counter Mastery',
                        readTime: '6 min review',
                        spec: 'Foundation Pillar III — Repetition & Accumulation',
                        description: '⚡ MASTER REVIEW — for loops repeat code a set number of times using: initialization (let i = 0), condition (i < 10), and increment (i++). The counter variable i can be used inside calculations. Compound operators: += adds to a variable, *= multiplies.\n\n📌 Nested Loops + Conditionals: Place if statements inside for loops to execute code only at specific iterations.\n\n📌 for...of: A modern loop that extracts values from arrays directly without managing index counters.\n\n📌 Scope Rule: Variables declared inside the () or {} of a loop cannot be used outside.',
                        descriptionAr: '⚡ مراجعة شاملة — تكرر حلقات for الكود عدداً محدداً من المرات باستخدام: التهيئة (let i = 0)، والشرط (i < 10)، والتزايد (i++). يمكن استخدام متغير العداد i داخل الحسابات. المعاملات المركبة: += تضيف للمتغير، *= تضرب.\n\n📌 الحلقات المتداخلة + الشروط: ضع جمل if داخل حلقات for لتنفيذ الكود فقط في تكرارات محددة.\n\n📌 for...of: حلقة حديثة تستخرج القيم من المصفوفات مباشرة دون إدارة فهارس العداد.\n\n📌 قاعدة النطاق: المتغيرات المعلنة داخل () أو {} للحلقة لا يمكن استخدامها خارجها.',
                        specNote: 'Counter Tip: i = i + 3 can also be written as i += 3. Use i++ for increment by 1.',
                        specNoteAr: 'نصيحة العداد: يمكن كتابة i = i + 3 بصيغة i += 3. استخدم i++ للتزايد بمقدار 1.',
                        code: `// ═══════════════════════════════════════
// PILLAR III: Loops & Iteration
// ═══════════════════════════════════════

// Basic for loop:
for (let i = 0; i < 10; i++) { // ++ means increment by 1
    console.log("hi");
}

// Using counter i in calculations:
let num = 1;
for (let i = 1; i <= 10; i++) {
    num = num * i;
}
console.log("10! =", num); // Factorial of 10

// Compound assignment operators:
let points = 10;
points += 5;  // points = points + 5 → 15
console.log("Points:", points);

// Nested if inside for loop:
for (let i = 0; i < 5; i++) {
    console.log("sit-up");
    if (i == 2) {
        console.log("running");
    }
}

// Repeating math with loop counter:
let value = 1;
for (let i = 1; i <= 4; i++) {
    value = value * 4;
}
console.log("4^4 =", value);

// Modern for...of loop (no index needed):
let degreeList = [8, 6, 11, 10, 9, 7, 12];
for (let degree of degreeList) {
    console.log(degree);
}

let wordList = ["apple", "banana", "orange"];
for (let word of wordList) {
    console.log(word);
}`
                    },
                    {
                        id: 'js-summary-functions',
                        lessonNumber: 'S.4',
                        category: 'js',
                        title: 'Functions, Scope & Composition',
                        readTime: '5 min review',
                        spec: 'Foundation Pillar IV — Reusable Code & Encapsulation',
                        description: '⚡ MASTER REVIEW — A function is a reusable block of code. The name before () is the function name; names inside () are arguments/parameters. return gives back the result. Functions can have zero, one, or multiple parameters.\n\n📌 Scope: Variables declared inside { } of a function cannot be used outside { }. Whether arguments are needed depends on the processing.\n\n📌 Composition: Combine functions by putting one inside another, like console.log(Math.floor(Math.random())).\n\n📌 Built-in Math: Math.max, Math.min, Math.round, Math.floor, Math.random.',
                        descriptionAr: '⚡ مراجعة شاملة — الدالة هي كتلة كود قابلة للإعادة الاستخدام. الاسم قبل () هو اسم الدالة؛ والأسماء داخل () هي المعلمات. return يرجع النتيجة. يمكن أن تحتوي الدوال على صفر أو واحد أو عدة معلمات.\n\n📌 النطاق: المتغيرات المعلنة داخل { } للدالة لا يمكن استخدامها خارج { }.\n\n📌 التركيب: ادمج الدوال بوضع واحدة داخل أخرى.\n\n📌 دوال Math المدمجة: Math.max, Math.min, Math.round, Math.floor, Math.random.',
                        specNote: 'Calling Rule: Always include () when calling a function, even with no arguments: goodMorning().',
                        specNoteAr: 'قاعدة الاستدعاء: أضف دائماً () عند استدعاء الدالة، حتى بدون أرجومنتات: goodMorning().',
                        code: `// ═══════════════════════════════════════
// PILLAR IV: Functions & Encapsulation
// ═══════════════════════════════════════

// Creating a function with arguments:
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
console.log(sum(1, 2));       // 3
console.log(sum(50, 100));    // 150

// Function WITHOUT arguments:
function goodMorning() {
    let greeting = "Good morning!";
    return greeting;
}
console.log(goodMorning()); // "Good morning!"

// Function composition (nesting functions):
console.log(Math.floor(Math.random() * 10)); // Random 0-9

// Built-in Math functions:
// Math.max()    → choose the max value
// Math.min()    → choose the min value
// Math.round()  → round to nearest integer
// Math.floor()  → round DOWN to nearest integer
// Math.random() → random number between 0 and 1

// ⚠️ SCOPE: Variables inside { } of a function can't be used outside
function secretFunction() {
    let hidden = "You can't see me outside!";
    return hidden;
}
// console.log(hidden); // ❌ ReferenceError!`
                    },
                    {
                        id: 'js-summary-arrays',
                        lessonNumber: 'S.5',
                        category: 'js',
                        title: 'Arrays, Filtering & Dynamic Processing',
                        readTime: '6 min review',
                        spec: 'Foundation Pillar V — Data Collections & Algorithms',
                        description: '⚡ MASTER REVIEW — Arrays store ordered collections inside [ ] separated by commas. Access values by index starting from 0. .length returns the total count of elements.\n\n📌 Arrays + Loops: Use for loops to iterate through every element. Use array.length as the loop boundary to handle dynamic array sizes.\n\n📌 Arrays + Loops + If: Combine all three to filter data — "if the value at a certain position is something, then do something."\n\n📌 for...of with Arrays: Extract all values in order without setting iteration count manually.',
                        descriptionAr: '⚡ مراجعة شاملة — تخزن المصفوفات مجموعات مرتبة داخل [ ] مفصولة بفواصل. الوصول للقيم بالفهرس بدءاً من 0. ترجع .length العدد الإجمالي للعناصر.\n\n📌 المصفوفات + الحلقات: استخدم حلقات for للمرور على كل عنصر. استخدم array.length كحد للحلقة.\n\n📌 المصفوفات + الحلقات + الشروط: ادمج الثلاثة لتصفية البيانات — "إذا كانت القيمة في موضع معين شيئاً ما، نفذ شيئاً."\n\n📌 for...of مع المصفوفات: استخرج كل القيم بالترتيب دون تحديد عدد التكرارات يدوياً.',
                        specNote: 'Index Rule: First element is array[0]. Last element is array[array.length - 1]. Using array.length as index returns undefined.',
                        specNoteAr: 'قاعدة الفهرسة: العنصر الأول هو array[0]. العنصر الأخير هو array[array.length - 1].',
                        code: `// ═══════════════════════════════════════
// PILLAR V: Arrays & Data Processing
// ═══════════════════════════════════════

// Creating and accessing arrays:
let tempList = [36, 36, 26, 27, 28, 33, 36];
console.log(tempList[4]);      // 28 (index starts at 0)
console.log(tempList);          // Full array
console.log(tempList.length);   // 7

// Arrays + for loop (averaging):
let temps = [36.2, 36.5, 36.3, 36.8, 36.4, 36.9, 37.0];
let sum = 0;
for (let i = 0; i < 7; i++) {
    sum = sum + temps[i];
}
console.log(sum / 7); // Average temperature

// Using .length for dynamic bounds:
let bigList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];
let total = 0;
for (let i = 0; i < bigList.length; i++) {
    total = total + bigList[i];
}
console.log(total / bigList.length); // Dynamic average

// Arrays + for + if (conditional filtering):
let allTemps = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 37.5];
for (let i = 0; i < allTemps.length; i++) {
    if (allTemps[i] >= 37.5) {
        console.log("Avoid going outside!");
    }
}

// for...of with arrays (modern clean syntax):
let degreeList = [8, 6, 11, 10, 9, 7, 12];
for (let degree of degreeList) {
    console.log(degree);
}`
                    },
                    {
                        id: 'js-summary-html-css',
                        lessonNumber: 'S.6',
                        category: 'html',
                        title: 'HTML & CSS Foundations',
                        readTime: '4 min review',
                        spec: 'Foundation Pillar VI — Web Structure & Styling',
                        description: '⚡ MASTER REVIEW — HTML structures web pages using tags. Key tags: <h1>-<h6> for headings (h1 most important), <p> for paragraphs, <br> for line breaks, <ul>/<ol> for lists, <li> for list items, <img src="..." alt="..."> for images, <!-- --> for comments, class="..." to apply CSS styles.\n\nCSS controls presentation. You must create a separate .css file and link it. Properties: color (text color), background-color (background), font-weight (100-900 boldness, 400 = normal), font-size (in px). Classes are referenced by .classname in CSS. Comments use /* */.',
                        descriptionAr: '⚡ مراجعة شاملة — تبني HTML هيكل صفحات الويب باستخدام الوسوم. الوسوم الأساسية: <h1>-<h6> للعناوين، <p> للفقرات، <br> لكسر السطر، <ul>/<ol> للقوائم، <li> لعناصر القائمة، <img> للصور، <!-- --> للتعليقات، class="..." لتطبيق تنسيقات CSS.\n\nتتحكم CSS في التنسيق. يجب إنشاء ملف .css منفصل وربطه. الخصائص: color (لون النص)، background-color (لون الخلفية)، font-weight (السماكة 100-900)، font-size (بالبكسل). يُشار للكلاسات بـ .classname في CSS. التعليقات: /* */.',
                        specNote: 'CSS Linking: You can\'t write CSS in an HTML file directly — create a .css file and link it with <link rel="stylesheet" href="style.css">.',
                        specNoteAr: 'ربط CSS: لا يمكنك كتابة CSS في ملف HTML مباشرة — أنشئ ملف .css واربطه بـ <link rel="stylesheet" href="style.css">.',
                        code: `<!-- ═══════════════════════════════════════ -->
<!-- PILLAR VI: HTML & CSS Foundations      -->
<!-- ═══════════════════════════════════════ -->

<!-- Headings (h1 = most important, h6 = least): -->
<h1>Main Title</h1>

<!-- Paragraphs & Line Breaks: -->
<p>This is a paragraph.</p>
<p>Line one.<br>Line two after break.</p>

<!-- Unordered List (bullet points): -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered List (numbered): -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Images: -->
<img src="photo.jpg" alt="Description of image">

<!-- Comments (not displayed): -->
<!-- This is a comment -->

<!-- Classes for CSS styling: -->
<p class="highlight">Styled paragraph</p>

/* ═══ CSS (in separate .css file) ═══ */
h1 { color: red; }
/* font-weight: 400 = normal, 100-399 = lighter, 401-900 = bolder */
/* font-size: change size in pixels (px) */
.highlight { background-color: yellow; font-size: 18px; }`
                    }
                ]
            }
        ],

        python: [
            // Py Ch 1: Introduction (Locked)
            {
                chapterId: 'py-ch1',
                chapterNumber: 'Py Ch 1',
                chapterTitle: 'Introduction',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-1-1',
                        lessonNumber: '1.1',
                        category: 'python',
                        title: 'What is Python Programming',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 2: Calculations and Strings (Locked)
            {
                chapterId: 'py-ch2',
                chapterNumber: 'Py Ch 2',
                chapterTitle: 'Calculations and Strings',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-2-1',
                        lessonNumber: '2.1',
                        category: 'python',
                        title: 'Output & Math Calculations',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 3: Variables (Locked)
            {
                chapterId: 'py-ch3',
                chapterNumber: 'Py Ch 3',
                chapterTitle: 'Variables',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-3-1',
                        lessonNumber: '3.1',
                        category: 'python',
                        title: 'Variable Declarations & Assignments',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 4: Test 1 Breakline (Locked)
            {
                chapterId: 'py-ch4',
                chapterNumber: 'Py Ch 4',
                chapterTitle: 'Python Test 1 Check',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'py-4-test',
                        lessonNumber: '4.0',
                        category: 'python',
                        title: 'Python Test 1 Assessment',
                        isLocked: true,
                        readTime: 'Test',
                        spec: 'Knowledge Check 1',
                        description: '🔒 Python Test 1 questions will be added by the instructor.',
                        specNote: 'Test breakline divider.',
                        code: `# 🔒 Python Assessment 1`
                    }
                ]
            },
            // Py Ch 5: IF Statement (Locked)
            {
                chapterId: 'py-ch5',
                chapterNumber: 'Py Ch 5',
                chapterTitle: 'IF Statement',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-5-1',
                        lessonNumber: '5.1',
                        category: 'python',
                        title: 'IF Statement Syntax',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 6: IF-ELSE Statement (Locked)
            {
                chapterId: 'py-ch6',
                chapterNumber: 'Py Ch 6',
                chapterTitle: 'IF - ELSE Statement',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-6-1',
                        lessonNumber: '6.1',
                        category: 'python',
                        title: 'IF - ELSE Statement',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 7: ELIF Statement (Locked)
            {
                chapterId: 'py-ch7',
                chapterNumber: 'Py Ch 7',
                chapterTitle: 'ELIF Statement',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-7-1',
                        lessonNumber: '7.1',
                        category: 'python',
                        title: 'ELIF Multi-Branch Conditionals',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 8: Test 2 Breakline (Locked)
            {
                chapterId: 'py-ch8',
                chapterNumber: 'Py Ch 8',
                chapterTitle: 'Python Test 2 Check',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'py-8-test',
                        lessonNumber: '8.0',
                        category: 'python',
                        title: 'Python Test 2 Assessment',
                        isLocked: true,
                        readTime: 'Test',
                        spec: 'Knowledge Check 2',
                        description: '🔒 Python Test 2 questions will be added by the instructor.',
                        specNote: 'Test breakline divider.',
                        code: `# 🔒 Python Assessment 2`
                    }
                ]
            },
            // Py Ch 9: Logical Operator (Locked)
            {
                chapterId: 'py-ch9',
                chapterNumber: 'Py Ch 9',
                chapterTitle: 'Logical Operator',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-9-1',
                        lessonNumber: '9.1',
                        category: 'python',
                        title: 'Logical Operators (and, or, not)',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            },
            // Py Ch 10: Iterative Operation (Locked)
            {
                chapterId: 'py-ch10',
                chapterNumber: 'Py Ch 10',
                chapterTitle: 'Iterative Operation',
                isLocked: true,
                lessons: [
                    {
                        id: 'py-10-1',
                        lessonNumber: '10.1',
                        category: 'python',
                        title: 'Iterative Loops (for, range)',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Chapter',
                        description: '🔒 This Python chapter is locked until content is added by the instructor.',
                        specNote: 'Instructor Notice: Python curriculum is under preparation.',
                        code: '# 🔒 Python chapter content is locked'
                    }
                ]
            }
        ]
    };

    // Populate exact chapters 11 to 54 (Marked as LOCKED until instructor adds content)
    const testChapterNumbers = [4, 8, 11, 14, 17, 20, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54];

    const explicitChapterTitles = {
        11: 'Test 3 Assessment',
        12: 'Function 1',
        13: 'Function 2',
        14: 'Test 4 Assessment',
        15: 'Types',
        16: 'Array',
        17: 'Test 5 Assessment',
        18: 'HTML 1',
        19: 'CSS 1',
        20: 'Test 6 Assessment',
        21: 'Conditions 4',
        22: 'Looping 1',
        23: 'Function 3',
        24: 'Test 7 Assessment',
        25: 'Looping 2',
        26: 'Arrays 2',
        27: 'Test 8 Assessment',
        28: 'For of',
        29: 'Conditions 5',
        30: 'Test 9 Assessment',
        31: 'Functions 4',
        32: 'Flowchart',
        33: 'Test 10 Assessment',
        34: 'HTML 2',
        35: 'CSS 2',
        36: 'Test 11 Assessment',
        37: 'switch statements',
        38: 'modulo',
        39: 'Test 12 Assessment',
        40: 'const inequality',
        41: 'while statements',
        42: 'Test 13 Assessment',
        43: 'CSS 3',
        44: 'website creation',
        45: 'Test 14 Assessment',
        46: 'functions / for of / reminders',
        47: 'switch statement 2 / negation',
        48: 'Test 15 Assessment',
        49: 'while statement 2',
        50: 'Arrays 3',
        51: 'Test 16 Assessment',
        52: 'array operation 1',
        53: 'array operation 2',
        54: 'Test 17 Assessment'
    };

    // ─────────────────────────────────────────────────────────
    // CHAPTER 31: Function 1 — Adding Values with Functions
    // ─────────────────────────────────────────────────────────
    curriculumData.javascript.push({
        chapterId: 'js-ch31',
        chapterNumber: 'Ch 31',
        chapterTitle: 'Function 1',
        lessons: [
            {
                id: 'js-31-1',
                lessonNumber: '31.1',
                category: 'js',
                title: 'what is a function',
                readTime: '4 min read',
                spec: 'Function Call with Two Arguments',
                description: 'When calling a function and passing two arguments, write it as functionName(argument1, argument2). To assign a value returned by a function to a variable, write it as variableName = functionCall.',
                descriptionAr: 'عند استدعاء دالة وتمرير حجتين إليها، اكتبها بالشكل: functionName(argument1, argument2). لتعيين القيمة التي تُرجعها دالة إلى متغير، اكتب: variableName = functionCall.',
                specNote: 'Pattern: let result = sum(39.5, 60.5); — the function is called with two arguments, and the returned value is stored in the variable result.',
                specNoteAr: 'النمط: let result = sum(39.5, 60.5); — يتم استدعاء الدالة بحجتين، وتُخزَّن القيمة المُرجَعة في المتغير result.',
                code: `function sum(freestyle, breaststroke) {
  let time = freestyle + breaststroke;
  return time;
}
let teamRed = sum(39.5, 60.5);
console.log(teamRed);`
            },
            {
                id: 'js-31-2',
                lessonNumber: '31.2',
                category: 'js',
                title: 'how to create a function',
                readTime: '4 min read',
                spec: 'Function with Three Parameters',
                description: 'When creating a function with three parameters, write: function functionName(parameter1, parameter2, parameter3) { process }. When calling a function with three arguments, write: functionName(argument1, argument2, argument3).',
                descriptionAr: 'عند إنشاء دالة بثلاثة معلمات، اكتب: function functionName(parameter1, parameter2, parameter3) { process }. عند استدعاء الدالة بثلاثة حجج، اكتب: functionName(argument1, argument2, argument3).',
                specNote: 'Pattern: The same function sum() can be called multiple times with different argument values — each call is independent and returns its own result.',
                specNoteAr: 'النمط: يمكن استدعاء الدالة sum() عدة مرات بقيم حجج مختلفة — كل استدعاء مستقل ويُرجع نتيجته الخاصة.',
                code: `function sum(freestyle, breaststroke, backstroke) {
  let time = freestyle + breaststroke + backstroke;
  return time;
}
let teamRed = sum(39.5, 60.5, 58.5);
console.log(teamRed);
let teamBlue = sum(40, 62, 58);
console.log(teamBlue);
let teamGreen = sum(41, 59.5, 60);
console.log(teamGreen);`
            },
            {
                id: 'js-31-3',
                lessonNumber: '31.3',
                category: 'js',
                title: 'truncate a fraction',
                readTime: '4 min read',
                spec: 'Comparing Return Values with Math.min()',
                description: 'When calling a function, you can use variables instead of numerical values. Write: functionName(variableName1, variableName2, variableName3). The Math.min() function accepts multiple values (or variables) and returns the smallest one.',
                descriptionAr: 'عند استدعاء الدالة، يمكنك استخدام المتغيرات بدلاً من القيم العددية. اكتب: functionName(variableName1, variableName2, variableName3). تقبل الدالة Math.min() عدة قيم أو متغيرات وتُرجع أصغرها.',
                specNote: 'Pattern: Math.min(teamRed, teamBlue, teamGreen) compares the return values of three separate function calls and outputs the fastest (smallest) time.',
                specNoteAr: 'النمط: Math.min(teamRed, teamBlue, teamGreen) تقارن القيم المُرجَعة من ثلاثة استدعاءات منفصلة للدالة وتُخرج أسرع (أصغر) وقت.',
                code: `function sum(freestyle, breaststroke, backstroke) {
  let time = freestyle + breaststroke + backstroke;
  return time;
}
let teamRed = sum(39.5, 60.5, 58.5);
console.log(teamRed);
let teamBlue = sum(40, 62, 58);
console.log(teamBlue);
let teamGreen = sum(41, 59.5, 60);
console.log(teamGreen);
console.log("The fastest time is" +
  Math.min(teamRed, teamBlue, teamGreen)
);`
            }
        ]
    });

    // ─────────────────────────────────────────────────────────
    // CHAPTER 32: Function 2 — if + Operations & Flowcharts
    // ─────────────────────────────────────────────────────────
    curriculumData.javascript.push({
        chapterId: 'js-ch32',
        chapterNumber: 'Ch 32',
        chapterTitle: 'Function 2',
        lessons: [
            {
                id: 'js-32-1',
                lessonNumber: '32.1',
                category: 'js',
                title: 'how to create random numbers',
                readTime: '4 min read',
                spec: 'Performing Operations Inside Conditional Branches',
                description: 'When you perform operations within conditional branches, you can do things like adding 1 to a variable if a certain condition is met. For example, use count++ inside an if block to increment a counter each time the condition is true.',
                descriptionAr: 'عند إجراء عمليات داخل الفروع الشرطية، يمكنك تنفيذ أشياء مثل إضافة 1 إلى متغير إذا تحقق شرط معين. على سبيل المثال، استخدم count++ داخل كتلة if لزيادة عداد في كل مرة يتحقق فيها الشرط.',
                specNote: 'Pattern: Iterate over an array with for...of, then use if inside the loop to count specific values — ideal for tallying survey results or filtering lists.',
                specNoteAr: 'النمط: كرر على مصفوفة باستخدام for...of، ثم استخدم if داخل الحلقة لعد قيم معينة — مثالي لإحصاء نتائج الاستبيانات أو تصفية القوائم.',
                code: `let volunteerList = ["Yes", "No", "Yes", "Yes", "Yes", "Yes", "No", "No", "Yes", "Yes", "Yes", "No", "Yes", "No"];
let count = 0;
for (let day of volunteerList) {
  if (day == "No") {
    count++;
  }
}
console.log(count);`
            },
            {
                id: 'js-32-2',
                lessonNumber: '32.2',
                category: 'js',
                title: 'character assignment',
                readTime: '4 min read',
                spec: 'What Is a Flowchart?',
                description: 'A flowchart is a diagram that helps organize information when writing a program. Flowcharts use visual shapes to represent different types of steps: rectangles for actions/processes, diamonds for decisions (yes/no conditions), and arrows to show the flow direction.',
                descriptionAr: 'المخطط الانسيابي (Flowchart) هو رسم بياني يساعد على تنظيم المعلومات عند كتابة برنامج. تستخدم المخططات الانسيابية أشكالاً بصرية لتمثيل أنواع مختلفة من الخطوات: مستطيلات للإجراءات والعمليات، ومعين للقرارات (شروط نعم/لا)، وأسهم لإظهار اتجاه التدفق.',
                specNote: 'Tip: Draw a flowchart BEFORE writing complex code — it helps you plan the logic and catch missing cases before you start coding.',
                specNoteAr: 'نصيحة: ارسم المخطط الانسيابي قبل كتابة الكود المعقد — يساعدك على التخطيط للمنطق واكتشاف الحالات الناقصة قبل البدء في البرمجة.',
                imageUrl: 'images/flowchart-32-2.png',
                imageAlt: 'Flowchart: Counting No responses in a for loop with an if condition',
                code: `// Flowchart concept — counting "No" responses:
// [START]
//   → Initialize count = 0
//   → For each day in volunteerList:
//       [DECISION] Is day == "No" ?
//         YES → count++
//         NO  → (skip)
//   → After loop: console.log(count)
// [END]

let volunteerList = ["Yes", "No", "Yes", "Yes", "No"];
let count = 0;
for (let day of volunteerList) {
  if (day == "No") {
    count++;
  }
}
console.log(count); // 2`
            },
            {
                id: 'js-32-3',
                lessonNumber: '32.3',
                category: 'js',
                title: 'data types differences',
                readTime: '4 min read',
                spec: 'Flowchart with Nested Conditionals',
                description: 'The more complex a program is — such as those with nested structures — the more useful it becomes to draw a flowchart. A nested if inside another if creates multiple decision branches, each requiring its own path in the flowchart.',
                descriptionAr: 'كلما كان البرنامج أكثر تعقيداً — مثل تلك التي تحتوي على هياكل متداخلة — كلما أصبح رسم المخطط الانسيابي أكثر فائدة. الشرط if المتداخل داخل if آخر يُنشئ فروع قرار متعددة، كل منها يتطلب مساره الخاص في المخطط الانسيابي.',
                specNote: 'Reading Flowcharts: Follow the arrows from top to bottom. At each diamond (decision), take the YES or NO branch. Each branch leads to a different action or ends the program.',
                specNoteAr: 'قراءة المخططات الانسيابية: اتبع الأسهم من أعلى إلى أسفل. عند كل معين (قرار)، اتخذ فرع نعم أو لا. يؤدي كل فرع إلى إجراء مختلف أو ينهي البرنامج.',
                imageUrl: 'images/flowchart-32-3.png',
                imageAlt: 'Flowchart: Nested sandwich decision — sandwichType and savory type branching',
                code: `// Flowchart: nested sandwich decision
// [START]
//   [DECISION] sandwichType == "savory" ?
//     YES → [DECISION] savory == "tuna" ?
//               YES → "Exchange with Cody"
//               NO  → "Eat ham sandwich"
//     NO  → "Eat strawberry jam sandwich"
// [END]

let sandwichType = "savory";
let savory = "tuna";
if (sandwichType == "savory") {
  if (savory == "tuna") {
    console.log("Exchange with Cody");
  } else {
    console.log("Eat ham sandwich");
  }
} else {
  console.log("Eat strawberry jam sandwich");
}`
            }
        ]
    });

    // ─────────────────────────────────────────────────────────
    // CHAPTER 33: Test 10 Assessment
    // ─────────────────────────────────────────────────────────
    curriculumData.javascript.push({
        chapterId: 'js-ch33',
        chapterNumber: 'Ch 33',
        chapterTitle: 'Test 10 Assessment',
        isTest: true,
        isLocked: false,
        testQuestions: [
            {
                id: 'q1',
                type: 'mcq',
                question: '1. Choose the correct program that passes the three arguments 3, 5, and 10 to the function calc3 and outputs to the console.',
                questionAr: '1. اختر البرنامج الصحيح الذي يمرر الوسائط الثلاث 3 و 5 و 10 للدالة calc3 ويطبع النتيجة في وحدة التحكم.',
                options: [
                    'console.log(calc3(3, 5, 10));',
                    'calc3(3, 5, 10);',
                    'console.log(function calc3(3, 5, 10);',
                    'console.log(return calc3(3, 5, 10));'
                ],
                optionsAr: [
                    'console.log(calc3(3, 5, 10));',
                    'calc3(3, 5, 10);',
                    'console.log(function calc3(3, 5, 10);',
                    'console.log(return calc3(3, 5, 10));'
                ],
                correctIndex: 0,
                explanation: 'console.log(calc3(3, 5, 10)); calls the function with 3 arguments and wraps it in console.log() to output the returned value. Option 2 calls the function but never outputs the result. Options 3 and 4 use invalid syntax.',
                explanationAr: 'console.log(calc3(3, 5, 10)); تستدعي الدالة بثلاث وسائط وتلفها بـ console.log() لطباعة القيمة المُرجعة. الخيار 2 يستدعي الدالة لكن لا يطبع النتيجة. الخياران 3 و 4 يستخدمان تركيباً غير صحيح.'
            },
            {
                id: 'q2',
                type: 'code',
                question: '2. We\'ll create a program where outputting num1 to the console shows the same value as the calc result of calc3.\n\nWithout erasing the original program, write your code on line 5:\n①Declare variable num1 and assign the result of calc3 to it.\n  Pass the arguments 5, 10, and 15 to the function.',
                questionAr: '2. سننشئ برنامجاً حيث يُظهر طباعة num1 في وحدة التحكم نفس نتيجة حساب الدالة calc3.\n\nبدون حذف البرنامج الأصلي، اكتب برنامجك في السطر 5:\n①أعلن عن المتغير num1 وعيّن له نتيجة الدالة calc3.\n  مرر الوسائط 5 و 10 و 15 للدالة.',
                initialCode: 'function calc3(a, b, c) {\n  let total = a + b + c;\n  return total;\n}\n// Write your code on line 5:\nconsole.log(num1);',
                expectedOutput: '30',
                expectedAnswer: 'let num1 = calc3(5, 10, 15);',
                explanation: 'Declare num1 with let and assign the return value of calc3(5, 10, 15) to it. 5 + 10 + 15 = 30, so console.log(num1) outputs 30.',
                explanationAr: 'أعلن عن num1 باستخدام let وعيّن له القيمة المُرجعة من calc3(5, 10, 15). 5 + 10 + 15 = 30، لذا يطبع console.log(num1) القيمة 30.'
            },
            {
                id: 'q3',
                type: 'code',
                question: '3. Without erasing the original program, write your code from line 7 onwards:\n①Declare variable num2 and assign the result of calc3 to it.\n  Pass the arguments 4, 4, and 4 to the function.\n②Output the value of num2 to the console.',
                questionAr: '3. بدون حذف البرنامج الأصلي، اكتب برنامجك من السطر 7 فصاعداً:\n①أعلن عن المتغير num2 وعيّن له نتيجة الدالة calc3.\n  مرر الوسائط 4 و 4 و 4 للدالة.\n②اطبع قيمة num2 في وحدة التحكم.',
                initialCode: 'function calc3(a, b, c) {\n  let total = a + b + c;\n  return total;\n}\nlet num1 = calc3(5, 10, 15);\nconsole.log(num1);\n// Write your code from line 7:',
                expectedOutput: '30\n12',
                expectedAnswer: 'let num2 = calc3(4, 4, 4);\nconsole.log(num2);',
                explanation: 'Declare num2 with let, assign calc3(4, 4, 4) = 12, then output it. The full program prints 30 (from num1) then 12 (from num2).',
                explanationAr: 'أعلن عن num2 باستخدام let، عيّن له calc3(4, 4, 4) = 12، ثم اطبعه. يطبع البرنامج الكامل 30 (من num1) ثم 12 (من num2).'
            },
            {
                id: 'q4',
                type: 'mcq',
                question: '4. The Math.min function returns the smallest value among its arguments.\nPlease select the program that outputs the smallest value among num1, num2, and num3.',
                questionAr: '4. تُرجع الدالة Math.min أصغر قيمة بين وسائطها.\nاختر البرنامج الذي يطبع أصغر قيمة بين num1 و num2 و num3.',
                options: [
                    'console.log(return Math.min(num1, num2, num3));',
                    'console.log(num1, num2, num3);',
                    'console.log(Math.min(num1, num2, num3));',
                    'Math.min(num1, num2, num3);'
                ],
                optionsAr: [
                    'console.log(return Math.min(num1, num2, num3));',
                    'console.log(num1, num2, num3);',
                    'console.log(Math.min(num1, num2, num3));',
                    'Math.min(num1, num2, num3);'
                ],
                correctIndex: 2,
                explanation: 'console.log(Math.min(num1, num2, num3)); correctly calls Math.min with the three variables and outputs the smallest. Option 1 uses "return" outside a function (invalid). Option 2 prints all three values, not the minimum. Option 4 never outputs anything.',
                explanationAr: 'console.log(Math.min(num1, num2, num3)); يستدعي Math.min بشكل صحيح مع المتغيرات الثلاثة ويطبع الأصغر. الخيار 1 يستخدم "return" خارج دالة (غير صحيح). الخيار 2 يطبع القيم الثلاث وليس الأصغر. الخيار 4 لا يطبع أي شيء.'
            },
            {
                id: 'q5',
                type: 'mcq',
                question: '5. Please select the output result of the program below.\n\nlet scoreList = [70, 80, 66, 88, 92];\nfor (let score of scoreList) {\n  if (score >= 80) {\n    console.log(score);\n  }\n}',
                questionAr: '5. اختر نتيجة إخراج البرنامج أدناه.\n\nlet scoreList = [70, 80, 66, 88, 92];\nfor (let score of scoreList) {\n  if (score >= 80) {\n    console.log(score);\n  }\n}',
                options: [
                    '70 80 66 88 92',
                    '70 66',
                    '92',
                    '80 88 92'
                ],
                optionsAr: [
                    '70 80 66 88 92',
                    '70 66',
                    '92',
                    '80 88 92'
                ],
                correctIndex: 3,
                explanation: 'The for...of loop iterates every score. The if condition (score >= 80) only passes for 80, 88, and 92. So only those three values are printed, each on its own line.',
                explanationAr: 'تكرر حلقة for...of على كل درجة. شرط if (score >= 80) يمر فقط على 80 و 88 و 92. لذا تُطبع هذه القيم الثلاث فقط، كل واحدة في سطر منفصل.'
            },
            {
                id: 'q6',
                type: 'code',
                question: '6. Please write a program that outputs only values from the variable height that are greater than or equal to 150.\nDo not delete the original program.',
                questionAr: '6. اكتب برنامجاً يطبع فقط القيم من المتغير height التي تساوي 150 أو تكون أكبر منها.\nلا تحذف البرنامج الأصلي.',
                initialCode: 'let height = [160, 140, 155, 130, 165, 148, 152];\n// Write your program below:\n',
                expectedOutput: '160\n155\n165\n152',
                expectedAnswer: 'for (let h of height) {\n  if (h >= 150) {\n    console.log(h);\n  }\n}',
                explanation: 'Use a for...of loop to iterate over height, then an if statement to check h >= 150. Only 160, 155, 165, and 152 pass the condition and get printed.',
                explanationAr: 'استخدم حلقة for...of للتكرار على height، ثم جملة if للتحقق من h >= 150. فقط 160 و 155 و 165 و 152 تجتاز الشرط وتُطبع.'
            },
            {
                id: 'q7',
                type: 'mcq',
                question: '7. The flowchart below is used to determine if someone can ride a roller coaster alone.\nFrom the choices below, select the statement that is INCORRECT based on the flowchart.',
                questionAr: '7. يُستخدم المخطط الانسيابي أدناه لتحديد ما إذا كان بإمكان شخص ما ركوب الأفعوانية بمفرده.\nمن الخيارات أدناه، اختر العبارة غير الصحيحة بناءً على المخطط الانسيابي.',
                imageUrl: 'images/test10-q7-flowchart.png',
                imageAlt: 'Roller coaster eligibility flowchart: Height >= 140cm OR Age >= 18 to ride alone',
                options: [
                    'If you are 12 years or older and your height is 140 cm or greater, you can ride alone',
                    'If your height is 140 cm or greater, you can ride alone',
                    'Even if you are under 12 years old, you can ride alone',
                    'If you are 18 years or older, you can ride alone'
                ],
                optionsAr: [
                    'إذا كنت في سن 12 أو أكبر وطولك 140 سم أو أكثر، يمكنك الركوب بمفردك',
                    'إذا كان طولك 140 سم أو أكثر، يمكنك الركوب بمفردك',
                    'حتى لو كنت أقل من 12 سنة، يمكنك الركوب بمفردك',
                    'إذا كنت في سن 18 أو أكبر، يمكنك الركوب بمفردك'
                ],
                correctIndex: 0,
                explanation: 'Statement 1 is INCORRECT. The flowchart shows that height >= 140cm ALONE is enough to ride — no age condition is needed alongside it. The age threshold in the flowchart is 18 (not 12). So saying "12 years or older AND height >= 140" is a false description of the flowchart logic.',
                explanationAr: 'العبارة 1 غير صحيحة. يُظهر المخطط الانسيابي أن الطول >= 140 سم وحده كافٍ للركوب — لا حاجة لشرط العمر معه. عتبة العمر في المخطط هي 18 (وليس 12). لذا فإن القول "12 سنة أو أكبر وطول >= 140" وصف خاطئ لمنطق المخطط الانسيابي.'
            }
        ],
        lessons: [
            {
                id: 'js-33-test',
                lessonNumber: '33.0',
                category: 'js',
                title: 'Test 10 Assessment',
                readTime: '15 min assessment',
                spec: 'Interactive Test 10',
                description: 'Complete the 7 questions below (multiple-choice and live code editor problems) covering Chapters 31 and 32: Functions, Math.min, for...of filtering, and flowchart interpretation.',
                descriptionAr: 'أكمل الأسئلة السبعة أدناه (اختيار من متعدد ومشكلات محرر الكود الحي) التي تغطي الفصلين 31 و 32: الدوال، Math.min، تصفية for...of، وتفسير المخططات الانسيابية.',
                specNote: 'Click Submit Quiz Answers after filling out all your responses. Code questions are checked by running the code — make sure your output matches exactly.',
                specNoteAr: 'انقر على "إرسال إجابات الاختبار" بعد ملء جميع إجاباتك. يتم التحقق من أسئلة الكود عن طريق تشغيله — تأكد من تطابق مخرجاتك تماماً.',
                code: `// Test 10: Functions, Math.min, for...of & Flowcharts
function calc3(a, b, c) {
  let total = a + b + c;
  return total;
}
console.log(calc3(3, 5, 10)); // 18`
            }
        ]
    });


    // ─────────────────────────────────────────────────────────
    // CHAPTER 34: HTML 2 — Span Tags & Input Fields
    // ─────────────────────────────────────────────────────────
    curriculumData.javascript.push({
        chapterId: 'js-ch34',
        chapterNumber: 'Ch 34',
        chapterTitle: 'HTML 2',
        lessons: [
            {
                id: 'js-34-1',
                lessonNumber: '34.1',
                category: 'html',
                title: 'what is html ?',
                readTime: '4 min read',
                spec: 'CSS Targeting with <span> Tags',
                description: 'By enclosing parts of HTML with <span> tags, you can target those enclosed parts with CSS. The span element is an inline container with no visual effect of its own — it becomes useful when given a class or id for styling.',
                descriptionAr: 'بتغليف أجزاء من HTML بعلامات <span>، يمكنك استهداف تلك الأجزاء المغلفة بواسطة CSS. عنصر span هو حاوية مضمنة ليس لها تأثير بصري خاص بها — يصبح مفيداً عند إعطائه فئة (class) أو معرف (id) للتنسيق.',
                specNote: 'Rule: <span> does not break the line flow (it is inline). Use it inside paragraphs to color, bold, or style individual words or phrases.',
                specNoteAr: 'القاعدة: <span> لا يكسر تدفق السطر (مضمن). استخدمه داخل الفقرات لتلوين كلمات أو عبارات معينة أو تنسيقها.',
                code: `<!-- HTML File -->
<p>My favorite fruit is <span class="apple">Apple</span></p>
<p>My favorite animal is <span class="giraffe">Giraffe</span></p>
<p>Today's shoes are <span class="sneaker">Light blue sneakers</span></p>

/* CSS File */
.apple  { color: red;    }
.giraffe{ color: yellow; }
.sneaker{ color: aqua;   }`
            },
            {
                id: 'js-34-2',
                lessonNumber: '34.2',
                category: 'html',
                title: 'display of text',
                readTime: '4 min read',
                spec: 'Input Fields & Button Display',
                description: 'To create a text input field, write an <input> tag with the type attribute type="text". To create a button, write an <input> tag with the type attribute type="button". To add text to a button, write the value attribute value="text" inside the input tag.',
                descriptionAr: 'لإنشاء حقل إدخال نصي، اكتب علامة <input> مع سمة النوع type="text". لإنشاء زر، اكتب علامة <input> مع سمة النوع type="button". لإضافة نص إلى الزر، اكتب سمة القيمة value="text" داخل علامة input.',
                specNote: 'Note: <input> is a self-closing tag — it has no closing </input>. The type attribute determines whether it renders as a text box, button, checkbox, radio, etc.',
                specNoteAr: 'ملاحظة: <input> علامة ذاتية الإغلاق — ليس لها </input> إغلاق. تحدد سمة type ما إذا كانت ستُعرض كمربع نص أو زر أو خانة اختيار أو زر راديو وما إلى ذلك.',
                code: `<h1>Event Content Survey</h1>
<p>Opinion</p>
<input type="text">
<input type="button" value="Submit">`
            }
        ]
    });

    // ─────────────────────────────────────────────────────────
    // CHAPTER 35: CSS 2 — Hover, Transitions & Borders
    // ─────────────────────────────────────────────────────────
    curriculumData.javascript.push({
        chapterId: 'js-ch35',
        chapterNumber: 'Ch 35',
        chapterTitle: 'CSS 2',
        lessons: [
            {
                id: 'js-35-1',
                lessonNumber: '35.1',
                category: 'css',
                title: 'character colour',
                readTime: '4 min read',
                spec: 'CSS :hover Pseudo-class',
                description: 'To change the color only when the mouse touches a specified part, add ":hover" after the selector. The :hover pseudo-class applies styles only while the user\'s cursor is hovering over the element.',
                descriptionAr: 'لتغيير اللون فقط عندما يلمس الماوس جزءاً محدداً، أضف ":hover" بعد المحدد. تُطبّق الفئة الزائفة :hover الأنماط فقط عندما يكون مؤشر المستخدم فوق العنصر.',
                specNote: 'Syntax: .className:hover { property: value; } — No space between the selector and :hover.',
                specNoteAr: 'التركيب: .className:hover { property: value; } — لا مسافة بين المحدد و :hover.',
                code: `.btn1:hover {
  background-color: lime;
}
.btn2:hover {
  background-color: yellow;
}`
            },
            {
                id: 'js-35-2',
                lessonNumber: '35.2',
                category: 'css',
                title: 'character thickness and size',
                readTime: '4 min read',
                spec: 'CSS transition Property',
                description: 'To specify the time it takes for the color to change, use the "transition" property. The value is specified as the number of seconds for the color change, such as "2s". Transition creates a smooth animation between the default state and the hover state.',
                descriptionAr: 'لتحديد الوقت الذي يستغرقه تغيير اللون، استخدم خاصية "transition". تُحدَّد القيمة كعدد من الثواني لتغيير اللون، مثل "2s". تُنشئ خاصية transition رسوم متحركة سلسة بين الحالة الافتراضية وحالة hover.',
                specNote: 'Rule: The transition property is placed inside the :hover block (or on the base element) to animate the change. A higher value = slower, more gradual color change.',
                specNoteAr: 'القاعدة: تُوضع خاصية transition داخل كتلة :hover (أو على العنصر الأساسي) لتحريك التغيير. قيمة أعلى = تغيير لون أبطأ وأكثر تدرجاً.',
                code: `.btn1:hover {
  background-color: lime;
  transition: 2s;
}
.btn2:hover {
  background-color: yellow;
  transition: 5s;
}`
            },
            {
                id: 'js-35-3',
                lessonNumber: '35.3',
                category: 'css',
                title: 'class',
                readTime: '4 min read',
                spec: 'CSS border Property',
                description: 'To add a border, use the "border" property, and you can specify values for "type", "thickness", and "color". To specify border types, use "solid" for a single line and "double" for a double line. To specify border thickness, use "px" (pixels). The larger the value, the thicker the line becomes.',
                descriptionAr: 'لإضافة حد، استخدم خاصية "border"، ويمكنك تحديد قيم "النوع" و"السمك" و"اللون". لتحديد أنواع الحدود، استخدم "solid" للخط الواحد و"double" للخط المزدوج. لتحديد سمك الحد، استخدم "px" (بكسل). كلما كانت القيمة أكبر، كلما أصبح الخط أسمك.',
                specNote: 'Syntax: border: [thickness] [type] [color]; — Example: border: 5px solid red; means a 5-pixel-wide single red line around the element.',
                specNoteAr: 'التركيب: border: [السمك] [النوع] [اللون]; — مثال: border: 5px solid red; يعني خطاً أحمر واحد بعرض 5 بكسل حول العنصر.',
                code: `h1 {
  border: 5px solid red;
}
h2 {
  border: 10px double blue;
}`
            }
        ]
    });

    // Populate remaining chapters 31 to 54 (Marked as LOCKED until instructor adds content)
    // Chapters 31, 32, 33, 34, 35 are already populated above
    const alreadyPopulated = new Set([31, 32, 33, 34, 35]);
    for (let i = 31; i <= 54; i++) {
        if (alreadyPopulated.has(i)) continue; // Skip already-defined chapters
        let isTestCh = testChapterNumbers.includes(i);
        let title = explicitChapterTitles[i] || `Topic ${i}`;
        let category = (i === 18 || i === 34) ? 'html' : ((i === 19 || i === 35 || i === 43) ? 'css' : 'js');

        curriculumData.javascript.push({
            chapterId: `js-ch${i}`,
            chapterNumber: `Ch ${i}`,
            chapterTitle: title,
            isTest: isTestCh,
            isLocked: true, // Locked until user adds lessons/questions
            testQuestions: [],
            lessons: [
                {
                    id: `js-${i}-1`,
                    lessonNumber: `${i}.1`,
                    category: category,
                    title: title,
                    isLocked: true,
                    readTime: 'Locked',
                    spec: isTestCh ? `Locked Test ${i}` : 'Locked Chapter',
                    description: isTestCh ? `🔒 Test assessment for ${title} is currently locked. Questions will be added by the instructor.` : `🔒 This chapter is currently locked. Content will be added by the instructor.`,
                    specNote: 'Instructor Notice: Content is under preparation.',
                    code: isTestCh ? `// 🔒 Test assessment is locked` : `// 🔒 Chapter content is locked`
                }
            ]
        });
    }

    // State Tracking for Collapsed Chapters (Preserves open state)
    let chapterCollapsedState = {};

    // Toast Notification Floating Alert Helper
    function showToastNotice(title, message, icon = '🔒') {
        const container = document.getElementById('toast-container') || document.body;
        const toast = document.createElement('div');
        toast.className = 'toast-notice';
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-content">
                <div class="toast-title">${escapeHtml(title)}</div>
                <div class="toast-message">${escapeHtml(message)}</div>
            </div>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3200);
    }

    // Flattened Lessons Index (Only holds unlocked, active lessons for direct navigation)
    let currentLanguage = 'javascript';
    let allLessons = [];
    let testBreaklines = [];

    function updateFlattenedLessons() {
        allLessons = [];
        testBreaklines = [];
        const activeTree = curriculumData[currentLanguage] || [];

        activeTree.forEach((ch) => {
            if (ch.isTest) {
                ch.lessons.forEach(les => {
                    testBreaklines.push({
                        ...les,
                        chapterNumber: ch.chapterNumber,
                        chapterTitle: ch.chapterTitle,
                        chapterId: ch.chapterId,
                        isTest: true
                    });
                });
            } else if (!ch.isLocked) {
                ch.lessons.forEach((les) => {
                    if (!les.isLocked) {
                        allLessons.push({
                            ...les,
                            chapterNumber: ch.chapterNumber,
                            chapterTitle: ch.chapterTitle,
                            chapterId: ch.chapterId,
                            isTest: false,
                            globalIndex: allLessons.length
                        });
                    }
                });
            }
        });
    }

    // Application State
    let activeLessonIndex = 0;
    let currentActiveTest = null;
    let completedLessons = JSON.parse(localStorage.getItem('sprix_completed_lessons') || '[]');
    let storedTestGrades = JSON.parse(localStorage.getItem('sprix_test_grades') || '{}');
    let searchQuery = '';

    // DOM Cache
    const DOM = {
        curriculumTree: document.getElementById('curriculum-tree'),
        globalSearch: document.getElementById('global-search'),
        progressFill: document.getElementById('progress-fill'),
        progressText: document.getElementById('progress-text'),
        themeToggle: document.getElementById('theme-toggle'),
        langToggle: document.getElementById('lang-toggle'),
        langText: document.getElementById('lang-text'),
        langTabJs: document.getElementById('lang-tab-js'),
        langTabPy: document.getElementById('lang-tab-py'),

        // Doc View Elements
        breadcrumbChapter: document.getElementById('doc-bc-chapter'),
        breadcrumbLesson: document.getElementById('doc-bc-lesson'),
        docTitle: document.getElementById('doc-title'),
        techTag: document.getElementById('tech-tag'),
        readTime: document.getElementById('read-time'),
        specName: document.getElementById('spec-name'),
        docDescription: document.getElementById('doc-description'),
        lessonDiagramWrapper: document.getElementById('lesson-diagram-wrapper'),
        lessonDiagramImg: document.getElementById('lesson-diagram-img'),
        specNoteText: document.getElementById('spec-note-text'),
        codeLangLabel: document.getElementById('code-lang-label'),
        codeDisplay: document.getElementById('code-display'),
        copyCodeBtn: document.getElementById('copy-code-btn'),
        markCompletedBtn: document.getElementById('mark-completed-btn'),

        // Quiz Container
        quizContainerCard: document.getElementById('quiz-container-card'),
        quizBody: document.getElementById('quiz-body'),

        // Navigation Buttons
        prevLessonBtn: document.getElementById('prev-lesson-btn'),
        nextLessonBtn: document.getElementById('next-lesson-btn'),
        prevLessonTitle: document.getElementById('prev-lesson-title'),
        nextLessonTitle: document.getElementById('next-lesson-title'),

        // Sandbox (In-Lesson)
        jsToolsCard: document.getElementById('js-tools-card'),
        jsInput: document.getElementById('js-sandbox-input'),
        runJsBtn: document.getElementById('run-js-btn'),
        jsConsoleOutput: document.getElementById('js-console-output'),
        sandboxToggleBtn: document.getElementById('sandbox-toggle-btn'),
        sandboxToggleIcon: document.getElementById('sandbox-toggle-icon'),
        sandboxToggleText: document.getElementById('sandbox-toggle-text'),
        sandboxCollapsible: document.getElementById('sandbox-collapsible'),

        // Standalone Sandbox View
        sandboxViewContainer: document.getElementById('sandbox-view-container'),
        navBtnSandbox: document.getElementById('nav-btn-sandbox'),
        sandboxViewInput: document.getElementById('sandbox-view-input'),
        sandboxViewRunBtn: document.getElementById('sandbox-view-run-btn'),
        sandboxViewClearBtn: document.getElementById('sandbox-view-clear-btn'),
        sandboxViewOutput: document.getElementById('sandbox-view-output'),

        // View Switching Elements
        homeViewContainer: document.getElementById('home-view-container'),
        workspaceLayout: document.getElementById('workspace-layout'),
        navBtnHome: document.getElementById('nav-btn-home'),
        navBtnCurriculum: document.getElementById('nav-btn-curriculum'),
        brandHomeLink: document.getElementById('brand-home-link'),
        enterCurriculumBtn: document.getElementById('enter-curriculum-btn'),
        heroJsTrackBtn: document.getElementById('hero-js-track-btn'),
        heroPyTrackBtn: document.getElementById('hero-py-track-btn'),
        heroSandboxBtn: document.getElementById('hero-sandbox-btn'),

        // Sidebar Collapse Controls
        sidebarCollapseBtn: document.getElementById('sidebar-collapse-btn'),
        sidebarExpandBtn: document.getElementById('sidebar-expand-btn'),

        // Mobile Responsiveness Controls
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        sidebarOverlay: document.getElementById('sidebar-overlay'),
        sidebar: document.getElementById('sidebar'),
        mobileSettingsToggle: document.getElementById('mobile-settings-toggle'),
        mobileSettingsDropdown: document.getElementById('mobile-settings-dropdown'),
        closeMobileSettings: document.getElementById('close-mobile-settings'),
        mobileLangToggle: document.getElementById('mobile-lang-toggle'),
        mobileLangText: document.getElementById('mobile-lang-text'),
        mobileThemeToggle: document.getElementById('mobile-theme-toggle'),
        mobileThemeIcon: document.getElementById('mobile-theme-icon'),
        mobileThemeText: document.getElementById('mobile-theme-text'),
        mobileGlobalSearch: document.getElementById('mobile-global-search'),
        desktopSearchResults: document.getElementById('desktop-search-results'),
        mobileSearchResults: document.getElementById('mobile-search-results'),
        themeIcon: document.getElementById('theme-icon'),
        themeText: document.getElementById('theme-text'),
        mobileNavSandboxBtn: document.getElementById('mobile-nav-sandbox-btn')
    };

    function renderLiveSearchResults(query) {
        const q = query.toLowerCase().trim();
        const isAr = (currentUiLang === 'ar');
        const containers = [DOM.desktopSearchResults, DOM.mobileSearchResults];

        if (!q) {
            hideLiveSearchResults();
            return;
        }

        const activeTree = curriculumData[currentLanguage] || [];
        let matches = [];

        activeTree.forEach(chapter => {
            if (chapter.isTest) return;
            const chTitleEn = chapter.chapterTitle || '';
            const chTitleAr = getChapterTitleText(chapter);

            chapter.lessons.forEach(les => {
                if (les.isLocked) return;
                const lesTitleEn = les.title || '';
                const lesTitleAr = getLessonTitleText(les);
                const descEn = les.description || '';
                const descAr = les.descriptionAr || '';
                const specEn = les.spec || '';
                const specAr = les.specNoteAr || '';
                const num = les.lessonNumber || '';

                const isMatch =
                    lesTitleEn.toLowerCase().includes(q) ||
                    lesTitleAr.toLowerCase().includes(q) ||
                    chTitleEn.toLowerCase().includes(q) ||
                    chTitleAr.toLowerCase().includes(q) ||
                    num.toLowerCase().includes(q) ||
                    descEn.toLowerCase().includes(q) ||
                    descAr.toLowerCase().includes(q) ||
                    specEn.toLowerCase().includes(q) ||
                    specAr.toLowerCase().includes(q);

                if (isMatch) {
                    matches.push({
                        lesson: les,
                        chapter: chapter,
                        chTitle: isAr ? chTitleAr : chTitleEn,
                        lesTitle: isAr ? lesTitleAr : lesTitleEn,
                        snippet: isAr ? (descAr || descEn) : descEn
                    });
                }
            });
        });

        containers.forEach(container => {
            if (!container) return;
            container.innerHTML = '';

            if (matches.length === 0) {
                const noRes = document.createElement('div');
                noRes.className = 'search-no-results';
                noRes.innerText = isAr ? 'لا توجد دروس مطابقة لبحثك' : 'No matching lessons found';
                container.appendChild(noRes);
            } else {
                matches.slice(0, 8).forEach(item => {
                    const row = document.createElement('div');
                    row.className = 'search-result-item';
                    row.innerHTML = `
                        <span class="search-result-badge ${item.lesson.category}">${item.lesson.category}</span>
                        <div class="search-result-info">
                            <div class="search-result-title">${item.lesson.lessonNumber} ${escapeHtml(item.lesTitle)}</div>
                            <div class="search-result-meta">${escapeHtml(item.chTitle)} • ${escapeHtml(item.snippet)}</div>
                        </div>
                    `;

                    row.addEventListener('click', (e) => {
                        e.stopPropagation();
                        showCurriculumView();
                        const globalIdx = allLessons.findIndex(l => l.id === item.lesson.id);
                        if (globalIdx > -1) {
                            selectLesson(globalIdx);
                        }
                        hideLiveSearchResults();
                        if (DOM.mobileSettingsDropdown) DOM.mobileSettingsDropdown.classList.remove('active');
                        closeMobileSidebar();
                    });

                    container.appendChild(row);
                });
            }
            container.classList.add('active');
        });
    }

    function hideLiveSearchResults() {
        [DOM.desktopSearchResults, DOM.mobileSearchResults].forEach(c => {
            if (c) {
                c.innerHTML = '';
                c.classList.remove('active');
            }
        });
    }

    function handleSearchInput(query, sourceInput) {
        searchQuery = query.toLowerCase().trim();
        if (sourceInput !== DOM.globalSearch && DOM.globalSearch) {
            DOM.globalSearch.value = query;
        }
        if (sourceInput !== DOM.mobileGlobalSearch && DOM.mobileGlobalSearch) {
            DOM.mobileGlobalSearch.value = query;
        }
        if (searchQuery !== '' && DOM.homeViewContainer && DOM.homeViewContainer.style.display !== 'none') {
            showCurriculumView();
        }
        renderLiveSearchResults(searchQuery);
        renderCurriculumTree();
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.global-search-container') && !e.target.closest('.mobile-search-inner')) {
            hideLiveSearchResults();
        }
    });

    // Mobile Sidebar Drawer Toggle Listeners
    function openMobileSidebar() {
        if (!DOM.sidebar) return;
        // On mobile the sidebar must never carry desktop-collapsed — strip it
        DOM.sidebar.classList.remove('desktop-collapsed');
        DOM.sidebar.style.pointerEvents = '';
        DOM.sidebar.classList.add('mobile-open');
        if (DOM.sidebarOverlay) DOM.sidebarOverlay.classList.add('active');
        if (DOM.mobileSettingsDropdown) DOM.mobileSettingsDropdown.classList.remove('active');
    }

    if (DOM.mobileMenuToggle) {
        DOM.mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (DOM.homeViewContainer && DOM.homeViewContainer.style.display !== 'none') {
                showCurriculumView();
            }
            const isOpen = DOM.sidebar && DOM.sidebar.classList.contains('mobile-open');
            if (isOpen) {
                closeMobileSidebar();
            } else {
                openMobileSidebar();
            }
        });
    }

    if (DOM.sidebarOverlay) {
        DOM.sidebarOverlay.addEventListener('click', () => {
            if (DOM.mobileSettingsDropdown) DOM.mobileSettingsDropdown.classList.remove('active');
            closeMobileSidebar();
        });
    }

    // Unified Mobile Settings Dropdown Toggle Listener
    if (DOM.mobileSettingsToggle && DOM.mobileSettingsDropdown) {
        DOM.mobileSettingsToggle.addEventListener('click', () => {
            DOM.mobileSettingsDropdown.classList.toggle('active');
            if (DOM.sidebarOverlay) {
                DOM.sidebarOverlay.classList.toggle('active', DOM.mobileSettingsDropdown.classList.contains('active'));
            }
            if (DOM.sidebar) DOM.sidebar.classList.remove('mobile-open');
        });

        if (DOM.closeMobileSettings) {
            DOM.closeMobileSettings.addEventListener('click', () => {
                DOM.mobileSettingsDropdown.classList.remove('active');
                if (DOM.sidebarOverlay) DOM.sidebarOverlay.classList.remove('active');
            });
        }
    }

    if (DOM.mobileGlobalSearch) {
        DOM.mobileGlobalSearch.addEventListener('input', (e) => {
            handleSearchInput(e.target.value, DOM.mobileGlobalSearch);
        });
    }

    function closeMobileSidebar() {
        if (DOM.sidebar && DOM.sidebarOverlay) {
            DOM.sidebar.classList.remove('mobile-open');
            DOM.sidebarOverlay.classList.remove('active');
        }
    }

    // Render Curriculum Navigation Tree preserving open/collapsed states
    function renderCurriculumTree() {
        DOM.curriculumTree.innerHTML = '';
        const activeTree = curriculumData[currentLanguage] || [];
        const activeLesson = allLessons[activeLessonIndex];

        activeTree.forEach((chapter) => {
            // Check if this chapter is a TEST BREAKLINE
            if (chapter.isTest) {
                const hasQuestions = chapter.testQuestions && chapter.testQuestions.length > 0;
                const gradeRec = storedTestGrades[chapter.chapterId];
                const dividerEl = document.createElement('div');
                const isSelectedTest = currentActiveTest && currentActiveTest.chapterId === chapter.chapterId;
                dividerEl.className = `test-breakline-divider ${isSelectedTest ? 'active' : ''}`;

                let badgeText = escapeHtml(getChapterTitleText(chapter));
                if (gradeRec) {
                    badgeText += ` — ${currentUiLang === 'ar' ? 'النتيجة' : 'Score'}: ${gradeRec.score}/${gradeRec.total} (${gradeRec.percentage}%)`;
                } else if (hasQuestions) {
                    badgeText += ' ▶';
                }

                dividerEl.title = hasQuestions ? "Click to open Test Assessment" : "Test Breakline Divider";
                dividerEl.innerHTML = `
                    <div class="test-divider-line"></div>
                    <div class="test-divider-badge">
                        <span>${gradeRec ? '🏆' : '📝'}</span> ${badgeText}
                    </div>
                    <div class="test-divider-line"></div>
                `;

                dividerEl.addEventListener('click', () => {
                    if (hasQuestions) {
                        closeMobileSidebar();
                        selectTestBreakline(chapter);
                    } else {
                        showToastNotice(
                            t('testBreaklineTitle'),
                            t('testBreaklineMsg'),
                            '📝'
                        );
                    }
                });

                DOM.curriculumTree.appendChild(dividerEl);
                return;
            }

            // Standard Lesson Chapters
            const visibleLessons = chapter.lessons.filter(lesson => {
                if (searchQuery === '') return true;
                const lesTitleAr = lesson.titleAr || (arabicContentMap[lesson.title] || '');
                const descAr = lesson.descriptionAr || '';
                const specAr = lesson.specNoteAr || '';
                const chTitleAr = getChapterTitleText(chapter);

                return lesson.title.toLowerCase().includes(searchQuery) ||
                    lesTitleAr.toLowerCase().includes(searchQuery) ||
                    chTitleAr.toLowerCase().includes(searchQuery) ||
                    chapter.chapterTitle.toLowerCase().includes(searchQuery) ||
                    (lesson.lessonNumber && lesson.lessonNumber.toLowerCase().includes(searchQuery)) ||
                    lesson.description.toLowerCase().includes(searchQuery) ||
                    descAr.toLowerCase().includes(searchQuery) ||
                    (lesson.spec && lesson.spec.toLowerCase().includes(searchQuery)) ||
                    specAr.toLowerCase().includes(searchQuery) ||
                    (lesson.code && lesson.code.toLowerCase().includes(searchQuery));
            });

            if (visibleLessons.length === 0) return;

            // Determine if this chapter should be collapsed or open
            const containsActiveLesson = activeLesson && activeLesson.chapterId === chapter.chapterId;
            let isCollapsed = false;

            if (searchQuery !== '') {
                // Auto-expand all matching chapter accordions during active search
                isCollapsed = false;
            } else if (containsActiveLesson) {
                isCollapsed = false;
                chapterCollapsedState[chapter.chapterId] = false;
            } else if (chapterCollapsedState[chapter.chapterId] !== undefined) {
                isCollapsed = chapterCollapsedState[chapter.chapterId];
            } else {
                // Default: Chapters 1, 2, 3 open by default; others collapsed
                isCollapsed = !(chapter.chapterNumber === 'Ch 1' || chapter.chapterNumber === 'Ch 2' || chapter.chapterNumber === 'Ch 3');
                chapterCollapsedState[chapter.chapterId] = isCollapsed;
            }

            const isLockedCh = chapter.isLocked;
            const groupEl = document.createElement('div');
            groupEl.className = `chapter-group ${isCollapsed ? 'collapsed' : ''}`;

            const titleBtn = document.createElement('button');
            titleBtn.className = `chapter-title-btn ${isLockedCh ? 'locked' : ''}`;
            titleBtn.innerHTML = `
                <div>
                    <span class="chapter-number">${chapter.chapterNumber}</span>
                    <span>${escapeHtml(getChapterTitleText(chapter))} ${isLockedCh ? '🔒' : ''}</span>
                </div>
                <span class="chapter-chevron">▼</span>
            `;

            titleBtn.addEventListener('click', () => {
                if (isLockedCh) {
                    showToastNotice(
                        t('chapterLockedTitle'),
                        t('chapterLockedMsg'),
                        '🔒'
                    );
                }
                const currentlyCollapsed = groupEl.classList.contains('collapsed');
                if (currentlyCollapsed) {
                    groupEl.classList.remove('collapsed');
                    chapterCollapsedState[chapter.chapterId] = false;
                } else {
                    groupEl.classList.add('collapsed');
                    chapterCollapsedState[chapter.chapterId] = true;
                }
            });

            const lessonsListEl = document.createElement('div');
            lessonsListEl.className = 'chapter-lessons-list';

            visibleLessons.forEach((lesson) => {
                const globalIdx = allLessons.findIndex(l => l.id === lesson.id);
                const isCompleted = completedLessons.includes(lesson.id);
                const isLockedLes = lesson.isLocked || isLockedCh;
                const isActive = !isLockedLes && globalIdx === activeLessonIndex;

                const lessonBtn = document.createElement('button');
                lessonBtn.className = `lesson-item-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isLockedLes ? 'locked' : ''}`;
                lessonBtn.innerHTML = `
                    <span class="lesson-status-icon">${isCompleted ? '✓' : (isLockedLes ? '🔒' : '')}</span>
                    <span class="tech-badge-dot ${lesson.category}"></span>
                    <span style="flex:1;">${lesson.lessonNumber} ${escapeHtml(getLessonTitleText(lesson))}</span>
                `;

                lessonBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (isLockedLes) {
                        showToastNotice(
                            'Chapter Locked',
                            'This chapter is locked. Content will be added by the instructor.',
                            '🔒'
                        );
                        return;
                    }
                    closeMobileSidebar();
                    currentActiveTest = null;
                    chapterCollapsedState[chapter.chapterId] = false;
                    selectLesson(globalIdx);
                });

                lessonsListEl.appendChild(lessonBtn);
            });

            groupEl.appendChild(titleBtn);
            groupEl.appendChild(lessonsListEl);
            DOM.curriculumTree.appendChild(groupEl);
        });
    }

    // Select Test Breakline Divider
    function selectTestBreakline(chapter) {
        currentActiveTest = chapter;
        const testLesson = chapter.lessons[0] || {};
        const isAr = (currentUiLang === 'ar');
        const chTitleText = getChapterTitleText(chapter);

        DOM.breadcrumbChapter.innerText = isAr ? 'تقييم المعرفة' : 'Knowledge Assessment';
        DOM.breadcrumbLesson.innerText = chTitleText;
        DOM.docTitle.innerText = `📝 ${chTitleText}`;

        DOM.techTag.innerText = 'TEST';
        DOM.techTag.className = 'tech-tag js';
        DOM.readTime.innerText = isAr ? 'اختبار معرفة' : 'Knowledge Quiz';
        DOM.specName.innerText = isAr ? 'تقييم الفصل' : 'Chapter Assessment';

        DOM.docDescription.innerText = (isAr && testLesson.descriptionAr) ? testLesson.descriptionAr : (testLesson.description || 'Test your understanding of recent chapter concepts.');
        DOM.specNoteText.innerText = (isAr && testLesson.specNoteAr) ? testLesson.specNoteAr : (testLesson.specNote || 'Answer all questions to check your mastery.');
        DOM.codeLangLabel.innerText = isAr ? 'تطبيق' : 'PRACTICE';
        DOM.codeDisplay.innerText = testLesson.code || '// Quiz Code';

        DOM.markCompletedBtn.style.display = 'none';
        DOM.jsToolsCard.style.display = 'none';

        renderQuizView(chapter);
        renderCurriculumTree();
    }

    // Render Test Grade Summary Banner
    function renderGradeBanner(chapter, gradeRecord) {
        let existingBanner = document.getElementById(`grade-banner-${chapter.chapterId}`);
        if (existingBanner) {
            existingBanner.remove();
        }

        const isAr = (currentUiLang === 'ar');
        const isPassed = gradeRecord.percentage >= 70;
        const banner = document.createElement('div');
        banner.id = `grade-banner-${chapter.chapterId}`;
        banner.className = `test-grade-banner ${isPassed ? 'passed' : 'failed'}`;

        banner.innerHTML = `
            <div class="grade-banner-header">
                <div class="grade-title-section">
                    <span class="grade-icon">${isPassed ? '🏆' : '📊'}</span>
                    <div>
                        <h3 class="grade-headline">${isPassed ? t('gradePassedTitle') : t('gradeFailedTitle')}</h3>
                        <div class="grade-subtext">${escapeHtml(getChapterTitleText(chapter))} • ${isAr ? 'تم تسجيل النتيجة في' : 'Score recorded on'} ${gradeRecord.date}</div>
                    </div>
                </div>
                <div class="grade-score-pill">${gradeRecord.percentage}%</div>
            </div>

            <div class="grade-metrics-grid">
                <div class="grade-metric-box">
                    <span class="metric-label">${t('questionsCorrect')}</span>
                    <span class="metric-val ${isPassed ? 'text-success' : 'text-warning'}">${gradeRecord.score} / ${gradeRecord.total}</span>
                </div>
                <div class="grade-metric-box">
                    <span class="metric-label">${t('passRate')}</span>
                    <span class="metric-val">${gradeRecord.percentage}%</span>
                </div>
                <div class="grade-metric-box">
                    <span class="metric-label">${isAr ? 'حالة التقييم' : 'Grade Status'}</span>
                    <span class="metric-val ${isPassed ? 'text-success' : 'text-warning'}">${isPassed ? (isAr ? 'اجتياز' : 'PASS') : (isAr ? 'إعادة المحاولة' : 'RETRY NEEDED')}</span>
                </div>
            </div>
        `;

        DOM.quizBody.prepend(banner);
        banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Render Quiz View with Code Editor & MCQ Support
    function renderQuizView(chapter) {
        const questions = chapter.testQuestions || [];
        if (questions.length === 0) {
            DOM.quizContainerCard.style.display = 'none';
            return;
        }

        const isAr = (currentUiLang === 'ar');
        DOM.quizContainerCard.style.display = 'block';
        DOM.quizBody.innerHTML = '';

        // If previously taken, show stored Grade Banner
        if (storedTestGrades[chapter.chapterId]) {
            renderGradeBanner(chapter, storedTestGrades[chapter.chapterId]);
        }

        questions.forEach((q, qIdx) => {
            const qBox = document.createElement('div');
            qBox.className = 'quiz-question-card';
            qBox.style.marginBottom = '24px';
            qBox.style.padding = '18px';
            qBox.style.backgroundColor = 'var(--bg-main)';
            qBox.style.borderRadius = 'var(--radius-md)';
            qBox.style.border = '1px solid var(--border-color)';

            const qTitle = document.createElement('div');
            qTitle.style.fontWeight = '600';
            qTitle.style.marginBottom = '12px';
            qTitle.style.fontSize = '0.95rem';
            qTitle.style.whiteSpace = 'pre-line';
            qTitle.innerText = (isAr && q.questionAr) ? q.questionAr : q.question;

            qBox.appendChild(qTitle);

            // Optional image for the question (e.g. flowcharts)
            if (q.imageUrl) {
                const qImg = document.createElement('img');
                qImg.src = q.imageUrl;
                qImg.alt = q.imageAlt || 'Question diagram';
                qImg.style.cssText = 'display:block;max-width:100%;margin:12px 0;border-radius:var(--radius-sm);border:1px solid var(--border-color);';
                qBox.appendChild(qImg);
            }

            if (q.type === 'code') {
                // Code Editor / Essay Question
                const editorBox = document.createElement('div');
                editorBox.className = 'code-quiz-wrapper';
                editorBox.style.marginBottom = '12px';
                editorBox.innerHTML = `
                    <div class="code-header" style="border-radius: var(--radius-sm) var(--radius-sm) 0 0;">
                        <span class="code-lang-label">👨‍💻 ${t('codeAnswerEditor')}</span>
                        <button class="code-btn reset-code-btn" type="button">${t('resetCode')}</button>
                    </div>
                    <textarea class="sandbox-textarea quiz-code-input" id="quiz_code_${qIdx}" spellcheck="false" style="height: 100px; margin-bottom:0; border-radius: 0 0 var(--radius-sm) var(--radius-sm);">${escapeHtml(q.initialCode || '')}</textarea>
                `;

                editorBox.querySelector('.reset-code-btn').addEventListener('click', () => {
                    const textarea = document.getElementById(`quiz_code_${qIdx}`);
                    if (textarea) textarea.value = q.initialCode || '';
                });

                qBox.appendChild(editorBox);
            } else {
                // Multiple Choice Question (MCQ)
                const optionsContainer = document.createElement('div');
                optionsContainer.style.display = 'flex';
                optionsContainer.style.flexDirection = 'column';
                optionsContainer.style.gap = '8px';

                q.options.forEach((opt, oIdx) => {
                    const label = document.createElement('label');
                    label.style.display = 'flex';
                    label.style.alignItems = 'center';
                    label.style.gap = '10px';
                    label.style.padding = '8px 12px';
                    label.style.borderRadius = 'var(--radius-sm)';
                    label.style.border = '1px solid var(--border-color)';
                    label.style.backgroundColor = 'var(--bg-surface)';
                    label.style.cursor = 'pointer';
                    label.style.fontSize = '0.875rem';
                    label.style.fontFamily = 'var(--font-mono)';

                    const optDisplay = (isAr && q.optionsAr && q.optionsAr[oIdx]) ? q.optionsAr[oIdx] : opt;

                    label.innerHTML = `
                        <input type="radio" name="q_${qIdx}" value="${oIdx}">
                        <span>${escapeHtml(optDisplay)}</span>
                    `;
                    optionsContainer.appendChild(label);
                });

                qBox.appendChild(optionsContainer);
            }

            const feedbackEl = document.createElement('div');
            feedbackEl.id = `feedback_${qIdx}`;
            feedbackEl.style.marginTop = '12px';
            feedbackEl.style.fontSize = '0.85rem';
            feedbackEl.style.padding = '10px 14px';
            feedbackEl.style.borderRadius = 'var(--radius-sm)';
            feedbackEl.style.display = 'none';
            feedbackEl.style.whiteSpace = 'pre-line';

            qBox.appendChild(feedbackEl);
            DOM.quizBody.appendChild(qBox);
        });

        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary';
        submitBtn.style.marginTop = '10px';
        submitBtn.innerText = t('submitQuiz');
        submitBtn.addEventListener('click', () => {
            // Pre-validation loop: Ensure ALL questions are answered before submitting
            let unansweredQuestions = [];

            questions.forEach((q, qIdx) => {
                if (q.type === 'code') {
                    const userCode = (document.getElementById(`quiz_code_${qIdx}`).value || '').trim();
                    const isBlank = userCode.length === 0 ||
                        userCode === '// Write your code below:' ||
                        userCode === '// Write your code here';
                    if (isBlank) {
                        unansweredQuestions.push(qIdx + 1);
                    }
                } else {
                    const selected = document.querySelector(`input[name="q_${qIdx}"]:checked`);
                    if (!selected) {
                        unansweredQuestions.push(qIdx + 1);
                    }
                }
            });

            if (unansweredQuestions.length > 0) {
                const questionListStr = unansweredQuestions.map(n => `Q${n}`).join(', ');
                showToastNotice(
                    t('incompleteQuizTitle'),
                    `${t('incompleteQuizMsg')} ${questionListStr}`,
                    '⚠️'
                );

                // Highlight and scroll to the first unanswered question
                const firstUnansweredIdx = unansweredQuestions[0] - 1;
                const questionCards = document.querySelectorAll('.quiz-question-card');
                const targetCard = questionCards[firstUnansweredIdx];
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetCard.style.borderColor = '#f87171';
                    setTimeout(() => {
                        targetCard.style.borderColor = 'var(--border-color)';
                    }, 2500);
                }
                return; // STOP execution completely! Do NOT show correct answers!
            }

            // All questions answered: Evaluate answers & calculate final grade
            let totalCorrect = 0;
            const totalQuestions = questions.length;

            questions.forEach((q, qIdx) => {
                const feedbackEl = document.getElementById(`feedback_${qIdx}`);
                feedbackEl.style.display = 'block';

                let isSuccess = false;
                const explanationText = (isAr && q.explanationAr) ? q.explanationAr : q.explanation;

                if (q.type === 'code') {
                    const userCode = (document.getElementById(`quiz_code_${qIdx}`).value || '').trim();
                    let logs = [];
                    const origLog = console.log;
                    console.log = function (...args) {
                        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
                    };

                    let executionError = null;

                    try {
                        eval(`(function(){\n${userCode}\n})()`);
                        const output = logs.join('\n').trim();
                        if (q.expectedOutput) {
                            isSuccess = (output === q.expectedOutput.trim());
                        } else {
                            isSuccess = userCode.length > 0;
                        }
                    } catch (err) {
                        executionError = err.message;
                        isSuccess = false;
                    } finally {
                        console.log = origLog;
                    }

                    if (isSuccess) {
                        totalCorrect++;
                        feedbackEl.style.backgroundColor = 'var(--success-bg)';
                        feedbackEl.style.color = 'var(--success-color)';
                        feedbackEl.style.border = '1px solid rgba(5, 150, 105, 0.3)';
                        feedbackEl.innerText = `${t('correctOutput')} "${logs.join('\n')}"\n${explanationText}`;
                    } else {
                        feedbackEl.style.backgroundColor = 'rgba(239, 68, 68, 0.12)';
                        feedbackEl.style.color = '#f87171';
                        feedbackEl.style.border = '1px solid rgba(239, 68, 68, 0.3)';
                        let errText = executionError ? `${isAr ? 'خطأ أثناء التنفيذ:' : 'Runtime Error:'} ${executionError}` : `${isAr ? 'مخرجات وحدة التحكم:' : 'Console Output:'} "${logs.join('\n') || (isAr ? '(لا توجد مخرجات)' : '(no output)')}"`;
                        feedbackEl.innerText = `✗ ${errText}\n${t('expectedOutput')} "${q.expectedOutput}"\n${t('expectedSolution')}\n${q.expectedAnswer}\n${explanationText}`;
                    }
                } else {
                    const selected = document.querySelector(`input[name="q_${qIdx}"]:checked`);
                    if (selected && parseInt(selected.value, 10) === q.correctIndex) {
                        isSuccess = true;
                        totalCorrect++;
                        feedbackEl.style.backgroundColor = 'var(--success-bg)';
                        feedbackEl.style.color = 'var(--success-color)';
                        feedbackEl.style.border = '1px solid rgba(5, 150, 105, 0.3)';
                        feedbackEl.innerText = `✓ ${isAr ? 'إجابة صحيحة!' : 'Correct!'} ${explanationText}`;
                    } else {
                        feedbackEl.style.backgroundColor = 'rgba(239, 68, 68, 0.12)';
                        feedbackEl.style.color = '#f87171';
                        feedbackEl.style.border = '1px solid rgba(239, 68, 68, 0.3)';
                        const correctOpt = (isAr && q.optionsAr && q.optionsAr[q.correctIndex]) ? q.optionsAr[q.correctIndex] : q.options[q.correctIndex];
                        feedbackEl.innerText = `${t('incorrectOutput')} ${isAr ? 'الإجابة الصحيحة:' : 'Correct answer:'} ${correctOpt}\n${explanationText}`;
                    }
                }
            });

            // Calculate Grade Record (No persistence)
            const percentage = Math.round((totalCorrect / totalQuestions) * 100);
            const gradeRecord = {
                score: totalCorrect,
                total: totalQuestions,
                percentage: percentage,
                date: new Date().toLocaleDateString()
            };

            renderGradeBanner(chapter, gradeRecord);
        });

        // Add Show Answers / Solutions Button
        const showAnswersBtn = document.createElement('button');
        showAnswersBtn.className = 'code-btn';
        showAnswersBtn.type = 'button';
        showAnswersBtn.style.padding = '8px 16px';
        showAnswersBtn.style.fontSize = '0.875rem';
        showAnswersBtn.style.backgroundColor = 'var(--bg-main)';
        showAnswersBtn.innerText = '💡 ' + t('showAnswers');

        let answersVisible = false;

        showAnswersBtn.addEventListener('click', () => {
            answersVisible = !answersVisible;
            showAnswersBtn.innerText = answersVisible ? t('hideAnswers') : ('💡 ' + t('showAnswers'));

            questions.forEach((q, qIdx) => {
                const feedbackEl = document.getElementById(`feedback_${qIdx}`);
                if (!feedbackEl) return;

                if (answersVisible) {
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.backgroundColor = 'var(--bg-surface)';
                    feedbackEl.style.color = 'var(--text-primary)';
                    feedbackEl.style.border = '1px solid var(--accent-primary)';

                    const explanationText = (isAr && q.explanationAr) ? q.explanationAr : q.explanation;

                    if (q.type === 'code') {
                        feedbackEl.innerText = `${isAr ? '💡 الحل والإجابة النموذجية:' : '💡 Solution & Model Answer:'}\n\n${isAr ? 'الكود المتوقع:' : 'Expected Code:'}\n${q.expectedAnswer}\n\n${t('expectedOutput')} "${q.expectedOutput}"\n\n${isAr ? 'الشرح:' : 'Explanation:'} ${explanationText}`;
                    } else {
                        const correctOpt = (isAr && q.optionsAr && q.optionsAr[q.correctIndex]) ? q.optionsAr[q.correctIndex] : q.options[q.correctIndex];
                        feedbackEl.innerText = `${isAr ? '💡 الإجابة الصحيحة: الخيار' : '💡 Correct Answer: Option'} ${q.correctIndex + 1} (${correctOpt})\n\n${isAr ? 'الشرح:' : 'Explanation:'} ${explanationText}`;
                    }
                } else {
                    feedbackEl.style.display = 'none';
                }
            });
        });

        const btnRow = document.createElement('div');
        btnRow.style.display = 'flex';
        btnRow.style.alignItems = 'center';
        btnRow.style.flexWrap = 'wrap';
        btnRow.style.gap = '12px';
        btnRow.style.marginTop = '16px';

        btnRow.appendChild(submitBtn);
        btnRow.appendChild(showAnswersBtn);
        DOM.quizBody.appendChild(btnRow);
    }

    // Select Active Lesson
    function selectLesson(index) {
        if (index < 0 || index >= allLessons.length) return;
        activeLessonIndex = index;
        currentActiveTest = null;
        const lesson = allLessons[index];

        // Keep chapter expanded
        if (lesson.chapterId) {
            chapterCollapsedState[lesson.chapterId] = false;
        }

        DOM.quizContainerCard.style.display = 'none';

        const chTitleText = getChapterTitleText({ chapterTitle: lesson.chapterTitle });
        const lesTitleText = getLessonTitleText(lesson);

        DOM.breadcrumbChapter.innerText = `${lesson.chapterNumber}: ${chTitleText}`;
        DOM.breadcrumbLesson.innerText = `${currentUiLang === 'ar' ? 'الدرس' : 'Lesson'} ${lesson.lessonNumber}`;
        DOM.docTitle.innerText = lesTitleText;

        DOM.techTag.innerText = lesson.category.toUpperCase();
        DOM.techTag.className = `tech-tag ${lesson.category}`;
        DOM.readTime.innerText = currentUiLang === 'ar' ? `${lesson.readTime.split(' ')[0]} ${t('readTimeSuffix')}` : lesson.readTime;
        DOM.specName.innerText = lesson.spec;

        DOM.docDescription.innerText = (currentUiLang === 'ar' && lesson.descriptionAr) ? lesson.descriptionAr : lesson.description;
        DOM.specNoteText.innerText = (currentUiLang === 'ar' && lesson.specNoteAr) ? lesson.specNoteAr : lesson.specNote;
        DOM.codeLangLabel.innerText = lesson.category.toUpperCase();

        // Show or hide lesson diagram image
        if (DOM.lessonDiagramWrapper && DOM.lessonDiagramImg) {
            if (lesson.imageUrl) {
                DOM.lessonDiagramImg.src = lesson.imageUrl;
                DOM.lessonDiagramImg.alt = lesson.imageAlt || 'Lesson Diagram';
                DOM.lessonDiagramWrapper.style.display = 'block';
            } else {
                DOM.lessonDiagramWrapper.style.display = 'none';
                DOM.lessonDiagramImg.src = '';
            }
        }

        const codeWrapper = document.querySelector('.code-block-wrapper');
        if (codeWrapper) {
            if (lesson.code && lesson.code.trim() !== '') {
                codeWrapper.style.display = 'block';
                DOM.codeDisplay.innerText = lesson.code;
            } else {
                codeWrapper.style.display = 'none';
            }
        }

        const isCompleted = completedLessons.includes(lesson.id);
        updateMarkCompletedButtonState(isCompleted);

        if (lesson.category === 'js') {
            DOM.jsToolsCard.style.display = 'block';
        } else {
            DOM.jsToolsCard.style.display = 'none';
        }

        const prevSub = document.querySelector('#prev-lesson-btn .nav-link-sub');
        if (prevSub) prevSub.innerText = t('prevLessonSub');
        const nextSub = document.querySelector('#next-lesson-btn .nav-link-sub');
        if (nextSub) nextSub.innerText = t('nextLessonSub');

        if (index > 0) {
            DOM.prevLessonBtn.style.visibility = 'visible';
            const prev = allLessons[index - 1];
            DOM.prevLessonTitle.innerText = `${prev.lessonNumber} ${getLessonTitleText(prev)}`;
        } else {
            DOM.prevLessonBtn.style.visibility = 'hidden';
        }

        if (index < allLessons.length - 1) {
            DOM.nextLessonBtn.style.visibility = 'visible';
            const next = allLessons[index + 1];
            DOM.nextLessonTitle.innerText = `${next.lessonNumber} ${getLessonTitleText(next)}`;
        } else {
            DOM.nextLessonBtn.style.visibility = 'hidden';
        }

        renderCurriculumTree();
    }

    function updateMarkCompletedButtonState(isCompleted) {
        if (isCompleted) {
            DOM.markCompletedBtn.classList.add('is-completed');
            DOM.markCompletedBtn.innerHTML = `<span>✓</span> <span id="mark-completed-text">${t('completed')}</span>`;
        } else {
            DOM.markCompletedBtn.classList.remove('is-completed');
            DOM.markCompletedBtn.innerHTML = `<span>○</span> <span id="mark-completed-text">${t('markCompleted')}</span>`;
        }
    }

    DOM.markCompletedBtn.addEventListener('click', () => {
        if (currentActiveTest) return;
        const activeLesson = allLessons[activeLessonIndex];
        const existingIdx = completedLessons.indexOf(activeLesson.id);

        if (existingIdx > -1) {
            completedLessons.splice(existingIdx, 1);
            updateMarkCompletedButtonState(false);
        } else {
            completedLessons.push(activeLesson.id);
            updateMarkCompletedButtonState(true);
        }

        localStorage.setItem('sprix_completed_lessons', JSON.stringify(completedLessons));
        renderCurriculumTree();
    });

    // Language Tab Switchers
    DOM.langTabJs.addEventListener('click', () => {
        currentLanguage = 'javascript';
        DOM.langTabJs.classList.add('active');
        DOM.langTabPy.classList.remove('active');
        chapterCollapsedState = {};
        updateFlattenedLessons();
        renderCurriculumTree();
        selectLesson(0);
    });

    DOM.langTabPy.addEventListener('click', () => {
        currentLanguage = 'python';
        DOM.langTabPy.classList.add('active');
        DOM.langTabJs.classList.remove('active');
        chapterCollapsedState = {};
        updateFlattenedLessons();
        renderCurriculumTree();
        selectLesson(0);
    });

    // Code Copying
    DOM.copyCodeBtn.addEventListener('click', () => {
        const textToCopy = DOM.codeDisplay.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            DOM.copyCodeBtn.innerHTML = `<span style="color:var(--success-color)">✓</span> Copied!`;
            setTimeout(() => {
                DOM.copyCodeBtn.innerHTML = `<span>📋</span> Copy Code`;
            }, 2000);
        });
    });

    // Navigation Buttons
    DOM.prevLessonBtn.addEventListener('click', (e) => {
        e.preventDefault();
        selectLesson(activeLessonIndex - 1);
    });

    DOM.nextLessonBtn.addEventListener('click', (e) => {
        e.preventDefault();
        selectLesson(activeLessonIndex + 1);
    });

    // Global Search
    DOM.globalSearch.addEventListener('input', (e) => {
        handleSearchInput(e.target.value, DOM.globalSearch);
    });

    // Keyboard Shortcut (Ctrl+K)
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            DOM.globalSearch.focus();
        }
    });

    // Theme Toggle Functionality (Desktop & Mobile)
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        if (DOM.themeIcon) DOM.themeIcon.innerText = isLight ? '☀️' : '🌙';
        if (DOM.themeText) DOM.themeText.innerText = isLight ? t('lightMode') : t('darkMode');
        if (DOM.mobileThemeIcon) DOM.mobileThemeIcon.innerText = isLight ? '☀️' : '🌙';
        if (DOM.mobileThemeText) DOM.mobileThemeText.innerText = isLight ? t('lightMode') : t('darkMode');
    }

    if (DOM.themeToggle) DOM.themeToggle.addEventListener('click', toggleTheme);
    if (DOM.mobileThemeToggle) DOM.mobileThemeToggle.addEventListener('click', toggleTheme);

    // Language Toggle & Application Functionality
    function applyLanguage(lang) {
        currentUiLang = lang;
        localStorage.setItem('sprix_ui_lang', lang);

        const isRtl = (lang === 'ar');
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        document.body.classList.toggle('rtl', isRtl);

        // Update Header & Settings Labels
        if (DOM.langText) DOM.langText.innerText = t('langBtnText');
        if (DOM.mobileLangText) DOM.mobileLangText.innerText = t('langBtnText');

        if (DOM.globalSearch) DOM.globalSearch.placeholder = t('searchPlaceholder');
        if (DOM.mobileGlobalSearch) DOM.mobileGlobalSearch.placeholder = t('searchMobilePlaceholder');

        const brandName = document.querySelector('.brand-name');
        if (brandName) brandName.innerText = t('brandName');

        if (DOM.navBtnHome) DOM.navBtnHome.innerHTML = `<span>🏠</span><span id="nav-home-text"> ${t('navHome')}</span>`;
        if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.innerHTML = `<span>📚</span><span id="nav-curriculum-text"> ${t('navCurriculum')}</span>`;

        const navSandboxText = document.getElementById('nav-sandbox-text');
        if (navSandboxText) navSandboxText.innerText = t('navSandbox');

        // Standalone Sandbox View labels
        const sandboxViewHeading = document.getElementById('sandbox-view-heading');
        if (sandboxViewHeading) sandboxViewHeading.innerText = t('sandboxViewHeading');
        const sandboxViewDesc = document.getElementById('sandbox-view-desc');
        if (sandboxViewDesc) sandboxViewDesc.innerText = t('sandboxViewDesc');
        const sandboxViewEditorLabel = document.getElementById('sandbox-view-editor-label');
        if (sandboxViewEditorLabel) sandboxViewEditorLabel.innerText = t('sandboxViewEditorLabel');
        const sandboxViewConsoleLabel = document.getElementById('sandbox-view-console-label');
        if (sandboxViewConsoleLabel) sandboxViewConsoleLabel.innerText = t('sandboxViewConsoleLabel');

        // Sandbox toggle text update
        setSandboxExpanded(sandboxExpanded);

        // Home View elements
        const homeHeroTitle = document.getElementById('home-hero-title');
        if (homeHeroTitle) homeHeroTitle.innerText = t('heroTitle');

        const homeHeroSubtitle = document.getElementById('home-hero-subtitle');
        if (homeHeroSubtitle) homeHeroSubtitle.innerText = t('heroSubtitle');

        const enterCurriculumText = document.getElementById('enter-curriculum-text');
        if (enterCurriculumText) enterCurriculumText.innerText = t('enterCurriculum');

        const heroJsText = document.getElementById('hero-js-text');
        if (heroJsText) heroJsText.innerText = t('jsTrackBtn');

        const heroPyText = document.getElementById('hero-py-text');
        if (heroPyText) heroPyText.innerText = t('pyTrackBtn');

        const feat1Title = document.getElementById('feat1-title');
        if (feat1Title) feat1Title.innerText = t('feat1Title');
        const feat1Desc = document.getElementById('feat1-desc');
        if (feat1Desc) feat1Desc.innerText = t('feat1Desc');

        const feat2Title = document.getElementById('feat2-title');
        if (feat2Title) feat2Title.innerText = t('feat2Title');
        const feat2Desc = document.getElementById('feat2-desc');
        if (feat2Desc) feat2Desc.innerText = t('feat2Desc');

        const feat3Title = document.getElementById('feat3-title');
        if (feat3Title) feat3Title.innerText = t('feat3Title');
        const feat3Desc = document.getElementById('feat3-desc');
        if (feat3Desc) feat3Desc.innerText = t('feat3Desc');

        const feat4Title = document.getElementById('feat4-title');
        if (feat4Title) feat4Title.innerText = t('feat4Title');
        const feat4Desc = document.getElementById('feat4-desc');
        if (feat4Desc) feat4Desc.innerText = t('feat4Desc');

        // Sidebar Header
        const sidebarSelectTitle = document.getElementById('sidebar-select-title');
        if (sidebarSelectTitle) sidebarSelectTitle.innerText = t('selectTrack');

        const sidebarExpandText = document.getElementById('sidebar-expand-text');
        if (sidebarExpandText) sidebarExpandText.innerText = t('sidebarTitle');

        if (DOM.langTabJs) DOM.langTabJs.innerText = t('jsTrackBtn');
        if (DOM.langTabPy) DOM.langTabPy.innerText = t('pyTrackBtn');

        // Doc Section
        const docSectionH2 = document.getElementById('doc-section-h2');
        if (docSectionH2) docSectionH2.innerText = t('explanationH2');

        const specNoteLabel = document.getElementById('spec-note-label');
        if (specNoteLabel) specNoteLabel.innerText = t('specNoteLabel');

        const copyCodeText = document.getElementById('copy-code-text');
        if (copyCodeText) copyCodeText.innerText = t('copyCode');

        // Sandbox & Quiz
        const quizCardTitle = document.getElementById('quiz-card-title');
        if (quizCardTitle) quizCardTitle.innerText = t('quizTitle');

        const quizCardSubtitle = document.getElementById('quiz-card-subtitle');
        if (quizCardSubtitle) quizCardSubtitle.innerText = t('quizSubtitle');

        const sandboxCardTitle = document.getElementById('sandbox-card-title');
        if (sandboxCardTitle) sandboxCardTitle.innerText = t('sandboxTitle');

        const sandboxCardSubtitle = document.getElementById('sandbox-card-subtitle');
        if (sandboxCardSubtitle) sandboxCardSubtitle.innerText = t('sandboxSubtitle');

        if (DOM.runJsBtn) DOM.runJsBtn.innerText = t('runScript');

        const execConsoleLabel = document.getElementById('exec-console-label');
        if (execConsoleLabel) execConsoleLabel.innerText = t('execConsole');

        const mobileSettingsTitleText = document.getElementById('mobile-settings-title-text');
        if (mobileSettingsTitleText) mobileSettingsTitleText.innerText = isRtl ? 'الإعدادات السريعة' : 'Quick Settings';

        const mobileSearchLabel = document.getElementById('mobile-search-label');
        if (mobileSearchLabel) mobileSearchLabel.innerText = isRtl ? 'البحث في الدروس' : 'Search Lessons';

        const mobileSandboxNavLabel = document.getElementById('mobile-sandbox-nav-label');
        if (mobileSandboxNavLabel) mobileSandboxNavLabel.innerText = t('mobileSandboxNavLabel');

        const mobileSandboxNavText = document.getElementById('mobile-sandbox-nav-text');
        if (mobileSandboxNavText) mobileSandboxNavText.innerText = t('mobileSandboxNavText');

        // Re-render components
        updateFlattenedLessons();
        renderCurriculumTree();
        if (currentActiveTest) {
            selectTestBreakline(currentActiveTest);
        } else if (allLessons[activeLessonIndex]) {
            selectLesson(activeLessonIndex);
        }
    }

    function toggleLanguage() {
        const nextLang = (currentUiLang === 'en' ? 'ar' : 'en');
        applyLanguage(nextLang);
    }

    if (DOM.langToggle) DOM.langToggle.addEventListener('click', toggleLanguage);
    if (DOM.mobileLangToggle) DOM.mobileLangToggle.addEventListener('click', toggleLanguage);

    // Sandbox Runner
    DOM.runJsBtn.addEventListener('click', () => {
        const scriptCode = DOM.jsInput.value;
        DOM.jsConsoleOutput.innerHTML = '';

        const originalLog = console.log;
        let logs = [];

        console.log = function (...args) {
            logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
        };

        try {
            const result = eval(`(function(){ ${scriptCode} })()`);

            if (logs.length > 0) {
                logs.forEach(msg => {
                    const line = document.createElement('div');
                    line.className = 'console-entry log';
                    line.innerText = `> ${msg}`;
                    DOM.jsConsoleOutput.appendChild(line);
                });
            } else if (result !== undefined) {
                const line = document.createElement('div');
                line.className = 'console-entry output';
                line.innerText = `Returned: ${result}`;
                DOM.jsConsoleOutput.appendChild(line);
            } else {
                const line = document.createElement('div');
                line.className = 'console-entry output';
                line.innerText = '> Executed cleanly with no console logs.';
                DOM.jsConsoleOutput.appendChild(line);
            }
        } catch (err) {
            const line = document.createElement('div');
            line.className = 'console-entry error';
            line.innerText = `Error: ${err.message}`;
            DOM.jsConsoleOutput.appendChild(line);
        } finally {
            console.log = originalLog;
        }
    });

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Sandbox In-Lesson Toggle (Hide / Show)
    let sandboxExpanded = true;

    function setSandboxExpanded(expanded) {
        sandboxExpanded = expanded;
        if (DOM.sandboxCollapsible) {
            DOM.sandboxCollapsible.style.display = expanded ? 'block' : 'none';
        }
        if (DOM.sandboxToggleBtn) {
            DOM.sandboxToggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            DOM.sandboxToggleBtn.title = expanded ? t('sandboxHide') : t('sandboxShow');
        }
        if (DOM.sandboxToggleIcon) {
            DOM.sandboxToggleIcon.innerText = expanded ? '▲' : '▼';
        }
        if (DOM.sandboxToggleText) {
            DOM.sandboxToggleText.innerText = expanded ? t('sandboxHide') : t('sandboxShow');
        }
    }

    if (DOM.sandboxToggleBtn) {
        DOM.sandboxToggleBtn.addEventListener('click', () => {
            setSandboxExpanded(!sandboxExpanded);
        });
    }

    // Standalone Sandbox View Runner
    function runSandboxViewCode() {
        if (!DOM.sandboxViewInput || !DOM.sandboxViewOutput) return;
        const scriptCode = DOM.sandboxViewInput.value;
        DOM.sandboxViewOutput.innerHTML = '';

        const originalLog = console.log;
        let logs = [];

        console.log = function (...args) {
            logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
        };

        try {
            const result = eval(`(function(){ ${scriptCode} })()`);

            if (logs.length > 0) {
                logs.forEach(msg => {
                    const line = document.createElement('div');
                    line.className = 'console-entry log';
                    line.innerText = `> ${msg}`;
                    DOM.sandboxViewOutput.appendChild(line);
                });
            } else if (result !== undefined) {
                const line = document.createElement('div');
                line.className = 'console-entry output';
                line.innerText = `Returned: ${result}`;
                DOM.sandboxViewOutput.appendChild(line);
            } else {
                const line = document.createElement('div');
                line.className = 'console-entry output';
                line.innerText = '> Executed cleanly with no console logs.';
                DOM.sandboxViewOutput.appendChild(line);
            }
        } catch (err) {
            const line = document.createElement('div');
            line.className = 'console-entry error';
            line.innerText = `Error: ${err.message}`;
            DOM.sandboxViewOutput.appendChild(line);
        } finally {
            console.log = originalLog;
        }
    }

    if (DOM.sandboxViewRunBtn) DOM.sandboxViewRunBtn.addEventListener('click', runSandboxViewCode);
    if (DOM.sandboxViewClearBtn) {
        DOM.sandboxViewClearBtn.addEventListener('click', () => {
            if (DOM.sandboxViewOutput) DOM.sandboxViewOutput.innerHTML = '<div class="console-entry output">&gt; Console cleared.</div>';
        });
    }

    // View Switching Functions
    function _hideAllViews() {
        if (DOM.homeViewContainer) DOM.homeViewContainer.style.display = 'none';
        if (DOM.workspaceLayout) DOM.workspaceLayout.style.display = 'none';
        if (DOM.sandboxViewContainer) DOM.sandboxViewContainer.style.display = 'none';
        [DOM.navBtnHome, DOM.navBtnCurriculum, DOM.navBtnSandbox].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
    }

    function showHomeView() {
        _hideAllViews();
        if (DOM.homeViewContainer) DOM.homeViewContainer.style.display = 'block';
        if (DOM.navBtnHome) DOM.navBtnHome.classList.add('active');
    }

    function showSandboxView() {
        _hideAllViews();
        if (DOM.sandboxViewContainer) DOM.sandboxViewContainer.style.display = 'block';
        if (DOM.navBtnSandbox) DOM.navBtnSandbox.classList.add('active');
        // Close mobile sidebar and settings if open
        if (DOM.sidebar) DOM.sidebar.classList.remove('mobile-open');
        if (DOM.sidebarOverlay) DOM.sidebarOverlay.classList.remove('active');
        if (DOM.mobileSettingsDropdown) DOM.mobileSettingsDropdown.classList.remove('active');
    }

    function showCurriculumView(track) {
        if (track && (track === 'javascript' || track === 'python')) {
            currentLanguage = track;
            if (track === 'javascript') {
                if (DOM.langTabJs) DOM.langTabJs.classList.add('active');
                if (DOM.langTabPy) DOM.langTabPy.classList.remove('active');
            } else {
                if (DOM.langTabPy) DOM.langTabPy.classList.add('active');
                if (DOM.langTabJs) DOM.langTabJs.classList.remove('active');
            }
            chapterCollapsedState = {};
            updateFlattenedLessons();
            renderCurriculumTree();
        }

        _hideAllViews();
        if (DOM.workspaceLayout) DOM.workspaceLayout.style.display = 'flex';
        if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.classList.add('active');
    }

    // Sidebar Collapse / Expand Toggle (Desktop/Laptop Only)
    function toggleSidebar(collapse) {
        if (!DOM.sidebar) return;
        const isCollapsed = DOM.sidebar.classList.contains('desktop-collapsed');
        const shouldCollapse = collapse !== undefined ? collapse : !isCollapsed;

        if (shouldCollapse) {
            DOM.sidebar.classList.add('desktop-collapsed');
            if (DOM.sidebarExpandBtn && window.innerWidth > 768) {
                DOM.sidebarExpandBtn.style.display = 'inline-flex';
            }
        } else {
            DOM.sidebar.classList.remove('desktop-collapsed');
            if (DOM.sidebarExpandBtn) DOM.sidebarExpandBtn.style.display = 'none';
        }
    }

    if (DOM.sidebarCollapseBtn) {
        DOM.sidebarCollapseBtn.addEventListener('click', () => {
            // On mobile: close the drawer. On desktop: collapse the sidebar panel.
            if (window.innerWidth <= 768) {
                closeMobileSidebar();
            } else {
                toggleSidebar(true);
            }
        });
    }
    if (DOM.sidebarExpandBtn) DOM.sidebarExpandBtn.addEventListener('click', () => toggleSidebar(false));

    if (DOM.navBtnHome) DOM.navBtnHome.addEventListener('click', showHomeView);
    if (DOM.brandHomeLink) DOM.brandHomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeView();
    });
    if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.addEventListener('click', () => showCurriculumView());
    if (DOM.navBtnSandbox) DOM.navBtnSandbox.addEventListener('click', showSandboxView);
    if (DOM.enterCurriculumBtn) DOM.enterCurriculumBtn.addEventListener('click', () => showCurriculumView('javascript'));
    if (DOM.heroJsTrackBtn) DOM.heroJsTrackBtn.addEventListener('click', () => showCurriculumView('javascript'));
    if (DOM.heroPyTrackBtn) DOM.heroPyTrackBtn.addEventListener('click', () => showCurriculumView('python'));
    if (DOM.heroSandboxBtn) DOM.heroSandboxBtn.addEventListener('click', showSandboxView);
    // Mobile settings dropdown sandbox shortcut
    if (DOM.mobileNavSandboxBtn) DOM.mobileNavSandboxBtn.addEventListener('click', showSandboxView);

    // Init Application & Language
    applyLanguage(currentUiLang);
    showHomeView();

})();
