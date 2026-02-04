
document.addEventListener('DOMContentLoaded', () => {

    function setupDatePicker(blockId) {
        const block = document.querySelector(blockId);
        if (!block) return;

        const input = block.querySelector('input');
        const textSpan = block.querySelector('.date-text');

        block.addEventListener('click', () => {
            input.showPicker();
        });


        input.addEventListener('change', () => {
            if (input.value) {

                textSpan.textContent = input.value;
            }
        });
    }


    setupDatePicker('#checkIn');
    setupDatePicker('#checkout');
});

