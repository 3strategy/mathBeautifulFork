---
layout: page 
title: "פרק 1 - מבוא לשפת #C, הדפסה ומשתנים" 
subtitle: "התקנת הסביבה, הדפסה, משתנים, המרות וקלט"
lang: he
---
<!-- https://chatgpt.com/c/67f0f869-af10-800e-8479-c8fd3873432c -->



בפרק זה נכיר את שפת C#, סביבת הפיתוח Visual Studio, נלמד על משתנים, קלט, פלט והמרות בין סוגים שונים של משתנים.
{: .box-note}

<details markdown="1">
<summary>רישום למצפן ולקמפוס</summary>

[רישום למצפן. למורים שעדיין לא נרשמו](https://mpm.education.gov.il/rishum/mobile/rishumOvedOraa/0/homePage)

[קלאסרום של גיא](https://classroom.google.com/c/NzY2NTYyODk0OTA5?cjc=ga6rbvoa)

[קישור לרישום לקמפוס](https://campus.gov.il/)

[קישור לקורס יסודות בקמפוס](https://courses.campus.gov.il/courses/course-v1:MoE+EDU_Matric_ComputerScienceA_HE+2023_1/course/)

</details>

## סביבת העבודה (Visual Studio)

סביבת הפיתוח שלנו תהיה Visual Studio 2022, המשמשת לכתיבת קוד בשפת C#. 
[כנסו לקישור והתקינו את גרסת community](https://visualstudio.microsoft.com/vs/community/)
{: .box-success}

שימו לב: הקישור הוא **לגרסת ה-Community**. בכל גרסה אחרת תתקעו בבעיית רישוי לאחר מספר שבועות
{: .box-error}

## התקנת ויז'ואל סטודיו 2022 Community

**לפניכם סרטון הדרכה קצר, מותאם לצפיה מטלפון, צעד אחר צעד להתקנת סביבת העבודה.**
{% include youtube.html id="yhBm8yLmIkM" %} 


{: .box-note}
בשיעורים הראשונים - עד להתקנת התוכנה במחשבים שלכם, נעבוד באתרי C#Online כגון 
* [C#מיקרוסופט אינטרקטיבי ללא קלט](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/hello-world?tutorial-step=3#code-try-0), 
* [netfiddle](https://dotnetfiddle.net/),  
* [programiz](https://www.programiz.com/csharp-programming/online-compiler/), 
* [onecompiler](https://onecompiler.com/csharp), 
* [tutorialspoint](https://www.tutorialspoint.com/compile_csharp_online.php), 



## שלבי יצירת תוכנית חדשה ב-Visual Studio 202x:
1. פתחו פרויקט חדש מסוג Console App.
2. יוצג לפניכם קוד התוכנית הבסיסית:

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

הריצו את התוכנית בלחיצה על מקש F5 או ⏵, וראו שהיא מדפיסה:

```
Hello, World!
```
אם אתם בסביבת Online לחצו פשוט על כפתור ההרצה ▶


## הסבר נוסף: יצירת פרוייקט בויז'ואל סטדיו 202x
לפניכם סרטון הסבר על יצירת פרוייקט חדש. פעמים רבות כל תכנית שלנו תהיה פרוייקט חדש ולכן כדאי לתת שם משמעותי באנגלית לפרוייקט:
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
ניתן להכריז על כמה משתנים מאותו טיפוס באותה שורה, ואפשר גם לשים בהם ערכים באותה פקודה.

{% highlight csharp linenos %}
int a = 5, b = 10, c = 0; // int הכרזה והשמה לשלושה משתנים מסוג
double x, y, z; // הכרזה בלבד
{% endhighlight %}

{: .box-warning}
**אזהרה:** כיוון ההשמה הוא מימין לשמאל. 
שימו לב: כשאנו כותבים `;x = 5`, זה אומר "שים בתוך x את הערך 5" — כלומר הערך נמצא מימין, והמשתנה שאליו משייכים נמצא משמאל. זהו כיוון הפוך מההרגל בעברית, ולכן זו טעות נפוצה בקרב תלמידים במיוחד במקרים בהם ההשמה היא בין משתנים, כלומר: `;a = b`


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


פלט עברי בדרך כלל לא נתמך ב-Console לכן מומלץ לעבוד באנגלית. 
{: .box-warning}



## המרת קלט מטקסט למספר
פקודת `()Console.ReadLine` מחזירה תמיד טקסט. כדי להמיר טקסט למספר, נשתמש ב- `()int.Parse` או `()double.Parse`:

{% highlight csharp linenos %}Console.Write("Enter your age: "); 
int age = int.Parse(Console.ReadLine()); // `int` דוגמא לקלט והמרה שלו לתוך משתנה מטיפוס שלם

Console.WriteLine("Next year you will be " + (age + 1)); // הסוגריים מאפשרים לבצע חישוב לפני ההדפסה
Console.WriteLine("Next year you will NOT be: " + age + 1); // ללא סוגריים נקבל שרשור מחרוזות
{% endhighlight %}


{: .box-success}
קיימות שיטות שונות לקריאת קלט מהמשתמש, [ותכנית הלימודים](https://meyda.education.gov.il/files/CSIT/CS_1-2-4_ver_2-63.pdf#page=56) אינה מתייחסת אליהן באופן ספציפי. בבחינות הבגרות, בכל מקום שיהיה צורך בביצוע פעולת קלט, הצורך ימומש ויתועד כדלקמן:
```קריאה לפעולת קלט שקוראת ומחזירה ערך מסוג int x = ...// int  ```
**בחינות נערכות בכתב יד עם חומר פתוח מודפס.**


{: .box-error}
**אזהרה:** אם תקלידו קלט שאינו מספרי לפונקציית `int.Parse`, התוכנית תקרוס!

{: .box-note}
איננו מלמדים פונקציות המרה בטוחות כגון `int.TryParse`


## חישובים והמרות (casting)
לעיתים נדרש להמיר משתנה מסוג אחד לאחר. נשתמש ב-casting:

{% highlight csharp linenos %}int a = 5; 
int b = 2; 
double result = (double)a / b; // 2.5

Console.WriteLine(result); {% endhighlight %}




## אופרטורים אריתמטיים ##

| אופרטור | סוג האופרטור       | תיאור                                      | דוגמה בקוד                       |
|---------|--------------------|---------------------------------------------|----------------------------------|
| `+`     | אריתמטי            | חיבור                                      | `int c = a + b;`                 |
| `-`     | אריתמטי            | חיסור                                       | `int d = a - b;`                 |
| `*`     | אריתמטי            | כפל                                        | `int e = a * b;`                 |
| `/`     | אריתמטי            | חילוק                                      | `double f = a / (double)b;`      |
| `%`     | אריתמטי            | שארית חלוקה                               | `int r = a % b;`                 |
{: .table-en}


## אופרטורים מיוחדים ##

| אופרטור | תפקיד                                                | דוגמא לשימוש מקוצר   | פעולת השמה מקבילה       |
|---------|-------------------------------------------------------|----------------------|--------------------------|
| `++`    | קידום ערך המשתנה ב-1                                 | `mone++`             | `mone = mone + 1;`       |
| `--`    | הקטנת ערך המשתנה ב-1                                | `mone--`             | `mone = mone - 1;`       |
| `+=`    | הגדלת ערך המשתנה בגודל המתואר באגף הימני          | `price += 5;`        | `price = price + 5;`     |
| `-=`    | הקטנת ערך המשתנה בגודל המתואר באגף הימני         | `price -= 9;`        | `price = price - 9;`     |
| `*=`    | הכפלת ערך המשתנה בגודל המתואר באגף הימני         | `price *= 1.17;`     | `price = price * 1.17;`  |
| `/=`    | חילוק ערך המשתנה בגודל המתואר באגף הימני          | `sum /= 5;`          | `sum = sum / 5;`         |
{: .table-en}



### מוכן.ה לאתגר?

אם סיימת לקרוא והכל ברור, זה הזמן ליישם את הידע שלך בתרגול מותאם.

[⬅ עבור לתרגול 1 - משתנים קלט והשמה](/cs/Chapter1Ex1.1)

