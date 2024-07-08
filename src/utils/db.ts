import { db, eq, Post } from 'astro:db';

export const getViewById = async (postId: string) => {
  try {
    const result = await db.select().from(Post).where(eq(Post.id, postId));

    if (result.length > 0) {
      return result[0].view;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching view count:', error);
    return null;
  }
};

export const addViewCount = async (postId: string) => {
  try {
    const currentViewCount = await getViewById(postId);

    if (currentViewCount !== null) {
      await db
        .update(Post)
        .set({ view: currentViewCount + 1 })
        .where(eq(Post.id, postId));
    } else {
      await db.insert(Post).values({ id: postId, view: 1 });
    }
  } catch (error) {
    console.error('Error adding view count:', error);
  }
};
