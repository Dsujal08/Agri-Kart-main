import GreenCapsicumSeeds from '../Seeds/Img/Green_Capsicum_Seeds.png'; 
import CorianderSeeds from '../Seeds/Img/Coriander(Dhaniya) Seeds.png'; 
import BroccoliSeeds from '../Seeds/Img/Broccoli Seeds.png'; 
import GreenCucumberSeeds from '../Seeds/Img/Green Cucumber(Kheera) Seeds.png'; 
import SpinachSeeds from '../Seeds/Img/Spinach(Palak) Seeds.png'; 
import TomatoSeeds from '../Seeds/Img/Tomato(Tamatar) Seeds.png'; 
import OkraSeeds from '../Seeds/Img/Okra(Bhindi) Seed.png'; 
import GreenChilliSeeds from '../Seeds/Img/Green Chilli(Hari Mirch) Seeds.png'; 



export const products = [
    {
        id: 1,
        name: 'Green Capsicum Seeds',
        price: 120,
        discount: 18,  
        stock: 15,  // ✅ Added stock availability
        image: GreenCapsicumSeeds,
        category: 'Seeds',
        featured: true,
        description: 
            'Premium-quality green capsicum seeds. Non-hybrid, open-pollinated, and non-GMO. ' + 
            'Thrives in various climates, ensuring high germination rates. Ideal for home gardening and farms.',
        slug: 'green-capsicum-seeds',
    },
    {
        id: 2,
        name: 'Coriander(Dhaniya) Seeds',
        price: 120,
        discount: 18,  
        stock: 8,  
        image: CorianderSeeds,
        category: 'Seeds',
        description: 
            'Coriander seeds, or dhania, have a warm, citrusy aroma and a mild, earthy flavor. Used whole or ground, they are key in spice blends like curry powder and garam masala.',
        slug: 'Coriander(Dhaniya) Seeds'
    },
    {
        id: 3,
        name: 'Broccoli Seeds',
        price: 120,
        discount: 18,
        stock: 5,  
        image: BroccoliSeeds,
        category: 'Seeds',
        // featured: true,  
        description: 
            'Broccoli seeds are Known for their nutritional value, they are packed with antioxidants, vitamins, and minerals, especially vitamin C and fiber',
        slug: 'Broccoli Seeds'
    },
    {
        id: 3,
        name: 'Green Cucumber(Kheera) Seeds',
        price: 120,
        discount: 18,
        stock: 10,  
        image: GreenCucumberSeeds,
        category: 'Seeds',
        // featured: true,  
        description: 
            'Green cucumber (Kheera) seeds are commonly used to grow fresh, crisp cucumbers, known for their refreshing taste and high water content. Cucumber seeds are rich in nutrients, including fiber, vitamins, and minerals, and are often included in traditional remedies for hydration and skin health.',
        slug: 'Green Cucumber(Kheera) Seeds'
    },
    {
        id: 4,
        name: ' Spinach(Palak) Seeds',
        price: 120,
        discount: 18,  
        stock: 13,  
        image: SpinachSeeds, 
        category: 'Seeds',
        description: 
            'Spinach (Palak) seeds are used to grow nutrient-rich spinach, known for its high content of iron, vitamins A and C, and antioxidants. Spinach seeds are easy to grow and thrive in cooler climates',
        slug: 'Spinach(Palak) Seeds'
    },
    {
        id: 5,
        name: 'Tomato(Tamatar) Seeds',
        price: 120,
        discount: 18,  
        stock: 2,  
        image: TomatoSeeds,
        category: 'Seeds',
        description: 
            'Tomato (Tamatar) seeds are used to grow tomato plants (Solanum lycopersicum), which produce juicy, tangy fruits that are staples in various cuisines. Rich in vitamins A, C, and antioxidants like lycopene, tomato seeds contribute to heart health and skin protection.',
        slug: 'Tomato(Tamatar) Seeds'
    },
    {
        id: 6,
        name: 'Okra(Bhindi) Seeds',
        price: 120,
        discount: 18,
        stock: 0,  
        image: OkraSeeds,
        category: 'Seeds',
        description: 
            'Okra (Bhindi) seeds are used to grow the popular vegetable known for its tender, green pods and slightly slimy texture when cooked. Rich in fiber, vitamins A and C, and folate, okra is known for its digestive and anti-inflammatory benefits. ',
        slug: 'Okra(Bhindi) Seeds'
    },
    {
        id: 7,
        name: 'Green Chilli(Hari Mirch) Seeds',
        price: 120,
        discount: 18,  
        stock: 6,  
        image: GreenChilliSeeds,
        category: 'Seeds',
        // featured: true,
        description: 
            'Green Chilli (Hari Mirch) seeds are used to grow vibrant, spicy green chilies, known for their sharp heat and distinct flavor. Green chili seeds are often used to spice up dishes, from curries and salsas to stir-fries and pickles',
        slug: 'Green Chilli(Hari Mirch) Seeds'  // ✅ Fixed missing slug
    },
];
