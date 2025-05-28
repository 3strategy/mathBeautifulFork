---
layout: page
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


# Track Your Progress

Below is the list of sub-topics. Just click the boxes, and your choices will be saved in **localStorage**.

- [ ] Understanding the 7-layer model
- [ ] Bit-level TCP/UDP flag
- [ ] Other IP protocol values
- [ ] WebSockets vs. TCP
- [ ] …etc…

<script>
// 1) Gather all GFM task-list checkboxes, assign stable IDs
document.addEventListener('DOMContentLoaded', () => {
  const cbs = Array.from(document.querySelectorAll('li input[type=checkbox]'));
  cbs.forEach((cb, i) => cb.id = `subtopic-${i}`);

  // 2) Load saved states
  const saved = JSON.parse(localStorage.getItem('subtopics_progress') || '{}');
  cbs.forEach(cb => { if (saved[cb.id]) cb.checked = true });

  // 3) On any change, rebuild and save the map
  cbs.forEach(cb => cb.addEventListener('change', () => {
    const states = {};
    cbs.forEach(x => states[x.id] = x.checked);
    localStorage.setItem('subtopics_progress', JSON.stringify(states));
  }));
});
</script>