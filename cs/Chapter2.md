---
layout: page
title: "פרק 2 המחלקה Math, Random"
subtitle: "חישובים מתמטיים ומספרים אקראיים"
tags: [המחלקה Random, המתמטית,דיבוג breakpoints, הגרלות, פונקציות מתמטיות, טבלת מעקב]
author: גיא סידס
lang: he
---
<!-- https://chatgpt.com/c/67f0f869-af10-800e-8479-c8fd3873432c -->

{: .box-note}
**בקצרה:** בפרק זה נכיר את השימוש במחלקות Math ו-Random של שפת C#, המאפשרות לנו לבצע חישובים מתמטיים ולהשתמש במספרים אקראיים.

## שימוש במחלקה Math

המחלקה `Math` מאפשרת לבצע חישובים מתמטיים מורכבים באופן פשוט.

דוגמאות נפוצות:

{% highlight csharp linenos %}double result = Math.Pow(2, 3); // חזקה - התוצאה 8
Console.WriteLine(result);

result = Math.Sqrt(16); // שורש ריבועי - התוצאה 4
Console.WriteLine(result);

result = Math.Abs(-10); // ערך מוחלט - התוצאה 10
Console.WriteLine(result);

result = Math.Round(3.565, 2); // עיגול ל-2 ספרות אחרי הנקודה - התוצאה 3.57
Console.WriteLine(result);

result = Math.Floor(3.9); // עיגול כלפי מטה - התוצאה 3
Console.WriteLine(result);

result = Math.Ceiling(3.9); // עיגול כלפי מעלה - התוצאה 4
Console.WriteLine(result);
{% endhighlight %}

**floor הוא עיגול מטה, ולא סתם מחיקה של השבר**
```csharp
static void Main(String[] args)
{
    double r = -1.2;
    Console.WriteLine($"after casting {(int)r}"); // -1
    Console.WriteLine($"after floor {Math.Floor(r)}"); // -2
}
```

## מספרים אקראיים (Random)

נשתמש במחלקה `Random` כדי לייצר מספרים אקראיים.

יצירת מספר אקראי שלם בין 1 ל-10:

{% highlight csharp linenos %}Random rnd = new Random();
int number = rnd.Next(1, 11); // 1-10
Console.WriteLine(number);
{% endhighlight %}

יצירת מספר אקראי ממשי בין 0 ל-1:

{% highlight csharp linenos %}Random rnd = new Random();
double number = rnd.NextDouble();
Console.WriteLine(number);
{% endhighlight %}

## דוגמא לשימוש במספרים אקראיים

הדמיית הטלת קובייה:

{% highlight csharp linenos %}Random rnd = new Random();
int dice = rnd.Next(1, 7); // 1-6
Console.WriteLine("Dice roll result: " + dice);
{% endhighlight %}

## טבלת מעקב (דוגמה לשימוש ב-Random)

| שורת קוד | dice | פלט                     |
|-----------|------|-------------------------|
| הגדרה    | 4    |                         |
| פלט      | 4    | Dice roll result: 4  |
{: .table-en}



## סרטון הסבר על שימוש ב- breakpoints למציאת שגיאות

{: .box-success}
איתור שגיאות בקוד (דיבוג) הוא חלק בלתי נפרד מתכנות ומפיתוח חשיבה אלגוריתמית. הדרך המרכזית כיום בזמן הפיתוח, היא שימוש ב-breakpoint. דרך זו מתווספת לדרך ישנה ושימושית לא פחות - הדפסות ביניים (ובקוד מסחרי משתמשים בנוסף בכתיבה ללוג, משלוח הודעות וחיבור debugger שאיננו מלמדים).

לפניכם סרטון הדרכה קצר, המסביר כיצד ניתן לדבג בעזרת breakpoints.

{% include youtube.html id="yjl6vQVFXb0" %} 


## תרגול

[⬅ מעבר לתרגול 2.1 - המחלקות Math, Random](/cs/Chapter2Ex2.1)

[⬅ להיכרות עם הקיצורים השימושיים והוספת קיצורים משלכם snippets נוספים](/cs/Chapter1Shortcuts)

<!-- #### התמצאות באתר קמפוס =================
עדיין לא הוקלט -->

## סרטונים
[סרטוני פרק 3: המחלקה Math](https://www.youtube.com/playlist?list=PLw4P_RdfuzShCTd4wgIlDn_Mhum2Pdbai){:target="_blank"}

[⬅ תקציר עם מספרי שורות כולל קצת דברים שלא למדנו](/cs/ChapterSyntaxSummary)
[⬅ תקציר להדפסה קצת דברים שלא למדנו](/cs/ChapterSyntaxSummaryToPrint)