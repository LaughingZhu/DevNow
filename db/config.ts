import { column, defineDb, defineTable } from 'astro:db';

const Post = defineTable({
  columns: {
    id: column.text({ unique: true }),
    view: column.number()
  },
  indexes: [{ on: ['id'] }]
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Post
  }
});
