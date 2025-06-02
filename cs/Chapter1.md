---
layout: page 
title: "פרק 1 - מבוא לשפת #C, הדפסה ומשתנים" 
subtitle: "התקנת הסביבה, הדפסה, משתנים, המרות וקלט"
tags: [התקנה, קמפוס, מצפן, משתנים, הדפסה, קלט, המרות, חישובים, חלוקה בשלמים, אופרטורים, שמות משתנים, קונבנציות, קלאסרום]
mathjax: true
lang: he
---
<!-- https://chatgpt.com/c/67f0f869-af10-800e-8479-c8fd3873432c -->



בפרק זה נכיר את שפת C#, סביבת הפיתוח Visual Studio, נלמד על משתנים, קלט, פלט והמרות בין סוגים שונים של משתנים.
{: .box-note}

<details markdown="1">
<summary>מינהלות - רישום למצפן ולקמפוס</summary>

[רישום למצפן. למורים שעדיין לא נרשמו](https://mpm.education.gov.il/rishum/mobile/rishumOvedOraa/0/homePage){:target="_blank"}

[קלאסרום של גיא](https://classroom.google.com/c/NzY2NTYyODk0OTA5?cjc=ga6rbvoa){:target="_blank"}

[קישור לרישום לקמפוס](https://campus.gov.il/){:target="_blank"}

[קישור לקורס יסודות בקמפוס](https://courses.campus.gov.il/courses/course-v1:MoE+EDU_Matric_ComputerScienceA_HE+2023_1/course/){:target="_blank"}

</details>


<details markdown="1"><summary>התקנה ועבודה ב-VS2022</summary>

## סביבת העבודה (Visual Studio)
התקינו את התוכנה **בזמנכם החופשי.** אני אוכל לעזור ל-3-4 שרוצים עזרה ומעדיפים להתחיל התקנה במהלך השיעור.

סביבת הפיתוח שלנו תהיה Visual Studio 2022, המשמשת לכתיבת קוד בשפת C#. 
[כנסו לקישור והתקינו את גרסת community](https://visualstudio.microsoft.com/vs/community/){:target="_blank"}
{: .box-success}

שימו לב: הקישור הוא **לגרסת ה-Community**. בכל גרסה אחרת תתקעו בבעיית רישוי לאחר מספר שבועות
{: .box-error}

## התקנת ויז'ואל סטודיו 2022 Community

**לפניכם סרטון הדרכה קצר, מותאם לצפיה מטלפון, צעד אחר צעד להתקנת סביבת העבודה.**
{% include youtube.html id="yhBm8yLmIkM" %} 

## שלבי יצירת תוכנית חדשה ב-Visual Studio 2022:
1. פתחו פרויקט חדש מסוג Console App.
2. יוצג לפניכם קוד התוכנית הבסיסית:

{% highlight csharp linenos %}namespace ConsoleApp1 
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


## הסבר נוסף: יצירת פרוייקט בויז'ואל סטודיו 2022
לפניכם סרטון הסבר על יצירת פרוייקט חדש. פעמים רבות כל תכנית שלנו תהיה פרוייקט חדש ולכן כדאי לתת שם משמעותי באנגלית לפרוייקט:
{% include youtube.html id="NlFeUFfRkxs" %} 


</details>

## סביבות Online

{: .box-note}
בשיעור הראשון, עד להתקנת VS2022 במחשבים שלכם, נעבוד בסביבות Online. האתר המומלץ ל-C# נמצא [**בקישור הבא: netfiddle.**](https://dotnetfiddle.net/){:target="_blank"}. יש מורים שמעדיפים ללמד רק בסביבות Online.

<details><summary>סביבות נוספות</summary>  
* [onecompiler קלט מוזר](https://onecompiler.com/csharp), 
* [C#מיקרוסופט אינטרקטיבי ללא קלט](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/hello-world?tutorial-step=3#code-try-0), 
* [tutorialspoint](https://www.tutorialspoint.com/compile_csharp_online.php), 
* [programiz ללא קלט ולא מגיב](https://www.programiz.com/csharp-programming/online-compiler/), 
</details>

## תכנית ראשונה
1. **כנסו לאתר** [netfiddle](https://dotnetfiddle.net/){:target="_blank"}  והריצו את התוכנית הראשונה:
    {% highlight csharp linenos %}public class Program
    {
        public static void Main()
        {
            Console.WriteLine("Hello World");
        }
    }
    {% endhighlight %}

2. לחצו פשוט על כפתור ההרצה ▶. ב-[**netfiddle**](https://dotnetfiddle.net/){:target="_blank"} וב-VS עובד גם הכפתור **F5**.

2. נסו וגלו כי ניתן לרשום רק נקודה אחרי המילה Console ולהשלים את הכתיבה על ידי בחירה (מופיעה רשימה שלמה של פקודות ותכונות איתן נוכל לעבוד). לא כולן עובדות בסביבות אונליין. נסו להוסיף שורה ולהדפיס את השם שלכם מתחת לכיתוב `Hello World`.

## משתנים והשמה
משתנה הוא תא בזיכרון המכיל ערך הניתן לשינוי.

דוגמאות להגדרת משתנים בשפת C#:

```csharp
int age = 30; // משתנה המכיל מספר שלם
double average = 85.5; // משתנה המכיל מספר ממשי
string name = "Sara"; // משתנה המכיל מחרוזת
```

בשונה מפייתון חובה להכריז מראש על הטיפוס של כל משתנה. ולא ניתן לשנות את הטיפוס
{: .box-success}

## הכרזה על משתנה לעומת השמה
ניתן להפריד בין שלב הכרזת המשתנה לבין שלב השמת הערך. לפעמים נכריז עליו ואז ניתן לו ערך בשלב מאוחר יותר.

```csharp
int age; // age הכרזה על משתנה בשם
age = 30; // השמה של ערך לתוך המשתנה
```


## הכרזה על כמה משתנים בשורה אחת
ניתן להכריז על כמה משתנים מאותו טיפוס באותה שורה, ואפשר גם לשים בהם ערכים באותה פקודה.

```csharp
int a = 5, b = 10, c = 0; // int הכרזה והשמה לשלושה משתנים מסוג
double x, y, z; // הכרזה בלבד
```

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



{: .box-success}
שמות משתנים תמיד יתחילו באות קטנה. כל מילה חדשה, באות גדולה. למשל `string firstName`. בדומה להרבה שפות השפה היא case sensitive (כלומר יש התייחסות לאותיות קטנות וגדולות guy שונה מ- guY).

## הדפסה וקלט מהמשתמש
נשתמש בפקודות Console לכתיבה ולקבלת קלט:

```csharp 
Console.Write("Enter your name: "); // פלט ובו בקשת קלט מהמשתמש
string name = Console.ReadLine(); // name קלט מהשמתמש והשמה לתוך המשתנה

Console.WriteLine("Hello, " + name); // פלט כולל מעבר שורה
```

אם המשתמש יכתוב "Dan", הפלט יהיה:

```
Enter your name: Dan
Hello, Dan
```



פלט עברי בדרך כלל לא נתמך ב-Console לכן מומלץ לעבוד באנגלית. 
{: .box-warning}



## המרת קלט מטקסט למספר
פקודת `()Console.ReadLine` מחזירה תמיד מחרוזת. כדי להמיר מחרוזת למספר, נשתמש ב- `()int.Parse` או `()double.Parse`:

{% highlight csharp linenos %}Console.Write("Enter your age: "); 
// `int` דוגמא לקלט והמרה שלו לתוך משתנה מטיפוס שלם
int age = int.Parse(Console.ReadLine()); 

// הסוגריים מאפשרים לבצע חישוב לפני ההדפסה
Console.WriteLine("Next year you will be " + (age + 1)); 
// ללא סוגריים נקבל שרשור מחרוזות
Console.WriteLine("Next year you will NOT be: " + age + 1); 
{% endhighlight %}


## חלוקה בשלמים
חלוקת שלם בשלם תתפרש תמיד כפעולת חלוקה בשלמים.

מספר_שלם / מספר_שלם, למשל:

$$10 / 3 = 3$$

כאשר המחלק או המחולק מטיפוס ממשי, טיפוס הערך המוחזר (התוצאה) הוא ממשי.

$$13 / 5 = 2\\
13.0 / 5 = 2.6\\
13 / 5.0 = 2.6$$



## חישובים והמרות (casting)
לעיתים נדרש להמיר משתנה מסוג אחד לאחר. נשתמש ב-**casting**:

{% highlight csharp linenos %}int a = 5;
int b = 2;
double result = (double)a / b; // 2.5
double result2 = a / b; // 2
Console.WriteLine(result);
Console.WriteLine(result2); {% endhighlight %}




## אופרטורים אריתמטיים ##

| אופרטור | סוג האופרטור       | תיאור                                      | דוגמה בקוד                       |
|---------|--------------------|---------------------------------------------|----------------------------------|
| `+`     | אריתמטי            | חיבור                                      | `int c = a + b;`                 |
| `-`     | אריתמטי            | חיסור                                       | `int d = a - b;`                 |
| `*`     | אריתמטי            | כפל                                        | `int e = a * b;`                 |
| `/`     | אריתמטי            | חילוק                                      | `double f = a / (double)b;`      |
| `%`     | אריתמטי            | שארית חלוקה                               | `int r = a % b;`                 |
{: .table-en}


<details markdown="1">
<summary>הרחבות - אופרטורים מיוחדים, בקשת קלט במהלך בחינה, שגיאות</summary>

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


{: .box-success}
קיימות שיטות שונות לקריאת קלט מהמשתמש, [ותכנית הלימודים](https://meyda.education.gov.il/files/CSIT/CS_1-2-4_ver_2-63.pdf#page=56) אינה מתייחסת אליהן באופן ספציפי. בבחינות הבגרות, בכל מקום שיהיה צורך בביצוע פעולת קלט, הצורך ימומש ויתועד כדלקמן:
```קריאה לפעולת קלט שקוראת ומדפיסה ערך מסוג int x = ...// int  ```  או, בקצרה ```קלוט מספר שלם = //  int n ```
**בחינות נערכות בכתב יד עם חומר פתוח מודפס.**


{: .box-error}
**אזהרה:** אם תקלידו קלט שאינו מספרי לפונקציית `int.Parse`, התוכנית תקרוס!

{: .box-note}
איננו מלמדים פונקציות המרה בטוחות כגון `int.TryParse`, ואיננו מלמדים לכידת שגיאות `try catch`

## על ההבדלים בין C# ל- JAVA:
[קישור לעמוד ההבדלים בקמפוס](https://app.campus.gov.il/learning/course/course-v1:MoE+EDU_Matric_ComputerScienceA_HE+2023_1/block-v1:MoE+EDU_Matric_ComputerScienceA_HE+2023_1+type@sequential+block@406b8c0a7da64bdaa85116e8b42c3811/block-v1:MoE+EDU_Matric_ComputerScienceA_HE+2023_1+type@vertical+block@659fd534e88041169d768f5f21c5876d){:target="_blank"}

</details>

<details markdown="1"><summary>הרחבה לגבי שמות משתנים</summary>
## ❌ תווים אסורים בשמות משתנים

**תווים אסורים** בשמות משתנים

```
! @ # $ % ^ & * ( ) - + = ~ ` [ ] { } \ | ; : ' " , . < > / ?
```

* **רווחים** אסורים
* **ספרות (0-9)** לא יכולות להופיע **כתו ראשון**.

---

## ✅ שמות משתנים חוקיים ב-C\#

```csharp
int myVar;
int _index; // משמש לסוגים מיוחדים לפי קונבנציה
int count2;
int ümlaut; // די גרוע
int @int;  // @ שם שהוא מילה שמורה, באמצעות מעקף @ ממש ממש רע
```

כלומר, הקוד שלהלן חוקי, אבל ממש ממש אסור לכתוב ככה:
```csharp
int דירבלק = 7;
Console.WriteLine(דירבלק);
```

---

## ❌ שמות משתנים לא חוקיים ב-C\#

```csharp
int 1stValue;   // Starts with a digit ❌
int my-var;     // Hyphens are not allowed ❌
int class;      // "class" is a reserved keyword ❌
int full name;  // Space not allowed ❌
int %value;     // Special character ❌
```

---


## טיפוסי משתנים נוספים שלא נלמד
יש בשפת C# עוד סוגים רבים של משתנים, אך הם אינם חלק מהתוכנית הלימודית שלנו:

- `short`, `byte`, `sbyte`
- `float`, `decimal`
- `long`, `ulong`
- `BigInteger`
- nullable types: `int?, double?, bool? ...`
- ועוד רבים נוספים...

{: .box-note}
הקורס שלנו מתמקד **בחשיבה אלגוריתמית** ולא במגוון הרחב של טיפוסים שקיימים בשפה מסוימת. לכן, נתרגל את העקרונות בעזרת טיפוסים בסיסיים בלבד.


</details>

## תרגול
[⬅ עברו לתרגול 1.1 - משתנים קלט והשמה](/cs/Chapter1Ex1.1)

## סרטונים
[סרטוני פרק 1](https://youtube.com/playlist?list=PLw4P_RdfuzSirWjKrYrwudzauSKkwqC1z&si=7_UxQuHnK-BcW1k8){:target="_blank"}