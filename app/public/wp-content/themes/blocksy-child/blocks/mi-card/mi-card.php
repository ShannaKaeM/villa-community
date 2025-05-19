<?php
/**
 * MI Card Template
 *
 * @param array $args Template arguments.
 * @param object $block Block object.
 * @param array $content_data Content data for the card.
 */

// Set defaults based on block attributes
$defaults = [
    'variant' => 'property',
    'layout' => 'grid',
    'columns' => 3,
    'showImage' => true,
    'showTitle' => true,
    'showExcerpt' => true,
    'showMeta' => true,
    'showAmenities' => true,
    'showLocation' => true,
    'showPrice' => true,
    'showButton' => true,
    'buttonText' => 'View Details',
    'featuredOnly' => false,
    'className' => '',
];

// Get attributes from block
$block_attrs = [];
if (isset($block) && isset($block->attributes)) {
    foreach ($defaults as $key => $default) {
        if (isset($block->attributes[$key])) {
            $block_attrs[$key] = $block->attributes[$key];
        }
    }
}

// Merge defaults with block attributes and args
$args = wp_parse_args($args, array_merge($defaults, $block_attrs));

// Convert camelCase to snake_case for template variables
$show_image = $args['showImage'];
$show_title = $args['showTitle'];
$show_excerpt = $args['showExcerpt'];
$show_meta = $args['showMeta'];
$show_amenities = $args['showAmenities'];
$show_location = $args['showLocation'];
$show_price = $args['showPrice'];
$show_button = $args['showButton'];
$button_text = $args['buttonText'];

// Get the variant
$variant = $args['variant'];

// Get the class name
$class_name = 'mi-card';

// Add variant class
$class_name .= ' mi-card--' . $variant;

// Add layout class
$class_name .= ' mi-card--' . $args['layout'];

// Add columns class
$class_name .= ' mi-card--columns-' . $args['columns'];

// Add custom class if provided
if (!empty($args['className'])) {
    $class_name .= ' ' . $args['className'];
}

// Get the content data
$content_data = $content_data ?? [];

// Get the block alignment
$align_class = isset($block->attributes['align']) ? $block->attributes['align'] : '';
if (!empty($align_class)) {
    $class_name .= ' align' . $align_class;
}

// Get the block ID
$block_id = isset($block->attributes['id']) ? $block->attributes['id'] : 'mi-card-' . uniqid();

// Add custom CSS for columns
$columns = $args['columns'];
$column_width = 100 / $columns;
?>

<style>
    #<?php echo esc_attr($block_id); ?> .mi-card__container {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
    }
    
    #<?php echo esc_attr($block_id); ?> .mi-card--grid .mi-card__item {
        width: calc(<?php echo $column_width; ?>% - 30px);
        margin: 0 15px 30px;
    }
    
    #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__item {
        width: calc(100% - 30px);
        margin: 0 15px 30px;
        display: flex;
    }
    
    #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__image {
        width: 35%;
    }
    
    #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__content {
        width: 65%;
        padding-left: 20px;
    }
    
    @media (max-width: 768px) {
        #<?php echo esc_attr($block_id); ?> .mi-card--grid .mi-card__item {
            width: calc(50% - 30px);
        }
    }
    
    @media (max-width: 576px) {
        #<?php echo esc_attr($block_id); ?> .mi-card--grid .mi-card__item,
        #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__item {
            width: calc(100% - 30px);
        }
        
        #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__item {
            flex-direction: column;
        }
        
        #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__image,
        #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__content {
            width: 100%;
        }
        
        #<?php echo esc_attr($block_id); ?> .mi-card--list .mi-card__content {
            padding-left: 0;
            padding-top: 15px;
        }
    }
</style>

<div id="<?php echo esc_attr($block_id); ?>" class="<?php echo esc_attr($class_name); ?>">
    <?php if (!empty($content_data)) : ?>
        <div class="mi-card__container">
            <?php foreach ($content_data as $item) : ?>
                <?php 
                // Include the variant template
                $variant_template = __DIR__ . '/variants/' . $variant . '.php';
                if (file_exists($variant_template)) {
                    include $variant_template;
                } else {
                    // Fallback to default template
                    include __DIR__ . '/variants/default.php';
                }
                ?>
            <?php endforeach; ?>
        </div>
    <?php else : ?>
        <div class="mi-card__empty">
            <p>No content found. Please check your content source settings.</p>
        </div>
    <?php endif; ?>
</div>
