/**
 * MI Card Block Editor Script
 */

(function() {
    const { registerBlockType } = wp.blocks;
    const { __ } = wp.i18n;
    const { InspectorControls, useBlockProps } = wp.blockEditor;
    const { PanelBody, RangeControl, Placeholder } = wp.components;
    const { Fragment, createElement } = wp.element;
    
    // Register the block
    registerBlockType('mi/card', {
        edit: function(props) {
            const { attributes, setAttributes } = props;
            const blockProps = useBlockProps();
            
            return createElement(
                Fragment,
                null,
                createElement(
                    InspectorControls,
                    null,
                    createElement(
                        PanelBody,
                        { title: __('Settings'), initialOpen: true },
                        createElement(
                            'div',
                            { className: 'components-base-control' },
                            createElement(
                                'label',
                                { className: 'components-base-control__label' },
                                __('Card Type')
                            ),
                            createElement(
                                'select',
                                {
                                    className: 'components-select-control__input',
                                    value: attributes.variant,
                                    onChange: function(e) { setAttributes({ variant: e.target.value }); }
                                },
                                createElement('option', { value: 'generic' }, __('Generic Card')),
                                createElement('option', { value: 'property' }, __('Property Card')),
                                createElement('option', { value: 'business' }, __('Business Card'))
                            )
                        ),
                        attributes.variant !== 'generic' && createElement(RangeControl, {
                            label: __('Number of Items'),
                            value: attributes.count,
                            onChange: function(value) { setAttributes({ count: value }); },
                            min: 1,
                            max: 12
                        }),
                        createElement(RangeControl, {
                            label: __('Columns'),
                            value: attributes.columns,
                            onChange: function(value) { setAttributes({ columns: value }); },
                            min: 1,
                            max: 4
                        })
                    )
                ),
                createElement(
                    'div',
                    blockProps,
                    createElement(
                        Placeholder,
                        {
                            icon: 'index-card',
                            label: __('MI Card'),
                            instructions: attributes.variant === 'generic' 
                                ? __('Displays content in a card layout.') 
                                : (attributes.variant === 'property' 
                                    ? __('Displays properties in a card layout.') 
                                    : __('Displays businesses in a card layout.'))
                        },
                        createElement(
                            'p',
                            null,
                            attributes.variant === 'generic'
                                ? __('This block will show generic cards in') + ' ' + attributes.columns + ' ' + __('columns.')
                                : __('This block will show') + ' ' + attributes.count + ' ' + (attributes.variant === 'property' ? __('properties') : __('businesses')) + ' ' + __('in') + ' ' + attributes.columns + ' ' + __('columns.')
                        )
                    )
                )
            );
        },
        
        save: function() {
            return null; // Dynamic block rendered in PHP
        }
    });
})();
