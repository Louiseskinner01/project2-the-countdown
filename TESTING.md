# Testing


> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Rationale

The primary goal of testing was to ensure that the Countdown Game application performs consistently across multiple devices and screen sizes, maintaining both functionality and a smooth user experience.
Testing focused on performance, accessibility, and responsiveness.

## Approach
Testing was carried out to verify that the website functions as intended, is fully responsive, and provides an intuitive user experience.
All tests were conducted manually using a combination of Google Chrome DevTools, validation tools, and live user interaction testing.


## Methods

| Method                    | Description                                                                                                                                                                        | Tools Used                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Manual Testing**        | Each feature and button was manually tested to verify correct functionality. This included checking form submissions, button click responses, game flow, and orientation behavior. | Browser console, on-screen interaction                                                                                                    |
| **Responsive Testing**    | Tested using Chrome DevTools’ built-in device emulation. Ensured the layout adapts correctly to different screen widths and orientations.                                          | Chrome DevTools                                                                                                                           |
| **Cross-Browser Compatibility Testing** | Tested in multiple browsers to ensure consistent design, color rendering, and interactivity.                                                                                       | Chrome, Firefox, Safari, Edge                                                                                                     |
| **Validation Testing**    | Used validation tools to check that the HTML, CSS, and JavaScript are free from syntax errors and follow best practices.                                                           | [W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), [JSHint](https://jshint.com/) |
| **Accessibility Testing** | Checked color contrast, font readability, tab navigation, and proper use of ARIA and semantic tags where applicable.                                                               | Chrome Lighthouse, manual checks                                                                                                          |
| **Performance Testing**   | Evaluated page load speed and responsiveness using Chrome Lighthouse.                                                                                                              | Chrome DevTools  Lighthouse                                                                                                              |


### Manual Tests (Defensive Programming)

⚠️ NOTE ⚠️
- Users cannot submit an empty form (add the `required` attribute)
- Users must enter valid field types (ensure the correct input `type=""` is used)
- Users cannot brute-force a URL to navigate to a restricted pages


| Feature Tested | Test Description                                   | Expected Outcome                                | Pass/Fail             |  Screenshot |
| ------------------- | ------------------------------------------------ | ----------------------------------------------- | ------------------- | ----------- |
| Start Game Button   | Clicked “PLAY?” and then “Start Game”            | Game begins, keypad becomes active              | ✅ Works | ![screenshot](documentation/features/404.png) |
| Orientation Warning | Rotated mobile device from portrait to landscape | Warning disappears and game becomes visible     | ✅ Works | ![screenshot](documentation/features/orientation-lock-small-screen.png) |
| Difficulty Buttons  | Selected “Easy / Medium / Hard”                  | Correct timer and equation difficulty displayed | ✅ Works | ![screenshot](documentation/features/difficulty-selection.png) |
| Keypad Input        | Clicked number keys and OK                       | Values entered correctly into equation input    | ✅ Works | ![screenshot](documentation/features/keypad-inplay.png) |
| Timer Countdown     | Started game at different difficulties           | Timer matched selected duration                 | ✅ Works | ![screenshot](documentation/features/timer-countdown.png) |
| Play Aagin? Button     |  Clicked the button at the end of a game     | Resets the window bringing the user back to the clickable PLAY? text                  | ✅ Works | ![screenshot](documentation/features/play-again.png) ![screenshot](documentation/features/play-again-reload.png)|
Confirm difficulty |  Clicked the confirm button on different difficulty levels | Locks difficulty, updates the timer and removes buttons from further use  | ✅ Works          | ![screenshot](documentation/features/difficulty-level-confirmed.png) |
| Generate numbers   | Six random numbers displayed           | Unique each round               | ✅  Works         | ![screenshot](documentation/features/random-numbers.png) |
Get target number  | Generates valid target (122–1017)      | Within range                    | ✅ Works          | ![screenshot](documentation/features/target-number.png) |
Keypad input       | Inputs digits and operators            | Responsive and accurate         | ✅  Works         | ![screenshot](documentation/features/keypad-operators.png) |
Undo button        | Clicked the undo button after submitting an equation | Clears last entry and restores numbers              | ✅  Works         | ![screenshot](documentation/features/undo-btn-before.png) ![screenshot](documentation/features/undo-btn-used.png)|
Win condition      | Displays winner message                | Works and stops timer           | ✅  Works         | ![screenshot](documentation/features/message-win.png) |
Lose condition     | Displays timeout message               | Works and triggers “Play Again” | ✅ Works          | ![screenshot](documentation/features/message-lose.png) |
Navigation (Burger-icon)     | Displays timeout message               | Works and triggers “Play Again” | ✅ Works          |  ![screenshot](documentation/features/navbar-toggle.png) ![screenshot](documentation/features/navbar-expand.png) |




| Element Tested                | Test Description                   | Expected Outcome                        | Pass/Fail |
| -------------------------- | ---------------------------------- | ----------------------------- | --------- |
| Console area               | Displays messages clearly          | Text visible and styled       | ✅ Pass          |
| Buttons                    | Hover and click effects consistent | Colors and transitions smooth | ✅ Pass           |
| Orientation warning        | Displays on portrait mobile        | Hides automatically on rotate | ✅  Pass          |
| Placeholder text           | Color visible and readable         | Matches theme                 | ✅  Pass          |
| Font and color consistency | Uses variables correctly           | All consistent                | ✅  Pass        |


| User Story Tested | Test Description | Expected Outcome | Pass/Fail |
| --- | --- | --- | --- |
| “As a user, I want to choose my own difficulty level” | Visit the home page and click the PLAY? text on the screen, follow the instructions that lead to the select a difficulty level. Select a level by clicking on the button and then clicking the confirm difficulty button.  | The timer is updated to reflect the difficulty level that has been selected | ✅ Pass |
| “As a user, I want to clearly see the timer and generated numbers” | Follow the game instructions untill the timer and random numbers are displayed. | Numbers displayed in console are clearly formatted and the timer digits displayed to the left of the console are large and standout. | ✅ Pass |
| “As a user, I want to input equations easily” | Follow the instructions, once a target number has been generated the built-n keypad will appear. Click on the keyoad buttons and wsee the numbers/operators appear in the input box. | Keypad input is smooth, responsive and has the displays the correct output into the corret area. 2| ✅ Pass |
| “As a user, I want feedback on results” | Once the game is in play (after the start game button has been clicked) the user can enter equations via the keypad. If an equation is successful the result will appear at the bottom of the console else the console will display an error message. | Console updates with results, striked out used numbers and messages (error, win/lose). | ✅ Pass |
| “As a user, I want to play again quickly” | Click on the play again button which displays the home page so a difficulty level can be selected for a new game. | The window is reloaded, clearing all existing DOM elements and displays the PLAY? text| ✅ Pass |
| “As a user, I want to be prevented from entering invalid equations” | Use the keypad to enter invalid equations | The console displays an error message, the user is able to continue the game without it crashing. | ✅ Pass |
| “As a user, I want the orientation message to guide me on mobile” | Visit the deployed site using a mobile device. Visit each page on the website and rotate the device between landscape and portrait. | Warning shows in portrait, disappears in landscape. | ✅ Pass |
| “As a user, I want used numbers to be tracked correctly” | Use the keypad to enter values (numbers from generated numbers or results) into the input box. | Once a number is used, it becomes unavailabl and it’s strucken out with a black strike. | ✅ Pass |
| “As a user, I want the game to reset properly when I play again” | At the end of a game, click the play again buttin. | The user is presented with the home page PLAY? text. | ✅ Pass |
| “As a user, I want to be challenged in a realistic way” | Perform manual calculations on the target number and the random numbers produced to ensure the target number is always achievable. | Target numbers can always be solved by using some or all of the 6 randomly generated numbers. | ✅ Pass |

### Responsiveness
Google Chrome DevTools was used extensively to simulate various device viewports, including popular smartphones, tablets, and desktop resolutions. This allowed for a controlled testing environment to verify that the layout, interactive elements, and overall responsiveness behaved as intended under different conditions.

Particular attention was given to:

Responsive design: Ensuring all elements (buttons, grids, and text) resize and reposition correctly.

Touch interactions: Confirming buttons and inputs respond properly on smaller screens.

Orientation changes: Validating that the landscape and portrait orientation logic functions correctly on mobile devices.

Visual consistency: Checking that colours, fonts, and spacing remain aligned with the intended design across all viewports.

By testing through Chrome DevTools, I was able to efficiently identify and resolve layout shifts, overlapping elements, and scaling issues before deployment. This ensured the final build delivered a clean, accessible, and user-friendly experience on all supported devices.


I've tested my deployed project to check for responsiveness issues.

| Page | Mobile (Portrait) | Mobile (Lanscape)| Tablet | Laptop | Desktop | 
| --- | --- | --- | --- | ---| --- |
| Home (landing page) | ![screenshot](documentation/responsiveness/mobile-portrait/m-portrait-home-landing.PNG) | ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-home.PNG) | ![screenshot](documentation/responsiveness/tablet/tablet-index.png) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-play.png) | ![screenshot](documentation/responsiveness/desktop/responsive-index-play.png) | 
| Home (during Play) | NA | ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-register-top.PNG) | ![screenshot](documentation/responsiveness/tablet/tablet-index-during-play.png) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-during-play.png) | ![screenshot](documentation/responsiveness/desktop/responsive-index-during-play.png) |   
| Instructions | ![screenshot](documentation/responsiveness/mobile-portrait/m-portrait-instructions.PNG) | ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-instructions-top.PNG) ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-instructions.PNG)| ![screenshot](documentation/responsiveness/tablet/tablet-instructions.png) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-instructions.png) | ![screenshot](documentation/responsiveness/desktop/responsive-instructions.png) | 
| Practice | ![screenshot](documentation/responsiveness/mobile-portrait/m-portrait-practice.PNG) | ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-practice-top.PNG)![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-practice-bottom.PNG) | ![screenshot](documentation/responsiveness/tablet/tablet-practice.png) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-practice.png)  | ![screenshot](documentation/responsiveness/desktop/responsive-practice.png) |
| registration | ![screenshot](documentation/responsiveness/mobile-portrait/m-portrait-registration.PNG) | ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-register-top.PNG)  ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-register-bottom.PNG) | ![screenshot](documentation/responsiveness/tablet/tablet-registration.png) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-registration.png) | ![screenshot](documentation/responsiveness/desktop/responsive-registration.png) | 
| form-submitted | ![screenshot](documentation/responsiveness/mobile-portrait/m-portrait-form-submitted.PNG) | ![screenshot](documentation/responsiveness/mobile-landscape/m-landscape-form-submitted.PNG) | ![screenshot](documentation/responsiveness/tablet/tablet-form-submitted.png) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-form-submitted.png)  | ![screenshot](documentation/responsiveness/desktop/responsive-form-submitted.png) |  
| 404 | ![screenshot](documentation/responsiveness/mobile-portrait/m-portrait-404.PNG) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-404.png) | ![screenshot](documentation/responsiveness/tablet/tabelt-404.png) | ![screenshot](documentation/responsiveness/laptop/responsive-laptop-404.png)  | ![screenshot](documentation/responsiveness/desktop/responsive-404.png) |




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


