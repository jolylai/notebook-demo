import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'Dashboard',
    children: [
      {
        name: '分析页',
        path: 'Analysis',
      },
      {
        name: '监控页',
        path: 'Monitor',
      },
      {
        name: '工作台',
        path: 'Workplace',
        // hideInMenu: true,
      },
    ],
  },
  {
    name: 'CSS',
    icon: 'form',
    path: 'css',
    children: [
      {
        name: '背景',
        path: 'background',
      },
      {
        name: '边框',
        path: 'border',
      },
      {
        name: '形状',
        path: 'shape',
      },
      {
        name: '加载',
        path: 'loading',
        icon: 'loading',
      },
    ],
  },
  {
    name: 'Zent',
    icon: 'form',
    path: 'zent',
    children: [
      {
        name: '加载',
        path: 'loading',
        icon: 'loading',
      },
      {
        name: '固钉',
        path: 'affix',
        icon: 'pushpin',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}
//TODO:先去掉了authority，等调试完了再加上
export const getMenuData = () => formatter(menuData);
