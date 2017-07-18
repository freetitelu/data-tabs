(function dataTabs() {

    var dataTabsLink = document.querySelectorAll('[data-tabs-link]');
    var dataTabsLinkLength = dataTabsLink.length;

    var dataTabsContent = document.querySelectorAll('[data-tabs-content]');
    var dataTabsContentLength = dataTabsContent.length;

    for (var i = 0; i < dataTabsLinkLength; i++) {
        dataTabsLink[i].addEventListener("click", function(event){
            var self = this;
            for (var k = 0; k < dataTabsLinkLength; k++) {
                dataTabsLink[k].classList.remove('tabs_link--active');
            }
            for (var j = 0; j < dataTabsContentLength; j++) {
                dataTabsContent[j].classList.remove('tabs_content--active');
                
                if(dataTabsContent[j].getAttribute('data-tabs-content') == self.getAttribute('data-tabs-link')){
                    dataTabsContent[j].classList.add('tabs_content--active');
                }
            }
            self.classList.add('tabs_link--active');
        }, false);
    }

})();