/**
 * Property Listings Block - Editor Script
 */

(function(blocks, editor, components, i18n, element) {
    var el = element.createElement;
    var __ = i18n.__;
    var InspectorControls = editor.InspectorControls;
    var PanelBody = components.PanelBody;
    var TextControl = components.TextControl;
    var RangeControl = components.RangeControl;
    var ToggleControl = components.ToggleControl;
    var SelectControl = components.SelectControl;
    
    blocks.registerBlockType('miblocks/mi-listings', {
        edit: function(props) {
            var attributes = props.attributes;
            
            return [
                // Inspector controls
                el(InspectorControls, { key: 'inspector' },
                    el(PanelBody, { title: __('Layout Settings'), initialOpen: true },
                        el(TextControl, {
                            label: __('Block Title'),
                            value: attributes.title,
                            onChange: function(value) {
                                props.setAttributes({ title: value });
                            }
                        }),
                        el(RangeControl, {
                            label: __('Columns'),
                            value: attributes.columns,
                            min: 1,
                            max: 4,
                            onChange: function(value) {
                                props.setAttributes({ columns: value });
                            }
                        }),
                        el(RangeControl, {
                            label: __('Properties Per Page'),
                            value: attributes.postsPerPage,
                            min: 3,
                            max: 24,
                            step: 3,
                            onChange: function(value) {
                                props.setAttributes({ postsPerPage: value });
                            }
                        })
                    ),
                    el(PanelBody, { title: __('Filter Settings'), initialOpen: false },
                        el(ToggleControl, {
                            label: __('Show Filters'),
                            checked: attributes.showFilters,
                            onChange: function(value) {
                                props.setAttributes({ showFilters: value });
                            }
                        }),
                        attributes.showFilters && el(SelectControl, {
                            label: __('Filter Position'),
                            value: attributes.filterPosition,
                            options: [
                                { label: __('Left'), value: 'left' },
                                { label: __('Top'), value: 'top' }
                            ],
                            onChange: function(value) {
                                props.setAttributes({ filterPosition: value });
                            }
                        }),
                        attributes.showFilters && el(ToggleControl, {
                            label: __('Show Property Types Filter'),
                            checked: attributes.showPropertyTypes,
                            onChange: function(value) {
                                props.setAttributes({ showPropertyTypes: value });
                            }
                        }),
                        attributes.showFilters && el(ToggleControl, {
                            label: __('Show Locations Filter'),
                            checked: attributes.showLocations,
                            onChange: function(value) {
                                props.setAttributes({ showLocations: value });
                            }
                        }),
                        attributes.showFilters && el(ToggleControl, {
                            label: __('Show Amenities Filter'),
                            checked: attributes.showAmenities,
                            onChange: function(value) {
                                props.setAttributes({ showAmenities: value });
                            }
                        }),
                        attributes.showFilters && el(ToggleControl, {
                            label: __('Show Bedroom Filter'),
                            checked: attributes.showBedroomFilter,
                            onChange: function(value) {
                                props.setAttributes({ showBedroomFilter: value });
                            }
                        }),
                        attributes.showFilters && el(ToggleControl, {
                            label: __('Show Bathroom Filter'),
                            checked: attributes.showBathroomFilter,
                            onChange: function(value) {
                                props.setAttributes({ showBathroomFilter: value });
                            }
                        }),
                        attributes.showFilters && el(ToggleControl, {
                            label: __('Show Guest Filter'),
                            checked: attributes.showGuestFilter,
                            onChange: function(value) {
                                props.setAttributes({ showGuestFilter: value });
                            }
                        }),
                        attributes.showFilters && el(ToggleControl, {
                            label: __('Show Price Filter'),
                            checked: attributes.showPriceFilter,
                            onChange: function(value) {
                                props.setAttributes({ showPriceFilter: value });
                            }
                        })
                    ),
                    el(PanelBody, { title: __('Query Settings'), initialOpen: false },
                        el(ToggleControl, {
                            label: __('Featured Properties Only'),
                            checked: attributes.featuredOnly,
                            onChange: function(value) {
                                props.setAttributes({ featuredOnly: value });
                            }
                        })
                    )
                ),
                
                // Block preview
                el('div', { className: props.className },
                    el('div', { className: 'mi-listings-preview' },
                        el('h2', {}, attributes.title || __('Our Properties')),
                        el('div', { className: 'mi-listings-layout' + (attributes.showFilters ? ' has-filters' : '') + ' filter-' + attributes.filterPosition },
                            attributes.showFilters && el('div', { className: 'mi-listings-filters' },
                                el('h3', {}, __('Filters')),
                                attributes.showPropertyTypes && el('div', { className: 'mi-filter-group' },
                                    el('h4', {}, __('Property Types')),
                                    el('div', { className: 'mi-filter-options' }, __('[Property Type Options]'))
                                ),
                                attributes.showLocations && el('div', { className: 'mi-filter-group' },
                                    el('h4', {}, __('Locations')),
                                    el('div', { className: 'mi-filter-options' }, __('[Location Options]'))
                                ),
                                attributes.showAmenities && el('div', { className: 'mi-filter-group' },
                                    el('h4', {}, __('Amenities')),
                                    el('div', { className: 'mi-filter-options' }, __('[Amenity Options]'))
                                ),
                                (attributes.showBedroomFilter || attributes.showBathroomFilter || attributes.showGuestFilter) && el('div', { className: 'mi-filter-group' },
                                    el('h4', {}, __('Property Details')),
                                    attributes.showBedroomFilter && el('div', { className: 'mi-filter-range' }, __('Bedrooms: [Range]')),
                                    attributes.showBathroomFilter && el('div', { className: 'mi-filter-range' }, __('Bathrooms: [Range]')),
                                    attributes.showGuestFilter && el('div', { className: 'mi-filter-range' }, __('Guests: [Range]'))
                                ),
                                attributes.showPriceFilter && el('div', { className: 'mi-filter-group' },
                                    el('h4', {}, __('Price')),
                                    el('div', { className: 'mi-filter-range' }, __('Price Range: [Range]'))
                                )
                            ),
                            el('div', { className: 'mi-listings-grid columns-' + attributes.columns },
                                el('div', { className: 'mi-property-card' }, '[Property Card]'),
                                el('div', { className: 'mi-property-card' }, '[Property Card]'),
                                el('div', { className: 'mi-property-card' }, '[Property Card]')
                            )
                        )
                    )
                )
            ];
        },
        
        save: function() {
            // Dynamic block, render on server
            return null;
        }
    });
}(
    window.wp.blocks,
    window.wp.blockEditor,
    window.wp.components,
    window.wp.i18n,
    window.wp.element
));
