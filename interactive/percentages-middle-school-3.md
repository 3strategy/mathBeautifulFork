---
layout: page
title: שאלון אינטראקטיבי באחוזים – סדרה ג'
tags: [אחוזים, מתמטיקה, חטיבת ביניים, שאלון, אינטראקטיבי]
lang: he
full-width: true
mathjax: true
---

<!-- interactive -->

{: .box-note}
שאלון תרגול מאתגר יותר באחוזים לחטיבת ביניים – סדרה ג'.
יש כאן 15 שאלות עם ניסוחים שדורשים קריאה זהירה: מחיר לפני ואחרי שינוי, הנחה בשקלים לעומת אחוזים, שינוי מתוך המחיר החדש, והשוואות בין קבוצות.

<style>
#quiz-root .quiz-answers-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

#quiz-root .quiz-answer-btn {
    align-items: stretch;
    justify-content: flex-start;
}

#quiz-root .quiz-answer-letter {
    align-self: center;
}

#quiz-root .quiz-answer-text {
    text-align: right;
}

@media (max-width: 560px) {
    #quiz-root .quiz-answers-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>

<div id="quiz-root"></div>

<script>
window.QUIZ_QUESTIONS = [
  {
    id: 1,
    title: "שאלה 1: מחיר לפני הנחה",
    promptHe: "לאחר הנחה של 15% מחיר תיק הוא 170 שקלים. מה היה מחיר התיק לפני ההנחה?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "185 שקלים" },
      { key: "B", text: "195 שקלים" },
      { key: "C", text: "200 שקלים" },
      { key: "D", text: "215 שקלים" },
    ],
    correctKey: "C",
    explanationHe: "אחרי הנחה של 15% נשארים 85% מהמחיר המקורי. אם 85% הם 170, אז 100% הם 200.",
    tags: ["הנחה", "חלק לשלם"],
  },
  {
    id: 2,
    title: "שאלה 2: הנחה בשקלים",
    promptHe: "בחנות מכשירי חשמל הכריזו על מבצע של 30% על כל החנות. על טלוויזיה ניתנה הנחה של 480 שקלים. מה היה מחיר הטלוויזיה לפני ההנחה?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "1,120 שקלים" },
      { key: "B", text: "1,440 שקלים" },
      { key: "C", text: "1,600 שקלים" },
      { key: "D", text: "1,920 שקלים" },
    ],
    correctKey: "C",
    explanationHe: "הליכה קדימה ואחורה בזמן: 480 שקלים הם 30% מהמחיר המקורי. כלומר בהליכה קדימה בזמן מישהו כפל את המחיר המקורי ב-0.3 כדי לקבל את גובה ההנחה. כדי ללכת אחורה בזמן ולחזור למחיר המקורי נחלק ב-0.3: $$480÷0.3$$ זו התשובה המיידית, ומקבלים 1,600 שקלים.",
    tags: ["הנחה", "מציאת השלם"],
  },
  {
    id: 3,
    title: "שאלה 3: מוצר כפול במחירו",
    promptHe: "בחנות יש מבצע של 30% הנחה. ההנחה על טלוויזיה היא 480 שקלים. מה יהיה שווי ההנחה על מוצר שמחירו לפני ההנחה כפול ממחיר הטלוויזיה?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "510 שקלים" },
      { key: "B", text: "780 שקלים" },
      { key: "C", text: "960 שקלים" },
      { key: "D", text: "1,600 שקלים" },
    ],
    correctKey: "C",
    explanationHe: "אם המחיר לפני ההנחה כפול, גם 30% ממנו כפולים. לכן ההנחה תהיה 480 × 2 = 960 שקלים.",
    tags: ["הנחה", "יחס"],
  },
  {
    id: 4,
    title: "שאלה 4: מחיר שעלה לפני הקנייה",
    promptHe: "מחיר קלסר עלה ב-20%. לאחר ההתייקרות 6 קלסרים עולים 72 שקלים. מה היה מחיר קלסר אחד לפני ההתייקרות?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "8 שקלים" },
      { key: "B", text: "10 שקלים" },
      { key: "C", text: "12 שקלים" },
      { key: "D", text: "14 שקלים" },
    ],
    correctKey: "B",
    explanationHe: "אחרי ההתייקרות מחיר קלסר אחד הוא 72 : 6 = 12 שקלים. זהו 120% מהמחיר המקורי, ולכן המחיר המקורי הוא 10 שקלים.",
    tags: ["התייקרות", "מחיר מקורי"],
  },
  {
    id: 5,
    title: "שאלה 5: פחות פריטים במחיר גבוה יותר",
    promptHe: "ביום ראשון נאור קנה 10 קלסרים במחיר זהה לכל קלסר. למחרת מחיר כל קלסר עלה ב-20%, ונאור קנה רק 5 קלסרים. ביום שני הוא שילם 24 שקלים פחות מששילם ביום ראשון. כמה שילם נאור ביום שני?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "30 שקלים" },
      { key: "B", text: "36 שקלים" },
      { key: "C", text: "48 שקלים" },
      { key: "D", text: "60 שקלים" },
    ],
    correctKey: "B",
    explanationHe: "נסמן את מחיר קלסר ביום ראשון ב-x. ביום ראשון שילם 10x, וביום שני שילם 5 × 1.2x = 6x. ההפרש הוא 4x = 24, לכן x = 6, והתשלום ביום שני הוא 36.",
    tags: ["התייקרות", "ניסוח מבלבל"],
  },
  {
    id: 6,
    title: "שאלה 6: פחות מאשר",
    promptHe: "בקבוצה יש 28 תלמידים. מספר הבנות קטן ב-25% ממספר הבנים. כמה בנות יש בקבוצה?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "10" },
      { key: "B", text: "12" },
      { key: "C", text: "14" },
      { key: "D", text: "16" },
    ],
    correctKey: "B",
    explanationHe: "אם מספר הבנים הוא x, מספר הבנות הוא 75% ממנו, כלומר 0.75x. יחד: 1.75x = 28, ולכן x = 16 ויש 12 בנות.",
    tags: ["אחוזים בין קבוצות"],
  },
  {
    id: 7,
    title: "שאלה 7: הנחה מהמחיר החדש",
    promptHe: "מחיר מוצר היה 240 שקלים. המחיר עלה ב-25%, ולאחר מכן ניתנה הנחה של 20% מהמחיר החדש. מה המחיר לאחר שני השינויים?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "216 שקלים" },
      { key: "B", text: "240 שקלים" },
      { key: "C", text: "252 שקלים" },
      { key: "D", text: "264 שקלים" },
    ],
    correctKey: "B",
    explanationHe: "אחרי עלייה של 25% המחיר הוא 300. ההנחה היא 20% מתוך 300, כלומר 60, ולכן המחיר הסופי הוא 240.",
    tags: ["התייקרות", "הנחה"],
  },
  {
    id: 8,
    title: "שאלה 8: מחיר כולל תוספת",
    promptHe: "מחיר מוצר לאחר תוספת של 17% הוא 234 שקלים. מה היה מחיר המוצר לפני התוספת?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "190 שקלים" },
      { key: "B", text: "198 שקלים" },
      { key: "C", text: "200 שקלים" },
      { key: "D", text: "217 שקלים" },
    ],
    correctKey: "C",
    explanationHe: "234 שקלים הם 117% מהמחיר המקורי. לכן המחיר המקורי הוא 234 : 1.17 = 200 שקלים.",
    tags: ["תוספת", "מחיר מקורי"],
  },
  {
    id: 9,
    title: "שאלה 9: מי שלא הגיש",
    promptHe: "60% מתלמידי הכיתה הגישו עבודה, ו-8 תלמידים לא הגישו. כמה תלמידים יש בכיתה?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "16" },
      { key: "B", text: "20" },
      { key: "C", text: "24" },
      { key: "D", text: "28" },
    ],
    correctKey: "B",
    explanationHe: "אם 60% הגישו, אז 40% לא הגישו. 40% הם 8 תלמידים, ולכן 100% הם 20 תלמידים.",
    tags: ["מציאת השלם", "השלמה ל-100%"],
  },
  {
    id: 10,
    title: "שאלה 10: אותו מספר בשתי כיתות",
    promptHe: "בכיתה ח'1 לומדים 28 תלמידים ובכיתה ח'2 לומדים 24 תלמידים. בשתי הכיתות אותו מספר בנים, ובשתי הכיתות יחד יש 28 בנות. איזה אחוז מתלמידי כיתה ח'2 הם בנים?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "40%" },
      { key: "B", text: "45%" },
      { key: "C", text: "50%" },
      { key: "D", text: "60%" },
    ],
    correctKey: "C",
    explanationHe: "בשתי הכיתות יחד יש 52 תלמידים. אם 28 מהם בנות, יש 24 בנים. מספר הבנים שווה בשתי הכיתות, לכן בכל כיתה יש 12 בנים. בכיתה ח'2 יש 24 תלמידים, ולכן 12 מתוך 24 הם 50%.",
    tags: ["אחוזים בין קבוצות", "ניסוח מבלבל"],
  },
  {
    id: 11,
    title: "שאלה 11: יותר נוכחים מנעדרים",
    promptHe: "ביום מסוים 30% מתלמידי הכיתה נעדרו. מספר הנוכחים היה גדול ב-16 ממספר הנעדרים. כמה תלמידים יש בכיתה?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "32" },
      { key: "B", text: "36" },
      { key: "C", text: "40" },
      { key: "D", text: "48" },
    ],
    correctKey: "C",
    explanationHe: "אם 30% נעדרו, אז 70% נוכחים. ההפרש בין נוכחים לנעדרים הוא 40% מהכיתה. 40% הם 16, ולכן 100% הם 40.",
    tags: ["השלמה ל-100%", "מציאת השלם"],
  },
  {
    id: 12,
    title: "שאלה 12: שינוי אחר מאותו מקור",
    promptHe: "אחרי הנחה של 25% מחיר נעליים הוא 90 שקלים. מה היה מחיר הנעליים אילו במקום ההנחה המחיר היה עולה ב-10% מהמחיר המקורי?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "99 שקלים" },
      { key: "B", text: "110 שקלים" },
      { key: "C", text: "120 שקלים" },
      { key: "D", text: "132 שקלים" },
    ],
    correctKey: "D",
    explanationHe: "90 שקלים הם 75% מהמחיר המקורי, ולכן המחיר המקורי הוא 120. אם המחיר היה עולה ב-10%, הוא היה 132.",
    tags: ["הנחה", "התייקרות", "מחיר מקורי"],
  },
  {
    id: 13,
    title: "שאלה 13: עשרה אחוזים ואז עשרה אחוזים",
    promptHe: "מחיר מוצר עלה ב-10%, ולאחר מכן ירד ב-10% מהמחיר החדש. ביחס למחיר המקורי, מה נכון לומר על המחיר הסופי?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "הוא חזר בדיוק למחיר המקורי" },
      { key: "B", text: "הוא גבוה ב-1% מהמחיר המקורי" },
      { key: "C", text: "הוא נמוך ב-1% מהמחיר המקורי" },
      { key: "D", text: "הוא נמוך ב-10% מהמחיר המקורי" },
    ],
    correctKey: "C",
    explanationHe: "נניח שהמחיר המקורי הוא 100. אחרי עלייה של 10% המחיר הוא 110. ירידה של 10% מתוך 110 היא 11, ולכן המחיר הסופי הוא 99, כלומר נמוך ב-1%.",
    tags: ["עלייה וירידה", "חשיבה באחוזים"],
  },
  {
    id: 14,
    title: "שאלה 14: מוסיפים רק לקבוצה אחת",
    promptHe: "בקופסה יש כדורים אדומים וכחולים. בתחילה 20% מהכדורים אדומים. הוסיפו לקופסה 10 כדורים אדומים בלבד, ואז 40% מהכדורים בקופסה היו אדומים. כמה כדורים היו בקופסה בתחילה?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "24" },
      { key: "B", text: "30" },
      { key: "C", text: "36" },
      { key: "D", text: "50" },
    ],
    correctKey: "B",
    explanationHe: "נסמן את מספר הכדורים בהתחלה ב-x. מספר האדומים היה 0.2x. אחרי ההוספה: 0.2x + 10 הם 40% מתוך x + 10. לכן 0.2x + 10 = 0.4x + 4, ומקבלים x = 30.",
    tags: ["אחוזים משתנים", "שאלה מסכמת"],
  },
  {
    id: 15,
    title: "שאלה 15: אחוז מתוך אחוז",
    promptHe: "במבחן היו כמה שאלות. דנה ניסתה לפתור 80% מכל השאלות. מתוך השאלות שניסתה לפתור, 75% היו נכונות. אם דנה פתרה נכון 18 שאלות, כמה שאלות היו במבחן?",
    choicesDir: "rtl",
    choices: [
      { key: "A", text: "24" },
      { key: "B", text: "27" },
      { key: "C", text: "30" },
      { key: "D", text: "32" },
    ],
    correctKey: "C",
    explanationHe: "18 שאלות הן 75% מהשאלות שדנה ניסתה לפתור, ולכן היא ניסתה 24 שאלות. 24 שאלות הן 80% מכל המבחן, ולכן במבחן היו 30 שאלות.",
    tags: ["אחוז מתוך אחוז", "שאלה מסכמת"],
  },
];

window.QUIZ_LABELS = {
  title: "שאלון אחוזים לחטיבת ביניים – סדרה ג'",
  progressAnswered: "נענו",
  progressCorrect: "נכונות",
  questionLabel: "שאלה",
  ofLabel: "מתוך",
  resetLabel: "איפוס",
  prevLabel: "הקודם",
  nextLabel: "הבא",
  explanationTitle: "הסבר",
  emptyMessage: "אין שאלות להצגה.",
};
</script>

<script type="text/babel" src="{{ '/assets/js/questionnaire.js' | relative_url }}"></script>
<script type="text/babel">
  window.renderQuestionnaire({
    mountId: "quiz-root",
    questions: window.QUIZ_QUESTIONS,
    labels: window.QUIZ_LABELS,
    revealDelayMs: 250,
    dir: "rtl"
  });
</script>
