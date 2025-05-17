---
layout: page
title: "תנאים וביטויים לוגיים"
subtitle: "תרגול תרגיל 2.1 תנאים פשוטים"
author: גיא סידס
mathjax: true
lang: he
---
[⬅ מעבר לתרגול 2.2 - תרגילים בתנאים מורכבים](/cs/Chapter2Ex2.2)


### תרגיל 2.1.1 בדיקת פלינדרום

כתבו תוכנית ב-C# שקולטת מספר תלת-ספרתי חיובי (`num`) ומדפיצה הודעה אם המספר הוא פלינדרום.

<details markdown="1"><summary>פתרון</summary>

{% highlight csharp linenos %}Console.Write("Enter a 3 digit number: ");
int num = int.Parse(Console.ReadLine()); // הניחו לצורך מעקב שנקלט המספר 363
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

| שורה | `num` | `units` | `hundreds` | `units == hundreds` | פלט                    |
| ---- | ---- | ------- | ---------- | ------------------- | ---------------------- |
| 2  |363  | –       | –          | –                   | קריאת הקלט             |
| 3  |363  | 3       | –          | –                   | `units = 363 % 10`     |
| 4  |363  | 3       | 3          | –                   | `hundreds = 363 / 100` |
| 5  |363  | 3       | 3          | **true**            | `363 is a palindrome`  |
{: .table-en}

</details>

---

### תרגיל 2.1.2 בדיקת זוגיות

כתבו תוכנית שקולטת מספר שלם `n` ומדפיצה "even" אם הוא זוגי, אחרת "odd".

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

### תרגיל 2.1.3 השוואת שני מספרים

כתבו תוכנית שבודקת שני שלמים `a` ו־`b` ומדפיצה:

* "a > b"
* "a == b"
* אחרת "a < b"

---

### תרגיל 2.1.4 מציאת מקסימום

כתבו תוכנית שבהם `a` ו־`b` שלמים. אתחלו `max = a`, ואם `b > a` קבע `max = b`. לבסוף הדפיסו `max`.

---

### תרגיל 2.1.5 בדיקת חיוביות

כתבו תוכנית הקולטת מספר `x` ומדפיסה:

* "positive" אם `x > 0`
* "zero" אם `x == 0`
* אחרת "negative"
