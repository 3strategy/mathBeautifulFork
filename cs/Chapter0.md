---
layout: post
title: "List of Subtopics and Concepts (Lowest Granularity)"
author: גיא סידס
date: 2025-04-05
lang: en
---
<!-- https://chatgpt.com/c/67f0f869-af10-800e-8479-c8fd3873432c -->
<style>
html {
  direction: ltr !important;
}
body {
  text-align: left !important;
}
</style>

# Chapter 1: הדפסה, משתנים והמרות

Introduction to C# language

Environment setup: Visual Studio IDE basics

Structure of a basic C# program (Main method, class, namespace) מבנה תכנית בסיסית

Basic output using Console.WriteLine and Console.Write פלט בסיסי

Variables and their types (int, double, string) משתנים וטיפוסי משתנים

Declaration and initialization of variables הכרזה ואיתחול

Reading input from the console (Console.ReadLine) ביצוע קלט

Converting strings to numerical types (int.Parse, double.Parse) המרת משתנים

Arithmetic operations (+, -, *, /) אופרטורים חשבוניים

Integer division and remainder (modulus %) האופרטור שארית חלוקה

Explicit type conversions (casting, e.g. (double)x) המרת טיפוסים מפורשת

Implicit conversions המרה אוטומטית

Tracking program execution (טבלאות מעקב)

Debugging with breakpoints שימוש ב-breakpoints

# Chapter 2: תנאים, ביטויים לוגיים ושארית חלוקה

Boolean expressions (==, !=, >, <, >=, <=) ביטויים בוליאניים

Logical operators (&&, ||, !) אופרטורים לוגיים

Conditional statements (if, else if, else) משפטי תנאי

Nested conditional statements משפטי תנאי מקוננים

Modulo operation % in conditional contexts השימוש בשארית חלוקה בתוך תנאי

Common conditional scenarios (leap year, even/odd checks, etc.) דוגמאות לשימוש בשארית חלוקה

Using logical conditions for decision making שימוש בתנאי לקבלת החלטות

Flag variables (boolean variables to remember conditions or states) משתנה המשמש כדגל

Tracking tables (טבלאות מעקב) for conditional logic טבלאות מעקב

# Chapter 3: המחלקה Math, Random

Introduction to the Math class (Math.Pow, Math.Sqrt, Math.Abs) המחלקה המתמטית

Usage examples of Math class methods דוגמאות שימוש במחלקה המתמטית

Random numbers (Random class, Next, NextDouble) מספרים אקראיים

Generating random numbers within specific ranges הגרלת מספר שלם בטווח מוגדר

Applications of random numbers in simple problems שימושים של ראנדום

# Chapter 4: לולאות for

Basic loop concept and the purpose of repetition הרעיון הבסיסי בלולאות

Structure of a for loop (initialization; condition; increment) מבנה לולאת פור

Loop execution flow מהלך ביצוע הלולאה

Practical examples of for loops דוגמאות ללולאות

Using loop counters שימוש במונים

Breaking loops prematurely with break שימוש בהוראת break ליציאה מוקדמת מלולאה

**ToAdd: as a chapter 3b: stuff we can do inside a for statement נושאים מתקדמים בתחביר לולאת for**
**3b: Keeping i value after the loop שמירה על האינדקס**

**Multiple initializations**

**multiple conditions, multiple increments or statements**

**omisions of the i initialization**

**omission of the increment statement**

**interfering with i inside the block to extend the loop when a condition is met (for example when an input did not meet criteria and we wish to collect a valid predefined number of inputs)**

**interfering with the loop using continue statement**

Tracking loops execution with tables (טבלאות מעקב)

Using breakpoints to debug loops שימוש ב-breakpoints לדיבוג לולאות

# Chapter 5: לולאות while

The concept of a conditional loop (while) העיקרון של לולאת

Structure and syntax of a while loop מבנה לולאת while

Differences between for and while loops ההבדלים בין while ל-for

Typical use-cases for while loops (unknown iteration counts, input validation)

Infinite loops and stopping conditions

Flags and state tracking in loops

Using break and return to control loop execution

Debugging while loops with breakpoints and tracking tables (טבלאות מעקב)