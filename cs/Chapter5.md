---
layout: page
title: "פרק 5 - לולאות while"
subtitle: "ביצוע פעולות חוזרות באמצעות לולאות while"
author: גיא סידס
lang: he
---

{: .box-note}

**הערה:** בפרק זה נלמד כיצד להשתמש בלולאות מסוג while, שמבצעות פעולה כל עוד תנאי מסוים מתקיים.

## מבנה לולאת while

לולאת `while` משמשת לביצוע פעולה מספר לא מוגדר של פעמים, כל עוד התנאי מתקיים.

המבנה הכללי:

{% highlight csharp linenos %}int counter = 0;
while (counter < 5)
{
    Console.WriteLine("המספר הוא: " + counter);
    counter++;
}
{% endhighlight %}

דוגמת פלט:

```
המספר הוא: 0
המספר הוא: 1
המספר הוא: 2
המספר הוא: 3
המספר הוא: 4
```

## לולאה לקבלת קלט מהמשתמש

ניתן להשתמש בלולאת `while` לקבלת קלט מהמשתמש עד לקבלת ערך תקין:

{% highlight csharp linenos %}int number;
Console.Write("הזן מספר חיובי: ");
number = int.Parse(Console.ReadLine());

while (number <= 0)
{
    Console.WriteLine("מספר לא חוקי, נסה שוב.");
    Console.Write("הזן מספר חיובי: ");
    number = int.Parse(Console.ReadLine());
}
Console.WriteLine("המספר שהזנת הוא: " + number);
{% endhighlight %}

## לולאות while ושימוש ב-break

אפשר לעצור את הלולאה בכל שלב בעזרת `break`:

{% highlight csharp linenos %}int count = 0;
while (true)
{
    Console.WriteLine(count);
    count++;

    if (count == 5)
    {
        break; // עצירת הלולאה
    }
}
{% endhighlight %}

פלט הלולאה:

```
0
1
2
3
4
```

## דגלים (flags) בלולאות while

ניתן להשתמש במשתני דגל כדי לשלוט בהפעלת לולאות:

{% highlight csharp linenos %}bool continueLoop = true;
int number;

while (continueLoop)
{
    Console.Write("הזן מספר (0 ליציאה): ");
    number = int.Parse(Console.ReadLine());

    if (number == 0)
    {
        continueLoop = false;
    }
    else
    {
        Console.WriteLine("המספר שהזנת הוא: " + number);
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

