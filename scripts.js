$(document).ready(function() {
    const apiUrl = "https://smileschool-api.alx-tools.com/quotes";
    const $carouselInner = $("#quotes-carousel");
    const $loader = $(".loader");

    function fetchQuotes() {
        $loader.show(); // Show the loader before AJAX call
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                $carouselInner.empty(); // Clear any existing carousel items
                data.forEach((quote, index) => {
                    const isActive = index === 0 ? "active" : "";
                    const carouselItem = `
                        <div class="carousel-item ${isActive}">
                            <div class="row align-items-center mx-auto">
                                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                                    <img src="${quote.pic_url}" alt="Profile Picture" class="d-block align-self-center">
                                </div>
                                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                                    <div class="quote-text">
                                        <p class="text-white">« ${quote.text} »</p>
                                        <h4 class="text-white">${quote.name}</h4>
                                        <span class="text-white">${quote.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    $carouselInner.append(carouselItem);
                });
            },
            error: function() {
                alert("Error loading quotes. Please try again later.");
            },
            complete: function() {
                $loader.hide(); // Hide the loader after AJAX call completes
            }
        });
    }

    fetchQuotes();
});

$(document).ready(function() {
    const apiUrl = "https://smileschool-api.alx-tools.com/popular-tutorials";
    const $carouselInner = $("#popular-carousel");
    const $loader = $(".loader");

    function fetchCard() {
        $loader.show();
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                $carouselInner.empty();
                const cardsPerSlide = 4; // Number of cards per carousel slide

                for (let i = 0; i < data.length; i += cardsPerSlide) {
                    const slideData = data.slice(i, i + cardsPerSlide);
                    const isActive = i === 0 ? "active" : "";
                    const carouselItem = `
                        <div class="carousel-item ${isActive}">
                            <div class="row align-items-center mx-auto">
                                ${slideData.map(card => `
                                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                                        <div class="card">
                                            <img src="${card.thumb_url}" alt="Video thumbnail" class="card-image-top">
                                            <div class="card-body">
                                                <h5 class="card-title font-weight-bold">${card.title}</h5>
                                                <p class="card-text text-muted">${card['sub-title']}</p>
                                                <div class="creator d-flex align-items-center">
                                                    <img src="${card.author_pic_url}" class="rounded-circle" alt="Creator of Video" width="30px">
                                                    <h6 class="pl-3 m-0 main-color">${card.author}</h6>
                                                </div>
                                                <div class="d-flex align-items-center mt-2">
                                                    ${'<span class="star">&#9733;</span>'.repeat(card.star)}
                                                    ${'<span class="star">&#9734;</span>'.repeat(5 - card.star)}
                                                    <span class="ml-auto">${card.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    $carouselInner.append(carouselItem);
                }
            },
            error: function() {
                alert("Error loading videos. Please try again later.");
            },
            complete: function() {
                $loader.hide(); // Hide the loader after AJAX call completes
            }
        });
    }

    fetchCard();
});

$(document).ready(function() {
    const apiUrl = "https://smileschool-api.alx-tools.com/latest-videos";
    const $carouselInner = $("#latest-carousel");
    const $loader = $(".loader");

    function fetchCard() {
        $loader.show();
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                $carouselInner.empty();
                const cardsPerSlide = 4; // Number of cards per carousel slide

                for (let i = 0; i < data.length; i += cardsPerSlide) {
                    const slideData = data.slice(i, i + cardsPerSlide);
                    const isActive = i === 0 ? "active" : "";
                    const carouselItem = `
                        <div class="carousel-item ${isActive}">
                            <div class="row align-items-center mx-auto">
                                ${slideData.map(card => `
                                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                                        <div class="card">
                                            <img src="${card.thumb_url}" alt="Video thumbnail" class="card-image-top">
                                            <div class="card-body">
                                                <h5 class="card-title font-weight-bold">${card.title}</h5>
                                                <p class="card-text text-muted">${card['sub-title']}</p>
                                                <div class="creator d-flex align-items-center">
                                                    <img src="${card.author_pic_url}" class="rounded-circle" alt="Creator of Video" width="30px">
                                                    <h6 class="pl-3 m-0 main-color">${card.author}</h6>
                                                </div>
                                                <div class="d-flex align-items-center mt-2">
                                                    ${'<span class="star">&#9733;</span>'.repeat(card.star)}
                                                    ${'<span class="star">&#9734;</span>'.repeat(5 - card.star)}
                                                    <span class="ml-auto">${card.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    $carouselInner.append(carouselItem);
                }
            },
            error: function() {
                alert("Error loading videos. Please try again later.");
            },
            complete: function() {
                $loader.hide(); // Hide the loader after AJAX call completes
            }
        });
    }

    fetchCard();
});
