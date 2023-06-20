// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the necessary elements
  const elementSelect = document.getElementById('elementSelect');
  const elementContainer = document.getElementById('elementContainer');
  const toolsContainer = document.getElementById('tools');
  const generatedCodeContainer = document.getElementById('generatedCode');
  const seeCodeButton = document.getElementById('seeCodeButton');


  // Handle element selection change
  elementSelect.addEventListener('change', function() {
    const selectedElement = elementSelect.value;
    elementContainer.innerHTML = createNewElement(selectedElement);
    toolsContainer.innerHTML = createTools(selectedElement);
  });

  // Update the element properties and generated code based on tool changes
  toolsContainer.addEventListener('input', function(event) {
    const selectedElement = elementSelect.value;
    const updatedElement = updateElement(selectedElement);
    elementContainer.innerHTML = updatedElement;
    generatedCodeContainer.textContent = updatedElement;
  });

  // Show the generated code when the button is clicked
  seeCodeButton.addEventListener('click', function() {
    generatedCodeContainer.style.display = 'block';
  });
});
// ...

// Create a new element based on the selected type
function createNewElement(type) {
  let element;
  switch (type) {
    case 'button':
      element = '<button>Click Me</button>';
      break;
    case 'input':
      element = '<input type="text" placeholder="Enter text">';
      break;
    case 'textarea':
      element = '<textarea></textarea>';
      break;
    case 'checkbox':
      element = '<input type="checkbox"> Checkbox';
      break;
    case 'label':
      element = '<label>Label</label>';
      break;
    // Add more cases for other elements
  }
  return element;
}

// ...

// Create the tools based on the selected element
function createTools(type) {
  let tools;
  switch (type) {
    case 'button':
      tools = `
        Button Tools:
        <input type="text" id="buttonText" placeholder="Button Text"><br>
        <label for="buttonBackgroundColor">Background Color:</label>
        <input type="color" id="buttonBackgroundColor"><br>
        <label for="buttonTextColor">Text Color:</label>
        <input type="color" id="buttonTextColor"><br>
        <label for="buttonFontSize">Font Size:</label>
        <input type="number" id="buttonFontSize"><br>
        <label for="buttonBorderRadius">Border Radius:</label>
        <input type="number" id="buttonBorderRadius"><br>
        <label for="buttonBoxShadow">Box Shadow:</label>
        <input type="text" id="buttonBoxShadow" placeholder="e.g., 2px 2px 4px rgba(0, 0, 0, 0.2)">
      `;
      break;
    case 'input':
      tools = `
        Input Tools:
        <input type="text" id="inputPlaceholder" placeholder="Input Placeholder"><br>
        <label for="inputBackgroundColor">Background Color:</label>
        <input type="color" id="inputBackgroundColor"><br>
        <label for="inputTextColor">Text Color:</label>
        <input type="color" id="inputTextColor"><br>
        <label for="inputFontSize">Font Size:</label>
        <input type="number" id="inputFontSize"><br>
        <label for="inputBorderRadius">Border Radius:</label>
        <input type="number" id="inputBorderRadius"><br>
        <label for="inputBoxShadow">Box Shadow:</label>
        <input type="text" id="inputBoxShadow" placeholder="e.g., 2px 2px 4px rgba(0, 0, 0, 0.2)">
      `;
      break;
    case 'textarea':
      tools = `
        Textarea Tools:
        <label for="textareaRows">Number of Rows:</label>
        <input type="number" id="textareaRows"><br>
        <label for="textareaBackgroundColor">Background Color:</label>
        <input type="color" id="textareaBackgroundColor"><br>
        <label for="textareaTextColor">Text Color:</label>
        <input type="color" id="textareaTextColor"><br>
        <label for="textareaFontSize">Font Size:</label>
        <input type="number" id="textareaFontSize"><br>
        <label for="textareaBorderRadius">Border Radius:</label>
        <input type="number" id="textareaBorderRadius"><br>
        <label for="textareaBoxShadow">Box Shadow:</label>
        <input type="text" id="textareaBoxShadow" placeholder="e.g., 2px 2px 4px rgba(0, 0, 0, 0.2)">
      `;
      break;
    case 'checkbox':
      tools = `
        Checkbox Tools:
        <input type="text" id="checkboxLabel" placeholder="Checkbox Label"><br>
        <label for="checkboxTextColor">Text Color:</label>
        <input type="color" id="checkboxTextColor"><br>
        <label for="checkboxFontSize">Font Size:</label>
        <input type="number" id="checkboxFontSize"><br>
        <label for="checkboxCursor">Cursor:</label>
        <select id="checkboxCursor">
          <option value="auto">Auto</option>
          <option value="pointer">Pointer</option>
          <option value="crosshair">Crosshair</option>
          <option value="move">Move</option>
          <!-- Add more cursor styles as needed -->
        </select>
      `;
      break;
    case 'label':
      tools = `
        Label Tools:
        <input type="text" id="labelText" placeholder="Label Text"><br>
        <label for="labelTextColor">Text Color:</label>
        <input type="color" id="labelTextColor"><br>
        <label for="labelFontSize">Font Size:</label>
        <input type="number" id="labelFontSize"><br>
        <label for="labelFontWeight">Bold:</label>
        <input type="checkbox" id="labelFontWeight"><br>
        <label for="labelLink">Link:</label>
        <input type="text" id="labelLink" placeholder="Label URL"><br>
        <label for="labelCursor">Cursor:</label>
        <select id="labelCursor">
          <option value="auto">Auto</option>
          <option value="pointer">Pointer</option>
          <option value="crosshair">Crosshair</option>
          <option value="move">Move</option>
          <!-- Add more cursor styles as needed -->
        </select>
      `;
      break;
    // Add more cases for other elements
  }
  return tools;
}

