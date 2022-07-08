import { QueryResolvers } from '~/generated/graphql';

export const me: QueryResolvers['me'] = async (
  _,
  __,
  { requestUser, prisma }
) => {
  if (!requestUser) {
    return null;
  }

  return requestUser;
};
