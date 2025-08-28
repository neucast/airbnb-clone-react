import React, {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

const PropertyViewerApp = React.lazy(() => import('propertyViewer/PropertyViewerApp'));

const RemotePropertyViewerApp = () => {
    return (
        <ErrorBoundary fallback={<div>Error loading property viewer app</div>}>
            <Suspense fallback={<div>Loading...</div>}>
                <PropertyViewerApp/>
            </Suspense>
        </ErrorBoundary>
    );
};

export default RemotePropertyViewerApp;