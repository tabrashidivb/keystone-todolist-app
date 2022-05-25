import { config, list } from '@keystone-6/core';
import { text, password, relationship, timestamp, select } from '@keystone-6/core/fields';
import { withAuth, session } from './auth';
import { document } from '@keystone-6/fields-document';

const lists = {
    User: list({
      fields: {
        name: text({ validation: { isRequired: true } }),
        // Ensure declared emails are unique
        email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
        password: password({validation: {isRequired: true}}),
        posts: relationship({ ref: 'Post.author', many: true}),
      },
    }),

    // Relationship: Post can have 1 User as author, User can have many posts
    Post: list({
        fields: {
            title: text(),
            author: relationship({ 
                ref: 'User.posts', 
                ui: {
                    displayMode: 'cards',
                    cardFields: ['name', 'email'],
                    inlineEdit: { fields: ['name', 'email'] },
                    linkToItem: true, // Card links to field in user list
                    inlineCreate: { fields: ['name', 'email'] },
                }, 
            }),
            publishedAt: timestamp(),
            // Status is post status ( ready to Post or not, use select object to create a dropdown )
            status: select({
                ui: {
                    displayMode: 'segmented-control'
                }, 
                defaultValue: 'draft',
                options: [ 
                    { label: 'Published', value: 'published'}, 
                    { label: 'Draft', value: 'draft' }
                ],
            }),
            content: document({
                formatting: true,
                links: true,
                dividers: true,
                layouts: [
                  [1, 1],
                  [1, 1, 1],
                  [2, 1],
                  [1, 2],
                  [1, 2, 1],
                ],
            }), 
        }
        })
}; 


export default config(
    withAuth({
        db: {
            provider: 'sqlite',
            url: 'file:./keystone.db',
        },
        lists,
        session, 
        ui: {
            isAccessAllowed: (context) => !!context.session?.data,  
        }
    })
);