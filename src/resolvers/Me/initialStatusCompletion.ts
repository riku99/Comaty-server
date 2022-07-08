import { MeResolvers } from '~/generated/graphql';

export const initialStatusCompletion: MeResolvers['initialStatusCompletion'] = async (
  parent,
  _,
  { prisma, requestUser }
) => {
  if (!requestUser) {
    return false;
  }

  const initialStatusCompletion =
    !!parent.nickname &&
    !!parent.sex &&
    !!parent.birthYear &&
    !!parent.birthMonth &&
    !!parent.birthDay;

  return initialStatusCompletion;
};
