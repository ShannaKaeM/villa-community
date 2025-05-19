<?php
/**
 * Property Card Template
 * 
 * This template is used for displaying property cards.
 *
 * @param array $item The property data
 * @param array $args Template arguments
 */

// Get the property data
$property = $item;

// Card classes
$card_class = 'mi-card__item';

// Add featured class if property is featured
if (!empty($property['is_featured'])) {
    $card_class .= ' mi-card__item--featured';
}

// Add layout-specific classes
if ($args['layout'] === 'list') {
    $card_class .= ' mi-card__item--list';
}
?>

<div class="<?php echo esc_attr($card_class); ?>">
    <?php if ($show_image && !empty($property['featured_image'])) : ?>
        <div class="mi-card__media">
            <a href="<?php echo esc_url($property['permalink']); ?>" class="mi-card__media-link">
                <img src="<?php echo esc_url($property['featured_image']['src']); ?>" 
                     alt="<?php echo esc_attr($property['title']); ?>"
                     class="mi-card__image" 
                     width="<?php echo esc_attr($property['featured_image']['width']); ?>"
                     height="<?php echo esc_attr($property['featured_image']['height']); ?>">
                
                <?php if ($show_price && !empty($property['nightly_rate'])) : ?>
                    <div class="mi-card__price">
                        <span class="mi-card__price-amount">$<?php echo esc_html(number_format($property['nightly_rate'], 0)); ?></span>
                        <span class="mi-card__price-period">/night</span>
                    </div>
                <?php endif; ?>
            </a>
        </div>
    <?php endif; ?>
    
    <div class="mi-card__content">
        <?php if ($show_title && !empty($property['title'])) : ?>
            <h3 class="mi-card__title">
                <a href="<?php echo esc_url($property['permalink']); ?>" class="mi-card__title-link">
                    <?php echo esc_html($property['title']); ?>
                </a>
            </h3>
        <?php endif; ?>
        
        <?php if ($show_location && (!empty($property['city']) || !empty($property['location_terms']))) : ?>
            <div class="mi-card__location">
                <span class="mi-card__icon">📍</span>
                <?php if (!empty($property['city']) && !empty($property['state'])) : ?>
                    <span><?php echo esc_html($property['city'] . ', ' . $property['state']); ?></span>
                <?php elseif (!empty($property['location_terms'])) : ?>
                    <span><?php echo esc_html($property['location_terms'][0]['name']); ?></span>
                <?php endif; ?>
            </div>
        <?php endif; ?>
        
        <?php if ($show_excerpt && !empty($property['excerpt'])) : ?>
            <div class="mi-card__excerpt">
                <?php echo wp_kses_post($property['excerpt']); ?>
            </div>
        <?php endif; ?>
        
        <?php if ($show_meta) : ?>
            <div class="mi-card__meta">
                <?php if (!empty($property['bedrooms'])) : ?>
                    <span class="mi-card__meta-item">
                        <span class="mi-card__icon">🛏️</span>
                        <span><?php echo esc_html($property['bedrooms']); ?> <?php echo esc_html($property['bedrooms'] > 1 ? 'beds' : 'bed'); ?></span>
                    </span>
                <?php endif; ?>
                
                <?php if (!empty($property['bathrooms'])) : ?>
                    <span class="mi-card__meta-item">
                        <span class="mi-card__icon">🚿</span>
                        <span><?php echo esc_html($property['bathrooms']); ?> <?php echo esc_html($property['bathrooms'] > 1 ? 'baths' : 'bath'); ?></span>
                    </span>
                <?php endif; ?>
                
                <?php if (!empty($property['max_guests'])) : ?>
                    <span class="mi-card__meta-item">
                        <span class="mi-card__icon">👥</span>
                        <span><?php echo esc_html($property['max_guests']); ?> <?php echo esc_html($property['max_guests'] > 1 ? 'guests' : 'guest'); ?></span>
                    </span>
                <?php endif; ?>
                
                <?php if (!empty($property['square_feet'])) : ?>
                    <span class="mi-card__meta-item">
                        <span class="mi-card__icon">📏</span>
                        <span><?php echo esc_html(number_format($property['square_feet'])); ?> sq ft</span>
                    </span>
                <?php endif; ?>
            </div>
        <?php endif; ?>
        
        <?php if ($show_amenities && !empty($property['amenities'])) : ?>
            <div class="mi-card__amenities">
                <h4 class="mi-card__amenities-title">Amenities</h4>
                <ul class="mi-card__amenities-list">
                    <?php foreach (array_slice($property['amenities'], 0, 5) as $amenity) : ?>
                        <li class="mi-card__amenity">
                            <?php if (!empty($amenity['icon'])) : ?>
                                <span class="mi-card__amenity-icon"><?php echo esc_html($amenity['icon']); ?></span>
                            <?php endif; ?>
                            <span class="mi-card__amenity-name"><?php echo esc_html($amenity['name']); ?></span>
                        </li>
                    <?php endforeach; ?>
                    
                    <?php if (count($property['amenities']) > 5) : ?>
                        <li class="mi-card__amenity mi-card__amenity--more">
                            <a href="<?php echo esc_url($property['permalink']); ?>" class="mi-card__amenity-more-link">
                                +<?php echo count($property['amenities']) - 5; ?> more
                            </a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        <?php endif; ?>
        
        <?php if ($show_button) : ?>
            <div class="mi-card__actions">
                <a href="<?php echo esc_url($property['permalink']); ?>" class="mi-card__button">
                    <?php echo esc_html($button_text); ?>
                </a>
            </div>
        <?php endif; ?>
    </div>
</div>
