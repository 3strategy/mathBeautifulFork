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
אם אתם בסביבת Online לחצו פשוט על כפתור ההרצה ▶

## התקנת ויזואל סטודיו 2022
סרטון הדרכה קצר, נח לצפייה בטלפון, צעד אחר צעד להתקנת סביבת העבודה.
{% include youtube.html id="yhBm8yLmIkM" %} 


## הסבר נוסף: יצירת פרוייקט בויזואל סטודיו
כאן סרטון קצרצר המסביר כיצד ליצור פרוייקט חדש. פעמים רבות כל תכנית שלנו תהיה פרוייקט חדש:
{% include youtube.html id="NlFeUFfRkxs" %} 


## משתנים והשמה
משתנה הוא תא בזיכרון המכיל ערך שניתן לשינוי.

דוגמאות להגדרת משתנים בשפת C#:

{% highlight csharp linenos %}
int age = 30; // משתנה המכיל מספר שלם
double average = 85.5; // משתנה המכיל מספר ממשי
string name = "Sara"; // משתנה המכיל מחרוזת
{% endhighlight %}


## הכרזה על משתנה לעומת השמה
ניתן להפריד בין שלב הכרזת המשתנה לבין שלב השמת הערך. לפעמים נכריז עליו ואז ניתן לו ערך בשלב מאוחר יותר.

{% highlight csharp linenos %}
int age; // age הכרזה על משתנה בשם
age = 30; // השמה של ערך לתוך המשתנה
{% endhighlight %}


## הכרזה על כמה משתנים בשורה אחת
ניתן להכריז על כמה משתנים מאותו טיפוס באותה שורה, ואפשר גם להשוות להם ערכים באותה פעולה.

{% highlight csharp linenos %}
int a = 5, b = 10, c = 0; // int הכרזה והשמה לשלושה משתנים מסוג
double x, y, z; // רק הכרזה
{% endhighlight %}

{: .box-warning}
**אזהרה:** כיוון ההשמה הוא מימין לשמאל. 
שימו לב: כשאנו כותבים `;x = 5`, זה אומר "שים בתוך x את הערך 5" — כלומר הערך נמצא מימין, והמשתנה שאליו משייכים נמצא משמאל. זהו כיוון הפוך מההרגל בעברית, ולכן זו טעות נפוצה בקרב תלמידים. במיוחד במקרים בהם ההשמה היא בין משתנים כלומר: `;a = b`


## טיפוסי משתנים איתם נעבוד
הטבלה הבאה מציגה את הטיפוסים המרכזיים שנשתמש בהם בקורס:

| טיפוס        | הסבר                                          |
|--------------|-----------------------------------------------|
| `int`        | מספרים שלמים (ללא נקודה עשרונית)              |
| `double`     | מספרים ממשיים (כוללים נקודה עשרונית)         |
| `char`       | תו יחיד (למשל `'A'`, `'%'`, `'9'`)           |
| `string`     | מחרוזת טקסט (רצף תווים)                      |
| `bool`       | ערך בוליאני: אמת או שקר (`true` או `false`)  |
{: .table-en}

## טיפוסים נוספים שלא נלמד
יש בשפת C# עוד סוגים רבים של משתנים, אך הם אינם חלק מהתוכנית הלימודית שלנו:

- `short`, `byte`, `sbyte`
- `float`, `decimal`
- `long`, `ulong`
- `BigInteger`
- ועוד רבים נוספים...

{: .box-success}
הקורס שלנו מתמקד **בחשיבה אלגוריתמית** ולא במגוון הרחב של טיפוסים שקיימים בשפה מסוימת. אנו נתרגל את העקרונות בעזרת טיפוסים בסיסיים בלבד.


## הדפסה וקלט מהמשתמש
נשתמש בפקודות Console לכתיבה ולקבלת קלט:

{% highlight csharp linenos %}Console.Write("Enter your name: "); // פלט ובו בקשת קלט מהמשתמש
string name = Console.ReadLine(); // name קלט מהשמתמש והשמה לתוך המשתנה

Console.WriteLine("Hello, " + name); // פלט
{% endhighlight %}

אם המשתמש יכתוב "Dan", הפלט יהיה:

```
Enter your name: Dan
Hello, Dan
```
פלט עברי בדרך כלל לא נתמך ב-Console לכן מומלץ לעבוד באנגלית. ניתן להנחות את התלמידים לעבוד פונטי במקרה שאינם מכירים מילה מסויימת באנגלית. בסביבת [אונליין כגון netfiddle](https://dotnetfiddle.net/) ניתן להדפיס עברית


## המרת קלט מטקסט למספר
פקודת `()Console.ReadLine` מחזירה תמיד טקסט. כדי להמיר טקסט למספר, נשתמש ב- `()int.Parse` או `()double.Parse`:

{% highlight csharp linenos %}Console.Write("Enter your age: "); 
int age = int.Parse(Console.ReadLine()); // `int` דוגמא לקלט והמרה שלו לתוך משתנה מטיפוס שלם

Console.WriteLine("Next year you will be " + (age + 1)); // הסוגריים מאפשרים לבצע חישוב לפני ההדפסה
Console.WriteLine("Next year you will NOT be: " + age + 1); // ללא סוגריים נקבל שרשור מחרוזות
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



{: .box-error}
**אזהרה:** אם תקלידו קלט שאינו מספרי לפונקציית `int.Parse`, התוכנית תקרוס!

