import { User } from '@prisma/client';
import type { ExpressContext } from 'apollo-server-express';
import { verifyIdToken } from '~/helpers/verifyIdToken';
import { Prisma, prisma } from '~/lib/prisma';

export type Context = {
  prisma: Prisma;
  requestUser: User | null;
};

type ContextFunction = (c: ExpressContext) => Promise<Context>;

export const context: ContextFunction = async ({ req }) => {
  if (!req) {
    console.warn('not requested');
  }

  const token = req.headers.authorization?.replace(/^Bearer /, '');
  const sessoin = await verifyIdToken(token);

  let requestUser;
  if (!sessoin) {
    requestUser = null;
  } else {
    requestUser = await prisma.user.findUnique({
      where: {
        firebaseUid: sessoin.uid,
      },
    });
  }

  return {
    prisma,
    requestUser,
  };
};
