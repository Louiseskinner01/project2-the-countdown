

The primary goal of testing was to ensure the Countdown Game application performs consistently across multiple devices and screen sizes, maintaining both functionality and user experience.


## Approach
Testing was carried out to ensure that the website functions as intended, is responsive across different devices, and provides a smooth and intuitive user experience.
All tests were conducted manually, using a combination of Google Chrome DevTools, HTML/CSS/JS validation tools, and live user interaction testing.


### Methods

| Method                    | Description                                                                                                                                                                        | Tools Used                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Manual Testing**        | Each feature and button was manually tested to verify correct functionality. This included checking form submissions, button click responses, game flow, and orientation behavior. | Browser console, on-screen interaction                                                                                                    |
| **Responsive Testing**    | Tested using Chrome DevTools’ built-in device emulation. Ensured the layout adapts correctly to different screen widths and orientations.                                          | Chrome DevTools                                                                                                                           |
| **Cross-Browser Testing** | Tested in multiple browsers to ensure consistent design, color rendering, and interactivity.                                                                                       | Chrome, Firefox, Safari, Edge                                                                                                     |
| **Validation Testing**    | Used validation tools to check that the HTML, CSS, and JavaScript are free from syntax errors and follow best practices.                                                           | [W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), [JSHint](https://jshint.com/) |
| **Accessibility Testing** | Checked color contrast, font readability, tab navigation, and proper use of ARIA and semantic tags where applicable.                                                               | Chrome Lighthouse, manual checks                                                                                                          |
| **Performance Testing**   | Evaluated page load speed and responsiveness using Chrome Lighthouse.                                                                                                              | Chrome DevTools > Lighthouse                                                                                                              |


### 

| Feature Tested      | Test Performed                                   | Expected Outcome                                | Result              |
| ------------------- | ------------------------------------------------ | ----------------------------------------------- | ------------------- |
| Start Game Button   | Clicked “PLAY?” and then “Start Game”            | Game begins, keypad becomes active              | ✅ Works as expected |
| Orientation Warning | Rotated mobile device from portrait to landscape | Warning disappears and game becomes visible     | ✅ Works as expected |
| Difficulty Buttons  | Selected “Easy / Medium / Hard”                  | Correct timer and equation difficulty displayed | ✅ Works as expected |
| Keypad Input        | Clicked number keys and OK                       | Values entered correctly into equation input    | ✅ Works as expected |
| Undo Button         | Clicked “Undo” after equation                    | Input cleared, numbers reactivated              | ✅ Works as expected |
| Timer Countdown     | Started game at different difficulties           | Timer matched selected duration                 | ✅ Works as expected |









Google Chrome DevTools was used extensively to simulate various device viewports, including popular smartphones, tablets, and desktop resolutions. This allowed for a controlled testing environment to verify that the layout, interactive elements, and overall responsiveness behaved as intended under different conditions.

Particular attention was given to:

Responsive design: Ensuring all elements (buttons, grids, and text) resize and reposition correctly.

Touch interactions: Confirming buttons and inputs respond properly on smaller screens.

Orientation changes: Validating that the landscape and portrait orientation logic functions correctly on mobile devices.

Visual consistency: Checking that colours, fonts, and spacing remain aligned with the intended design across all viewports.

By testing through Chrome DevTools, I was able to efficiently identify and resolve layout shifts, overlapping elements, and scaling issues before deployment. This ensured the final build delivered a clean, accessible, and user-friendly experience on all supported devices.


| Device                  | Screen Size (Approx.) | Orientation Tested   | Result                                                              |
| ----------------------- | --------------------- | -------------------- | ------------------------------------------------------------------- |
| iPhone SE               | 375 × 667 px          | Portrait / Landscape | ✅ Fully functional and responsive                                   |
| iPhone 12 Pro           | 390 × 844 px          | Portrait / Landscape | ✅ Layout scales correctly, all buttons accessible                   |
| iPhone 14 Pro Max       | 430 × 932 px          | Portrait / Landscape | ✅ Smooth transition between orientations                            |
| Pixel 7                 | 412 × 915 px          | Portrait / Landscape | ✅ Responsive elements adjust correctly                              |
| Samsung Galaxy S8+      | 360 × 740 px          | Portrait / Landscape | ✅ No layout distortion observed                                     |
| iPad Air                | 820 × 1180 px         | Portrait / Landscape | ✅ Layout adjusts well; game content centered                        |
| iPad Mini               | 768 × 1024 px         | Portrait / Landscape | ✅ Fully functional; text and button scaling appropriate             |
| Surface Pro 7           | 912 × 1368 px         | Landscape            | ✅ Desktop-style layout renders correctly                            |
| Desktop (1080p)         | 1920 × 1080 px        | Landscape            | ✅ All components display as intended with balanced spacing          |
| Large Display (2560px+) | Variable              | Landscape            | ✅ Tested using media query breakpoint; scaling remains proportional |



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


## Testing Summaries 

### Validation summary

| Validator               | Outcome                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| **W3C HTML Validator**  | No major errors found; minor warnings fixed (e.g., attribute ordering). | (screen shot) |
| **W3C CSS Validator**   | Passed successfully; all CSS properties valid.                          | (screen shot) |
| **JSHint (JavaScript)** | Minor warnings about unused variables corrected. No functional errors.  | (screen shot) |

### Browser Compatitbility

To ensure a consistent and accessible user experience across all devices and browsers, the project was thoroughly tested using Google Chrome DevTools. This allowed emulation of multiple devices (iPhone, Samsung Galaxy, iPad, Surface Duo, etc.) and responsive breakpoints to verify that all layout, interaction, and orientation features behaved correctly.

Cross-browser compatibility testing was performed manually in Chrome, Firefox, Safari, Edge, and Opera. Each browser was checked for layout consistency, JavaScript functionality (such as keypad interactivity and timers), and color rendering.

The goal was to confirm that the app provides the same smooth gameplay and responsive UI on both desktop and mobile environments, regardless of platform or browser engine.

| Browser                | Result             | Notes / Screenshots                                                                                  |
| ---------------------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| **Google Chrome**      | ✅ Fully functional | Responsive design works across all breakpoints (mobile, tablet, desktop). No layout issues detected. | (screen shot) |
| **Mozilla Firefox**    | ✅ Fully functional | Minor font rendering differences due to browser engine.                                              | (screen shot) |
| **Safari (Mac / iOS)** | ✅ Fully functional | Orientation message and button interactivity confirmed working.                                      | (screen shot) |
| **Microsoft Edge**     | ✅ Fully functional | Same rendering behavior as Chrome (uses Chromium engine).                                            | (screen shot) |

### Accessibility Summary 

| Test                                                             | Result |
| ---------------------------------------------------------------- | ------ |
| Color contrast meets WCAG 2.1 standards                          | ✅      |
| Text size and spacing adjustable                                 | ✅      |
| Interactive elements clearly labeled and accessible via keyboard | ✅      |
| ARIA labels provided for key game sections                       | ✅      |
| Orientation and responsiveness maintained for screen readers     | ✅      |
