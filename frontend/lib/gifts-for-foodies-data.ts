export const categories = [
  { name: 'Cooking Classes', slug: 'cooking-class-gifts', url: '/gifts-for-foodies?f_mealtag=cooking-class-gifts&filter=1' },
  { name: 'Private Chefs', slug: 'private-chefs', url: '/gifts-for-foodies?f_mealtag=private-chefs&filter=1' },
  { name: 'Food Tours', slug: 'food-tours', url: '/gifts-for-foodies?f_mealtag=food-tours&filter=1' },
  { name: 'Hibachi Catering', slug: 'hibachi-gifts', url: '#' },
  { name: 'Online Cooking Classes', slug: 'online-cooking-class-gifts', url: '#' },
  { name: 'Virtual Wine Tastings', slug: 'virtual-wine-tasting-gifts', url: '#' },
  { name: 'Cookware', slug: 'kitchen-gifts', url: '#' },
  { name: 'Cooking Kits', slug: 'cooking-kits', url: '#' },
  { name: 'Silverware', slug: 'silverware-gifts', url: '#' },
  { name: 'Glassware', slug: 'glassware-gifts', url: '#' },
];

export const occasions = [
  { name: 'Christmas', slug: 'christmas' },
  { name: "Father's Day", slug: 'fathers-day' },
  { name: "Mother's Day", slug: 'mothers-day' },
  { name: 'Birthday', slug: 'birthday' },
  { name: "Valentine's Day", slug: 'valentines-day' },
  { name: 'Housewarming', slug: 'housewarming' },
  { name: 'Hanukkah', slug: 'hanukkah' },
  { name: 'Anniversary', slug: 'anniversary' },
  { name: 'Wedding', slug: 'wedding' },
  { name: 'Engagement', slug: 'engagement' },
  { name: 'Graduation', slug: 'graduation' },
  { name: 'Retirement', slug: 'retirement' },
  { name: 'Baby Shower', slug: 'baby-shower' },
  { name: 'Thank You', slug: 'thank-you' },
];

export const recipients = [
  { name: 'Coffee Lovers', slug: 'coffee-lovers' },
  { name: 'Men', slug: 'men' },
  { name: 'Cooks', slug: 'cooking-gifts' },
  { name: 'Bakers', slug: 'bakers' },
  { name: 'Wine Lovers', slug: 'wine-lovers' },
  { name: 'Vegans', slug: 'vegans' },
  { name: 'Meat Lovers', slug: 'meat-lovers' },
  { name: 'Dads', slug: 'dads' },
  { name: 'Moms', slug: 'moms' },
  { name: 'Coworkers', slug: 'coworkers' },
];

export type MealProfile = {
  id: number;
  title: string;
  slug: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  reviewsCount: number;
  tags: string[];
  description?: string;
  whyTheyLoveIt?: string[];
  people?: number;
  optionsCount?: number;
  minGuests?: number;
  maxGuests?: number;
  durationHours?: number;
  chefName?: string;
  chefImage?: string;
  sampleMenu?: string[];
  isOnline?: boolean;
};

