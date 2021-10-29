const configs = {
    'convertToCurrency': 'USD',
    'hideOnScroll': true,
    'convertMetrics': true,
    'addOpenLinks': true,
    'addPasteButton': true,
    'convertCurrencies': true,
    'convertTime': true,
    'performSimpleMathOperations': false,
    'preferredMetricsSystem': 'metric',
    'showTranslateButton': true,
    'languageToTranslate': navigator.language || navigator.userLanguage || 'en',
    'ratesLastFetchedDate': '',
    'useCustomStyle': false,
    'tooltipBackground': '#3B3B3B',
    'tooltipInvertedBackground': '#bfbfbf',
    'tooltipOpacity': 1.0,
    'addTooltipShadow': false,
    'shadowOpacity': 0.5,
    'borderRadius': 3,
    'changeTextSelectionColor': false,
    'textSelectionBackground': '#338FFF',
    'textSelectionColor': '#ffffff',
    'shiftTooltipWhenWebsiteHasOwn': false,
    'addActionButtonsForTextFields': false,
    'removeSelectionOnActionButtonClick': true,
    'draggableTooltip': true,
    'enabled': true,
    'preferredSearchEngine': 'google',
    'hideOnKeypress': true,
    'showOnMapButtonEnabled': true,
    'showEmailButton': true,
    'preferredNewEmailMethod': 'mailto',
    'customSearchUrl': '',
    'preferredMapsService': 'google',
    'addColorPreviewButton': true,
    'secondaryTooltipEnabled': true,
    'secondaryTooltipIconSize': 16,
    'showSecondaryTooltipTitleOnHover': false,
    'excludedDomains': '',
    'addPhoneButton': true,
    'showUnconvertedValue': false,
    'debugMode': false,
    'buttonsStyle': 'onlylabel', /// Possible: onlylabel, onlyicon, iconlabel
    'addDragHandles': true,
    'snapSelectionToWord': true,
    'preferCurrencySymbol': false,
    'shouldOverrideWebsiteSelectionColor': false,
    'disableWordSnappingOnCtrlKey': true,
    'showButtonLabelOnHover': true,
    'animationDuration': 250,
    'wordSnappingBlacklist': 'github.com',
    'dontSnapTextfieldSelection': true,
    'tooltipRevealEffect': 'moveUpTooltipEffect',
    'textSelectionBackgroundOpacity': 1.0,
    'updateRatesEveryDays': 18,
    'fontSize': 12.5,
    'maxIconsInRow': 5,
    'secondaryTooltipLayout': 'verticalLayout', /// Possible values: 'horizontalLayout', 'verticalLayout'
    'liveTranslation': false,
    'reverseTooltipButtonsOrder': false,
    'recreateTooltipAfterScroll': true,
    'applyConfigsImmediately': false,
    'invertColorOnDarkWebsite': true,
    'addPasteOnlyEmptyField': true,
    'hideTranslateButtonForUserLanguage': true,
    'delayToRevealSearchTooltip': 350,
    'preferredTranslateService': 'google',
    'tooltipPosition': 'selectionCenter', /// Possible values: 'selectionCenter', 'overCursor'
    'customSearchButtons': [
        {
            'url': 'https://www.youtube.com/results?search_query=%s',
            'title': 'YouTube',
            // 'icon': 'https://icons-for-free.com/iconfiles/png/512/video+youtube+icon-1320192294490006733.png',
            'enabled': true
        },
        {
            'url': 'https://open.spotify.com/search/%s',
            'title': 'Spotify',
            // 'icon': 'https://image.flaticon.com/icons/png/512/2111/2111624.png',
            'enabled': true
        },
        {
            'url': 'https://aliexpress.ru/wholesale?catId=&SearchText=%s',
            'title': 'Ali (ru)',
            'icon': 'https://img.icons8.com/color/452/aliexpress.png',
            'enabled': true
        },
        {
            'url': 'https://www.aliexpress.com/wholesale?SearchText=%s',
            'title': 'Ali (en)',
            // 'icon': 'https://img.icons8.com/color/452/aliexpress.png',
            'enabled': false
        },
        {
            'url': 'https://www.amazon.com/s?k=%s',
            'title': 'Amazon',
            'icon': 'https://mapleleafdeals.com/wp-content/uploads/2020/08/amazon.png',
            'enabled': true
        },
        {
            'url': 'https://wikipedia.org/w/index.php?search=%s',
            'title': 'Wikipedia',
            // 'icon': 'https://pngimg.com/uploads/wikipedia/wikipedia_PNG16.png',
            'enabled': false
        },
        {
            'url': 'https://www.imdb.com/find?s=alt&q=%s',
            'title': 'IMDB',
            // 'icon': 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png',
            'enabled': false
        },
        {
            'url': 'https://google.com/search?q=site:%w %s',
            'title': 'Search on website',
            'enabled': false
        },
    ]
};