---
layout: page
title: "דוח פרוייקט — GuysFinalAndroidAssignment"
subtitle: "גרסת אנדרואיד ניסיונית למשחק ttrainer (HTML + JS) משולב באפליקציה מקורית"
author: גיא סידס
lang: he
---


{: .box-note .table-en}
**Repo:** <https://github.com/3strategy/GuysFinalAndroidAssignment>

> 

---

## 1. תקציר 📜



הפרויקט פותח כחלק מהשתלמות **Android Studio** ומתמקד בשילוב עמוד **WebView** שמריץ משחק HTML שהומר מ‑Python (Colab). האפליקציה מדגימה:
* שילוב **Hybrid‑Web + Native** מלא.
* **Alarm Scheduler & Notification** ↔ התראות בעת פתיחת האפליקציה ובשעה קבועה.
* **Sensors API** ↔ ניעור ‑> סגירת אפליקציה.
* שמירת נתונים ב‑**Room DB** לסנכרון בין WebView ל‑Fragments.
* התאמות UI (הקטנת Action Bar / Navigation Bar, תמיכה במצבי Light / Dark).
{: .box-success}
---

## 2. ארכיטקטורת‑על


<!-- FLOWCHART ------------------------------------------------------------>
<div class="mermaid">

flowchart TD
    LA[LauncherActivity] -->|Intent| SPLASH[SplashActivity]
    SPLASH -->|User chooses| MAIN["MainActivity<br/>(Fragments)"]
    MAIN --> WVF["WebViewFragment :ttrainer"]
    MAIN --> DBF[DataFragment]
    MAIN --> SET[SettingsFragment]
    LA   --> WA["WalletActivity<br/>(Android Template)"]

</div>

<!-- CLASS DIAGRAM -------------------------------------------------------->
<div class="mermaid">

classDiagram
    class MainActivity {
        +onCreate()
        +scheduleAlarm()
        +registerShakeSensor()
        +saveScore()
    }
    class WebViewFragment {
        +loadHtml()
        +postMessageToJS()
        +receiveJSCallbacks()
    }
    MainActivity --> WebViewFragment
    MainActivity --> RoomDB

</div>


> **הערה:** המרצה מוזמן להריץ את האפליקציה ולוודא את זרימת הנתונים בזמן‑אמת.

---

## 3. מודול WebView – המשחק *ttrainer*

{: .box-success .table-en}

* **HTML → WebView**: עמוד HTML שעבר ריפקטור מפייתון/Colab כדי לרוץ ב‑Web.
* **Bridge API**: שימוש ב‑`addJavascriptInterface` לשליחת נתונים דו‑כיוונית בין JS ↔ Kotlin.
* **Persistence**: נקודות/הגדרות נשמרות ב‑Room ונשלפות מחדש בטעינה הבאה.

```kotlin
@JavascriptInterface
fun postScore(score: Int) {
    viewModel.saveScore(score)   // ViewModel ←→ Room
}
```

---

## 4. MainActivity & Fragments
{: .box-note}

| Fragment | תפקיד | טכניקות עיקריות |
|----------|--------|------------------|
| **WebViewFragment** | מציג את *ttrainer* | `WebView`, JS Bridge |
| **DataFragment** | טבלת שיאים מקומית | `RecyclerView`, `LiveData` |
| **SettingsFragment** | שינוי ערכות צבע והתראות | `PreferenceFragmentCompat` |

Additional UI tweaks — הקטנת Action Bar ו‑Navigation Bar כדי למקסם שטח תצוגה.

---

## 5. Alarm Scheduler & Notification ⏰
{: .box-success}

* התראה מיידית בעת הפעלת האפליקציה (ערוץ "welcome")
* התראה יומית בשעה 17:00 (ערוץ "daily‑reminder")
* תמיכה ב‑API 34 דרך `ExactAlarmPermissionChecker`

```kotlin
val alarmMgr = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
// ...
alarmMgr.setExactAndAllowWhileIdle(
    AlarmManager.RTC_WAKEUP,
    triggerTime,
    pendingIntent
)
```

---

## 6. חיישנים – Shake to Close 📳


| אתגר | פתרון |
|-------|--------|
| חיווי תנועה רועש | מסנן Low‑Pass + סף תאוצה `> 12 m/s²` |
| Lifecycle Aware | רישום SensorListener ב‑`onResume` ושחרור ב‑`onPause` |
{: .table-en}

---

## 7. אתגרים מרכזיים & פתרונות


1. **סנכרון WebView ↔ Room**  
   > התאמת מבנה JSON מה‑JS למודול DAO ב‑Kotlin ושימוש ב‑`CoroutineScope(Dispatchers.IO)` למניעת ANR.
2. **Alarm & Notifications ב‑API 34**  
   > הגדרת הרשאת `SCHEDULE_EXACT_ALARM` ולוגיקה חלופית במכשירים שמונעים התראה מדויקת.
3. **Reduce UI Chrome**  
   > שימוש ב‑`WindowCompat.setDecorFitsSystemWindows(getWindow(), false)`.  
   > שינוי צבע Status Bar דרך Theme‑overlay.

---

## 8. "Lessons Learned" 🤓


* **Hybrid ≠ Hack** — אינטגרציה נכונה (Room + JS Bridge) יוצרת חוויה אחידה.
* **Early Sensors Planning** — עדיף לתכנן Lifecycle בשלב מוקדם ולחסוך memory leaks.
* **גרסאות API** — תכונות כמו Exact Alarm דורשות חשיבה לאחור על מכשירים ישנים.

---

## 9. TODO / הרחבות עתידיות


* **צילומי מסך** — להוסיף ל‑`/docs/assets/img/` ↔ קריאה בתג `![Screen](...)`.
* **Firebase Analytics** — שיקוף נתוני שימוש ברמת Cloud.
* **Leaderboard Online** — סנכרון שיאים גלובלי במקום מקומי.

---

## 10. בנייה והרצה ⚙️


```bash
git clone https://github.com/3strategy/GuysFinalAndroidAssignment.git
cd GuysFinalAndroidAssignment
# Android Studio → Open Folder
```

1. ודא **Android Studio Giraffe (או חדש יותר)** + `Android SDK 34` מותקנים.
2. הפעל **`Run → app`** (מכשיר אמיתי מומלץ לניעור 📳).

---

## 11. קרדיטים 🙏


* **Guy Siedes** — פיתוח, עיצוב, בדיקות.
* **זאב פריימן** — ייעוץ.
* **GPT- קוד וסיוע בפתרון בעיות** על התשובות.

---

> **שאלות / הערות?**
> מוזמנים לפתוח Issue ב‑GitHub או לפנות במייל: **3strategy@gmail.com**

