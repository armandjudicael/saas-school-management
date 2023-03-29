// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const students = {
    id: 'students',
    title: 'students',
    type: 'group',
    children: [
        {
            id: 'registre',
            title: 'Registre Page',
            type: 'item',
            url: '/registre',
            icon: icons.ChromeOutlined
        },
        {
            id: 'liste',
            title: 'Liste',
            type: 'item',
            url: '/liste',
            icon: icons.QuestionOutlined,
            
        }
    ]
};

export default students;
