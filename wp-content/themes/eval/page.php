<?php get_header(); ?>
<?php if (have_posts()):
    while (have_posts()):
        the_post(); ?>
        <article class="hero">
            <div class="entry-content" itemprop="mainContentOfPage">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
<?php get_footer(); ?>