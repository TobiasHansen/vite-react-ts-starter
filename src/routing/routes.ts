export interface Route {
  index: number;
  name: string;
  path: string;
}

export const routes: { [key: string]: Route } = {
  frontpage: {
    index: 0,
    name: 'Frontpage',
    path: '/',
  },
  pageA: {
    index: 1,
    name: 'Page a',
    path: '/page-a',
  },
};