// Update the element based on the tool changes
function updateElement(type) {
  let updatedElement;
  switch (type) {
    case 'button':
      const buttonText = document.getElementById('buttonText').value;
      const buttonBackgroundColor = document.getElementById('buttonBackgroundColor').value;
      const buttonTextColor = document.getElementById('buttonTextColor').value;
      const buttonFontSize = document.getElementById('buttonFontSize').value;
      const buttonBorderRadius = document.getElementById('buttonBorderRadius').value;
      const buttonBoxShadow = document.getElementById('buttonBoxShadow').value;
      updatedElement = `<button style="background-color: ${buttonBackgroundColor}; color: ${buttonTextColor}; font-size: ${buttonFontSize}px; border-radius: ${buttonBorderRadius}px; box-shadow: ${buttonBoxShadow}">${buttonText}</button>`;
      break;
    case 'input':
      const inputPlaceholder = document.getElementById('inputPlaceholder').value;
      const inputBackgroundColor = document.getElementById('inputBackgroundColor').value;
      const inputTextColor = document.getElementById('inputTextColor').value;
      const inputFontSize = document.getElementById('inputFontSize').value;
      const inputBorderRadius = document.getElementById('inputBorderRadius').value;
      const inputBoxShadow = document.getElementById('inputBoxShadow').value;
      updatedElement = `<input type="text" placeholder="${inputPlaceholder}" style="background-color: ${inputBackgroundColor}; color: ${inputTextColor}; font-size: ${inputFontSize}px; border-radius: ${inputBorderRadius}px; box-shadow: ${inputBoxShadow}">`;
      break;
    case 'textarea':
      const textareaRows = document.getElementById('textareaRows').value;
      const textareaBackgroundColor = document.getElementById('textareaBackgroundColor').value;
      const textareaTextColor = document.getElementById('textareaTextColor').value;
      const textareaFontSize = document.getElementById('textareaFontSize').value;
      const textareaBorderRadius = document.getElementById('textareaBorderRadius').value;
      const textareaBoxShadow = document.getElementById('textareaBoxShadow').value;
      updatedElement = `<textarea rows="${textareaRows}" style="background-color: ${textareaBackgroundColor}; color: ${textareaTextColor}; font-size: ${textareaFontSize}px; border-radius: ${textareaBorderRadius}px; box-shadow: ${textareaBoxShadow}"></textarea>`;
      break;
    case 'checkbox':
      const checkboxLabel = document.getElementById('checkboxLabel').value;
      const checkboxTextColor = document.getElementById('checkboxTextColor').value;
      const checkboxFontSize = document.getElementById('checkboxFontSize').value;
      const checkboxCursor = document.getElementById('checkboxCursor').value;
      updatedElement = `<label style="color: ${checkboxTextColor}; font-size: ${checkboxFontSize}px; cursor: ${checkboxCursor}"><input type="checkbox"> ${checkboxLabel}</label>`;
      break;
case 'label':
      const labelText = document.getElementById('labelText').value;
      const labelTextColor = document.getElementById('labelTextColor').value;
      const labelFontSize = document.getElementById('labelFontSize').value;
      const labelFontWeight = document.getElementById('labelFontWeight').checked ? 'bold' : 'normal';
      const labelLink = document.getElementById('labelLink').value;
      const labelCursor = document.getElementById('labelCursor').value;
      const labelDecoration = document.getElementById('labelDecoration').value;
      const labelFontName = document.getElementById('labelFontName').value;

      updatedElement = `<label style="color: ${labelTextColor}; font-size: ${labelFontSize}px; font-weight: ${labelFontWeight}; cursor: ${labelCursor}; text-decoration: ${labelDecoration}; font-family: ${labelFontName};"><a href="${labelLink}">${labelText}</a></label>`;
      break;
    // Add more cases for other elements
  }
  return updatedElement;
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the necessary elements
  const elementSelect = document.getElementById('elementSelect');
  const elementContainer = document.getElementById('elementContainer');
  const toolsContainer = document.getElementById('tools');
  const generatedCodeContainer = document.getElementById('generatedCode');
  const seeCodeButton = document.getElementById('seeCodeButton');

  // Handle element selection change
  elementSelect.addEventListener('change', function() {
    const selectedElement = elementSelect.value;
    elementContainer.innerHTML = createNewElement(selectedElement);
    toolsContainer.innerHTML = createTools(selectedElement);
  });

 // Update the element properties and generated code based on tool changes
  toolsContainer.addEventListener('input', function(event) {
    const selectedElement = elementSelect.value;
    const updatedElement = updateElement(selectedElement);
    elementContainer.innerHTML = updatedElement;
    generatedCodeContainer.textContent = updatedElement;
  });

  // Show the generated code popup when the button is clicked
  seeCodeButton.addEventListener('click', function() {
    const popupContainer = document.getElementById('popupContainer');
    const generatedCode = document.getElementById('generatedCode');
    popupContainer.style.display = 'block';
    generatedCode.textContent = generatedCodeContainer.textContent;
  });

  // Copy the generated code to the clipboard when the "Copy Code" button is clicked
  copyCodeButton.addEventListener('click', function() {
    const generatedCode = document.getElementById('generatedCode');
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = generatedCode.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Code copied to clipboard!');
  });
});
