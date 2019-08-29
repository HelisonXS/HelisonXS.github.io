$(document).ready(function(){
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_active)', function() {
        $(this)
          .addClass('catalog_active').siblings().removeClass('catalog_active')
          .closest('div.container').find('div.catalog_article').removeClass('catalog_article_active').eq($(this).index()).addClass('catalog_article_active');
      });
});