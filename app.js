import express from 'express';
import cookieSession from 'cookie-session';
import methodOverride from 'method-override';
import path from 'path';

// Routes
import chambreRoutes from './routes/chambres';
import clientRoutes from './routes/clients';
import authRoutes from './routes/auth';


const app = express();
const PORT = process.env.PORT || 3000;

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

