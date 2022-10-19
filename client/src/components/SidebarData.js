import { FriendsIcon, GroupIcon, QuestionIcon } from './Icons';

export const SidebarData = [
    {
        title: 'Groups',
        path: '/groups',
        icon: <GroupIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FriendsIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <QuestionIcon />,
        cName: 'nav-text'
    }
];