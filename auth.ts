// auth.ts
// Code says that the User list is the list auth should be applied to 
// To keep authentication across refreshes we add sessions 
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'name',
  secretField: 'password',
  // Forces you to create a first user so you don't get locked out of admin UI without a login
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

let sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});



export { withAuth, session };