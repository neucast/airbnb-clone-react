import React, {Suspense} from 'react';

const PropertyViewerApp = React.lazy(() => import('propertyViewer/PropertyViewerApp'));

const RemotePropertyViewerApp = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PropertyViewerApp/>
        </Suspense>
    );
};

export default RemotePropertyViewerApp;