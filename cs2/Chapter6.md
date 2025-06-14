---
layout: page
title: "פרק 6 - לולאות מקוננות"
subtitle: "ביצוע חוזר בתוך ביצוע חוזר"
tags: קינון, כוכביות, patterns
author: גיא סידס
lang: he
---





# פרק 6: לולאות מקוננות

{: .box-note} **הגדרה: קינון**
קינון (Nested Loops) הוא מבנה תכנות שבו לולאה אחת נמצאת בתוך גוף של לולאה אחרת, כך שהלולאה הפנימית מתבצעת במלואה בכל איטרציה של הלולאה החיצונית. 

אין כאן משהו חדש מפני שאנו משתמשים במבנים שכבר למדנו, ובכל זאת זה עיקרון מורכב וחשוב שצריך לתרגל לעומק. הרעיון אינו ממומש רק באמצעות for בתוך for אלא כל שילוב בין סוגי הלולאות כולל while בתוך for, for בתוך while וגם שילוב של foreach שעדיין לא למדנו, ויש שבוחרים לא ללמד בשלב היסודות.
{: .box-success}

### דוגמה 1: טבלת כפל מ-0 עד 10



<details markdown="1"><summary>להלן קוד המציג את טבלת הכפל מ-0×0 עד 10×10:</summary>
{% highlight csharp linenos %} public static void MultiplicationTable() { for (int i = 0; i <= 10; i++) { for (int j = 0; j <= 10; j++) { Console.Write("{0,4}", i \* j); } Console.WriteLine(); } } {% endhighlight %}

</details>

### דוגמה 2: מלבן של כוכביות


<details markdown="1"><summary>להלן קוד המדפיס מלבן של כוכביות בגודל 5×10:</summary>


{% highlight csharp linenos %} public static void StarRectangle() { int rows = 5; int cols = 10; for (int i = 0; i < rows; i++) { for (int j = 0; j < cols; j++) { Console.Write("\* "); } Console.WriteLine(); } } {% endhighlight %}


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

{% highlight csharp linenos %} public static void Asterix1() { for (int i = 0; i < 5; i++) { for (int j = 0; j <= i; j++) { Console.Write("* "); } Console.WriteLine(); } } {% endhighlight %}



**Numbers1**

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```


<details markdown="1"><summary>פתרון. נסו לשנות את הקוד שבדוגמא הקודמת לפני שאתם מציצים</summary>
{% highlight csharp linenos %} public static void Numbers1() { for (int i = 0; i < 5; i++) { for (int j = 0; j <= i; j++) { Console.Write(\$"{j + 1} "); } Console.WriteLine(); } } {% endhighlight %}

</details>

**Chars1**

```
A
A B
A B C
A B C D
A B C D E
```

{% highlight csharp linenos %} public static void Chars1() { int rows = 5; for (int i = 0; i < rows; i++) { for (char j = 'A'; j <= (char)('A' + i); j++) { Console.Write(\$"{j} "); } Console.WriteLine(); } } {% endhighlight %}

### Pattern 2

**Asterix2**

```
        *
      * *
    * * *
  * * * *
* * * * *
```

{% highlight csharp linenos %} public static void Asterix2() { int rows = 5; for (int i = 0; i < rows; i++) { for (int j = 0; j < 2 * (rows - i) - 1; j++) { Console.Write(" "); } for (int k = 0; k <= i; k++) { Console.Write("* "); } Console.WriteLine(); } } {% endhighlight %}

**Numbers2**

```
        1
      1 2
    1 2 3
  1 2 3 4
1 2 3 4 5
```

{% highlight csharp linenos %} public static void Numbers2() { int rows = 5; for (int i = 0; i < rows; i++) { for (int j = 0; j < 2 * (rows - i) - 1; j++) { Console.Write(" "); } for (int k = 1; k <= i + 1; k++) { Console.Write($"{k} "); } Console.WriteLine(); } } {% endhighlight %}

**Chars2**

```
         A
       A B
     A B C
   A B C D
 A B C D E
```

{% highlight csharp linenos %} public static void Chars2() { int rows = 5; for (int i = 0; i < rows; i++) { for (int j = 0; j < 2 * (rows - i) - 1; j++) { Console.Write(" "); } for (char k = 'A'; k <= (char)('A' + i); k++) { Console.Write($"{k} "); } Console.WriteLine(); } } {% endhighlight %}

### Pattern 3

**Asterix3**

```
     *
    * * *
   * * * * *
  * * * * * * *
 * * * * * * * * *
```

{% highlight csharp linenos %} public static void Asterix3() { int rows = 5; for (int i = 0; i < rows; i++) { for (int j = 0; j < rows - i - 1; j++) { Console.Write("  "); } for (int k = 0; k < 2 \* i + 1; k++) { Console.Write("\* "); } Console.WriteLine(); } } {% endhighlight %}

**Numbers3**

```
         1
       1 2 3
     1 2 3 4 5
   1 2 3 4 5 6 7
 1 2 3 4 5 6 7 8 9
```

{% highlight csharp linenos %} public static void Numbers3() { int rows = 5; for (int i = 0; i < rows; i++) { for (int j = 0; j < 2 \* (rows - i) - 1; j++) { Console.Write(" "); } for (int k = 1; k < 1 + 2 \* i + 1; k++) { Console.Write(\$"{k} "); } Console.WriteLine(); } } {% endhighlight %}

**Chars3**

```
         A
       A B C
     A B C D E
   A B C D E F G
 A B C D E F G H I
```

{% highlight csharp linenos %} public static void Chars3() { int rows = 5; for (int i = 0; i < rows; i++) { for (int j = 0; j < 2 \* (rows - i) - 1; j++) { Console.Write(" "); } for (char k = 'A'; k < (char)('A' + 2 \* i + 1); k++) { Console.Write(\$"{k} "); } Console.WriteLine(); } } {% endhighlight %}



התרגילים וה-patterns מבוססים על: [GeeksforGeeks - Pattern Programs in C](https://www.geeksforgeeks.org/c/pattern-programs-in-c/)