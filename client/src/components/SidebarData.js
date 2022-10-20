import { ProfileIcon, GroupIcon, QuestionIcon } from './Icons';

export const SidebarData = [
    {
        title: 'Groups',
        path: '/groups',
        icon: <GroupIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <ProfileIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <QuestionIcon />,
        cName: 'nav-text'
    }
];