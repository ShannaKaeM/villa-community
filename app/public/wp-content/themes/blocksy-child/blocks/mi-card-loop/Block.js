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
                default: 'property'
            },
            columns: {
                type: 'number',
                default: 3
            },
            count: {
                type: 'number',
                default: 3
            },
            cardSize: {
                type: 'string',
                default: 'normal'
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
            buttonSize: {
                type: 'string',
                default: 'md'
            },
            buttonColor: {
                type: 'string',
                default: 'primary'
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
            },
            showFilters: {
                type: 'boolean',
                default: false
            },
            filterPosition: {
                type: 'string',
                default: 'left'
            },
            filterCategories: {
                type: 'array',
                default: []
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
            
            function onChangeCardSize(newCardSize) {
                props.setAttributes({ cardSize: newCardSize });
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
            
            function onChangeButtonSize(newButtonSize) {
                props.setAttributes({ buttonSize: newButtonSize });
            }
            
            function onChangeButtonColor(newButtonColor) {
                props.setAttributes({ buttonColor: newButtonColor });
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
            
            function onChangeShowFilters(newShowFilters) {
                props.setAttributes({ showFilters: newShowFilters });
            }
            
            function onChangeFilterPosition(newFilterPosition) {
                props.setAttributes({ filterPosition: newFilterPosition });
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
                        }),
                        el(SelectControl, {
                            label: 'Card Size',
                            value: attributes.cardSize,
                            options: [
                                { label: 'Compact', value: 'compact' },
                                { label: 'Normal', value: 'normal' },
                                { label: 'Large', value: 'large' }
                            ],
                            onChange: onChangeCardSize
                        })
                    ),
                    attributes.variant === 'generic' && el(PanelBody, { title: 'Card Content (Generic Only)', initialOpen: false },
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
                    el(PanelBody, { title: 'Button Options', initialOpen: false },
                        el(SelectControl, {
                            label: 'Button Size',
                            value: attributes.buttonSize,
                            options: [
                                { label: 'Small', value: 'sm' },
                                { label: 'Medium', value: 'md' },
                                { label: 'Large', value: 'lg' }
                            ],
                            onChange: onChangeButtonSize
                        }),
                        el(SelectControl, {
                            label: 'Button Color',
                            value: attributes.buttonColor,
                            options: [
                                { label: 'Primary', value: 'primary' },
                                { label: 'Secondary', value: 'secondary' },
                                { label: 'Accent', value: 'accent' },
                                { label: 'Neutral', value: 'neutral' }
                            ],
                            onChange: onChangeButtonColor
                        })
                    ),
                    el(PanelBody, { title: 'Filter Options', initialOpen: false },
                        el(ToggleControl, {
                            label: 'Show Filters',
                            checked: attributes.showFilters,
                            onChange: onChangeShowFilters
                        }),
                        attributes.showFilters && el(SelectControl, {
                            label: 'Filter Position',
                            value: attributes.filterPosition,
                            options: [
                                { label: 'Left Sidebar', value: 'left' },
                                { label: 'Right Sidebar', value: 'right' }
                            ],
                            onChange: onChangeFilterPosition
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
