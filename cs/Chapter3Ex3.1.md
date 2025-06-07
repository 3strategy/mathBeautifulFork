---
layout: page
title: "תנאים וביטויים לוגיים"
subtitle: "תרגול תרגיל 3.1 תנאים פשוטים"
author: גיא סידס
mathjax: true
lang: he
---
[⬅ מעבר לתרגול 3.2 - תרגילים בתנאים מורכבים ושארית חלוקה](/cs/Chapter3Ex3.2)

[⬅ מעבר לתרגול מעבדה תחילה - תמר פז - שארית חלוקה](https://cse.net.technion.ac.il/files/2023/09/l3-cs-cond-cs.pdf){:target="_blank"}

## תרגיל 3.1.1 בדיקת פלינדרום
התרגיל מופיע בפרק 3
[⬅ חזרה לפרק 3 תנאים](/cs/Chapter3)


---

### תרגיל 3.1.2 בדיקת זוגיות

כתבו תוכנית הקולטת מספר שלם `n` ומדפיצה "even" אם הוא זוגי, אחרת "odd".

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

### תרגיל 3.1.3 השוואת שני מספרים

כתבו תוכנית שבודקת שני שלמים `a` ו־`b` ומדפיצה:

* "a > b"
* "a == b"
* אחרת "a < b"

---

### תרגיל 3.1.4 מציאת מקסימום

כתבו תוכנית שבהם `a` ו־`b` שלמים. אתחלו `max = a`, ואם `b > a` קבע `max = b`. לבסוף הדפיסו `max`.

---

### תרגיל 3.1.5 בדיקת חיוביות

כתבו תוכנית הקולטת מספר `x` ומדפיסה:

* "positive" אם `x > 0`
* "zero" אם `x == 0`
* אחרת "negative"

[⬅ מעבר לתרגול 3.2 - תרגילים בתנאים מורכבים](/cs/Chapter3Ex3.2)