const bodyEl = document.body;
const toggleEL = document.querySelector("input[type='checkbox']");

toggleEL.addEventListener('change', function () {
    if (bodyEl.classList.contains('dark-theme')) {
        bodyEl.classList.remove('dark-theme');
        bodyEl.classList.add('light-theme');
    } else {
        bodyEl.classList.remove('light-theme');
        bodyEl.classList.add('dark-theme');
    }
});