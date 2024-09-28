const path = require ('path');
const data = [
{
    id : 1,
    title : 'product-01',
    description: 'lorem ipsum dolor amet sit',
    photo : 'img-phone-01.jpg'
},
{
    id : 2,
    title : 'product-02',
    description: 'lorem ipsum dolor amet sit',
    photo : 'img-phone-02.jpg'
},
{
    id : 3,
    title : 'product-03',
    description: 'lorem ipsum dolor amet sit',
    photo : 'img-phone-03.jpg'
},
{
    id : 4,
    title : 'product-04',
    description: 'lorem ipsum dolor amet sit',
    photo : 'img-phone-01.jpg'
},
{
    id : 5,
    title : 'product-05',
    description: 'lorem ipsum dolor amet sit',
    photo : 'img-phone-02.jpg'
},
{
    id : 6,
    title : 'product-06',
    description: 'lorem ipsum dolor amet sit',
    photo : 'img-phone-03.jpg'
}
]
module.exports = {
    index : (req, res) => {
        return res.render('home', {products : data})
    },
    admin : (req, res) => {
        return res.render('admin')
    }
}