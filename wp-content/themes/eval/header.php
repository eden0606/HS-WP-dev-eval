<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="wrapper" class="hfeed">
        <header id="header" class="header" role="banner">
            <div id="user-location"></div>

            <!-- TODO REMOVE??
             <?php
             if (is_front_page() || is_home() || is_front_page() && is_home()) {
                 echo '<h1>';
             }
             ?> -->
            <nav id="menu" class="header__nav" role="navigation" itemscope
                itemtype="https://schema.org/SiteNavigationElement">
                <?php wp_nav_menu(array('theme_location' => 'main-menu', 'menu_class' => 'header__links')); ?>
            </nav>
        </header>
        <div id="container">
            <main id="content" role="main">