import { Client } from '@neondatabase/serverless';

export default async function handler(req, res) {
	const client = new Client(process.env.DATABASE_URL);

	try {
		await client.connect();

		if (req.method === 'GET') {
			const result = await client.query(
				'SELECT * FROM experiences ORDER BY created_at DESC'
			);
			res.status(200).json(result.rows);
		} else if (req.method === 'POST') {
			const { company, role, period, description } = req.body;
			const result = await client.query(
				`INSERT INTO experiences (company, role, period, description)
         VALUES ($1, $2, $3, $4) RETURNING *`,
				[company, role, period, description]
			);
			res.status(201).json(result.rows[0]);
		} else {
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).json({ message: `Method ${req.method} Not Allowed` });
		}
	} catch (err) {
		console.error('Database error:', err);
		res.status(500).json({ error: 'Database connection failed' });
	} finally {
		await client.end();
	}
}
