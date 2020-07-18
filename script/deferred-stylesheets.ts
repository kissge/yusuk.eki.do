[...document.querySelectorAll<HTMLLinkElement>('link[as="style"]')].forEach((link) => (link.rel = 'stylesheet'));
