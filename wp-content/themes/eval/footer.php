</main>
</div>
<footer id="footer" class="footer" role="contentinfo">
    <div id="copyright" class="footer__copyright">
        <?php echo '<p class="footer__company">', esc_html(get_bloginfo('name')); ?>
        <p class=" footer__jingle">Expert Roofing Solutions</p>
    </div>
    <nav id="footer-menu" class="footer__nav" role="navigation" itemscope
        itemtype="https://schema.org/SiteNavigationElement">
        <?php wp_nav_menu(array('theme_location' => 'footer-menu', 'menu_class' => 'footer__links')); ?>
    </nav>
</footer>
</div>
</body>

</html>