document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
      const para = document.createElement('p');
      para.textContent = 'Eu falei para não aperta!';
      document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');

    for (const button of buttons) {
      button.addEventListener('click', createParagraph);
    }
  });