import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalWidget = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const [portalElement, setPortalElement] = useState(null);

    useEffect(() => {
        const portalRoot = document.getElementById('sort-widget-container');
        setPortalElement(portalRoot);
        setMounted(true);
    }, []);

    return mounted && portalElement ? createPortal(children, portalElement) : null;
};

export default PortalWidget;
