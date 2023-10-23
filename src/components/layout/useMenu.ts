import {
    Document,
    Menu as IconMenu,
    Location,
    // Setting,
} from '@element-plus/icons-vue'
import { INavMenu } from './type'


export const useMenu = () => {
    const menuItems: Array<INavMenu> = [
        {
            name: '首页',
            url: 'index',
            icon: Document
        },
        {
            name: 'vue3',
            url: 'vue3',
            icon: IconMenu
        },
        {
            name: 'typeScript',
            url: 'typeScript',
            icon: Location
        },
    ];
    return {
        menuItems
    }
}