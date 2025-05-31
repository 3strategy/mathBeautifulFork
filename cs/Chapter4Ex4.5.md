---
layout: page
title: "תרגול 4.5 - לולאות for: גילגול, שלשות, עוקבים"
subtitle: "תרגול מתקדם בשימוש במשתנה עזר בלולאות"
author: גיא סידס
lang: he
---

{: .box-note}
**הערה:** בתרגילים הבאים נדרש לבצע פעולות על נתונים עוקבים במערך (תווים או מספרים). כדי להשוות בין ערכים סמוכים, נשתמש בגִּלְגוּל (שמירת היסטוריה) או בסריקה של שלשות במערך.

## שאלה 4.5.1

כתבו תוכנית הקולטת 30 תווים ובודקת כמה תווים עוקבים יש בקלט.  
(טיפוס תווי הוא טיפוס סדרתי שניתן להשוואה ולבדיקה גדול/קטן – המערכת מבצעת השוואה אוטומטית מול קוד ה- ASCII של התו).

לדוג' עבור 8 התווים הבאים:  
`t, a, d, c, d, c, s, t`

הפלט יהיה:
```
2
```

---

## שאלה 4.5.2

כתבו תוכנית הקולטת 50 מספרים ובודקת כמה שלשות סמוכות בהן המספר האמצעי גדול משני המספרים הסמוכים לו.

לדוג' עבור 8 המספרים הבאים:  
`25, 40, 30, 9, 80, 40, 45, 42`

הפלט יהיה:
```
3
```

<details markdown="1">
<summary>פתרון</summary>

נסרוק כל שלשה סמוכה במערך, ונספור כמה פעמים המספר האמצעי גדול משני המספרים הסמוכים.

{% highlight csharp linenos %}int[] arr = new int[] {25, 40, 30, 9, 80, 40, 45, 42};
int count = 0;

for (int i = 1; i < arr.Length - 1; i++)
{
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])
    {
        count++;
    }
}

Console.WriteLine(count); // פלט: 3
{% endhighlight %}

</details>

---

## שאלה 4.5.3

כתבו תוכנית הקולטת 40 תווים ובודקת כמה שלשות סמוכות בהן האמצעי שונה משני התווים הסמוכים והם שווים ביניהם.

לדוג' עבור 10 התווים הבאים:  
s, **r, t, r, t**, a, b, b, b, a

הפלט יהיה:
```
2
```

---

## שאלה 4.5.4 
עקבו אחרי הקוד הבא עבור צמדי הקלטים
- (90,100),
- (200,300),
- (150,100)

{% highlight csharp linenos %}public static void Main()
{
    // קליטה של זוג ראשון
    Console.WriteLine("Enter two int numbers");
    int previous1 = int.Parse(Console.ReadLine());
    int previous2 = int.Parse(Console.ReadLine());

    for (int i = 0; i < 108; i++)
    {
        Console.WriteLine("Enter two int numbers");
        int current1 = int.Parse(Console.ReadLine());
        int current2 = int.Parse(Console.ReadLine());
        if (current1 + current2 < previous1 + previous2)
        {
            Console.WriteLine("smaller");
        }
        // למה צריך לשים כאן ולא להתאפק לסיבוב הבא?
        previous1 = current1; // החלק החשוב בפעולה
        previous2 = current2;
    }
}
{% endhighlight %}


<details markdown="1"><summary>פתרון</summary>

## טבלת מעקב

| # (שורות)  | previous1 | previous2 | current1 | current2 | i | i<108 | if  | פלט                |
|---------|-----|-----|----|----|-----|-------|-----|-------------------------|
| 1-4     |     |     |    |    | |    |                                        | Enter two int numbers |
| 5,6     | 90  | 110 |    |    |     |                     |           |                   |
| 8       |     |     |    |    | 0  |true  |                     |                   |
| 9       |     |     |    |    |    |      |                                        | Enter two int numbers |
| 11-13   |     |     | 200| 300|  |    |              false              |                       |
| 18-19   | 200 | 300 |    |    |  |    |                                 |                       |
| 8-10    |     |     |    |    |1 | true |                               | Enter two int numbers |
| 11-13   |     |     | 150| 100|  |      |  true                                    |            |
| 15      |     |     |    |    |   |     |                                        |    smaller      |
| 18-19   | 150 | 100 |    |    |   |    |                                 |                       |
| 8-10    |     |     |    |    | 2 | true  |                             | Enter two int numbers      |
| ...     |     |     |    |    |...| ...|                                        | ...                |
| 8       |     |     |    |    |108| false |                                        | ← יציאה מהלולאה   |
|         |     |     |    |    || |                                        | סיום התוכנית      |
{: .table-en}

</details>
---
