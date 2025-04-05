---
layout: post
title: "פרק 2 - תנאים, ביטויים לוגיים ושארית חלוקה"
subtitle: "תנאים, החלטות וביטויים לוגיים"
author: גיא סידס
lang: he
---

{: .box-note}
**הערה:** בפרק זה נלמד כיצד לקבל החלטות בתוכנית שלנו באמצעות תנאים, ביטויים לוגיים ושימוש בשארית החלוקה.

## ביטויים לוגיים והשוואות

ביטויים לוגיים מאפשרים לנו לקבל החלטות על בסיס השוואה בין ערכים.

דוגמאות לביטויים לוגיים:

{% highlight csharp linenos %}int age = 18;
bool isAdult = age >= 18; // התוצאה תהיה true
{% endhighlight %}

## משפטי תנאי - if, else

משפט תנאי מאפשר לנו לבצע פעולה מסוימת רק אם תנאי מסוים מתקיים.

מבנה משפט תנאי פשוט:

{% highlight csharp linenos %}
int score = 85;
if (score >= 60)
{
    Console.WriteLine("עברת את המבחן!");
}
{% endhighlight %}

מבנה משפט תנאי עם else:

{% highlight csharp linenos %}int score = 55;
if (score >= 60)
{
    Console.WriteLine("עברת את המבחן!");
}
else
{
    Console.WriteLine("נכשלת במבחן, נסה שוב");
}
{% endhighlight %}


## החלפת ערכים בין משתנים

כאשר אנו רוצים להחליף ערכים בין שני משתנים, נדרש לנו משתנה עזר שלישי. 
זוהי אנלוגיה דומה לשאלה: **כיצד מחליפים תוכן בין שני ספלי תה?**

נניח שיש לנו שני ספלים:
- ספל A מכיל תה ירוק
- ספל B מכיל תה שחור

כדי להחליף את התכולה שלהם, נזדקק לכלי שלישי (ספל C):
1. נשפוך את התוכן של ספל A לתוך ספל C (ריק)
2. נשפוך את התוכן של ספל B לתוך ספל A (שהתרוקן)
3. נשפוך את התוכן של ספל C לתוך ספל B

באותו אופן פועלת החלפת ערכים בתכנות - נדרש משתנה עזר זמני (temp).

{% highlight csharp linenos %}static void Main()
{
    // קלט שני מספרים
    Console.WriteLine("הכנס מספר ראשון:");
    int a = int.Parse(Console.ReadLine());  // קליטת המספר הראשון
    
    Console.WriteLine("הכנס מספר שני:");
    int b = int.Parse(Console.ReadLine());  // קליטת המספר השני
    
    Console.WriteLine($"לפני ההחלפה: a = {a}, b = {b}");
    
    // החלפת הערכים באמצעות משתנה זמני
    int temp = a;  // שמירת הערך של a במשתנה זמני
    a = b;         // הצבת הערך של b לתוך a
    b = temp;      // הצבת הערך המקורי של a (שנשמר ב-temp) לתוך b
    
    Console.WriteLine($"אחרי ההחלפה: a = {a}, b = {b}");
    
    Console.WriteLine("לחץ על מקש כלשהו לסיום...");
    Console.ReadKey(); // המתנה ללחיצת מקש לפני סגירת החלון בדרך כלל לא נעשה בכך שימוש
}
{% endhighlight %}

## הכרזה לעומת השמה

חשוב להבחין בין **הכרזה** על משתנה (**declaration**) לבין **השמה** של ערך למשתנה (**assignment**).

דוגמה נכונה:

{% highlight csharp linenos %}int x;      // הכרזה
x = 10;     // השמה
{% endhighlight %}

דוגמה שגויה:

{% highlight csharp linenos %}
int y;
y = y + 1; // שגיאה: שימוש במשתנה ללא ערך התחלתי
{% endhighlight %}

{: .box-warning}

**אזהרה:** בדוגמה השגויה תקבלו שגיאה מסוג `Use of unassigned local variable 'y'`. ודאו תמיד לתת ערך התחלתי למשתנה לפני שמשתמשים בו בחישוב.

## שימוש במודולו (%)

הפעולה `%` (מודולו) מחזירה את שארית החלוקה בין שני מספרים.

{% highlight csharp linenos %}int number = 7;
if (number % 2 == 0)
{
    Console.WriteLine("המספר זוגי");
}
else
{
    Console.WriteLine("המספר אי-זוגי");
}
{% endhighlight %}

אם המשתנה הוא 7, הפלט יהיה:

```
המספר אי-זוגי
```

## אופרטורים לוגיים מורכבים

אופרטורים לוגיים מאפשרים לנו לבדוק תנאים מורכבים:

- `&&` (וגם)
- `||` (או)
- `!` (שלילה)

דוגמה:

{% highlight csharp linenos %}int age = 25;
bool hasLicense = true;

if (age >= 18 && hasLicense)
{
    Console.WriteLine("אתה יכול לנהוג ברכב");
}
else
{
    Console.WriteLine("אתה לא יכול לנהוג ברכב");
}
{% endhighlight %}

## משתני דגל (Flags)

משתנה דגל הוא משתנה לוגי שנועד לזכור מצב מסוים.

{% highlight csharp linenos %}bool found = false;
int number = 5;

if (number == 5)
{
    found = true;
}

if (found)
{
    Console.WriteLine("המספר נמצא");
}
{% endhighlight %}

## טבלת מעקב (דוגמה לתנאי)

| שורת קוד | score | פלט                           |
|-----------|-------|-------------------------------|
| הגדרה    | 55    |                               |
| בדיקה    | 55    | נכשלת במבחן, נסה שוב |
{: .table-en}

## סגנונות כתיבת סוגריים בקוד
### סגנון C# מקובל (Allman) הופיע עד כה ואנו נכתוב רק בצורה זו
### סגנון Java (K&R) כאן פתיחת הסוגריים היא בהמשך להוראה הפותחת את הבלוק
{% highlight csharp linenos %}bool found = false;
int number = 5;

if (number == 5) {
    found = true;
}

if (found) {
    Console.WriteLine("המספר נמצא");
}
{% endhighlight %}

{: .box-success}
**כתיבה ללא סוגריים:** בדוגמא שלנו ניתן גם להתעלם מסוגריים מפני שבתוך הבלוק מופיעה הוראה בודדת. כתיבה זו מומלצת מרגע שתרגישו בנח איתה. גם כאשר כותבים ללא סוגריים מקובל מאד מעבר שורה

{% highlight csharp linenos %}bool found = false;
int number = 5;

if (number == 5)
    found = true;

if (found) 
    Console.WriteLine("המספר נמצא");
{% endhighlight %}

{: .box-warning}
**אזהרה:** שימו לב להשתמש תמיד בשני סימני שוויון (`==`) לבדיקת שוויון בתנאים.
