import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/Github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

export default async function auth(req, res) {
	return await NextAuth(req, res, {
		adapter: MongoDBAdapter({
			db: (await clientPromise).db('airbnbclone'),
		}),
		providers: [
			GithubProvider({
				clientId: process.env.GITHUB_ID,
				clientSecret: process.env.GITHUB_SECRET,
			}),
			EmailProvider({
				server: {
					host: process.env.EMAIL_SERVER_HOST,
					port: process.env.EMAIL_SERVER_PORT,
					auth: {
						user: process.env.EMAIL_SERVER_USER,
						pass: process.env.EMAIL_SERVER_PASSWORD,
					},
				},
				from: process.env.EMAIL_FROM,
				maxAge: 24 * 60 * 60,
			}),
		],
	});
}
