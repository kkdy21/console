import { withKnobs } from '@storybook/addon-knobs/vue';
import { action } from '@storybook/addon-actions';
import BaseCheckbox from './BaseCheckbox';

export default {
    title: 'base/BaseCheckBox',
    component: BaseCheckbox,
    decorators: [withKnobs],
};

export const checkbox = () => ({
    name: 'checkbox',
    components: { BaseCheckbox },
    template: '<BaseCheckbox @change=\'change\' @input=\'input\'></BaseCheckbox>',
    data() {
        return {
            change: action('change'),
            input: action('input'),
        };
    },
});
