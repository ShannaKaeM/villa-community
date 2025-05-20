<?php
/**
 * Template Name: Block Debug
 * 
 * A template to debug block registration
 */

get_header();
?>

<div class="container">
    <div class="content">
        <h1><?php the_title(); ?></h1>
        
        <?php
        // Include the block debug script
        include_once get_stylesheet_directory() . '/blocks/block-debug.php';
        
        // Regular page content
        if (have_posts()) :
            while (have_posts()) : the_post();
                the_content();
            endwhile;
        endif;
        ?>
    </div>
</div>

<?php
get_footer();
?>