## Testing Summaries 

### Cross-Browser Compatitbility

To ensure a consistent and accessible user experience across all devices and browsers, the project was thoroughly tested using Google Chrome DevTools. This allowed emulation of multiple devices (iPhone, Samsung Galaxy, iPad, Surface Duo, etc.) and responsive breakpoints to verify that all layout, interaction, and orientation features behaved correctly.

Cross-browser compatibility testing was performed manually in the following browsers:
 - Chrome
 - Firefox
 - Safari 
 - Edge
 - Opera

 Each browser was checked for layout consistency, JavaScript functionality (such as keypad interactivity and timers), and color rendering.

The goal was to confirm that the web app provides the same smooth gameplay and responsive UI on both desktop and mobile environments, regardless of platform or browser engine.

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Safari | Edge | Opera | Notes
| --- | --- | --- | --- | --- | --- | --- |
| Index.html (Home - Rotate Warning)  | ![screenshot](documentation/browser/chrome/chrome-index-rotate.png) | ![screenshot](documentation/browser/firefox/firefox-index-rotate.png) | ![screenshot](documentation/browser/safari/safari-index-rotate.png) | ![screenshot](documentation/browser/edge/edge-index-rotate.png) | ![screenshot](documentation/browser/opera/opera-index-rotate.png) | Works as expected |
| Index.html (Home - PLAY?)  | ![screenshot](documentation/browser/chrome/chrome-index-play.png) | ![screenshot](documentation/browser/firefox/firefox-index-play.png) | ![screenshot](documentation/browser/safari/safari-index-play.png) |  ![screenshot](documentation/browser/edge/edge-index-play.png) | ![screenshot](documentation/browser/opera/opera-index-play.png) | Works as expected |
| Index.html (Home - During Play)  | ![screenshot](documentation/browser/chrome/chrome-index-during-play.png) | ![screenshot](documentation/browser/firefox/firefox-index-during-play.png) | ![screenshot](documentation/browser/safari/safari-index-during-play.png) | ![screenshot](documentation/browser/edge/edge-index-during-play.png) | ![screenshot](documentation/browser/opera/opera-index-during-play.png) | Works as expected |
| Instructions.html | ![screenshot](documentation/browser/chrome/chrome-instruction.png) | ![screenshot](documentation/browser/firefox/firefox-instructions.png) | ![screenshot](documentation/browser/safari/safari-instructions.png) |  ![screenshot](documentation/browser/edge/edge-instructions.png) | ![screenshot](documentation/browser/opera/opera-instruction.png) | Works as expected |
| Practice.html | ![screenshot](documentation/browser/chrome/chrome-practice.png) | ![screenshot](documentation/browser/firefox/firefox-practice.png) | ![screenshot](documentation/browser/safari/safari-practice.png) | ![screenshot](documentation/browser/edge/edge-practice.png) | ![screenshot](documentation/browser/opera/opera-practice.png) | Works as expected |
| Registration.html | ![screenshot](documentation/browser/chrome/chrome-registration.png) | ![screenshot](documentation/browser/firefox/firefox-registration.png) | ![screenshot](documentation/browser/safari/safari-registration.png) |  ![screenshot](documentation/browser/edge/edge-registration.png) | ![screenshot](documentation/browser/opera/opera-registration.png) | Works as expected |
| Form-submitted.html | ![screenshot](documentation/browser/chrome/chrome-form-submitted.png) | ![screenshot](documentation/browser/firefox/firefox-form-submitted.png) | ![screenshot](documentation/browser/safari/safari-form-submitted.png) |  ![screenshot](documentation/browser/edge/edge-form-submitted.png) | ![screenshot](documentation/browser/opera/opera-form-submitted.png) | Works as expected |
| 404.html | ![screenshot](documentation/browser/chrome/chrome-404.png) | ![screenshot](documentation/browser/firefox/firefox-404.png) | ![screenshot](documentation/browser/safari/safari-404.png) | ![screenshot](documentation/browser/edge/edge-404.png) | ![screenshot](documentation/browser/opera/opera-404.png) | Works as expected |




