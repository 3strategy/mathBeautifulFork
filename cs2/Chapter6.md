---
layout: page
title: "פרק 6 - לולאות מקוננות"
subtitle: "ביצוע חוזר בתוך ביצוע חוזר"
tags: קינון, כוכביות, patterns
author: גיא סידס
lang: he
---





# פרק 6: לולאות מקוננות

{: .box-note}
**הגדרה: קינון** (Nested Loops) הוא מבנה תכנות שבו לולאה אחת נמצאת בתוך גוף של לולאה אחרת, כך שהלולאה הפנימית מתבצעת במלואה בכל איטרציה של הלולאה החיצונית. 

אין כאן משהו חדש מפני שאנו משתמשים במבנים שכבר למדנו, ובכל זאת זה עיקרון מורכב וחשוב שצריך לתרגל לעומק. הרעיון אינו ממומש רק באמצעות for בתוך for אלא כל שילוב בין סוגי הלולאות כולל while בתוך for, for בתוך while וגם שילוב של foreach שעדיין לא למדנו, ויש שבוחרים לא ללמד בשלב היסודות.
{: .box-success}

### דוגמה 1: טבלת כפל מ-0 עד 10

<details markdown="1"><summary>להלן קוד המציג את טבלת הכפל מ-0×0 עד 10×10:</summary>
{% highlight csharp linenos %}public static void MultiplicationTable()
{
    for (int i = 0; i <= 10; i++)
    {
        for (int j = 0; j <= 10; j++)
        {
            Console.Write($"{i * j} ");
            //Console.Write($"{i * j:00} "); //חלופות עיצוב
            //Console.Write($"{i * j}\t"); //חלופות עיצוב
        }
        Console.WriteLine();
    }
} {% endhighlight %}

</details>

### דוגמה 2: מלבן של כוכביות


<details markdown="1"><summary>להלן קוד המדפיס מלבן של כוכביות בגודל 5×10:</summary>


{% highlight csharp linenos %}public static void StarRectangle()
{
    int rows = 5;
    int cols = 10;
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            Console.Write("* ");
        }
        Console.WriteLine();
    }
}
{% endhighlight %}

</details>

## תבניות הדפסה

### Pattern 1

**Asterix1**

```
*
* *
* * *
* * * *
* * * * *
```

{% highlight csharp linenos %}public static void Asterix1()
{
    // לולאה חיצונית: עוברת על כל השורות
    for (int i = 0; i < 5; i++)
    {
        // לולאה פנימית: להדפסת שורה
        for (int j = 0; j <= i; j++)
        {
            Console.Write("* "); // ללא מעבר שורה
        }
        Console.WriteLine(); // מעבר שורה
    }
}
{% endhighlight %}



**Numbers1**

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```


<details markdown="1"><summary>פתרון. נסו לשנות את הקוד שבדוגמא הקודמת לפני שאתם פותחים</summary>
{% highlight csharp linenos %}public static void Numbers1()
{
    for (int i = 0; i < 5; i++)
    {
        // לולאה פנימית להדפסת שורה
        for (int j = 0; j <= i; j++)
        {
            Console.Write($"{j + 1} ");
        }
        Console.WriteLine();
    }
}
{% endhighlight %}

</details>

**Chars1** דוגמא ללולאה פנימית מטיפוס תו

```
A
A B
A B C
A B C D
A B C D E
```

---

{% highlight csharp linenos %}public static void Chars1()
{
    int rows = 5;
    // לולאה חיצונית
    for (int i = 0; i < rows; i++)
    {
        // לולאה של תווים והדפסת תווים
        for (char j = 'A'; j <= 'A' + i; j++)
        {
            Console.Write($"{j} ");
        }
        Console.WriteLine();
    }
}
{% endhighlight %}

### Pattern 2 שימוש בשתי לולאות פנימיות

**Asterix2**

```
        *
      * *
    * * *
  * * * *
