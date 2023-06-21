import DefaultLayout from '@/components/layouts/DefaultLayout';
import { getSession, signOut } from 'next-auth/react';
import { Request, Response } from 'express';
import authOptions from '@lib/next-auth/auth-options';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

//userSession
interface userSession {
  session: {
    user: {
      name: string;
      email: string;
      image: string;
    };
    expires: Date;
  };
}
//home
export default function Home() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <DefaultLayout>
      welcome{' '}
      {/* <button
        onClick={() => {
          signOut();
        }}
      >
        click here to logout
      </button>{" "} */}
    </DefaultLayout>
  );
}

export async function getServerSideProps({ req, res }: { req: Request; res: Response }) {
  const session = (await getServerSession(req, res, authOptions)) as userSession['session'];

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }

  return { props: {} };
}
