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
