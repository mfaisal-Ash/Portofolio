import React, { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
    const googleTranslateRef = useRef(null);
    const translateInstanceRef = useRef(null);

    useEffect(() => {
        let intervalId;
        const checkGoogleTranslate = () => {
            if (window.google?.translate) {
                clearInterval(intervalId);
                translateInstanceRef.current = new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'id',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        includedLanguages: 'en,id,ja',
                    },
                    googleTranslateRef.current
                );
            }
        };

        intervalId = setInterval(checkGoogleTranslate, 100);
        return () => clearInterval(intervalId); // Clear interval on unmount
    }, []);

    useEffect(() => {
        // Custom CSS untuk menyembunyikan elemen yang tidak diperlukan dan mengatur dropdown bahasa
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-logo-link {
                display: none !important;
            }
            .goog-te-gadget .goog-te-gadget-simple {
                display: flex !important;
                align-items: center;
                height: 20px !important;
            }
            .goog-te-gadget-simple > img {
                display: none !important;
            }
            .goog-te-gadget-simple > div {
                display: none !important;
            }
            .goog-te-gadget-simple .goog-te-combo {
                background-color: #ffffff !important;
                color: #000000 !important;
                border: 1px solid #ccc !important;
                border-radius: 4px !important;
                padding: 5px 8px !important;
                font-size: 14px !important;
                line-height: 1.5 !important;
                height: auto !important;
                box-shadow: none !important;
                transition: none !important;
                width: auto !important;
            }
            .goog-te-gadget-simple .goog-te-combo option {
                display: none; /* Sembunyikan opsi bahasa individu */
            }
            .skiptranslate, iframe{
                
            }
            
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div>
            <div id="google_translate_element" ref={googleTranslateRef}></div>
        </div>
    );
};

export default GoogleTranslate;
