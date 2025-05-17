---
layout: page
title: "תנאים וביטויים לוגיים"
subtitle: "תרגול 2.1 תנאים פשוטים"
author: גיא סידס
mathjax: true
lang: he
---
[⬅ מעבר לתרגול 2.2 - תרגילים בתנאים מורכבים](/cs/Chapter2Ex2.2)

## תרגילים 2.1 – תנאים פשוטים

### 2.1.1 בדיקת פלינדרום

**משימה.** כתבו תוכנית ב-C# שקולטת מספר תלת-ספרתי חיובי (`num`) ומדפיצה הודעה אם המספר הוא פלינדרום.

<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}int num = 363;
int units = num % 10;
int hundreds = num / 100;
if (units == hundreds)
{
Console.WriteLine(\$"{num} is a palindrome");
}
else
{
Console.WriteLine(\$"{num} is not a palindrome");
}
{% endhighlight %}

**טבלת מעקב עבור קלט `363`:**

| שורה | `units` | `hundreds` | `units == hundreds` | פלט                    |
| ---- | ------- | ---------- | ------------------- | ---------------------- |
| 1    | –       | –          | –                   | קריאת הקלט             |
| 2    | 3       | –          | –                   | `units = 363 % 10`     |
| 3    | 3       | 3          | –                   | `hundreds = 363 / 100` |
| 4    | 3       | 3          | **true**            | `363 is a palindrome`  |
{: .table-en}

</details>

---

### 2.1.2 בדיקת זוגיות

**משימה.** כתבו תוכנית שקולטת מספר שלם `n` ומדפיצה "even" אם הוא זוגי, אחרת "odd".

<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}int n = 8;
if (n % 2 == 0)
{
Console.WriteLine("even");
}
else
{
Console.WriteLine("odd");
}
{% endhighlight %}

</details>

---

### 2.1.3 השוואת שני מספרים

**משימה.** כתבו תוכנית שבודקת שני שלמים `a` ו־`b` ומדפיצה:

* "a > b"
* "a == b"
* אחרת "a < b"

---

### 2.1.4 מציאת מקסימום

**משימה.** כתבו תוכנית שבהם `a` ו־`b` שלמים. אחל `max = a`, ואם `b > a` קבע `max = b`. לסוף הדפס `max`.

---

### 2.1.5 בדיקת חיוביות

**משימה.** כתבו תוכנית שקולטת מספר `x` ומדפיצה:

* "positive" אם `x > 0`
* "zero" אם `x == 0`
* אחרת "negative"
