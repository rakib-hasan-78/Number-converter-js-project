// Import statements
import { resultFunction } from "./result.js";


// Constants declaration
const thousand = 1000;

// Function to handle number formatting
export const numberFormatter = (
  number,
  card,
  cardTitle,
  resultCircle,
  resultCounter,
  resultText
) => {
  const givenNumber = parseFloat(number.value);
  const million = 1000000;
  const billion = 1000000000;
  const trillion = 1000000000000;

  let result;

  if (isNaN(givenNumber)) {
    resultFunction(
      card,
      'd-none',
      'd-flex',
      cardTitle,
      'd-none',
      'd-flex',
      'var(--bs-danger)',
      'Error! provide a valid number!',
      resultCircle,
      null,
      null,
      resultCounter,
      null,
      null,
      null,
      resultText,
      null,
      null,
      null,
      null
    );
    return;
  }

  if (givenNumber >= thousand) {
    result =
      givenNumber % thousand === 0
        ? givenNumber / thousand + 'K'
        : (givenNumber / thousand).toFixed(1) + 'K';
  }

  if (givenNumber >= million) {
    result =
      givenNumber % million === 0
        ? givenNumber / million + 'M'
        : (givenNumber / million).toFixed(1) + 'M';
  }

  if (givenNumber >= billion) {
    result =
      givenNumber % billion === 0
        ? givenNumber / billion + 'B'
        : (givenNumber / billion).toFixed(1) + 'B';
  }

  if (givenNumber >= trillion) {
    result =
      givenNumber % trillion === 0
        ? givenNumber / trillion + 'T'
        : (givenNumber / trillion).toFixed(1) + 'T';
  }

  resultFunction(
    card,
    'd-none',
    'd-flex',
    cardTitle,
    'd-none',
    'd-flex',
    'color:var(--bs-form-valid-color) !important',
    'Successful',
    resultCircle,
    'd-none',
    'd-flex',
    resultCounter,
    'd-none',
    'd-flex',
    result,
    resultText,
    'd-none',
    'd-flex',
    'color:var(--bs-form-valid-color) !important;',
    '600',
    result,
    givenNumber
  );
};