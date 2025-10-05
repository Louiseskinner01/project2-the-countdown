

The primary goal of testing was to ensure the Countdown Game application performs consistently across multiple devices and screen sizes, maintaining both functionality and user experience.

Google Chrome DevTools was used extensively to simulate various device viewports, including popular smartphones, tablets, and desktop resolutions. This allowed for a controlled testing environment to verify that the layout, interactive elements, and overall responsiveness behaved as intended under different conditions.

Particular attention was given to:

Responsive design: Ensuring all elements (buttons, grids, and text) resize and reposition correctly.

Touch interactions: Confirming buttons and inputs respond properly on smaller screens.

Orientation changes: Validating that the landscape and portrait orientation logic functions correctly on mobile devices.

Visual consistency: Checking that colours, fonts, and spacing remain aligned with the intended design across all viewports.

By testing through Chrome DevTools, I was able to efficiently identify and resolve layout shifts, overlapping elements, and scaling issues before deployment. This ensured the final build delivered a clean, accessible, and user-friendly experience on all supported devices.


| Device               | Screen Size                   | Result                     |
| -------------------- | ----------------------------- | -------------------------- |
| iPhone 12            | 390x844                       | ✅ Fully responsive         |
| iPad                 | 810x1080                      | ✅ Layout adjusts correctly |
| Laptop (13”)         | 1366x768                      | ✅ No layout issues         |
| Desktop (Full HD)    | 1920x1080                     | ✅ Works perfectly          |
| Ultra-wide (2560px+) | ✅ Layout remains proportional |                            |



| Feature            | Expected Outcome                       | Result                          | Pass/Fail |
| ------------------ | -------------------------------------- | ------------------------------- | --------- |
| Difficulty buttons | Update timer based on selection        | Timer updates correctly         | ✅         |
| Confirm difficulty | Locks difficulty and removes buttons   | Works as expected               | ✅         |
| Generate numbers   | Six random numbers displayed           | Unique each round               | ✅         |
| Get target number  | Generates valid target (122–1017)      | Within range                    | ✅         |
| Start Game button  | Begins timer and displays keypad       | Works correctly                 | ✅         |
| Keypad input       | Inputs digits and operators            | Responsive and accurate         | ✅         |
| Undo button        | Clears last entry and restores numbers | Works as expected               | ✅         |
| Timer              | Counts down correctly                  | Works consistently              | ✅         |
| Win condition      | Displays winner message                | Works and stops timer           | ✅         |
| Lose condition     | Displays timeout message               | Works and triggers “Play Again” | ✅         |

| Element                    | Test Description                   | Result                        | Pass/Fail |
| -------------------------- | ---------------------------------- | ----------------------------- | --------- |
| Console area               | Displays messages clearly          | Text visible and styled       | ✅         |
| Buttons                    | Hover and click effects consistent | Colors and transitions smooth | ✅         |
| Orientation warning        | Displays on portrait mobile        | Hides automatically on rotate | ✅         |
| Placeholder text           | Color visible and readable         | Matches theme                 | ✅         |
| Font and color consistency | Uses variables correctly           | All consistent                | ✅         |

| Issue                                         | Cause                          | Solution                               | Status  |
| --------------------------------------------- | ------------------------------ | -------------------------------------- | ------- |
| Keypad not resizing correctly                 | Flexbox conflict               | Adjusted grid layout                   | ✅ Fixed |
| Timer not resetting on replay                 | Countdown interval not cleared | Added `clearInterval()`                | ✅ Fixed |
| “Play?” span reappeared on orientation change | Re-triggered event listener    | Added `.remove()` on click             | ✅ Fixed |
| Placeholder color not applying                | CSS selector conflict          | Used `::placeholder` with `!important` | ✅ Fixed |







| User Story                                             | Expected Outcome                       | Test Result |
| ------------------------------------------------------ | -------------------------------------- | ----------- |
| “As a user, I want to choose my own difficulty level.” | Difficulty buttons change timer.       | ✅ Works     |
| “As a user, I want to see my numbers clearly.”         | Numbers displayed in console.          | ✅ Works     |
| “As a user, I want to input equations easily.”         | Keypad input is smooth and responsive. | ✅ Works     |
| “As a user, I want feedback on results.”               | Console updates with messages.         | ✅ Works     |
| “As a user, I want to play again quickly.”             | Play Again button reloads game.        | ✅ Works     |
