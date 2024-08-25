function orderDish(dishName) {
    // Assume you have logic here to process the order
    
    // Add the price for each dish
    let price = 0;
    switch(dishName) {
        case 'Carbonara':
        case 'Pizza':
            price = 12.00;
            break;
        case 'Tacos':
        case 'Banh Mi':
            price = 9.00;
            break;
        case 'PokeBol':
            price = 18.00;
            break;
        default:
            price = 0;
    }

    // Push the revenue data to the data layer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'purchase',
        'price': price,
        'dishName': dishName
    });

    alert('You have ordered: ' + dishName + ' for $' + price.toFixed(2));
}


function submitReview(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Push the rating value to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'reviewSubmission',
        'reviewerName': name,
        'rating': rating,
        'review': review
    });

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

    // Push the email value to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'subscription',
        'subscriberEmail': email
    });

    alert(`Thank you for subscribing! Discounts will be sent to: ${email}`);

    document.getElementById('subscribeForm').reset();
}


function viewAllReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const reviews = reviewsList.children;
    let allReviews = '';

    for (let i = 0; i < reviews.length; i++) {
        const reviewElement = reviews[i];
        const nameRating = reviewElement.querySelector('h4').textContent;
        const reviewText = reviewElement.querySelector('p').textContent;
        allReviews += `${nameRating}\n${reviewText}\n\n`;
    }

    alert(allReviews);
}
