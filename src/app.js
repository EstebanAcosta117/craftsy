const express =  require ('express');
const path = require ('path');
const app = express();
const PORT = 3000;

const indexRoutes = require ('./routes/index.routes');
const productsRoutes = require ('./routes/products.routes')

app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', indexRoutes);
app.use('/products', productsRoutes);


app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/product-details', (req, res) => res.sendFile(path.join(__dirname, 'views', 'product-details.html')));
app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, 'views', 'profile.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));

app.listen(PORT, () => console.log('servidor corriendo en http://localhost:' + PORT))
