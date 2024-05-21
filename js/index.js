        // Initialize counter
        let count = 0;

        // Get button elements
        const incrementButton = document.getElementById('incrementButton');
        const resetButton = document.getElementById('resetButton');
        const counterElement = document.getElementById('counter');

        // Increment button click handler
        incrementButton.addEventListener('click', () => {
            count++;
            counterElement.textContent = count;
        });

        // Reset button click handler
        resetButton.addEventListener('click', () => {
            count = 0;
            counterElement.textContent = count;
        });