document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product-card button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});
