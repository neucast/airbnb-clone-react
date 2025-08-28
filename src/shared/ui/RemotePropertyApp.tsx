import React, {Suspense} from 'react';

const PropertyApp = React.lazy(() => import('propertyService/PropertyApp'));

const RemotePropertyApp = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PropertyApp/>
        </Suspense>
    );
};

export default RemotePropertyApp;