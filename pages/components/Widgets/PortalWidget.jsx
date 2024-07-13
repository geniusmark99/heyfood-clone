import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import LoaderSkeletonWidget from './LoaderSkeletonWidget';

const PortalWidget = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const [portalElement, setPortalElement] = useState(null);

    useEffect(() => {
        const portalRoot = document.getElementById('sort-widget-container');
        setPortalElement(portalRoot);
        setMounted(true);
    }, []);

    return mounted && portalElement ? createPortal(children, portalElement) : <LoaderSkeletonWidget />;
};

export default PortalWidget;
