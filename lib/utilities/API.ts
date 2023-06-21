import { NextApiResponse, NextApiRequest } from 'next';

export const setCORSHeaders = ({
  response,
  url,
}: {
  response: NextApiResponse;
  url: string | undefined;
}) => {
  if (url) response.setHeader('Access-Control-Allow-Origin', url);
};
