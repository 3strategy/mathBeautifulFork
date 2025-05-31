---
layout: page
title: "קיצורים ב-VS"
subtitle: "טבלאות קיצורים"
author: גיא סידס
lang: he
---

## קיצורים לפקודות נפוצות

| קיצור        | פעולה                             |
|--------------|-----------------------------------|
| `cw`         | `Console.WriteLine`               |
| `if`         | בלוק תנאי `if`                    |
| `el`         | בלוק `else`                       |
| `fo`         | בלוק `for`                        |
| `forr`       | בלוק `for` מהסוף להתחלה          |
| `wh`         | בלוק `while`                      |
| `fore`       | בלוק `foreach`                    |
| `cr`         | ביצוע קלט. דורש snippet          |
| `ip`         | קולט מספר שלם. דורש snippet      |


{: .box-success}
בהמשך נראה כיצד לבנות קיצורים משלנו באמצעות snippets. סתם😀, ההמשך כבר כאן. מי שרוצים מוזמנים להוסיף

## כתיבת snippet
יש לכתוב קובץ מתאים בסיומת snippet ולשים אותו בתיקיה הבאה:

%USERPROFILE%\Documents\Visual Studio 2022\Code Snippets\Visual C#\My Code Snippets
{: .table-en}

<details markdown="1"> <summary>דוגמא שימושית לקובץ כזה שמוסיף את הקיצור ip ואת הקיצור cr</summary>


```
<?xml version="1.0" encoding="utf-8" ?>
<CodeSnippets  xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>cr</Title>
            <Shortcut>cr</Shortcut>
            <Description>Code snippet for Console.ReadLine</Description>
            <Author>Whoever you want it to be</Author>
            <SnippetTypes>
                <SnippetType>Expansion</SnippetType>
            </SnippetTypes>
        </Header>
        <Snippet>
            <Declarations>
                <Literal Editable="false">
                    <ID>SystemConsole</ID>
                    <Function>SimpleTypeName(global::System.Console)</Function>
                </Literal>
            </Declarations>
            <Code Language="csharp"><![CDATA[$SystemConsole$.ReadLine();]]>
            </Code>
        </Snippet>
    </CodeSnippet>
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>ip</Title>
            <Shortcut>ip</Shortcut>
            <Description>Code snippet for int.Parse(Console.ReadLine</Description>
            <Author>Whoever you want it to be</Author>
            <SnippetTypes>
                <SnippetType>Expansion</SnippetType>
            </SnippetTypes>
        </Header>
        <Snippet>
            <Declarations>
                <Literal Editable="false">
                    <ID>SystemConsole</ID>
                    <Function>SimpleTypeName(global::System.Console)</Function>
                </Literal>
            </Declarations>
            <Code Language="csharp"><![CDATA[int n = int.Parse($SystemConsole$.ReadLine());]]>
            </Code>
        </Snippet>
    </CodeSnippet>

</CodeSnippets>
```

</details>

## קיצורי מקשים לעריכת קוד

| קיצור מקשים     | פעולה                                      |
|------------------|--------------------------------------------|
| `Ctrl + K, C`      | הפוך לשורת הערה (comment)                |
| `Ctrl + K, U`     | הסר שורת הערה (uncomment)                |
| `Ctrl + /`     | צור / בטל שורת הערה, תואם pycharm, inteliJ  |
| `Ctrl + K, D`     | יישור קוד (format/align)                  |
| `F12`             | קפיצה להגדרת משתנה/פונקציה              |
| `Ctrl + Z`        | ביטול פעולה (Undo)                        |
| `Ctrl + Y`        | חזרה על פעולה (Redo)                      |
| `Ctrl + D`        | שכפול שורה                     |
