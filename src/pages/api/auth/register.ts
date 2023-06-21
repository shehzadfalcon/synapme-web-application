import User from '@models/User';
import Token from '@models/Token';
import bcryptjs from 'bcryptjs';
import Joi from 'joi';
import dbConnect from '@db/MongoDb/mongoConnect';
import { UserData } from '@lib/types/user';
import { NextApiRequest, NextApiResponse } from 'next';
import { setCORSHeaders } from '@lib/utilities/API';
import { BAD_REQUEST, CONFLICT, INTERNAL_SERVER_ERROR, OK } from '@lib/api/httpStatuses';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    if (req.method !== 'POST') {
      throw new Error(`Unsupported method: ${req.method}`);
    }
    await dbConnect();
    await create(req, res);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function create(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    setCORSHeaders({ response: res, url: process.env.FRONTEND_URL });

    const { username, email, firstName, lastName, password, confirmPassword, gender, dateOfBirth } =
      req.body;

    if (
      !username ||
      !email ||
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword ||
      !gender ||
      !dateOfBirth
    ) {
      return res.status(BAD_REQUEST).json({ errorMessage: 'all fields are required' });
    }

    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string()
        .pattern(
          new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          ),
        )
        .required(),
      firstName: Joi.string().min(3).max(20).required(),
      lastName: Joi.string().min(3).max(20).required(),
      password: Joi.string().min(5).max(20).required(),
      confirmPassword: Joi.ref('password'),
    });

    const { error } = schema.validate({
      username,
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    });

    if (error) {
      return res.status(BAD_REQUEST).json({ errorMessage: error.details[0].message });
    }

    const duplicateUsername = await User.findOne({ username })
      .collation({ locale: 'en', strength: 2 })
      .lean()
      .exec();

    if (duplicateUsername) {
      return res.status(409).json({ errorMessage: 'The username already exists.' });
    }

    const duplicateEmail = await User.findOne({ email })
      .collation({ locale: 'en', strength: 2 })
      .lean()
      .exec();

    if (duplicateEmail) {
      return res.status(CONFLICT).json({ errorMessage: 'The email already exists.' });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const userObject = {
      username,
      email,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      password: hashedPassword,
    };

    type UserDataType = Omit<UserData, 'password'>;
    const user: UserDataType = await User.create(userObject);

    if (!user) {
      return res.status(BAD_REQUEST).json({ errorMessage: 'Bad request' });
    }

    res.status(OK).json(user);
  } catch (error: any) {
    return res.status(INTERNAL_SERVER_ERROR).json({ errorMessage: error?.message });
  }
}
