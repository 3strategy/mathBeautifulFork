---
layout: page
title: "תנאים וביטויים לוגיים"
subtitle: "תרגול 2.2 תנאים מורכבים"
author: גיא סידס
mathjax: true
lang: he
---

### 2.2.1 שנת גלישת-שעון

**משימה.** כתבו תוכנית שקולטת שנה לועזית `year`. הדפס:

* "leap" אם מעוברת,
* אחרת "common".

<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}bool isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
Console.WriteLine(isLeap ? "leap" : "common");
{% endhighlight %}

</details>

---

### 2.2.2 נקודה בתוך מלבן

**משימה.** קולטים שני מספרים ממשיים `x`, `y`. הדפס "inside" אם (x,y) נמצאים בתוך מלבן 0\<x<10 ו-0\<y<5. אחרת "outside".

---

### 2.2.3 תו חוקי

**משימה.** כתבו תוכנית שקולטת תו `ch`. הדפס:

* "vowel" אם הוא a, e, i, o, u ( או A, E, I, O, U )
* אחרת "consonant"

---

### 2.2.4 שני מתוך שלושה

**משימה.** נתנים שלושה ערכים בוליאניים `p`, `q`, `r`. הדפס:

* "at least two true" אם לפחות שניים בהם true,
* אחרת "fewer than two"

---

### 2.2.5 פלינדרום ומחלקה ב-11

**משימה.** כתבו תוכנית שקולטת מספר תלת-ספרתי `n`. הדפס:

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
