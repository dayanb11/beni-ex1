import { Dish } from './dish';
export const DISHES: Dish[] = [
    {
        id: '0',
        name: 'Uthappizza',
        image: '/assets/images/uthappizza.png',
        category: 'mains',
        featured: true,
        label: 'Hot',
        price: '4.99',

        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    },
    {
        id: '2',
        name: 'Vadonut',
        image: '/assets/images/vadonut.png',
        category: 'appetizer',
        featured: false,
        label: 'New',
        price: '1.99',
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
      }
    ]