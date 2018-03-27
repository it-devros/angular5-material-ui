import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/employees',
        title: 'Employess',
        type: 'link',
        icontype: 'dashboard'
    },{
        path: '/settings',
        title: 'Settings',
        type: 'sub',
        icontype: 'settings',
        collapse: 'settings',
        children: [
            {path: 'about', title: 'About', ab:''},
            {path: 'beach_schedule', title: 'Beach Schedule', ab:''},
            {path: 'checkboxes', title: 'Checkboxes', ab:''}
        ]
    },{
        path: '/beach_map',
        title: 'Beach Map',
        type: 'sub',
        icontype: 'map',
        collapse: 'beach_map',
        children: [
            {path: 'configuration', title: 'Configuration', ab:''},
            {path: 'view', title: 'View', ab:''}
        ]
    },{
        path: '/beach_menu',
        title: 'Beach Menu',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'beach_menu',
        children: [
            {path: 'view', title: 'View', ab:''},
            {path: 'edit', title: 'Add/Edit/Delete', ab:''}
        ]
    },{
        path: '/statistics',
        title: 'Statistics',
        type: 'sub',
        icontype: 'insert_chart',
        collapse: 'statistics',
        children: [
            {path: 'compare', title: 'Compare', ab:''},
            {path: 'beach_status', title: 'Beach Status', ab:''},
            {path: 'customers', title: 'Customers', ab:''},
            {path: 'rating_reviews', title: 'Rating & Reviews', ab:''}
        ]
    },{
        path: '/support_center',
        title: 'Support Center',
        type: 'link',
        icontype: 'gps_fixed'

    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
