import * as styles from '@/styles/colors';

export const SERVICE_DETAIL_TABS = {
    OVERVIEW: 'overview',
    WEBHOOK: 'webhook',
    NOTIFICATIONS: 'notifications',
    EVENT_RULE: 'event_rule',
    ESCALATION_POLICY: 'escalation_policy',
} as const;

export const ALERT_STATUS_FILTER = {
    TRIGGERED: 'triggered',
    ACKNOWLEDGED: 'acknowledged',
    RESOLVED: 'resolved',
} as const;
export const ALERT_URGENCY_FILTER = {
    HIGH: 'High',
    LOW: 'Low',
} as const;

export const WEBHOOK_DETAIL_TABS = {
    DETAIL: 'detail',
    HELP: 'help',
} as const;
export const WEBHOOK_STATE = {
    ENABLED: 'ENABLED',
    DISABLED: 'DISABLED',
} as const;
export const WEBHOOK_STATE_COLOR = {
    ENABLED: {
        iconColor: styles.safe,
        textColor: styles.gray[900],
    },
    PENDING: {
        iconColor: styles.yellow[500],
        textColor: styles.gray[900],
    },
} as const;
