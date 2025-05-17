<?php
/**
 * Main template file
 */

// Load Timber
$context = Timber\Timber::context();
$context['posts'] = Timber::get_posts();

Timber::render('templates/index.twig', $context);
