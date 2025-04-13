---
layout: page
title: "אלגוריתמים"
subtitle: "תרגול אלגוריתמים בסיסיים"
author: גיא סידס
lang: he
---

## תרגיל 1.2 – חילוף בין ספלים

בבית המלוכה האנגלי שותים שתייה חמה מדי יום בשעה 17:00, תה בספלים המיועדים לתה בלבד, וקפה בספלים המיועדים לקפה בלבד.  
אחד המשרתים התבלבל ומזג בטעות תה בספל של קפה, וקפה בספל של תה.  
פתח אלגוריתם שיעזור למשרת להחליף בין תכולת הספלים.



<details>
<summary>פתרון</summary>
**פתרון מילולי:**  
1. קח כוס ריקה.  
2. העבר את התה הנמצא בספל הקפה אל הכוס הריקה.  
3. העבר את הקפה הנמצא בספל התה אל ספל הקפה.  
4. העבר את התה הנמצא בכוס אל ספל התה.  

{% highlight csharp linenos %}string cupTea = "קפה";
string cupCoffee = "תה";
string emptyCup;

// שלב 1: כוס ריקה
emptyCup = cupCoffee;

// שלב 2: מזוג את הקפה מהתה לספל הקפה
cupCoffee = cupTea;

// שלב 3: מזוג את התה מהכוס הריקה לספל התה
cupTea = emptyCup;

Console.WriteLine("ספל תה מכיל: " + cupTea);
Console.WriteLine("ספל קפה מכיל: " + cupCoffee);
{% endhighlight %}

</details>


## תרגיל 1.3 – חשבון טלפון חודשי

פתחו אלגוריתם המקבל כקלט מספר דקות שיחה ואת סכום התשלומים הקבועים.
מחירה של דקת שיחה: 1.20 ₪.
פלט: סכום כולל לתשלום.



<details> <summary>פתרון</summary>
אלגוריתם מילולי:

קבל כקלט את מספר דקות השיחה לתוך minutes.

קבל את סכום התשלומים הקבועים לתוך payment.

חשב minutes * 1.20 + payment והכנס ל-total.

הצג את total.

{% highlight csharp linenos %}Console.Write("הכנס מספר דקות שיחה: ");
double minutes = double.Parse(Console.ReadLine());

Console.Write("הכנס סכום תשלומים קבועים: ");
double payment = double.Parse(Console.ReadLine());

double total = minutes * 1.20 + payment;

Console.WriteLine("הסכום לתשלום הוא: " + total + " ש\"ח");
{% endhighlight %}

</details>

## תרגיל 3 – שטח ריבוע
פתחו אלגוריתם הקולט אורך צלע של ריבוע, ומציג את שטחו.



<details> <summary>פתרון</summary>

אלגוריתם מילולי:

קבל כקלט מספר לתוך num.

חשב num * num והכנס ל-square.

הצג את square.

{% highlight csharp linenos %}Console.Write("הכנס אורך צלע ריבוע: ");
double num = double.Parse(Console.ReadLine());

double square = num * num;

Console.WriteLine("שטח הריבוע הוא: " + square);
{% endhighlight %}

</details>

## תרגיל 1.4 – נפח תיבה
פתחו אלגוריתם הקולט שלושה מספרים שלמים: אורך, רוחב וגובה של תיבה.
האלגוריתם יחושב וידפיס את נפח התיבה.

<details> <summary>פתרון ב-C#</summary>

{% highlight csharp linenos %}Console.Write("הכנס אורך התיבה: ");
int length = int.Parse(Console.ReadLine());

Console.Write("הכנס רוחב התיבה: ");
int width = int.Parse(Console.ReadLine());

Console.Write("הכנס גובה התיבה: ");
int height = int.Parse(Console.ReadLine());

int volume = length * width * height;

Console.WriteLine("נפח התיבה הוא: " + volume);

{% endhighlight %}
</details>

## תרגיל 1.5 – מחיר מחשב כולל מע״מ
פתחו אלגוריתם הקולט את מחירו של מחשב ומחשב את המחיר כולל מע"מ בשיעור 18%.


<details> <summary>פתרון ב-C#</summary>
אלגוריתם מילולי:

קלוט מספר ממשי לתוך price.

חשב price + price * 0.18 והכנס ל-finalPrice.

הדפס את finalPrice.

{% highlight csharp linenos %}Console.Write("הכנס את מחיר המחשב: ");
double price = double.Parse(Console.ReadLine());

double finalPrice = price + price * 0.18;

Console.WriteLine("המחיר הסופי כולל מע\"מ הוא: " + finalPrice + " ש\"ח");
{% endhighlight %}
</details>