import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { QueryResolvers, UserGetError } from '~/generated/graphql';

export const user: QueryResolvers['user'] = async (
  _,
  { id },
  { requestUser, prisma }
) => {
  if (!requestUser) {
    throw new ForbiddenError('Auth error');
  }

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new ApolloError('ユーザーが見つかりません', UserGetError.NotFound);
  }

  return user;
};
