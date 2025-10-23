/**
 * API Service - Backend Integration Layer
 * Handles all communication with the Node.js backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://fsd-stattools.onrender.com';

/**
 * Generic API request handler with error handling
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// ============================================
// API METHODS
// ============================================

/**
 * Health check - verify backend is running
 */
export const checkHealth = async () => {
  return apiRequest<{
    status: string;
    timestamp: string;
    uptime: number;
  }>('/health');
};

/**
 * Get server information
 */
export const getServerInfo = async () => {
  return apiRequest<{
    name: string;
    version: string;
    description: string;
    endpoints: string[];
  }>('/info');
};

/**
 * Calculate mean from backend
 */
export const calculateMean = async (data: number[]) => {
  return apiRequest<{
    mean: number;
    count: number;
    timestamp: string;
  }>('/calculate/mean', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
};

/**
 * Calculate comprehensive statistics from backend
 */
export const calculateStats = async (data: number[]) => {
  return apiRequest<{
    mean: number;
    median: number;
    std: number;
    variance: number;
    min: number;
    max: number;
    range: number;
    count: number;
    timestamp: string;
  }>('/calculate/stats', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
};

/**
 * Save a dataset to the backend
 */
export const saveDataset = async (
  name: string,
  data: number[],
  description?: string
) => {
  return apiRequest<{
    message: string;
    dataset: {
      id: number;
      name: string;
      data: number[];
      description: string;
      createdAt: string;
      count: number;
    };
  }>('/save-data', {
    method: 'POST',
    body: JSON.stringify({ name, data, description }),
  });
};

/**
 * Get all saved datasets
 */
export const getDatasets = async () => {
  return apiRequest<{
    datasets: Array<{
      id: number;
      name: string;
      data: number[];
      description: string;
      createdAt: string;
      count: number;
    }>;
    count: number;
  }>('/datasets');
};

/**
 * Get a specific dataset by ID
 */
export const getDataset = async (id: number) => {
  return apiRequest<{
    id: number;
    name: string;
    data: number[];
    description: string;
    createdAt: string;
    count: number;
  }>(`/datasets/${id}`);
};

/**
 * Delete a dataset
 */
export const deleteDataset = async (id: number) => {
  return apiRequest<{
    message: string;
    dataset: {
      id: number;
      name: string;
    };
  }>(`/datasets/${id}`, {
    method: 'DELETE',
  });
};

/**
 * Check if backend is available
 */
export const isBackendAvailable = async (): Promise<boolean> => {
  try {
    await checkHealth();
    return true;
  } catch {
    return false;
  }
};

// Export all methods as a single object
export const api = {
  checkHealth,
  getServerInfo,
  calculateMean,
  calculateStats,
  saveDataset,
  getDatasets,
  getDataset,
  deleteDataset,
  isBackendAvailable,
};