export const staticMeals: MealProfile[] = [
  {
    id: 1,
    title: 'Italian Pasta Making Class',
    slug: 'italian-pasta-making',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/v1578928078/pink_heart_shaped_macarons_-_3_d9ygik.jpg',
    location: 'NYC',
    price: 89,
    rating: 4.9,
    reviewsCount: 124,
    tags: ['Italian', 'Pasta'],
    description: 'Give the gift of hands-on pasta making! Learn to craft fresh Italian pasta from scratch with a professional chef. Perfect for date nights, birthdays, or any occasion.',
    whyTheyLoveIt: ['Choose from 100+ cooking classes nationwide', 'Hands-on experience with expert chefs', 'Learn authentic techniques they can use at home', 'Fresh classes added year-round'],
    people: 2,
    optionsCount: 150,
    minGuests: 2,
    maxGuests: 12,
    durationHours: 2.5,
    chefName: 'Chef Marco',
    chefImage: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_80,h_80,f_auto,q_auto/v1578658687/Use_for_Los_angeles_d57pvs.jpg',
    sampleMenu: ['Fresh pasta dough', 'Homemade ravioli', 'Classic tomato sauce', 'Parmesan & herbs'],
    isOnline: false,
  },
  {
    id: 2,
    title: 'Sushi Making Workshop',
    slug: 'sushi-making-workshop',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/v1578928679/red_heart_macaroons_cjs1cz.jpg',
    location: 'Chicago',
    price: 95,
    rating: 4.8,
    reviewsCount: 89,
    tags: ['Japanese', 'Sushi'],
    description: 'Discover the art of sushi! A chef-led workshop where they learn to roll, slice, and perfect Japanese sushi techniques in a fun, interactive setting.',
    whyTheyLoveIt: ['Expert chefs guide every step', 'Explore authentic Japanese cuisine', 'Perfect for couples or groups', 'Take skills home for future dinners'],
    people: 2,
    optionsCount: 80,
    minGuests: 2,
    maxGuests: 8,
    durationHours: 2,
    chefName: 'Chef Yuki',
    sampleMenu: ['Maki rolls', 'Nigiri', 'Sashimi', 'Miso soup'],
    isOnline: false,
  },
  {
    id: 3,
    title: 'French Cooking Experience',
    slug: 'french-cooking-experience',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/v1578658687/Use_for_Los_angeles_d57pvs.jpg',
    location: 'San Francisco',
    price: 120,
    rating: 5.0,
    reviewsCount: 56,
    tags: ['French', 'Gourmet'],
    description: 'A gourmet French cooking adventure! Master classic techniques from sauces to soufflés with a professional chef in an intimate culinary setting.',
    whyTheyLoveIt: ['Learn classic French techniques', 'Premium ingredients & wine pairings', 'Elegant experience for special occasions', 'Skills that impress at any dinner party'],
    people: 2,
    optionsCount: 60,
    minGuests: 2,
    maxGuests: 6,
    durationHours: 3,
    chefName: 'Chef Pierre',
    sampleMenu: ['Coq au vin', 'Ratatouille', 'Crème brûlée'],
    isOnline: false,
  },
  {
    id: 4,
    title: 'BBQ & Grilling Class',
    slug: 'bbq-grilling-class',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/v1650976008/brewery-tours-hero_lhuecn.png',
    location: 'Austin',
    price: 75,
    rating: 4.7,
    reviewsCount: 203,
    tags: ['BBQ', 'Grilling'],
    description: 'Fire up the grill! Learn BBQ mastery from pitmasters—smoking, seasoning, and searing techniques that make every backyard cookout a hit.',
    whyTheyLoveIt: ['Master smoking & grilling techniques', 'Perfect for outdoor enthusiasts', 'Great for groups and gatherings', 'Year-round classes available'],
    people: 4,
    optionsCount: 120,
    minGuests: 2,
    maxGuests: 20,
    durationHours: 2,
    chefName: 'Chef Mike',
    sampleMenu: ['Smoked brisket', 'BBQ ribs', 'Grilled vegetables'],
    isOnline: false,
  },
  {
    id: 5,
    title: 'Online Pizza Making',
    slug: 'online-pizza-making',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/v1591270109/online-mixology_ngwhpe.jpg',
    location: 'Online',
    price: 45,
    rating: 4.9,
    reviewsCount: 312,
    tags: ['Online', 'Pizza'],
    description: 'Make pizza from anywhere! A live online class where they learn dough, sauce, and topping techniques with a chef—perfect for virtual date nights.',
    whyTheyLoveIt: ['Join from home—no travel needed', 'Live chef interaction', 'Perfect for couples or families', 'Recipes they can recreate anytime'],
    people: 2,
    optionsCount: 200,
    minGuests: 1,
    maxGuests: 10,
    durationHours: 1.5,
    chefName: 'Chef Anna',
    sampleMenu: ['Pizza dough', 'Margherita', 'Pepperoni', 'Dessert pizza'],
    isOnline: true,
  },
  {
    id: 6,
    title: 'Mexican Cooking Fiesta',
    slug: 'mexican-cooking-fiesta',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/cozymeal-events_abcpnf',
    location: 'Los Angeles',
    price: 85,
    rating: 4.8,
    reviewsCount: 167,
    tags: ['Mexican', 'Tacos'],
    description: '¡Olé! A festive Mexican cooking class—tacos, salsas, margaritas and more. A flavorful journey perfect for celebrations and gatherings.',
    whyTheyLoveIt: ['Authentic Mexican techniques', 'BYOB-friendly classes', 'Perfect for groups & parties', 'Recipes to spice up every dinner'],
    people: 4,
    optionsCount: 90,
    minGuests: 2,
    maxGuests: 12,
    durationHours: 2,
    chefName: 'Chef Maria',
    sampleMenu: ['Street tacos', 'Guacamole', 'Salsas', 'Churros'],
    isOnline: false,
  },
];

