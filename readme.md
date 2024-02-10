# Number Formatting Application  
 
The Number Formatting Web Application is a simple yet **powerful tool** designed to convert *Large Numbers into a Shorter*, more readable format. It provides users with an intuitive interface to input numeric values and receive formatted outputs based on predefined conversion rules.
## Key Features :  
---  
- **Number Formatting:** Converts large numbers into shorter representations, such as thousands **(K)**, millions **(M)**, billions **(B)**, and trillions **(T)**, for easier comprehension.   
- **User Interaction:** Offers a user-friendly interface where users can input numeric values and trigger the conversion process with a single click.
- **Real-time Feedback:** Provides instant feedback on the converted number, including visual indicators and descriptive messages to enhance user understanding.
- **Formatting :** Allows users to close the formatting result.    

## Technologies Used :  
---   
- HTML5: `<html>` Defines the structure and content of the web page.
- CSS3 : `<css>` Styles the visual elements and layout of the web application for a polished user experience.
- JavaScript (ES6) : `<javascript>` Implements dynamic behavior, user interaction, and number formatting logic to enrich the functionality of the web application.

- Bootstrap V5.1.3 : `<Bootstrap>` Utilizes Bootstrap for responsive design elements and pre-styled components to streamline development.

## Project Structure :  
---   
The project is structured into several files to organize the code logically:   
- **index.html :** The main HTML file defining the structure of the web page, including input fields, buttons, and result displays.  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Formatting</title>
    <!-- Include necessary CSS and JavaScript libraries -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <div id="root"></div>
    <!-- Include necessary JavaScript files -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./index.js" type="module"></script>
</body>
</html>
```   
- **index.js :**  The main JavaScript file that handles DOM manipulation, event handling, and imports other modules.   
```js
// Import necessary functions and modules
import { styleFunction } from './style.js';
import { clickListener } from './clickListener.js';
import { close } from './close.js';


// DOM manipulation and event handling
document.getElementById('root').innerHTML = `
    <!-- HTML structure for the UI -->
`;

// Select DOM elements
const numberInput = document.getElementById('number-input');
const card = document.getElementById('card');
const title = document.getElementById('resultTitle');
const resultCircle = document.getElementById('result-circle');
const resultCounter = document.getElementById('result-counter');
const resultText = document.getElementById('result-text');
const btn = document.getElementById('btn');
const xIcon = document.getElementById('x-icon');

// Apply initial styles
styleFunction();

// Add event listeners
clickListener(...parameters);
xIcon.addEventListener('click', () => close(...parameters));

```
- **style.js :** Contains a function to apply CSS styles dynamically using CSS variables.   
```js
// Style function for CSS styling
export const styleFunction = () => {
    // Define CSS variables and styles
    // ...
    // Create a style element and append it to the document head
};

```
- **formatter.js:** Defines a function to format numbers based on user input.

```js
// Function to handle number formatting
export const numberFormatter = (
...parameters
) => {
    // Logic to format the given number
    // Update the UI based on the formatted number
};

```
- **result.js:** Provides a function to update the result display based on the formatted number.    
```js
// Function to reset the result display
// Function to update the result based on the formatted number
export let resultFunction = (...parameters) => {
        // Update the result card with appropriate content and styles
};

// Define constants
export const thousand = 1000;


```
- **reset.js :** Contains a function to reset the result display.   

```js
// Function to reset the result display
export const resetCode = (...parameters) => {
    // Reset title, result circle, and result text
};

```   
- **close.js :**  Implements a function to handle the closing of the formatting result.   
```js
import { resetCode } from "./reset.js";
import { stateChange } from "./stateClear.js";
// Function to handle closing of the result card
export const close = (...parameters) => {
    // Close the result card and reset input and button states
    stateChange(...parameters);
    resetCode(...parameters);
};

```   
- **clickListener.js :** Defines a function to handle click events on the UI elements.  
```js
import { numberFormatter } from './formatter.js';
import { resultFunction, thousand } from './result.js';
import { stateChange } from './stateClear.js';
// Function to handle click events
export function clickListener(...parameters) {
    e.preventDefault();
    // Handle click events on the button
    resultFunction(...parameters)
    stateChange(...parameters)
    // Perform number formatting and update UI
    numberFormatter(...parameters)
}

```
- **stateClear.js :** Handles state changes, including clearing/resetting functionality for input fields and result displays.   

```js
export const stateChange =(...parameters)=>{
    // ** code to state change effect 
} 
```   
---   
## Getting Started:   
 1. Clone the repository to your local machine:   
```git 
git clone <repository-url>

```
2. Open the `index.html` file in a web browser to launch the Number Formatting Web Application.
3. Enter a numeric value into the input field and click the "Convert" button to see the formatted result.   
---   
## Contributing :   
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the functionality and usability of the application. Although it is a ***Mini-Project*** ! Please read the issue list before posting a PR.

## License
This project is licensed under the MPL-2.0 license - see the LICENSE file for details.   

