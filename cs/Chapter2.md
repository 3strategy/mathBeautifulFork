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

## הכרזה לעומת השמה

חשוב להבחין בין **הכרזה** על משתנה (**declaration**) לבין **השמה** של ערך למשתנה (**assignment**).

דוגמה נכונה:

{% highlight csharp linenos %}
int x;      // הכרזה
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

{: .box-warning}
**אזהרה:** שימו לב להשתמש תמיד בשני סימני שוויון (`==`) לבדיקת שוויון בתנאים.
