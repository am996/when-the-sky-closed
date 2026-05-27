# 🗝️ WHEN THE SKY CLOSED: MASTER KEY 🗝️

This document contains the comprehensive logic and solutions for the "When the Sky Closed" ARG. Use this to guide testing or assist stuck players.

---

## 📍 Node 1: Candella (The Parade)
**Concept:** Stability within change. Players often try to fix the "order" of the parade, but the world asks what remains the same when everything else shifts.

### 🛠️ Mechanics
*   **Discovery:** You must click every fragment at least **twice** to observe how they change.
*   **Persistence:** You must reach **15 total clicks** before the Frog realizes: *"It's asking what stayed itself."*
*   **Observation:** The selection panel only accepts fragments that have been clicked at least **3 times** (ensuring the player has actually watched the drift).

### ✅ Solution
Select the three **Stable** fragments:
1.  **Candy Gate**
2.  **Confetti Bridge**
3.  **Final Arch**
*(Leave "Laughter Cart" and "Broken Music Wagon" unchecked as they are unstable).*

---

## 📍 Node 2: Verdant Rail (The Archive)
**Concept:** Directional truth. The archive is "slippery"—reading out of order or skipping pages causes the document to reset or provide false information.

### 🛠️ Mechanics
*   **Sequence Locking:** Each section only reveals its "true" text if the previous one was read immediately before it.
*   **The Harbor Trap:** The "Station Index" will mention a "Harbor" station if read incorrectly. Harbor does not belong to this timeline.
*   **The Confirmation Pass:** Simply knowing the order isn't enough. Once you type the route, you must demonstrate it by clicking the tabs in that exact order one last time.

### ✅ Solution
1.  Click **System Overview**.
2.  Click **Anomaly Log**.
3.  Click **Station Index**.
4.  Click **Transit Behavior Report**.
5.  In the text box that appears, type: `overview anomaly index transit`.
6.  **Crucial:** Click the tabs again in that exact order: **Overview -> Anomaly -> Index -> Transit**.

---

## 📍 Node 3: Glasshollow (The Echoes)
**Concept:** Saturation. Glasshollow doesn't want you to solve it; it wants you to exist within it until the reflections "catch up."

### 🛠️ Mechanics
*   **Randomized Echoes:** Echoes trigger on a random delay (3.5s to 7.7s) after clicking a shard.
*   **Corruption:** Every click and every echo increases the "Corruption Level."
*   **Requirement:** You must see at least **10 echoes** and reach **Corruption Level 14**.

### ✅ Solution
1.  Click all four shards (**Room, Safe, Memory, Frog**) at least **twice** each.
2.  **Wait.** Do not rush. Let the echo log fill up.
3.  Continue clicking shards occasionally until the Time Keeper says: *"Echo saturation complete."*

---

## 📍 Node 4: Rain Market (The Trade)
**Concept:** Meaning Drift. In the Rain Market, words lose their permanence the more you use them. You must trade until the language is fully "broken."

### 🛠️ Mechanics
*   **Global Drift:** Every trade increases the total drift of the market.
*   **Sampling:** Every item in the market must reach its **3rd variation** (Drift Level 2).
*   **Goal:** Reach **Global Drift 21**.

### ✅ Solution
1.  Click every stall button multiple times.
2.  Ensure you have seen the "late-stage" descriptions for **Path, Certainty, and Repetition**.
3.  Keep trading until the **Drift Level** at the top hits **21**.

---

## 📍 Node 5: The Final Gate (Alignment)
**Concept:** The Paradox Solution. The central gate cannot be synchronized with "Perfect Consistency." It requires a state that accepts the broken nature of the timelines.

### 🛠️ Mechanics
*   **The Consistency Trap:** Choosing all "Stable" or "Fixed" options will cause the Frog to reject the solution as "too clean" to hold.
*   **Paradox Requirement:** The gate must be set to the **Drifting/Contradictory** options.
*   **Double Confirmation:** The solution must be submitted **twice** (or once after a failed attempt) to represent the player's acceptance of the paradox.

### ✅ Solution
Set the dropdowns to these exact values:
*   **Candella System:** `stable_inside_drift`
*   **Railway Alignment:** `wrong_station`
*   **Echo Synchronization:** `accepted_contradiction`
*   **Memory Core:** `drifting`

**Submit twice.**

---

## 🌌 The Outcome
Completing the Gate triggers **Phase 1 End**. 
*   The Time Keeper's sprite shifts to an "Alt" version.
*   Dialogue becomes "TKReleased" (corrupted/distorted).
*   The screen shakes and cuts to black.
