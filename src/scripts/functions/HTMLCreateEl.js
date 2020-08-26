const CreateEl = (element, text, elClass, parent) => {
  const el = document.createElement(element);

  element === 'img' ? el.src = text
    : el.textContent = text =
    typeof text !== 'string' ? text.toString() : text;

  switch (elClass.substr(0, 1)) {
    case '.':
      el.classList.add(elClass.substr(1));
      break;
    case '#':
      el.setAttribute('id', elClass.substr(1));
      break;
    default:
      console.log('no class/id');
      break;
  }

  parent.appendChild(el);
};

export default CreateEl;
