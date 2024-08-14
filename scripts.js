function orderDish(dishName) {
    alert(`You have ordered: ${dishName}`);
}

function submitReview(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    const reviewHTML = `
        <div>
            <h4>${name} (Rating: ${rating}/5)</h4>
            <p>${review}</p>
        </div>
    `;

    document.getElementById('reviewsList').innerHTML += reviewHTML;

    document.getElementById('reviewForm').reset();

    alert('Thank you for your review!');
}

function submitSubscription(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    alert(`Thank you for subscribing! Discounts will be sent to: ${email}`);

    document.getElementById('subscribeForm').reset();
}
