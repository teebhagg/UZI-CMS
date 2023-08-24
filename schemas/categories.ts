interface Category {
  title: string;
  value: string;
}
interface SubCategories {
  title: string;
  value: string;
  category: string;
}

export const categories: Category[] = [
    { title: 'Clothing', value: 'clothing' },
    { title: 'Shoes', value: 'shoes' },
    { title: 'Jewelry', value: 'jewelry' },
    { title: 'Accessories', value: 'accessories' },
    { title: 'Home goods', value: 'home-goods' },
    { title: 'Electronics', value: 'electronics' },
    { title: 'Toys', value: 'toys' },
    { title: 'Books', value: 'books' },
    { title: 'Music', value: 'music' },
    { title: 'Movies', value: 'movies' },
    { title: 'Sporting goods', value: 'sporting-goods' },
    { title: 'Office supplies', value: 'office-supplies' },
    { title: 'Pet supplies', value: 'pet-supplies' },
    { title: 'Gift cards', value: 'gift-cards' },
  ];

  const clothing: SubCategories[]= [
    { title: "Men's clothing", value: 'men-clothing', category:"clothing" },
    { title: "Women's clothing", value: 'women-clothing', category:"clothing" },
    { title: "Children's clothing", value: 'children-clothing', category:"clothing" },
    { title: 'Shoes', value: 'shoes', category:"clothing" },
    { title: 'Accessories', value: 'accessories', category:"clothing" },
  ];
  
  const shoes: SubCategories[]= [
    { title: "Men's shoes", value: 'men-shoes', category:"shoes" },
    { title: "Women's shoes", value: 'women-shoes', category:"shoes" },
    { title: "Children's shoes", value: 'children-shoes', category:"shoes" },
  ];
  
  const jewelry: SubCategories[]= [
    { title: 'Earrings', value: 'earrings', category:"jewelry" },
    { title: 'Necklaces', value: 'necklaces', category:"jewelry" },
    { title: 'Bracelets', value: 'bracelets', category:"jewelry" },
    { title: 'Rings', value: 'rings', category:"jewelry" },
  ];
  
  const accessories: SubCategories[]= [
    { title: 'Hats', value: 'hats', category: "accessories" },
    { title: 'Scarves', value: 'scarves', category: "accessories" },
    { title: 'Sunglasses', value: 'sunglasses', category: "accessories" },
    { title: 'Handbags', value: 'handbags', category: "accessories" },
    { title: 'Wallets', value: 'wallets', category: "accessories" },
  ];
  
  const homeGoods: SubCategories[]= [
    { title: 'Furniture', value: 'furniture', category: "home-goods" },
    { title: 'Bedding', value: 'bedding', category: "home-goods" },
    { title: 'Kitchenware', value: 'kitchenware', category: "home-goods" },
    { title: 'Bathware', value: 'bathware', category: "home-goods" },
    { title: 'Decor', value: 'decor', category: "home-goods" },
  ];
  
  const electronics: SubCategories[]= [
    { title: 'Computers', value: 'computers', category:"electronics" },
    { title: 'Tablets', value: 'tablets', category:"electronics" },
    { title: 'Phones', value: 'phones', category:"electronics" },
    { title: 'Cameras', value: 'cameras', category:"electronics" },
    { title: 'TVs', value: 'tvs', category:"electronics" },
    { title: 'Audio equipment', value: 'audio-equipment', category:"electronics" },
  ];
  
  const toys: SubCategories[]= [
    { title: 'Action figures', value: 'action-figures', category: "toys" },
    { title: 'Dolls', value: 'dolls', category: "toys" },
    { title: 'Games', value: 'games', category: "toys" },
    { title: 'Puzzles', value: 'puzzles', category: "toys" },
    { title: 'Stuffed animals', value: 'stuffed-animals', category: "toys" },
  ];
  
  const books: SubCategories[]= [
    { title: 'Fiction', value: 'fiction', category: "books" },
    { title: 'Nonfiction', value: 'nonfiction', category: "books" },
    { title: "Children's books", value: 'children-books', category: "books" },
    { title: 'Textbooks', value: 'textbooks', category: "books" },
    { title: 'Cookbooks', value: 'cookbooks', category: "books" },
  ];
  
  const music: SubCategories[]= [
    { title: 'CDs', value: 'cds', category: "music" },
    { title: 'Vinyl records', value: 'vinyl-records', category: "music" },
    { title: 'Digital downloads', value: 'digital-downloads', category: "music" },
  ];
  
  const movies: SubCategories[]= [
    { title: 'DVDs', value: 'dvds', category: " movies" },
    { title: 'Blu-rays', value: 'blu-rays', category: " movies" },
    { title: 'Digital downloads', value: 'digital-downloads', category: " movies" },
  ];
  
  const sportingGoods: SubCategories[]= [
    { title: 'Sports equipment', value: 'sports-equipment', category: "sporting-goods" },
    {title: 'Athletic clothing', value: 'athletic-clothing', category: "sporting-goods" },
    { title: 'Sportswear', value: 'sportswear', category: "sporting-goods" },
  ];
  
  const officeSupplies: SubCategories[]= [
    { title: 'Paper', value: 'paper', category: "office-supplies" },
    { title: 'Pens', value: 'pens', category: "office-supplies" },
    { title: 'Pencils', value: 'pencils', category: "office-supplies" },
    { title: 'Notebooks', value: 'notebooks', category: "office-supplies" },
    { title: 'Staplers', value: 'staplers', category: "office-supplies" },
    { title: 'Paper clips', value: 'paper-clips', category: "office-supplies" },
  ];
  
  const petSupplies: SubCategories[]= [
    { title: 'Food', value: 'food', category: "pet-supplies" },
    { title: 'Toys', value: 'toys', category: "pet-supplies" },
    { title: 'Beds', value: 'beds', category: "pet-supplies" },
    { title: 'Collars', value: 'collars', category: "pet-supplies" },
    { title: 'Leashes', value: 'leashes', category: "pet-supplies" },
  ];
  
  const giftCards= [
    { title: 'Gift cards for a variety of stores and restaurants', value: 'gift-cards', category: "gift-cards" },
  ];

  export const subCategories = [
    {category:"clothing", subcategory: clothing},
    {category:"shoes", subcategory: shoes},
    {category:"jewelry", subcategory: jewelry},
    {category:"accessories", subcategory: accessories},
    {category:"home-goods", subcategory: homeGoods},
    {category:"electronics", subcategory: electronics},
    {category:"toys", subcategory: toys},
    {category:"books", subcategory: books},
    {category:"music", subcategory: music},
    {category:"movies", subcategory: movies},
    {category:"sporting-goods", subcategory: sportingGoods},
    {category:"office-supplies", subcategory: officeSupplies},
    {category:"pet-supplies", subcategory: petSupplies},
    {category:"gift-cards", subcategory: giftCards},
  ]

  // export default {
  //   name: "categories",
  //   title: "Categories",
  //   type: "document",
  //   fields: [
  //     {
  //       name: "categoryName",
  //     }
  //   ]
  // }