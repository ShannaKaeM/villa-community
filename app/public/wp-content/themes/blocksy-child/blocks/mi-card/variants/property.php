<?php
/**
 * Property Card Template
 * 
 * This template is used for displaying property cards with Tailwind CSS.
 */

// Set up columns class based on attributes
$columns_class = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-' . esc_attr($attributes['columns']);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="grid <?php echo $columns_class; ?> gap-6">
        <?php if (!empty($properties)) : ?>
            <?php foreach ($properties as $property) : ?>
                <div class="bg-white rounded-[var(--radius-btn)] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div class="relative">
                        <?php if (!empty($property['image_url'])) : ?>
                            <img src="<?php echo esc_url($property['image_url']); ?>" 
                                alt="<?php echo esc_attr($property['title']); ?>"
                                class="w-full h-60 object-cover">
                        <?php endif; ?>
                        
                        <?php if (!empty($property['price'])) : ?>
                            <div class="absolute bottom-0 left-0 bg-secondary text-white py-[var(--spacing-btn-y)] px-[var(--spacing-btn-x)] font-semibold rounded-tr-[var(--radius-btn)]">
                                <span><?php echo esc_html($property['price']); ?></span>
                            </div>
                        <?php endif; ?>
                        
                        <?php if (!empty($property['status'])) : ?>
                            <div class="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-semibold shadow-sm">
                                <?php echo esc_html($property['status']); ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php if (!empty($property['featured'])) : ?>
                            <div class="absolute top-4 left-4 bg-emphasis text-white py-1 px-3 rounded-full text-sm font-semibold shadow-sm">
                                Featured
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-base-darkest mb-2">
                            <a href="<?php echo esc_url($property['link']); ?>" class="hover:text-secondary transition-colors">
                                <?php echo esc_html($property['title']); ?>
                            </a>
                        </h3>
                        
                        <?php if (!empty($property['location'])) : ?>
                            <div class="flex items-center text-base mb-3">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span><?php echo esc_html($property['location']); ?></span>
                            </div>
                        <?php endif; ?>
                        
                        <?php if (!empty($property['excerpt'])) : ?>
                            <p class="text-base-light text-sm mb-4"><?php echo wp_kses_post($property['excerpt']); ?></p>
                        <?php endif; ?>
                        
                        <div class="grid grid-cols-3 gap-2 mb-4 border-t border-subtle-lightest pt-4">
                            <?php if (!empty($property['bedrooms'])) : ?>
                                <div class="bg-subtle-lightest rounded-[calc(var(--radius-btn)/1.5)] p-2 text-center">
                                    <span class="block text-xs text-base-light">Bedrooms</span>
                                    <span class="font-semibold text-base"><?php echo esc_html($property['bedrooms']); ?></span>
                                </div>
                            <?php endif; ?>
                            
                            <?php if (!empty($property['bathrooms'])) : ?>
                                <div class="bg-subtle-lightest rounded-[calc(var(--radius-btn)/1.5)] p-2 text-center">
                                    <span class="block text-xs text-base-light">Bathrooms</span>
                                    <span class="font-semibold text-base"><?php echo esc_html($property['bathrooms']); ?></span>
                                </div>
                            <?php endif; ?>
                            
                            <?php if (!empty($property['area'])) : ?>
                                <div class="bg-subtle-lightest rounded-[calc(var(--radius-btn)/1.5)] p-2 text-center">
                                    <span class="block text-xs text-base-light">Area</span>
                                    <span class="font-semibold text-base"><?php echo esc_html($property['area']); ?></span>
                                </div>
                            <?php endif; ?>
                        </div>
                        
                        <?php if (!empty($property['amenities'])) : ?>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <?php foreach (array_slice($property['amenities'], 0, 3) as $amenity) : ?>
                                    <span class="bg-subtle-lightest text-base px-3 py-1 rounded-full text-xs">
                                        <?php echo esc_html($amenity['name']); ?>
                                    </span>
                                <?php endforeach; ?>
                                <?php if (count($property['amenities']) > 3) : ?>
                                    <span class="text-secondary text-xs">+<?php echo count($property['amenities']) - 3; ?> more</span>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        
                        <a href="<?php echo esc_url($property['link']); ?>" class="block w-full bg-secondary hover:bg-secondary-hover text-white text-center py-[var(--spacing-btn-y)] px-[var(--spacing-btn-x)] rounded-[var(--radius-btn)] font-semibold transition-colors shadow-[var(--shadow-btn)]">
                            View Property
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php else : ?>
            <div class="col-span-full text-center p-8 bg-subtle-lightest rounded-[var(--radius-btn)]">
                <p class="text-base">No properties found.</p>
            </div>
        <?php endif; ?>
    </div>
</div>
