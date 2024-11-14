const products = [
    {
        title: "Men's T-Shirt",
        description: "Comfortable cotton t-shirt for men.",
        image: "https://i.pinimg.com/originals/28/2c/3f/282c3f99ac594dff027fd38781a8a71a.jpg",
        category: "Clothing",
        originalPrice: 25,
        discountedPrice: 15,
        discount: 40,
        rating: 4.5, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Winter Jacket",
        description: "Waterproof winter jacket with thermal insulation.",
        image: "https://i.pinimg.com/736x/18/83/a3/1883a31ba684afab2742fc01c2d0a5a7.jpg",
        category: "Clothing",
        originalPrice: 150,
        discountedPrice: 90,
        discount: 40,
        rating: 4.9, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        image: "https://i.pinimg.com/originals/b3/76/f3/b376f3df0a9af3db2b1ef143af2c52a1.jpg",
        category: "Electronics",
        originalPrice: 100,
        discountedPrice: 70,
        discount: 30,
        rating: 4.9, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Smartphone",
        description: "Latest model with 128GB storage and dual camera.",
        image: "https://images-cdn.ubuy.co.in/663325b1ec0a1a7b3f6c3ec4-unlocked-cell-phones-clearance-s23.jpg",
        category: "Electronics",
        originalPrice: 800,
        discountedPrice: 650,
        discount: 19,
        rating: 4.7, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Smart TV",
        description: "55-inch 4K Ultra HD Smart LED TV.",
        image: "https://www.pcrichard.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/dw7fa53e66/images/hires/Z_QN65S90C.jpg?sw=400&sh=400&sm=fit",
        category: "Electronics",
        originalPrice: 600,
        discountedPrice: 450,
        discount: 25,
        rating: 4.8, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Electric Kettle",
        description: "1.7L electric kettle with automatic shut-off.",
        image: "https://live-production.wcms.abc-cdn.net.au/c9b2993792c29344a7cd16915d6b5f69?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=473&width=862&height=485",
        category: "Home Appliances",
        originalPrice: 50,
        discountedPrice: 20,
        discount: 60,
        rating: 4.4, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Blender",
        description: "High-speed blender with multiple attachments.",
        image: "https://i.pinimg.com/originals/d8/b4/c4/d8b4c4f144e458397bd4043197d07b46.jpg",
        category: "Home Appliances",
        originalPrice: 70,
        discountedPrice: 40,
        discount: 43,
        rating: 4.7, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Microwave Oven",
        description: "900W countertop microwave oven with grill function.",
        image: "https://i.pinimg.com/236x/e5/75/7e/e5757e5fce6e1f330d9df6d9ff43b82c.jpg",
        category: "Home Appliances",
        originalPrice: 120,
        discountedPrice: 70,
        discount: 42,
        rating: 4.6, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "The Great Gatsby",
        description: "A classic novel by F. Scott Fitzgerald.",
        image: "https://i.pinimg.com/736x/69/38/b7/6938b728374b57e324566a815baf5f47.jpg",
        category: "Books",
        originalPrice: 15,
        discountedPrice: 10,
        discount: 33,
        rating: 5, // Rating out of 5
        availability: "In Stock"
    },
    {
        title: "Building Blocks Set",
        description: "Creative building blocks for kids.",
        image: "https://i.pinimg.com/736x/19/74/e8/1974e80caf2fd180f33e49fae5c219c2.jpg",
        category: "Toys",
        originalPrice: 25,
        discountedPrice: 12,
        discount: 52,
        rating: 4.5, // Rating out of 5
        availability: "In Stock"
    },
];

function getProducts() {
    const loader = document.getElementById("loader");
    const productList = document.getElementById("productList");
    const noProductsMessage = document.getElementById("noProductsMessage");

    // Show the loader
    loader.style.display = "block";
    productList.innerHTML = ""; // Clear previous results
    noProductsMessage.style.display = "none"; // Hide the "No products found" message

    // Simulate a delay for filtering products (e.g., 1 second)
    setTimeout(() => {
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
        const selectedDiscount = document.querySelector('input[name="discount"]:checked')?.value;

        // Filter and display products based on the selected categories and discount
        const filteredProducts = products.filter(product => {
            const shouldIncludeCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const shouldIncludeDiscount = !selectedDiscount || product.discount >= parseInt(selectedDiscount);
            return shouldIncludeCategory && shouldIncludeDiscount;
        });

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const card = document.createElement("div");
                card.className = "product-card";

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>Original Price: $<del>${product.originalPrice}</del></p>
                    <p>Discounted Price: $<span>${product.discountedPrice}</span></p>
                    <p>Discount: <span>${product.discount}%</span></p>
                    <p>Rating: <span>${product.rating}</span> / 5</p>
                    <p>Availability: <span>${product.availability}</span></p>
                `;

                productList.appendChild(card);

                // Apply animation to each product card
                setTimeout(() => {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, 100);
            });
        } else {
            noProductsMessage.style.display = "block"; // Show "No products found" message
        }

        loader.style.display = "none"; // Hide the loader
    }, 1000); // 1 second delay to simulate loading
}

// JavaScript to toggle the FAQ content visibility
document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling; // The div with class 'faq-content'
        
        // Toggle the visibility of the content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});



