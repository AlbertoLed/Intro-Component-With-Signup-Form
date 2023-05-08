// const btn = document.querySelector('button');
// const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

form.addEventListener('click', function(e) {
    const target = e.target;
    // console.log(target);

    // If clicked on button and any input is empty then apply empty state on each empty input
    if(target.matches('#btn-submit')) {
        e.preventDefault();
        // console.log('btn');
        for(i = 0; i < 4; i++) {
            if(!form.children[i].value) {
                form.children[i].classList.add('empty-state');

                // If email input is empty then change placeholder to show example
                if(form.children[i].matches('#email')) {
                    addEmailExample(form.children[i]);
                }
            }
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


// const form = document.querySelector('form');
// const firstName = document.querySelector('#first-name');

// form.addEventListener ("submit", (e) => {
//     e.preventDefault();
// });

// function validate() {
//     firstName.style.border = '1px solid hsl(0, 100%, 74%)';
//     console.log('hola');
// }