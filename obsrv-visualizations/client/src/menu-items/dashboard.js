// assets
import { IconDashboard, IconChartArea } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconChartArea };

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'worldMap',
      title: 'World Weather Report',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'indiaMap',
      title: 'India Weather Report',
      type: 'item',
      url: '/india',
      icon: icons.IconChartArea,
      breadcrumbs: false
    },
    {
      id: 'types',
      title: 'Chart Types',
      type: 'item',
      url: '/types',
      icon: icons.IconChartArea,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
