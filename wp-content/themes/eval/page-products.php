<?php get_header(); ?>
<?php if (have_posts()):
    while (have_posts()):
        the_post(); ?>
        <article class="product" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="product__thumbnail">
                <?php if (has_post_thumbnail()) {
                    the_post_thumbnail('full', array('itemprop' => 'image'));
                } ?>
            </div>
            <div class="product__content" itemprop="mainContentOfPage">
                <h1 class="product__title" itemprop="name"><?php the_title(); ?></h1>
                <?php the_content(); ?>
                <div class="entry-links"><?php wp_link_pages(); ?></div>
            </div>
        </article>
    <?php endwhile; endif; ?>
<?php get_footer(); ?>