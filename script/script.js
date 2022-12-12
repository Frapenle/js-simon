buttonElement = document.querySelector('button');
let stop = false;
let counter = 0;

buttonElement.addEventListener(('click'), function () {
    buttonElement.innerHTML = `Play ${counter}`;
    if (!stop) {
        if (counter < 10) {
            counter++;
            buttonElement.innerHTML = `Play ${counter}`;
        } else {
            setTimeout(() => {
                counter = 0;
                buttonElement.classList.remove('btn-danger');
                buttonElement.innerHTML = `Play ${counter}`;
                stop = false;
            }, 5000);
        }
    }
    if (counter == 10) {
        buttonElement.classList.add('btn-danger');
    }
});