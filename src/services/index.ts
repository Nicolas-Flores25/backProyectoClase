import express from 'express';
import userRoutes from '../routes/userRoutes';
import { sequelize } from '../config/database';

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync({alter: true })
.then(() => {
    console.log('Database connected');
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    })
})
.catch((err) => {
    console.log('Error connecting to database', err);
}); 
