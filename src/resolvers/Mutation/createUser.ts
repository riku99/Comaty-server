import { ApolloError } from 'apollo-server-express';
import { CreateUserError, MutationResolvers } from '~/generated/graphql';
import { verifyIdToken } from '~/helpers/verifyIdToken';

export const createUser: MutationResolvers['createUser'] = async (
  _,
  { input },
  { prisma }
) => {
  const session = await verifyIdToken(input.idToken);

  if (!session) {
    throw new Error('Failed to get token.');
  }

  if (!session.email) {
    throw new Error('The email address does not exist.');
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: session.email,
    },
  });

  if (existingUser) {
    throw new ApolloError(
      '既にユーザーが存在します',
      CreateUserError.AlreadyUserExisting
    );
  }

  const user = await prisma.user.create({
    data: {
      firebaseUid: session.uid,
      email: session.email,
      nickname: input.nickname,
      birthYear: input.birthYear,
      birthMonth: input.birthMonth,
      birthDay: input.birthDay,
      loggedIn: true,
    },
  });

  return user;
};
