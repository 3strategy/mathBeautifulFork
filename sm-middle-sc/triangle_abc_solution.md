---
layout: post
title: "נקודה D על צלע AB במשולש ABC"
date: 2026-04-30
categories: [גיאומטריה, משולשים]
tags: [דמיון משולשים, משולש שווה שוקיים, זוויות]
mathjax: true
dir: rtl
---

## נתון

- משולש $$\triangle ABC$$ כאשר $$AB = AC$$
- נקודה $$D$$ נמצאת על הצלע $$AB$$
- $$CD = BC$$

---

## א. הוכח כי $$\triangle BCD \sim \triangle BAC$$

**שלב 1 – זוויות בסיס של משולש שווה שוקיים $$\triangle ABC$$:**

מכיוון ש-$$AB = AC$$, המשולש שווה שוקיים, ולכן:

$$\angle ABC = \angle ACB$$

נסמן $$\angle BAC = 2\alpha$$, ולכן:

$$\angle ABC = \angle ACB = \frac{180° - 2\alpha}{2} = 90° - \alpha$$

**שלב 2 – זוויות בסיס של משולש שווה שוקיים $$\triangle BCD$$:**

מכיוון ש-$$BC = CD$$, גם $$\triangle BCD$$ שווה שוקיים, ולכן:

$$\angle CBD = \angle CDB$$

אולם $$\angle CBD = \angle ABC = 90° - \alpha$$, ולכן:

$$\angle CDB = 90° - \alpha$$

**שלב 3 – הזווית השלישית ב-$$\triangle BCD$$:**

$$\angle BCD = 180° - \angle CBD - \angle CDB = 180° - 2(90° - \alpha) = 2\alpha$$

**שלב 4 – הוכחת הדמיון:**

| $$\triangle BCD$$ | $$\triangle BAC$$ | נימוק |
|:-----------------:|:-----------------:|:-----:|
| $$\angle B = 90°-\alpha$$ | $$\angle B = 90°-\alpha$$ | זווית משותפת |
| $$\angle BCD = 2\alpha$$ | $$\angle BAC = 2\alpha$$ | הוכח לעיל |

לפי **זז (AA)**: $$\boxed{\triangle BCD \sim \triangle BAC}$$ ✓

---

## ב. הביעו באמצעות $$\alpha$$

נזכר: $$\angle A = 2\alpha$$, ו-$$D$$ נמצאת על הצלע $$AB$$.

### 1. $$\angle ADC$$

$$D$$ על הצלע $$AB$$, ולכן הזוויות $$\angle BDC$$ ו-$$\angle ADC$$ משלימות ל-$$180°$$.

$$\angle BDC = 90° - \alpha \quad \Rightarrow \quad \angle ADC = 180° - (90° - \alpha)$$

$$\boxed{\angle ADC = 90° + \alpha}$$

### 2. $$\angle ACD$$

מכיוון ש-$$D$$ נמצאת על $$AB$$, הזווית $$\angle ACB$$ מתפצלת:

$$\angle ACB = \angle ACD + \angle DCB$$

$$90° - \alpha = \angle ACD + 2\alpha$$

$$\boxed{\angle ACD = 90° - 3\alpha}$$

---

## ג. נתון: $$AD = CD$$. מצאו את $$\alpha$$

מכיוון ש-$$AD = CD$$, המשולש $$\triangle ACD$$ שווה שוקיים, ולכן זוויות הבסיס שלו שוות:

$$\angle DAC = \angle DCA$$

נציב את הביטויים שמצאנו:

$$\angle DAC = \angle BAC = 2\alpha$$

$$\angle DCA = \angle ACD = 90° - 3\alpha$$

לכן:

$$2\alpha = 90° - 3\alpha$$

$$5\alpha = 90°$$

$$\boxed{\alpha = 18°}$$
