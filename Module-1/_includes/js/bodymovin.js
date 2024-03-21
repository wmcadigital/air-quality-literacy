$("#preso").css('pointer-events', 'none');

$('body').prepend('<iframe src="_includes/bodymovin/index.html" id="iframe"style="border:none;width:100%;height:100%;position:fixed;overflow:hidden;display:block;z-index:2;opacity:1;"></iframe>');

$('#presentation').each(function () {
    this.style.setProperty( 'pointer-events', 'none', 'important' );
});
