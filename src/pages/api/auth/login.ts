import User from '@models/User';
import Token from '@models/Token';
import bcryptjs from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@db/MongoDb/mongoConnect';
import { setCORSHeaders } from '@lib/utilities/API';
import { UserData } from '@lib/types/user';
import { BAD_REQUEST, UNAUTHORIZED, OK } from '@lib/api/httpStatuses';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    if (req.method !== 'POST') throw new Error(`Unsupported method: ${req.method}`);
    await dbConnect();

    await login(req, res);
  } catch (error) {
    throw error;
    // replace with default handler
  }
}

async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { username, password } = req.body;

    setCORSHeaders({ response: res, url: process.env.FRONTEND_URL });

    if (!username || !password) {
      return res.status(BAD_REQUEST).json({ errorMessage: 'All fields are required' });
    }

    let user: any = await User.findOne({ username })
      .collation({ locale: 'en', strength: 2 })
      .exec();

    if (!user) {
      user = await User.findOne({ email: username })
        .collation({ locale: 'en', strength: 2 })
        .exec();
    }

    if (!user) {
      return res.status(UNAUTHORIZED).json({ errorMessage: 'User does not exist.' });
    }

    const match = bcryptjs.compare(password, user.password);

    if (!match) {
      return res.status(UNAUTHORIZED).json({ errorMessage: 'Incorrect email or password.' });
    }

    type userDataType = Omit<UserData, 'password'>;
    const userData: userDataType = user;

    return res.status(OK).json(userData);
  } catch (error: any) {
    throw error;
  }
}
