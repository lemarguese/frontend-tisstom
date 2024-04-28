import SvgColor from 'src/components/svg-color';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  // {
  //   title: 'analytics',
  //   path: '/analytics',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'Clinics',
    path: '/',
    icon: icon('ic_analytics'),
  },
];

export default navConfig;
