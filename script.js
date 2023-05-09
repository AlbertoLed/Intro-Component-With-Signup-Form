const form = document.querySelector('form');

form.addEventListener('click', function(e) {
    const target = e.target;
    // console.log(target);

    // If clicked on button and any input is empty then apply empty state on each empty input
    if(target.matches('#btn-submit')) {
        e.preventDefault();
        
        let element, errorElement;
        for(i = 0; i < 8; i++) {
            element = form.children[i];
            errorElement = form.children[i + 1];

            if(!element.value) {
                element.classList.add('empty-state');

                // Show error message
                errorElement.classList.remove('hidden');

                // If email input is empty then change placeholder to show example
                if(element.matches('#email')) {
                    addEmailExample(element);
                    errorElement.innerText = 'Email cannot be empty';
                }
            }
            else if(element.matches('#email')) {
                const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

                console.log(re.test(element.value));
                // If email input is wrong then send error message
                if(!re.test(element.value)) {

                    element.classList.add('empty-state');
                    errorElement.innerText = 'Looks like this is not an email';
                    errorElement.classList.remove('hidden');
                }
                else {
                    errorElement.classList.add('hidden');
                }
            }
            else {
                errorElement.classList.add('hidden');
            }
            i++;
        }
    }
    // Remove Empty State if focus on the input
    else if(
        target.matches('#first-name') || 
        target.matches('#last-name') ||
        target.matches('#email') ||
        target.matches('#password')) {
        target.classList.remove('empty-state');
    }
});

// Change Email's placeholder to show example
function addEmailExample(target) {
    target.placeholder = "email@example.com";
}
