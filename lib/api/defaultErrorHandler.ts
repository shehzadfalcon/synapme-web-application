import UnauthorizedError from '@lib/errors/UnauthorizedError';
import InsufficientPermissionsError from '@lib/errors/InsufficientPermissionsError';
import {
  UNAUTHORIZED,
  FORBIDDEN,
  COMMUNICATION_LINKS_FAILURE,
  INTERNAL_SERVER_ERROR,
} from './httpStatuses';
import { NextApiRequest, NextApiResponse } from 'next';

// add more errors later

export async function defaultErrorHandler(error: any, req: NextApiRequest, res: NextApiResponse) {
  if (error instanceof UnauthorizedError) {
    res.status(UNAUTHORIZED).json({ message: 'Authentication required.' });
  } else if (error instanceof InsufficientPermissionsError) {
    res.status(FORBIDDEN).json({ message: 'Forbidden.' });
  } else {
    /* Let's be conservative on our regex*/
    if (error.stack.match(/Communications\s+link\s+failure/gi)) {
      //Let the client side retry.
      res
        .status(COMMUNICATION_LINKS_FAILURE)
        .json({ message: 'The database may be warming up. Please try again.' });
    } else {
      //Do not reveal anything to the user. This might be an opportunity for intruders
      //to get into the system.
      res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error. Check the logs for details.',
      });
    }
  }
}
