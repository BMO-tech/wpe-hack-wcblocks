import { ApiClient } from './ApiClient';

export async function gePageData() {
  return ApiClient.get('/posts');
}

export async function getPageSlugs() {
  const posts = await getPageData();
  return posts.map((post) => {
    return {
      params: { id: post.slug },
    };
  });
}

export async function getPage(slug) {
  try {
    const page = await ApiClient.get(`/pages?slug=${slug}`)
    return page[0]
  } catch (e) {
    console.error('ERROR', e.message)
    return {}
  }
}
