import type {
    ALERT_STATUS_FILTER, ALERT_URGENCY_FILTER, WEBHOOK_STATE, SERVICE_DETAIL_TABS,
    WEBHOOK_DETAIL_TABS,
} from '@/services/alert-manager-v2/constants/alert-manager-constant';

export type ServiceDetailTabsType = typeof SERVICE_DETAIL_TABS[keyof typeof SERVICE_DETAIL_TABS];

export type AlertStatusFilterType = typeof ALERT_STATUS_FILTER[keyof typeof ALERT_STATUS_FILTER];
export type AlertUrgencyFilterType = typeof ALERT_URGENCY_FILTER[keyof typeof ALERT_URGENCY_FILTER];


export type WebhookDetailTabsType = typeof WEBHOOK_DETAIL_TABS[keyof typeof WEBHOOK_DETAIL_TABS];
export type WebhookStateType = typeof WEBHOOK_STATE[keyof typeof WEBHOOK_STATE];
