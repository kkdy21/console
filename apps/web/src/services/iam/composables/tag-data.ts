import type { InputItem } from '@cloudforet/mirinae/types/controls/input/text-input/type';

import type { Tags } from '@/schema/_common/model';

export const getInputItemsFromTagKeys = (keys: Tags): InputItem[] => Object.keys(keys).map((key) => ({
    label: `${key}:${keys[key]}`,
    name: `${key}:${keys[key]}`,
}));
