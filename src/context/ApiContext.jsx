import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

// Create the context
const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
    const { user, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [aptcount, setAptcount] = useState([])

    // API base URL
    const API_URL = 'https://haus.menthealventures.com/api/v1/';
    // const API_URL = 'http://localhost:5000/api/v1/';

    // Create axios instance with base configuration
    const api = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Add request interceptor to add auth token
    api.interceptors.request.use(
        (config) => {
            // Get token from cookies
            const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
            // console.log("got token", token)

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Add response interceptor to handle common errors
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                // Handle unauthorized access - this will be handled by AuthContext
                console.error('Unauthorized access');
            }
            return Promise.reject(error);
        }
    );

    // Apartment related API calls
    // const apartmentApi = {
    // Create a new apartment
    const createApartment = async (apartmentData) => {
        setLoading(true);
        setError(null);
        try {
            // Simple direct API call with the data object
            const response = await api.post('apartment/createapartment', apartmentData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create apartment');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // Get all apartments
    const getApartments = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get('apartment/my-apartments');


            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch apartments');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // Get a specific apartment
    const getApartment = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`apartment/apartment/${id}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch apartment');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // Update an apartment
    const updateApartment = async (id, apartmentData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.patch(`apartment/apartment/${id}`, apartmentData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update apartment');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // Delete an apartment
    const deleteApartment = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.delete(`apartment/deleteapartment/${id}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete apartment');
            throw err;
        } finally {
            setLoading(false);
        }
    }
    // };

    // unit apis
    // Unit related API calls

    // Create a new unit
    const createUnit = async (unitData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('unit/createunit', unitData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create unit');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // Get all units for an apartment
    const getApartmentUnits = async (apartmentId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`/unit/apartment/${apartmentId}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch units');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // Get a specific unit
    const getUnit = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`/unit/${id}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch unit');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // Update a unit
    const updateUnit = async (id, unitData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.patch(`/unit/${id}`, unitData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update unit');
            throw err;
        } finally {
            setLoading(false);
        }
    }


    // updateTenant
    const updateUser = async (id, updateFormData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.patch(`/tenant/updatetenant/${id}`, updateFormData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update tenant');
            throw err;
        } finally {
            setLoading(false);
        }

    }

    // Delete a unit
    const deleteUnit = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.delete(`/unit/deleteunit/${id}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete unit');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    // delete user
    const deleteUser = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.delete(`tenant/deletetenant/${id}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete tenant');
            throw err;
        } finally {
            setLoading(false);
        }
    }


    // user apis
    const createUser = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('tenant/createtenant', userData);
            const selectedUnit = userData?.currentUnit

            const data = response.data;
            console.log("userdata", data?.data?._id)
            if (selectedUnit) {
                await updateUnit(selectedUnit, { status: "occupied", currentTenant: data?.data?._id })
            }
            return
            return response.data;

        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create tenant');
            throw err;
        } finally {
            setLoading(false);
        }
    }


    const getApartmentTenants = async (apartmentId) => {
        setLoading(true)
        setError(null)

        console.log("selectedid", apartmentId)

        try {
            const response = await api.get(`tenant/apartment/${apartmentId}`);
            return response.data;

        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create tenant');
            throw err;

        }
        finally {
            setLoading(false);
        }

    }

    // billing apis
    const createBill = async (billData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('billing/createbill', billData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create bill');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getTenantBills = async (tenantId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`billing/tenant/${tenantId}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch tenant bills');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getBill = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`billing/${id}`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch bill');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const recordPayment = async (id, paymentData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post(`billing/${id}/payment`, paymentData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to record payment');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const generateMonthlyBills = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('billing/generate-monthly');
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to generate monthly bills');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getOverdueBills = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get('billing/overdue');
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch overdue bills');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getTenantBillingSummary = async (tenantId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`billing/tenant/${tenantId}/summary`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch billing summary');
            throw err;
        } finally {
            setLoading(false);
        }
    };


    // chat
    const getChats = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get(`chat/getchats`);
            return response;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch chats');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const startChat = async (tenantId) => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.post(`chat/start`, { tenantId });
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to start chat');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getMessages = async (chatId) => {
        console.log("chatid",chatId)
        try {
            setLoading(true);
            setError(null);
            const response = await api.get(`chat/${chatId}/messages`);
            return response;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch messages');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const sendMessage = async (messageData) => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.post(`chat/${messageData.chatId}/messages`,
                { content: messageData.content });
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send message');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const markMessagesAsRead = async (chatId) => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.put(`chat/${chatId}/read`);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to mark messages as read');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const chatApi = {
        getChats,
        startChat,
        getMessages,
        sendMessage,
        markMessagesAsRead
    };





    // Context value
    const value = {
        loading,
        error,
        getApartments,
        createApartment,
        isAuthenticated,
        createUnit,
        getApartmentUnits,
        createUser,
        updateUnit,
        getApartmentTenants,
        createBill,
        getTenantBills,
        getBill,
        recordPayment,
        generateMonthlyBills,
        getOverdueBills,
        getTenantBillingSummary,
        updateUser,
        deleteUser,
        deleteApartment,
        deleteUnit,
        chatApi,API_URL
    };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// Custom hook to use the API context
export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};

export default ApiContext; 