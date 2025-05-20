/**
 * MI Card Loop Block
 * 
 * Editor script for the card loop block
 */

(function(blocks, element, blockEditor, components) {
    var el = element.createElement;
    var registerBlockType = blocks.registerBlockType;
    var InspectorControls = blockEditor.InspectorControls;
    var PanelBody = components.PanelBody;
    var TextControl = components.TextControl;
    var SelectControl = components.SelectControl;
    var RangeControl = components.RangeControl;
    var ToggleControl = components.ToggleControl;
    var MediaUpload = blockEditor.MediaUpload;
    var Button = components.Button;
    var ServerSideRender = wp.serverSideRender;
    
    registerBlockType('mi/card-loop', {
        title: 'MI Card Loop',
        icon: 'grid-view',
        category: 'design',
        
        attributes: {
            variant: {
                type: 'string',
                default: 'generic'
            },
            columns: {
                type: 'number',
                default: 3
            },
            count: {
                type: 'number',
                default: 3
            },
            title: {
                type: 'string',
                default: 'Card Title'
            },
            description: {
                type: 'string',
                default: 'This is a sample card description.'
            },
            imageUrl: {
                type: 'string',
                default: ''
            },
            imageAlt: {
                type: 'string',
                default: ''
            },
            linkUrl: {
                type: 'string',
                default: '#'
            },
            linkText: {
                type: 'string',
                default: 'Learn More'
            },
            price: {
                type: 'string',
                default: ''
            },
            status: {
                type: 'string',
                default: ''
            },
            featured: {
                type: 'boolean',
                default: false
            },
            location: {
                type: 'string',
                default: ''
            },
            bedrooms: {
                type: 'string',
                default: ''
            },
            bathrooms: {
                type: 'string',
                default: ''
            },
            area: {
                type: 'string',
                default: ''
            }
        },
        
        edit: function(props) {
            var attributes = props.attributes;
            
            function onChangeVariant(newVariant) {
                props.setAttributes({ variant: newVariant });
            }
            
            function onChangeColumns(newColumns) {
                props.setAttributes({ columns: newColumns });
            }
            
            function onChangeCount(newCount) {
                props.setAttributes({ count: newCount });
            }
            
            function onChangeTitle(newTitle) {
                props.setAttributes({ title: newTitle });
            }
            
            function onChangeDescription(newDescription) {
                props.setAttributes({ description: newDescription });
            }
            
            function onSelectImage(media) {
                props.setAttributes({
                    imageUrl: media.url,
                    imageAlt: media.alt || ''
                });
            }
            
            function onChangeLinkUrl(newLinkUrl) {
                props.setAttributes({ linkUrl: newLinkUrl });
            }
            
            function onChangeLinkText(newLinkText) {
                props.setAttributes({ linkText: newLinkText });
            }
            
            function onChangePrice(newPrice) {
                props.setAttributes({ price: newPrice });
            }
            
            function onChangeStatus(newStatus) {
                props.setAttributes({ status: newStatus });
            }
            
            function onChangeFeatured(newFeatured) {
                props.setAttributes({ featured: newFeatured });
            }
            
            function onChangeLocation(newLocation) {
                props.setAttributes({ location: newLocation });
            }
            
            function onChangeBedrooms(newBedrooms) {
                props.setAttributes({ bedrooms: newBedrooms });
            }
            
            function onChangeBathrooms(newBathrooms) {
                props.setAttributes({ bathrooms: newBathrooms });
            }
            
            function onChangeArea(newArea) {
                props.setAttributes({ area: newArea });
            }
            
            return [
                el(InspectorControls, { key: 'inspector' },
                    el(PanelBody, { title: 'Card Loop Settings', initialOpen: true },
                        el(SelectControl, {
                            label: 'Variant',
                            value: attributes.variant,
                            options: [
                                { label: 'Generic', value: 'generic' },
                                { label: 'Property', value: 'property' },
                                { label: 'Business', value: 'business' }
                            ],
                            onChange: onChangeVariant
                        }),
                        el(RangeControl, {
                            label: 'Columns',
                            value: attributes.columns,
                            min: 1,
                            max: 4,
                            onChange: onChangeColumns
                        }),
                        el(RangeControl, {
                            label: 'Number of Cards',
                            value: attributes.count,
                            min: 1,
                            max: 12,
                            onChange: onChangeCount
                        })
                    ),
                    el(PanelBody, { title: 'Card Content', initialOpen: false },
                        el(TextControl, {
                            label: 'Title',
                            value: attributes.title,
                            onChange: onChangeTitle
                        }),
                        el(TextControl, {
                            label: 'Description',
                            value: attributes.description,
                            onChange: onChangeDescription
                        }),
                        el('div', { className: 'editor-post-featured-image' },
                            el('label', {}, 'Featured Image'),
                            el(MediaUpload, {
                                onSelect: onSelectImage,
                                allowedTypes: ['image'],
                                value: attributes.imageUrl,
                                render: function(obj) {
                                    return el(Button, {
                                        className: attributes.imageUrl ? 'editor-post-featured-image__preview' : 'editor-post-featured-image__toggle',
                                        onClick: obj.open
                                    },
                                    attributes.imageUrl ?
                                        el('img', { src: attributes.imageUrl }) :
                                        'Set featured image'
                                    );
                                }
                            })
                        ),
                        el(TextControl, {
                            label: 'Link URL',
                            value: attributes.linkUrl,
                            onChange: onChangeLinkUrl
                        }),
                        el(TextControl, {
                            label: 'Link Text',
                            value: attributes.linkText,
                            onChange: onChangeLinkText
                        })
                    ),
                    attributes.variant === 'property' && el(PanelBody, { title: 'Property Details', initialOpen: false },
                        el(TextControl, {
                            label: 'Price',
                            value: attributes.price,
                            onChange: onChangePrice
                        }),
                        el(TextControl, {
                            label: 'Status',
                            value: attributes.status,
                            onChange: onChangeStatus
                        }),
                        el(ToggleControl, {
                            label: 'Featured',
                            checked: attributes.featured,
                            onChange: onChangeFeatured
                        }),
                        el(TextControl, {
                            label: 'Location',
                            value: attributes.location,
                            onChange: onChangeLocation
                        }),
                        el(TextControl, {
                            label: 'Bedrooms',
                            value: attributes.bedrooms,
                            onChange: onChangeBedrooms
                        }),
                        el(TextControl, {
                            label: 'Bathrooms',
                            value: attributes.bathrooms,
                            onChange: onChangeBathrooms
                        }),
                        el(TextControl, {
                            label: 'Area',
                            value: attributes.area,
                            onChange: onChangeArea
                        })
                    )
                ),
                el('div', { className: props.className },
                    el(ServerSideRender, {
                        block: 'mi/card-loop',
                        attributes: attributes
                    })
                )
            ];
        },
        
        save: function() {
            return null; // Dynamic block, server-side rendered
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components
);
