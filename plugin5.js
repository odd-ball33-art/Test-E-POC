ePoc.onLoad = () => {
    console.log('Plugin test simple chargé');
    return {
        template: 'plugin_template.html',
        shortcode: '[#test_simple]'
    };
};
