const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const db = require('../db');
const router = Router();

const createToken = () => {
	return jwt.sign({}, 'secret', { expiresIn: '1h' });
};

router.post('/login', (req, res, next) => {
	const email = req.body.email;
	const pw = req.body.password;
	db.getDb()
		.db()
		.collection('users')
		.findOne({ email: email })
		.then(userDoc => {
			return bcrypt.compare(pw, userDoc.password);
		})
		.then(result => {
			if (!result) {
				throw Error();
			}
			const token = createToken();
			res.status(200).json({
				message: 'Authentication successful.',
				token: token,
				user: { email: email },
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Authentication failed.' });
		});
});

router.post('/signup', (req, res, next) => {
	const email = req.body.email;
	const pw = req.body.password;
	bcrypt
		.hash(pw, 12)
		.then(hashedPW => {
			db.getDb()
				.db()
				.collection('users')
				.insertOne({
					email: email,
					password: hashedPW,
				})
				.then(result => {
					console.log(result);
					const token = createToken();
					res.status(201).json({ token: token, user: { email: email } });
				})
				.catch(err => {
					console.log(err);
					res.status(500).json({ message: 'Creating the user failed.' });
				});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Creating the user failed.' });
		});
});

module.exports = router;
