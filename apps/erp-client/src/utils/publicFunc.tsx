import routes from '../../config/routes';

/**
 * 以递归的方式展平react router数组
 * @param {object[]} arr 路由数组
 * @param {string} child 需要递归的字段名
 */
export const flattenRoutes = (arr: CommonObjectType<unknown>[]) =>
  arr.reduce((prev: CommonObjectType<unknown>[], item: CommonObjectType<unknown>) => {
    if (Array.isArray(item.routes)) {
      prev.push(item);
    }
    return prev.concat(Array.isArray(item.routes) ? flattenRoutes(item.routes) : item);
  }, []);

/**
 * 根据路径获取路由的name和key
 * @param {string} path 路由
 */
export const getKeyName = (path: string = '/403') => {
  const truePath = path.split('?')[0];
  const curRoute = flattenRoutes(routes).filter((item: { path: string | string[] }) =>
    item.path.includes(truePath),
  );
  if (!curRoute[0]) return { title: '暂无权限', tabKey: '403', component: <div></div> };
  const { name, key, component, icon } = curRoute[0];

  return { title: name, tabKey: key, component, icon };
};
