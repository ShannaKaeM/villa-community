/**
 * MI Hero Block
 */
(function() {
    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType;
    var el = wp.element.createElement;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var RichText = wp.blockEditor.RichText;
    var MediaUpload = wp.blockEditor.MediaUpload;
    var PanelBody = wp.components.PanelBody;
    var TextControl = wp.components.TextControl;
    var Button = wp.components.Button;
    
    registerBlockType('mi/hero', {
        title: 'MI Hero',
        icon: 'cover-image',
        category: 'miblocks',
        
        edit: function(props) {
            var attributes = props.attributes;
            
            // Function to update avatar
            function updateAvatar(index, property, value) {
                var newAvatars = [...attributes.avatars];
                if (!newAvatars[index]) {
                    newAvatars[index] = {};
                }
                newAvatars[index][property] = value;
                props.setAttributes({ avatars: newAvatars });
            }
            
            // Function to handle media upload for avatars
            function onSelectImage(index, media) {
                updateAvatar(index, 'url', media.url);
                if (!attributes.avatars[index].alt) {
                    updateAvatar(index, 'alt', media.alt || 'Team member');
                }
            }
            
            return [
                // Inspector Controls
                el(InspectorControls, { key: 'inspector' },
                    el(PanelBody, { title: 'Hero Content', initialOpen: true },
                        el(TextControl, {
                            label: 'Title Line 1',
                            value: attributes.title_line1,
                            onChange: function(value) { props.setAttributes({ title_line1: value }); }
                        }),
                        el(TextControl, {
                            label: 'Title Line 2',
                            value: attributes.title_line2,
                            onChange: function(value) { props.setAttributes({ title_line2: value }); }
                        }),
                        el(TextControl, {
                            label: 'Title Line 3',
                            value: attributes.title_line3,
                            onChange: function(value) { props.setAttributes({ title_line3: value }); }
                        }),
                        el(TextControl, {
                            label: 'Subtitle',
                            value: attributes.subtitle,
                            onChange: function(value) { props.setAttributes({ subtitle: value }); }
                        }),
                        el(TextControl, {
                            label: 'Contact Text',
                            value: attributes.contactText,
                            onChange: function(value) { props.setAttributes({ contactText: value }); }
                        }),
                        el(TextControl, {
                            label: 'Button Text',
                            value: attributes.buttonText,
                            onChange: function(value) { props.setAttributes({ buttonText: value }); }
                        }),
                        el(TextControl, {
                            label: 'Button URL',
                            value: attributes.buttonUrl,
                            onChange: function(value) { props.setAttributes({ buttonUrl: value }); }
                        })
                    ),
                    
                    el(PanelBody, { title: 'Avatars', initialOpen: false },
                        el('div', { className: 'mi-hero-avatars-control' },
                            attributes.avatars.map(function(avatar, index) {
                                return el('div', { key: index, className: 'mi-hero-avatar-item' },
                                    el('h4', {}, 'Avatar ' + (index + 1)),
                                    el(MediaUpload, {
                                        onSelect: function(media) { onSelectImage(index, media); },
                                        type: 'image',
                                        value: avatar.url,
                                        render: function(obj) {
                                            return el('div', {},
                                                el(Button, {
                                                    className: avatar.url ? 'image-button' : 'button button-large',
                                                    onClick: obj.open
                                                }, avatar.url ? 'Change Image' : 'Upload Image'),
                                                avatar.url && el('img', { 
                                                    src: avatar.url, 
                                                    alt: avatar.alt,
                                                    style: { maxWidth: '100px', marginTop: '10px' }
                                                })
                                            );
                                        }
                                    }),
                                    el(TextControl, {
                                        label: 'Alt Text',
                                        value: avatar.alt,
                                        onChange: function(value) { updateAvatar(index, 'alt', value); }
                                    })
                                );
                            })
                        )
                    )
                ),
                
                // Block preview in editor
                el('div', { className: props.className },
                    el('div', { className: 'bg-colorLight rounded-radiusLg shadow-shadowMd p-4' },
                        el('div', { className: 'grid grid-cols-1 gap-4' },
                            el('div', { className: 'flex flex-col gap-4' },
                                el('h2', { className: 'text-3xl font-bold' },
                                    attributes.title_line1 + ' ' + attributes.title_line2 + ' ' + attributes.title_line3
                                ),
                                el('p', {}, attributes.subtitle),
                                el('div', { className: 'mi-hero-contact' },
                                    el('div', { className: 'mi-hero-avatars' },
                                        attributes.avatars.map(function(avatar, index) {
                                            return avatar.url ? el('img', {
                                                key: index,
                                                src: avatar.url,
                                                alt: avatar.alt,
                                                className: 'mi-hero-avatar'
                                            }) : null;
                                        })
                                    ),
                                    el('span', { className: 'mi-hero-contact-text' }, attributes.contactText)
                                ),
                                el('a', { 
                                    href: attributes.buttonUrl,
                                    className: 'mi-hero-button'
                                }, attributes.buttonText)
                            )
                        )
                    )
                )
            ];
        },
        
        save: function() {
            // Dynamic block, render handled by PHP
            return null;
        }
    });
})();
