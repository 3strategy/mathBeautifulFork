---
layout: page
title: "פרק 5 - לולאות while"
subtitle: "ביצוע פעולות חוזרות באמצעות לולאות while"
author: גיא סידס
lang: he
---

{: .box-note}
**הערה:** בפרק זה נלמד כיצד להשתמש בלולאות מסוג while, שמבצעות פעולה כל עוד תנאי מסוים מתקיים.

{: box-warning}
**סדר הוראה:** יש מורים המעדיפים ללמד לולאת while לפני לולאת for. עשו כפי שמרגיש לכם נכון

## מבנה לולאת while

לולאת `while` משמשת לביצוע פעולה מספר לא מוגדר של פעמים, כל עוד התנאי מתקיים.

המבנה הכללי:

{% highlight csharp linenos %}int counter = 0;
while (counter < 3)
{
    Console.WriteLine("The number is: " + counter);
    counter++;
}
{% endhighlight %}

דוגמת פלט:

```
The number is: 0
The number is: 1
The number is: 2
```
{: .box-warning}
זוהי כמובן בחירה שגויה של מימוש. מקרה בו יודעים את מספר החזרות, יש לממש באמצעות לולאת for

## לולאה לקבלת קלט מהמשתמש

דוגמא 1: ניתן להשתמש בלולאת `while` לקבלת קלט מהמשתמש עד לקבלת ערך תקין:

{% highlight csharp linenos %}int number;
Console.Write("Enter a positive number: ");
number = int.Parse(Console.ReadLine());

while (number <= 0)
{
    Console.WriteLine("Invalid number, try again.");
    Console.Write("Enter a positive number: ");
    number = int.Parse(Console.ReadLine());
}
Console.WriteLine("The number entered is: " + number);
{% endhighlight %}

### דוגמא 2: עצירת הקלט בהתקיים תנאי:

{% highlight csharp linenos %}Console.Write("Enter number (0 to stop): ");
int n = int.Parse(Console.ReadLine());

while (n != 0)
{
    Console.WriteLine("You entered: " + n);
    Console.Write("Enter number (0 to stop): ");
    n = int.Parse(Console.ReadLine());
}

Console.WriteLine("Stopped.");
{% endhighlight %}

## לולאות while ושימוש ב-break

**אפשר לעצור לולאה בכל שלב בעזרת `break`**

**דוגמא 3:** בדוגמא זו, מימוש באמצעות break, הזהה בתוצאה לדוגמא 2 של (עצירת קלט):

{% highlight csharp linenos %}int n;
while (true)
{
    Console.Write("Enter number (0 to stop): ");
    n = int.Parse(Console.ReadLine());
    if (n == 0)
        break;
    Console.WriteLine("You entered: " + n);
}
Console.WriteLine("Stopped.");
{% endhighlight %}

פלט לדוגמא של הלולאה:

```
Enter number (0 to stop): 3
You entered: 3
Enter number (0 to stop): 7
You entered: 7
Enter number (0 to stop): 0
Stopped.
```

{: .box-warning}
אין חובה ללמד break אולם השימוש בו מותר. נראה בהמשך תרגילים פתורים עם ובלי הוראה זו. רצוי להקנות לתלמידים  while דרך יחידה (גם אם אני אציג לכם את שתי הדרכים)

{% highlight csharp linenos %}int number;
while (true)
{
    Console.Write("Enter a positive number: ");
    number = int.Parse(Console.ReadLine());
    if (number > 0)
        break; // יציאה מיידית מהלולאה
    //אם הגענו לכאן, הקלט לא היה תקין
    Console.WriteLine("Invalid number, try again.");
}
Console.WriteLine("The number entered is: " + number);
{% endhighlight %}

## דגלים (flags) בלולאות while

ניתן להשתמש במשתני דגל כדי לשלוט בהפעלת לולאות:

{% highlight csharp linenos %}bool continueLoop = true;
int number;

while (continueLoop)
{
    Console.Write("Enter a number (0 to exit): ");
    number = int.Parse(Console.ReadLine());

    if (number == 0)
    {
        continueLoop = false;
    }
    else
    {
        Console.WriteLine("The number entered is: " + number);
    }
}
{% endhighlight %}

## טבלת מעקב ללולאת while

| שורת קוד | count | פלט |
|-----------|-------|-----|
| התחלה    | 0     | 0   |
| איטרציה 1 | 1     | 1   |
| איטרציה 2 | 2     | 2   |
| איטרציה 3 | 3     | 3   |
| איטרציה 4 | 4     | 4   |
{: .table-en}

{: .box-warning}

**אזהרה:** ודאו תמיד שלולאת `while` מכילה תנאי שיגרום להפסקת הלולאה, כדי למנוע לולאה אינסופית.