* * * * *
```

{% highlight csharp linenos %}public static void Asterix2()
{
    int rows = 5;
    for (int i = 0; i < rows; i++)
    {
        // לולאה להדפסת רווחים מקדימים
        for (int j = 0; j < 2 * (rows - i) - 1; j++)
        {
            Console.Write(" ");
        }
        // לולאה להדפסת כוכביות
        for (int k = 0; k <= i; k++)
        {
            Console.Write("* ");
        }
        Console.WriteLine();
    }
}
{% endhighlight %}

**Numbers2**

```
        1
      1 2
    1 2 3
  1 2 3 4
1 2 3 4 5
```

<details markdown="1"><summary>פתרון. נסו לשנות את הקוד שבדוגמא הקודמת לפני שאתם פותחים</summary>


{% highlight csharp linenos %}public static void Numbers2()
{
    int rows = 5;
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < rows - i ; j++)
            Console.Write("  "); // שני רווחים

        for (int j = 1; j <= i + 1; j++)
        {   // שוב j-מותר להשתמש ב
            Console.Write($"{j} ");
        }
        Console.WriteLine(); // מעבר שורה
    }
}
{% endhighlight %}


</details>

**Chars2**

```
         A
       A B
     A B C
   A B C D
 A B C D E
```
<details markdown="1"><summary>פתרון. נסו תחילה להשתמש בדוגמאות הקודמות כדי להגיע לתוצאה הרצויה</summary>

{% highlight csharp linenos %}public static void Chars2()
{
    int rows = 5;

    for (int i = 0; i < rows; i++)
    {
        // Print leading spaces for centering
        // Some teachers insist on English only comments
        // Single statement loop can be without block brackets.
        for (int j = 0; j < rows - i; j++)
            Console.Write("  ");

        // הדפסת שורת תווים
        for (char k = 'A'; k <= 'A' + i; k++) // casting -אין צורך ב
        {
            Console.Write($"{k} ");
        }

        Console.WriteLine();
    }
}
{% endhighlight %}

</details>

### Pattern 3

**Asterix3**

```
         *
       * * *
     * * * * *
   * * * * * * *
 * * * * * * * * *
```

---

<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}public static void Asterix3()
{
    int rows = 5;

    // first loop to print all rows
    for (int i = 0; i < rows; i++)
    {

        // Inner loop 1 to print 
        // white spaces for each row
        for (int j = 0; j < rows - i; j++)
            printf("  "); //2 spaces

        // Inner loop 2 to print *
        // for each row
        for (int k = 0; k < 2 * i + 1; k++)
            Console.Write($"* ");

        Console.WriteLine();
    }
}
{% endhighlight %}

</details>

**Numbers3**

```
         1
       1 2 3
     1 2 3 4 5
   1 2 3 4 5 6 7
 1 2 3 4 5 6 7 8 9
```


<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}public static void Numbers3()
{
    int rows = 5;

    // first loop to print all rows
    for (int i = 0; i < rows; i++)
    {

        // Inner loop 1 to print 
        // white spaces for each row
        for (int j = 0; j < rows - i; j++)
            printf("  "); //2 spaces

        // Inner loop 2 to print number
        // for each row.
        // when starting from 1, use <= to get the same

        for (int k = 1; k <= 2 * i + 1; k++)
            Console.Write($"{k} ");

        Console.WriteLine();
    }
}
{% endhighlight %}
</details>


**Chars3**

```
         A
       A B C
     A B C D E
   A B C D E F G
 A B C D E F G H I
```


<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}public static void Chars3()
{
    int rows = 5;

    // first loop to print all rows
    for (int i = 0; i < rows; i++)
    {

        // Inner loop 1 to print 
        // white spaces for each row
        for (int j = 0; j < rows - i; j++)
        {
            printf("  "); //2 spaces
        }

        // Inner loop 2 to print alphabets
        // for each row
        for (char k = 'A'; k < 'A' + 2 * i + 1; k++)
        {
            Console.Write($"{k} ");
        }
        Console.WriteLine();
    }
}
{% endhighlight %}
</details>


התרגילים וה-patterns מבוססים על: [GeeksforGeeks - Pattern Programs in C](https://www.geeksforgeeks.org/c/pattern-programs-in-c/)