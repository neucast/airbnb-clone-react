import { create } from "zustand";
import { PropertiesApi } from "../api/propertiesApi";
import type {Property} from "./types.ts";

interface PropertiesState {
    properties: Property[];
    loading: boolean;
    searchTerm: string;
    sortedProperties: Property[];
    loadProperties: () => Promise<void>;
    setSearchTerm: (term: string) => void;
}

// export const usePropertiesStore = create<PropertiesState>((set, get) => ({
export const usePropertiesStore = create<PropertiesState>((set) => ({
    properties: [],
    loading: false,
    searchTerm: "",
    sortedProperties: [],
    loadProperties: async () => {
        set({loading: true});

        const properties = await PropertiesApi.getProperties();

        set({
            properties,
            sortedProperties: properties,
            loading: false,
        })
    },
    setSearchTerm: (term: string) => {
        set({ searchTerm: term });
    },
}));