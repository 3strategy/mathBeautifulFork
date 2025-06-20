---
layout: page
title: "תרגול תנאים ושארית חלוקה"
subtitle: "תרגול 3.2 תנאים מורכבים ושארית חלוקה"
author: גיא סידס
mathjax: true
lang: he
---

### תרגיל 3.2.1 שנה מעוברת

כתבו תוכנית הקולטת שנה לועזית `year`. הדפס:

* "leap" או "Meuberet" אם מעוברת יש להדפיס,
* אחרת "common" או "Normal".

כל שנה המקיימת אחד מהתנאים הבאים היא שנה מעוברת לפי הלוח הגרגוריאני:

* השנה מתחלקת ב-4 אך אינה מתחלקת ב-100
* השנה מתחלקת ב-400.

למשל, 2004 היא שנה מעוברת, אך 1900 אינה שנה מעוברת, משום שהיא מתחלקת ב-100, אך לא ב-400. 2000 היא שנה מעוברת, משום שהיא מתחלקת ב-400.

<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}static void Main(string[] args)
{
    Console.Write("Enter a 4 digit year: ");
    int year = int.Parse(Console.ReadLine());

    bool isLeap = false;

    if (year % 4 == 0)
    {
        if (year % 100 != 0 || year % 400 == 0)
        {
            isLeap = true;
        }
    }

    if (isLeap)
        Console.WriteLine("Meuberet");
    else
        Console.WriteLine("Normal");
}
{% endhighlight %}

**פתרון נוסף מקוצר**

{% highlight csharp linenos %}bool isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
Console.WriteLine(isLeap ? "leap" : "common");  // ternary הערה. בפתרון זה נעשה שימוש בתנאי מקוצר 
{% endhighlight %}

</details>

---

### תרגיל 3.2.2 נקודה בתוך מלבן

קולטים שני מספרים ממשיים `x`, `y`. הדפס "inside" אם (x,y) נמצאים בתוך מלבן  $$0<x<10$$ ו- $$0<y<5$$. אחרת "outside".

---

### תרגיל 3.2.3 תו חוקי. שאלה מעט מעייפת

כתבו תוכנית הקולטת תו `ch`. הדפס:

* "vowel" אם הוא a, e, i, o, u ( או A, E, I, O, U )
* אחרת "consonant"


<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}public static void Main()
{
    Console.Write("Enter a character: ");
    char ch = char.Parse(Console.ReadLine());

    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
        ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
    {
        Console.WriteLine("vowel");
    }
    else
    {
        Console.WriteLine("consonant");
    }
}
{% endhighlight %}


</details>
---

### תרגיל 3.2.4 שני מתוך שלושה

נתונים שלושה ערכים בוליאניים `p`, `q`, `r`. הדפס:

{: .subq}
א. 
    * "at least two true" אם לפחות שניים בהם true,
    * אחרת "fewer than two"

{: .subq}
ב. הגרילו את המספרים הרנדומליים באמצעות `bool n1 = rnd.Next(0,2) == 1;` הדפיסו את המספרים המתקבלים בהגרלות ואת התוצאה, ובדקו שהקוד עובד נכון

---

### תרגיל 3.2.5 פלינדרום ומתחלק ב-11

כתבו תוכנית הקולטת מספר תלת-ספרתי `n`. הדפס:

* "palindrome & div11" אם פלינדרום ומתחלק ב-11
* "palindrome" רק פלינדרום
* "div11" רק מתחלק ב-11
* אחרת "none"

<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}bool isPalindrome = (n / 100 == n % 10);
bool isDiv11 = (n % 11 == 0);
if (isPalindrome && isDiv11)
    Console.WriteLine("palindrome & div11");
else if (isPalindrome)
    Console.WriteLine("palindrome");
else if (isDiv11)
    Console.WriteLine("div11");
else
    Console.WriteLine("none");
{% endhighlight %}

</details>

---

## 3.2.6 סיווג נקודה ברבעי הצירים - תנאים מקוננים

כתבו תוכנית שקולטת שני מספרים ממשיים 
$$x, y$$ ומדפיסה באיזה רבע של מערכת הצירים נמצאת הנקודה שאלו הקואורדינטות שלה. — I, II, III או IV; אם הנקודה נמצאת על ציר כלשהו, יש לציין זאת (למשל “On X-axis”, “On Y-axis” או “Origin”).

---

## 3.2.7 סיווג מספר לפי סימן וזוגיות
כתבו תוכנית שקוראת מספר שלם 
$$n$$ ומדפיסה שתי מילים:

האם $$n$$ חיובי, שלילי או אפס;

האם $$n$$ זוגי או אי-זוגי.
לדוגמה: עבור $$n = -3$$ התוכנית תדפיס “Negative Odd”.

---

## 3.2.8 מיון של שלושה מספרים
כתבו תוכנית הקולטת (או מגרילה) שלושה מספרים שלמים $$a, b, c$$ ומדפיסה אותם בסדר עולה.