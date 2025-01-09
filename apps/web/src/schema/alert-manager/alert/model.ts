import type {
    AlertResourcesType,
    AlertSeverityType,
    AlertStatusType, AlertTriggeredType,
    AlertUrgencyType,
    AlertEventActionType,
} from '@/schema/alert-manager/alert/type';

export interface AlertModel {
    alert_id: string;
    title: string;
    status: AlertStatusType;
    description: string;
    urgency: AlertUrgencyType;
    severity: AlertSeverityType;
    rule: string;
    image_url: string;
    resources: AlertResourcesType[];
    additional_info: Record<string, any>;
    triggered_type: AlertTriggeredType;
    triggered_by: string;
    webhook_id: string;
    escalation_policy_id: string;
    service_id: string;
    workspace_id: string;
    domain_id: string;
    created_at: string;
    updated_at: string;
    acknowledged_at: string;
    resolved_at: string;
    acknowledged_by: string,
    resolved_by: string,
}

export interface AlertEventModel {
    alert_id: string;
    action: AlertEventActionType;
    description: string;
    event_info: AlertModel;
    created_by: string;
    created_at: string;
}