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
            sandboxTitle: "Interactive Code Sandbox",
            sandboxSubtitle: "Execute JavaScript statements in real-time and inspect output logs.",
            runScript: "Run Script",
            execConsole: "Execution Console:",
            consoleInit: "> Console initialized. Click \"Run Script\" to execute.",
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
            sandboxTitle: "بيئة الكود التفاعلية",
            sandboxSubtitle: "نفّذ تعليمات جافا سكريبت مباشرة وشاهد النتائج في الوقت الفعلي.",
            runScript: "تشغيل الكود",
            execConsole: "وحدة التحكم:",
            consoleInit: "> تم تهيئة وحدة التحكم. اضغط \"تشغيل الكود\" للتنفيذ.",
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
        'Test 17 Assessment': 'تقييم الاختبار 17'
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

            // Chapter 8: Test 2 Breakline Divider
            {
                chapterId: 'js-ch8',
                chapterNumber: 'Ch 8',
                chapterTitle: 'Test 2 Knowledge Check',
                isTest: true,
                isLocked: true,
                testQuestions: [],
                lessons: [
                    {
                        id: 'js-8-test',
                        lessonNumber: '8.0',
                        category: 'js',
                        title: 'Test 2 Assessment',
                        isLocked: true,
                        readTime: 'Locked',
                        spec: 'Locked Test 2',
                        description: '🔒 Test 2 is locked until questions are added by the instructor.',
                        descriptionAr: '🔒 التقييم الثاني مغلق حالياً حتى يتم إضافة الأسئلة بواسطة المحاضر.',
                        specNote: 'Instructor Notice: Test questions are under preparation.',
                        specNoteAr: 'ملاحظة المحاضر: أسئلة التقييم قيد الإعداد.',
                        code: `// 🔒 Test 2 is locked`
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

    for (let i = 11; i <= 54; i++) {
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

        // Sandbox
        jsToolsCard: document.getElementById('js-tools-card'),
        jsInput: document.getElementById('js-sandbox-input'),
        runJsBtn: document.getElementById('run-js-btn'),
        jsConsoleOutput: document.getElementById('js-console-output'),

        // View Switching Elements
        homeViewContainer: document.getElementById('home-view-container'),
        workspaceLayout: document.getElementById('workspace-layout'),
        navBtnHome: document.getElementById('nav-btn-home'),
        navBtnCurriculum: document.getElementById('nav-btn-curriculum'),
        brandHomeLink: document.getElementById('brand-home-link'),
        enterCurriculumBtn: document.getElementById('enter-curriculum-btn'),
        heroJsTrackBtn: document.getElementById('hero-js-track-btn'),
        heroPyTrackBtn: document.getElementById('hero-py-track-btn'),

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
        themeText: document.getElementById('theme-text')
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
    if (DOM.mobileMenuToggle && DOM.sidebarOverlay) {
        DOM.mobileMenuToggle.addEventListener('click', () => {
            if (DOM.homeViewContainer && DOM.homeViewContainer.style.display !== 'none') {
                showCurriculumView();
            }
            DOM.sidebar.classList.toggle('mobile-open');
            DOM.sidebarOverlay.classList.toggle('active');
            if (DOM.mobileSettingsDropdown) DOM.mobileSettingsDropdown.classList.remove('active');
        });

        DOM.sidebarOverlay.addEventListener('click', () => {
            if (DOM.sidebar) DOM.sidebar.classList.remove('mobile-open');
            if (DOM.mobileSettingsDropdown) DOM.mobileSettingsDropdown.classList.remove('active');
            DOM.sidebarOverlay.classList.remove('active');
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

        if (DOM.navBtnHome) DOM.navBtnHome.innerHTML = `<span>🏠</span> ${t('navHome')}`;
        if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.innerHTML = `<span>📚</span> ${t('navCurriculum')}`;

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

    // View Switching Functions
    function showHomeView() {
        if (DOM.homeViewContainer) DOM.homeViewContainer.style.display = 'block';
        if (DOM.workspaceLayout) DOM.workspaceLayout.style.display = 'none';
        if (DOM.navBtnHome) DOM.navBtnHome.classList.add('active');
        if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.classList.remove('active');
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

        if (DOM.homeViewContainer) DOM.homeViewContainer.style.display = 'none';
        if (DOM.workspaceLayout) DOM.workspaceLayout.style.display = 'flex';
        if (DOM.navBtnHome) DOM.navBtnHome.classList.remove('active');
        if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.classList.add('active');
    }

    // Sidebar Collapse / Expand Toggle
    function toggleSidebar(collapse) {
        if (!DOM.sidebar) return;
        const isCollapsed = DOM.sidebar.classList.contains('desktop-collapsed');
        const shouldCollapse = collapse !== undefined ? collapse : !isCollapsed;

        if (shouldCollapse) {
            DOM.sidebar.classList.add('desktop-collapsed');
            if (DOM.sidebarExpandBtn) DOM.sidebarExpandBtn.style.display = 'inline-flex';
        } else {
            DOM.sidebar.classList.remove('desktop-collapsed');
            if (DOM.sidebarExpandBtn) DOM.sidebarExpandBtn.style.display = 'none';
        }
    }

    if (DOM.sidebarCollapseBtn) DOM.sidebarCollapseBtn.addEventListener('click', () => toggleSidebar(true));
    if (DOM.sidebarExpandBtn) DOM.sidebarExpandBtn.addEventListener('click', () => toggleSidebar(false));

    if (DOM.navBtnHome) DOM.navBtnHome.addEventListener('click', showHomeView);
    if (DOM.brandHomeLink) DOM.brandHomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeView();
    });
    if (DOM.navBtnCurriculum) DOM.navBtnCurriculum.addEventListener('click', () => showCurriculumView());
    if (DOM.enterCurriculumBtn) DOM.enterCurriculumBtn.addEventListener('click', () => showCurriculumView('javascript'));
    if (DOM.heroJsTrackBtn) DOM.heroJsTrackBtn.addEventListener('click', () => showCurriculumView('javascript'));
    if (DOM.heroPyTrackBtn) DOM.heroPyTrackBtn.addEventListener('click', () => showCurriculumView('python'));

    // Init Application & Language
    applyLanguage(currentUiLang);
    showHomeView();

})();
