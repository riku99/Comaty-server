import { User } from '@prisma/client';
import type { ExpressContext } from 'apollo-server-express';
import { Prisma } from '~/lib/prisma';

export type Context = {
  primsa: Prisma;
  requestUser: User;
};

type ContextFunction = (c: ExpressContext) => Promise<Context>;

export const context: ContextFunction = async ({ req }) => {
  if (!req) {
    console.warn('not requested');
  }

  const token = req.headers.authorization?.replace(/^Bearer /, '');
};
