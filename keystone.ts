import { config } from '@keystone-6/core'; 

export default config({
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists: {
        
    }
  });

