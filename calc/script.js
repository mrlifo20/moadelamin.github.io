// الحصول على عناصر DOM
const display = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button:not(.equal)'); // الحصول على جميع الأزرار باستثناء "="
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const calculateBtn = document.getElementById('calculateBtn');

// إضافة مستمعي الأحداث (Event Listeners) للأزرار
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // إذا لم يكن الزر هو C أو DEL، قم بإضافة قيمته للشاشة
        if (button.value) {
            appendToDisplay(button.value);
        }
    });
});

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLast);
calculateBtn.addEventListener('click', calculate);

// الدوال
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
       
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
 
        setTimeout(clearDisplay, 1500);
    }
}