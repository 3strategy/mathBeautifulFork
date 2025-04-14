---
layout: page 
title: "פרק 1 - מבוא לשפת C#, הדפסה ומשתנים" 
subtitle: "הדפסה, משתנים, המרות וקלט"
lang: he
---

{: .box-note}
**הערה:** בפרק זה נכיר את שפת C#, סביבת הפיתוח Visual Studio, נלמד על משתנים, קלט, פלט והמרות בין סוגים שונים של משתנים.

## סביבת העבודה (Visual Studio)

סביבת הפיתוח שלנו תהיה Visual Studio, המשמשת לכתיבת קוד בשפת C#.

בשיעורים הראשונים - עד להתקנת התוכנה במחשבים שלכם, נעבוד באתרי C#Online כגון [netfiddle](https://dotnetfiddle.net/) או [programiz](https://www.programiz.com/csharp-programming/online-compiler/)

שלבי יצירת תוכנית ראשונה ב-Visual Studio  - להמשך:

1. פתחו פרויקט חדש מסוג Console App.
2. יוצג לפניכם קוד התוכנית הראשונה:

{% highlight csharp linenos %}namespace HelloWorld 
{ 
    class Program 
    { 
        public static void Main(string[] args) 
        { 
            Console.WriteLine("Hello, World!"); 
        } 
    } 
} 
{% endhighlight %}

הריצו את התוכנית (F5) וראו שהיא מדפיסה:

```
Hello, World!
```
אם אתם בסביבת Online לחצו פשוט על כפתור ההרצה

## הסבר נוסף: יצירת פרוייקט בויזואל סטודיו

כאן סרטון קצרצר המסביר כיצד ליצור פרוייקט חדש. פעמים רבות כל תכנית שלנו תהיה פרוייקט חדש:

{% include youtube.html id="NlFeUFfRkxs" %} 

## משתנים והשמה

משתנה הוא תא בזיכרון המכיל ערך שניתן לשינוי.

דוגמאות להגדרת משתנים בשפת C#:

{% highlight csharp linenos %}
int age = 30; 
double average = 85.5;
string name = "Sara";
{% endhighlight %}

## הדפסה וקלט מהמשתמש

נשתמש בפקודות Console לכתיבה ולקבלת קלט:

{% highlight csharp linenos %}Console.Write("Enter your name: "); // פלט ובו בקשת קלט מהמשתמש
string name = Console.ReadLine(); // קלט מהשמתמש והשמה לתוך המשתנה name

Console.WriteLine("Hello, " + name); // פלט
{% endhighlight %}

אם המשתמש יכתוב "דנה", הפלט יהיה:

```
Enter your name: דנה
Hello, דנה
```
פלט עברי בדרך כלל לא נתמך ב-Console לכן מומלץ לעבוד באנגלית. ניתן להנחות את התלמידים לעבוד פונטי במקרה שאינם מכירים מילה מסויימת באנגלית. בסביבת [אונליין כגון netfiddle](https://dotnetfiddle.net/) ניתן להדפיס עברית
## המרת קלט מטקסט למספר

פקודת `()Console.ReadLine` מחזירה תמיד טקסט. כדי להמיר טקסט למספר, נשתמש ב- `()int.Parse` או `()double.Parse`:

{% highlight csharp linenos %}Console.Write("Enter your age: "); 
int age = int.Parse(Console.ReadLine());

Console.WriteLine("Next year you will be " + (age + 1)); 
{% endhighlight %}

## חישובים והמרות (casting)

לעיתים נדרש להמיר משתנה מסוג אחד לאחר. נשתמש ב-casting:

{% highlight csharp linenos %}int a = 5; 
int b = 2; 
double result = (double)a / b; // 2.5

Console.WriteLine(result); {% endhighlight %}

## טבלת מעקב (דוגמה)

| שורת קוד | משתנה a | משתנה b | משתנה result |
| -------- | ------- | ------- | ------------ |
| הגדרה    | 5       | 2       |              |
| חישוב    | 5       | 2       | 2.5          |
{: .table-en}



{: .box-warning}
**אזהרה:** אם תקלידו קלט שאינו מספרי לפונקציית `int.Parse`, התוכנית תקרוס!