/** Static sample dates for booking form (demo) */
export const sampleBookingDates = [
  { id: '1', label: 'Sat, Mar 15 · 11:00 AM', value: '2025-03-15' },
  { id: '2', label: 'Sun, Mar 16 · 2:00 PM', value: '2025-03-16' },
  { id: '3', label: 'Fri, Mar 21 · 6:00 PM', value: '2025-03-21' },
  { id: '4', label: 'Sat, Mar 22 · 10:00 AM', value: '2025-03-22' },
  { id: '5', label: 'Sun, Mar 23 · 3:00 PM', value: '2025-03-23' },
];

export function getMealBySlug(slug: string): MealProfile | undefined {
  return staticMeals.find((m) => m.slug === slug);
}

export const sliderItems = [
  { id: 1, title: 'New York', description: '', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_680,h_456,f_auto,q_auto/v1767901770/foodie/hero/NYC-foodie-gifts.jpg' },
  { id: 2, title: 'Los Angeles', description: '', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/cozymeal-events_abcpnf' },
  { id: 3, title: 'Chicago', description: '', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_680,h_456,f_auto,q_auto/v1767901783/foodie/hero/Chicago-foodie-gifts.jpg' },
  { id: 4, title: 'San Diego', description: '', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/v1578658687/Use_for_Los_angeles_d57pvs.jpg' },
  { id: 5, title: 'San Francisco', description: '', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_680,h_456,f_auto,q_auto/v1767901773/foodie/hero/San-Francisco-foodie-gifts.jpg' },
  { id: 6, title: 'Austin', description: '', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_450,h_310,f_auto,q_auto/v1650976008/brewery-tours-hero_lhuecn.png' },
];

export const heroSlides = [
  {
    id: 1,
    title: 'Find the Ultimate Foodie Gifts',
    subtitle: 'Chef-led cooking classes, food tours & culinary experiences for everyone on your list.',
    cta: 'Shop Gifts',
    href: '/gifts-for-foodies',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_1440,h_450,f_auto,q_auto/v1762879358/foodie/gifts-for-foodies.png',
  },
  {
    id: 2,
    title: 'Cook Up Romance',
    subtitle: 'Hands-on couple\'s cooking classes for unforgettable date nights.',
    cta: 'Cooking for Two',
    href: '/gifts-for-foodies?f_occasion=valentines-day&filter=1',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_1440,h_450,f_auto,q_auto/v1578928078/pink_heart_shaped_macarons_-_3_d9ygik.jpg',
  },
  {
    id: 3,
    title: 'The Ultimate Gift of Choice',
    subtitle: 'Let them choose their perfect culinary adventure.',
    cta: 'Gift Cards',
    href: '/gifts-for-foodies',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_1440,h_450,f_auto,q_auto/v1767901770/foodie/hero/NYC-foodie-gifts.jpg',
  },
];

export const promoBadges = [
  'No expiration on gift cards',
  'e-Gifts delivered instantly',
  '1000+ experiences nationwide',
];

export const recipientCards = [
  { name: 'Gifts for Couples', slug: 'couples', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1578928078/pink_heart_shaped_macarons_-_3_d9ygik.jpg' },
  { name: 'Gifts for Him', slug: 'men', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1650976008/brewery-tours-hero_lhuecn.png' },
  { name: 'Gifts for Her', slug: 'women', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1578928679/red_heart_macaroons_cjs1cz.jpg' },
  { name: 'Gifts for Kids', slug: 'kids', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/cozymeal-events_abcpnf' },
  { name: 'Gifts for Parents', slug: 'parents', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1578658687/Use_for_Los_angeles_d57pvs.jpg' },
];

export const categoryCards = [
  { name: 'Cooking Classes', slug: 'cooking-classes', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1578928078/pink_heart_shaped_macarons_-_3_d9ygik.jpg' },
  { name: 'Food Tours', slug: 'food-tours', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1767901770/foodie/hero/NYC-foodie-gifts.jpg' },
  { name: 'Private Chefs', slug: 'private-chefs', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1578658687/Use_for_Los_angeles_d57pvs.jpg' },
  { name: 'Online Classes', slug: 'online-classes', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1591270109/online-mixology_ngwhpe.jpg' },
  { name: 'Wine Tastings', slug: 'wine-tastings', image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_400,h_300,f_auto,q_auto/v1650976008/brewery-tours-hero_lhuecn.png' },
];

export const howItWorks = [
  { step: 'Find', title: 'Choose from 1000+ food experiences' },
  { step: 'Gift', title: 'Send an e-voucher that never expires' },
  { step: 'Book', title: 'Recipient picks their date & experience' },
];

export const whyLoveUs = [
  { title: 'Fully flexible', desc: 'Free exchanges, vouchers never expire' },
  { title: 'Direct to inbox', desc: 'e-Gifts sent instantly or scheduled' },
  { title: 'Hand-picked', desc: 'Top-rated chef partners nationwide' },
  { title: 'Best value', desc: 'Competitive pricing on every experience' },
];

export const mealProfileFaqItems = [
  {
    question: 'How does the voucher work?',
    answer: 'Each voucher lets the recipient choose one experience from a curated collection. They browse available options, pick their favorite, and schedule it at a time that works for them.',
  },
  {
    question: 'How long is it valid?',
    answer: 'Cozymeal vouchers never expire, giving the recipient the freedom to choose and enjoy their experience at their convenience.',
  },
  {
    question: 'What types of experiences are included?',
    answer: 'Each voucher includes a variety of cooking class experiences. The exact options depend on the location or theme, offering something for everyone.',
  },
  {
    question: 'How do they redeem it?',
    answer: 'The recipient redeems their voucher online by entering their unique code. From there, they explore the collection and select their desired experience.',
  },
  {
    question: 'When does the recipient choose the experience?',
    answer: 'The recipient chooses after receiving the voucher, allowing them to pick something that matches their preferences and schedule.',
  },
];

export const faqItems = [
  {
    question: 'What are the best gifts for foodies?',
    answer: 'The best gifts for foodies include chef-led cooking classes, gourmet food tours, private chef experiences, and chef-curated cookware. Experience-based gifts like cooking classes are especially memorable.',
  },
  {
    question: 'How much do cooking class gifts cost?',
    answer: 'Cooking class gifts typically range from $45 for online classes to $120+ for in-person experiences. Private chef experiences and food tours can vary based on group size and location.',
  },
  {
    question: 'Can I give a cooking class as a gift?',
    answer: 'Yes! Cozymeal offers gift cards and booking options that make it easy to give cooking classes, food tours, and culinary experiences as gifts. Recipients can choose their preferred date and experience.',
  },
  {
    question: 'What makes a good foodie gift?',
    answer: 'A good foodie gift taps into their passion for food—whether it\'s learning a new skill, exploring a city\'s food scene, or upgrading their kitchen with quality cookware from chef-approved brands.',
  },
];
