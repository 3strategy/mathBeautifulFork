---
layout: page
title: "פרק 4 - לולאות for"
subtitle: "ביצוע פעולות חוזרות באמצעות לולאות for"
author: גיא סידס
lang: he
---

{: .box-note}
**הערה:** בפרק זה נלמד כיצד להשתמש בלולאות מסוג for לביצוע פעולות חוזרות באופן יעיל וברור.

## מבנה לולאת for

לולאת `for` משמשת לביצוע פעולה מספר מוגדר של פעמים.

המבנה הכללי:

{% highlight csharp linenos %}for (int i = 0; i < 5; i++)
{
    Console.WriteLine("The number is: " + i);
}
{% endhighlight %}

דוגמת פלט:

```
The number is: 0
The number is: 1
The number is: 2
The number is: 3
The number is: 4
```

## שימושים נפוצים בלולאות for

חישוב סכום מספרים:

{% highlight csharp linenos %}int sum = 0;
for (int i = 1; i <= 10; i++)
{
    sum += i;
}
Console.WriteLine("The sum is: " + sum); // 55
{% endhighlight %}

## יצירת טבלת כפל בעזרת לולאה

דוגמה להצגת טבלת כפל של המספר 3:

{% highlight csharp linenos %}int number = 3;
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(number + " x " + i + " = " + (number * i));
}
{% endhighlight %}

## שימוש ב-break בלולאות

ניתן לעצור לולאה באמצע באמצעות המילה `break`:

{% highlight csharp linenos %}for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        break; // עצירה כשהערך של i הוא 5
    }
    Console.WriteLine(i);
}
{% endhighlight %}

פלט הלולאה יהיה:

```
1
2
3
4
```


{: .box-warning}

**אזהרה:** ודאו שהתנאי בלולאה (`i <= 10`) מאפשר את עצירת הלולאה, אחרת הלולאה עלולה להפוך ללולאה אינסופית!

## תרגיל - הדפסת מספרים ושימוש בצובר

כתבו תוכנית המדפיסה את המספרים מ-1 עד 5 ואת הסכום המצטבר שלהם. השתמשו בלולאת `for`.

**פתרון לדוגמה:**

{% highlight csharp linenos %}int sum = 0; // משתנה צובר
for (int i = 1; i <= 5; i++)
{
    sum += i;
    Console.WriteLine("Number: " + i + ", cumulative sum: " + sum);
}
{% endhighlight %}

הפלט של התוכנית יהיה:

```
Number: 1, cumulative sum: 1
Number: 2, cumulative sum: 3
Number: 3, cumulative sum: 6
Number: 4, cumulative sum: 10
Number: 5, cumulative sum: 15
```

## טבלת מעקב ללולאת for עם צובר

| שורת קוד | i | sum |
|-----------|---|-----|
| התחלה    | 1 | 0   |
| חישוב 1   | 1 | 1   |
| חישוב 2   | 2 | 3   |
| חישוב 3   | 3 | 6   |
| חישוב 4   | 4 | 10  |
| חישוב 5   | 5 | 15  |
{: .table-en}

[⬅ עבור לתרגול 4.1 - לולאות for: שארית חלוקה](/cs/Chapter4Ex4.1)
[⬅ עבור לתרגול 4.3 לולאות for: מינימום מקסימום ספירה צבירה ושארית חלוקה](/cs/Chapter4Ex4.3)