### Validation summary

#### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [404.html](https://github.com/Louiseskinner01/project1-lskinner/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://louiseskinner01.github.io/project1-lskinner/404.html) | ![screenshot](documentation/validation/html--404.png) | ⚠️ Notes (if applicable) |
|  | [bookings.html](https://github.com/Louiseskinner01/project1-lskinner/blob/main/bookings.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://louiseskinner01.github.io/project1-lskinner/bookings.html) | ![screenshot](documentation/validation/html--bookings.png) | ⚠️ Notes (if applicable) |
|  | [confirmation.html](https://github.com/Louiseskinner01/project1-lskinner/blob/main/confirmation.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://louiseskinner01.github.io/project1-lskinner/confirmation.html) | ![screenshot](documentation/validation/html--confirmation.png) | ⚠️ Notes (if applicable) |
|  | [index.html](https://github.com/Louiseskinner01/project1-lskinner/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://louiseskinner01.github.io/project1-lskinner/index.html) | ![screenshot](documentation/validation/html--index.png) | ⚠️ Notes (if applicable) |
|  | [my-gym.html](https://github.com/Louiseskinner01/project1-lskinner/blob/main/my-gym.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://louiseskinner01.github.io/project1-lskinner/my-gym.html) | ![screenshot](documentation/validation/html--my-gym.png) | ⚠️ Notes (if applicable) |
|  | [nutrition.html](https://github.com/Louiseskinner01/project1-lskinner/blob/main/nutrition.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://louiseskinner01.github.io/project1-lskinner/nutrition.html) | ![screenshot](documentation/validation/html--nutrition.png) | ⚠️ Notes (if applicable) |

#### CSS
I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [stylesheet.css](https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/css/stylesheet.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/css/stylesheet.css) | ![screenshot](documentation/validation/css/stylesheet-url-error.png) ![screenshot](documentation/validation/css/stylesheet-url-error1-fixed.png) ![screenshot](documentation/validation/css/stylesheet-upload-valid.png) | When validating my CSS, the file upload and copy-and-paste methods passed with no errors. However, using the GitHub URL produced several validation errors, likely due to external factors or differences in how the file was accessed. |
|  | [workingout-grid.css](https://github.com/Louiseskinner01/project1-lskinner/blob/main/assets/css/new-stylesheet.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/css/workingout-grid.css) | ![screenshot](documentation/validation/css/workingout-grid-url-errors.png) ![screenshot](documentation/validation/css/workingout-grid-upload-valid.png) | same as above|
|  | [other-styling.css](https://github.com/Louiseskinner01/project1-lskinner/blob/main/assets/css/new-stylesheet.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/css/other-styling.css) | ![screenshot](documentation/validation/css/other-styling-url-errors.png) ![screenshot](documentation/validation/css/other-styling-upload-valid.png) | same as above  |
|  | [global-variables.css](https://github.com/Louiseskinner01/project1-lskinner/blob/main/assets/css/new-stylesheet.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/css/global-variables.css) | ![screenshot](documentation/validation/css/global-variables-url-errors.png) ![screenshot](documentation/validation/css/global-variables-upload-valid.png) | sam as above |

#### JS
I have used the recommended [JSHint](https://jshint.com/) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [script.js](https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/js/script.js) | [JSHint valid code](https://jigsaw.w3.org/css-validator/validator?uri=https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/js/script.js) |![screenshot](documentation/validation/js/script-warnings-top.png) ![screenshot](documentation/validation/js/script-warnings-bottom.png)![screenshot](documentation/validation/js/script-warnings-reduced.png)![screenshot](documentation/validation/js/script-warnings-none.png)| I added `/* jshint esversion: 6 */` to the top of my js files and that reduced the warnings by a significant amount. |
|  | [workingout-grid.js](https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/js/workingout-grid.js) | [JSHint valid code](https://jigsaw.w3.org/css-validator/validator?uri=) | ![screenshot](documentation/validation/js/workingout-grid-warnings.png) ![screenshot](documentation/validation/js/workingout-grid-warnings-reduced.png) | ` /* jshint esversion: 11 */` `/* exported createEquationRow, createKeypad */` |
|  | [orientation.js](https://github.com/Louiseskinner01/project2-the-countdown/blob/main/assets/js/orientation.js) | [JSHint valid code](https://jigsaw.w3.org/css-validator/validator?uri=) | ![screenshot](documentation/validation/js/orientation-warnings-none.png)  | ` /* jshint esversion: 6 */` |


## Performance 
### Lighthouse Performance

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |  Notes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-index-good.png) | ![screenshot](documentation/lighthouse-performance/desktop/lighthouse-dt-index.png) |This is the first page that was tested so its at this stage that the most effective changes were made. Meta tags were added to help improve SEO. The previous image taht sat in the navbar was resized to help improve the page load, this had a positive impact but was minute. Aria lables were added to the footers where the social icons are. It is also at this stage that the fontawesome script tag was removed from html pages and replaced with a cdn link, speeding up the page load and improving the overal performance.|
Instructions | ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-instructions-satisfactory.png) | ![screenshot](documentation/lighthouse-performance/desktop/lighthouse-dt-instructions.png) | There we a few minor issues related to accessibility that had a negative impact on the perofrmance. ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-instructions-poor.png) |
| Math Practice | ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-practice-good.png) | ![screenshot](documentation/lighthouse-performance/desktop/lighthouse-dt-practice.png) | Testing was still showing that the image in the navbar could be smaller in size, plus feedback on the readability of the image initiated me to change tge image completely. Once I created a new image, resized it using tinyPNG and commited it into the project, the performance improved, not only on this page but all previously tested pages. |
| Virtual Events | ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-registration-good.png) | ![screenshot](documentation/lighthouse-performance/desktop/lighthouse-dt-registration.png) | The first set of lighthouse tests for the mobile site came back with a performance of 84%. After chnaging the navbar image and adding a good alt description, the performance improved. |
| Form-submitted | ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-form-submitted-good.png) | ![screenshot](documentation/lighthouse-performance/desktop/lighthouse-dt-form-submitted.png) | Due to the erros found and corrections made on previous pages, there wasn't anything major effecting this page, resulting in a good performance level. ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-form-submitted-poor.png)|
| 404 | ![screenshot](documentation/lighthouse-performance/mobile/lighthouse-404-good.png) | ![screenshot](documentation/lighthouse-performance/desktop/lighthouse-dt-404.png) | Due to the erros found and corrections made on previous pages, there wasn't anything major effecting this page, resulting in a good performance level. |

### Accessibility Summary 
 
| Test                                                             | Result |
| ---------------------------------------------------------------- | ------ |
| The web app follows the WCAG (web content accessibility guidelines) 2.1 standards                          | ![](documentation/images/accessibility-fail.png)    |
| Text size and spacing adjustable                                 | ✅      |
| Interactive elements clearly labeled and accessible via keyboard | ✅      |
| ARIA labels provided for key game sections                       | ✅      |
| Orientation and responsiveness maintained for screen readers     | ✅      |



## Bugs / Fixes

| Issue      | Cause  | Solution    | Status  |
| --------------------------------------------- | ------------------------------ | -------------------------- | ------- |
 Keypad not resizing correctly                 | Flexbox conflict               | Adjusted grid layout                   | ✅ Fixed |
| Timer not resetting on replay                 | Countdown interval not cleared | Added `clearInterval()`                | ✅ Fixed |
| “Play?” span reappeared on orientation change | Re-triggered event listener    | Added `.remove()` on click             | ✅ Fixed |
| Placeholder color not applying                | CSS selector conflict          | Used `::placeholder` with `!important` | ✅ Fixed |
| Buttons remaining visible when the screen size is reduced or mobile device in put into portrait          | Missing DOM elements in the orientation.js file       | Added `const controllerBtnsContainer = document.getElementById("controllers-area");` & `controllerBtnsContainer.classList.add("hidden");` in the IF condition, with `controllerBtnsContainer.classList.remove("hidden");` in the else condition| ✅ Fixed |
### Known/Existing Issues

| Issue                 | Screenshot |
| --------------------- | --- | 
 When an equation has been undone using the undo btn, the numbers that had been previously used, remain striked out. | ![screenshot](documentation/bugs/bug-uno-1.png)![screenshot](documentation/bugs/bug-undo-2.png)  ![screenshot](documentation/bugs/bug-undo-3.png) |
 There is an issue with the opacity of the **equation input** when the game is in play. The backgorund of the **equation input** should be white and remain white for the duration of play, however when playing The Countdown on a mobile device the **equation input** loses opacity. |**Laptop** ![screenshot](documentation/bugs/existing/existing-issue-laptop.png) **Mobile** ![screenshot](documentation/bugs/existing/existing-issue-mobile.PNG) |

> [!IMPORTANT]  
> From my testing I have not identified any bugs other than the ones listed in the above sections. If you identify any new bugs please feel free to contact me and/or clone the project and fix the issue.