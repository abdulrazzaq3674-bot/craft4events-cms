<?php
/**
 * Plugin Name: Create 4 Moments Portfolio Engine
 * Description: Custom Post Types and REST API endpoints for Create 4 Moments luxury event management.
 * Version: 1.0.0
 * Author: Create 4 Moments Dev
 */

if (!defined('ABSPATH')) exit;

function c4m_register_theme_cpt() {
    $labels = array(
        'name'               => 'Event Themes',
        'singular_name'      => 'Event Theme',
        'menu_name'          => 'Event Portfolio',
        'add_new'            => 'Add New Theme',
        'add_new_item'       => 'Add New Event Theme',
        'edit_item'          => 'Edit Event Theme',
        'new_item'           => 'New Event Theme',
        'view_item'          => 'View Event Theme',
        'search_items'       => 'Search Themes',
        'not_found'          => 'No themes found',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'show_in_rest'        => true, // Enables Headless REST API
        'rest_base'           => 'c4m-themes',
        'menu_icon'           => 'dashicons-format-gallery',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'taxonomies'          => array('category'),
    );

    register_post_type('c4m_theme', $args);
}
add_action('init', 'c4m_register_theme_cpt');
