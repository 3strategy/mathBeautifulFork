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

[⬅ עבור לתרגול 4.2 - לולאות for: מונה, צובר, מינימום ומקסימום](/cs/Chapter4Ex4.2)

# דברים שראינו בשיעור והוספתי אחרי 

<details markdown="1">
<summary>מציאת מקסימום</summary>

## ראינו כיצד מוצאים מקסימום ומינימום

```csharp
public static void QFindMax()
{
    // קלוט 5 שלמים
    int num, max;

    max = int.MinValue; // איתחול למינימלי האפשרי

    for (int i = 0; i < 5; i++)
    {
        Console.Write("Enter a number: ");
        num = int.Parse(Console.ReadLine());

        Console.WriteLine(num);
        if (num > max)
            max = num;
    }
    Console.WriteLine($"max is {max}");
}

```


### מקסימום. גרסה עם קלט כפול
**בפועל תבחרו מה שנראה לכם נכון ותלמדו רק טכניקה אחת**

```csharp
/// <summary>
/// מציאת הקלט המקסימלי מתוך 5 מספרים. קלט כפול. 
/// </summary>
public static void QFindMax()
{
    int num, max;
    // קלט כפול. 
    Console.Write("Enter a number: "); // קלט כפול
    max = int.Parse(Console.ReadLine());

    for (int i = 0; i < 4; i++) // חזרה אחת פחות
    {
        Console.Write("Enter a number: ");
        num = int.Parse(Console.ReadLine());

        Console.WriteLine(num);
        if (num > max)
            max = num;
    }
    Console.WriteLine($"max is {max}");
}

```

### מינימום
```csharp
/// <summary>
/// מציאת הקלט המינימלי. 
/// </summary>
public static void QFindMin()
{
    // קלוט 5 שלמים ומצא את המינימלי
    int num, min;

    min = int.MaxValue;

    for (int i = 0; i < 5; i++)
    {
        Console.Write("Enter a number: ");
        num = int.Parse(Console.ReadLine());

        Console.WriteLine(num);
        if (num < min)
            min = num;
    }
    Console.WriteLine($"min is {min}");
}
```




</details>

<details markdown="1">
<summary>מציאה אם מספר הוא ראשוני</summary>

## מציאת מספר ראשוני - דוגמא לשימוש בדגל וב-break

#### גרסה התחלתית שגויה - התקדמות בצעדים קטנים
```csharp
public static void QIsPrime()
{   // גרסה התחלתית שגויה. צריך להתקדם בצעדים קטנים

    //Console.Write("Enter a number: ");
    int num1 = 60;// int.Parse(Console.ReadLine());
    // לולאה לבדיקה אם המספר הוא ראשוני
    for (int i = 2; i < num1; i++)
    {
        if (num1 % i == 0) // מתחלק בדיוק
        {
            Console.WriteLine("Not prime");
        }
    }
    Console.WriteLine("IsPrime");
}
```

#### גרסה סופית, ללא אופטימיזציות

```csharp
public static void QIsPrime()
{
    //Console.Write("Enter a number: ");
    int num1 = 60000;// int.Parse(Console.ReadLine());
    bool isPrime = true; //דגל 
    // לולאה לבדיקה אם המספר הוא ראשוני
    for (int i = 2; i < num1; i++)
    {
        if (num1 % i == 0) // מתחלק בדיוק
        {
            Console.WriteLine("Not prime");
            isPrime = false;
            break; // יציאה מיידית מהלולאה לפני שהסתיימה
        }
    }
    // בסי שארפ אין אפשרות מובנית לדעת אם הלולאה הסתיימה רגיל
    // break או שהיה 
    if (isPrime)
        Console.WriteLine("IsPrime");
}
```


</details>


---

# כל מה שמכאן ואילך לא למדנו!!!!!!!!!!!!!

## גילגול (שמירת היסטוריה)

לעיתים בלולאות יש צורך **לשמור את הערך מהאיטרציה הקודמת** כדי להשוות אותו לערך הנוכחי, לדוגמא כאשר רוצים לבדוק אם הקלט הנוכחי שונה מהקלט הקודם, או למצוא רצפים משתנים.

{: .box-note}
**הערה:** שמירה של ערך קודם מתבצעת בעזרת משתנה עזר (לרוב `prev`), אותו מעדכנים בכל איטרציה לאחר ההשוואה.

### דוגמה: ספירת שינויים ברצף מספרים

נניח שהוזנו לנו 5 מספרים, ואנו רוצים לספור בכמה מקרים המספר השתנה מהפעם הקודמת.

<details markdown="1">
<summary>פתרון</summary>

{% highlight csharp linenos %}int count = 0;
int prev = 0;

for (int i = 0; i < 5; i++)
{
    Console.Write("Enter a number: ");
    int num = int.Parse(Console.ReadLine());

    if (i > 0 && num != prev)
    {
        count++;
    }

    prev = num; // גילגול: שומרים את הקלט האחרון
}

Console.WriteLine("Number of changes: " + count);
{% endhighlight %}

**הסבר:**  
בלולאה מתקבל קלט מהמשתמש, משווים אותו לערך הקודם (`prev`), ואם יש שינוי – מגדילים את המונה.  
לאחר ההשוואה, "מגלגלים" את הערך הנוכחי למשתנה `prev` כדי שישמש אותנו בסיבוב הבא.

</details>

## תרגול

[⬅ עבור לתרגול 4.5 - לולאות for: גילגול (שמירת היסטוריה)](/cs/Chapter4Ex4.5)

[⬅ עבור לתרגול 4.3 לולאות for: מינימום מקסימום ספירה צבירה ושארית חלוקה](/cs/Chapter4Ex4.3)


## סרטונים
[סרטוני פרק 6: לולאות for](https://www.youtube.com/playlist?list=PLw4P_RdfuzShl0iRsytc83T2ZHm3kvUAD){:target="_blank"}

