---
layout: post
title: "פרק 3 - המחלקה Math, Random"
subtitle: "חישובים מתמטיים ומספרים אקראיים"
author: גיא סידס
lang: he
---

{: .box-note}
**הערה:** בפרק זה נכיר את השימוש במחלקות Math ו-Random של שפת C#, המאפשרות לנו לבצע חישובים מתמטיים ולהשתמש במספרים אקראיים.

## שימוש במחלקה Math

המחלקה `Math` מאפשרת לבצע חישובים מתמטיים מורכבים באופן פשוט.

דוגמאות נפוצות:

{% highlight csharp linenos %}double result = Math.Pow(2, 3); // חזקה - התוצאה 8
Console.WriteLine(result);

result = Math.Sqrt(16); // שורש ריבועי - התוצאה 4
Console.WriteLine(result);

result = Math.Abs(-10); // ערך מוחלט - התוצאה 10
Console.WriteLine(result);
{% endhighlight %}

## מספרים אקראיים (Random)

נשתמש במחלקה `Random` כדי לייצר מספרים אקראיים.

יצירת מספר אקראי שלם בין 1 ל-10:

{% highlight csharp linenos %}Random rand = new Random();
int number = rand.Next(1, 11); // 1-10
Console.WriteLine(number);
{% endhighlight %}

יצירת מספר אקראי ממשי בין 0 ל-1:

{% highlight csharp linenos %}Random rand = new Random();
double number = rand.NextDouble();
Console.WriteLine(number);
{% endhighlight %}

## דוגמא לשימוש במספרים אקראיים

הדמיית הטלת קובייה:

{% highlight csharp linenos %}Random rand = new Random();
int dice = rand.Next(1, 7); // 1-6
Console.WriteLine("תוצאת הטלת הקובייה: " + dice);
{% endhighlight %}

## טבלת מעקב (דוגמה לשימוש ב-Random)

| שורת קוד | dice | פלט                     |
|-----------|------|-------------------------|
| הגדרה    | 4    |                         |
| פלט      | 4    | תוצאת הטלת הקובייה: 4  |

{: .box-warning}
**אזהרה:** שימו לב שכל פעם שתיצרו מופע חדש של Random (`new Random()`), ייתכן שתקבלו תוצאות דומות אם תיצרו מופעים חדשים במהירות רבה מאוד (לדוגמה בלולאה). מומלץ ליצור מופע אחד ולהשתמש בו לאורך כל התוכנית.

