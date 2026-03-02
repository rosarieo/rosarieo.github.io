if (screen.width <= 699) {
document.location = "rosary.html";
    }

    function generateRandomNumber() {
        const digits = Math.floor(Math.random() * 3) + 4; // Random between 4 and 6
        let number = '';
        for (let i = 0; i < digits; i++) {
            number += Math.floor(Math.random() * 10);
        }
        return number;
    }

    function updateNumber() {
        const display = document.getElementById('number-display');
        display.classList.add('fade-out');
        setTimeout(() => {
            display.textContent = generateRandomNumber();
            display.classList.remove('fade-out');
        }, 500); // Match fade-out duration
    }

    window.onload = function() {
        updateNumber(); // Initial number
        setInterval(updateNumber, 15000); // Update every 15 seconds
    };
