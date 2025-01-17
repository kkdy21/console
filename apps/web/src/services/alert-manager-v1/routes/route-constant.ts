import { MENU_ID } from '@/lib/menu/config';

export const ALERT_MANAGER_ROUTE_V1 = Object.freeze({
    _NAME: MENU_ID.ALERT_MANAGER,
    DASHBOARD: { _NAME: `${MENU_ID.ALERT_MANAGER}.${MENU_ID.ALERT_MANAGER_DASHBOARD}` },
    ALERTS: {
        _NAME: `${MENU_ID.ALERT_MANAGER}.${MENU_ID.ALERTS}`,
        DETAIL: { _NAME: `${MENU_ID.ALERT_MANAGER}.${MENU_ID.ALERTS}.detail` },
    },
    ESCALATION_POLICY: { _NAME: `${MENU_ID.ALERT_MANAGER}.${MENU_ID.ESCALATION_POLICY}` },
});
