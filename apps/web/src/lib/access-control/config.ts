import type { MenuId } from '@/lib/menu/config';
import { MENU_ID } from '@/lib/menu/config';

export interface AccessInfo {
    referenceMenuIds: MenuId[];
}

// refined page permission types. page NEVER includes wildcard.
// export type PagePermissionMap = Record<string, PagePermissionType>;
export type PageAccessType = {
    read?: boolean;
    write?: boolean;
    access?: boolean;
};
export type PageAccessMap = Record<string, PageAccessType>;

export const DOMAIN_ADMIN_DEFAULT_PERMISSIONS: MenuId[] = [
    ...Object.values(MENU_ID).filter((menuId) => menuId !== MENU_ID.PROJECT),
];

export const WORKSPACE_OWNER_DEFAULT_PERMISSIONS: MenuId[] = [
    MENU_ID.WORKSPACE_HOME,
    MENU_ID.DASHBOARDS,
    MENU_ID.PROJECT,
    MENU_ID.ASSET_INVENTORY,
    MENU_ID.CLOUD_SERVICE,
    MENU_ID.SERVER,
    MENU_ID.METRIC_EXPLORER,
    MENU_ID.SECURITY,
    MENU_ID.COLLECTOR,
    MENU_ID.SERVICE_ACCOUNT,
    MENU_ID.COST_EXPLORER,
    MENU_ID.COST_ANALYSIS,
    MENU_ID.BUDGET,
    MENU_ID.COST_REPORT,
    MENU_ID.ALERT_MANAGER,
    MENU_ID.SERVICE,
    MENU_ID.ALERTS,
    MENU_ID.ALERT_MANAGER_DASHBOARD, // NOTE: v1 menu
    MENU_ID.ESCALATION_POLICY, // NOTE: v1 menu
    MENU_ID.IAM,
    MENU_ID.USER,
    MENU_ID.USER_GROUP,
    MENU_ID.APP,
    MENU_ID.MY_PAGE,
    MENU_ID.ACCOUNT_PROFILE,
    MENU_ID.NOTIFICATIONS,
    MENU_ID.INFO,
    MENU_ID.NOTICE,
    MENU_ID.OPS_FLOW,
    MENU_ID.OPS_FLOW_LANDING,
    MENU_ID.TASK_BOARD,
];
export const WORKSPACE_MEMBER_DEFAULT_PERMISSIONS: MenuId[] = [
    MENU_ID.WORKSPACE_HOME,
    MENU_ID.DASHBOARDS,
    MENU_ID.PROJECT,
    MENU_ID.ASSET_INVENTORY,
    MENU_ID.CLOUD_SERVICE,
    MENU_ID.SERVER,
    MENU_ID.METRIC_EXPLORER,
    MENU_ID.SECURITY,
    MENU_ID.SERVICE_ACCOUNT,
    MENU_ID.COST_EXPLORER,
    MENU_ID.COST_ANALYSIS,
    MENU_ID.BUDGET,
    MENU_ID.ALERT_MANAGER,
    MENU_ID.SERVICE,
    MENU_ID.ALERTS,
    MENU_ID.ALERT_MANAGER_DASHBOARD, // NOTE: v1 menu
    MENU_ID.ESCALATION_POLICY, // NOTE: v1 menu
    MENU_ID.MY_PAGE,
    MENU_ID.ACCOUNT_PROFILE,
    MENU_ID.NOTIFICATIONS,
    MENU_ID.INFO,
    MENU_ID.NOTICE,
    MENU_ID.OPS_FLOW,
    MENU_ID.OPS_FLOW_LANDING,
    MENU_ID.TASK_BOARD,
];

// HACK: this need to be changed with new SYSTEM domain planning
export const SYSTEM_USER_DEFAULT_PERMISSIONS: MenuId[] = [
    MENU_ID.IAM,
    MENU_ID.ROLE,
    MENU_ID.APP,
    MENU_ID.USER,
    MENU_ID.MY_PAGE,
    MENU_ID.ACCOUNT_PROFILE,
    MENU_ID.NOTIFICATIONS,
    MENU_ID.INFO,
    MENU_ID.NOTICE,
];
export const NO_ROLE_USER_DEFAULT_PERMISSIONS: MenuId[] = [
    MENU_ID.MY_PAGE,
    MENU_ID.ACCOUNT_PROFILE,
    MENU_ID.NOTIFICATIONS,
];


export const WORKSPACE_USER_MINIMAL_PERMISSIONS: MenuId[] = [
    MENU_ID.WORKSPACE_HOME,
    MENU_ID.MY_PAGE,
    MENU_ID.ACCOUNT_PROFILE,
    MENU_ID.NOTIFICATIONS,
    MENU_ID.NOTICE,
];

export const PAGE_ACCESS = {
    RESTRICTED: 'restricted',
    READONLY: 'readonly',
    WRITABLE: 'writable',
} as const;
