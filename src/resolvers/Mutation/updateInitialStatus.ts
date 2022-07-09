import { ForbiddenError } from 'apollo-server-express';
import { MutationResolvers } from '~/generated/graphql';

export const updateInitialStatus: MutationResolvers['updateInitialStatus'] = async (
  _,
  { input },
  { prisma, requestUser }
) => {
  if (!requestUser) {
    throw new ForbiddenError('Auth error');
  }

  const { nickname, birthDay, birthMonth, birthYear, sex } = input;

  const user = await prisma.user.update({
    where: {
      id: requestUser.id,
    },
    data: {
      nickname,
      birthDay,
      birthMonth,
      birthYear,
      sex,
    },
  });

  return user;
};
