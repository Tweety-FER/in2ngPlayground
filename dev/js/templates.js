angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("comment/comment.html","<div class=\"in2 comment\">\r\n  <div class=\"metadata\">\r\n    <span class=\"author\">{{comment.username}}</span>\r\n    <span class=\"time\">{{comment.time | date:\'dd.MM.yyyy HH:mm\'}}</span>\r\n  </div>\r\n  <div class=\"text\">\r\n    {{comment.text}}\r\n  </div>\r\n  <div class=\"toolbar\">\r\n    <span class=\"like button\" ng-click=\"comment.like()\">Like</span>\r\n    <span class=\"like counter\">{{comment.likes}}</span>\r\n  </div>\r\n</div>");
$templateCache.put("in2Accordion/in2Accordion.template.html","<div class=\"accordion\">\r\n    <h1 class=\"accordionTitle\">{{title}}</h1>\r\n    <ul>\r\n        <ng-transclude></ng-transclude>\r\n    </ul>\r\n</div>\r\n\r\n<style>\r\n    .accordion {\r\n        width: 40em;\r\n        height: auto;\r\n        border: 1px solid gray;\r\n        border-radius: 10px;\r\n        margin-top: 2em;        \r\n        overflow-wrap: break-word;                \r\n    }\r\n\r\n    .accordionItem {        \r\n        border: 1px solid gray;\r\n        border-radius: 10px;\r\n        overflow-wrap: break-word;\r\n        padding: 0.2em;        \r\n        margin-right: 0.5em;\r\n    }\r\n\r\n    .accordionTitle {\r\n        padding-left: 0.4em;\r\n    }\r\n\r\n    .accordionItemVisible {  \r\n        display: normal;\r\n        padding: 0.2em;\r\n    }\r\n\r\n    .accordionItemHidden {        \r\n        display: none;\r\n    }\r\n</style>");
$templateCache.put("in2Accordion/in2AccordionItem.template.html","<li class=\"accordionItem\">\r\n    <h3 ng-click=\"accordionItemCtrl.initializeAccordionItems(parentArray); accordionItemCtrl.openTabWithId($id);\" ng-init=\"myClass = \'accordionItemHidden\';\">{{accordionItemCtrl.title}}</h3>\r\n    <div ng-class=\"myClass\">\r\n        <ng-transclude></ng-transclude>\r\n    </div>\r\n</li>");
$templateCache.put("in2BusinessCard/in2BuisnessCard.template.html","<div ng-click=\"front = !front\" ng-init=\"front = ctrl.getFrontSide()\">\r\n    <div ng-switch on=\"front\">\r\n        <div ng-switch-when=\"true\">        \r\n            <div class=\"buisnessCard\">\r\n                <table class=\"buisnessCardFront\">\r\n                    <tr>\r\n                        <td>\r\n                            <img class=\"buisnessCardFrontLogo\" ng-src=\"{{ctrl.image}}\"/>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>{{ctrl.fullName}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>{{ctrl.company}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>{{ctrl.position}}</td>\r\n                    </tr>\r\n                </table>            \r\n            </div>       \r\n        </div>\r\n        <div ng-switch-when=\"false\">    \r\n            <div class=\"buisnessCard\" >\r\n                <table class=\"buisnessCardBack\">\r\n                    <tr>\r\n                        <td>\r\n                            <img class=\"buisnessCardBackLogo\" ng-src=\"{{ctrl.image}}\"/>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Have a nice day</td>\r\n                    </tr>            \r\n                </table>            \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<style>\r\n    .buisnessCard {\r\n        border: 1px solid black;\r\n        width: 20em;\r\n        height: 10em;\r\n        font-family: Verdana, Cursive;        \r\n    }\r\n\r\n    .buisnessCardFront {\r\n        width: 100%;\r\n        height:100%;\r\n        text-align: left;\r\n    }\r\n\r\n    .buisnessCardFrontLogo {\r\n        float:right;\r\n        width: 25%;\r\n    }\r\n\r\n    .buisnessCardBack {\r\n        width: 100%;\r\n        height:100%;\r\n        text-align: center;\r\n    }\r\n\r\n    .buisnessCardBackLogo {        \r\n        width: 40%;\r\n    }\r\n\r\n</style>");
$templateCache.put("in2BusinessCard/in2BuisnessCardTemplate.html","<style>\r\n    .buisnessCard {\r\n        border: 1px solid black;\r\n        width: 20em;\r\n        height: 10em;\r\n        font-family: Verdana, Cursive;        \r\n    }\r\n\r\n    .buisnessCardFront {\r\n        width: 100%;\r\n        height:100%;\r\n        text-align: left;\r\n    }\r\n\r\n    .buisnessCardFrontLogo {\r\n        float:right;\r\n        width: 25%;\r\n    }\r\n\r\n    .buisnessCardBack {\r\n        width: 100%;\r\n        height:100%;\r\n        text-align: center;\r\n    }\r\n\r\n    .buisnessCardBackLogo {        \r\n        width: 40%;\r\n    }\r\n\r\n</style>\r\n\r\n<div ng-click=\"front = !front\" ng-init=\"front = ctrl.getFrontSide()\">\r\n<div ng-switch on=\"front\">\r\n    <div ng-switch-when=\"true\">        \r\n        <div class=\"buisnessCard\">\r\n            <table class=\"buisnessCardFront\">\r\n                <tr>\r\n                    <td>\r\n                        <img class=\"buisnessCardFrontLogo\" ng-src=\"{{ctrl.image}}\"/>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>{{ctrl.fullName}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>{{ctrl.company}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>{{ctrl.position}}</td>\r\n                </tr>\r\n            </table>            \r\n        </div>       \r\n    </div>\r\n    <div ng-switch-when=\"false\">    \r\n        <div class=\"buisnessCard\" >\r\n            <table class=\"buisnessCardBack\">\r\n                <tr>\r\n                    <td>\r\n                        <img class=\"buisnessCardBackLogo\" ng-src=\"{{ctrl.image}}\"/>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Have a nice day</td>\r\n                </tr>            \r\n            </table>            \r\n        </div>\r\n    </div>\r\n</div>\r\n</div>");
$templateCache.put("in2Menu/menu.template.html","\r\n<div class=\'myMenu\'>\r\n	<div class=\'menuTable\' ng-transclude>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n");
$templateCache.put("in2Menu/menuItem.template.html","<div class=\'menuItem\'>\r\n	{{title}} <ng-transclude></ng-transclude>  \r\n</div>");
$templateCache.put("in2Slideshow/in2Slide.template.html","<h2>{{ title }}</h2><ng-transclude/>");
$templateCache.put("in2Slideshow/in2Slideshow.template.html","<div class=\"slideshowContainer\">\r\n    <button class=\"slideshowLeftArrow\" ng-click=\"ctrl.slideLeft()\" ng-show=\"ctrl.showLeftArrow\"><</button>\r\n    <button class=\"slideshowRightArrow\"ng-click=\"ctrl.slideRight()\" ng-show=\"ctrl.showRightArrow\">></button>\r\n    <div class=\"span\">\r\n        <div class=\"transcludeContainer\">\r\n            <ng-transclude/>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n    .slideshowContainer {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    .transcludeContainer {\r\n        width: 100%;\r\n    }\r\n    \r\n    \r\n    .slideshowContainer .slideshowLeftArrow {\r\n        float: left;\r\n        height: 100%;\r\n    }\r\n    \r\n    .slideshowContainer .slideshowRightArrow {\r\n        float: right;\r\n        height: 100%;\r\n    }\r\n    \r\n    .slideshowContainer .span {\r\n        display: block;\r\n        overflow: hidden;\r\n        padding: 0 5px;\r\n    }\r\n</style>");
$templateCache.put("in2Shuffle/indexStjepanTests.html","<html>\r\n\r\n<head>\r\n	<script src=\"../../dev/js/playground.js\"></script>\r\n</head>\r\n\r\n<!-- <body ng-app=\"in2.playground\">\r\n	<div ng-controller=\"in2ShuffleController\">\r\n		{{1+1}}\r\n	</div>\r\n	<div>\r\n		{{shuffledArray}}\r\n	</div>\r\n</body> -->\r\n<body ng-app=\"in2.playground\">\r\n        <div ng-controller=\"TestController as shuffle\">\r\n            <h1>{{shuffle.array}}</h1>\r\n            {{1+1}}\r\n        }\r\n        }\r\n\r\n        </div>\r\n        \r\n    </body>\r\n</html>");
$templateCache.put("in2Table/in2Table.template.html","<div class=\"tableContainer\">\r\n    <table id=\"tbl\">\r\n		<th ng-repeat=\"column in ctrl.columns\">\r\n			<a href=\"\" class=\"{{column}}\" ng-click=\"order(column)\">{{column}}</a>\r\n			<span class=\"sortorder\" ng-show=\"predicate === column\" ng-class=\"{reverse:reverse}\"></span>\r\n		</th>\r\n		<tr ng-repeat=\"item in ctrl.items | orderBy:predicate:reverse\">\r\n		  <td ng-repeat=\"col in ctrl.columns\">\r\n			{{item[col] || ctrl.default || \'-\'}}\r\n		  </td>\r\n		</tr>\r\n  </table>\r\n</div>");
$templateCache.put("in2Terminal/in2Terminal.template.html","<div class=\"terminalContainer\">\r\n    <div ng-repeat=\"command in ctrl.commandHistory track by $index\">\r\n        {{ ctrl.promptPrefix + command }}\r\n    </div>\r\n    <label for=\"commandInput\">{{ ctrl.promptPrefix }}</label>\r\n    <span>\r\n        <input class=\"terminalPrompt\" ng-keypress=\"ctrl.keypress($event)\" ng-model=\"ctrl.command\" name=\"commandInput\" autofocus>\r\n    </span>\r\n</div>\r\n\r\n<style>\r\n    .terminalContainer {\r\n        background-color: black;\r\n        color: white;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n    }\r\n    \r\n    .terminalPrompt {\r\n        background-color: black;\r\n        color: white;\r\n        width: 100%;\r\n        border: none;\r\n        outline: 0;\r\n    }\r\n    \r\n    .terminalContainer label {\r\n        float: left;\r\n    }\r\n    \r\n    .terminalContainer span {\r\n        display: block;\r\n        overflow: hidden;\r\n        padding: 0 5px;\r\n    }\r\n</style>");
$templateCache.put("tabbed/tab.html","<div class=\"tab body\" ng-show=\"tabs.tabs[name].active\" ng-transclude></div>");
$templateCache.put("tabbed/tabs.html","<div class=\"in2 tabs\">\r\n  <div class=\"headers\">\r\n    <span class=\"header\" ng-class=\"{\'active\' : status.active}\" ng-repeat=\"(tab,status) in tabs.tabs\" ng-click=\"tabs.activate(tab)\">\r\n      {{tab}}\r\n    </span>\r\n  </div>\r\n  <div class=\"panel\" ng-transclude>\r\n  \r\n  </div>\r\n</div>");}]);