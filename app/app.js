var PRODUCTS = [
    {
        "productTitle": "Coleman 6 Person Dome Tent",
        "productThumbImg": "images/tent.png",
        "productFullImg": "images/tent-full.png",
        "productBriefDesc": "A spacious tent suitable for sleeping four adults.",
        "productFullDesc": "A spacious tent suitable for sleeping four adults. Includes a rain fly and a separate ground cloth. The roomy interior includes Rainfly, Carry Bag, and Screened-In entry.",   
        "productPrice": "85.72",
        "productStars": "4.5",
        "productRetailer": "amazon.com",
        "productManufacturer": "Coleman",
        "productCategory": "Tents",
    
    },
    {
        "productTitle": "2 Pack Water Backpack",
        "productThumbImg": "images/hydrationpak.png",
        "productFullImg": "hydrationpak-full.png",
        "productBriefDesc": "2 Backpacks with 2L Water Bladder for Hiking, Running, Camping, Climbing, Cycling, Walking, Hunting.",
        "productFullDesc": "2 Backpacks with 2L Water Bladder for Hiking, Running, Camping, Climbing, Cycling, Walking, Hunting. Now featuring a leak-resistant system, but please switch the mouthpiece to OFF when not in use.",   
        "productPrice": "29.99",
        "productStars": "4.3",
        "productRetailer": "amazon.com",
        "productManufacturer": "Shayson",
        "productCategory": "Hydration",
    },
    {
        "productTitle": "Solo Stove Ranger 2.0 Fire Pit with Stand",
        "productThumbImg": "images/solostove.png",
        "productFullImg": "images/solostove-full.png",
        "productBriefDesc": "Perfectly designed for your backyard, or your next adventure in the woods.",
        "productFullDesc": "Solo Stove Ranger is our most compact outdoor fire pit or camping heater. It pushes the limits of both combustion airflow efficiency and portability while providing a low smoke fire that cannot be duplicated. The new 2.0 version features a removable base plate and ash pan for easy cleaning.",   
        "productPrice": "199.99",
        "productStars": "4.6",
        "productRetailer": "amazon.com",
        "productManufacturer": "Solo Stove",
        "productCategory": "Heating and Cooking",
    },
    {
        "productTitle": "Compass",
        "productThumbImg": "images/compass.png",
        "productFullImg": "images/compass-full.png",
        "productBriefDesc": "Don't get lost on your next adventure! Be prepared with this multi-functional compass.",
        "productFullDesc": "A compass is an instrument used for navigation and orientation that shows direction relative to the geographic cardinal directions (or points). Usually, a diagram called a compass rose shows the directions north, south, east, and west on the compass face as abbreviated initials.",   
        "productPrice": "11.99",
        "productStars": "4.6",
        "productRetailer": "amazon.com",
        "productManufacturer": "Sportneer",
        "productCategory": "Navigation",
    },
    {
        "productTitle": "Ultralight Inflatable Sleeping Pad",
        "productThumbImg": "images/inflatable-mat.png",
        "productFullImg": "images/inflatable-mat-full.png",
        "productBriefDesc": "Just Want to sleep comfortably anywhere? WANNTS sleeping pad innovation hexagon design is made special with body mapping technology. This quality portable camping pad is perfect.",
        "productFullDesc": "Made with the strongest outdoor-grade material, WANNTS sleeping pad is perfect for any weather conditions. Be able to accompany you on any type of adventure, our camping mattress pad inflates to an impressive size of 75in X 25in and will give you the comfort you need.The sleeping pad is waterproof and only 30OZ weight, making it perfect and super easy to carry for any outdoor activities.",   
        "productPrice": "27.98",
        "productStars": "4.2",
        "productRetailer": "amazon.com",
        "productManufacturer": "WANNTS",
        "productCategory": "Comfort",
    },
    {
        "productTitle": "Percolator Coffee Pot",
        "productThumbImg": "images/perocolator.png",
        "productFullImg": "images/percolator-full.png",
        "productBriefDesc": "Perfect for brewing coffee for those who treasure the moment. Don't fight a group around a campground coffee pot! .",
        "productFullDesc": "Camping shouldn't mean sacrificing that perfect cup of joe in the morning. Enjoy the perfect way to perk up in the wilderness, and discover what you're missing when you stay indoors.",   
        "productPrice": "39.95",
        "productStars": "4",
        "productRetailer": "amazon.com",
        "productManufacturer": "Coletti",
        "productCategory": "Comfort",
    },
    {
        "productTitle": "Bocce Ball Set [Regulation Weight & Size]",
        "productThumbImg": "images/bocce.png",
        "productFullImg": "images/bocce-full.png",
        "productBriefDesc": "The pinnacle of outdoor games, bocce ball is a great way to enjoy the outdoors with friends and family.",
        "productFullDesc": "Whether it's your first time or you have been playing your whole life, play like the pros with this set of regulation bocce balls.",   
        "productPrice": "39.99",
        "productStars": "4.7",
        "productRetailer": "amazon.com",
        "productManufacturer": "Crobyi",
        "productCategory": "Entertainment",
    },
    {
        "productTitle": "Camping Kitchen Utensil Set",
        "productThumbImg": "images/cooking-tools.png",
        "productFullImg": "images/cooking-tools-full.png",
        "productBriefDesc": "Enjoy eating in the outdoors with this portable cooking set.",
        "productFullDesc": "Camping no longer needs to mean roughing it. With this set of cooking utensils, you can enjoy a delicious meal in the outdoors.",   
        "productPrice": "36.99",
        "productStars": "4.6",
        "productRetailer": "amazon.com",
        "productManufacturer": "Haplululy",
        "productCategory": "Utensils",
    },
    {
        "productTitle": "Tent Fan",
        "productThumbImg": "images/fan.png",
        "productFullImg": "images/fan-full.png",
        "productBriefDesc": "Stay in comfort with this portable fan.",
        "productFullDesc": "Don't let the heat get you down. With this portable fan, you can stay cool and comfortable in the outdoors.",   
        "productPrice": "26.98",
        "productStars": "4.1",
        "productRetailer": "amazon.com",
        "productManufacturer": "DUKUSEEK",
        "productCategory": "Comfort",
    },
    {
        "productTitle": "DEET Lotion",
        "productThumbImg": "images/deetlotion.png",
        "productFullImg": "images/deetlotion-full.png",
        "productBriefDesc": "Keep the bugs away with this lotion made with 34% DEET.",
        "productFullDesc": "Don't risk getting bitten by mosquitos and other bugs. With this lotion, you can keep the bugs away and enjoy the outdoors.",   
        "productPrice": "8.99",
        "productStars": "4.5",
        "productRetailer": "amazon.com",
        "productManufacturer": "3M",
        "productCategory": "Health and Safety",
    }
];

function getProducts() {
$.each(PRODUCTS, function(index, product) {
$("#app").append(`<div id="${index}" class="product-holder">
<div class="titleThumbImg">
        <div class="productTitle">
            <h4> ${product.productTitle} </h4>
        </div>
        <div class="productThumbImg">
            <img src="${product.productThumbImg}" 
                alt="${product.productTitle}">
        </div>
    </div>
    <div class="productQuickInfo">
        <div class="productBriefDesc">
            ${product.productBriefDesc}
        </div>
        <div class="productPrice">Price (USD):
            ${product.productPrice}
        </div>
    </div>
    </div>`)
});
}

$(document).ready(function() {
   getProducts(); 
});