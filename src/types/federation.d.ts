declare module 'propertyService/PropertyApp';
declare module 'propertyViewer/PropertyViewerApp' {
    import type {Property} from "../features/properties";

    interface PropertyAppProps {
        properies: Property[];
    }

    const PropertyApp: React.ComponentType<any>;
    export default PropertyApp;

    const PropertyViewerApp: React.ComponentType<any>;
    export default PropertyViewerApp;
}