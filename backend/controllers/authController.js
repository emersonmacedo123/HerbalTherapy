const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Email ou senha inválidos' });
        }

        // For now, simple password comparison (you should use bcrypt in production)
        if (!user || password !== user.password) {
            return res.status(401).json({ message: 'Email ou senha inválidos' });
        }

        // Generate JWT token
        const token = jwt.sign({
                userId: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '24h' }
        );

        // Return user info and token
        res.json({
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};