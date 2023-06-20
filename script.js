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
  toolsContainer.addEventListener('change', function(event) {
    const selectedElement = elementSelect.value;
    const updatedElement = updateElement(selectedElement, event.target);
    elementContainer.innerHTML = updatedElement;
    generatedCodeContainer.textContent = updatedElement;
  });

  // Show the generated code when the button is clicked
  seeCodeButton.addEventListener('click', function() {
    generatedCodeContainer.style.display = 'block';
  });

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
      // Add more cases for other elements
    }
    return element;
  }

  // Create the tools based on the selected element
  function createTools(type) {
    let tools;
    switch (type) {
      case 'button':
        tools = 'Button Tools: <input type="text" id="buttonText" placeholder="Button Text">';
        break;
      case 'input':
        tools = 'Input Tools: <input type="text" id="inputPlaceholder" placeholder="Input Placeholder">';
        break;
      case 'textarea':
        tools = 'Textarea Tools: <input type="number" id="textareaRows" placeholder="Number of Rows">';
        break;
      // Add more cases for other elements
    }
    return tools;
  }

  // Update the element based on the tool changes
  function updateElement(type, target) {
    let updatedElement;
    switch (type) {
      case 'button':
        const buttonText = document.getElementById('buttonText').value;
        updatedElement = `<button>${buttonText}</button>`;
        break;
      case 'input':
        const inputPlaceholder = document.getElementById('inputPlaceholder').value;
        updatedElement = `<input type="text" placeholder="${inputPlaceholder}">`;
        break;
      case 'textarea':
        const textareaRows = document.getElementById('textareaRows').value;
        updatedElement = `<textarea rows="${textareaRows}"></textarea>`;
        break;
      // Add more cases for other elements
    }
    return updatedElement;
  }
});

