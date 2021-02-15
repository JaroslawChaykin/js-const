import image from './assets/image.webp'
import {Block} from './classes/blocks'

export const model = [

    new Block('title', 'Конструктор сайтов', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),

    new Block('Title', 'Заголовок поменьше', {
        tag: 'h2',
        styles: {
            color: '#d2d2d2'
        }
    }),

    new Block('text', 'Here we and go some text', {
        styles: {
            color: '#d2d2d2'
        }
    }),

    new Block('columns', [
        '1111111',
        '2222222',
        '3333333',
    ], {
        styles: {
            background: 'black',
            color: '#fff'
        }
    }),

    new Block('image', image),
    
];