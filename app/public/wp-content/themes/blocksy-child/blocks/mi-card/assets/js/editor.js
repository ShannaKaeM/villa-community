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
                        createElement(RangeControl, {
                            label: __('Number of Properties'),
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
                            label: __('MI Property Card'),
                            instructions: __('Displays the latest properties in a card layout.')
                        },
                        createElement(
                            'p',
                            null,
                            __('This block will show') + ' ' + attributes.count + ' ' + __('properties in') + ' ' + attributes.columns + ' ' + __('columns.')
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
